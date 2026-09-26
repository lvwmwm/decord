// Module ID: 5439
// Function ID: 5440
// Name: is7Z
// Dependencies: [5434, 5435]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 5439 (is7Z)
import _mod5434 from "module_5434" /* 5434 */;
import _mod5435 from "module_5435" /* 5435 */;

require = arg1;
const dependencyMap = arg6;

export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod5434.getFileChunk(fileChunk);
  const FileTypes = _mod5435.FileTypes;
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
  fileChunk = _mod5434.getFileChunk(fileChunk, num);
  const FileTypes = _mod5435.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
