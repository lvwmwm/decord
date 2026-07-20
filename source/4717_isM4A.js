// Module ID: 4717
// Function ID: 41003
// Name: isM4A
// Dependencies: [0, 0]

// Module 4717 (isM4A)
function isM4A(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
arg5.isAAC = undefined;
arg5.isAMR = undefined;
arg5.isFLAC = undefined;
arg5.isM4A = undefined;
arg5.isMP3 = undefined;
arg5.isWAV = undefined;
arg5.isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = excludeSimilarTypes(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = excludeSimilarTypes(arg6[1]).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "aac");
  let tmp3 = !tmp2;
  if (tmp2) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp6 = !excludeSimilarTypes;
    if (tmp6) {
      tmp6 = isM4A(fileChunk);
    }
    tmp3 = tmp6;
  }
  return tmp3;
};
arg5.isAMR = function isAMR(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
arg5.isFLAC = function isFLAC(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
arg5.isM4A = isM4A;
arg5.isMP3 = function isMP3(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
arg5.isWAV = function isWAV(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
