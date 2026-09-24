// Module ID: 5441
// Function ID: 5442
// Name: is7Z
// Dependencies: [5436, 5437]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 5441 (is7Z)
import _mod5436 from "module_5436" /* 5436 */;
import _mod5437 from "module_5437" /* 5437 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod5436.getFileChunk(fileChunk);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = _mod5436.getFileChunk(fileChunk, num);
  const FileTypes = _mod5437.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
