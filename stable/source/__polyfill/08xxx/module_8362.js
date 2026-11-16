// Module ID: 8362
// Function ID: 8363
// Dependencies: [8354, 8355]
// Exports: isAVI, isFLV, isM4V, isMKV, isMOV, isMP4, isOGG, isSWF, isWEBM

// Module 8362
import _mod8354 from "module_8354" /* 8354 */;
import _mod8355 from "module_8355" /* 8355 */;


export function isAVI(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "flv") && _mod8354.isFlvStringIncluded(fileChunk);
  return tmp4;
}
export function isM4V(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "m4v") && _mod8354.isftypStringIncluded(fileChunk);
  return tmp4;
}
export function isMKV(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8355.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8354.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
export function isMOV(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (tmp8) {
      const fileChunk1 = tmp(8354).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8355).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8354.isftypStringIncluded(fileChunk1);
      FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8354.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8355.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8354.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
