// Module ID: 5502
// Function ID: 5503
// Dependencies: [5498, 5499]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 5502
import _mod5498 from "module_5498" /* 5498 */;
import _mod5499 from "module_5499" /* 5499 */;

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(5498).getFileChunk(fileChunk);
      const FileTypes2 = tmp(5499).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod5498.getFileChunk(fileChunk);
  const FileTypes = _mod5499.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
