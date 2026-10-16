// Module ID: 7799
// Function ID: 7800
// Dependencies: [7795, 7796]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 7799
import _mod7795 from "module_7795" /* 7795 */;
import _mod7796 from "module_7796" /* 7796 */;


export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(7795).getFileChunk(fileChunk);
      const FileTypes2 = tmp(7796).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
