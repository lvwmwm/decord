// Module ID: 7806
// Function ID: 7807
// Dependencies: [7800, 7801]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 7806
import _mod7800 from "module_7800" /* 7800 */;
import _mod7801 from "module_7801" /* 7801 */;


export const isAVIF = function isAVIF(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod7800.isAvifStringIncluded(fileChunk);
  return tmp4;
};
export const isBMP = function isBMP(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
export const isBPG = function isBPG(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
export const isCR2 = function isCR2(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
export const isEXR = function isEXR(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
export const isGIF = function isGIF(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
export const isHEIC = function isHEIC(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod7800.isHeicSignatureIncluded(fileChunk);
  return tmp4;
};
export const isICO = function isICO(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
export const isJPEG = function isJPEG(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
export const isPBM = function isPBM(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
export const isPGM = function isPGM(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
export const isPNG = function isPNG(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
export const isPPM = function isPPM(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
export const isPSD = function isPSD(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
export const isWEBP = function isWEBP(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};
