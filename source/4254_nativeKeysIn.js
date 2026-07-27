// Module ID: 4254
// Function ID: 37364
// Name: nativeKeysIn
// Dependencies: []

// Module 4254 (nativeKeysIn)

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
