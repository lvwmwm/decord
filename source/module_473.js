// Module ID: 473
// Function ID: 6161
// Dependencies: [4084334592]

// Module 473
arg5.default = {
  vibrate(arg0) {
    let num = 400;
    if (arguments.length > 0) {
      num = 400;
      if (undefined !== arguments[0]) {
        num = arguments[0];
      }
    }
    if ("number" === typeof num) {
      arg2(arg6[0]).vibrate(num);
      const obj2 = arg2(arg6[0]);
    } else {
      const _Array = Array;
      if (Array.isArray(num)) {
        let num2 = -1;
        if (tmp) {
          num2 = 0;
        }
        arg2(arg6[0]).vibrateByPattern(num, num2);
        const obj = arg2(arg6[0]);
      } else {
        const _Error = Error;
        const error = new Error("Vibration pattern should be a number or array");
        throw error;
      }
    }
  },
  cancel() {
    arg2(arg6[0]).cancel();
  }
};
