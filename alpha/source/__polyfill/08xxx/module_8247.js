// Module ID: 8247
// Function ID: 8248
// Dependencies: [8240, 8241]
// Exports: isBLEND, isDOC, isELF, isEXE, isINDD, isMACHO, isORC, isPARQUET, isPCAP, isPDF, isPS, isRTF, isSQLITE, isSTL, isTTF

// Module 8247
import _mod8240 from "module_8240" /* 8240 */;
import _mod8241 from "module_8241" /* 8241 */;


export function isBLEND(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "blend");
}
export function isELF(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "elf");
}
export function isEXE(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exe");
}
export function isMACHO(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "macho");
}
export function isINDD(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "indd");
}
export function isORC(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "orc");
}
export function isPARQUET(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "parquet");
}
export function isPDF(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pdf");
}
export function isPS(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ps");
}
export function isRTF(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rtf");
}
export function isSQLITE(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "sqlite");
}
export function isSTL(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "stl");
}
export function isTTF(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ttf");
}
export function isDOC(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "doc");
}
export function isPCAP(fileChunk) {
  fileChunk = _mod8240.getFileChunk(fileChunk);
  const FileTypes = _mod8241.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pcap");
}
