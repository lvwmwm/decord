// Module ID: 4312
// Function ID: 37789
// Name: MAX_THUMBNAIL_COUNT
// Dependencies: []
// Exports: getBackgroundImageUrl, getEmbedPreviewImageUrl, getThumbnailImage

// Module 4312 (MAX_THUMBNAIL_COUNT)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/media_channel/MediaPostThumbnailUtils.tsx");

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
    const obj2 = require(dependencyMap[0]);
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
        const obj = require(dependencyMap[0]);
      }
    }
    return tmp;
  }
};
