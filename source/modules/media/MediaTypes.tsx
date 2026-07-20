// Module ID: 4350
// Function ID: 38567
// Name: toContentScanMetadata
// Dependencies: []
// Exports: embedMediaToMediaItem, getMediaItemDisplayUrl, getUnfurledMediaItemType, isVisualUnfurledMediaItem, messageAttachmentToMediaItem, toUnfurledMediaItem

// Module 4350 (toContentScanMetadata)
function toContentScanMetadata(content_scan_metadata) {
  return { version: content_scan_metadata.version, flags: content_scan_metadata.flags };
}
function messageAttachmentToUnfurledMediaItem(flags) {
  let obj = require(dependencyMap[1]);
  flags = flags.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  let num2 = 0;
  if (obj.hasFlag(num, MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA)) {
    num2 = obj.EXPLICIT | 0;
  }
  const flags2 = flags.flags;
  let num3 = 0;
  if (null != flags2) {
    num3 = flags2;
  }
  let num4 = 0;
  if (obj2.hasFlag(num3, MessageAttachmentFlags.IS_ANIMATED)) {
    num4 = obj.IS_ANIMATED | 0;
  }
  obj = { url: flags.url, proxyUrl: flags.proxy_url, height: flags.height, width: flags.width, contentType: flags.content_type, originalContentType: flags.original_content_type, placeholder: flags.placeholder, placeholderVersion: flags.placeholder_version, loadingState: require(dependencyMap[2]).UnfurledMediaLoadingState.LOADED_SUCCESS };
  let tmp3;
  if (null != flags.content_scan_version) {
    obj = { version: flags.content_scan_version, flags: num2 };
    tmp3 = obj;
  }
  obj.contentScanMetadata = tmp3;
  obj.flags = num4;
  return obj;
}
function getMessageAttachmentMediaItemType(filename) {
  let str = "IMAGE";
  if (!obj.isImageFile(filename.filename)) {
    let str2 = "INVALID";
    if (obj2.isVideoFile(filename.filename)) {
      str2 = "VIDEO";
    }
    str = str2;
    const obj2 = require(dependencyMap[3]);
  }
  return str;
}
const MessageAttachmentFlags = require(dependencyMap[0]).MessageAttachmentFlags;
let obj = { EXPLICIT: 1, [1]: "EXPLICIT", GORE: 2, [2]: "GORE", SELF_HARM: 4, [4]: "SELF_HARM" };
obj = { IS_ANIMATED: 1, [1]: "IS_ANIMATED" };
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/media/MediaTypes.tsx");

export const ContentScanFlags = obj;
export const ImageEncoder = { NATIVE: "native", JPEGLI: "jpegli", JPEG_IOS: "jpeg_ios", PASSTHROUGH: "passthrough" };
export { toContentScanMetadata };
export const UnfurledMediaItemFlags = obj;
export const toUnfurledMediaItem = function toUnfurledMediaItem(media) {
  const obj = { url: media.url, proxyUrl: media.proxy_url, height: media.height, width: media.width, placeholder: media.placeholder, placeholderVersion: media.placeholder_version, contentType: media.content_type, originalContentType: media.original_content_type, loadingState: media.loading_state };
  let tmp;
  if (null != media.content_scan_metadata) {
    tmp = toContentScanMetadata(media.content_scan_metadata);
  }
  obj.contentScanMetadata = tmp;
  const flags = media.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  obj.flags = num;
  return obj;
};
export { messageAttachmentToUnfurledMediaItem };
export const getUnfurledMediaItemType = function getUnfurledMediaItemType(contentType) {
  let str = "IMAGE";
  if (!obj.isImageContentType(contentType.contentType)) {
    let str3 = "INVALID";
    if (obj2.isVideoContentType(contentType.contentType)) {
      str3 = "INVALID";
      if (null != contentType.proxyUrl) {
        str3 = "INVALID";
        if (null != obj3.toURLSafe(contentType.proxyUrl)) {
          str3 = "VIDEO";
        }
        const obj3 = importDefault(dependencyMap[4]);
      }
    }
    str = str3;
    const obj2 = require(dependencyMap[3]);
  }
  return str;
};
export const messageAttachmentToMediaItem = function messageAttachmentToMediaItem(found1, message) {
  let obj = {};
  const merged = Object.assign(messageAttachmentToUnfurledMediaItem(found1));
  obj["type"] = getMessageAttachmentMediaItemType(found1);
  obj["alt"] = found1.description;
  obj = { message, identifier: obj };
  obj = { type: "attachment", attachmentId: found1.id, filename: found1.filename, title: found1.title, size: found1.size };
  obj["sourceMetadata"] = obj;
  return obj;
};
export const embedMediaToMediaItem = function embedMediaToMediaItem(thumbnail, sourceMetadata, IMAGE) {
  return { type: IMAGE, url: thumbnail.url, proxyUrl: thumbnail.proxyURL, width: thumbnail.width, height: thumbnail.height, placeholder: thumbnail.placeholder, placeholderVersion: thumbnail.placeholderVersion, sourceMetadata, contentType: thumbnail.contentType };
};
export const isVisualUnfurledMediaItem = function isVisualUnfurledMediaItem(width) {
  let tmp = null != width.width;
  if (tmp) {
    tmp = width.width > 0;
  }
  if (tmp) {
    tmp = null != width.height;
  }
  if (tmp) {
    tmp = width.height > 0;
  }
  return tmp;
};
export const getMediaItemDisplayUrl = function getMediaItemDisplayUrl(type) {
  if (null == type) {
    return null;
  } else {
    if ("VIDEO" === type.type) {
      if (null != type.proxyUrl) {
        let str = importDefault(dependencyMap[4]).toURLSafe(type.proxyUrl);
        str = null;
        if (null != str) {
          const searchParams = str.searchParams;
          searchParams.append("format", "webp");
          str = str.toString();
        }
        return str;
      }
    }
    let url = type.proxyUrl;
    if (null == url) {
      url = type.url;
    }
    let tmp = null;
    if (null != url) {
      tmp = url;
    }
    return tmp;
  }
};
