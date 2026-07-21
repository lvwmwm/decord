// Module ID: 8876
// Function ID: 69977
// Name: generateDisplayableCode
// Dependencies: []
// Exports: generateDisplayableCode

// Module 8876 (generateDisplayableCode)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/libdave/package/src/DisplayableCode.ts");

export const generateDisplayableCode = function generateDisplayableCode(toByteArrayResult, desiredLength, chunkSize) {
  if (toByteArrayResult.byteLength < desiredLength) {
    const _Error4 = Error;
    const error = new Error("data.byteLength must be greater than or equal to desiredLength");
    throw error;
  } else if (desiredLength % chunkSize != 0) {
    const _Error3 = Error;
    const error1 = new Error("desiredLength must be a multiple of groupSize");
    throw error1;
  } else if (chunkSize > 8) {
    const _Error2 = Error;
    const error2 = new Error("groupSize must be less than or equal to 8");
    throw error2;
  } else {
    const _BigInt3 = BigInt;
    let str2 = "";
    const bigint = 6n;
    let num = 0;
    let str3 = "";
    if (0 < desiredLength) {
      while (true) {
        let _BigInt = BigInt;
        let BigIntResult = BigInt(0);
        let tmp2 = BigIntResult;
        let diff = chunkSize;
        if (chunkSize > 0) {
          let tmp4 = toByteArrayResult[num + (chunkSize - diff)];
          while (undefined !== tmp4) {
            let _BigInt2 = BigInt;
            let tmp5 = BigIntResult << 6n;
            BigIntResult = tmp5 | BigInt(tmp4);
            diff = diff - 1;
            tmp2 = BigIntResult;
            let tmp6 = tmp4;
            continue;
          }
          let _Error = Error;
          let tmp7 = new.target;
          let str4 = "Out of bounds access from data array";
          let tmp8 = new.target;
          let error3 = new Error("Out of bounds access from data array");
          let tmp10 = error3;
          throw error3;
        }
        let str = tmp2 % tmp28;
        str = str.toString();
        str2 = str2 + str.padStart(chunkSize, "0");
        num = num + chunkSize;
        str3 = str2;
      }
    }
    return str3;
  }
};
