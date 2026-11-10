// Module ID: 8256
// Function ID: 8257
// Name: is7Z
// Dependencies: [8251, 8252]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8256 (is7Z)
import _mod8251 from "module_8251" /* 8251 */;
import _mod8252 from "module_8252" /* 8252 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8251.getFileChunk(fileChunk);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8251.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8252.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
