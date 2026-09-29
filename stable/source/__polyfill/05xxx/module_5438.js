// Module ID: 5438
// Function ID: 5439
// Dependencies: [5434, 5435]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 5438
import _mod5434 from "module_5434" /* 5434 */;
import _mod5435 from "module_5435" /* 5435 */;

require = arg1;
const dependencyMap = arg6;

export const isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (!excludeSimilarTypes) {
      const fileChunk1 = tmp(5434).getFileChunk(fileChunk);
      const FileTypes2 = tmp(5435).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
};
export const isAMR = function isAMR(fileChunk) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
export const isFLAC = function isFLAC(fileChunk) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
export const isM4A = function isM4A(fileChunk) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
};
export const isMP3 = function isMP3(fileChunk) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
export const isWAV = function isWAV(fileChunk) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
