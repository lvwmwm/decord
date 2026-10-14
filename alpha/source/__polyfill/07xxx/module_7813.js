// Module ID: 7813
// Function ID: 7814
// Dependencies: [7807, 7808]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 7813
import _mod7807 from "module_7807" /* 7807 */;
import _mod7808 from "module_7808" /* 7808 */;


export const isAVIF = function isAVIF(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod7807.isAvifStringIncluded(fileChunk);
  return tmp4;
};
export const isBMP = function isBMP(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
export const isBPG = function isBPG(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
export const isCR2 = function isCR2(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
export const isEXR = function isEXR(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
export const isGIF = function isGIF(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
export const isHEIC = function isHEIC(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod7807.isHeicSignatureIncluded(fileChunk);
  return tmp4;
};
export const isICO = function isICO(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
export const isJPEG = function isJPEG(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
export const isPBM = function isPBM(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
export const isPGM = function isPGM(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
export const isPNG = function isPNG(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
export const isPPM = function isPPM(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
export const isPSD = function isPSD(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
export const isWEBP = function isWEBP(fileChunk) {
  fileChunk = _mod7807.getFileChunk(fileChunk);
  const FileTypes = _mod7808.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};
