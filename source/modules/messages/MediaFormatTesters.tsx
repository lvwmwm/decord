// Module ID: 4317
// Function ID: 37826
// Name: urlMatchesFileExtension
// Dependencies: [57, 477, 4318, 2]
// Exports: isAnimatedImageUrl, isAudioFile, isImageContentType, isImageFile, isImageUrl, isRiveFile, isVideoContentType, isVideoFile, isVideoUrl

// Module 4317 (urlMatchesFileExtension)
import _slicedToArray from "_slicedToArray";
import set from "set";
import set from "set";
import set from "isIOSWithWebM";

const require = arg1;
function urlMatchesFileExtension(sourceURI, GIF_RE_IOS) {
  if (null == sourceURI) {
    return false;
  } else {
    const tmp2 = callback(sourceURI.split(/\?/, 1), 2);
    return GIF_RE_IOS.test(tmp2[0]);
  }
}
function contentTypeMatches(contentType, image) {
  if (null == contentType) {
    return false;
  } else {
    const tmp2 = callback(contentType.split("/"), 2);
    return tmp2[0] === image;
  }
}
function isWebPlayerVideoUrl(mediaUrl) {
  let isIOSWithWebMResult = require(4318) /* isIOSWithWebM */.isIOSWithWebM();
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = urlMatchesFileExtension(mediaUrl, closure_6);
  }
  return isIOSWithWebMResult;
}
function isWebPlayerVideoFile(filename) {
  let isIOSWithWebMResult = null != filename;
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = require(4318) /* isIOSWithWebM */.isIOSWithWebM();
    const obj = require(4318) /* isIOSWithWebM */;
  }
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = regex2.test(filename);
  }
  return isIOSWithWebMResult;
}
const re3 = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
const re4 = /\.(webp|gif|avif)$/i;
if (set.isIOS()) {
  let tmp2 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
} else {
  tmp2 = require("set").isAndroid() ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
  const obj2 = require("set");
}
let closure_5 = tmp2;
const re6 = /\.(webm)$/i;
const re7 = /\.(riv)$/i;
if (set.isIOS()) {
  let tmp4 = /\.(mp4|mov|qt)$/i;
} else {
  require("set").isAndroid();
  tmp4 = /\.(mp4|webm|mov|qt)$/i;
  const obj4 = require("set");
}
let closure_8 = tmp4;
const result = set.fileFinishedImporting("modules/messages/MediaFormatTesters.tsx");

export { urlMatchesFileExtension };
export const isImageUrl = function isImageUrl(url) {
  return urlMatchesFileExtension(url, closure_3);
};
export const isImageFile = function isImageFile(filename) {
  let isMatch = null != filename;
  if (isMatch) {
    isMatch = regex.test(filename);
  }
  return isMatch;
};
export const isImageContentType = function isImageContentType(contentType) {
  return contentTypeMatches(contentType, "image");
};
export const isAnimatedImageUrl = function isAnimatedImageUrl(coverImage) {
  return urlMatchesFileExtension(coverImage, closure_4);
};
export const isAudioFile = function isAudioFile(filename) {
  let isMatch = null != filename;
  if (isMatch) {
    isMatch = tmp2.test(filename);
  }
  return isMatch;
};
export { isWebPlayerVideoUrl };
export const isVideoUrl = function isVideoUrl(url) {
  let tmp = urlMatchesFileExtension(url, closure_8);
  if (!tmp) {
    tmp = isWebPlayerVideoUrl(url);
  }
  return tmp;
};
export { isWebPlayerVideoFile };
export const isVideoFile = function isVideoFile(filename) {
  let tmp = null != filename;
  if (tmp) {
    let isMatch = tmp4.test(filename);
    if (!isMatch) {
      isMatch = isWebPlayerVideoFile(filename);
    }
    tmp = isMatch;
  }
  return tmp;
};
export const isRiveFile = function isRiveFile(arg0) {
  let isMatch = null != arg0;
  if (isMatch) {
    isMatch = regex3.test(arg0);
  }
  return isMatch;
};
export const isVideoContentType = function isVideoContentType(contentType) {
  return contentTypeMatches(contentType, "video");
};
