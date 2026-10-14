// Module ID: 7321
// Function ID: 7322
// Dependencies: [7317, 7318]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 7321
import _mod7317 from "module_7317" /* 7317 */;
import _mod7318 from "module_7318" /* 7318 */;


export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(7317).getFileChunk(fileChunk);
      const FileTypes2 = tmp(7318).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod7317.getFileChunk(fileChunk);
  const FileTypes = _mod7318.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
