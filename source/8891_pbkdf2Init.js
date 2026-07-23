// Module ID: 8891
// Function ID: 70109
// Name: pbkdf2Init
// Dependencies: [5, 8889, 8888, 8892]
// Exports: pbkdf2, pbkdf2Async

// Module 8891 (pbkdf2Init)
import asyncGeneratorStep from "asyncGeneratorStep";

function pbkdf2Init(sha256, B, B, arg3) {
  let asyncTick;
  let c;
  let dkLen;
  require(8889) /* number */.hash(sha256);
  ({ c, dkLen, asyncTick } = require(8888) /* asciiToBase16 */.checkOpts({ dkLen: 32, asyncTick: 10 }, arg3));
  require(8889) /* number */.number(c);
  require(8889) /* number */.number(dkLen);
  require(8889) /* number */.number(asyncTick);
  if (c < 1) {
    const _Error = Error;
    const error = new Error("PBKDF2: iterations (c) should be >= 1");
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const toBytesResult = require(8888) /* asciiToBase16 */.toBytes(B);
    const uint8Array = new Uint8Array(dkLen);
    const hmac = require(8892) /* _isNativeReflectConstruct */.hmac;
    let obj = hmac.create(sha256, toBytesResult);
    const toBytesResult1 = require(8888) /* asciiToBase16 */.toBytes(B);
    obj = { c, dkLen, asyncTick, DK: uint8Array };
    obj.PRF = obj;
    obj.PRFSalt = obj._cloneInto().update(toBytesResult1);
    return obj;
  }
  const checkOptsResult = require(8888) /* asciiToBase16 */.checkOpts({ dkLen: 32, asyncTick: 10 }, arg3);
}
function pbkdf2Output(PRF, PRFSalt, DK, destroy3, uint8Array1) {
  PRF.destroy();
  PRFSalt.destroy();
  if (destroy3) {
    destroy3.destroy();
  }
  uint8Array1.fill(0);
  return DK;
}
function _pbkdf2Async() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = asyncGeneratorStep(tmp);
  return obj(...arguments);
}

export const pbkdf2 = function pbkdf2(sha256, B, B, arg3) {
  let DK;
  let PRF;
  let PRFSalt;
  let c;
  let dkLen;
  ({ c, dkLen, DK, PRF, PRFSalt } = pbkdf2Init(sha256, B, B, arg3));
  const uint8Array = new Uint8Array(4);
  const view = require(8888) /* asciiToBase16 */.createView(uint8Array);
  const uint8Array1 = new Uint8Array(PRF.outputLen);
  let num = 1;
  let num2 = 0;
  let tmp4;
  if (0 < dkLen) {
    do {
      let subarrayResult = DK.subarray(num2, num2 + PRF.outputLen);
      let setInt32Result = view.setInt32(0, num, false);
      let _cloneIntoResult = PRFSalt._cloneInto(tmp3);
      let updateResult = _cloneIntoResult.update(uint8Array);
      let digestIntoResult = updateResult.digestInto(uint8Array1);
      let result = subarrayResult.set(uint8Array1.subarray(0, subarrayResult.length));
      let tmp8 = num;
      let tmp9 = num2;
      let num3 = 1;
      if (1 < c) {
        do {
          let _cloneIntoResult1 = PRF._cloneInto(_cloneIntoResult);
          let updateResult1 = _cloneIntoResult1.update(uint8Array1);
          let digestIntoResult1 = updateResult1.digestInto(uint8Array1);
          let num4 = 0;
          let num5 = 0;
          if (0 < subarrayResult.length) {
            do {
              subarrayResult[num4] = subarrayResult[num4] ^ uint8Array1[num4];
              num4 = num4 + 1;
              num5 = num4;
              length = subarrayResult.length;
            } while (num4 < length);
          }
          num3 = num3 + 1;
          let tmp11 = num5;
        } while (num3 < c);
      }
      num = num + 1;
      num2 = num2 + PRF.outputLen;
      tmp3 = _cloneIntoResult;
      tmp4 = _cloneIntoResult;
    } while (num2 < dkLen);
  }
  pbkdf2Output(PRF, PRFSalt, DK, tmp4, uint8Array1);
  return DK;
};
export const pbkdf2Async = function pbkdf2Async(arg0, arg1, arg2, arg3) {
  return _pbkdf2Async(...arguments);
};
