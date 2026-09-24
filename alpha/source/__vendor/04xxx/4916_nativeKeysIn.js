// Module ID: 4916
// Function ID: 4917
// Name: nativeKeysIn
// Dependencies: []

// Module 4916 (nativeKeysIn)

export default function nativeKeysIn(arg0) {
  const items = [];
  if (null != arg0) {
    const _Object = Object;
    for (const key10008 in Object(arg0)) {
      let arr = items.push(key10008);
      continue;
    }
  }
  return items;
};
