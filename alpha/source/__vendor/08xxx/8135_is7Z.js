// Module ID: 8135
// Function ID: 8136
// Name: is7Z
// Dependencies: [8130, 8131]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8135 (is7Z)
import _mod8130 from "module_8130" /* 8130 */;
import _mod8131 from "module_8131" /* 8131 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod8130.getFileChunk(fileChunk);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8130.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8131.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
