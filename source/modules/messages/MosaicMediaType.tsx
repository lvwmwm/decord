// Module ID: 9891
// Function ID: 76568
// Name: isVisualMedia
// Dependencies: [0, 4294967295, 0, 0, 0]
// Exports: getMosaicMediaTypeForAttachment, getMosaicMediaTypeForUnfurledMediaItem, isVisualMedia

// Module 9891 (isVisualMedia)
import { MessageAttachmentFlags } from "result";
import result from "result";

let closure_3 = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
result = result.fileFinishedImporting("modules/messages/MosaicMediaType.tsx");

export function isVisualMedia(arg0) {
  let tmp = "IMAGE" === arg0;
  if (!tmp) {
    tmp = "VIDEO" === arg0;
  }
  if (!tmp) {
    tmp = "CLIP" === arg0;
  }
  if (!tmp) {
    tmp = "VISUAL_PLACEHOLDER" === arg0;
  }
  return tmp;
}
export const getMosaicMediaTypeForAttachment = function getMosaicMediaTypeForAttachment(proxy_url, arg1) {
  let filename;
  let height;
  let width;
  ({ filename, width, height } = proxy_url);
  if (arg1) {
    if (null != width) {
      if (width > 0) {
        if (null != height) {
          if (height > 0) {
            let str3 = "IMAGE";
            if (!obj2.isImageFile(filename)) {
              let str5 = "INVALID";
              if (obj3.isVideoFile(filename)) {
                str5 = "INVALID";
                if (null != proxy_url.proxy_url) {
                  const flags = proxy_url.flags;
                  let num5 = 0;
                  if (null != flags) {
                    num5 = flags;
                  }
                  let str6 = "VIDEO";
                  if (obj4.hasFlag(num5, MessageAttachmentFlags.IS_CLIP)) {
                    str6 = "CLIP";
                  }
                  str5 = str6;
                  const obj4 = require(dependencyMap[2]);
                }
              }
              str3 = str5;
              const obj3 = require(dependencyMap[1]);
            }
            let str = str3;
            const obj2 = require(dependencyMap[1]);
          }
          return str;
        }
      }
    }
  }
  if (null != arg1) {
    if (regex.test(filename)) {
      str = "AUDIO";
    }
  }
  let str2 = "OTHER";
  if (null != proxy_url.url) {
    str2 = "OTHER";
    if (obj.isPlaintextPreviewableFile(filename)) {
      str2 = "PLAINTEXT_PREVIEW";
    }
    const obj = require(dependencyMap[3]);
  }
  str = str2;
};
export const getMosaicMediaTypeForUnfurledMediaItem = function getMosaicMediaTypeForUnfurledMediaItem(arg0) {
  let contentType;
  let height;
  let width;
  ({ contentType, width, height } = arg0);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          if (obj.isImageContentType(contentType)) {
            return "IMAGE";
          } else {
            if (obj2.isVideoContentType(contentType)) {
              return "VIDEO";
            }
            const obj2 = require(dependencyMap[1]);
          }
          const obj = require(dependencyMap[1]);
        }
      }
    }
  }
  return "VISUAL_PLACEHOLDER";
};
