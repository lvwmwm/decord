// Module ID: 4716
// Function ID: 41027
// Name: detectFile
// Dependencies: [4717, 4718]

// Module 4716 (detectFile)
let require = arg1;
const dependencyMap = arg6;
arg5.detectFile = function detectFile(uint8Array, chunkSize) {
  if (chunkSize) {
    const _Object = Object;
    if (hasOwnProperty.call(chunkSize, "chunkSize")) {
      chunkSize = undefined;
      if (null != chunkSize) {
        chunkSize = chunkSize.chunkSize;
      }
      let num2 = 0;
      if (null !== chunkSize) {
        num2 = 0;
        if (undefined !== chunkSize) {
          num2 = chunkSize;
        }
      }
      if (num2 <= 0) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("chunkSize must be bigger than zero");
        throw rangeError;
      }
    }
  }
  let num3;
  if (null != chunkSize) {
    num3 = chunkSize.chunkSize;
  }
  if (!num3) {
    num3 = 64;
  }
  const fileChunk = require(4717) /* getFileChunk */.getFileChunk(uint8Array, num3);
  if (0 !== fileChunk.length) {
    const items = [];
    const items1 = [];
    for (const key10027 in require(4718).FileTypes) {
      let tmp27 = key10027;
      let _Object4 = Object;
      let tmp28 = require;
      let tmp29 = dependencyMap;
      if (!hasOwnProperty2.call(require(4718).FileTypes, key10027)) {
        continue;
      } else {
        let tmp4 = require;
        let tmp5 = dependencyMap;
        let FileTypes = require(4718).FileTypes;
        let signaturesByName = FileTypes.getSignaturesByName(key10027);
        let FileTypes2 = require(4718).FileTypes;
        let detectbBySignaturesResult = FileTypes2.detectbBySignatures(fileChunk, signaturesByName);
        let tmp8 = detectbBySignaturesResult;
        if (!detectbBySignaturesResult) {
          continue;
        } else {
          let tmp9 = require;
          let tmp10 = dependencyMap;
          let FileTypes3 = require(4718).FileTypes;
          let infoByName = FileTypes3.getInfoByName(key10027);
          let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = require(4718).FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
          if (FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(infoByName.extension)) {
            let arr = items1.push(infoByName.extension);
          }
          let obj = {};
          ({ extension: obj.extension, mimeType: obj.mimeType, description: obj.description } = infoByName);
          let _Object2 = Object;
          let _Object3 = Object;
          obj = {};
          let sequence = detectbBySignaturesResult.sequence;
          let merged = Object.assign({}, detectbBySignaturesResult);
          obj.sequence = sequence.map((arg0) => arg0.toString(16));
          obj.signature = Object.assign(merged, obj);
          arr = items.push(obj);
          let tmp15 = detectbBySignaturesResult;
          let tmp16 = infoByName;
          continue;
        }
        continue;
      }
      continue;
    }
    if (0 !== items.length) {
      if (1 === items.length) {
        if (0 === items1.length) {
          return items[0];
        }
      }
      const FileTypes4 = require(4718).FileTypes;
      const result = FileTypes4.detectTypeByAdditionalCheck(fileChunk, items);
      require = result;
      if (result) {
        return items.find((extension) => extension.extension === closure_0);
      }
    }
  }
};
