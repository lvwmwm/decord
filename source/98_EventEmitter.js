// Module ID: 98
// Function ID: 1565
// Name: EventEmitter
// Dependencies: []

// Module 98 (EventEmitter)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3])("registry");

export default () => {
  class EventEmitter {
    constructor() {
      tmp = EventEmitter(this, EventEmitter);
      definePropertyResult = Object.defineProperty(this, closure_3, { writable: true, value: undefined });
      closure_2(this, closure_3)[closure_3] = {};
      return;
    }
  }
  let closure_0 = EventEmitter;
  let obj = {
    key: "addListener",
    value: function addListener(arg0, listener, context) {
      if ("function" !== typeof listener) {
        const _TypeError = TypeError;
        const typeError = new TypeError("EventEmitter.addListener(...): 2nd argument must be a function.");
        throw typeError;
      } else {
        const self = this;
        const tmp3 = callback(this, closure_3)[closure_3];
        let obj = tmp3[arg0];
        if (null == obj) {
          const _Set = Set;
          const set = new Set();
          tmp3[arg0] = set;
          obj = set;
        }
        const EventEmitter = obj;
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
      const tmp = callback(this, closure_3)[closure_3][arg0];
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
        callback(self, closure_3)[closure_3] = {};
      } else {
        callback(self, closure_3)[closure_3];
        delete r0[r1];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "listenerCount",
    value: function listenerCount(arg0) {
      const tmp = callback(this, closure_3)[closure_3][arg0];
      let num = 0;
      if (null != tmp) {
        num = tmp.size;
      }
      return num;
    }
  };
  return callback(EventEmitter, items);
}();
