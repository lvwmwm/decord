// Module ID: 8136
// Function ID: 8137
// Dependencies: [8130, 8131]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 8136
import _mod8130 from "module_8130" /* 8130 */;
import _mod8131 from "module_8131" /* 8131 */;


export const isAVIF = function isAVIF(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8130.isAvifStringIncluded(fileChunk);
  return tmp4;
};
export const isBMP = function isBMP(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
export const isBPG = function isBPG(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
export const isCR2 = function isCR2(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
export const isEXR = function isEXR(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
export const isGIF = function isGIF(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
export const isHEIC = function isHEIC(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8130.isHeicSignatureIncluded(fileChunk);
  return tmp4;
};
export const isICO = function isICO(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
export const isJPEG = function isJPEG(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
export const isPBM = function isPBM(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
export const isPGM = function isPGM(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
export const isPNG = function isPNG(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
export const isPPM = function isPPM(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
export const isPSD = function isPSD(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
export const isWEBP = function isWEBP(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};
