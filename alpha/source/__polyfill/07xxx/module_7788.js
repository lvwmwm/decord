// Module ID: 7788
// Function ID: 7789
// Dependencies: [7781, 7782]
// Exports: isBLEND, isDOC, isELF, isEXE, isINDD, isMACHO, isORC, isPARQUET, isPCAP, isPDF, isPS, isRTF, isSQLITE, isSTL, isTTF

// Module 7788
import _mod7781 from "module_7781" /* 7781 */;
import _mod7782 from "module_7782" /* 7782 */;


export const isBLEND = function isBLEND(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "blend");
};
export const isELF = function isELF(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "elf");
};
export const isEXE = function isEXE(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exe");
};
export const isMACHO = function isMACHO(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "macho");
};
export const isINDD = function isINDD(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "indd");
};
export const isORC = function isORC(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "orc");
};
export const isPARQUET = function isPARQUET(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "parquet");
};
export const isPDF = function isPDF(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pdf");
};
export const isPS = function isPS(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ps");
};
export const isRTF = function isRTF(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rtf");
};
export const isSQLITE = function isSQLITE(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "sqlite");
};
export const isSTL = function isSTL(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "stl");
};
export const isTTF = function isTTF(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ttf");
};
export const isDOC = function isDOC(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "doc");
};
export const isPCAP = function isPCAP(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pcap");
};
