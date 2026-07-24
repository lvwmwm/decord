// Module ID: 5424
// Function ID: 46483
// Name: Cancellable
// Dependencies: [5368, 5369]
// Exports: autoScroll

// Module 5424 (Cancellable)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class Cancellable {
    constructor() {
      tmp = Cancellable(this, Cancellable);
      this._isCancelled = false;
      return;
    }
  }
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
})();
let closure_2 = tmp2;

export const autoScroll = function autoScroll(scrollNow, diff, diff1, diff2, diff12, arg5, arg6) {
  let _classCallCheck = scrollNow;
  let _defineProperties = diff;
  let closure_2 = diff1;
  let closure_3 = diff2;
  let closure_4 = diff12;
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
    let closure_6 = tmp;
    const promise = new Promise((arg0) => {
      const scrollNow = arg0;
      scrollNow(_defineProperties, num2, false);
      _defineProperties = 7 * max2;
      let num = -1;
      num2 = -1;
      if (num > _defineProperties) {
        num2 = 1;
      }
      if (max > num2) {
        num = 1;
      }
      if (num > _defineProperties) {
        const _Math2 = Math;
        max = Math.min;
      } else {
        const _Math = Math;
        max = Math.max;
      }
      if (max > num2) {
        const _Math4 = Math;
        max2 = Math.min;
      } else {
        const _Math3 = Math;
        max2 = Math.max;
      }
      let closure_6 = Date.now();
      let closure_7 = _defineProperties;
      let closure_8 = num2;
      function animationLoop() {
        const animationFrame = requestAnimationFrame(() => {
          if (cancelled.isCancelled()) {
            outer1_0(false);
          } else {
            const _Date = Date;
            const timestamp = Date.now();
            const result = outer1_1 * (timestamp - outer1_6);
            outer1_8 = outer1_8 + result * outer1_3;
            const sum = outer1_7 + result * outer1_2;
            outer1_7 = sum;
            callback(outer1_4(num, sum), outer1_5(max, outer1_8), false);
            outer1_6 = timestamp;
            if (outer1_4(num, outer1_7) === num) {
              if (outer1_5(max, outer1_8) === max) {
                outer1_0(true);
              }
            }
            return outer1_9();
          }
        });
      }
      animationLoop();
    });
    return promise;
  }
  tmp = new closure_2();
};
export const Cancellable = tmp2;
