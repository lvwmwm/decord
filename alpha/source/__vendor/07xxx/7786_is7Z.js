// Module ID: 7786
// Function ID: 7787
// Name: is7Z
// Dependencies: [7781, 7782]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 7786 (is7Z)
import _mod7781 from "module_7781" /* 7781 */;
import _mod7782 from "module_7782" /* 7782 */;


export const is7Z = function is7Z(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
export const isLZH = function isLZH(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
export const isRAR = function isRAR(fileChunk) {
  fileChunk = _mod7781.getFileChunk(fileChunk);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
export const isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod7781.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod7782.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
