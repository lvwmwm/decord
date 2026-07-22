// Module ID: 4721
// Function ID: 41088
// Name: isBLEND
// Dependencies: []

// Module 4721 (isBLEND)
arg5.isBLEND = undefined;
arg5.isELF = undefined;
arg5.isEXE = undefined;
arg5.isMACHO = undefined;
arg5.isINDD = undefined;
arg5.isORC = undefined;
arg5.isPARQUET = undefined;
arg5.isPDF = undefined;
arg5.isPS = undefined;
arg5.isRTF = undefined;
arg5.isSQLITE = undefined;
arg5.isSTL = undefined;
arg5.isTTF = undefined;
arg5.isDOC = undefined;
arg5.isPCAP = undefined;
arg5.isBLEND = function isBLEND(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "blend");
};
arg5.isELF = function isELF(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "elf");
};
arg5.isEXE = function isEXE(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exe");
};
arg5.isMACHO = function isMACHO(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "macho");
};
arg5.isINDD = function isINDD(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "indd");
};
arg5.isORC = function isORC(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "orc");
};
arg5.isPARQUET = function isPARQUET(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "parquet");
};
arg5.isPDF = function isPDF(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pdf");
};
arg5.isPS = function isPS(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ps");
};
arg5.isRTF = function isRTF(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "rtf");
};
arg5.isSQLITE = function isSQLITE(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "sqlite");
};
arg5.isSTL = function isSTL(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "stl");
};
arg5.isTTF = function isTTF(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ttf");
};
arg5.isDOC = function isDOC(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "doc");
};
arg5.isPCAP = function isPCAP(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pcap");
};
