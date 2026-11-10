// Module ID: 8259
// Function ID: 8260
// Dependencies: [8251, 8252]
// Exports: isAVI, isFLV, isM4V, isMKV, isMOV, isMP4, isOGG, isSWF, isWEBM

// Module 8259
import _mod8251 from "module_8251" /* 8251 */;
import _mod8252 from "module_8252" /* 8252 */;


export function isAVI(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "flv") && _mod8251.isFlvStringIncluded(fileChunk);
  return tmp4;
}
export function isM4V(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "m4v") && _mod8251.isftypStringIncluded(fileChunk);
  return tmp4;
}
export function isMKV(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8252.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8251.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
export function isMOV(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (tmp8) {
      const fileChunk1 = tmp(8251).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8252).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8251.isftypStringIncluded(fileChunk1);
      FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8251.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8252.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8251.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
