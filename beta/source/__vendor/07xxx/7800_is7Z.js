// Module ID: 7800
// Function ID: 7801
// Name: is7Z
// Dependencies: [7795, 7796]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 7800 (is7Z)
import _mod7795 from "module_7795" /* 7795 */;
import _mod7796 from "module_7796" /* 7796 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod7795.getFileChunk(fileChunk);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod7795.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod7796.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
