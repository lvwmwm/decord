// Module ID: 7805
// Function ID: 7806
// Name: is7Z
// Dependencies: [7800, 7801]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 7805 (is7Z)
import _mod7800 from "module_7800" /* 7800 */;
import _mod7801 from "module_7801" /* 7801 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod7800.getFileChunk(fileChunk);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod7800.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod7801.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
