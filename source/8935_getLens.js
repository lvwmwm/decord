// Module ID: 8935
// Function ID: 70378
// Name: getLens
// Dependencies: []

// Module 8935 (getLens)
function getLens(arr) {
  if (arr.length % 4 > 0) {
    const _Error = Error;
    const error = new Error("Invalid string. Length must be a multiple of 4");
    throw error;
  } else {
    let index = arr.indexOf("=");
    if (-1 === index) {
      index = length;
    }
    const items = [index, ];
    let num2 = 0;
    if (index !== length) {
      num2 = 4 - index % 4;
    }
    items[1] = num2;
    return items;
  }
}
function encodeChunk(arg0, arg1, arg2) {
  let sum1 = arg1;
  const items = [];
  if (arg1 < arg2) {
    do {
      let sum = (arg0[sum1] << 16 & 16711680) + (arg0[sum1 + 1] << 8 & 65280) + (255 & arg0[sum1 + 2]);
      let tmp3 = dependencyMap;
      let tmp4 = dependencyMap;
      let tmp5 = dependencyMap;
      let tmp6 = dependencyMap;
      let arr = items.push(dependencyMap[sum >> 18 & 63] + dependencyMap[sum >> 12 & 63] + dependencyMap[sum >> 6 & 63] + dependencyMap[63 & sum]);
      sum1 = sum1 + 3;
    } while (sum1 < arg2);
  }
  return items.join("");
}
arg5.byteLength = function byteLength(arg0) {
  const tmp = getLens(arg0);
  return 3 * (tmp[0] + tmp[1]) / 4 - tmp[1];
};
arg5.toByteArray = function toByteArray(arg0) {
  const tmp = getLens(arg0);
  const first = tmp[0];
  const tmp4 = new closure_2(3 * (first + tmp[1]) / 4 - tmp[1]);
  let diff = first;
  if (tmp[1] > 0) {
    diff = first - 4;
  }
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (0 < diff) {
    do {
      let tmp6 = dependencyMap2;
      let tmp8 = dependencyMap2;
      let tmp7 = dependencyMap2[arg0.charCodeAt(arg0, num)] << 18;
      let tmp10 = dependencyMap2;
      let tmp9 = dependencyMap2[arg0.charCodeAt(arg0, num + 1)] << 12;
      let tmp12 = dependencyMap2;
      let tmp11 = dependencyMap2[arg0.charCodeAt(arg0, num + 2)] << 6;
      let tmp13 = tmp7 | tmp9 | tmp11 | dependencyMap2[arg0.charCodeAt(arg0, num + 3)];
      let tmp14 = +num2;
      tmp4[tmp14] = tmp13 >> 16 & 255;
      let tmp15 = +tmp14 + 1;
      tmp4[tmp15] = tmp13 >> 8 & 255;
      let tmp16 = +tmp15 + 1;
      num2 = tmp16 + 1;
      tmp4[tmp16] = 255 & tmp13;
      num = num + 4;
      num4 = num2;
      num3 = num;
    } while (num < diff);
  }
  let sum = num4;
  if (2 === tmp[1]) {
    sum = tmp21 + 1;
    tmp4[+num4] = 255 & (dependencyMap2[arg0.charCodeAt(arg0, num3)] << 2 | dependencyMap2[arg0.charCodeAt(arg0, num3 + 1)] >> 4);
    const tmp19 = dependencyMap2[arg0.charCodeAt(arg0, num3)] << 2;
  }
  if (1 === tmp[1]) {
    const tmp23 = dependencyMap2[arg0.charCodeAt(arg0, num3)] << 10;
    const tmp27 = tmp23 | dependencyMap2[arg0.charCodeAt(arg0, num3 + 1)] << 4 | dependencyMap2[arg0.charCodeAt(arg0, num3 + 2)] >> 2;
    tmp4[+sum] = tmp27 >> 8 & 255;
    tmp4[++sum + 1] = 255 & tmp27;
    const tmp25 = dependencyMap2[arg0.charCodeAt(arg0, num3 + 1)] << 4;
  }
  return tmp4;
};
arg5.fromByteArray = function fromByteArray(arg0) {
  let sum;
  const result = length % 3;
  const items = [];
  const diff = length - result;
  let num = 0;
  if (0 < diff) {
    do {
      sum = num + 16383;
      let tmp5 = sum;
      let tmp3 = encodeChunk;
      if (sum > diff) {
        tmp5 = diff;
      }
      let arr = items.push(tmp3(arg0, num, tmp5));
      num = sum;
    } while (sum < diff);
  }
  if (1 === result) {
    items.push(`${closure_0[arg0[length - 1] >> 2]}${closure_0[arg0[length - 1] << 4 & 63]}==`);
  } else if (2 === result) {
    const sum1 = (arg0[length - 2] << 8) + arg0[length - 1];
    items.push(`${closure_0[tmp11 >> 10]}${closure_0[tmp11 >> 4 & 63]}${closure_0[tmp11 << 2 & 63]}=`);
  }
  return items.join("");
};
let closure_0 = [];
let closure_1 = [];
let num = globalThis;
let closure_2 = "undefined" !== typeof Uint8Array ? num.Uint8Array : Array;
num = 0;
