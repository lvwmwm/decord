// Module ID: 8330
// Function ID: 8331
// Name: is7Z
// Dependencies: [8325, 8326]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8330 (is7Z)
import _mod8325 from "module_8325" /* 8325 */;
import _mod8326 from "module_8326" /* 8326 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8325.getFileChunk(fileChunk);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8325.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8326.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
