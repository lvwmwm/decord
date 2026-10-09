// Module ID: 7785
// Function ID: 7786
// Dependencies: [7781, 7782]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 7785
import _mod7781 from "module_7781" /* 7781 */;
import _mod7782 from "module_7782" /* 7782 */;


export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(7781).getFileChunk(fileChunk);
      const FileTypes2 = tmp(7782).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
