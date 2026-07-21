// Module ID: 229
// Function ID: 3179
// Name: pd
// Dependencies: []

// Module 229 (pd)
function pd(arg0) {
  const value = weakMap.get(arg0);
  console.assert(null != value, "'this' is expected an Event object, but got", arg0);
  return value;
}
function setCancelFlag(passiveListener) {
  if (null == passiveListener.passiveListener) {
    if (passiveListener.event.cancelable) {
      passiveListener.canceled = true;
      if ("function" === typeof passiveListener.event.preventDefault) {
        const event = passiveListener.event;
        event.preventDefault();
      }
    }
  } else {
    const _console = console;
    let tmp2 = "undefined" !== typeof console;
    if (tmp2) {
      const _console2 = console;
      tmp2 = "function" === typeof console.error;
    }
    if (tmp2) {
      const _console3 = console;
      console.error("Unable to preventDefault inside passive event listener invocation.", passiveListener.passiveListener);
    }
  }
}
class Event {
  constructor(arg0, arg1) {
    self = this;
    obj = { "Bool(true)": 1, "Bool(true)": true, "Bool(true)": null, "Bool(true)": true, "Bool(true)": false, "Bool(true)": false, "Bool(true)": true, "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==" };
    obj.eventTarget = global;
    obj.event = require;
    obj.currentTarget = global;
    timeStamp = require.timeStamp;
    tmp = WeakMap;
    if (!timeStamp) {
      tmp2 = globalThis;
      _Date = Date;
      timeStamp = Date.now();
    }
    obj.timeStamp = timeStamp;
    result = WeakMap.set(self, obj);
    definePropertyResult = Object.defineProperty(self, "isTrusted", { FRIEND_REQUESTS: null, ForYouLoadMore: null });
    keys = Object.keys(require);
    for (let num = 0; num < keys.length; num = num + 1) {
      tmp5 = keys[num];
      if (!(tmp5 in self)) {
        _Object = Object;
        tmp6 = defineRedirectDescriptor;
        definePropertyResult1 = Object.defineProperty(self, tmp5, defineRedirectDescriptor(tmp5));
      }
    }
    return;
  }
}
function defineRedirectDescriptor(arg0) {
  const weakMap = arg0;
  return {
    get() {
      return callback(this).event[closure_0];
    },
    set(arg0) {
      callback(this).event[arg0] = arg0;
    },
    configurable: true,
    enumerable: true
  };
}
function defineCallDescriptor(arg0) {
  const weakMap = arg0;
  const obj = {
    1403228943: null,
    830090965: null,
    0: null,
    value() {
      const event = callback(this).event;
      return event[closure_0](...arguments);
    }
  };
  return obj;
}
function getWrapper(prototypeOf) {
  if (null != prototypeOf) {
    const _Object = Object;
    if (prototypeOf !== Object.prototype) {
      let value = weakMap1.get(prototypeOf);
      if (null == value) {
        const _Object2 = Object;
        const tmp5 = function defineWrapper(wrapper, prototypeOf) {
          class CustomEvent {
            constructor(arg0, arg1) {
              callResult = wrapper.call(this, wrapper, prototypeOf);
              return;
            }
          }
          const keys = Object.keys(prototypeOf);
          if (0 === keys.length) {
            return wrapper;
          } else {
            const _Object = Object;
            let obj = {};
            obj = { "Null": null, "Null": null, "Null": null };
            class CustomEvent {
              constructor(arg0, arg1) {
                callResult = wrapper.call(this, wrapper, prototypeOf);
                return;
              }
            }
            obj.constructor = obj;
            CustomEvent.prototype = Object.create(wrapper.prototype, obj);
            let num = 0;
            if (0 < keys.length) {
              while (keys[num] in wrapper.prototype) {
                num = num + 1;
              }
              class CustomEvent {
                constructor(arg0, arg1) {
                  callResult = wrapper.call(this, wrapper, prototypeOf);
                  return;
                }
              }
              if ("function" === typeof Object.getOwnPropertyDescriptor(prototypeOf, keys[num]).value) {
                let tmp3 = callback2(tmp);
              } else {
                tmp3 = callback(tmp);
              }
              Object.defineProperty(CustomEvent.prototype, keys[num], tmp3);
            }
            return CustomEvent;
          }
        }(getWrapper(Object.getPrototypeOf(prototypeOf)), prototypeOf);
        const result = weakMap1.set(prototypeOf, tmp5);
        value = tmp5;
      }
      return value;
    }
  }
  return Event;
}
function isStopped(arg0) {
  return pd(arg0).immediateStopped;
}
function setPassiveListener(arg0, passiveListener) {
  pd(arg0).passiveListener = passiveListener;
}
function isObject(arg0) {
  let tmp = null !== arg0;
  if (tmp) {
    tmp = "object" === typeof arg0;
  }
  return tmp;
}
function getListeners(self) {
  const value = weakMap2.get(self);
  if (null == value) {
    const _TypeError = TypeError;
    const typeError = new TypeError("'this' is expected an EventTarget object, but got another value.");
    throw typeError;
  } else {
    return value;
  }
}
function defineEventAttribute(prototype, abort) {
  const combined = "on" + abort;
  Object.defineProperty(prototype, combined, function defineEventAttributeDescriptor(abort) {
    return {
      get() {
        let iter = callback2(this).get(arg0);
        if (null != iter) {
          while (3 !== iter.listenerType) {
            iter = iter.next;
          }
          return iter.listener;
        }
        return null;
      },
      set(arg0) {
        let tmp = "function" === typeof arg0;
        if (!tmp) {
          tmp = callback(arg0);
        }
        let tmp3 = arg0;
        if (!tmp) {
          tmp3 = null;
        }
        let obj = callback2(this);
        const value = obj.get(arg0);
        let tmp5 = null;
        let iter = value;
        let tmp6 = null;
        if (null != value) {
          do {
            let tmp7 = iter;
            if (3 === iter.listenerType) {
              if (null !== tmp5) {
                tmp5.next = iter.next;
                tmp7 = tmp5;
              } else if (null !== iter.next) {
                let tmp10 = closure_0;
                let result = obj.set(closure_0, iter.next);
                tmp7 = tmp5;
              } else {
                let tmp8 = closure_0;
                let deleteResult = obj.delete(closure_0);
                tmp7 = tmp5;
              }
            }
            iter = iter.next;
            tmp5 = tmp7;
            tmp6 = tmp7;
          } while (null != iter);
        }
        if (null !== tmp3) {
          obj = { display: -0.000000000000000000000000000000000000000000000000000000000000000003420251035322796, flexDirection: -0.0000000000000000000000000000000000000000000000000000000000000000001098640431092466, gap: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018858781351177015, alignItems: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007416000777963161, paddingHorizontal: 14395982766705120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, listener: tmp3 };
          if (null === tmp6) {
            const result1 = obj.set(arg0, obj);
          } else {
            tmp6.next = obj;
          }
        }
      },
      configurable: true,
      enumerable: true
    };
  }(abort));
}
function defineCustomEventTarget(array) {
  let length;
  class CustomEventTarget {
    constructor() {
      callResult = closure_15.call(this);
      return;
    }
  }
  const obj = { "Null": null, "Null": null, "Null": null, value: CustomEventTarget };
  CustomEventTarget.prototype = Object.create(EventTarget.prototype, { constructor: obj });
  let num = 0;
  if (0 < array.length) {
    do {
      let tmp = closure_13;
      let tmp2 = closure_13(CustomEventTarget.prototype, array[num]);
      num = num + 1;
      length = array.length;
    } while (num < length);
  }
  return CustomEventTarget;
}
class EventTarget {
  constructor() {
    if (this instanceof EventTarget) {
      tmp15 = WeakMap;
      tmp16 = globalThis;
      _Map = Map;
      prototype3 = Map.prototype;
      tmp17 = new.target;
      tmp18 = new.target;
      map = new Map();
      tmp20 = map;
      result = WeakMap.set(tmp, map);
      return;
    } else {
      num = 1;
      if (1 === arguments.length) {
        tmp2 = globalThis;
        _Array = Array;
        num2 = 0;
        if (Array.isArray(arguments[0])) {
          tmp14 = defineCustomEventTarget;
          return defineCustomEventTarget(arguments[0]);
        }
      }
      num3 = 0;
      if (arguments.length > 0) {
        tmp8 = globalThis;
        _Array2 = Array;
        prototype2 = Array.prototype;
        tmp9 = new.target;
        tmp10 = new.target;
        array = new Array(arguments.length);
        tmp12 = array;
        num4 = 0;
        if (0 < arguments.length) {
          do {
            array[num4] = arguments[num4];
            num4 = num4 + 1;
            length = arguments.length;
          } while (num4 < length);
        }
        tmp13 = defineCustomEventTarget;
        return defineCustomEventTarget(array);
      } else {
        tmp3 = globalThis;
        _TypeError = TypeError;
        prototype = TypeError.prototype;
        tmp4 = new.target;
        str = "Cannot call a class as a function";
        tmp5 = new.target;
        typeError = new TypeError("Cannot call a class as a function");
        tmp7 = typeError;
        throw typeError;
      }
    }
  }
}
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let obj = {};
Object.defineProperty(obj, "type", {
  get: function() {
    return pd(this).event.type;
  },
  set: undefined
});
Object.defineProperty(obj, "target", {
  get: function() {
    return pd(this).eventTarget;
  },
  set: undefined
});
Object.defineProperty(obj, "currentTarget", {
  get: function() {
    return pd(this).currentTarget;
  },
  set: undefined
});
obj.composedPath = function composedPath() {
  const currentTarget = pd(this).currentTarget;
  if (null == currentTarget) {
    let items = [];
  } else {
    items = [currentTarget];
  }
  return items;
};
Object.defineProperty(obj, "NONE", { get: () => 0, set: undefined });
Object.defineProperty(obj, "CAPTURING_PHASE", { get: () => 1, set: undefined });
Object.defineProperty(obj, "AT_TARGET", { get: () => 2, set: undefined });
Object.defineProperty(obj, "BUBBLING_PHASE", { get: () => 3, set: undefined });
Object.defineProperty(obj, "eventPhase", {
  get: function() {
    return pd(this).eventPhase;
  },
  set: undefined
});
obj.stopPropagation = function stopPropagation() {
  const tmp = pd(this);
  tmp.stopped = true;
  if ("function" === typeof tmp.event.stopPropagation) {
    const event = tmp.event;
    event.stopPropagation();
  }
};
obj.stopImmediatePropagation = function stopImmediatePropagation() {
  const tmp = pd(this);
  tmp.stopped = true;
  tmp.immediateStopped = true;
  if ("function" === typeof tmp.event.stopImmediatePropagation) {
    const event = tmp.event;
    const result = event.stopImmediatePropagation();
  }
};
Object.defineProperty(obj, "bubbles", {
  get: function() {
    return Boolean(pd(this).event.bubbles);
  },
  set: undefined
});
Object.defineProperty(obj, "cancelable", {
  get: function() {
    return Boolean(pd(this).event.cancelable);
  },
  set: undefined
});
obj.preventDefault = function preventDefault() {
  setCancelFlag(pd(this));
};
Object.defineProperty(obj, "defaultPrevented", {
  get: function() {
    return pd(this).canceled;
  },
  set: undefined
});
Object.defineProperty(obj, "composed", {
  get: function() {
    return Boolean(pd(this).event.composed);
  },
  set: undefined
});
Object.defineProperty(obj, "timeStamp", {
  get: function() {
    return pd(this).timeStamp;
  },
  set: undefined
});
Object.defineProperty(obj, "srcElement", {
  get: function() {
    return pd(this).eventTarget;
  },
  set: undefined
});
Object.defineProperty(obj, "cancelBubble", {
  get: function() {
    return pd(this).stopped;
  },
  set: function(arg0) {
    if (arg0) {
      const self = this;
      const tmp2 = pd(this);
      tmp2.stopped = true;
      if ("boolean" === typeof tmp2.event.cancelBubble) {
        tmp2.event.cancelBubble = true;
      }
    }
  }
});
Object.defineProperty(obj, "returnValue", {
  get: function() {
    return !pd(this).canceled;
  },
  set: function(arg0) {
    if (!arg0) {
      const self = this;
      setCancelFlag(pd(this));
    }
  }
});
obj.initEvent = function initEvent() {

};
Event.prototype = obj;
obj = { "Null": null, "Null": null, "Null": null, value: Event };
Object.defineProperty(Event.prototype, "constructor", obj);
let tmp5 = "undefined" !== typeof window;
if (tmp5) {
  const _window = window;
  tmp5 = undefined !== window.Event;
}
if (tmp5) {
  const _Object = Object;
  const _window2 = window;
  Object.setPrototypeOf(Event.prototype, window.Event.prototype);
  const _window3 = window;
  class Event {
    constructor(arg0, arg1) {
      self = this;
      obj = { "Bool(true)": 1, "Bool(true)": true, "Bool(true)": null, "Bool(true)": true, "Bool(true)": false, "Bool(true)": false, "Bool(true)": true, "Bool(true)": "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==" };
      obj.eventTarget = global;
      obj.event = require;
      obj.currentTarget = global;
      timeStamp = require.timeStamp;
      tmp = WeakMap;
      if (!timeStamp) {
        tmp2 = globalThis;
        _Date = Date;
        timeStamp = Date.now();
      }
      obj.timeStamp = timeStamp;
      result = WeakMap.set(self, obj);
      definePropertyResult = Object.defineProperty(self, "isTrusted", { FRIEND_REQUESTS: null, ForYouLoadMore: null });
      keys = Object.keys(require);
      for (let num = 0; num < keys.length; num = num + 1) {
        tmp5 = keys[num];
        if (!(tmp5 in self)) {
          _Object = Object;
          tmp6 = defineRedirectDescriptor;
          definePropertyResult1 = Object.defineProperty(self, tmp5, defineRedirectDescriptor(tmp5));
        }
      }
      return;
    }
  }
}
const weakMap2 = new WeakMap();
EventTarget.prototype = {
  addEventListener(arg0, listener, capture) {
    if (null != listener) {
      if ("function" !== typeof listener) {
        if (!isObject(listener)) {
          const _TypeError = TypeError;
          const typeError = new TypeError("'listener' should be a function or an object.");
          throw typeError;
        }
      }
      const self = this;
      let obj = getListeners(this);
      let BooleanResult1 = isObject(capture);
      const _Boolean = Boolean;
      if (BooleanResult1) {
        let _BooleanResult = _Boolean(capture.capture);
      } else {
        _BooleanResult = _Boolean(capture);
      }
      let num = 2;
      if (_BooleanResult) {
        num = 1;
      }
      obj = { listener, listenerType: num };
      let BooleanResult = BooleanResult1;
      if (BooleanResult1) {
        const _Boolean2 = Boolean;
        BooleanResult = Boolean(capture.passive);
      }
      obj.passive = BooleanResult;
      if (BooleanResult1) {
        const _Boolean3 = Boolean;
        BooleanResult1 = Boolean(capture.once);
      }
      obj.once = BooleanResult1;
      obj.next = null;
      const value = obj.get(arg0);
      if (undefined !== value) {
        let iter = value;
        let tmp15 = null;
        if (null != value) {
          while (true) {
            if (iter.listener === listener) {
              if (iter.listenerType === num) {
                break;
              }
            }
            let next = iter.next;
            tmp15 = iter;
            iter = next;
          }
        }
        tmp15.next = obj;
      } else {
        const result = obj.set(arg0, obj);
      }
    }
  },
  removeEventListener(arg0, arg1, capture) {
    if (null != arg1) {
      const self = this;
      const obj = getListeners(this);
      const _Boolean = Boolean;
      if (isObject(capture)) {
        let _BooleanResult = _Boolean(capture.capture);
      } else {
        _BooleanResult = _Boolean(capture);
      }
      let num = 2;
      if (_BooleanResult) {
        num = 1;
      }
      let iter = obj.get(arg0);
      let tmp2 = null;
      if (null != iter) {
        while (true) {
          let tmp3 = tmp2;
          let tmp4 = iter;
          if (iter.listener === arg1) {
            if (iter.listenerType === num) {
              break;
            }
          }
          iter = iter.next;
          tmp2 = tmp4;
        }
        if (null !== tmp2) {
          const next = iter.next;
          tmp2.next = next;
        } else if (null !== iter.next) {
          const result = obj.set(arg0, iter.next);
        } else {
          obj.delete(arg0);
        }
      }
    }
  },
  dispatchEvent(type) {
    const self = this;
    if (null != type) {
      if ("string" === typeof type.type) {
        const obj = getListeners(self);
        type = type.type;
        const value = obj.get(type);
        let iter = value;
        if (null == value) {
          return true;
        } else {
          const _Object = Object;
          let tmp36 = getWrapper(Object.getPrototypeOf(type));
          const prototype = tmp36.prototype;
          tmp36 = new tmp36(self, type);
          let tmp27 = null;
          if (null != iter) {
            while (true) {
              let tmp = iter;
              if (iter.once) {
                if (null !== tmp27) {
                  let tmp7 = iter;
                  tmp27.next = iter.next;
                  let tmp2 = tmp27;
                } else {
                  let tmp3 = iter;
                  if (null !== iter.next) {
                    let tmp5 = iter;
                    let result = obj.set(type, iter.next);
                    tmp2 = tmp27;
                  } else {
                    let deleteResult = obj.delete(type);
                    tmp2 = tmp27;
                  }
                }
              } else {
                tmp2 = iter;
              }
              let tmp9 = tmp36;
              let tmp10 = iter;
              let listener = null;
              let tmp8 = setPassiveListener;
              if (iter.passive) {
                let tmp12 = iter;
                listener = iter.listener;
              }
              let tmp8Result = tmp8(tmp42, listener);
              let tmp14 = iter;
              if ("function" === typeof iter.listener) {
                let tmp21 = iter;
                let listener2 = iter.listener;
                let tmp22 = tmp36;
                let callResult = listener2.call(self, tmp42);
              } else {
                let tmp15 = iter;
                let tmp16 = 3 !== iter.listenerType;
                if (tmp16) {
                  let tmp17 = iter;
                  tmp16 = "function" === typeof iter.listener.handleEvent;
                }
                if (tmp16) {
                  let tmp18 = iter;
                  listener = iter.listener;
                  let tmp19 = tmp36;
                  let handleEventResult = listener.handleEvent(tmp42);
                }
              }
              while (true) {
                let tmp24 = isStopped;
                let tmp25 = tmp36;
                if (isStopped(tmp42)) {
                  break;
                } else {
                  let tmp26 = iter;
                  let next = iter.next;
                  iter = next;
                  tmp27 = tmp2;
                  if (null == next) {
                    break;
                  }
                }
                break;
              }
            }
          }
          setPassiveListener(tmp36, null);
          pd(tmp36).eventPhase = 0;
          pd(tmp36).currentTarget = null;
          return !tmp36.defaultPrevented;
        }
      }
    }
    const typeError = new TypeError("\"event.type\" should be a string.");
    throw typeError;
  }
};
obj = { "Null": null, "Null": null, "Null": null, value: EventTarget };
Object.defineProperty(EventTarget.prototype, "constructor", obj);
let tmp9 = "undefined" !== typeof window;
if (tmp9) {
  const _window4 = window;
  tmp9 = undefined !== window.EventTarget;
}
if (tmp9) {
  const _Object2 = Object;
  const _window5 = window;
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}
module.exports.default = EventTarget;
module.exports.EventTarget = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;

export { defineEventAttribute };
export { EventTarget };
export default EventTarget;
