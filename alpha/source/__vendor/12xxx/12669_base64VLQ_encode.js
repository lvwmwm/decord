// Module ID: 12669
// Function ID: 12670
// Name: base64VLQ_encode
// Dependencies: [12670]
// Exports: decode, encode

// Module 12669 (base64VLQ_encode)
import _mod12670 from "module_12670" /* 12670 */;


export const encode = function base64VLQ_encode(arg0) {
  let sum;
  let sum1;
  let tmp3;
  if (arg0 < 0) {
    sum = 1 + (-arg0 << 1);
  } else {
    sum = arg0 << 1;
  }
  let str = "";
  do {
    let tmp2 = 31 & sum;
    tmp3 = sum >>> 5;
    let tmp5 = tmp2;
    if (0 < tmp3) {
      tmp5 = tmp2 | 32;
    }
    let encoder = _mod12670;
    sum1 = str + encoder.encode(tmp5);
    str = sum1;
    sum = tmp3;
  } while (0 < tmp3);
  return sum1;
};
export const decode = function base64VLQ_decode(str, arg1, arg2) {
  let tmp = arg1;
  let num = 0;
  let num2 = 0;
  while (tmp < str.length) {
    let decoder = _mod12670;
    let tmp12 = +tmp;
    let sum = tmp12 + 1;
    let decodeResult = decoder.decode(str.charCodeAt(tmp12));
    if (-1 === decodeResult) {
      let tmp6 = globalThis;
      let _Error = Error;
      str = "Invalid base64 digit: ";
      let self = this;
      let self2 = this;
      let error = new Error("Invalid base64 digit: " + str.charAt(sum - 1));
      throw error;
    } else {
      let sum1 = num2 + ((decodeResult & 31) << num);
      num = num + 5;
      num2 = sum1;
      tmp = sum;
      if (32 & decodeResult) {
        continue;
      } else {
        let tmp3 = sum1 >> 1;
        let tmp4 = tmp3;
        if (!(1 & ~sum1)) {
          tmp4 = -tmp3;
        }
        arg2.value = tmp4;
        arg2.rest = sum;
      }
    }
  }
  const error1 = new Error("Expected more digits in base 64 VLQ value.");
  throw error1;
};
