// Module ID: 9751
// Function ID: 9752
// Dependencies: []

// Module 9751

export default (obj) => {
  if (obj instanceof Object) {
    const _Array = Array;
    if (!Array.isArray(obj)) {
      obj = {};
      for (const key10010 in obj) {
        if (!obj.hasOwnProperty(key10010)) {
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
