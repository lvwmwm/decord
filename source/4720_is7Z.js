// Module ID: 4720
// Function ID: 41051
// Name: is7Z
// Dependencies: []

// Module 4720 (is7Z)
arg5.is7Z = undefined;
arg5.isLZH = undefined;
arg5.isRAR = undefined;
arg5.isZIP = undefined;
arg5.is7Z = function is7Z(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "_7z");
};
arg5.isLZH = function isLZH(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "lzh");
};
arg5.isRAR = function isRAR(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
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
  fileChunk = chunkSize(arg6[0]).getFileChunk(fileChunk, num);
  const FileTypes = chunkSize(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "zip");
};
