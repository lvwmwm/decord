// Module ID: 8852
// Function ID: 8853
// Dependencies: [8844, 8845]
// Exports: isAVI, isFLV, isM4V, isMKV, isMOV, isMP4, isOGG, isSWF, isWEBM

// Module 8852
import _mod8844 from "module_8844" /* 8844 */;
import _mod8845 from "module_8845" /* 8845 */;


export function isAVI(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "flv") && _mod8844.isFlvStringIncluded(fileChunk);
  return tmp4;
}
export function isM4V(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "m4v") && _mod8844.isftypStringIncluded(fileChunk);
  return tmp4;
}
export function isMKV(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8845.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8844.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
export function isMOV(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (tmp8) {
      const fileChunk1 = tmp(8844).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8845).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8844.isftypStringIncluded(fileChunk1);
      FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8844.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8845.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8844.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
