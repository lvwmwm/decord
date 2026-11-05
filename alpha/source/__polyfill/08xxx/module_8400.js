// Module ID: 8400
// Function ID: 8401
// Dependencies: [8396, 8397]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8400
import _mod8396 from "module_8396" /* 8396 */;
import _mod8397 from "module_8397" /* 8397 */;


export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8396).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8397).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}
