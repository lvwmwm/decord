// Module ID: 8347
// Function ID: 8348
// Name: is7Z
// Dependencies: [8342, 8343]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8347 (is7Z)
import _mod8342 from "module_8342" /* 8342 */;
import _mod8343 from "module_8343" /* 8343 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8342.getFileChunk(fileChunk);
  const FileTypes = _mod8343.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8342.getFileChunk(fileChunk);
  const FileTypes = _mod8343.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8342.getFileChunk(fileChunk);
  const FileTypes = _mod8343.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8342.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8343.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
