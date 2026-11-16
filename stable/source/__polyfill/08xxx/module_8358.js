// Module ID: 8358
// Function ID: 8359
// Dependencies: [8354, 8355]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8358
import _mod8354 from "module_8354" /* 8354 */;
import _mod8355 from "module_8355" /* 8355 */;


export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8354).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8355).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}
