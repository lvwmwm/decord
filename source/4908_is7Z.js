// Module ID: 4908
// Function ID: 4909
// Name: is7Z
// Dependencies: [4903, 4904]

// Module 4908 (is7Z)
const require = arg1;
const dependencyMap = arg6;
arg5.is7Z = undefined;
arg5.isLZH = undefined;
arg5.isRAR = undefined;
arg5.isZIP = undefined;
arg5.is7Z = function is7Z(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
arg5.isLZH = function isLZH(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
arg5.isRAR = function isRAR(fileChunk) {
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rar");
};
arg5.isZIP = function isZIP(fileChunk, chunkSize) {
  let num;
  if (null != chunkSize) {
    num = chunkSize.chunkSize;
  }
  if (!num) {
    num = 64;
  }
  fileChunk = require(4903) /* getFileChunk */.getFileChunk(fileChunk, num);
  const FileTypes = require(4904).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
