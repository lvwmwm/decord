// Module ID: 8247
// Function ID: 8248
// Dependencies: [8243, 8244]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8247
import _mod8243 from "module_8243" /* 8243 */;
import _mod8244 from "module_8244" /* 8244 */;


export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8243).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8244).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}
