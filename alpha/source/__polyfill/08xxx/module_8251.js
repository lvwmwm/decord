// Module ID: 8251
// Function ID: 8252
// Dependencies: [8243, 8244]
// Exports: isAVI, isFLV, isM4V, isMKV, isMOV, isMP4, isOGG, isSWF, isWEBM

// Module 8251
import _mod8243 from "module_8243" /* 8243 */;
import _mod8244 from "module_8244" /* 8244 */;


export function isAVI(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "flv") && _mod8243.isFlvStringIncluded(fileChunk);
  return tmp4;
}
export function isM4V(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "m4v") && _mod8243.isftypStringIncluded(fileChunk);
  return tmp4;
}
export function isMKV(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8244.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8243.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
export function isMOV(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (tmp8) {
      const fileChunk1 = tmp(8243).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8244).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8243.isftypStringIncluded(fileChunk1);
      FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8243.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8244.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8243.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
