// Module ID: 13201
// Function ID: 100056
// Name: base64Decode
// Dependencies: []

// Module 13201 (base64Decode)
let closure_0 = [];

export default function base64Decode(arg0, arg1) {
  let num = 2;
  if ("=" !== arg0[arg0.length - 2]) {
    let num3 = 0;
    if ("=" === arg0[length - 1]) {
      num3 = 1;
    }
    num = num3;
  }
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  if (0 < (arg0.length - num & 4294967292)) {
    do {
      let tmp2 = closure_0;
      let tmp3 = closure_0[arg0.charCodeAt(arg0, num5)] << 18;
      let tmp4 = closure_0[arg0.charCodeAt(arg0, num5 + 1)] << 12;
      let tmp5 = closure_0[arg0.charCodeAt(arg0, num5 + 2)] << 6;
      let tmp6 = tmp3 | tmp4 | tmp5 | closure_0[arg0.charCodeAt(arg0, num5 + 3)];
      let tmp7 = +num4;
      arg1[tmp7] = tmp6 >> 16 & 255;
      let tmp8 = +tmp7 + 1;
      arg1[tmp8] = tmp6 >> 8 & 255;
      let tmp9 = +tmp8 + 1;
      num4 = tmp9 + 1;
      arg1[tmp9] = 255 & tmp6;
      num5 = num5 + 4;
      num6 = num4;
      num7 = num5;
    } while (num5 < tmp);
  }
  let sum = num6;
  if (1 === num) {
    const tmp12 = closure_0[arg0.charCodeAt(arg0, num7)] << 10;
    arg1[+num6] = (tmp12 | closure_0[arg0.charCodeAt(arg0, num7 + 1)] << 4 | closure_0[arg0.charCodeAt(arg0, num7 + 2)] >> 2) >> 8 & 255;
    sum = tmp16 + 1;
    arg1[++num6 + 1] = 255 & (tmp12 | closure_0[arg0.charCodeAt(arg0, num7 + 1)] << 4 | closure_0[arg0.charCodeAt(arg0, num7 + 2)] >> 2);
    const tmp13 = closure_0[arg0.charCodeAt(arg0, num7 + 1)] << 4;
  }
  if (2 === num) {
    arg1[+sum] = 255 & (closure_0[arg0.charCodeAt(arg0, num7)] << 2 | closure_0[arg0.charCodeAt(arg0, num7 + 1)] >> 4);
    const tmp18 = closure_0[arg0.charCodeAt(arg0, num7)] << 2;
  }
};
