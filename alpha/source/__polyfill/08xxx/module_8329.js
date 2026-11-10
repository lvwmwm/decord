// Module ID: 8329
// Function ID: 8330
// Dependencies: [8325, 8326]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8329
import _mod8325 from "module_8325" /* 8325 */;
import _mod8326 from "module_8326" /* 8326 */;


export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8325).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8326).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}
