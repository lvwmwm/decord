// Module ID: 7804
// Function ID: 7805
// Name: is7Z
// Dependencies: [7799, 7800]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 7804 (is7Z)
import _mod7799 from "module_7799" /* 7799 */;
import _mod7800 from "module_7800" /* 7800 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod7799.getFileChunk(fileChunk);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod7799.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod7800.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
