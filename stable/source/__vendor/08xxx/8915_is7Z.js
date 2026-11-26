// Module ID: 8915
// Function ID: 8916
// Name: is7Z
// Dependencies: [8910, 8911]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8915 (is7Z)
import _mod8910 from "module_8910" /* 8910 */;
import _mod8911 from "module_8911" /* 8911 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8910.getFileChunk(fileChunk);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8910.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8911.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
