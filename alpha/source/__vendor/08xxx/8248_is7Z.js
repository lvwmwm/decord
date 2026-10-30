// Module ID: 8248
// Function ID: 8249
// Name: is7Z
// Dependencies: [8243, 8244]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8248 (is7Z)
import _mod8243 from "module_8243" /* 8243 */;
import _mod8244 from "module_8244" /* 8244 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8243.getFileChunk(fileChunk);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8243.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8244.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
