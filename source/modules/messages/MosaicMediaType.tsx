// Module ID: 9931
// Function ID: 76816
// Name: isVisualMedia
// Dependencies: [653, 4317, 1360, 9932, 2]
// Exports: getMosaicMediaTypeForAttachment, getMosaicMediaTypeForUnfurledMediaItem, isVisualMedia

// Module 9931 (isVisualMedia)
import { MessageAttachmentFlags } from "ME";

const re3 = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
const result = require("hasFlag").fileFinishedImporting("modules/messages/MosaicMediaType.tsx");

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
                  obj4 = require(1360) /* hasFlag */;
                }
              }
              str3 = str5;
              obj3 = require(4317) /* urlMatchesFileExtension */;
            }
            let str = str3;
            obj2 = require(4317) /* urlMatchesFileExtension */;
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
    obj = require(9932) /* set */;
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
            obj2 = require(4317) /* urlMatchesFileExtension */;
          }
          obj = require(4317) /* urlMatchesFileExtension */;
        }
      }
    }
  }
  return "VISUAL_PLACEHOLDER";
};
