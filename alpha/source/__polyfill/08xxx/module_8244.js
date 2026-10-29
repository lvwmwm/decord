// Module ID: 8244
// Function ID: 8245
// Dependencies: [8240, 8241]
// Exports: isAAC, isAMR, isFLAC, isM4A, isMP3, isWAV

// Module 8244
import _mod8240 from "module_8240" /* 8240 */;
import _mod8241 from "module_8241" /* 8241 */;


export function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  let checkByFileTypeResult1 = FileTypes.checkByFileType(fileChunk, "aac");
  if (!checkByFileTypeResult1) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let checkByFileTypeResult = !excludeSimilarTypes;
    if (checkByFileTypeResult) {
      const fileChunk1 = tmp(8240).getFileChunk(fileChunk);
      const FileTypes2 = tmp(8241).FileTypes;
      checkByFileTypeResult = FileTypes2.checkByFileType(fileChunk1, "m4a");
    }
    checkByFileTypeResult1 = checkByFileTypeResult;
  }
  return checkByFileTypeResult1;
}
export function isAMR(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
}
export function isFLAC(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
}
export function isM4A(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
export function isMP3(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
}
export function isWAV(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
}
