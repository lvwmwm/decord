// Module ID: 8191
// Function ID: 8192
// Name: is7Z
// Dependencies: [8186, 8187]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8191 (is7Z)
import _mod8186 from "module_8186" /* 8186 */;
import _mod8187 from "module_8187" /* 8187 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod8186.getFileChunk(fileChunk);
  const FileTypes = _mod8187.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod8186.getFileChunk(fileChunk);
  const FileTypes = _mod8187.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod8186.getFileChunk(fileChunk);
  const FileTypes = _mod8187.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8186.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8187.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
