// Module ID: 4721
// Function ID: 41078
// Name: isM4A
// Dependencies: [4717, 4718]

// Module 4721 (isM4A)
const require = arg1;
const dependencyMap = arg6;
function isM4A(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "m4a");
}
arg5.isAAC = undefined;
arg5.isAMR = undefined;
arg5.isFLAC = undefined;
arg5.isM4A = undefined;
arg5.isMP3 = undefined;
arg5.isWAV = undefined;
arg5.isAAC = function isAAC(fileChunk, excludeSimilarTypes) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
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
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "amr");
};
arg5.isFLAC = function isFLAC(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "flac");
};
arg5.isM4A = isM4A;
arg5.isMP3 = function isMP3(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "mp3");
};
arg5.isWAV = function isWAV(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "wav");
};
