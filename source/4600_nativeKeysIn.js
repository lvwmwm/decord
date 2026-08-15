// Module ID: 4600
// Function ID: 4601
// Name: nativeKeysIn
// Dependencies: []

// Module 4600 (nativeKeysIn)

export default function nativeKeysIn(arg0) {
  const items = [];
  if (null != arg0) {
    const _Object = Object;
    for (const key10008 in Object(arg0)) {
      let tmp2 = key10008;
      let arr = items.push(key10008);
      continue;
    }
  }
  return items;
};
