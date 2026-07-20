// Module ID: 631
// Function ID: 7260
// Name: EventEmitter
// Dependencies: []

// Module 631 (EventEmitter)
class EventEmitter {
  constructor() {
    init = EventEmitter.init;
    callResult = init.call(this);
    return;
  }
}
function checkListener(listener) {
  if ("function" !== typeof listener) {
    const _TypeError = TypeError;
    const typeError = new TypeError("The \"listener\" argument must be of type Function. Received type " + tmp);
    throw typeError;
  }
}
function _getMaxListeners(_maxListeners) {
  if (undefined === _maxListeners._maxListeners) {
    _maxListeners = EventEmitter.defaultMaxListeners;
  } else {
    _maxListeners = _maxListeners._maxListeners;
  }
  return _maxListeners;
}
function _addListener(_events, type, listener, arg3) {
  checkListener(listener);
  _events = _events._events;
  if (undefined === _events) {
    const _Object = Object;
    const obj = Object.create(null);
    _events._events = obj;
    _events._eventsCount = 0;
    _events = obj;
  } else {
    if (undefined !== _events.newListener) {
      if (listener.listener) {
        listener = listener.listener;
      }
      _events.emit("newListener", type, listener);
      _events = _events._events;
    }
    let arr = _events[type];
  }
  if (undefined === arr) {
    _events[type] = listener;
    _events._eventsCount = _events._eventsCount + 1;
  } else if ("function" === typeof arr) {
    const items = [, ];
    if (arg3) {
      items[0] = listener;
      items[1] = arr;
      let tmp8 = items;
    } else {
      items[0] = arr;
      items[1] = listener;
      tmp8 = items;
    }
    _events[type] = tmp8;
  } else {
    if (arg3) {
      arr = arr.unshift(listener);
      let arr2 = arr;
    } else {
      arr = arr.push(listener);
      arr2 = arr;
    }
    const tmp11 = _getMaxListeners(_events);
    if (tmp11 > 0) {
      if (arr2.length > tmp11) {
        if (!arr2.warned) {
          arr2.warned = true;
          const _Error = Error;
          const _String = String;
          const text = `Possible EventEmitter memory leak detected. ${arr2.length}`;
          const error = new Error(`Possible EventEmitter memory leak detected. ${arr2.length}` + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          error.name = "MaxListenersExceededWarning";
          error.emitter = _events;
          error.type = type;
          error.count = arr2.length;
          let warn = console;
          if (console) {
            const _console = console;
            warn = console.warn;
          }
          if (warn) {
            const _console2 = console;
            console.warn(error);
          }
        }
      }
    }
  }
  return _events;
}
function onceWrapper() {
  const self = this;
  if (!this.fired) {
    const target = self.target;
    target.removeListener(self.type, self.wrapFn);
    self.fired = true;
    if (0 === arguments.length) {
      const listener2 = self.listener;
      let callResult = listener2.call(self.target);
    } else {
      const listener = self.listener;
      callResult = listener(...arguments);
    }
    return callResult;
  }
}
function _onceWrap(target, type, listener) {
  const obj = { fired: false, wrapFn: undefined, target, type, listener };
  const bindResult = onceWrapper.bind(obj);
  bindResult.listener = listener;
  obj.wrapFn = bindResult;
  return bindResult;
}
function _listeners(_events, arg1, arg2) {
  _events = _events._events;
  if (undefined === _events) {
    return [];
  } else {
    let items1 = _events[arg1];
    if (undefined === items1) {
      let items = [];
    } else if ("function" === typeof items1) {
      if (arg2) {
        items1 = [];
        items1[0] = items1.listener || items1;
        let items2 = items1;
        const tmp6 = items1.listener || items1;
      } else {
        items2 = [items1];
      }
    } else if (arg2) {
      const _Array = Array;
      const array = new Array(items1.length);
      let num = 0;
      items = array;
      if (0 < array.length) {
        do {
          array[num] = items1[num].listener || items1[num];
          num = num + 1;
          items = array;
        } while (num < array.length);
      }
    } else {
      items = arrayClone(items1, items1.length);
    }
    return items;
  }
}
function listenerCount(arg0) {
  const _events = this._events;
  if (undefined !== _events) {
    if ("function" === typeof _events[arg0]) {
      return 1;
    } else if (undefined !== arr) {
      return arr.length;
    }
  }
  return 0;
}
function arrayClone(items1, length) {
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = items1[num];
  }
  return array;
}
function eventTargetAgnosticAddListener(on, arg1, arg2, once) {
  const ReflectApply = arg1;
  let closure_2 = arg2;
  let closure_3 = once;
  if ("function" === typeof on.on) {
    if (once.once) {
      on.once(arg1, arg2);
    } else {
      on.on(arg1, arg2);
    }
  } else if ("function" !== typeof on.addEventListener) {
    const _TypeError = TypeError;
    const typeError = new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof on);
    throw typeError;
  } else {
    function wrapListener(arg0) {
      if (arg3.once) {
        const removed = arg0.removeEventListener(arg1, wrapListener);
      }
      arg2(arg0);
    }
    const EventEmitter = wrapListener;
    const listener = on.addEventListener(arg1, wrapListener);
  }
}
let _Reflect = null;
if ("object" === typeof Reflect) {
  _Reflect = Reflect;
}
if (_Reflect) {
  class EventEmitter {
    constructor() {
      init = EventEmitter.init;
      callResult = init.call(this);
      return;
    }
  }
  if (_Reflect) {
    class EventEmitter {
      constructor() {
        init = EventEmitter.init;
        callResult = init.call(this);
        return;
      }
      static init() {
        self = this;
        tmp = undefined !== this._events;
        if (tmp) {
          tmp2 = globalThis;
          _Object = Object;
          tmp = self._events !== Object.getPrototypeOf(self)._events;
        }
        if (!tmp) {
          tmp3 = globalThis;
          _Object2 = Object;
          tmp4 = null;
          self._events = Object.create(null);
          num = 0;
          self._eventsCount = 0;
        }
        self._maxListeners = self._maxListeners || undefined;
        return;
      }
      setMaxListeners(arg0) {
        self = this;
        if ("number" === typeof global) {
          num = 0;
          if (global >= 0) {
            tmp = NumberIsNaN;
            if (!NumberIsNaN(global)) {
              self._maxListeners = global;
              return self;
            }
          }
        }
        rangeError = new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + global + ".");
        throw rangeError;
      }
      getMaxListeners() {
        return _getMaxListeners(this);
      }
      emit(arg0) {
        self = this;
        items = [];
        num = 1;
        if (1 < arguments.length) {
          do {
            arr = items.push(arguments[num]);
            num = num + 1;
            length = arguments.length;
          } while (num < length);
        }
        tmp2 = "error" === global;
        _events = self._events;
        if (undefined !== _events) {
          tmp4 = tmp2;
          if (tmp2) {
            tmp4 = undefined === _events.error;
          }
          tmp3 = tmp4;
        } else {
          tmp3 = tmp2;
          if (!tmp2) {
            flag = false;
            return false;
          }
        }
        if (tmp3) {
          num3 = 0;
          first = undefined;
          if (items.length > 0) {
            first = items[0];
          }
          tmp12 = globalThis;
          _Error = Error;
          if (first instanceof Error) {
            throw first;
          } else {
            _Error2 = Error;
            str2 = "";
            if (first) {
              str3 = " (";
              str4 = ")";
              str2 = `${" (" + tmp11.message})`;
            }
            prototype = _Error2.prototype;
            tmp13 = new.target;
            str5 = "Unhandled error.";
            tmp14 = new.target;
            _Error2 = new _Error2("Unhandled error." + str2);
            tmp16 = _Error2;
            _Error2.context = first;
            throw _Error2;
          }
        } else {
          arr2 = _events[global];
          if (undefined === arr2) {
            flag3 = false;
            return false;
          } else {
            str = "function";
            if ("function" === typeof arr2) {
              tmp9 = apply;
              tmp10 = apply(arr2, self, items);
            } else {
              length2 = arr2.length;
              tmp5 = arrayClone;
              for (let num2 = 0; num2 < length2; num2 = num2 + 1) {
                tmp7 = apply;
                tmp8 = apply(tmp6[num2], self, items);
              }
            }
            flag2 = true;
            return true;
          }
        }
      }
      addListener(arg0, arg1) {
        tmp = _addListener(this, global, require, false);
        return this;
      }
      prependListener(arg0, arg1) {
        tmp = _addListener(this, global, require, true);
        return this;
      }
      once(arg0, arg1) {
        tmp = checkListener(require);
        onResult = this.on(global, _onceWrap(this, global, require));
        return this;
      }
      prependOnceListener(arg0, arg1) {
        tmp = checkListener(require);
        prependListenerResult = this.prependListener(global, _onceWrap(this, global, require));
        return this;
      }
      removeListener(arg0, arg1) {
        self = this;
        tmp = checkListener(require);
        _events = this._events;
        if (undefined === _events) {
          return self;
        } else {
          arr = _events[global];
          if (undefined === arr) {
            return self;
          } else {
            if (arr !== require) {
              if (arr.listener !== require) {
                str3 = "function";
                if ("function" !== typeof arr) {
                  num3 = 1;
                  diff = arr.length - 1;
                  num4 = -1;
                  num5 = 0;
                  num = -1;
                  if (diff >= 0) {
                    tmp2 = diff;
                    while (arr[diff] !== require) {
                      if (arr[diff].listener === require) {
                        break;
                      } else {
                        diff = diff - 1;
                        num = -1;
                      }
                    }
                    listener = arr[diff].listener;
                    num = diff;
                  }
                  if (num < 0) {
                    return self;
                  } else {
                    if (0 === num) {
                      arr = arr.shift();
                    } else {
                      if (num + 1 < arr.length) {
                        do {
                          arr[num] = arr[num + 1];
                          num = num + 1;
                          sum = num + 1;
                          length = arr.length;
                        } while (sum < length);
                      }
                      arr1 = arr.pop();
                    }
                    if (1 === arr.length) {
                      _events[global] = arr[0];
                    }
                    if (undefined !== _events.removeListener) {
                      if (!listener) {
                        listener = require;
                      }
                      str = "removeListener";
                      emitResult = self.emit("removeListener", global, listener);
                    }
                  }
                }
              }
              return self;
            }
            diff1 = self._eventsCount - 1;
            self._eventsCount = diff1;
            num2 = 0;
            if (0 == diff1) {
              tmp10 = globalThis;
              _Object = Object;
              tmp11 = null;
              self._events = Object.create(null);
            } else {
              delete r3[r4];
              if (_events.removeListener) {
                listener2 = arr.listener;
                if (!listener2) {
                  listener2 = require;
                }
                str2 = "removeListener";
                emitResult1 = self.emit("removeListener", global, listener2);
              }
            }
          }
        }
        return;
      }
      removeAllListeners(arg0) {
        self = this;
        _events = this._events;
        if (undefined === _events) {
          return self;
        } else if (undefined === _events.removeListener) {
          num3 = 0;
          if (0 === arguments.length) {
            tmp12 = globalThis;
            _Object4 = Object;
            tmp13 = null;
            self._events = Object.create(null);
            self._eventsCount = 0;
          } else if (undefined !== _events[global]) {
            diff = self._eventsCount - 1;
            self._eventsCount = diff;
            if (0 == diff) {
              tmp10 = globalThis;
              _Object3 = Object;
              tmp11 = null;
              self._events = Object.create(null);
            } else {
              delete r2[r3];
            }
          }
          return self;
        } else {
          num4 = 0;
          if (0 === arguments.length) {
            tmp4 = globalThis;
            _Object = Object;
            keys = Object.keys(_events);
            str2 = "removeListener";
            for (let num2 = 0; num2 < keys.length; num2 = num2 + 1) {
              tmp5 = keys[num2];
              if ("removeListener" !== tmp5) {
                removeAllListenersResult = self.removeAllListeners(tmp5);
              }
            }
            removeAllListenersResult1 = self.removeAllListeners("removeListener");
            _Object2 = Object;
            tmp8 = null;
            self._events = Object.create(null);
            self._eventsCount = 0;
            return self;
          } else {
            arr = _events[global];
            str = "function";
            if ("function" === typeof arr) {
              removeListenerResult = self.removeListener(global, arr);
            } else if (undefined !== arr) {
              num = 1;
              diff1 = arr.length - 1;
              if (diff1 >= 0) {
                do {
                  removeListenerResult1 = self.removeListener(global, arr[diff1]);
                  diff1 = diff1 - 1;
                } while (diff1 >= 0);
              }
            }
            return self;
          }
        }
      }
      listeners(arg0) {
        return _listeners(this, global, true);
      }
      rawListeners(arg0) {
        return _listeners(this, global, false);
      }
      static listenerCount(arg0, arg1) {
        if ("function" === typeof global.listenerCount) {
          listenerCountResult = global.listenerCount(require);
        } else {
          tmp = listenerCount;
          listenerCountResult = listenerCount.call(global, require);
        }
        return listenerCountResult;
      }
      eventNames() {
        if (this._eventsCount > 0) {
          tmp2 = ownKeys;
          items = ownKeys(tmp._events);
        } else {
          items = [];
        }
        return items;
      }
    }
    const _Number = Number;
    let closure_2 = Number.isNaN || function NumberIsNaN(arg0) {
      return arg0 != arg0;
    };
    module.exports = EventEmitter;
    module.exports.once = function once(arg0, arg1) {
      const ReflectApply = arg1;
      return new Promise((arg0, arg1) => {
        function errorListener(arg0) {
          arg0.removeListener(arg1, resolver);
          arg1(arg0);
        }
        function resolver() {
          if ("function" === typeof arg0.removeListener) {
            arg0.removeListener("error", errorListener);
          }
          const slice = [].slice;
          arg0(slice.call(arguments));
        }
        let obj = { once: true };
        callback(arg0, arg1, resolver, obj);
        if ("error" !== arg1) {
          obj = { once: true };
          if ("function" === typeof arg0.on) {
            callback(tmp2, "error", errorListener, obj);
          }
        }
      });
    };
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = undefined;
    let closure_3 = 10;
    const _Object2 = Object;
    const obj = {};
    class ReflectApply {
      constructor(arg0, arg1, arg2) {
        apply = Function.prototype.apply;
        return apply.call(global, require, importDefault);
      }
    }
    obj.get = function get() {
      return closure_3;
    };
    obj.set = function set(arg0) {
      if ("number" === typeof arg0) {
        if (arg0 >= 0) {
          if (!callback(arg0)) {
            let closure_3 = arg0;
          }
        }
      }
      const rangeError = new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + arg0 + ".");
      throw rangeError;
    };
    Object.defineProperty(EventEmitter, "defaultMaxListeners", obj);
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.listenerCount = listenerCount;
  }
  const _Object = Object;
  const tmp2 = Object.getOwnPropertySymbols ? function ReflectOwnKeys(arr) {
    const ownPropertyNames = Object.getOwnPropertyNames(arr);
    return ownPropertyNames.concat(Object.getOwnPropertySymbols(arr));
  } : function ReflectOwnKeys(arr) {
    return Object.getOwnPropertyNames(arr);
  };
}
class ReflectApply {
  constructor(arg0, arg1, arg2) {
    apply = Function.prototype.apply;
    return apply.call(global, require, importDefault);
  }
}
