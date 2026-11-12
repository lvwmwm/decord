// Module ID: 8847
// Function ID: 8848
// Dependencies: [8843, 8844]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8847
import _mod8843 from "module_8843" /* 8843 */;
import _mod8844 from "module_8844" /* 8844 */;


export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8843).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8844).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}
