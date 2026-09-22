// Module ID: 7546
// Function ID: 7547
// Dependencies: []
// Exports: default

// Module 7546

export default function areHookInputsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else {
    if (0 < arg1.length) {
      let num3 = 0;
      if (0 < arg0.length) {
        const _Object = Object;
        while (Object.is(arg0[num3], arg1[num3])) {
          let sum = num3 + 1;
          if (sum < arg1.length) {
            num3 = sum;
          }
        }
        return false;
      }
    }
    return true;
  }
};
