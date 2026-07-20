// Module ID: 1286
// Function ID: 15042
// Name: parts
// Dependencies: []

// Module 1286 (parts)
import charCodeAtResult from "module_0";

let length;
arg5.base64decode = undefined;
arg5.base64encode = undefined;
const parts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
const items = [];
let num = 0;
if (0 < parts.length) {
  do {
    let obj = parts[num];
    items[require("module_0")] = num;
    num = num + 1;
    length = parts.length;
  } while (num < length);
}
items[require("module_0")] = parts.indexOf("+");
items[require("module_0")] = parts.indexOf("/");
arg5.base64decode = function base64decode(actionData) {
  const result = 3 * actionData.length / 4;
  if ("=" == actionData[actionData.length - 2]) {
    let diff = result - 2;
  } else {
    diff = result;
    if ("=" == actionData[actionData.length - 1]) {
      diff = result - 1;
    }
  }
  const uint8Array = new Uint8Array(diff);
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  if (0 < actionData.length) {
    while (true) {
      let tmp3 = items;
      let tmp4 = items[actionData.charCodeAt(actionData, num5)];
      let tmp5 = num5;
      if (undefined === tmp4) {
        let tmp10 = actionData[num5];
        if ("=" === tmp10) {
          let sum = num2;
          let num8 = 0;
          let tmp7 = num4;
        } else {
          sum = num2;
          num8 = num3;
          tmp7 = num4;
          if ("\n" !== tmp10) {
            sum = num2;
            num8 = num3;
            tmp7 = num4;
            if ("\r" !== tmp10) {
              sum = num2;
              num8 = num3;
              tmp7 = num4;
              if ("\t" !== tmp10) {
                sum = num2;
                num8 = num3;
                tmp7 = num4;
                if (" " !== tmp10) {
                  break;
                }
              }
            }
          }
        }
      } else if (0 === num3) {
        sum = num2;
        num8 = 1;
        tmp7 = tmp4;
      } else if (1 === num3) {
        let tmp9 = +num2;
        sum = tmp9 + 1;
        uint8Array[tmp9] = num4 << 2 | (48 & tmp4) >> 4;
        num8 = 2;
        tmp7 = tmp4;
      } else if (2 === num3) {
        let tmp8 = +num2;
        sum = tmp8 + 1;
        uint8Array[tmp8] = (15 & num4) << 4 | (60 & tmp4) >> 2;
        num8 = 3;
        tmp7 = tmp4;
      } else {
        sum = num2;
        tmp7 = num4;
        num8 = num3;
        if (3 === num3) {
          let tmp11 = +num2;
          sum = tmp11 + 1;
          uint8Array[tmp11] = (3 & num4) << 6 | tmp4;
          num8 = 0;
          tmp7 = num4;
        }
      }
      num5 = num5 + 1;
      num2 = sum;
      num3 = num8;
      num4 = tmp7;
      num6 = sum;
      num7 = num8;
    }
    const _Error = Error;
    throw Error("invalid base64 string.");
  }
  if (1 === num7) {
    const _Error2 = Error;
    throw Error("invalid base64 string.");
  } else {
    return uint8Array.subarray(0, num6);
  }
};
arg5.base64encode = function base64encode(NumberResult) {
  let str = "";
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let str2 = "";
  let num4 = 0;
  let num5 = 0;
  if (0 < NumberResult.length) {
    do {
      let tmp = NumberResult[num3];
      if (0 === num) {
        let tmp6 = closure_0;
        let text = `${closure_0[tmp >> 2]}`;
        let tmp3 = (3 & tmp) << 4;
        num = 1;
      } else if (1 === num) {
        let tmp5 = closure_0;
        text = `${closure_0[num2 | tmp >> 4]}`;
        tmp3 = (15 & tmp) << 2;
        num = 2;
      } else {
        text = str;
        tmp3 = num2;
        if (2 === num) {
          let tmp4 = closure_0;
          text = `` + closure_0[num2 | tmp >> 6] + closure_0[63 & tmp];
          num = 0;
          tmp3 = num2;
        }
      }
      num3 = num3 + 1;
      str = text;
      num2 = tmp3;
      str2 = text;
      num4 = num;
      num5 = tmp3;
    } while (num3 < NumberResult.length);
  }
  let tmp7 = str2;
  if (num4) {
    const text1 = `${str2 + closure_0[num5]}=`;
    let text2 = text1;
    if (1 === num4) {
      text2 = `${str2 + closure_0[num5]}==`;
    }
    tmp7 = text2;
  }
  return tmp7;
};
