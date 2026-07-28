// Module ID: 4760
// Function ID: 41254
// Name: isM4V
// Dependencies: [4752, 4753]

// Module 4760 (isM4V)
const require = arg1;
const dependencyMap = arg6;
function isM4V(fileChunk) {
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4753).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "m4v");
  let isftypStringIncludedResult = !tmp2;
  if (!tmp2) {
    isftypStringIncludedResult = require(4752) /* getFileChunk */.isftypStringIncluded(fileChunk);
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
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4753).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "avi");
};
arg5.isFLV = function isFLV(fileChunk) {
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4753).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "flv");
  let isFlvStringIncludedResult = !tmp2;
  if (!tmp2) {
    isFlvStringIncludedResult = require(4752) /* getFileChunk */.isFlvStringIncluded(fileChunk);
  }
  return isFlvStringIncludedResult;
};
arg5.isM4V = isM4V;
arg5.isMKV = function isMKV(fileChunk) {
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk, 64);
  const FileTypes = require(4753).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "mkv");
  let tmp3 = !tmp2;
  if (!tmp2) {
    tmp3 = "mkv" === require(4752) /* getFileChunk */.findMatroskaDocTypeElements(fileChunk);
  }
  return tmp3;
};
arg5.isMOV = function isMOV(fileChunk) {
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4753).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mov");
};
arg5.isMP4 = function isMP4(fileChunk, excludeSimilarTypes) {
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4753).FileTypes;
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
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4753).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ogg");
};
arg5.isSWF = function isSWF(fileChunk) {
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4753).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "swf");
};
arg5.isWEBM = function isWEBM(fileChunk) {
  fileChunk = require(4752) /* getFileChunk */.getFileChunk(fileChunk, 64);
  const FileTypes = require(4753).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "webm");
  let tmp3 = !tmp2;
  if (!tmp2) {
    tmp3 = "webm" === require(4752) /* getFileChunk */.findMatroskaDocTypeElements(fileChunk);
  }
  return tmp3;
};
