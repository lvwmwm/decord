// Module ID: 11144
// Function ID: 11145
// Name: isVisualMedia
// Dependencies: [676, 4532, 1403, 11145, 2]
// Exports: getMosaicMediaTypeForAttachment, getMosaicMediaTypeForUnfurledMediaItem, isVisualMedia

// Module 11144 (isVisualMedia)
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
              let tmp5Result = tmp5(4532);
              let str5 = "INVALID";
              if (tmp5Result.isVideoFile(filename)) {
                str5 = "INVALID";
                if (null != proxy_url.proxy_url) {
                  tmp5Result = tmp5(1403);
                  let num2 = proxy_url.flags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  let str6 = "VIDEO";
                  if (tmp5Result.hasFlag(num2, MessageAttachmentFlags.IS_CLIP)) {
                    str6 = "CLIP";
                  }
                  str5 = str6;
                }
              }
              str3 = str5;
            }
            let str = str3;
            obj2 = require(4532) /* urlMatchesFileExtension */;
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
    obj = require(11145) /* set */;
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
            if (tmpResult.isVideoContentType(contentType)) {
              return "VIDEO";
            }
            tmpResult = tmp(4532);
          }
          obj = require(4532) /* urlMatchesFileExtension */;
          tmp = require;
        }
      }
    }
  }
  return "VISUAL_PLACEHOLDER";
};
