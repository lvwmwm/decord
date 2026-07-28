// Module ID: 6218
// Function ID: 55639
// Name: areHookInputsEqual
// Dependencies: []

// Module 6218 (areHookInputsEqual)
arg5.default = function areHookInputsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else {
    if (0 < arg1.length) {
      let num2 = 0;
      if (0 < arg0.length) {
        const _Object = Object;
        while (Object.is(arg0[num2], arg1[num2])) {
          num2 = num2 + 1;
        }
        return false;
      }
    }
    return true;
  }
};
