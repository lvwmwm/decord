// Module ID: 8383
// Function ID: 8384
// Dependencies: [8375, 8376]
// Exports: isAVI, isFLV, isM4V, isMKV, isMOV, isMP4, isOGG, isSWF, isWEBM

// Module 8383
import _mod8375 from "module_8375" /* 8375 */;
import _mod8376 from "module_8376" /* 8376 */;


export function isAVI(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
}
export function isFLV(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "flv") && _mod8375.isFlvStringIncluded(fileChunk);
  return tmp4;
}
export function isM4V(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "m4v") && _mod8375.isftypStringIncluded(fileChunk);
  return tmp4;
}
export function isMKV(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8376.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "mkv") && "mkv" === _mod8375.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
export function isMOV(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
}
export function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  let checkByFileTypeResult = FileTypes.checkByFileType(fileChunk, "mp4");
  if (!checkByFileTypeResult) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp8 = !excludeSimilarTypes;
    if (tmp8) {
      const fileChunk1 = tmp(8375).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8376).FileTypes;
      tmp8 = FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8375.isftypStringIncluded(fileChunk1);
      FileTypes2.checkByFileType(fileChunk1, "m4v") && _mod8375.isftypStringIncluded(fileChunk1);
    }
    checkByFileTypeResult = tmp8;
  }
  return checkByFileTypeResult;
}
export function isOGG(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
}
export function isSWF(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk);
  const FileTypes = _mod8376.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
}
export function isWEBM(fileChunk) {
  fileChunk = _mod8375.getFileChunk(fileChunk, 64);
  const FileTypes = _mod8376.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "webm") && "webm" === _mod8375.findMatroskaDocTypeElements(fileChunk);
  return tmp4;
}
