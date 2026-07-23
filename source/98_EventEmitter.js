// Module ID: 98
// Function ID: 1565
// Name: EventEmitter
// Dependencies: [6, 7, 99, 100]

// Module 98 (EventEmitter)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";

let closure_3 = require("_classPrivateFieldKey")("registry");

export default (() => {
  class EventEmitter {
    constructor() {
      tmp = EventEmitter(this, EventEmitter);
      definePropertyResult = Object.defineProperty(this, outer1_3, { writable: true, value: undefined });
      outer1_2(this, outer1_3)[outer1_3] = {};
      return;
    }
  }
  let obj = {
    key: "addListener",
    value: function addListener(arg0, listener, context) {
      if ("function" !== typeof listener) {
        const _TypeError = TypeError;
        const typeError = new TypeError("EventEmitter.addListener(...): 2nd argument must be a function.");
        throw typeError;
      } else {
        const self = this;
        const tmp3 = outer1_2(this, outer1_3)[outer1_3];
        let obj = tmp3[arg0];
        if (null == obj) {
          const _Set = Set;
          const set = new Set();
          tmp3[arg0] = set;
          obj = set;
        }
        obj = {
          context,
          listener,
          remove() {
              obj.delete(obj);
            }
        };
        obj.add(obj);
        return obj;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "emit",
    value: function emit(arg0) {
      const tmp = outer1_2(this, outer1_3)[outer1_3][arg0];
      if (null != tmp) {
        const length = arguments.length;
        let _Array2 = Array;
        let num = 0;
        if (length > 1) {
          num = length - 1;
        }
        const prototype = _Array2.prototype;
        _Array2 = new _Array2(num);
        for (let num2 = 1; num2 < length; num2 = num2 + 1) {
          let tmp7 = _Array2;
          tmp6[num2 - 1] = arguments[num2];
        }
        const _Array = Array;
        const arr = Array.from(tmp);
        for (const item10028 of arr) {
          let listener = item10028.listener;
          let tmp10 = _Array2;
          let applyResult = listener.apply(item10028.context, tmp6);
          continue;
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "removeAllListeners",
    value: function removeAllListeners(arg0) {
      const self = this;
      if (null == arg0) {
        outer1_2(self, outer1_3)[outer1_3] = {};
      } else {
        outer1_2(self, outer1_3)[outer1_3];
        delete tmp[tmp2];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      const tmp = outer1_2(this, outer1_3)[outer1_3][arg0];
      let num = 0;
      if (null != tmp) {
        num = tmp.size;
      }
      return num;
    }
  };
  return callback(EventEmitter, items);
})();
