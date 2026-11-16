// Module ID: 8359
// Function ID: 8360
// Name: is7Z
// Dependencies: [8354, 8355]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8359 (is7Z)
import _mod8354 from "module_8354" /* 8354 */;
import _mod8355 from "module_8355" /* 8355 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8354.getFileChunk(fileChunk);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8354.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8355.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
