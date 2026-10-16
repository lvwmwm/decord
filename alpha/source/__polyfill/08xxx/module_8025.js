// Module ID: 8025
// Function ID: 8026
// Dependencies: [8021, 8022]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8025
import _mod8021 from "module_8021" /* 8021 */;
import _mod8022 from "module_8022" /* 8022 */;


export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8021).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8022).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod8021.getFileChunk(fileChunk);
  const FileTypes = _mod8022.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
