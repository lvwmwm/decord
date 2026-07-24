// Module ID: 4723
// Function ID: 41094
// Name: isAVIF
// Dependencies: [4717, 4718]

// Module 4723 (isAVIF)
const require = arg1;
const dependencyMap = arg6;
arg5.isAVIF = undefined;
arg5.isBMP = undefined;
arg5.isBPG = undefined;
arg5.isCR2 = undefined;
arg5.isEXR = undefined;
arg5.isGIF = undefined;
arg5.isHEIC = undefined;
arg5.isICO = undefined;
arg5.isJPEG = undefined;
arg5.isPBM = undefined;
arg5.isPGM = undefined;
arg5.isPNG = undefined;
arg5.isPPM = undefined;
arg5.isPSD = undefined;
arg5.isWEBP = undefined;
arg5.isAVIF = function isAVIF(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "avif");
  let isAvifStringIncludedResult = !tmp2;
  if (!tmp2) {
    isAvifStringIncludedResult = require(4717) /* getFileChunk */.isAvifStringIncluded(fileChunk);
  }
  return isAvifStringIncludedResult;
};
arg5.isBMP = function isBMP(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bmp");
};
arg5.isBPG = function isBPG(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "bpg");
};
arg5.isCR2 = function isCR2(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "cr2");
};
arg5.isEXR = function isEXR(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "exr");
};
arg5.isGIF = function isGIF(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "gif");
};
arg5.isHEIC = function isHEIC(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  const tmp2 = !FileTypes.checkByFileType(fileChunk, "avif");
  let result = !tmp2;
  if (!tmp2) {
    result = require(4717) /* getFileChunk */.isHeicSignatureIncluded(fileChunk);
  }
  return result;
};
arg5.isICO = function isICO(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ico");
};
arg5.isJPEG = function isJPEG(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "jpeg");
};
arg5.isPBM = function isPBM(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pbm");
};
arg5.isPGM = function isPGM(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "pgm");
};
arg5.isPNG = function isPNG(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "png");
};
arg5.isPPM = function isPPM(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "ppm");
};
arg5.isPSD = function isPSD(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "psd");
};
arg5.isWEBP = function isWEBP(fileChunk) {
  fileChunk = require(4717) /* getFileChunk */.getFileChunk(fileChunk);
  const FileTypes = require(4718).FileTypes;
  return FileTypes.checkByFileType(fileChunk, "webp");
};
