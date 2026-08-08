// Module ID: 4911
// Function ID: 4912
// Name: isAVI
// Dependencies: [4903, 4904]

// Module 4911 (isAVI)
const require = arg1;
const dependencyMap = arg6;
arg5.isAVI = undefined;
arg5.isFLV = undefined;
arg5.isM4V = undefined;
arg5.isMKV = undefined;
arg5.isMOV = undefined;
arg5.isMP4 = undefined;
arg5.isOGG = undefined;
arg5.isSWF = undefined;
arg5.isWEBM = undefined;
arg5.isAVI = function isAVI(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
arg5.isFLV = function isFLV(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && require(4903) /* getFileChunk */.isFlvStringIncluded(fileChunk);
};
arg5.isM4V = function isM4V(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && require(4903) /* getFileChunk */.isftypStringIncluded(fileChunk);
};
arg5.isMKV = function isMKV(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk, 64);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === require(4903) /* getFileChunk */.findMatroskaDocTypeElements(fileChunk);
};
arg5.isMOV = function isMOV(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
arg5.isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(4903).getFileChunk(fileChunk);
      const FileTypes2 = tmp(4904).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && tmp(4903).isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && tmp(4903).isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
arg5.isOGG = function isOGG(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
arg5.isSWF = function isSWF(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
arg5.isWEBM = function isWEBM(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk, 64);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === require(4903) /* getFileChunk */.findMatroskaDocTypeElements(fileChunk);
};
