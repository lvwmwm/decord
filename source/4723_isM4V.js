// Module ID: 4723
// Function ID: 41088
// Name: isM4V
// Dependencies: []

// Module 4723 (isM4V)
function isM4V(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "m4v");
  let isftypStringIncludedResult = !tmp2;
  if (!tmp2) {
    isftypStringIncludedResult = arg1(arg6[0]).isftypStringIncluded(fileChunk);
  }
  return isftypStringIncludedResult;
}
arg5.isAVI = undefined;
arg5.isFLV = undefined;
arg5.isM4V = undefined;
arg5.isMKV = undefined;
arg5.isMOV = undefined;
arg5.isMP4 = undefined;
arg5.isOGG = undefined;
arg5.isSWF = undefined;
arg5.isWEBM = undefined;
arg5.isAVI = function isAVI(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
arg5.isFLV = function isFLV(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "flv");
  let isFlvStringIncludedResult = !tmp2;
  if (!tmp2) {
    isFlvStringIncludedResult = arg1(arg6[0]).isFlvStringIncluded(fileChunk);
  }
  return isFlvStringIncludedResult;
};
arg5.isM4V = isM4V;
arg5.isMKV = function isMKV(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk, 64);
  const FileTypes = arg1(arg6[1]).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "mkv");
  let tmp3 = !tmp2;
  if (!tmp2) {
    tmp3 = "mkv" === arg1(arg6[0]).findMatroskaDocTypeElements(fileChunk);
  }
  return tmp3;
};
arg5.isMOV = function isMOV(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
arg5.isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = excludeSimilarTypes(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = excludeSimilarTypes(arg6[1]).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "mp4");
  let tmp3 = !tmp2;
  if (tmp2) {
    excludeSimilarTypes = undefined;
    if (null != excludeSimilarTypes) {
      excludeSimilarTypes = excludeSimilarTypes.excludeSimilarTypes;
    }
    let tmp6 = !excludeSimilarTypes;
    if (tmp6) {
      tmp6 = isM4V(fileChunk);
    }
    tmp3 = tmp6;
  }
  return tmp3;
};
arg5.isOGG = function isOGG(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
arg5.isSWF = function isSWF(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk);
  const FileTypes = arg1(arg6[1]).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
arg5.isWEBM = function isWEBM(fileChunk) {
  fileChunk = arg1(arg6[0]).getFileChunk(fileChunk, 64);
  const FileTypes = arg1(arg6[1]).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "webm");
  let tmp3 = !tmp2;
  if (!tmp2) {
    tmp3 = "webm" === arg1(arg6[0]).findMatroskaDocTypeElements(fileChunk);
  }
  return tmp3;
};
