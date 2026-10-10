// Module ID: 7803
// Function ID: 7804
// Dependencies: [7799, 7800]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 7803
import _mod7799 from "module_7799" /* 7799 */;
import _mod7800 from "module_7800" /* 7800 */;


export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(7799).getFileChunk(fileChunk);
      const FileTypes2 = tmp(7800).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
