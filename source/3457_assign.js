// Module ID: 3457
// Function ID: 26801
// Name: assign
// Dependencies: []
// Exports: default

// Module 3457 (assign)

export default function assign(arg0, obj) {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("assign requires that input parameter not be null or undefined");
    throw typeError;
  } else {
    for (const key10006 in arg1) {
      let tmp8 = key10006;
      let _Object = Object;
      if (!hasOwnProperty.call(arg1, key10006)) {
        continue;
      } else {
        arg0[key10006] = arg1[key10006];
        // continue
      }
      continue;
    }
    return arg0;
  }
};
export default exports.default;
