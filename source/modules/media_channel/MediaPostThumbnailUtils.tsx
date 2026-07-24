// Module ID: 4316
// Function ID: 37822
// Name: MAX_THUMBNAIL_COUNT
// Dependencies: [4317, 2]
// Exports: getBackgroundImageUrl, getEmbedPreviewImageUrl, getThumbnailImage

// Module 4316 (MAX_THUMBNAIL_COUNT)
const result = require("set").fileFinishedImporting("modules/media_channel/MediaPostThumbnailUtils.tsx");

export const MAX_THUMBNAIL_COUNT = 4;
export const getEmbedPreviewImageUrl = function getEmbedPreviewImageUrl(arg0) {
  let image;
  let thumbnail;
  if (null != arg0) {
    ({ thumbnail, image } = arg0);
    if (null != thumbnail) {
      let url2 = thumbnail.proxy_url;
      if (null == url2) {
        url2 = thumbnail.url;
      }
      return url2;
    } else if (null != image) {
      let url = image.proxy_url;
      if (null == url) {
        url = image.url;
      }
      return url;
    }
  }
};
export const getBackgroundImageUrl = function getBackgroundImageUrl(coverImage) {
  if (obj.isAnimatedImageUrl(coverImage)) {
    const _HermesInternal = HermesInternal;
    let combined = "" + coverImage + "?format=webp";
  } else {
    combined = coverImage;
    const obj2 = require(4317) /* urlMatchesFileExtension */;
  }
  return combined;
};
export const getThumbnailImage = function getThumbnailImage(thumbnail) {
  let proxy_url;
  let url;
  if (null != thumbnail) {
    ({ url, proxy_url } = thumbnail);
    let tmp = url;
    if (null != url) {
      tmp = url;
      if (null != proxy_url) {
        let combined = proxy_url;
        if (obj.isVideoUrl(url)) {
          const _HermesInternal = HermesInternal;
          combined = "" + proxy_url + "?format=webp";
        }
        tmp = combined;
        obj = require(4317) /* urlMatchesFileExtension */;
      }
    }
    return tmp;
  }
};
