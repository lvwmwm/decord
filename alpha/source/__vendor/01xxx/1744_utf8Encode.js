// Module ID: 1744
// Function ID: 1745
// Name: utf8Encode
// Dependencies: []
// Exports: stripUtf8Bom, utf8Decode, utf8Encode

// Module 1744 (utf8Encode)

export function utf8Encode(data) {
  const _TextEncoder = TextEncoder;
  if (undefined !== _TextEncoder) {
    const self3 = this;
    const self4 = this;
    const encoder = new _TextEncoder();
    return encoder.encode(data);
  } else {
    const items = [];
    let num2 = 0;
    if (0 < data.length) {
      do {
        let codePointAtResult = data.codePointAt(num2);
        let sum = num2;
        if (codePointAtResult > 65535) {
          sum = num2 + 1;
        }
        let tmp4 = codePointAtResult >= 55296 && codePointAtResult <= 57343;
        let num = codePointAtResult;
        if (tmp4) {
          num = 65533;
        }
        if (num < 128) {
          let arr = items.push(num);
        } else if (num < 2048) {
          let arr5 = items.push(192 | num >> 6, 128 | 63 & num);
        } else if (num < 65536) {
          let arr6 = items.push(224 | num >> 12, 128 | num >> 6 & 63, 128 | 63 & num);
        } else {
          let arr7 = items.push(240 | num >> 18, 128 | num >> 12 & 63, 128 | num >> 6 & 63, 128 | 63 & num);
        }
        num2 = sum + 1;
      } while (num2 < data.length);
    }
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    const uint8Array = new Uint8Array(items);
    return uint8Array;
  }
}
export function utf8Decode(__getBytesResult) {
  let length;
  let sum2;
  let tmp10;
  const items = [];
  let num = 0;
  let num2 = 191;
  let num3 = 128;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  let num7 = 0;
  if (0 < __getBytesResult.length) {
    do {
      let num10;
      let num8;
      let num9;
      let num12;
      let num11;
      let tmp2 = __getBytesResult[num];
      if (0 !== num5) {
        if (tmp2 >= num3) {
          if (tmp2 <= num2) {
            let tmp12 = num6 << 6 | 63 & tmp2;
            let sum = num + 1;
            num10 = num4 + 1;
            tmp10 = sum;
            num8 = 191;
            num9 = 128;
            num12 = tmp12;
            num11 = num5;
            if (num10 === num5) {
              let arr = items.push(tmp12);
              tmp10 = sum;
              num8 = 191;
              num9 = 128;
              num10 = 0;
              num11 = 0;
              num12 = 0;
            }
          }
        }
        let arr7 = items.push(65533);
        tmp10 = num;
        num8 = 191;
        num9 = 128;
        num10 = 0;
        num11 = 0;
        num12 = 0;
      } else {
        let sum1 = num + 1;
        if (tmp2 <= 127) {
          let arr8 = items.push(tmp2);
          tmp10 = sum1;
          num8 = num2;
          num9 = num3;
          num10 = num4;
          num11 = num5;
          num12 = num6;
        } else {
          if (tmp2 >= 194) {
            if (tmp2 <= 223) {
              num12 = 31 & tmp2;
              tmp10 = sum1;
              num8 = num2;
              num9 = num3;
              num10 = num4;
              num11 = 1;
            }
          }
          if (tmp2 >= 224) {
            if (tmp2 <= 239) {
              let num15 = 128;
              if (224 === tmp2) {
                num15 = 160;
              }
              let num16 = 191;
              if (237 === tmp2) {
                num16 = 159;
              }
              num12 = 15 & tmp2;
              num8 = num16;
              tmp10 = sum1;
              num9 = num15;
              num10 = num4;
              num11 = 2;
            }
          }
          if (tmp2 >= 240) {
            if (tmp2 <= 244) {
              let num13 = 128;
              if (240 === tmp2) {
                num13 = 144;
              }
              let num14 = 191;
              if (244 === tmp2) {
                num14 = 143;
              }
              num12 = 7 & tmp2;
              num8 = num14;
              tmp10 = sum1;
              num9 = num13;
              num10 = num4;
              num11 = 3;
            }
          }
          let arr9 = items.push(65533);
          tmp10 = sum1;
          num8 = num2;
          num9 = num3;
          num10 = num4;
          num11 = num5;
          num12 = num6;
        }
      }
      num = tmp10;
      num2 = num8;
      num3 = num9;
      num4 = num10;
      num5 = num11;
      num6 = num12;
      num7 = num11;
    } while (tmp10 < __getBytesResult.length);
  }
  if (0 !== num7) {
    items.push(65533);
  }
  let str = "";
  let num17 = 0;
  let str2 = "";
  if (0 < items.length) {
    do {
      let _String = String;
      sum2 = num17 + 4096;
      let items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(items1, items.slice(num17, sum2), 0);
      let _String2 = String;
      str = `${HermesBuiltin.apply(fromCodePoint, arr2, String)}`;
      str2 = str;
      num17 = sum2;
      length = items.length;
    } while (sum2 < length);
  }
  return str2;
}
export function stripUtf8Bom(bytes) {
  let subarrayResult = bytes;
  if (bytes.length >= 3) {
    subarrayResult = bytes;
    if (239 === bytes[0]) {
      subarrayResult = bytes;
      if (187 === bytes[1]) {
        subarrayResult = bytes;
        if (191 === bytes[2]) {
          subarrayResult = bytes.subarray(3);
        }
      }
    }
  }
  return subarrayResult;
}
