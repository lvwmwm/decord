// Module ID: 11193
// Function ID: 11194
// Name: MosaicMediaType
// Dependencies: [1074, 4986, 1385, 11194, 2]
// Exports: getMosaicMediaTypeForAttachment, getMosaicMediaTypeForUnfurledMediaItem, isVisualMedia

// Module 11193 (MosaicMediaType)
import Constants from "Constants" /* 1074 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4986 */;
import PlaintextFilePreviewHelpers from "PlaintextFilePreviewHelpers" /* 11194 */;
import size from "module_2" /* 2 */;

const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
const re3 = /\.(mp3|m4a|ogg|opus|wav|flac)$/i;
const result = size.fileFinishedImporting("modules/messages/MosaicMediaType.tsx");

export function isVisualMedia(arg0) {
  return "IMAGE" === arg0 || "VIDEO" === arg0 || "CLIP" === arg0 || "VISUAL_PLACEHOLDER" === arg0;
}
export const getMosaicMediaTypeForAttachment = function getMosaicMediaTypeForAttachment(proxy_url, arg1) {
  let filename;
  let height;
  let str;
  let width;
  ({ filename, width, height } = proxy_url);
  if (arg1) {
    if (null != width) {
      if (width > 0) {
        if (null != height) {
          if (height > 0) {
            let str3 = "IMAGE";
            const obj2 = MediaFormatTesters;
            if (!obj2.isImageFile(filename)) {
              let str5 = "INVALID";
              const tmp5Result = MediaFormatTesters;
              if (tmp5Result.isVideoFile(filename)) {
                str5 = "INVALID";
                if (null != proxy_url.proxy_url) {
                  let num2 = proxy_url.flags;
                  const hasFlag = FlagUtils.hasFlag;
                  FlagUtils;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  let str6 = "VIDEO";
                  if (hasFlag(num2, MessageAttachmentFlags.IS_CLIP)) {
                    str6 = "CLIP";
                  }
                  str5 = str6;
                }
              }
              str3 = str5;
            }
            str = str3;
          }
          return str;
        }
      }
    }
  }
  if (null != arg1) {
    if (re3.test(filename)) {
      str = "AUDIO";
    }
  }
  let str2 = "OTHER";
  if (null != proxy_url.url) {
    str2 = "OTHER";
    const obj = PlaintextFilePreviewHelpers;
    if (obj.isPlaintextPreviewableFile(filename)) {
      str2 = "PLAINTEXT_PREVIEW";
    }
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
          const obj = MediaFormatTesters;
          const tmp = require;
          if (obj.isImageContentType(contentType)) {
            return "IMAGE";
          } else {
            const tmpResult = tmp(4986);
            if (tmpResult.isVideoContentType(contentType)) {
              return "VIDEO";
            }
          }
        }
      }
    }
  }
  return "VISUAL_PLACEHOLDER";
};
