// Module ID: 7805
// Function ID: 7806
// Dependencies: [7799, 7800]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 7805
import _mod7799 from "module_7799" /* 7799 */;
import _mod7800 from "module_7800" /* 7800 */;


export const isAVIF = function isAVIF(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod7799.isAvifStringIncluded(fileChunk);
  return tmp4;
};
export const isBMP = function isBMP(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
export const isBPG = function isBPG(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
export const isCR2 = function isCR2(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
export const isEXR = function isEXR(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
export const isGIF = function isGIF(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
export const isHEIC = function isHEIC(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod7799.isHeicSignatureIncluded(fileChunk);
  return tmp4;
};
export const isICO = function isICO(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
export const isJPEG = function isJPEG(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
export const isPBM = function isPBM(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
export const isPGM = function isPGM(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
export const isPNG = function isPNG(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
export const isPPM = function isPPM(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
export const isPSD = function isPSD(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
export const isWEBP = function isWEBP(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};
