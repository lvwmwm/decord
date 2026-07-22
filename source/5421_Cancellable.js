// Module ID: 5421
// Function ID: 46459
// Name: Cancellable
// Dependencies: []
// Exports: autoScroll

// Module 5421 (Cancellable)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class Cancellable {
    constructor() {
      tmp = Cancellable(this, Cancellable);
      this._isCancelled = false;
      return;
    }
  }
  let closure_0 = Cancellable;
  let obj = {
    key: "cancel",
    value: function cancel() {
      this._isCancelled = true;
    }
  };
  const items = [obj, ];
  obj = {
    key: "isCancelled",
    value: function isCancelled() {
      return this._isCancelled;
    }
  };
  items[1] = obj;
  return callback(Cancellable, items);
}();

export const autoScroll = function autoScroll(scrollNow, diff, diff1, diff2, diff12, arg5, arg6) {
  let closure_0 = scrollNow;
  let closure_1 = diff;
  let tmp2 = diff1;
  let num = 1;
  if (arguments.length > 5) {
    num = 1;
    if (undefined !== arguments[5]) {
      num = arguments[5];
    }
  }
  if (arguments.length > 6) {
    if (undefined !== arguments[6]) {
      let tmp = arguments[6];
    }
    tmp2 = globalThis;
    const promise = new Promise((arg0) => {
      arg0(closure_1, arg2, false);
      closure_1 = 7 * num;
      let num = -1;
      let num2 = -1;
      if (arg3 > closure_1) {
        num2 = 1;
      }
      const arg2 = num2;
      if (arg4 > arg2) {
        num = 1;
      }
      const arg3 = num;
      if (arg3 > closure_1) {
        const _Math2 = Math;
        let max = Math.min;
      } else {
        const _Math = Math;
        max = Math.max;
      }
      const arg4 = max;
      if (arg4 > arg2) {
        const _Math4 = Math;
        let max2 = Math.min;
      } else {
        const _Math3 = Math;
        max2 = Math.max;
      }
      num = max2;
      let closure_6 = Date.now();
      let closure_7 = closure_1;
      let closure_8 = arg2;
      function animationLoop() {
        const animationFrame = requestAnimationFrame(() => {
          if (timestamp.isCancelled()) {
            callback(false);
          } else {
            const _Date = Date;
            const timestamp = Date.now();
            const result = closure_1 * (timestamp - timestamp);
            closure_8 = closure_8 + result * closure_3;
            const sum = sum + result * closure_2;
            callback(callback2(closure_3, sum), callback3(callback2, closure_8), false);
            if (callback2(closure_3, sum) === closure_3) {
              if (callback3(callback2, closure_8) === callback2) {
                callback(true);
              }
            }
            return callback4();
          }
        });
      }
      animationLoop();
    });
    return promise;
  }
  tmp = new tmp2();
};
export const Cancellable = tmp2;
