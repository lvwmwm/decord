// Module ID: 15986
// Function ID: 122658
// Name: Events
// Dependencies: []

// Module 15986 (Events)
class Events {
  constructor() {
    return;
  }
}
function EE(fn, context) {
  let flag = arg2;
  this.fn = fn;
  this.context = context;
  if (!arg2) {
    flag = false;
  }
  this.once = flag;
}
function addListener(_events) {
  let tmp = arg3;
  if ("function" !== typeof arg2) {
    const _TypeError = TypeError;
    const typeError = new TypeError("The listener must be a function");
    throw typeError;
  } else {
    let tmp18 = EE;
    if (!tmp) {
      tmp = _events;
    }
    const prototype = tmp18.prototype;
    tmp18 = new tmp18(arg2, tmp, arg4);
    let sum = arg1;
    if (closure_1) {
      sum = closure_1 + arg1;
    }
    _events = _events._events;
    if (_events._events[sum]) {
      const _events2 = _events._events;
      if (_events[sum].fn) {
        const items = [_events._events[sum], tmp18];
        _events2[sum] = items;
      } else {
        let arr = _events2[sum];
        arr = arr.push(tmp18);
      }
    } else {
      _events[sum] = tmp18;
      _events._eventsCount = _events._eventsCount + 1;
    }
    return _events;
  }
}
function clearEvent(self, sum) {
  const diff = self._eventsCount - 1;
  self._eventsCount = diff;
  if (0 == diff) {
    const prototype = Events.prototype;
    const tmp6 = new Events();
    self._events = tmp6;
  } else {
    const _events = self._events;
    delete r2[r0];
  }
}
class EventEmitter {
  constructor() {
    tmp = new Events();
    this._events = tmp;
    this._eventsCount = 0;
    return;
  }
  eventNames() {
    items = [];
    if (0 === this._eventsCount) {
      return items;
    } else {
      _events = tmp._events;
      tmp7 = _events;
      num = 1;
      for (const key10004 in _events) {
        tmp8 = key10004;
        tmp9 = closure_0;
        if (!closure_0.call(_events, key10004)) {
          continue;
        } else {
          tmp2 = closure_1;
          substr = key10004;
          if (!closure_1) {
          } else {
            substr = require("module_1");
          }
          arr = items.push(substr);
          // continue
        }
        continue;
      }
      tmp5 = globalThis;
      _Object = Object;
      combined = items;
      if (Object.getOwnPropertySymbols) {
        _Object2 = Object;
        combined = items.concat(Object.getOwnPropertySymbols(_events));
      }
      return combined;
    }
  }
  listeners(arg0) {
    sum = global;
    if (closure_1) {
      tmp2 = closure_1;
      sum = closure_1 + global;
    }
    arr = this._events[sum];
    if (arr) {
      if (arr.fn) {
        items = [];
        items[0] = arr.fn;
        return items;
      } else {
        length = arr.length;
        tmp3 = globalThis;
        _Array = Array;
        prototype = Array.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        tmp6 = length;
        array = new Array(length);
        tmp8 = array;
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arr[num].fn;
        }
        return array;
      }
    } else {
      return [];
    }
  }
  listenerCount(arg0) {
    sum = global;
    if (closure_1) {
      tmp2 = closure_1;
      sum = closure_1 + global;
    }
    arr = this._events[sum];
    num = 0;
    if (arr) {
      num2 = 1;
      if (!arr.fn) {
        num2 = arr.length;
      }
      num = num2;
    }
    return num;
  }
  emit(arg0, arg1, arg2, arg3, arg4, arg5) {
    self = this;
    sum = global;
    if (closure_1) {
      tmp2 = closure_1;
      sum = closure_1 + global;
    }
    if (self._events[sum]) {
      arr = self._events[sum];
      length = arguments.length;
      if (arr.fn) {
        if (arr.once) {
          flag3 = true;
          tmp23 = self;
          tmp24 = global;
          removeListenerResult = self.removeListener(global, arr.fn, undefined, true);
        }
        num8 = 1;
        if (1 === length) {
          fn12 = arr.fn;
          callResult = fn12.call(arr.context);
          flag10 = true;
          return true;
        } else {
          num10 = 2;
          if (2 === length) {
            fn11 = arr.fn;
            callResult1 = fn11.call(arr.context, require);
            flag9 = true;
            return true;
          } else {
            num11 = 3;
            if (3 === length) {
              fn10 = arr.fn;
              callResult2 = fn10.call(arr.context, require, importDefault);
              flag8 = true;
              return true;
            } else {
              num12 = 4;
              if (4 === length) {
                fn9 = arr.fn;
                tmp45 = fn9;
                tmp46 = require;
                tmp47 = importDefault;
                tmp48 = importAll;
                callResult3 = fn9.call(arr.context, require, importDefault, importAll);
                flag7 = true;
                return true;
              } else {
                num13 = 5;
                if (5 === length) {
                  fn8 = arr.fn;
                  tmp39 = fn8;
                  tmp40 = require;
                  tmp41 = importDefault;
                  tmp42 = importAll;
                  tmp43 = module;
                  callResult4 = fn8.call(arr.context, require, importDefault, importAll, module);
                  flag6 = true;
                  return true;
                } else {
                  num14 = 6;
                  if (6 === length) {
                    fn7 = arr.fn;
                    tmp32 = exports;
                    tmp33 = fn7;
                    tmp34 = require;
                    tmp35 = importDefault;
                    tmp36 = importAll;
                    tmp37 = module;
                    callResult5 = fn7.call(arr.context, require, importDefault, importAll, module, exports);
                    flag5 = true;
                    return true;
                  } else {
                    tmp26 = globalThis;
                    _Array2 = Array;
                    prototype2 = Array.prototype;
                    tmp27 = new.target;
                    tmp28 = new.target;
                    array = new Array(length - 1);
                    tmp30 = array;
                    for (let num9 = 1; num9 < length; num9 = num9 + 1) {
                      array[num9 - 1] = arguments[num9];
                    }
                    fn6 = arr.fn;
                    applyResult = fn6.apply(arr.context, array);
                  }
                }
              }
            }
          }
        }
      } else {
        length2 = arr.length;
        num = 0;
        tmp3 = globalThis;
        num2 = 1;
        num3 = 4;
        num4 = 3;
        num5 = 2;
        if (0 < length2) {
          do {
            if (arr[num].once) {
              tmp6 = self;
              tmp7 = global;
              flag2 = true;
              removeListenerResult1 = self.removeListener(global, arr[num].fn, undefined, true);
            }
            if (1 === length) {
              fn5 = arr[num].fn;
              callResult6 = fn5.call(arr[num].context);
              tmp9 = tmp4;
              num6 = tmp5;
            } else if (2 === length) {
              fn4 = arr[num].fn;
              callResult7 = fn4.call(arr[num].context, require);
              tmp9 = tmp4;
              num6 = tmp5;
            } else if (3 === length) {
              fn3 = arr[num].fn;
              callResult8 = fn3.call(arr[num].context, require, importDefault);
              tmp9 = tmp4;
              num6 = tmp5;
            } else if (4 === length) {
              fn2 = arr[num].fn;
              tmp15 = fn2;
              tmp16 = require;
              tmp17 = importDefault;
              tmp18 = importAll;
              callResult9 = fn2.call(arr[num].context, require, importDefault, importAll);
              tmp9 = tmp4;
              num6 = tmp5;
            } else {
              tmp9 = tmp4;
              num6 = tmp5;
              if (!tmp4) {
                _Array = Array;
                prototype = Array.prototype;
                tmp10 = new.target;
                tmp11 = new.target;
                array1 = new Array(length - 1);
                tmp13 = array1;
                num7 = 1;
                tmp9 = array1;
                num6 = 1;
                if (1 < length) {
                  do {
                    array1[num7 - 1] = arguments[num7];
                    num7 = num7 + 1;
                    tmp9 = array1;
                    num6 = num7;
                  } while (num7 < length);
                }
              }
              fn = arr[num].fn;
              applyResult1 = fn.apply(arr[num].context, tmp9);
            }
            num = num + 1;
            tmp4 = tmp9;
            tmp5 = num6;
          } while (num < length2);
        }
      }
      flag4 = true;
      return true;
    } else {
      flag = false;
      return false;
    }
  }
  on(arg0, arg1, arg2) {
    tmp = addListener(this, global, require, importDefault, false);
    return this;
  }
  once(arg0, arg1, arg2) {
    tmp = addListener(this, global, require, importDefault, true);
    return this;
  }
  removeListener(arg0, arg1, arg2, arg3) {
    tmp = importAll;
    self = this;
    sum = global;
    if (closure_1) {
      tmp3 = closure_1;
      sum = closure_1 + global;
    }
    if (self._events[sum]) {
      if (require) {
        arr = self._events[sum];
        if (arr.fn) {
          tmp13 = arr.fn !== require;
          if (!tmp13) {
            if (tmp) {
              tmp = !arr.once;
            }
            tmp13 = tmp;
          }
          if (!tmp13) {
            tmp14 = importDefault;
            if (importDefault) {
              tmp14 = arr.context !== importDefault;
            }
            tmp13 = tmp14;
          }
          if (!tmp13) {
            tmp15 = clearEvent;
            tmp16 = clearEvent(self, sum);
          }
        } else {
          items = [];
          length = arr.length;
          num = 0;
          for (let num2 = 0; num2 < length; num2 = num2 + 1) {
            tmp6 = arr[num2].fn !== require;
            if (!tmp6) {
              tmp7 = tmp;
              if (tmp) {
                tmp7 = !arr[num2].once;
              }
              tmp6 = tmp7;
            }
            if (!tmp6) {
              tmp8 = importDefault;
              if (importDefault) {
                tmp8 = arr[num2].context !== importDefault;
              }
              tmp6 = tmp8;
            }
            if (tmp6) {
              arr = items.push(arr[num2]);
            }
          }
          if (items.length) {
            num3 = 1;
            first = items;
            if (1 === items.length) {
              first = items[0];
            }
            self._events[sum] = first;
          } else {
            tmp10 = clearEvent;
            tmp11 = clearEvent(self, sum);
          }
        }
        return self;
      } else {
        tmp4 = clearEvent;
        tmp5 = clearEvent(self, sum);
        return self;
      }
    } else {
      return self;
    }
  }
  removeAllListeners(arg0) {
    self = this;
    if (global) {
      tmp6 = closure_1;
      sum = global;
      if (closure_1) {
        tmp8 = closure_1;
        sum = closure_1 + global;
      }
      if (self._events[sum]) {
        tmp9 = clearEvent;
        tmp10 = clearEvent(self, sum);
      }
    } else {
      tmp = Events;
      prototype = Events.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = new Events();
      tmp5 = tmp4;
      self._events = tmp4;
      num = 0;
      self._eventsCount = 0;
    }
    return self;
  }
}
let flag = "~";
let closure_1 = "~";
let str = "~";
if (Object.create) {
  const _Object = Object;
  class Events {
    constructor() {
      return;
    }
  }
  Events.prototype = Object.create(null);
  const prototype = Events.prototype;
  class EventEmitter {
    constructor() {
      tmp = new Events();
      this._events = tmp;
      this._eventsCount = 0;
      return;
    }
    eventNames() {
      items = [];
      if (0 === this._eventsCount) {
        return items;
      } else {
        _events = tmp._events;
        tmp7 = _events;
        num = 1;
        for (const key10004 in _events) {
          tmp8 = key10004;
          tmp9 = closure_0;
          if (!closure_0.call(_events, key10004)) {
            continue;
          } else {
            tmp2 = closure_1;
            substr = key10004;
            if (!closure_1) {
            } else {
              substr = require("module_1");
            }
            arr = items.push(substr);
            // continue
          }
          continue;
        }
        tmp5 = globalThis;
        _Object = Object;
        combined = items;
        if (Object.getOwnPropertySymbols) {
          _Object2 = Object;
          combined = items.concat(Object.getOwnPropertySymbols(_events));
        }
        return combined;
      }
    }
    listeners(arg0) {
      sum = global;
      if (closure_1) {
        tmp2 = closure_1;
        sum = closure_1 + global;
      }
      arr = this._events[sum];
      if (arr) {
        if (arr.fn) {
          items = [];
          items[0] = arr.fn;
          return items;
        } else {
          length = arr.length;
          tmp3 = globalThis;
          _Array = Array;
          prototype = Array.prototype;
          tmp4 = new.target;
          tmp5 = new.target;
          tmp6 = length;
          array = new Array(length);
          tmp8 = array;
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arr[num].fn;
          }
          return array;
        }
      } else {
        return [];
      }
    }
    listenerCount(arg0) {
      sum = global;
      if (closure_1) {
        tmp2 = closure_1;
        sum = closure_1 + global;
      }
      arr = this._events[sum];
      num = 0;
      if (arr) {
        num2 = 1;
        if (!arr.fn) {
          num2 = arr.length;
        }
        num = num2;
      }
      return num;
    }
    emit(arg0, arg1, arg2, arg3, arg4, arg5) {
      self = this;
      sum = global;
      if (closure_1) {
        tmp2 = closure_1;
        sum = closure_1 + global;
      }
      if (self._events[sum]) {
        arr = self._events[sum];
        length = arguments.length;
        if (arr.fn) {
          if (arr.once) {
            flag3 = true;
            tmp23 = self;
            tmp24 = global;
            removeListenerResult = self.removeListener(global, arr.fn, undefined, true);
          }
          num8 = 1;
          if (1 === length) {
            fn12 = arr.fn;
            callResult = fn12.call(arr.context);
            flag10 = true;
            return true;
          } else {
            num10 = 2;
            if (2 === length) {
              fn11 = arr.fn;
              callResult1 = fn11.call(arr.context, require);
              flag9 = true;
              return true;
            } else {
              num11 = 3;
              if (3 === length) {
                fn10 = arr.fn;
                callResult2 = fn10.call(arr.context, require, importDefault);
                flag8 = true;
                return true;
              } else {
                num12 = 4;
                if (4 === length) {
                  fn9 = arr.fn;
                  tmp45 = fn9;
                  tmp46 = require;
                  tmp47 = importDefault;
                  tmp48 = importAll;
                  callResult3 = fn9.call(arr.context, require, importDefault, importAll);
                  flag7 = true;
                  return true;
                } else {
                  num13 = 5;
                  if (5 === length) {
                    fn8 = arr.fn;
                    tmp39 = fn8;
                    tmp40 = require;
                    tmp41 = importDefault;
                    tmp42 = importAll;
                    tmp43 = module;
                    callResult4 = fn8.call(arr.context, require, importDefault, importAll, module);
                    flag6 = true;
                    return true;
                  } else {
                    num14 = 6;
                    if (6 === length) {
                      fn7 = arr.fn;
                      tmp32 = exports;
                      tmp33 = fn7;
                      tmp34 = require;
                      tmp35 = importDefault;
                      tmp36 = importAll;
                      tmp37 = module;
                      callResult5 = fn7.call(arr.context, require, importDefault, importAll, module, exports);
                      flag5 = true;
                      return true;
                    } else {
                      tmp26 = globalThis;
                      _Array2 = Array;
                      prototype2 = Array.prototype;
                      tmp27 = new.target;
                      tmp28 = new.target;
                      array = new Array(length - 1);
                      tmp30 = array;
                      for (let num9 = 1; num9 < length; num9 = num9 + 1) {
                        array[num9 - 1] = arguments[num9];
                      }
                      fn6 = arr.fn;
                      applyResult = fn6.apply(arr.context, array);
                    }
                  }
                }
              }
            }
          }
        } else {
          length2 = arr.length;
          num = 0;
          tmp3 = globalThis;
          num2 = 1;
          num3 = 4;
          num4 = 3;
          num5 = 2;
          if (0 < length2) {
            do {
              if (arr[num].once) {
                tmp6 = self;
                tmp7 = global;
                flag2 = true;
                removeListenerResult1 = self.removeListener(global, arr[num].fn, undefined, true);
              }
              if (1 === length) {
                fn5 = arr[num].fn;
                callResult6 = fn5.call(arr[num].context);
                tmp9 = tmp4;
                num6 = tmp5;
              } else if (2 === length) {
                fn4 = arr[num].fn;
                callResult7 = fn4.call(arr[num].context, require);
                tmp9 = tmp4;
                num6 = tmp5;
              } else if (3 === length) {
                fn3 = arr[num].fn;
                callResult8 = fn3.call(arr[num].context, require, importDefault);
                tmp9 = tmp4;
                num6 = tmp5;
              } else if (4 === length) {
                fn2 = arr[num].fn;
                tmp15 = fn2;
                tmp16 = require;
                tmp17 = importDefault;
                tmp18 = importAll;
                callResult9 = fn2.call(arr[num].context, require, importDefault, importAll);
                tmp9 = tmp4;
                num6 = tmp5;
              } else {
                tmp9 = tmp4;
                num6 = tmp5;
                if (!tmp4) {
                  _Array = Array;
                  prototype = Array.prototype;
                  tmp10 = new.target;
                  tmp11 = new.target;
                  array1 = new Array(length - 1);
                  tmp13 = array1;
                  num7 = 1;
                  tmp9 = array1;
                  num6 = 1;
                  if (1 < length) {
                    do {
                      array1[num7 - 1] = arguments[num7];
                      num7 = num7 + 1;
                      tmp9 = array1;
                      num6 = num7;
                    } while (num7 < length);
                  }
                }
                fn = arr[num].fn;
                applyResult1 = fn.apply(arr[num].context, tmp9);
              }
              num = num + 1;
              tmp4 = tmp9;
              tmp5 = num6;
            } while (num < length2);
          }
        }
        flag4 = true;
        return true;
      } else {
        flag = false;
        return false;
      }
    }
    on(arg0, arg1, arg2) {
      tmp = addListener(this, global, require, importDefault, false);
      return this;
    }
    once(arg0, arg1, arg2) {
      tmp = addListener(this, global, require, importDefault, true);
      return this;
    }
    removeListener(arg0, arg1, arg2, arg3) {
      tmp = importAll;
      self = this;
      sum = global;
      if (closure_1) {
        tmp3 = closure_1;
        sum = closure_1 + global;
      }
      if (self._events[sum]) {
        if (require) {
          arr = self._events[sum];
          if (arr.fn) {
            tmp13 = arr.fn !== require;
            if (!tmp13) {
              if (tmp) {
                tmp = !arr.once;
              }
              tmp13 = tmp;
            }
            if (!tmp13) {
              tmp14 = importDefault;
              if (importDefault) {
                tmp14 = arr.context !== importDefault;
              }
              tmp13 = tmp14;
            }
            if (!tmp13) {
              tmp15 = clearEvent;
              tmp16 = clearEvent(self, sum);
            }
          } else {
            items = [];
            length = arr.length;
            num = 0;
            for (let num2 = 0; num2 < length; num2 = num2 + 1) {
              tmp6 = arr[num2].fn !== require;
              if (!tmp6) {
                tmp7 = tmp;
                if (tmp) {
                  tmp7 = !arr[num2].once;
                }
                tmp6 = tmp7;
              }
              if (!tmp6) {
                tmp8 = importDefault;
                if (importDefault) {
                  tmp8 = arr[num2].context !== importDefault;
                }
                tmp6 = tmp8;
              }
              if (tmp6) {
                arr = items.push(arr[num2]);
              }
            }
            if (items.length) {
              num3 = 1;
              first = items;
              if (1 === items.length) {
                first = items[0];
              }
              self._events[sum] = first;
            } else {
              tmp10 = clearEvent;
              tmp11 = clearEvent(self, sum);
            }
          }
          return self;
        } else {
          tmp4 = clearEvent;
          tmp5 = clearEvent(self, sum);
          return self;
        }
      } else {
        return self;
      }
    }
    removeAllListeners(arg0) {
      self = this;
      if (global) {
        tmp6 = closure_1;
        sum = global;
        if (closure_1) {
          tmp8 = closure_1;
          sum = closure_1 + global;
        }
        if (self._events[sum]) {
          tmp9 = clearEvent;
          tmp10 = clearEvent(self, sum);
        }
      } else {
        tmp = Events;
        prototype = Events.prototype;
        tmp2 = new.target;
        tmp3 = new.target;
        tmp4 = new Events();
        tmp5 = tmp4;
        self._events = tmp4;
        num = 0;
        self._eventsCount = 0;
      }
      return self;
    }
  }
  if (!tmp3.__proto__) {
    class Events {
      constructor() {
        return;
      }
    }
    flag = false;
  }
  str = flag;
}
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
EventEmitter.prefixed = str;
EventEmitter.EventEmitter = EventEmitter;
if (undefined !== module) {
  module.exports = EventEmitter;
}
