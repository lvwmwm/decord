// Module ID: 8849
// Function ID: 8850
// Name: is7Z
// Dependencies: [8844, 8845]
// Exports: is7Z, isLZH, isRAR, isZIP

// Module 8849 (is7Z)
import _mod8844 from "module_8844" /* 8844 */;
import _mod8845 from "module_8845" /* 8845 */;


export function is7Z(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
}
export function isLZH(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
}
export function isRAR(fileChunk) {
  fileChunk = _mod8844.getFileChunk(fileChunk);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
}
export function isZIP(fileChunk, chunkSize) {
  let num;
  const getFileChunk = _mod8844.getFileChunk;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = getFileChunk(fileChunk, num);
  const FileTypes = _mod8845.FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
}
