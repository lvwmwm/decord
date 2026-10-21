// Module ID: 8170
// Function ID: 8171
// Dependencies: [8162, 8163]
// Exports: isAVI, isFLV, isM4V, isMKV, isMOV, isMP4, isOGG, isSWF, isWEBM

// Module 8170
import _mod8162 from "module_8162" /* 8162 */;
import _mod8163 from "module_8163" /* 8163 */;


export const isAVI = function isAVI(fileChunk) {
  fileChunk = _mod8162.getFileChunk(fileChunk);
  const FileTypes = _mod8163.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
export const isFLV = function isFLV(fileChunk) {
  fileChunk = _mod8162.getFileChunk(fileChunk);
  const FileTypes = _mod8163.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "flv") && _mod8162.isFlvStringIncluded(fileChunk);
  return tmp4;
};
export const isM4V = function isM4V(fileChunk) {
  fileChunk = _mod8162.getFileChunk(fileChunk);
  const FileTypes = _mod8163.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "m4v") && _mod8162.isftypStringIncluded(fileChunk);
  return tmp4;
};
export const isMKV = function isMKV(fileChunk) {
  fileChunk = _mod8162.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8163.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8162.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
};
export const isMOV = function isMOV(fileChunk) {
  fileChunk = _mod8162.getFileChunk(fileChunk);
  const FileTypes = _mod8163.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
export const isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8162.getFileChunk(fileChunk);
  const FileTypes = _mod8163.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (tmp8) {
      const fileChunk1 = tmp(8162).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8163).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8162.isftypStringIncluded(fileChunk1);
      FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8162.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
export const isOGG = function isOGG(fileChunk) {
  fileChunk = _mod8162.getFileChunk(fileChunk);
  const FileTypes = _mod8163.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
export const isSWF = function isSWF(fileChunk) {
  fileChunk = _mod8162.getFileChunk(fileChunk);
  const FileTypes = _mod8163.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
export const isWEBM = function isWEBM(fileChunk) {
  fileChunk = _mod8162.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8163.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8162.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
};
