// Module ID: 5670
// Function ID: 5671
// Name: is7Z
// Dependencies: [5665, 5666]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 5670 (is7Z)
import _mod5665 from "module_5665" /* 5665 */;
import _mod5666 from "module_5666" /* 5666 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod5665.getFileChunk(fileChunk);
  const FileTypes = _mod5666.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod5665.getFileChunk(fileChunk);
  const FileTypes = _mod5666.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod5665.getFileChunk(fileChunk);
  const FileTypes = _mod5666.FileTypes;
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
  fileChunk = _mod5665.getFileChunk(fileChunk, num);
  const FileTypes = _mod5666.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
