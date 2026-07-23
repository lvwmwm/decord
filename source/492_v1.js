// Module ID: 492
// Function ID: 6420
// Name: v1
// Dependencies: [493, 494]

// Module 492 (v1)
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
let c5 = 0;
let c6 = 0;
arg5.default = function v1(arg0, arg1, arg2) {
  let obj = arg0;
  let unsafeStringifyResult = arg1;
  let num = arg1;
  if (arg1) {
    num = arg2;
  }
  if (!num) {
    num = 0;
  }
  let array = unsafeStringifyResult;
  if (!unsafeStringifyResult) {
    const _Array = Array;
    array = new Array(16);
  }
  if (!obj) {
    obj = {};
  }
  const tmp7 = undefined !== obj.clockseq ? obj.clockseq : closure_4;
  if (null == (obj.node || items)) {
    let random = obj.random;
    if (!random) {
      let rng = obj.rng;
      if (!rng) {
        rng = module(493);
      }
      random = rng();
    }
    let tmp12 = tmp6;
    if (null == tmp6) {
      items = [1 | random[0], random[1], random[2], random[3], random[4], random[5]];
      tmp12 = items;
    }
    let tmp8 = tmp12;
    let tmp9 = tmp7;
    if (null == tmp7) {
      closure_4 = tmp13;
      tmp8 = tmp12;
      tmp9 = tmp13;
    }
  } else {
    tmp8 = tmp6;
    tmp9 = tmp7;
  }
  if (undefined !== obj.msecs) {
    let msecs = obj.msecs;
  } else {
    const _Date = Date;
    msecs = Date.now();
  }
  if (undefined !== obj.nsecs) {
    let num15 = obj.nsecs;
  } else {
    num15 = num15 + 1;
  }
  let tmp16 = msecs - msecs + (num15 - num15) / 10000 < 0;
  let tmp17 = tmp16;
  if (tmp16) {
    tmp17 = undefined === obj.clockseq;
  }
  let tmp18 = tmp9;
  if (tmp17) {
    tmp18 = tmp9 + 1 & 16383;
  }
  if (!tmp16) {
    tmp16 = msecs > msecs;
  }
  if (tmp16) {
    tmp16 = undefined === obj.nsecs;
  }
  if (tmp16) {
    num15 = 0;
  }
  if (num15 >= 10000) {
    const _Error = Error;
    const error = new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    throw error;
  } else {
    closure_4 = tmp18;
    const sum = msecs + 12219292800000;
    const result = (10000 * (268435455 & sum) + num15) % 4294967296;
    array[+num] = result >>> 24 & 255;
    array[++num + 1] = result >>> 16 & 255;
    const tmp31 = +++num + 1 + 1;
    array[tmp31] = result >>> 8 & 255;
    array[+tmp31 + 1] = 255 & result;
    array[++tmp31 + 1 + 1] = (sum / 4294967296 * 10000 & 268435455) >>> 8 & 255;
    const tmp35 = +++tmp31 + 1 + 1 + 1;
    array[tmp35] = 255 & (sum / 4294967296 * 10000 & 268435455);
    array[+tmp35 + 1] = (sum / 4294967296 * 10000 & 268435455) >>> 24 & 15 | 16;
    array[++tmp35 + 1 + 1] = (sum / 4294967296 * 10000 & 268435455) >>> 16 & 255;
    const tmp38 = +++tmp35 + 1 + 1 + 1;
    array[tmp38] = tmp18 >>> 8 | 128;
    array[+tmp38 + 1] = 255 & tmp18;
    let num18 = 0;
    do {
      array[tmp39 + 1 + num18] = tmp8[num18];
      num18 = num18 + 1;
    } while (num18 < 6);
    if (!unsafeStringifyResult) {
      unsafeStringifyResult = require(494) /* unsafeStringify */.unsafeStringify(array);
      const obj2 = require(494) /* unsafeStringify */;
    }
    return unsafeStringifyResult;
  }
};
