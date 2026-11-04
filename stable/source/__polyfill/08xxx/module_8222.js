// Module ID: 8222
// Function ID: 8223
// Dependencies: [8218, 8219]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8222
import _mod8218 from "module_8218" /* 8218 */;
import _mod8219 from "module_8219" /* 8219 */;


export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8218).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8219).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
