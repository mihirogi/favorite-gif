import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { map, reduce, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  giphyKey = '';
  tenorKey = '';

  giphyItems$: Observable<string[]>;
  tenorItems$: Observable<string[]>;
  mergeItems$: Observable<string[]>;

  constructor(private http: HttpClient) {}

  searchForGiphy(keyword: string): Observable<string[]> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.giphyKey}&q=${keyword}&limit=2&offset=0&rating=g&lang=en`;
    return (this.giphyItems$ = this.http.get<Giphy>(url).pipe(
      map((v) => v.data),
      map((v) => v.map((r) => r.images.original.url))
    ));
  }

  searchForTenor(keyword: string): Observable<string[]> {
    const url = `https://api.tenor.com/v1/search?q=${keyword}&key=${this.tenorKey}&limit=2&pos=0`;
    return (this.tenorItems$ = this.http.get<Tenor>(url).pipe(
      map((v) => v.results),
      map((v) => v.map((r) => r.media[0].gif.url))
    ));
  }

  searchForMerge(keyword: string): Observable<string[]> {
    this.searchForGiphy(keyword);
    this.searchForTenor(keyword);
    return (this.mergeItems$ = merge(this.giphyItems$, this.tenorItems$).pipe(
      reduce((res, item) => res.concat(item), []),
      tap(console.log)
    ));
  }
}
interface Giphy {
  data: IGif[];
}

interface IRendition {
  width: number;
  height: number;
}

interface IImage extends IRendition {
  url: string;
  size?: string;
}

interface IMP4 {
  mp4: string;
  mp4_size: string;
}

interface IWebP {
  webp: string;
  webp_size: string;
}

type ImageAllTypes = IImage & IWebP & IMP4;

interface IImages {
  fixed_height_still: IImage;
  original_still: IImage;
  fixed_width: ImageAllTypes;
  fixed_height_small_still: IImage;
  fixed_height_downsampled: IImage & IWebP;
  preview: IImage;
  fixed_height_small: ImageAllTypes;
  downsized_still: IImage;
  downsized: IImage;
  downsized_large: IImage;
  fixed_width_small_still: IImage;
  preview_webp: IImage;
  fixed_width_still: IImage;
  fixed_width_small: ImageAllTypes;
  downsized_small: IImage & IMP4;
  fixed_width_downsampled: IImage & IWebP;
  downsized_medium: IImage;
  original: ImageAllTypes;
  fixed_height: ImageAllTypes;
  looping: IMP4;
  original_mp4: IImage;
  preview_gif: IImage;
  '480w_still': IImage;
}

interface IBottleData {
  tid?: string;
  tags?: string[];
}

interface IGif {
  type: 'video' | 'gif';
  id: string | number;
  slug: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_indexable: boolean;
  is_sticker: boolean;
  import_datetime: string;
  trending_datetime: string;
  images: IImages;
  title: string;
  is_hidden: boolean;
  is_scheduled: boolean;
  is_removed: boolean;
  tags: string[];
  bottle_data: IBottleData;
  analytics_response_payload: string;
}

interface Nanomp4 {
  url: string;
  dims: number[];
  duration: number;
  preview: string;
  size: number;
}

interface Nanowebm {
  url: string;
  dims: number[];
  preview: string;
  size: number;
}

interface Tinygif {
  url: string;
  dims: number[];
  preview: string;
  size: number;
}

interface Tinymp4 {
  url: string;
  dims: number[];
  duration: number;
  preview: string;
  size: number;
}

interface Tinywebm {
  url: string;
  dims: number[];
  preview: string;
  size: number;
}

interface Webm {
  url: string;
  dims: number[];
  preview: string;
  size: number;
}

interface Gif {
  url: string;
  dims: number[];
  preview: string;
  size: number;
}

interface Mp4 {
  url: string;
  dims: number[];
  duration: number;
  preview: string;
  size: number;
}

interface Loopedmp4 {
  url: string;
  dims: number[];
  duration: number;
  preview: string;
  size: number;
}

interface Mediumgif {
  url: string;
  dims: number[];
  preview: string;
  size: number;
}

interface Nanogif {
  url: string;
  dims: number[];
  preview: string;
  size: number;
}

interface Medium {
  nanomp4: Nanomp4;
  nanowebm: Nanowebm;
  tinygif: Tinygif;
  tinymp4: Tinymp4;
  tinywebm: Tinywebm;
  webm: Webm;
  gif: Gif;
  mp4: Mp4;
  loopedmp4: Loopedmp4;
  mediumgif: Mediumgif;
  nanogif: Nanogif;
}

interface Result {
  tags: any[];
  url: string;
  media: Medium[];
  created: number;
  shares: number;
  itemurl: string;
  composite?: any;
  hasaudio: boolean;
  title: string;
  id: string;
}

interface Tenor {
  weburl: string;
  results: Result[];
  next: string;
}
