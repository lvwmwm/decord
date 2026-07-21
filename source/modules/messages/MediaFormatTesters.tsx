// Module ID: 4313
// Function ID: 37777
// Name: urlMatchesFileExtension
// Dependencies: []
// Exports: isAnimatedImageUrl, isAudioFile, isImageContentType, isImageFile, isImageUrl, isRiveFile, isVideoContentType, isVideoFile, isVideoUrl

// Module 4313 (urlMatchesFileExtension)
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
  let isIOSWithWebMResult = arg1(dependencyMap[2]).isIOSWithWebM();
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = urlMatchesFileExtension(mediaUrl, closure_6);
  }
  return isIOSWithWebMResult;
}
function isWebPlayerVideoFile(filename) {
  let isIOSWithWebMResult = null != filename;
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = arg1(dependencyMap[2]).isIOSWithWebM();
    const obj = arg1(dependencyMap[2]);
  }
  if (isIOSWithWebMResult) {
    isIOSWithWebMResult = regex2.test(filename);
  }
  return isIOSWithWebMResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = /\.(png|jpe?g|jfif|webp|gif|heic|heif|dng|avif)$/i;
let closure_4 = /\.(webp|gif|avif)$/i;
if (obj.isIOS()) {
  let tmp2 = /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
} else {
  tmp2 = arg1(dependencyMap[1]).isAndroid() ? /\.(mp3|m4a|wav|ogg|opus|flac)$/i : /\.(mp3|m4a|wav|aif|aiff|ogg|opus|flac)$/i;
  const obj2 = arg1(dependencyMap[1]);
}
let closure_6 = /\.(webm)$/i;
let closure_7 = /\.(riv)$/i;
const obj = arg1(dependencyMap[1]);
if (obj3.isIOS()) {
  let tmp4 = /\.(mp4|mov|qt)$/i;
} else {
  arg1(dependencyMap[1]).isAndroid();
  tmp4 = /\.(mp4|webm|mov|qt)$/i;
  const obj4 = arg1(dependencyMap[1]);
}
const obj3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/messages/MediaFormatTesters.tsx");

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
  let tmp = urlMatchesFileExtension(url, tmp4);
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
