// Module ID: 8223
// Function ID: 8224
// Name: is7Z
// Dependencies: [8218, 8219]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8223 (is7Z)
import _mod8218 from "module_8218" /* 8218 */;
import _mod8219 from "module_8219" /* 8219 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod8218.getFileChunk(fileChunk);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8218.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8219.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
