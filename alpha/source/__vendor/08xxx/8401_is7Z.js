// Module ID: 8401
// Function ID: 8402
// Name: is7Z
// Dependencies: [8396, 8397]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8401 (is7Z)
import _mod8396 from "module_8396" /* 8396 */;
import _mod8397 from "module_8397" /* 8397 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8396.getFileChunk(fileChunk);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8396.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8397.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
