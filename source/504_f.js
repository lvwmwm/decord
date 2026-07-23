// Module ID: 504
// Function ID: 6449
// Name: f
// Dependencies: []

// Module 504 (f)
function f(arg0, arg1, arg2, arg3) {
  if (0 === arg0) {
    return arg1 & arg2 ^ ~arg1 & arg3;
  } else {
    if (1 !== arg0) {
      if (3 !== arg0) {
        if (2 === arg0) {
          return arg1 & arg2 ^ arg1 & arg3 ^ arg2 & arg3;
        }
      }
    }
    return arg1 ^ arg2 ^ arg3;
  }
}
function ROTL(arg0, arg1) {
  return arg0 << arg1 | arg0 >>> 32 - arg1;
}
arg5.default = function sha1(arg0) {
  let length;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  const items = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if ("string" === typeof arg0) {
    const _unescape = unescape;
    const _encodeURIComponent = encodeURIComponent;
    const unescapeResult = unescape(encodeURIComponent(arg0));
    const items1 = [];
    let num = 0;
    let callResult = items1;
    if (0 < unescapeResult.length) {
      do {
        let arr = items1.push(unescapeResult.charCodeAt(num));
        num = num + 1;
        callResult = items1;
        length = unescapeResult.length;
      } while (num < length);
    }
  } else {
    const _Array = Array;
    callResult = arg0;
    if (!Array.isArray(arg0)) {
      const _Array2 = Array;
      callResult = slice.call(arg0);
    }
  }
  callResult.push(128);
  const rounded = Math.ceil((callResult.length / 4 + 2) / 16);
  const array = new Array(rounded);
  let num2 = 0;
  if (0 < rounded) {
    const _Uint32Array = Uint32Array;
    const uint32Array = new Uint32Array(16);
    let num4 = 0;
    do {
      do {
        uint32Array[num4] = callResult[64 * num2 + 4 * num4] << 24 | callResult[64 * num2 + 4 * num4 + 1] << 16 | callResult[64 * num2 + 4 * num4 + 2] << 8 | callResult[64 * num2 + 4 * num4 + 3];
        num4 = num4 + 1;
      } while (num4 < 16);
      array[num2] = uint32Array;
      num2 = num2 + 1;
    } while (num2 < rounded);
  }
  const diff = callResult.length - 1;
  array[rounded - 1][14] = 8 * diff / Math.pow(2, 32);
  array[rounded - 1][14] = Math.floor(array[rounded - 1][14]);
  array[rounded - 1][15] = 8 * (callResult.length - 1) & 4294967295;
  let num5 = 0;
  if (0 < rounded) {
    const _Uint32Array2 = Uint32Array;
    const uint32Array1 = new Uint32Array(80);
    let num7 = 0;
    do {
      do {
        uint32Array1[num7] = array[num5][num7];
        num7 = num7 + 1;
        let num8 = 16;
      } while (num7 < 16);
      do {
        let tmp16 = ROTL;
        uint32Array1[num8] = ROTL(uint32Array1[num8 - 3] ^ uint32Array1[num8 - 8] ^ uint32Array1[num8 - 14] ^ uint32Array1[num8 - 16], 1);
        num8 = num8 + 1;
      } while (num8 < 80);
      [tmp17, tmp18, tmp19, tmp20, tmp21] = items;
      let num9 = 0;
      do {
        let _Math = Math;
        let rounded1 = Math.floor(num9 / 20);
        let tmp23 = ROTL;
        let tmp25 = f;
        let tmp26 = rounded1;
        let tmp27 = tmp18;
        let tmp28 = tmp19;
        let tmp29 = tmp20;
        let tmp24 = ROTL(tmp17, 5);
        let tmp30 = tmp24 + f(rounded1, tmp18, tmp19, tmp20) + tmp21 + [1518500249, 1859775393, 2400959708, 3395469782][rounded1] + uint32Array1[num9] >>> 0;
        let tmp31 = ROTL(tmp18, 30) >>> 0;
        num9 = num9 + 1;
        let tmp32 = tmp17;
        let tmp33 = tmp19;
        let tmp34 = tmp20;
        tmp17 = tmp30;
        tmp18 = tmp32;
        tmp19 = tmp31;
        tmp20 = tmp33;
        tmp21 = tmp34;
      } while (num9 < 80);
      items[0] = items[0] + tmp30 >>> 0;
      items[1] = items[1] + tmp32 >>> 0;
      items[2] = items[2] + tmp31 >>> 0;
      items[3] = items[3] + tmp33 >>> 0;
      items[4] = items[4] + tmp34 >>> 0;
      num5 = num5 + 1;
    } while (num5 < rounded);
  }
  const items2 = [items[0] >> 24 & 255, items[0] >> 16 & 255, items[0] >> 8 & 255, 255 & items[0], items[1] >> 24 & 255, items[1] >> 16 & 255, items[1] >> 8 & 255, 255 & items[1], items[2] >> 24 & 255, items[2] >> 16 & 255, items[2] >> 8 & 255, 255 & items[2], items[3] >> 24 & 255, items[3] >> 16 & 255, items[3] >> 8 & 255, 255 & items[3], items[4] >> 24 & 255, items[4] >> 16 & 255, items[4] >> 8 & 255, 255 & items[4]];
  return items2;
};
