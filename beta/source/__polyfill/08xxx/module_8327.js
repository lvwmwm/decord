// Module ID: 8327
// Function ID: 8328
// Dependencies: [8321, 8322]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 8327
import _mod8321 from "module_8321" /* 8321 */;
import _mod8322 from "module_8322" /* 8322 */;


export function isAVIF(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8321.isAvifStringIncluded(fileChunk);
  return tmp4;
}
export function isBMP(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
}
export function isBPG(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
}
export function isCR2(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
}
export function isEXR(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
}
export function isGIF(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
}
export function isHEIC(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8321.isHeicSignatureIncluded(fileChunk);
  return tmp4;
}
export function isICO(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
}
export function isJPEG(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
}
export function isPBM(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
}
export function isPGM(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
}
export function isPNG(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
}
export function isPPM(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
}
export function isPSD(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
}
export function isWEBP(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
}
