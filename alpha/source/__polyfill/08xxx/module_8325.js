// Module ID: 8325
// Function ID: 8326
// Dependencies: [8321, 8322]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8325
import _mod8321 from "module_8321" /* 8321 */;
import _mod8322 from "module_8322" /* 8322 */;


export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8321).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8322).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}
