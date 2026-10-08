// Module ID: 7777
// Function ID: 7778
// Name: is7Z
// Dependencies: [7772, 7773]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 7777 (is7Z)
import _mod7772 from "module_7772" /* 7772 */;
import _mod7773 from "module_7773" /* 7773 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod7772.getFileChunk(fileChunk);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod7772.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod7773.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
