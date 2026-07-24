// Module ID: 988
// Function ID: 10638
// Name: encodeChunk
// Dependencies: []

// Module 988 (encodeChunk)
function encodeChunk(arg0, arg1, arg2) {
  let sum1 = arg1;
  const items = [];
  if (arg1 < arg2) {
    do {
      let sum = (arg0[sum1] << 16 & 16711680) + (arg0[sum1 + 1] << 8 & 65280) + (255 & arg0[sum1 + 2]);
      let tmp3 = items;
      let tmp4 = items;
      let tmp5 = items;
      let tmp6 = items;
      let arr = items.push(items[sum >> 18 & 63] + items[sum >> 12 & 63] + items[sum >> 6 & 63] + items[63 & sum]);
      sum1 = sum1 + 3;
    } while (sum1 < arg2);
  }
  return items.join("");
}
let items = [];
let num = 0;
do {
  items[num] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[num];
  num = num + 1;
} while (num < 64);
arg5.base64StringFromByteArray = function base64StringFromByteArray(arr2) {
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
      let arr = items.push(tmp3(arr2, num, tmp5));
      num = sum;
    } while (sum < diff);
  }
  if (1 === result) {
    const _HermesInternal = HermesInternal;
    items.push("" + items[arr2[length - 1] >> 2] + items[arr2[length - 1] << 4 & 63] + "==");
  } else if (2 === result) {
    const sum1 = (arr2[length - 2] << 8) + arr2[length - 1];
    const _HermesInternal2 = HermesInternal;
    items.push("" + items[sum1 >> 10] + items[sum1 >> 4 & 63] + items[sum1 << 2 & 63] + "=");
  }
  return items.join("");
};
