// Module ID: 4713
// Function ID: 41009
// Name: detectFile
// Dependencies: []

// Module 4713 (detectFile)
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
  const fileChunk = chunkSize(arg6[0]).getFileChunk(uint8Array, num3);
  if (0 !== fileChunk.length) {
    const items = [];
    const items1 = [];
    for (const key10027 in closure_0(closure_1[1]).FileTypes) {
      let tmp27 = key10027;
      let _Object4 = Object;
      let tmp28 = closure_0;
      let tmp29 = closure_1;
      if (!hasOwnProperty2.call(closure_0(closure_1[1]).FileTypes, key10027)) {
        continue;
      } else {
        let tmp4 = closure_0;
        let tmp5 = closure_1;
        let FileTypes = closure_0(closure_1[1]).FileTypes;
        let signaturesByName = FileTypes.getSignaturesByName(key10027);
        let FileTypes2 = closure_0(closure_1[1]).FileTypes;
        let detectbBySignaturesResult = FileTypes2.detectbBySignatures(fileChunk, signaturesByName);
        let tmp8 = detectbBySignaturesResult;
        if (!detectbBySignaturesResult) {
          continue;
        } else {
          let tmp9 = closure_0;
          let tmp10 = closure_1;
          let FileTypes3 = closure_0(closure_1[1]).FileTypes;
          let infoByName = FileTypes3.getInfoByName(key10027);
          let FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = closure_0(closure_1[1]).FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
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
          // continue
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
      const FileTypes4 = chunkSize(arg6[1]).FileTypes;
      const result = FileTypes4.detectTypeByAdditionalCheck(fileChunk, items);
      chunkSize = result;
      if (result) {
        return items.find((extension) => extension.extension === result);
      }
    }
  }
};
