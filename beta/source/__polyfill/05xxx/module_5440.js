// Module ID: 5440
// Function ID: 5441
// Dependencies: [5436, 5437]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 5440
import _mod5436 from "module_5436" /* 5436 */;
import _mod5437 from "module_5437" /* 5437 */;

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(5436).getFileChunk(fileChunk);
      const FileTypes2 = tmp(5437).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
