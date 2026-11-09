// Module ID: 6182
// Function ID: 6183
// Name: MediaPostThumbnailUtils
// Dependencies: [6183, 6185, 2]
// Exports: getBackgroundImageUrl, getEmbedPreviewImageUrl, getThumbnailImage

// Module 6182 (MediaPostThumbnailUtils)
import MediaFormatTesters from "MediaFormatTesters" /* 6183 */;
import MediaFormatParamUtils from "MediaFormatParamUtils" /* 6185 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_channel/MediaPostThumbnailUtils.tsx");

export const MAX_THUMBNAIL_COUNT = 4;
export function getEmbedPreviewImageUrl(arg0) {
  let image;
  let thumbnail;
  if (null != arg0) {
    let tmp;
    ({ thumbnail, image } = arg0);
    if (null != thumbnail) {
      let url2 = thumbnail.proxy_url;
      if (url2 == null) {
        url2 = thumbnail.url;
      }
      tmp = url2;
    } else if (null != image) {
      let url = image.proxy_url;
      if (url == null) {
        url = image.url;
      }
      tmp = url;
    }
    return tmp;
  }
}
export function getBackgroundImageUrl(coverImage) {
  let withMediaFormatResult;
  const obj = MediaFormatTesters;
  if (obj.isAnimatedImageUrl(coverImage)) {
    const tmpResult = MediaFormatParamUtils;
    withMediaFormatResult = tmpResult.withMediaFormat(coverImage, "webp");
  } else {
    withMediaFormatResult = coverImage;
    MediaFormatTesters;
  }
  return withMediaFormatResult;
}
export function getThumbnailImage(thumbnail) {
  let proxy_url;
  let url;
  if (null != thumbnail) {
    ({ url, proxy_url } = thumbnail);
    let tmp = url;
    if (null != url) {
      tmp = url;
      if (null != proxy_url) {
        let withMediaFormatResult = proxy_url;
        const obj = MediaFormatTesters;
        const tmp2 = require;
        if (obj.isVideoUrl(url)) {
          const tmp2Result = tmp2(6185);
          withMediaFormatResult = tmp2Result.withMediaFormat(proxy_url, "webp");
        }
        tmp = withMediaFormatResult;
      }
    }
    return tmp;
  }
}
