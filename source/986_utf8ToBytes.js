// Module ID: 986
// Function ID: 10629
// Name: utf8ToBytes
// Dependencies: []

// Module 986 (utf8ToBytes)
arg5.utf8ToBytes = function utf8ToBytes(str) {
  let num = arg1;
  if (!arg1) {
    num = Infinity;
  }
  const items = [];
  let tmp = null;
  let num2 = 0;
  if (0 < str.length) {
    while (true) {
      let charCodeAtResult = str.charCodeAt(num2);
      let tmp3 = num2;
      if (charCodeAtResult > 55295) {
        if (charCodeAtResult < 57344) {
          if (tmp) {
            if (charCodeAtResult < 56320) {
              let diff = num - 3;
              let tmp10 = diff;
              let tmp11 = charCodeAtResult;
              if (diff > -1) {
                let arr = items.push(239, 191, 189);
                tmp10 = diff;
                tmp11 = charCodeAtResult;
              }
            } else {
              let sum = 65536 + (tmp - 55296 << 10 | charCodeAtResult - 56320);
              let tmp7 = num;
            }
            if (sum < 128) {
              let diff1 = tmp7 - 1;
              if (diff1 >= 0) {
                arr = items.push(sum);
                tmp10 = diff1;
                tmp11 = null;
              }
            } else if (sum < 2048) {
              let diff2 = tmp7 - 2;
              if (diff2 >= 0) {
                let arr1 = items.push(sum >> 6 | 192, 63 & sum | 128);
                tmp10 = diff2;
                tmp11 = null;
              }
            } else if (sum < 65536) {
              let diff3 = tmp7 - 3;
              if (diff3 >= 0) {
                let arr2 = items.push(sum >> 12 | 224, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp10 = diff3;
                tmp11 = null;
              }
            } else if (sum >= 1114112) {
              break;
            } else {
              let diff4 = tmp7 - 4;
              if (diff4 >= 0) {
                let tmp29 = items;
                let arr3 = items.push(sum >> 18 | 240, sum >> 12 & 63 | 128, sum >> 6 & 63 | 128, 63 & sum | 128);
                tmp10 = diff4;
                tmp11 = null;
              }
            }
          } else if (charCodeAtResult > 56319) {
            let diff5 = num - 3;
            tmp11 = tmp;
            tmp10 = diff5;
            if (diff5 > -1) {
              let arr4 = items.push(239, 191, 189);
              tmp10 = diff5;
              tmp11 = tmp;
            }
          } else {
            tmp10 = num;
            tmp11 = charCodeAtResult;
            if (num2 + 1 === length) {
              let diff6 = num - 3;
              tmp11 = tmp;
              tmp10 = diff6;
              if (diff6 > -1) {
                let arr5 = items.push(239, 191, 189);
                tmp10 = diff6;
                tmp11 = tmp;
              }
            }
          }
          num2 = num2 + 1;
          num = tmp10;
          tmp = tmp11;
        }
      }
      let tmp4 = tmp;
      let tmp5 = num;
      if (tmp) {
        let diff7 = num - 3;
        tmp4 = diff7 > -1;
        tmp5 = diff7;
      }
      tmp7 = tmp5;
      sum = charCodeAtResult;
      if (tmp4) {
        let arr6 = items.push(239, 191, 189);
        tmp7 = tmp5;
        sum = charCodeAtResult;
      }
    }
    const _Error = Error;
    const error = new Error("Invalid code point");
    throw error;
  }
  return items;
};
