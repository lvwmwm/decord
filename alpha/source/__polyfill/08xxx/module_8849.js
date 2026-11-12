// Module ID: 8849
// Function ID: 8850
// Dependencies: [8843, 8844]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 8849
import _mod8843 from "module_8843" /* 8843 */;
import _mod8844 from "module_8844" /* 8844 */;


export function isAVIF(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8843.isAvifStringIncluded(fileChunk);
  return tmp4;
}
export function isBMP(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
}
export function isBPG(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
}
export function isCR2(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
}
export function isEXR(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
}
export function isGIF(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
}
export function isHEIC(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8843.isHeicSignatureIncluded(fileChunk);
  return tmp4;
}
export function isICO(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
}
export function isJPEG(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
}
export function isPBM(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
}
export function isPGM(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
}
export function isPNG(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
}
export function isPPM(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
}
export function isPSD(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
}
export function isWEBP(fileChunk) {
  fileChunk = _mod8843.getFileChunk(fileChunk);
  const FileTypes = _mod8844.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
}
