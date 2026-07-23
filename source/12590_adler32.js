// Module ID: 12590
// Function ID: 97505
// Name: adler32
// Dependencies: []

// Module 12590 (adler32)

export default function adler32(arg0, arg1, arg2, arg3) {
  let diff = arg2;
  let tmp2 = arg3;
  let result = 65535 & arg0;
  let result1 = arg0 >>> 16 & 65535;
  let tmp5 = result;
  let tmp6 = result1;
  if (0 !== arg2) {
    do {
      let num = 2000;
      if (diff <= 2000) {
        num = diff;
      }
      diff = diff - num;
      do {
        let tmp7 = +tmp2;
        let sum = tmp7 + 1;
        let tmp9 = result + arg1[tmp7] | 0;
        let tmp10 = result1 + tmp9 | 0;
        num = num - 1;
        tmp2 = sum;
        result = tmp9;
        result1 = tmp10;
      } while (num);
      result = tmp9 % 65521;
      result1 = tmp10 % 65521;
      tmp2 = sum;
      tmp5 = result;
      tmp6 = result1;
    } while (0 !== diff);
  }
  return tmp5 | tmp6 << 16;
};
