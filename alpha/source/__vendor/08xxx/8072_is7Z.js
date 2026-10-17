// Module ID: 8072
// Function ID: 8073
// Name: is7Z
// Dependencies: [8067, 8068]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8072 (is7Z)
import _mod8067 from "module_8067" /* 8067 */;
import _mod8068 from "module_8068" /* 8068 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod8067.getFileChunk(fileChunk);
  const FileTypes = _mod8068.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod8067.getFileChunk(fileChunk);
  const FileTypes = _mod8068.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod8067.getFileChunk(fileChunk);
  const FileTypes = _mod8068.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8067.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8068.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
