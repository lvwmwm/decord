// Module ID: 200
// Function ID: 2845
// Name: validateCallback
// Dependencies: [6, 7, 201, 202, 203, 129]

// Module 200 (validateCallback)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import setPlatformObject from "setPlatformObject";

const require = arg1;
function validateCallback(arg0, arg1) {
  if ("function" !== typeof arg0) {
    if ("object" !== tmp) {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Failed to execute '" + arg1 + "' on 'EventTarget': parameter 2 is not of type 'Object'.");
      throw typeError;
    }
  }
}
function dispatch(arg0, arg1) {
  setEventDispatchFlag(arg1, true);
  const items = [];
  let tmp4 = arg0;
  if (null != arg0) {
    do {
      let arr = items.push(tmp4);
      let tmp6 = require;
      let tmp7 = dependencyMap;
      tmp4 = tmp4[require(undefined, 203) /* SymbolResult1 */.EVENT_TARGET_GET_THE_PARENT_KEY]();
    } while (null != tmp4);
  }
  require(202) /* SymbolResult1 */.setComposedPath(arg1, items);
  const obj = require(202) /* SymbolResult1 */;
  require(202) /* SymbolResult1 */.setTarget(arg1, arg0);
  let diff = items.length - 1;
  if (diff >= 0) {
    if (!obj11.getStopPropagationFlag(tmp2)) {
      while (true) {
        let tmp11 = items[diff];
        let tmp12 = require;
        let tmp13 = dependencyMap;
        let obj3 = require(202) /* SymbolResult1 */;
        let tmp14 = arg1;
        let tmp15 = arg0;
        if (tmp11 === tmp) {
          let tmp18 = importDefault;
          let tmp19 = dependencyMap;
          let CAPTURING_PHASE = importDefault(201).AT_TARGET;
        } else {
          let tmp16 = importDefault;
          let tmp17 = dependencyMap;
          CAPTURING_PHASE = importDefault(201).CAPTURING_PHASE;
        }
        let setEventPhaseResult = obj3.setEventPhase(tmp2, CAPTURING_PHASE);
        let tmp21 = invoke;
        let tmp22 = arg1;
        let tmp23 = importDefault;
        let tmp24 = dependencyMap;
        let tmp25 = invoke(tmp11, tmp2, importDefault(201).CAPTURING_PHASE);
        diff = diff - 1;
        if (diff < 0) {
          break;
        } else {
          let tmp26 = require;
          let tmp27 = dependencyMap;
          let obj4 = require(202) /* SymbolResult1 */;
          let tmp28 = arg1;
          if (obj4.getStopPropagationFlag(tmp2)) {
            break;
          }
        }
      }
    }
    obj11 = require(202) /* SymbolResult1 */;
  }
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp62 = nextResult;
    let tmp63 = require;
    let tmp64 = dependencyMap;
    let obj12 = require(202) /* SymbolResult1 */;
    let tmp65 = arg1;
    if (obj12.getStopPropagationFlag(tmp2)) {
      iter.return();
      break;
    } else {
      let tmp30 = arg1;
      if (!tmp2.bubbles) {
        let tmp31 = nextResult;
        let tmp32 = arg0;
        if (tmp62 !== tmp) {
          iter.return();
          break;
        }
        break;
      }
      let tmp33 = require;
      let tmp34 = dependencyMap;
      let obj5 = require(202) /* SymbolResult1 */;
      let tmp35 = arg1;
      let tmp36 = nextResult;
      let tmp37 = arg0;
      if (tmp62 === tmp) {
        let tmp40 = importDefault;
        let tmp41 = dependencyMap;
        let BUBBLING_PHASE = importDefault(201).AT_TARGET;
      } else {
        let tmp38 = importDefault;
        let tmp39 = dependencyMap;
        BUBBLING_PHASE = importDefault(201).BUBBLING_PHASE;
      }
      let setEventPhaseResult1 = obj5.setEventPhase(tmp2, BUBBLING_PHASE);
      let tmp43 = invoke;
      let tmp44 = nextResult;
      let tmp45 = arg1;
      let tmp46 = importDefault;
      let tmp47 = dependencyMap;
      let tmp48 = invoke(tmp62, tmp2, importDefault(201).BUBBLING_PHASE);
      continue;
    }
    let tmp49 = require;
    let tmp50 = dependencyMap;
    let obj6 = require(202) /* SymbolResult1 */;
    let tmp51 = importDefault;
    let setEventPhaseResult2 = obj6.setEventPhase(arg1, importDefault(201).NONE);
    let obj7 = require(202) /* SymbolResult1 */;
    let setCurrentTargetResult = obj7.setCurrentTarget(arg1, null);
    let obj8 = require(202) /* SymbolResult1 */;
    let setComposedPathResult1 = obj8.setComposedPath(arg1, []);
    let tmp55 = setEventDispatchFlag;
    let flag = false;
    let tmp56 = setEventDispatchFlag(arg1, false);
    let obj9 = require(202) /* SymbolResult1 */;
    let result = obj9.setStopImmediatePropagationFlag(arg1, false);
    let obj10 = require(202) /* SymbolResult1 */;
    let result1 = obj10.setStopPropagationFlag(arg1, false);
  }
}
function invoke(arg0, arg1, arg2) {
  const obj2 = getListenersForPhase(arg0, arg2 === importDefault(201).CAPTURING_PHASE);
  require(202) /* SymbolResult1 */.setCurrentTarget(arg1, arg0);
  let value;
  if (null != obj2) {
    value = obj2.get(tmp.type);
  }
  if (null != value) {
    const _Array = Array;
    const arr = Array.from(value.values());
    require(202) /* SymbolResult1 */.setCurrentTarget(tmp, obj);
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp51 = nextResult;
      if (!nextResult.removed) {
        let tmp8 = nextResult;
        if (tmp51.once) {
          let tmp9 = arg0;
          let tmp10 = arg1;
          let tmp11 = nextResult;
          let tmp12 = arg2;
          let tmp13 = importDefault;
          let tmp14 = dependencyMap;
          let removed = obj.removeEventListener(tmp.type, tmp51.callback, arg2 === importDefault(201).CAPTURING_PHASE);
        }
        let tmp16 = nextResult;
        if (tmp51.passive) {
          let tmp17 = require;
          let tmp18 = dependencyMap;
          let obj4 = require(202) /* SymbolResult1 */;
          let tmp19 = arg1;
          let result = obj4.setInPassiveListenerFlag(tmp, true);
        }
        let tmp21 = global;
        let event = global.event;
        let tmp22 = arg1;
        global.event = tmp;
        let tmp23 = nextResult;
        let callback = tmp51.callback;
        let tmp24 = callback;
        if ("function" === typeof callback) {
          let tmp29 = callback;
          let tmp30 = arg0;
          let tmp31 = arg1;
          let callResult = callback.call(obj, tmp);
        } else {
          let tmp25 = callback;
          if ("function" === typeof callback.handleEvent) {
            let tmp26 = callback;
            let tmp27 = arg1;
            let handleEventResult = callback.handleEvent(tmp);
          }
        }
        while (true) {
          let tmp33 = nextResult;
          if (!tmp51.passive) {
            break;
          } else {
            let tmp34 = require;
            let tmp35 = dependencyMap;
            let obj5 = require(202) /* SymbolResult1 */;
            let tmp36 = arg1;
            let result1 = obj5.setInPassiveListenerFlag(tmp, false);
            break;
          }
          let tmp38 = global;
          let tmp39 = event;
          global.event = event;
          let tmp40 = require;
          let tmp41 = dependencyMap;
          let obj6 = require(202) /* SymbolResult1 */;
          let tmp42 = arg1;
          if (obj6.getStopImmediatePropagationFlag(tmp)) {
            iter.return();
            break label0;
          }
          break label0;
        }
      }
      continue;
    }
    const obj7 = require(202) /* SymbolResult1 */;
  }
}
function getListenersForPhase(arg0, arg1) {
  if (arg1) {
    let tmp2 = arg0[closure_6];
  } else {
    tmp2 = arg0[closure_7];
  }
  return tmp2;
}
function setEventDispatchFlag(arg0, arg1) {
  arg0[closure_8] = arg1;
}
let tmp2 = (() => {
  class EventTarget {
    constructor() {
      tmp = outer1_4(this, EventTarget);
      return;
    }
  }
  let obj = {
    key: "addEventListener",
    value: function addEventListener(arg0, callback) {
      const self = this;
      let closure_0 = callback;
      if (arguments.length > 2) {
        if (undefined !== arguments[2]) {
          let obj = arguments[2];
        }
        if (arguments.length < 2) {
          const _TypeError2 = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
          throw typeError;
        } else if (null != callback) {
          outer1_9(callback, "addEventListener");
          let tmp20 = globalThis;
          const _String = String;
          const StringResult = String(arg0);
          if (null != obj) {
            if ("object" !== typeof obj) {
              if (null == tmp5) {
                const obj2 = outer1_12(self, BooleanResult3);
                let value;
                if (null != obj2) {
                  value = obj2.get(StringResult);
                }
                if (null == value) {
                  let obj3 = obj2;
                  if (null != obj2) {
                    let _Map2 = tmp20.Map;
                    const prototype3 = _Map2.prototype;
                    _Map2 = new _Map2();
                    tmp20 = _Map2;
                    let result = obj3.set(StringResult, _Map2);
                  } else {
                    const _Map = Map;
                    result = new Map();
                    if (!BooleanResult3) {
                      self[outer1_7] = result;
                      obj3 = result;
                    }
                  }
                  self[outer1_6] = result;
                  obj3 = result;
                } else if (!value.has(callback)) {
                  obj = { callback, passive: flag, once: flag2, removed: false };
                  const result1 = value.set(callback, obj);
                  let closure_2 = value;
                  if (null != tmp5) {
                    obj = { once: true };
                    const listener = tmp5.addEventListener("abort", () => {
                      obj.removed = true;
                      if (value.get(closure_0) === obj) {
                        value.delete(closure_0);
                      }
                    }, obj);
                  }
                }
              }
            }
            const _Boolean = Boolean;
            const BooleanResult = Boolean(obj.capture);
            let BooleanResult1 = null != obj.passive;
            if (BooleanResult1) {
              const _Boolean2 = Boolean;
              BooleanResult1 = Boolean(obj.passive);
            }
            const _Boolean3 = Boolean;
            const BooleanResult2 = Boolean(obj.once);
            const signal = obj.signal;
            BooleanResult3 = BooleanResult;
            flag = BooleanResult1;
            flag2 = BooleanResult2;
            tmp5 = signal;
            if (undefined !== signal) {
              const _AbortSignal = AbortSignal;
              BooleanResult3 = BooleanResult;
              flag = BooleanResult1;
              flag2 = BooleanResult2;
              tmp5 = signal;
              if (!(signal instanceof AbortSignal)) {
                const _TypeError = TypeError;
                const typeError1 = new TypeError("Failed to execute 'addEventListener' on 'EventTarget': Failed to read the 'signal' property from 'AddEventListenerOptions': Failed to convert value to 'AbortSignal'.");
                throw typeError1;
              }
            }
          }
          const _Boolean4 = Boolean;
          BooleanResult3 = Boolean(obj);
          flag = false;
          flag2 = false;
          tmp5 = null;
        }
      }
      obj = {};
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "removeEventListener",
    value: function removeEventListener(arg0, arg1) {
      if (arguments.length > 2) {
        if (undefined !== arguments[2]) {
          let obj = arguments[2];
        }
        if (arguments.length < 2) {
          const _TypeError = TypeError;
          const _HermesInternal = HermesInternal;
          const typeError = new TypeError("Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
          throw typeError;
        } else if (null != arg1) {
          outer1_9(arg1, "removeEventListener");
          const _String = String;
          let BooleanResult = obj;
          if ("boolean" !== typeof obj) {
            const _Boolean = Boolean;
            BooleanResult = Boolean(obj.capture);
          }
          const self = this;
          const tmp16Result = outer1_12(this, BooleanResult);
          let value;
          if (null != tmp16Result) {
            value = tmp16Result.get(StringResult);
          }
          if (null != value) {
            value = value.get(arg1);
            if (null != value) {
              value.removed = true;
              value.delete(arg1);
            }
          }
          StringResult = String(arg0);
          const tmp16 = outer1_12;
        }
      }
      obj = {};
    }
  };
  items[1] = obj;
  obj = {
    key: "dispatchEvent",
    value: function dispatchEvent(defaultPrevented) {
      if (defaultPrevented instanceof outer1_2(outer1_3[2])) {
        if (defaultPrevented[outer1_8]) {
          const _Error = Error;
          const error = new Error("Failed to execute 'dispatchEvent' on 'EventTarget': The event is already being dispatched.");
          throw error;
        } else {
          outer1_1(outer1_3[3]).setIsTrusted(defaultPrevented, false);
          const self = this;
          outer1_10(this, defaultPrevented);
          return !defaultPrevented.defaultPrevented;
        }
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.");
        throw typeError;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: require(203) /* SymbolResult1 */.EVENT_TARGET_GET_THE_PARENT_KEY,
    value() {
      return null;
    }
  };
  const obj1 = {
    key: require(203) /* SymbolResult1 */.EVENT_TARGET_GET_THE_PARENT_KEY,
    value() {
      return null;
    }
  };
  items[4] = {
    key: require(203) /* SymbolResult1 */.INTERNAL_DISPATCH_METHOD_KEY,
    value(arg0) {
      outer1_10(this, arg0);
    }
  };
  return callback(EventTarget, items);
})();
setPlatformObject.setPlatformObject(tmp2);
let closure_6 = Symbol("capturingListeners");
let closure_7 = Symbol("bubblingListeners");
let closure_8 = Symbol("Event.dispatch");

export default tmp2;
