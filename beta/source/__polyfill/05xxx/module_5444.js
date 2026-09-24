// Module ID: 5444
// Function ID: 5445
// Dependencies: [5436, 5437]
// Exports: isAVI, isFLV, isM4V, isMKV, isMOV, isMP4, isOGG, isSWF, isWEBM

// Module 5444
import _mod5436 from "module_5436" /* 5436 */;
import _mod5437 from "module_5437" /* 5437 */;

require = arg1;
const dependencyMap = arg6;

export const isAVI = function isAVI(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
export const isFLV = function isFLV(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flv") && _mod5436.isFlvStringIncluded(fileChunk);
};
export const isM4V = function isM4V(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4v") && _mod5436.isftypStringIncluded(fileChunk);
};
export const isMKV = function isMKV(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk, 64);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod5436.findMatroskaDocTypeElements(fileChunk);
};
export const isMOV = function isMOV(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
export const isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(5436).getFileChunk(fileChunk);
      const FileTypes2 = tmp(5437).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && tmp(5436).isftypStringIncluded(fileChunk1);
      const tmp10 = FileTypes2.checkByFileType(fileChunk1, "m4v") && tmp(5436).isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
export const isOGG = function isOGG(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
export const isSWF = function isSWF(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
export const isWEBM = function isWEBM(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk, 64);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod5436.findMatroskaDocTypeElements(fileChunk);
};
