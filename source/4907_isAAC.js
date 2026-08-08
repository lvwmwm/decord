// Module ID: 4907
// Function ID: 4908
// Name: isAAC
// Dependencies: [4903, 4904]

// Module 4907 (isAAC)
const require = arg1;
const dependencyMap = arg6;
arg5.isAAC = undefined;
arg5.isAMR = undefined;
arg5.isFLAC = undefined;
arg5.isM4A = undefined;
arg5.isMP3 = undefined;
arg5.isWAV = undefined;
arg5.isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(4903).getFileChunk(fileChunk);
      const FileTypes2 = tmp(4904).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
  }
  return checkByFileTypeResult;
};
arg5.isAMR = function isAMR(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
arg5.isFLAC = function isFLAC(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
arg5.isM4A = function isM4A(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
arg5.isMP3 = function isMP3(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
arg5.isWAV = function isWAV(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
