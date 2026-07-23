// Module ID: 473
// Function ID: 6161
// Name: Vibration
// Dependencies: [474]

// Module 473 (Vibration)
const module = arg2;
const dependencyMap = arg6;
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
      module(474).vibrate(num);
      const obj2 = module(474);
    } else {
      const _Array = Array;
      if (Array.isArray(num)) {
        let num2 = -1;
        if (tmp) {
          num2 = 0;
        }
        module(474).vibrateByPattern(num, num2);
        const obj = module(474);
      } else {
        const _Error = Error;
        const error = new Error("Vibration pattern should be a number or array");
        throw error;
      }
    }
  },
  cancel() {
    module(474).cancel();
  }
};
