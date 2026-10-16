// Module ID: 8026
// Function ID: 8027
// Dependencies: [8020, 8021]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 8026
import _mod8020 from "module_8020" /* 8020 */;
import _mod8021 from "module_8021" /* 8021 */;


export const isAVIF = function isAVIF(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8020.isAvifStringIncluded(fileChunk);
  return tmp4;
};
export const isBMP = function isBMP(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
export const isBPG = function isBPG(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
export const isCR2 = function isCR2(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
export const isEXR = function isEXR(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
export const isGIF = function isGIF(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
export const isHEIC = function isHEIC(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8020.isHeicSignatureIncluded(fileChunk);
  return tmp4;
};
export const isICO = function isICO(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
export const isJPEG = function isJPEG(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
export const isPBM = function isPBM(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
export const isPGM = function isPGM(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
export const isPNG = function isPNG(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
export const isPPM = function isPPM(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
export const isPSD = function isPSD(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
export const isWEBP = function isWEBP(fileChunk) {
  fileChunk = _mod8020.getFileChunk(fileChunk);
  const FileTypes = _mod8021.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};
