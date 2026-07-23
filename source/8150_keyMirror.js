// Module ID: 8150
// Function ID: 64492
// Name: keyMirror
// Dependencies: []

// Module 8150 (keyMirror)

export default function keyMirror(obj) {
  obj = {};
  if (obj instanceof Object) {
    const _Array = Array;
    if (!Array.isArray(obj)) {
      for (const key10010 in arg0) {
        let tmp3 = key10010;
        if (!arg0.hasOwnProperty(key10010)) {
          continue;
        } else {
          obj[key10010] = key10010;
          continue;
        }
        continue;
      }
      return obj;
    }
  }
  const error = new Error("keyMirror(...): Argument must be an object.");
  throw error;
};
