// Module ID: 558
// Function ID: 6725
// Name: Emitter
// Dependencies: []

// Module 558 (Emitter)
class Emitter {
  constructor(arg0) {
    if (global) {
      tmp = Emitter;
      for (const key10005 in closure_0.prototype) {
        tmp2 = key10005;
        tmp3 = closure_0;
        arg0[key10005] = closure_0.prototype[key10005];
      }
      return global;
    } else {
      return;
    }
  }
  once(arg0, arg1) {
    Emitter = global;
    on = function on() {
      this.off(arg0, on);
      arg1(...arguments);
    };
    on.fn = require;
    onResult = this.on(global, on);
    return this;
  }
  emit(arg0) {
    self = this;
    self._callbacks = this._callbacks || {};
    array = new Array(arguments.length - 1);
    arr = self._callbacks["$" + global];
    num = 1;
    if (1 < arguments.length) {
      do {
        array[num - 1] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    if (arr) {
      num2 = 0;
      substr = require("module_0");
      length2 = substr.length;
      if (0 < length2) {
        do {
          obj = substr[num2];
          applyResult = obj.apply(self, array);
          num2 = num2 + 1;
        } while (num2 < length2);
      }
    }
    return self;
  }
  listeners(arg0) {
    self = this;
    self._callbacks = this._callbacks || {};
    tmp = self._callbacks["$" + global] || [];
    return tmp;
  }
  hasListeners(arg0) {
    return this.listeners(global).length;
  }
}
if (undefined !== module) {
  module.exports = Emitter;
}
const fn = function(arg0, arg1) {
  const self = this;
  self._callbacks = this._callbacks || {};
  let items = self._callbacks["$" + arg0];
  const text = `$${arg0}`;
  if (!items) {
    items = [];
  }
  self._callbacks[text] = items;
  items.push(arg1);
  return self;
};
Emitter.prototype.addEventListener = fn;
Emitter.prototype.on = fn;
const fn2 = function(arg0, arg1) {
  const self = this;
  self._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    self._callbacks = {};
    return self;
  } else if (self._callbacks["$" + arg0]) {
    if (1 == arguments.length) {
      const _callbacks2 = self._callbacks;
      const text = `$${arg0}`;
      delete r2[r1];
      return self;
    } else {
      let num2 = 0;
      if (0 < arr.length) {
        while (arr[num2] !== arg1) {
          if (tmp.fn === arg1) {
            break;
          } else {
            num2 = num2 + 1;
          }
        }
        arr.splice(num2, 1);
      }
      if (0 === arr.length) {
        const _callbacks = self._callbacks;
        const text1 = `$${arg0}`;
        delete r4[r2];
      }
      return self;
    }
  } else {
    return self;
  }
};
Emitter.prototype.removeEventListener = fn2;
Emitter.prototype.removeAllListeners = fn2;
Emitter.prototype.removeListener = fn2;
Emitter.prototype.off = fn2;
