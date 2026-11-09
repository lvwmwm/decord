// Module ID: 8326
// Function ID: 8327
// Name: is7Z
// Dependencies: [8321, 8322]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8326 (is7Z)
import _mod8321 from "module_8321" /* 8321 */;
import _mod8322 from "module_8322" /* 8322 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8321.getFileChunk(fileChunk);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8321.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8322.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
