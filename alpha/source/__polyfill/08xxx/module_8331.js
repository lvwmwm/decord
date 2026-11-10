// Module ID: 8331
// Function ID: 8332
// Dependencies: [8325, 8326]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 8331
import _mod8325 from "module_8325" /* 8325 */;
import _mod8326 from "module_8326" /* 8326 */;


export function isAVIF(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8325.isAvifStringIncluded(fileChunk);
  return tmp4;
}
export function isBMP(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
}
export function isBPG(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
}
export function isCR2(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
}
export function isEXR(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
}
export function isGIF(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
}
export function isHEIC(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8325.isHeicSignatureIncluded(fileChunk);
  return tmp4;
}
export function isICO(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
}
export function isJPEG(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
}
export function isPBM(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
}
export function isPGM(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
}
export function isPNG(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
}
export function isPPM(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
}
export function isPSD(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
}
export function isWEBP(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
}
