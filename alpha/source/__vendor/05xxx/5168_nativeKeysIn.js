// Module ID: 5168
// Function ID: 5169
// Name: nativeKeysIn
// Dependencies: []

// Module 5168 (nativeKeysIn)

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
