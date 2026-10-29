// Module ID: 8246
// Function ID: 8247
// Dependencies: [8240, 8241]
// Exports: isAVIF, isBMP, isBPG, isCR2, isEXR, isGIF, isHEIC, isICO, isJPEG, isPBM, isPGM, isPNG, isPPM, isPSD, isWEBP

// Module 8246
import _mod8240 from "module_8240" /* 8240 */;
import _mod8241 from "module_8241" /* 8241 */;


export function isAVIF(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8240.isAvifStringIncluded(fileChunk);
  return tmp4;
}
export function isBMP(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
}
export function isBPG(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
}
export function isCR2(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
}
export function isEXR(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
}
export function isGIF(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
}
export function isHEIC(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  const tmp4 = FileTypes.checkByFileType(fileChunk, "avif") && _mod8240.isHeicSignatureIncluded(fileChunk);
  return tmp4;
}
export function isICO(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
}
export function isJPEG(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
}
export function isPBM(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
}
export function isPGM(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
}
export function isPNG(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
}
export function isPPM(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
}
export function isPSD(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
}
export function isWEBP(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
}
