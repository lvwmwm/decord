// Module ID: 7780
// Function ID: 7781
// Dependencies: [7772, 7773]
// Exports: isAVI, isFLV, isM4V, isMKV, isMOV, isMP4, isOGG, isSWF, isWEBM

// Module 7780
import _mod7772 from "module_7772" /* 7772 */;
import _mod7773 from "module_7773" /* 7773 */;


export const isAVI = function isAVI(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
export const isFLV = function isFLV(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "flv") && _mod7772.isFlvStringIncluded(fileChunk);
  return tmp4;
};
export const isM4V = function isM4V(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "m4v") && _mod7772.isftypStringIncluded(fileChunk);
  return tmp4;
};
export const isMKV = function isMKV(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk, 64);
  const FileTypes = _mod7773.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod7772.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
};
export const isMOV = function isMOV(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
export const isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (tmp8) {
      const fileChunk1 = tmp(7772).getFileChunk(fileChunk);
      const FileTypes2 = tmp(7773).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod7772.isftypStringIncluded(fileChunk1);
      FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod7772.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
};
export const isOGG = function isOGG(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
export const isSWF = function isSWF(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
export const isWEBM = function isWEBM(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk, 64);
  const FileTypes = _mod7773.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod7772.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
};
