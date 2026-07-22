// Module ID: 278
// Function ID: 3436
// Name: describeBuiltInComponentFrame
// Dependencies: []

// Module 278 (describeBuiltInComponentFrame)
import module_0 from "module_0";
import closure_137 from "module_0";

function describeBuiltInComponentFrame(arg0) {
  if (undefined !== closure_2) {
    const text = `
  ${closure_2}${arg0}${closure_3}`;
  } else {
    const _Error = Error;
    throw Error();
  }
}
function describeNativeComponentFrame(displayName) {
  const require = displayName;
  const dependencyMap = arg1;
  if (displayName) {
    if (!closure_7) {
      closure_7 = true;
      const _Error = Error;
      const _Error2 = Error;
      Error.prepareStackTrace = undefined;
      let obj = {
        DetermineComponentFrameRoot() {
              if (arg1) {
                class Fake {
                  constructor() {
                    throw Error();
                  }
                }
                let constructResult1 = Fake;
                let tmp = globalThis;
                const _Object = Object;
                const obj = {
                  set() {
                      throw Error();
                    }
                };
                Object.defineProperty(Fake.prototype, "props", obj);
                const _Reflect = Reflect;
                if ("object" === typeof Reflect) {
                  class Fake {
                    constructor() {
                      throw Error();
                    }
                  }
                  if (Reflect.construct) {
                    class Fake {
                      constructor() {
                        throw Error();
                      }
                    }
                    Reflect.construct(constructResult1, []);
                    const _Reflect2 = tmp.Reflect;
                    tmp = arg0;
                    constructResult1 = _Reflect2.construct(arg0, [], constructResult1);
                    while (true) {
                      class Fake {
                        constructor() {
                          throw Error();
                        }
                      }
                      // continue
                    }
                  }
                }
                constructResult1.call();
                arg0.call(constructResult1.prototype);
                const items = [0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000313243198316887, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023201793093501323];
              } else {
                class Fake {
                  constructor() {
                    throw Error();
                  }
                }
                const _Error = Error;
                throw Error();
              }
            }
      };
      obj.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      const _Object = Object;
      const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(obj.DetermineComponentFrameRoot, "name");
      let configurable = ownPropertyDescriptor;
      if (ownPropertyDescriptor) {
        configurable = tmp5.configurable;
      }
      if (configurable) {
        const _Object2 = Object;
        obj = { value: "DetermineComponentFrameRoot" };
        Object.defineProperty(obj2.DetermineComponentFrameRoot, "name", obj);
      }
      const result = obj2.DetermineComponentFrameRoot();
      const first = result[0];
      if (first) {
        if (str4) {
          const parts = first.split("\n");
          const parts1 = str4.split("\n");
          let num3 = 0;
          let num4 = 0;
          if (0 < parts.length) {
            if (!obj4.includes("DetermineComponentFrameRoot")) {
              const sum = num3 + 1;
              num3 = sum;
              while (sum < arr2.length) {
                let tmp20 = parts;
                let tmp21 = num3;
                let obj5 = arr2[num3];
                if (obj5.includes("DetermineComponentFrameRoot")) {
                  break;
                }
              }
            }
            const obj4 = arr2[num3];
          }
          if (num4 < parts1.length) {
            if (!obj6.includes("DetermineComponentFrameRoot")) {
              const sum1 = num4 + 1;
              num4 = sum1;
              while (sum1 < parts1.length) {
                let tmp29 = parts1;
                let tmp30 = num4;
                let obj7 = parts1[num4];
                if (obj7.includes("DetermineComponentFrameRoot")) {
                  break;
                }
              }
            }
            const obj6 = parts1[num4];
          }
          if (num3 === parts.length) {
            const diff = arr2.length - 1;
            num3 = diff;
            num4 = parts1.length - 1;
            if (1 <= diff) {
              if (0 <= num4) {
                if (arr2[num3] !== parts1[num4]) {
                  num4 = num4 - 1;
                  while (1 <= num3) {
                    let tmp45 = num4;
                    if (0 > num4) {
                      break;
                    } else {
                      let tmp46 = parts;
                      let tmp47 = num3;
                      let tmp48 = parts1;
                      let tmp49 = num4;
                      if (arr2[num3] === parts1[num4]) {
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
          if (1 <= num3) {
            if (0 <= num4) {
              while (arr2[num3] === parts1[num4]) {
                let tmp55 = num3;
                let diff1 = num3 - 1;
                num3 = diff1;
                let tmp57 = num4;
                num4 = num4 - 1;
                if (1 <= diff1) {
                  let tmp58 = num4;
                }
              }
              if (1 !== num3) {
                num3 = num3 - 1;
                const diff2 = num4 - 1;
                num4 = diff2;
                while (0 <= diff2) {
                  let tmp64 = parts;
                  let tmp65 = num3;
                  let tmp66 = parts1;
                  let tmp67 = num4;
                  if (arr2[num3] !== parts1[num4]) {
                    break;
                  } else {
                    let tmp68 = num3;
                    if (1 <= num3) {
                      let tmp69 = num4;
                    }
                  }
                }
                let str11 = `
  ${str8.replace(" at new ", " at ")}`;
                const displayName2 = tmp.displayName;
                let hasItem = displayName2;
                if (displayName2) {
                  hasItem = `
  ${str8.replace(" at new ", " at ")}`.includes("<anonymous>");
                }
                if (hasItem) {
                  str11 = str11.replace("<anonymous>", displayName.displayName);
                }
                closure_7 = false;
                const _Error4 = Error;
                Error.prepareStackTrace = prepareStackTrace;
                return str11;
              }
            }
          }
        }
      }
      closure_7 = false;
      const _Error3 = Error;
      Error.prepareStackTrace = prepareStackTrace;
      let str6 = "";
      let str7 = "";
      if (tmp) {
        displayName = tmp.displayName;
        let name = displayName;
        if (!displayName) {
          name = tmp.name;
        }
        str7 = name;
      }
      if (str7) {
        str6 = describeBuiltInComponentFrame(tmp74);
      }
      return str6;
    }
  }
  return "";
}
function describeFiber(arg0) {
  return describeBuiltInComponentFrame("Activity");
}
function getStackByFiberInDevAndProd(arg0) {
  let _return = arg0;
  let str = "";
  do {
    let tmp = str;
    let tmp2 = closure_189;
    let tmp3 = _return;
    str = `${closure_189(_return)}`;
    _return = _return.return;
  } while (tmp4);
  return str;
}
function getIteratorFn(@@iterator) {
  let tmp = null;
  if (null !== Symbol_iterator) {
    tmp = null;
    if ("object" === typeof Symbol_iterator) {
      @@iterator = iterator;
      if (iterator) {
        @@iterator = Symbol_iterator[closure_24];
      }
      if (!Symbol_iterator) {
        @@iterator = Symbol_iterator[Symbol.iterator];
      }
      let tmp3 = null;
      if ("function" === typeof Symbol_iterator) {
        tmp3 = Symbol_iterator;
      }
      tmp = tmp3;
    }
  }
  return tmp;
}
function getComponentNameFromType(name) {
  let _init;
  let _payload;
  let displayName;
  let render;
  if (null == name) {
    return null;
  } else if ("function" === typeof tmp) {
    let tmp30 = null;
    if (tmp.$$typeof !== closure_25) {
      tmp30 = tmp.displayName || name.name || null;
      const tmp32 = tmp.displayName || name.name || null;
    }
    return tmp30;
  } else if ("string" === typeof tmp) {
    return tmp;
  } else if (closure_11 === tmp) {
    return "Fragment";
  } else if (closure_13 === tmp) {
    return "Profiler";
  } else if (closure_12 === tmp) {
    return "StrictMode";
  } else if (closure_18 === tmp) {
    return "Suspense";
  } else if (closure_19 === tmp) {
    return "SuspenseList";
  } else if (closure_22 === tmp) {
    return "Activity";
  } else if ("object" === typeof tmp) {
    const $$typeof = tmp.$$typeof;
    if (closure_10 === $$typeof) {
      return "Portal";
    } else if (forResult === $$typeof) {
      return (tmp.displayName || "Context") + ".Provider";
    } else if (closure_15 === $$typeof) {
      return (tmp._context.displayName || "Context") + ".Consumer";
    } else if (closure_17 === $$typeof) {
      ({ render, displayName } = tmp);
      let tmp17 = displayName;
      if (!displayName) {
        let str = "ForwardRef";
        if ("" !== (render.displayName || render.name || "")) {
          str = `${"ForwardRef(" + tmp20})`;
        }
        tmp17 = str;
      }
      return tmp17;
    } else if (closure_20 === $$typeof) {
      if (null !== (tmp.displayName || null)) {
        let tmp15 = tmp11;
      } else {
        tmp15 = getComponentNameFromType(tmp.type) || "Memo";
      }
      return tmp15;
    } else if (closure_21 === $$typeof) {
      ({ _payload, _init } = tmp);
      return getComponentNameFromType(_init(_payload));
    }
  }
}
function executeDispatch(arg0, arg1, arg2) {
  arg0.currentTarget = getNodeFromInstance(arg2);
  arg1(arg0);
  arg0.currentTarget = null;
}
function executeDirectDispatch(_dispatchListeners) {
  _dispatchListeners = _dispatchListeners._dispatchListeners;
  if (isArray(_dispatchListeners)) {
    const _Error = Error;
    throw Error("Invalid `event`.");
  } else {
    let tmp2 = null;
    if (_dispatchListeners) {
      tmp2 = getNodeFromInstance(_dispatchListeners._dispatchInstances);
    }
    _dispatchListeners.currentTarget = tmp2;
    let _dispatchListenersResult = null;
    if (_dispatchListeners) {
      _dispatchListenersResult = _dispatchListeners(_dispatchListeners);
    }
    _dispatchListeners.currentTarget = null;
    _dispatchListeners._dispatchListeners = null;
    _dispatchListeners._dispatchInstances = null;
    return _dispatchListenersResult;
  }
}
function functionThatReturnsTrue() {
  return true;
}
function functionThatReturnsFalse() {
  return false;
}
class SyntheticEvent {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    this.dispatchConfig = global;
    this._targetInst = require;
    this.nativeEvent = importDefault;
    this._dispatchListeners = null;
    this._dispatchInstances = null;
    Interface = this.constructor.Interface;
    for (const key10012 in Interface) {
      tmp5 = key10012;
      if (!Interface.hasOwnProperty(key10012)) {
        continue;
      } else {
        tmp = Interface[key10012];
        if (tmp) {
          self[key10012] = tmp(arg2);
          tmp4 = tmp;
          // continue
        } else {
          if ("target" === key10012) {
            self.target = arg3;
            tmp3 = tmp;
            // continue
          } else {
            self[key10012] = arg2[key10012];
            tmp2 = tmp;
            // continue
          }
          continue;
        }
        continue;
      }
      continue;
    }
    if (null != importDefault.defaultPrevented) {
      defaultPrevented = importDefault.defaultPrevented;
    } else {
      flag = false;
      defaultPrevented = false === importDefault.returnValue;
    }
    self.isDefaultPrevented = defaultPrevented ? functionThatReturnsTrue : functionThatReturnsFalse;
    self.isPropagationStopped = functionThatReturnsFalse;
    return self;
  }
}
function createOrGetPooledEvent(arg0, arg1, arg2, arg3) {
  const self = this;
  if (this.eventPool.length) {
    const eventPool = self.eventPool;
    const arr = eventPool.pop();
    self.call(arr, arg0, arg1, arg2, arg3);
    return arr;
  } else {
    const prototype = self.prototype;
    const _self = new self(arg0, arg1, arg2, arg3);
    return _self;
  }
}
function releasePooledEvent(destructor) {
  const self = this;
  if (destructor instanceof this) {
    destructor.destructor();
    if (10 > self.eventPool.length) {
      const eventPool = self.eventPool;
      eventPool.push(destructor);
    }
  } else {
    const _Error = Error;
    throw Error("Trying to release an event instance into a pool of a different type.");
  }
}
function addEventPoolingTo(SyntheticEvent) {
  SyntheticEvent.getPooled = createOrGetPooledEvent;
  SyntheticEvent.eventPool = [];
  SyntheticEvent.release = releasePooledEvent;
}
function isStartish(arg0) {
  return "topTouchStart" === arg0;
}
function isMoveish(arg0) {
  return "topTouchMove" === arg0;
}
function timestampForTouch(timeStamp) {
  return timeStamp.timeStamp || timeStamp.timestamp;
}
function getTouchIdentifier(identifier) {
  identifier = identifier.identifier;
  if (null == identifier) {
    const _Error = Error;
    throw Error("Touch object is missing identifier.");
  } else {
    return identifier;
  }
}
function recordTouchStart(arg0) {
  const tmp = getTouchIdentifier(arg0);
  if (items3[tmp]) {
    tmp2.touchActive = true;
    ({ pageX: tmp2.startPageX, pageY: tmp2.startPageY } = arg0);
    tmp2.startTimeStamp = timestampForTouch(arg0);
    ({ pageX: tmp2.currentPageX, pageY: tmp2.currentPageY } = arg0);
    tmp2.currentTimeStamp = timestampForTouch(arg0);
    ({ pageX: tmp2.previousPageX, pageY: tmp2.previousPageY } = arg0);
    tmp2.previousTimeStamp = timestampForTouch(arg0);
  } else {
    const obj = { touchActive: true };
    ({ pageX: obj.startPageX, pageY: obj.startPageY } = arg0);
    obj.startTimeStamp = timestampForTouch(arg0);
    ({ pageX: obj.currentPageX, pageY: obj.currentPageY } = arg0);
    obj.currentTimeStamp = timestampForTouch(arg0);
    ({ pageX: obj.previousPageX, pageY: obj.previousPageY } = arg0);
    obj.previousTimeStamp = timestampForTouch(arg0);
    items3[tmp] = obj;
  }
  obj1.mostRecentTimeStamp = timestampForTouch(arg0);
}
function recordTouchMove(arg0) {
  if (items3[closure_204(undefined, arg0)]) {
    tmp.touchActive = true;
    ({ currentPageX: tmp.previousPageX, currentPageY: tmp.previousPageY, currentTimeStamp: tmp.previousTimeStamp } = tmp);
    ({ pageX: tmp.currentPageX, pageY: tmp.currentPageY } = arg0);
    tmp.currentTimeStamp = timestampForTouch(arg0);
    obj1.mostRecentTimeStamp = timestampForTouch(arg0);
  }
}
function recordTouchEnd(arg0) {
  if (items3[closure_204(undefined, arg0)]) {
    tmp.touchActive = false;
    ({ currentPageX: tmp.previousPageX, currentPageY: tmp.previousPageY, currentTimeStamp: tmp.previousTimeStamp } = tmp);
    ({ pageX: tmp.currentPageX, pageY: tmp.currentPageY } = arg0);
    tmp.currentTimeStamp = timestampForTouch(arg0);
    obj1.mostRecentTimeStamp = timestampForTouch(arg0);
  }
}
function accumulate(arr) {
  if (null == arg1) {
    const _Error = Error;
    throw Error("Accumulated items must not be null or undefined.");
  } else if (null == arr) {
    return arg1;
  } else if (isArray(arr)) {
    let combined = arr.concat(arg1);
  } else if (isArray(arg1)) {
    const items = [arr];
    combined = items.concat(arg1);
  } else {
    combined = [arr, arg1];
  }
}
function accumulateInto(arg0, arg1) {
  if (null == arg1) {
    const _Error = Error;
    throw Error("Accumulated items must not be null or undefined.");
  } else if (null == arg0) {
    return arg1;
  } else {
    let applyResult = isArray(arg1);
    if (tmp3) {
      const push = arg0.push;
      if (applyResult) {
        applyResult = push.apply(arg0, arg1);
        let combined = arg0;
      } else {
        applyResult = push(arg1);
        combined = arg0;
      }
    } else if (applyResult) {
      const items = [arg0];
      combined = items.concat(arg1);
    } else {
      combined = [arg0, arg1];
    }
    const tmp3 = isArray(arg0);
  }
}
function forEachAccumulated(arr, call) {
  if (Array.isArray(arr)) {
    const item = arr.forEach(call, undefined);
  } else if (arr) {
    call.call(undefined, arr);
  }
}
function changeResponder(arg0, arg1) {
  let closure_36 = arg0;
  if (null !== obj3.GlobalResponderHandler) {
    obj3.GlobalResponderHandler.onChange(tmp, arg0, arg1);
    const GlobalResponderHandler = obj3.GlobalResponderHandler;
  }
}
function getParent$1(arg0) {
  let tmp = arg0;
  let _return = tmp.return;
  while (_return) {
    tmp = _return;
    if (5 === _return.tag) {
      break;
    }
  }
  if (!_return) {
    _return = null;
  }
  return _return;
}
function traverseTwoPhase$1(arg0, arg1, arg2) {
  let length;
  let tmp7;
  let tmp = arg0;
  const items = [];
  if (arg0) {
    do {
      let arr = items.push(tmp);
      let tmp3 = closure_212;
      tmp = closure_212(tmp);
    } while (tmp);
  }
  let diff = tmp4 - 1;
  if (0 < +items.length) {
    do {
      let tmp6 = arg1(items[diff], "captured", arg2);
      tmp7 = +diff;
      diff = tmp7 - 1;
    } while (0 < tmp7);
  }
  let num = 0;
  if (0 < items.length) {
    do {
      let tmp8 = arg1(items[num], "bubbled", arg2);
      num = num + 1;
      length = items.length;
    } while (num < length);
  }
}
function getListener$1(stateNode) {
  stateNode = stateNode.stateNode;
  if (null === stateNode) {
    return null;
  } else {
    const tmp2 = getFiberCurrentPropsFromNode$1(stateNode);
    if (null === tmp2) {
      return null;
    } else {
      if (tmp2[arg1]) {
        if ("function" !== typeof tmp3) {
          const _Error = Error;
          throw Error("Expected `" + arg1 + "` listener to be a function, instead got a value of `" + tmp4 + "` type.");
        }
      }
      return tmp2[arg1];
    }
  }
}
function accumulateDirectionalDispatches$1(arg0, arg1, _dispatchListeners) {
  const tmp = getListener$1(arg0, _dispatchListeners.dispatchConfig.phasedRegistrationNames[arg1]);
  if (tmp) {
    _dispatchListeners._dispatchListeners = accumulateInto(_dispatchListeners._dispatchListeners, tmp);
    _dispatchListeners._dispatchInstances = accumulateInto(_dispatchListeners._dispatchInstances, arg0);
  }
}
function accumulateDirectDispatchesSingle$1(dispatchConfig) {
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.registrationName) {
      const _targetInst = dispatchConfig._targetInst;
      if (_targetInst) {
        if (dispatchConfig) {
          if (dispatchConfig.dispatchConfig.registrationName) {
            const tmp2 = getListener$1(_targetInst, dispatchConfig.dispatchConfig.registrationName);
            if (tmp2) {
              dispatchConfig._dispatchListeners = accumulateInto(dispatchConfig._dispatchListeners, tmp2);
              dispatchConfig._dispatchInstances = accumulateInto(dispatchConfig._dispatchInstances, _targetInst);
            }
          }
        }
      }
    }
  }
}
function accumulateTwoPhaseDispatchesSingleSkipTarget(dispatchConfig) {
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.phasedRegistrationNames) {
      const _targetInst = dispatchConfig._targetInst;
      let tmp2 = null;
      if (_targetInst) {
        tmp2 = getParent$1(_targetInst);
      }
      traverseTwoPhase$1(tmp2, accumulateDirectionalDispatches$1, dispatchConfig);
      const tmp = traverseTwoPhase$1;
    }
  }
}
function accumulateTwoPhaseDispatchesSingle$1(dispatchConfig) {
  let phasedRegistrationNames = dispatchConfig;
  if (dispatchConfig) {
    phasedRegistrationNames = dispatchConfig.dispatchConfig.phasedRegistrationNames;
  }
  if (phasedRegistrationNames) {
    traverseTwoPhase$1(dispatchConfig._targetInst, accumulateDirectionalDispatches$1, dispatchConfig);
  }
}
function recomputePluginOrdering() {
  if (closure_40) {
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp2] !== undefined) {
        let tmp34 = tmp14;
        let tmp35 = obj5;
        let tmp36 = obj5[tmp14];
        let tmp37 = closure_40;
        let index = closure_40.indexOf(tmp14);
        if (-1 >= index) {
          let tmp33 = globalThis;
          let _Error4 = Error;
          let str8 = "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `";
          let str9 = "`.";
          throw Error("EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `" + tmp14 + "`.");
        } else {
          let tmp39 = closure_42;
          if (closure_42[index]) {
            continue;
          } else if (tmp36.extractEvents) {
            let tmp16 = closure_42;
            closure_42[index] = tmp36;
            let eventTypes = tmp36.eventTypes;
            let tmp17 = eventTypes;
            let tmp5 = tmp10;
            let tmp6 = tmp11;
            let tmp7 = tmp12;
            let tmp8 = tmp13;
            let tmp18 = tmp10;
            let flag = tmp11;
            let tmp19 = tmp12;
            let tmp20 = tmp13;
            let keys1 = Object.keys();
            if (keys1 === undefined) {
              continue;
            } else {
              tmp5 = tmp18;
              tmp6 = flag;
              tmp7 = tmp19;
              tmp8 = tmp20;
              let tmp22 = keys1[tmp];
              while (tmp22 !== undefined) {
                let tmp40 = tmp22;
                tmp19 = eventTypes[tmp22];
                let tmp41 = closure_43;
                if (closure_43.hasOwnProperty(tmp22)) {
                  let tmp32 = globalThis;
                  let _Error3 = Error;
                  let str6 = "EventPluginRegistry: More than one plugin attempted to publish the same event name, `";
                  let str7 = "`.";
                  throw Error("EventPluginRegistry: More than one plugin attempted to publish the same event name, `" + tmp22 + "`.");
                } else {
                  let tmp23 = closure_43;
                  closure_43[tmp22] = tmp19;
                  let phasedRegistrationNames = tmp19.phasedRegistrationNames;
                  if (phasedRegistrationNames) {
                    let tmp26 = phasedRegistrationNames;
                    flag = true;
                    let keys2 = Object.keys();
                    if (keys2 !== undefined) {
                      flag = true;
                      let tmp28 = keys2[tmp3];
                      while (tmp28 !== undefined) {
                        let tmp42 = tmp28;
                        if (!phasedRegistrationNames.hasOwnProperty(tmp28)) {
                          continue;
                        } else {
                          let tmp29 = publishRegistrationName;
                          let tmp30 = publishRegistrationName(phasedRegistrationNames[tmp28], tmp36);
                          // continue
                        }
                        continue;
                      }
                    }
                  } else {
                    flag = false;
                    if (tmp19.registrationName) {
                      let tmp24 = publishRegistrationName;
                      let tmp25 = publishRegistrationName(tmp19.registrationName, tmp36);
                      flag = true;
                    }
                  }
                  tmp18 = tmp22;
                  tmp20 = phasedRegistrationNames;
                  if (flag) {
                    continue;
                  } else {
                    let tmp31 = globalThis;
                    let _Error2 = Error;
                    let str3 = "EventPluginRegistry: Failed to publish event `";
                    let str4 = "` for plugin `";
                    let str5 = "`.";
                    throw Error("EventPluginRegistry: Failed to publish event `" + tmp22 + "` for plugin `" + tmp14 + "`.");
                  }
                }
              }
            }
            continue;
          } else {
            let tmp15 = globalThis;
            let _Error = Error;
            let str = "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `";
            let str2 = "` does not.";
            throw Error("EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `" + tmp14 + "` does not.");
          }
          continue;
        }
      }
    }
  }
}
function publishRegistrationName(arg0, arg1) {
  if (closure_44[arg0]) {
    const _Error = Error;
    throw Error("EventPluginRegistry: More than one plugin attempted to publish the same registration name, `" + arg0 + "`.");
  } else {
    closure_44[arg0] = arg1;
  }
}
function getListener(stateNode) {
  stateNode = stateNode.stateNode;
  if (null === stateNode) {
    return null;
  } else {
    const tmp2 = getFiberCurrentPropsFromNode$1(stateNode);
    if (null === tmp2) {
      return null;
    } else {
      if (tmp2[arg1]) {
        if ("function" !== typeof tmp3) {
          const _Error = Error;
          throw Error("Expected `" + arg1 + "` listener to be a function, instead got a value of `" + tmp4 + "` type.");
        }
      }
      return tmp2[arg1];
    }
  }
}
function accumulateDirectionalDispatches(arg0, arg1, _dispatchListeners) {
  const tmp = getListener(arg0, _dispatchListeners.dispatchConfig.phasedRegistrationNames[arg1]);
  if (tmp) {
    _dispatchListeners._dispatchListeners = accumulateInto(_dispatchListeners._dispatchListeners, tmp);
    _dispatchListeners._dispatchInstances = accumulateInto(_dispatchListeners._dispatchInstances, arg0);
  }
}
function traverseTwoPhase(arg0, arg1, arg2, arg3) {
  let length;
  let tmp7;
  let _return = arg0;
  const items = [];
  if (arg0) {
    items.push(_return);
    let tmp3 = _return;
    do {
      _return = tmp3.return;
      while (_return) {
        tmp3 = _return;
        if (5 === _return.tag) {
          break;
        }
      }
      if (!_return) {
        _return = null;
      }
    } while (_return);
  }
  let diff = tmp4 - 1;
  if (0 < +items.length) {
    do {
      let tmp6 = arg1(items[diff], "captured", arg2);
      tmp7 = +diff;
      diff = tmp7 - 1;
    } while (0 < tmp7);
  }
  if (arg3) {
    arg1(items[0], "bubbled", arg2);
  } else {
    let num = 0;
    if (0 < items.length) {
      do {
        let tmp8 = arg1(items[num], "bubbled", arg2);
        num = num + 1;
        length = items.length;
      } while (num < length);
    }
  }
}
function accumulateTwoPhaseDispatchesSingle(dispatchConfig) {
  let phasedRegistrationNames = dispatchConfig;
  if (dispatchConfig) {
    phasedRegistrationNames = dispatchConfig.dispatchConfig.phasedRegistrationNames;
  }
  if (phasedRegistrationNames) {
    traverseTwoPhase(dispatchConfig._targetInst, accumulateDirectionalDispatches, dispatchConfig, false);
  }
}
function accumulateDirectDispatchesSingle(dispatchConfig) {
  if (dispatchConfig) {
    if (dispatchConfig.dispatchConfig.registrationName) {
      const _targetInst = dispatchConfig._targetInst;
      if (_targetInst) {
        if (dispatchConfig) {
          if (dispatchConfig.dispatchConfig.registrationName) {
            const tmp2 = getListener(_targetInst, dispatchConfig.dispatchConfig.registrationName);
            if (tmp2) {
              dispatchConfig._dispatchListeners = accumulateInto(dispatchConfig._dispatchListeners, tmp2);
              dispatchConfig._dispatchInstances = accumulateInto(dispatchConfig._dispatchInstances, _targetInst);
            }
          }
        }
      }
    }
  }
}
function getInstanceFromTag(arg0) {
  return map.get(arg0) || null;
}
function batchedUpdatesImpl(arg0, arg1) {
  return arg0(arg1);
}
function batchedUpdates$1(arg0, arg1) {
  if (closure_49) {
    return arg0(arg1);
  } else {
    closure_49 = true;
    closure_49 = false;
    return batchedUpdatesImpl(arg0, arg1);
  }
}
function executeDispatchesAndReleaseTopLevel(isPropagationStopped) {
  let _dispatchInstances;
  let _dispatchListeners;
  if (isPropagationStopped) {
    ({ _dispatchListeners, _dispatchInstances } = isPropagationStopped);
    if (isArray(_dispatchListeners)) {
      if (0 < _dispatchListeners.length) {
        let num2 = 0;
        if (!isPropagationStopped.isPropagationStopped()) {
          executeDispatch(isPropagationStopped, _dispatchListeners[num2], _dispatchInstances[num2]);
          num2 = num2 + 1;
          while (num2 < _dispatchListeners.length) {
            if (isPropagationStopped.isPropagationStopped()) {
              break;
            }
          }
        }
      }
    } else if (_dispatchListeners) {
      executeDispatch(isPropagationStopped, _dispatchListeners, _dispatchInstances);
    }
    isPropagationStopped._dispatchListeners = null;
    isPropagationStopped._dispatchInstances = null;
    if (!isPropagationStopped.isPersistent()) {
      const constructor = isPropagationStopped.constructor;
      constructor.release(isPropagationStopped);
    }
  }
}
function _receiveRootNodeIDEvent(arg0, arg1, arg2) {
  let tmp = arg2;
  const require = arg1;
  if (!arg2) {
    tmp = closure_51;
  }
  const dependencyMap = tmp;
  const tmp2 = getInstanceFromTag(arg0);
  let stateNode = null;
  if (null != tmp2) {
    stateNode = tmp2.stateNode;
  }
  batchedUpdates$1(() => {
    let num = 0;
    let tmp2 = null;
    let tmp3 = null;
    if (0 < length.length) {
      do {
        let obj = arr[num];
        let extractEventsResult = obj;
        let tmp5 = obj;
        if (obj) {
          let tmp6 = closure_0;
          let tmp7 = closure_2;
          let tmp8 = closure_1;
          let tmp9 = obj;
          let tmp10 = tmp;
          extractEventsResult = obj.extractEvents(closure_0, closure_2, closure_1, tmp);
          tmp5 = extractEventsResult;
        }
        let tmp11 = tmp2;
        if (extractEventsResult) {
          let tmp12 = closure_209;
          tmp11 = closure_209(tmp2, tmp5);
        }
        num = num + 1;
        tmp2 = tmp11;
        tmp3 = tmp11;
      } while (num < arr.length);
    }
    if (null !== tmp3) {
      closure_50 = callback(closure_50, tmp3);
    }
    closure_50 = null;
    if (closure_50) {
      callback2(tmp15, closure_228);
      if (closure_50) {
        const _Error = Error;
        throw Error("processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.");
      } else if (closure_26) {
        closure_26 = false;
        let closure_27 = null;
        throw closure_27;
      }
    }
  });
}
function getNearestMountedFiber(alternate) {
  let _return2;
  let _return4;
  let tmp = alternate;
  let _return = alternate;
  if (alternate.alternate) {
    let tmp4 = alternate;
    let tmp2 = alternate;
    let tmp3 = alternate;
    if (alternate.return) {
      do {
        let _return3 = tmp4.return;
        tmp4 = _return3;
        tmp2 = _return3;
        tmp3 = alternate;
        _return4 = _return3.return;
      } while (_return4);
    }
  } else {
    do {
      if (4098 & tmp.flags) {
        _return = tmp.return;
      }
      _return2 = tmp.return;
      tmp2 = tmp;
      tmp3 = _return;
      tmp = _return2;
    } while (_return2);
  }
  let tmp5 = null;
  if (3 === tmp2.tag) {
    tmp5 = tmp3;
  }
  return tmp5;
}
function assertIsMounted(arg0) {
  if (getNearestMountedFiber(arg0) !== arg0) {
    const _Error = Error;
    throw Error("Unable to find node on an unmounted component.");
  }
}
function findCurrentHostFiberImpl(tag) {
  tag = tag.tag;
  if (5 !== tag) {
    if (26 !== tag) {
      if (27 !== tag) {
        if (6 !== tag) {
          let sibling = tag.child;
          if (null !== sibling) {
            const tmp3 = findCurrentHostFiberImpl(sibling);
            while (null === tmp3) {
              sibling = sibling.sibling;
            }
            return tmp3;
          }
          return null;
        }
      }
    }
  }
  return tag;
}
function defaultDiffer(name, name2) {
  let deepDifferResult = "object" !== typeof name2;
  if (!deepDifferResult) {
    deepDifferResult = null === name2;
  }
  if (!deepDifferResult) {
    deepDifferResult = require(dependencyMap[2]).deepDiffer(name, name2, closure_55);
    const obj = require(dependencyMap[2]);
  }
  return deepDifferResult;
}
function restoreDeletedValuesInNestedArray(arg0, arg1, arg2) {
  if (isArray(arg1)) {
    let diff = tmp14 - 1;
    if (+arg1.length) {
      if (0 < closure_54) {
        restoreDeletedValuesInNestedArray(arg0, arg1[diff], arg2);
        diff = tmp19 - 1;
        while (+diff) {
          let tmp20 = closure_54;
          if (0 >= closure_54) {
            break;
          }
        }
      }
    }
  } else if (arg1) {
    if (0 < closure_54) {
      for (const key10008 in closure_53) {
        let tmp22 = key10008;
        let tmp23 = closure_53;
        if (!closure_53[key10008]) {
          continue;
        } else {
          let tmp2 = arg1[key10008];
          let tmp3 = tmp2;
          if (undefined === tmp2) {
            continue;
          } else {
            let obj = arg2[key10008];
            let tmp4 = tmp2;
            let tmp5 = obj;
            if (!obj) {
              continue;
            } else {
              if ("function" === typeof tmp2) {
                tmp2 = true;
              }
              if (undefined === tmp2) {
                tmp2 = null;
              }
              if ("object" !== typeof obj) {
                arg0[key10008] = tmp2;
                let tmp10 = tmp2;
              } else {
                let tmp6 = "function" !== typeof obj.diff;
                if (tmp6) {
                  tmp6 = "function" !== typeof obj.process;
                }
                let tmp7 = tmp2;
                if (!tmp6) {
                  let processResult = tmp2;
                  if ("function" === typeof obj.process) {
                    processResult = obj.process(tmp2);
                  }
                  arg0[key10008] = processResult;
                  let tmp9 = processResult;
                }
              }
              let tmp11 = closure_53;
              closure_53[key10008] = false;
              let tmp12 = closure_54;
              closure_54 = closure_54 - 1;
              let tmp13 = obj;
              // continue
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
  }
}
function diffNestedProperty(arg0, arg1, arg2, arg3) {
  let length;
  let length2;
  if (!arg0) {
    if (arg1 === arg2) {
      return arg0;
    }
  }
  if (arg1) {
    if (arg2) {
      if (!isArray(arg1)) {
        if (!isArray(arg2)) {
          return diffProperties(arg0, arg1, arg2, arg3);
        }
      }
      if (isArray(arg1)) {
        if (isArray(arg2)) {
          const tmp26 = arg1.length < arg2.length ? arg1.length : arg2.length;
          let num2 = 0;
          let tmp27 = arg0;
          let num3 = 0;
          let tmp28 = arg0;
          if (0 < tmp26) {
            do {
              let tmp29 = closure_235;
              let tmp30 = tmp27;
              let tmp31 = arg3;
              tmp27 = closure_235(tmp27, arg1[num3], arg2[num3], arg3);
              num3 = num3 + 1;
              tmp28 = tmp27;
              num2 = num3;
            } while (num3 < tmp26);
          }
          let tmp32 = tmp28;
          let sum = num2;
          let tmp34 = tmp28;
          let sum1 = num2;
          if (num2 < arg1.length) {
            do {
              let tmp36 = closure_237;
              tmp32 = closure_237(tmp32, arg1[sum], arg3);
              sum = sum + 1;
              tmp34 = tmp32;
              sum1 = sum;
              length = arg1.length;
            } while (sum < length);
          }
          let tmp37 = tmp34;
          let tmp38 = tmp34;
          if (sum1 < arg2.length) {
            do {
              let tmp39 = closure_236;
              tmp37 = closure_236(tmp37, arg2[sum1], arg3);
              sum1 = sum1 + 1;
              tmp38 = tmp37;
              length2 = arg2.length;
            } while (sum1 < length2);
          }
          return tmp38;
        }
      }
      const tmp14 = isArray(arg1);
      const flattenStyle = require(dependencyMap[2]).flattenStyle;
      if (tmp14) {
        let tmp15Result = tmp15(arg0, flattenStyle(arg1), arg2, arg3);
      } else {
        tmp15Result = tmp15(arg0, arg1, flattenStyle(arg2), arg3);
      }
      return tmp15Result;
    }
  }
  if (arg2) {
    let tmp = addNestedProperty(arg0, arg2, arg3);
  } else {
    tmp = arg0;
    if (arg1) {
      tmp = clearNestedProperty(arg0, arg1, arg3);
    }
  }
  return tmp;
}
function addNestedProperty(arg0, arg1, arg2) {
  let length;
  if (arg1) {
    if (isArray(arg1)) {
      let num = 0;
      let tmp7 = arg0;
      let tmp8 = arg0;
      if (0 < arg1.length) {
        do {
          let tmp9 = closure_236;
          tmp7 = closure_236(tmp7, arg1[num], arg2);
          num = num + 1;
          tmp8 = tmp7;
          length = arg1.length;
        } while (num < length);
      }
      return tmp8;
    } else {
      return diffProperties(arg0, closure_52, arg1, arg2);
    }
  } else {
    return arg0;
  }
}
function clearNestedProperty(arg0, arg1, arg2) {
  let length;
  if (arg1) {
    if (isArray(arg1)) {
      let num = 0;
      let tmp7 = arg0;
      let tmp8 = arg0;
      if (0 < arg1.length) {
        do {
          let tmp9 = closure_237;
          tmp7 = closure_237(tmp7, arg1[num], arg2);
          num = num + 1;
          tmp8 = tmp7;
          length = arg1.length;
        } while (num < length);
      }
      return tmp8;
    } else {
      return diffProperties(arg0, arg1, closure_52, arg2);
    }
  } else {
    return arg0;
  }
}
function diffProperties(arg0, arg1, arg2, arg3) {
  let tmp4;
  let tmp2 = arg0;
  let tmp5 = arg0;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp5 = tmp2;
    let tmp6 = tmp4;
    while (keys[tmp] !== undefined) {
      let tmp64 = tmp10;
      let obj4 = arg3[tmp10];
      let processResult = obj4;
      if (!obj4) {
        continue;
      } else {
        let flag = arg1[tmp10];
        let tmp11 = arg2[tmp10];
        let tmp12 = flag;
        if ("function" === typeof tmp11) {
          if ("function" === typeof flag) {
            flag = true;
          }
          tmp12 = flag;
          tmp11 = true;
        }
        let tmp13 = tmp12;
        if (undefined === tmp11) {
          let tmp14 = tmp12;
          if (undefined === tmp12) {
            tmp14 = null;
          }
          tmp13 = tmp14;
          tmp11 = null;
        }
        let tmp15 = closure_53;
        if (closure_53) {
          let tmp16 = closure_53;
          closure_53[tmp10] = false;
        }
        if (tmp8) {
          if (undefined !== tmp8[tmp10]) {
            if ("object" !== typeof obj4) {
              tmp8[tmp10] = tmp11;
              tmp2 = tmp8;
              processResult = obj4;
              tmp4 = tmp13;
              let tmp43 = tmp11;
              // continue
            } else {
              let tmp40 = "function" !== typeof obj4.diff && "function" !== typeof obj4.process;
              tmp2 = tmp8;
              processResult = obj4;
              tmp4 = tmp13;
              let tmp41 = tmp11;
              if (tmp40) {
                continue;
              } else {
                processResult = tmp11;
                if ("function" === typeof obj4.process) {
                  processResult = obj4.process(tmp11);
                }
                tmp8[tmp10] = processResult;
                tmp2 = tmp8;
                tmp4 = tmp13;
                let tmp42 = tmp11;
                // continue
              }
              continue;
            }
            continue;
          }
        }
        tmp2 = tmp8;
        processResult = obj4;
        tmp4 = tmp13;
        let tmp17 = tmp11;
        if (tmp13 === tmp11) {
          continue;
        } else {
          if ("object" !== typeof obj4) {
            let tmp36 = defaultDiffer;
            let tmp37 = tmp8;
            if (defaultDiffer(tmp13, tmp11)) {
              let obj = tmp8;
              let tmp38 = tmp8;
              if (!tmp8) {
                obj = {};
                tmp38 = obj;
              }
              obj[tmp10] = tmp11;
              tmp37 = tmp38;
            }
            tmp2 = tmp37;
            processResult = obj4;
          } else {
            if ("function" !== typeof obj4.diff) {
              if ("function" !== typeof obj4.process) {
                closure_53 = null;
                let closure_54 = 0;
                let tmp18 = diffNestedProperty;
                let tmp19 = tmp8;
                let tmp20 = tmp13;
                let tmp21 = tmp11;
                let tmp22 = obj4;
                let tmp23 = diffNestedProperty(tmp8, tmp13, tmp11, obj4);
                let tmp24 = closure_54;
                let tmp25 = 0 < closure_54 && tmp23;
                tmp2 = tmp23;
                processResult = obj4;
                if (tmp25) {
                  let tmp26 = restoreDeletedValuesInNestedArray;
                  let tmp27 = restoreDeletedValuesInNestedArray(tmp23, tmp11, obj4);
                  closure_53 = null;
                  tmp2 = tmp23;
                  processResult = obj4;
                }
              }
            }
            let tmp28 = undefined === tmp13;
            if (tmp28) {
              let tmp32 = tmp8;
              let tmp33 = obj4;
              if (tmp28) {
                let processResult1 = tmp11;
                if ("function" === typeof obj4.process) {
                  processResult1 = obj4.process(tmp11);
                }
                obj = tmp8;
                let tmp35 = tmp8;
                if (!tmp8) {
                  obj = {};
                  tmp35 = obj;
                }
                obj[tmp10] = processResult1;
                tmp32 = tmp35;
                tmp33 = processResult1;
              }
              tmp2 = tmp32;
              processResult = tmp33;
            } else {
              if ("function" === typeof obj4.diff) {
                let diffResult = obj4.diff(tmp13, tmp11);
              } else {
                let tmp29 = defaultDiffer;
                diffResult = defaultDiffer(tmp13, tmp11);
              }
              let tmp31 = diffResult;
            }
          }
          tmp4 = tmp13;
          let tmp39 = tmp11;
          // continue
        }
        continue;
      }
      continue;
    }
  }
  let tmp44 = tmp5;
  let tmp45 = tmp5;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    let tmp48 = tmp6;
    tmp45 = tmp44;
    while (keys1[tmp2] !== undefined) {
      let tmp65 = tmp49;
      tmp6 = tmp48;
      if (undefined !== arg2[tmp49]) {
        continue;
      } else {
        let tmp50 = arg3[tmp49];
        let tmp51 = !tmp50;
        if (!tmp51) {
          let tmp52 = tmp47;
          if (tmp47) {
            tmp52 = undefined !== tmp47[tmp49];
          }
          tmp51 = tmp52;
        }
        tmp44 = tmp47;
        if (!tmp51) {
          let tmp53 = arg1[tmp49];
          let tmp54 = tmp47;
          if (undefined === tmp53) {
            tmp44 = tmp47;
            tmp48 = tmp53;
          } else {
            if ("object" === typeof tmp50) {
              if ("function" !== typeof tmp50.diff) {
                if ("function" !== typeof tmp50.process) {
                  let tmp55 = clearNestedProperty;
                  let tmp56 = clearNestedProperty(tmp47, tmp53, tmp50);
                }
                let tmp62 = tmp56;
              }
            }
            obj = tmp47;
            let tmp57 = tmp47;
            if (!tmp47) {
              obj = {};
              tmp57 = obj;
            }
            obj[tmp49] = null;
            let tmp58 = closure_53;
            if (!closure_53) {
              closure_53 = {};
            }
            let tmp59 = closure_53;
            tmp56 = tmp57;
            if (!closure_53[tmp49]) {
              let tmp60 = closure_53;
              closure_53[tmp49] = true;
              let tmp61 = closure_54;
              closure_54 = closure_54 + 1;
              tmp56 = tmp57;
            }
          }
        }
        tmp6 = tmp48;
        let tmp63 = tmp50;
        // continue
      }
      continue;
    }
  }
  return tmp45;
}
function mountSafeCallback_NOT_REALLY_SAFE(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  return () => {
    if (arg1) {
      return arg1(...arguments);
    }
  };
}
function setIsStrictModeForDevtools(arg0) {
  if ("function" === typeof require(dependencyMap[3]).log) {
    const result = require(dependencyMap[3]).unstable_setDisableYieldValue(arg0);
    const obj = require(dependencyMap[3]);
  }
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__4) {
    if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__4.setStrictMode) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__4.setStrictMode(closure_57, arg0);
    }
  }
}
function markCommitStopped() {
  let tmp = null !== _null;
  if (tmp) {
    tmp = "function" === typeof _null.markCommitStopped;
  }
  if (tmp) {
    _null.markCommitStopped();
  }
}
function markComponentRenderStarted(flags) {
  let tmp = null !== _null;
  if (tmp) {
    tmp = "function" === typeof _null.markComponentRenderStarted;
  }
  if (tmp) {
    const result = _null.markComponentRenderStarted(flags);
  }
}
function markComponentRenderStopped() {
  let tmp = null !== _null;
  if (tmp) {
    tmp = "function" === typeof _null.markComponentRenderStopped;
  }
  if (tmp) {
    const result = _null.markComponentRenderStopped();
  }
}
function markRenderStarted(arg0) {
  let tmp = null !== _null;
  if (tmp) {
    tmp = "function" === typeof _null.markRenderStarted;
  }
  if (tmp) {
    _null.markRenderStarted(arg0);
  }
}
function markRenderStopped() {
  let tmp = null !== _null;
  if (tmp) {
    tmp = "function" === typeof _null.markRenderStopped;
  }
  if (tmp) {
    _null.markRenderStopped();
  }
}
function markStateUpdateScheduled(_reactInternals, arg1) {
  let tmp = null !== _null;
  if (tmp) {
    tmp = "function" === typeof _null.markStateUpdateScheduled;
  }
  if (tmp) {
    const result = _null.markStateUpdateScheduled(_reactInternals, arg1);
  }
}
function getLabelForLane(arg0) {
  let str = "SyncHydrationLane";
  if (!(1 & arg0)) {
    let str2 = "Sync";
    if (!(2 & arg0)) {
      let str3 = "InputContinuousHydration";
      if (!(4 & arg0)) {
        let str4 = "InputContinuous";
        if (!(8 & arg0)) {
          let str5 = "DefaultHydration";
          if (!(16 & arg0)) {
            let str6 = "Default";
            if (!(32 & arg0)) {
              let str7 = "TransitionHydration";
              if (!(128 & arg0)) {
                let str8 = "Transition";
                if (!(4194048 & arg0)) {
                  let str9 = "Retry";
                  if (!(62914560 & arg0)) {
                    let str10 = "SelectiveHydration";
                    if (!(67108864 & arg0)) {
                      let str11 = "IdleHydration";
                      if (!(134217728 & arg0)) {
                        let str12 = "Idle";
                        if (!(268435456 & arg0)) {
                          let str13 = "Offscreen";
                          if (!(536870912 & arg0)) {
                            let str14;
                            if (1073741824 & arg0) {
                              str14 = "Deferred";
                            }
                            str13 = str14;
                          }
                          str12 = str13;
                        }
                        str11 = str12;
                      }
                      str10 = str11;
                    }
                    str9 = str10;
                  }
                  str8 = str9;
                }
                str7 = str8;
              }
              str6 = str7;
            }
            str5 = str6;
          }
          str4 = str5;
        }
        str3 = str4;
      }
      str2 = str3;
    }
    str = str2;
  }
  return str;
}
function getHighestPriorityLanes(arg0) {
  if (0 !== (42 & arg0)) {
    return tmp;
  } else if (1 === (arg0 & -arg0)) {
    return 1;
  } else if (2 === tmp2) {
    return 2;
  } else if (4 === tmp2) {
    return 4;
  } else if (8 === tmp2) {
    return 8;
  } else if (16 === tmp2) {
    return 16;
  } else if (32 === tmp2) {
    return 32;
  } else if (64 === tmp2) {
    return 64;
  } else if (128 === tmp2) {
    return 128;
  } else {
    if (256 !== tmp2) {
      if (512 !== tmp2) {
        if (1024 !== tmp2) {
          if (2048 !== tmp2) {
            if (4096 !== tmp2) {
              if (8192 !== tmp2) {
                if (16384 !== tmp2) {
                  if (32768 !== tmp2) {
                    if (65536 !== tmp2) {
                      if (131072 !== tmp2) {
                        if (262144 !== tmp2) {
                          if (524288 !== tmp2) {
                            if (1048576 !== tmp2) {
                              if (2097152 !== tmp2) {
                                if (4194304 !== tmp2) {
                                  if (8388608 !== tmp2) {
                                    if (16777216 !== tmp2) {
                                      if (33554432 !== tmp2) {
                                        if (67108864 === tmp2) {
                                          return 67108864;
                                        } else if (134217728 === tmp2) {
                                          return 134217728;
                                        } else if (268435456 === tmp2) {
                                          return 268435456;
                                        } else if (536870912 === tmp2) {
                                          return 536870912;
                                        } else {
                                          return 1073741824 === tmp2 ? 0 : arg0;
                                        }
                                      }
                                    }
                                  }
                                }
                                return 62914560 & arg0;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return 4194048 & arg0;
  }
}
function getNextLanes(pendingLanes) {
  let pingedLanes;
  let suspendedLanes;
  let warmLanes;
  pendingLanes = pendingLanes.pendingLanes;
  if (0 === pendingLanes) {
    return 0;
  } else {
    ({ suspendedLanes, pingedLanes, warmLanes } = pendingLanes);
    if (0 !== (134217727 & pendingLanes)) {
      if (0 !== (tmp15 & ~suspendedLanes)) {
        let num = getHighestPriorityLanes(tmp6);
      } else if (0 !== (pingedLanes & tmp15)) {
        num = getHighestPriorityLanes(tmp7);
      } else {
        num = 0;
        if (!arg2) {
          let num3 = 0;
          if (0 !== (tmp15 & ~warmLanes)) {
            num3 = getHighestPriorityLanes(tmp8);
          }
          num = num3;
        }
      }
    } else if (0 !== (pendingLanes & ~suspendedLanes)) {
      num = getHighestPriorityLanes(tmp);
    } else if (0 !== pingedLanes) {
      num = getHighestPriorityLanes(pingedLanes);
    } else {
      num = 0;
      if (!arg2) {
        let num2 = 0;
        if (0 !== (pendingLanes & ~warmLanes)) {
          num2 = getHighestPriorityLanes(tmp2);
        }
        num = num2;
      }
    }
    let num4 = 0;
    if (0 !== num) {
      let tmp12 = num;
      if (0 !== arg1) {
        tmp12 = num;
        if (arg1 !== num) {
          tmp12 = num;
          if (!(arg1 & suspendedLanes)) {
            if ((num & -num) >= (arg1 & -arg1)) {
              tmp12 = arg1;
            } else {
              tmp12 = num;
              if (32 === tmp13) {
                tmp12 = num;
              }
            }
          }
        }
      }
      num4 = tmp12;
    }
    return num4;
  }
}
function checkIfRootIsPrerendering(pendingLanes) {
  return !(pendingLanes.pendingLanes & ~pendingLanes.suspendedLanes & ~pendingLanes.pingedLanes & arg1);
}
function computeExpirationTime(arg0, arg1) {
  if (1 !== arg0) {
    if (2 !== arg0) {
      if (4 !== arg0) {
        if (8 !== arg0) {
          if (64 !== arg0) {
            if (16 !== arg0) {
              if (32 !== arg0) {
                if (128 !== arg0) {
                  if (256 !== arg0) {
                    if (512 !== arg0) {
                      if (1024 !== arg0) {
                        if (2048 !== arg0) {
                          if (4096 !== arg0) {
                            if (8192 !== arg0) {
                              if (16384 !== arg0) {
                                if (32768 !== arg0) {
                                  if (65536 !== arg0) {
                                    if (131072 !== arg0) {
                                      if (262144 !== arg0) {
                                        if (524288 !== arg0) {
                                          if (1048576 !== arg0) {
                                            if (2097152 !== arg0) {
                                              return -1;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            return arg1 + 5000;
          }
        }
      }
    }
  }
  return arg1 + 250;
}
function claimNextTransitionLane() {
  let closure_64 = tmp2;
  if (!(4194048 & closure_64 << 1)) {
    closure_64 = 256;
  }
  return closure_64;
}
function claimNextRetryLane() {
  let closure_65 = tmp2;
  if (!(62914560 & closure_65 << 1)) {
    closure_65 = 4194304;
  }
  return closure_65;
}
function createLaneMap(arg0) {
  const items = [];
  let num = 0;
  do {
    let arr = items.push(arg0);
    num = num + 1;
  } while (31 > num);
  return items;
}
function markRootUpdated$1(pendingLanes) {
  pendingLanes.pendingLanes = pendingLanes.pendingLanes | arg1;
  if (268435456 !== arg1) {
    pendingLanes.suspendedLanes = 0;
    pendingLanes.pingedLanes = 0;
    pendingLanes.warmLanes = 0;
  }
}
function markSpawnedDeferredLane(pendingLanes) {
  pendingLanes.pendingLanes = pendingLanes.pendingLanes | arg1;
  pendingLanes.suspendedLanes = pendingLanes.suspendedLanes & ~arg1;
  const diff = 31 - clz32Fallback(arg1);
  pendingLanes.entangledLanes = pendingLanes.entangledLanes | arg1;
  pendingLanes.entanglements[diff] = 1073741824 | pendingLanes.entanglements[diff] | 4194090 & arg2;
}
function markRootEntangled(entangledLanes) {
  let tmp = entangledLanes.entangledLanes | arg1;
  entangledLanes.entangledLanes = tmp;
  const entanglements = entangledLanes.entanglements;
  while (tmp) {
    let tmp2 = clz32Fallback;
    let diff = 31 - clz32Fallback(tmp);
    let tmp4 = 1 << diff;
    let tmp5 = tmp;
    if (tmp4 & arg1 | entanglements[diff] & arg1) {
      entanglements[diff] = entanglements[diff] | arg1;
    }
    tmp = tmp & ~tmp4;
  }
}
function addFiberToLanesMap(cancelPendingCommit, mode, arg2) {
  let tmp = arg2;
  if (closure_60) {
    if (0 < tmp) {
      do {
        let tmp4 = closure_61;
        let diff = 31 - closure_61(tmp);
        let obj = tmp3[diff];
        let addResult = obj.add(mode);
        tmp = tmp & ~1 << diff;
      } while (0 < tmp);
    }
  }
}
function movePendingFibersToMemoized(memoizedUpdaters, arg1) {
  let tmp = arg1;
  if (closure_60) {
    const require = memoizedUpdaters.memoizedUpdaters;
    if (0 < tmp) {
      do {
        let tmp3 = closure_61;
        let diff = 31 - closure_61(tmp);
        let arr = tmp2[diff];
        let tmp5 = tmp;
        if (0 < arr.size) {
          let item = arr.forEach((alternate) => {
            alternate = alternate.alternate;
            let hasItem = null !== alternate;
            if (hasItem) {
              hasItem = memoizedUpdaters.has(alternate);
            }
            if (!hasItem) {
              memoizedUpdaters.add(alternate);
            }
          });
          let clearResult = arr.clear();
        }
        tmp = tmp & ~1 << diff;
      } while (0 < tmp);
    }
  }
}
function lanesToEventPriority(arg0) {
  let num = 2;
  if (2 < (arg0 & -arg0)) {
    let num2 = 8;
    if (8 < tmp) {
      let num4 = 268435456;
      if (134217727 & tmp) {
        num4 = 32;
      }
      num2 = num4;
    }
    num = num2;
  }
  return num;
}
function shim$1() {
  throw Error("The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.");
}
function shim() {
  throw Error("The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.");
}
function allocateTag() {
  let sum = closure_67;
  if (1 === closure_67 % 10) {
    sum = tmp + 2;
  }
  closure_67 = sum + 2;
  return sum;
}
function recursivelyUncacheFiberNode(_nativeTag) {
  if ("number" === typeof _nativeTag) {
    map.delete(_nativeTag);
    map1.delete(_nativeTag);
  } else {
    _nativeTag = _nativeTag._nativeTag;
    map.delete(_nativeTag);
    map1.delete(_nativeTag);
    const _children = _nativeTag._children;
    const item = _children.forEach(recursivelyUncacheFiberNode);
  }
}
function getPublicInstance(canonical) {
  let publicInstance = canonical;
  if (null != canonical.canonical) {
    publicInstance = canonical;
    if (null != canonical.canonical.publicInstance) {
      publicInstance = canonical.canonical.publicInstance;
    }
  }
  return publicInstance;
}
function createCursor(current) {
  return { current };
}
function pop(arg0) {
  if (0 <= closure_73) {
    arg0.current = closure_72[closure_73];
    closure_72[closure_73] = null;
    closure_73 = closure_73 - 1;
  }
}
function push(current, current2) {
  const sum = closure_73 + 1;
  closure_73 = sum;
  closure_72[sum] = current.current;
  current.current = current2;
}
function createCapturedValueAtFiber(value, source) {
  if ("object" === typeof value) {
    if (null !== value) {
      value = weakMap.get(value);
      if (undefined === value) {
        let obj = { value, source, stack: getStackByFiberInDevAndProd(source) };
        const result = weakMap.set(value, obj);
        value = obj;
      }
      return value;
    }
  }
  obj = { value, source, stack: getStackByFiberInDevAndProd(source) };
  return obj;
}
function pushHostContainer(arg0, arg1) {
  push(closure_78, arg1);
  push(closure_77, arg0);
  push(closure_76, null);
  pop(closure_76);
  push(closure_76, { isInAParentText: false });
}
function popHostContainer() {
  pop(closure_76);
  pop(closure_77);
  pop(closure_78);
}
function pushHostContext(memoizedState) {
  if (null !== memoizedState.memoizedState) {
    push(closure_79, memoizedState);
  }
  const current = ref.current;
  const type = memoizedState.type;
  let tmp4 = "AndroidTextInput" === type;
  if (!tmp4) {
    tmp4 = "RCTMultilineTextInputView" === type;
  }
  if (!tmp4) {
    tmp4 = "RCTSinglelineTextInputView" === type;
  }
  if (!tmp4) {
    tmp4 = "RCTText" === type;
  }
  if (!tmp4) {
    tmp4 = "RCTVirtualText" === type;
  }
  let tmp5 = current;
  if (current.isInAParentText !== tmp4) {
    const obj = { isInAParentText: tmp4 };
    tmp5 = obj;
  }
  if (current !== tmp5) {
    push(closure_77, memoizedState);
    push(ref, tmp5);
  }
}
function popHostContext(arg0) {
  if (ref2.current === arg0) {
    pop(closure_76);
    pop(ref2);
  }
  if (ref3.current === arg0) {
    pop(ref3);
    obj11._currentValue = null;
  }
}
function upgradeHydrationErrorsToRecoverable() {
  if (null === closure_80) {
    return tmp;
  } else {
    if (null === navigation) {
      const navigation = tmp;
    } else {
      const push = navigation.push;
      push.apply(navigation, tmp);
    }
    closure_80 = null;
  }
}
function pushProvider(arg0, _currentValue, _currentValue2) {
  push(closure_82, _currentValue._currentValue);
  _currentValue._currentValue = _currentValue2;
}
function popProvider(arg0) {
  arg0._currentValue = ref4.current;
  pop(ref4);
}
function scheduleContextWorkOnParentPath(arg0, arg1, arg2) {
  let _return = arg0;
  if (null !== arg0) {
    while (true) {
      let alternate = _return.alternate;
      if ((_return.childLanes & arg1) !== arg1) {
        _return.childLanes = _return.childLanes | arg1;
        if (null !== alternate) {
          alternate.childLanes = alternate.childLanes | arg1;
        }
      } else {
        let tmp = null !== alternate && (alternate.childLanes & arg1) !== arg1;
        if (tmp) {
          alternate.childLanes = alternate.childLanes | arg1;
        }
      }
      if (_return === arg2) {
        break;
      } else {
        _return = _return.return;
        if (null === _return) {
          break;
        }
      }
    }
  }
}
function propagateContextChanges(child) {
  child = child.child;
  if (null !== child) {
    child.return = child;
  }
  if (null !== child) {
    while (true) {
      let dependencies = child.dependencies;
      if (null !== dependencies) {
        let child2 = child.child;
        let iter = dependencies.firstContext;
        child = child2;
        let tmp5 = tmp2;
        let tmp6 = tmp3;
        if (null !== iter) {
          while (true) {
            let num = 0;
            let num2 = 0;
            if (0 < arg1.length) {
              let tmp10 = num;
              while (iter.context !== arg1[num]) {
                num = num + 1;
                num2 = num;
              }
              child.lanes = child.lanes | arg2;
              let alternate2 = child.alternate;
              if (null !== alternate2) {
                alternate2.lanes = alternate2.lanes | arg2;
              }
              let tmp11 = scheduleContextWorkOnParentPath;
              let tmp12 = scheduleContextWorkOnParentPath(child.return, arg2, child);
              child = child2;
              tmp5 = alternate2;
              tmp6 = num;
              if (!arg3) {
                child = null;
                tmp5 = alternate2;
                tmp6 = num;
              }
            }
            let next = iter.next;
            tmp6 = num2;
            child = child2;
            tmp5 = iter;
            iter = next;
          }
        }
      } else if (18 === child.tag) {
        let _return = child.return;
        if (null === _return) {
          break;
        } else {
          _return.lanes = _return.lanes | arg2;
          let alternate = _return.alternate;
          if (null !== alternate) {
            alternate.lanes = alternate.lanes | arg2;
          }
          let tmp7 = scheduleContextWorkOnParentPath;
          let tmp8 = scheduleContextWorkOnParentPath(_return, arg2, child);
          child = null;
          tmp5 = tmp2;
          tmp6 = tmp3;
        }
      } else {
        child = child.child;
        tmp5 = tmp2;
        tmp6 = tmp3;
      }
      if (null !== child) {
        child.return = child;
        let tmp13 = child;
      } else {
        let _return2 = child;
        tmp13 = child;
        if (null !== child) {
          let tmp14 = _return2;
          tmp13 = null;
          while (_return2 !== child) {
            let sibling = _return2.sibling;
            if (null !== sibling) {
              sibling.return = _return2.return;
              tmp13 = sibling;
              // break
            } else {
              _return2 = _return2.return;
              tmp13 = _return2;
              break;
            }
            continue;
          }
        }
      }
      child = tmp13;
      let tmp2 = tmp5;
      let tmp3 = tmp6;
    }
    const _Error = Error;
    throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
  }
}
function propagateParentContextChanges(arg0, flags) {
  let tmp = null;
  let flag = false;
  let tmp3 = null;
  let _return = flags;
  if (null !== flags) {
    while (true) {
      let flag2 = flag;
      if (!flag) {
        flag2 = true;
        if (!(524288 & _return.flags)) {
          flag2 = flag;
          tmp3 = tmp;
          if (262144 & _return.flags) {
            break;
          }
        }
        break;
      }
      if (10 === _return.tag) {
        let alternate = _return.alternate;
        if (null === alternate) {
          let tmp24 = globalThis;
          let _Error2 = Error;
          let str2 = "Should have a current fiber. This is a bug in React.";
          throw Error("Should have a current fiber. This is a bug in React.");
        } else {
          let iter = alternate.memoizedProps;
          let tmp4 = tmp;
          let tmp26 = iter;
          let tmp6 = tmp2;
          if (null !== iter) {
            let type = _return.type;
            let tmp12 = is;
            tmp4 = tmp;
            let tmp13 = iter;
            tmp6 = type;
            if (!is(_return.pendingProps.value, iter.value)) {
              if (null !== tmp) {
                let arr = tmp.push(type);
                let items = tmp;
              } else {
                items = [type];
              }
              let tmp15 = items;
              let tmp16 = iter;
              let tmp17 = type;
            }
          }
        }
      } else {
        let tmp25 = ref3;
        tmp4 = tmp;
        tmp6 = tmp2;
        if (_return === ref3.current) {
          let alternate2 = _return.alternate;
          if (null === alternate2) {
            let tmp11 = globalThis;
            let _Error = Error;
            let str = "Should have a current fiber. This is a bug in React.";
            throw Error("Should have a current fiber. This is a bug in React.");
          } else {
            tmp4 = tmp;
            let tmp5 = alternate2;
            tmp6 = tmp2;
            if (alternate2.memoizedState.memoizedState !== _return.memoizedState.memoizedState) {
              if (null !== tmp) {
                let tmp8 = obj11;
                arr = tmp.push(obj11);
                let items1 = tmp;
              } else {
                let tmp7 = obj11;
                items1 = [obj11];
              }
              tmp4 = items1;
              let tmp10 = alternate2;
              tmp6 = tmp2;
            }
          }
        }
      }
      _return = _return.return;
      tmp = tmp4;
      let tmp2 = tmp6;
      flag = flag2;
      tmp3 = tmp4;
      if (null === _return) {
        break;
      }
    }
  }
  if (null !== tmp3) {
    propagateContextChanges(flags, tmp3, arg2, arg3);
  }
  flags.flags = flags.flags | 262144;
}
function checkIfContextChanged(firstContext) {
  let iter = firstContext.firstContext;
  if (null !== iter) {
    while (is(iter.context._currentValue, iter.memoizedValue)) {
      iter = iter.next;
    }
    return true;
  }
  return false;
}
function prepareToReadContext(dependencies) {
  let closure_83 = dependencies;
  let closure_84 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
}
function readContext(arg0) {
  return readContextForConsumer(closure_83, arg0);
}
function readContextDuringReconciliation(arg0, arg1) {
  if (null === closure_83) {
    prepareToReadContext(arg0);
  }
  return readContextForConsumer(arg0, arg1);
}
function readContextForConsumer(flags, _currentValue) {
  _currentValue = _currentValue._currentValue;
  let obj = { context: _currentValue, memoizedValue: _currentValue, next: null };
  if (null === closure_84) {
    if (null === flags) {
      const _Error = Error;
      throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    } else {
      closure_84 = obj;
      obj = { lanes: 0 };
      obj.firstContext = obj;
      flags.dependencies = obj;
      flags.flags = flags.flags | 524288;
    }
  } else {
    closure_84.next = obj;
    closure_84 = obj;
  }
  return _currentValue;
}
function createCache() {
  const obj = { controller: new closure_85() };
  const tmp = new closure_85();
  obj.data = new Map();
  obj.refCount = 0;
  return obj;
}
function releaseCache(refCount) {
  const require = refCount;
  refCount.refCount = refCount.refCount - 1;
  if (0 === refCount.refCount) {
    const result = require(dependencyMap[3]).unstable_scheduleCallback(require(dependencyMap[3]).unstable_NormalPriority, () => {
      const controller = arg0.controller;
      controller.abort();
    });
    const obj = require(dependencyMap[3]);
  }
}
function pushNestedEffectDurations() {
  let closure_89 = 0;
  return closure_89;
}
function popNestedEffectDurations(arg0) {
  let closure_89 = arg0;
  return closure_89;
}
function bubbleNestedEffectDurations(arg0) {
  closure_89 = closure_89 + arg0;
  return closure_89;
}
function startProfilerTimer(actualStartTime) {
  let closure_88 = require(dependencyMap[3]).unstable_now();
  if (0 > actualStartTime.actualStartTime) {
    actualStartTime.actualStartTime = closure_88;
  }
}
function stopProfilerTimerIfRunningAndRecordDuration(actualDuration) {
  if (0 <= closure_88) {
    const diff = require(dependencyMap[3]).unstable_now() - closure_88;
    actualDuration.actualDuration = actualDuration.actualDuration + diff;
    actualDuration.selfBaseDuration = diff;
    closure_88 = -1;
    const obj = require(dependencyMap[3]);
  }
}
function stopProfilerTimerIfRunningAndRecordIncompleteDuration(_return) {
  if (0 <= closure_88) {
    _return.actualDuration = _return.actualDuration + (require(dependencyMap[3]).unstable_now() - closure_88);
    closure_88 = -1;
    const obj = require(dependencyMap[3]);
  }
}
function recordEffectDuration() {
  if (0 <= closure_88) {
    closure_88 = -1;
    closure_89 = closure_89 + (require(dependencyMap[3]).unstable_now() - closure_88);
    const obj = require(dependencyMap[3]);
  }
}
function startEffectTimer() {
  let closure_88 = require(dependencyMap[3]).unstable_now();
}
function transferActualDuration(child) {
  let sibling = child.child;
  while (sibling) {
    child.actualDuration = child.actualDuration + sibling.actualDuration;
    sibling = sibling.sibling;
  }
}
function ensureRootIsScheduled(next) {
  let tmp = next !== closure_93;
  if (tmp) {
    tmp = null === next.next;
  }
  if (tmp) {
    if (null === closure_93) {
      closure_93 = next;
      let closure_92 = next;
    } else {
      closure_93.next = next;
      closure_93 = next;
    }
  }
  let closure_95 = true;
  if (!closure_94) {
    closure_94 = true;
    const result = require(dependencyMap[3]).unstable_scheduleCallback(require(dependencyMap[3]).unstable_ImmediatePriority, processRootScheduleInImmediateTask);
    const obj = require(dependencyMap[3]);
  }
}
function flushSyncWorkAcrossRoots_impl(arg0, arg1) {
  let pingedLanes;
  let suspendedLanes;
  if (!closure_96) {
    if (closure_95) {
      closure_96 = true;
      while (true) {
        let iter = closure_92;
        let tmp6 = tmp4;
        let tmp7 = tmp5;
        let flag3 = false;
        let flag4 = false;
        if (null !== closure_92) {
          while (true) {
            if (!arg1) {
              {
                let tmp10 = closure_155;
                let num9 = 0;
                let tmp9 = getNextLanes;
                if (iter === closure_155) {
                  num9 = closure_157;
                }
                let tmp11 = null !== iter.cancelPendingCommit || -1 !== iter.timeoutHandle;
                let tmp9Result = tmp9(iter, num9, tmp11);
                let tmp13 = 3 & tmp9Result;
                let tmp14 = !tmp13;
                if (tmp13) {
                  let tmp15 = checkIfRootIsPrerendering;
                  tmp14 = checkIfRootIsPrerendering(iter, tmp9Result);
                }
                let flag5 = flag3;
                let tmp8 = tmp6;
                tmp7 = tmp9Result;
                if (!tmp14) {
                  let tmp16 = performSyncWorkOnRoot;
                  let tmp17 = performSyncWorkOnRoot(iter, tmp9Result);
                  flag5 = true;
                  tmp8 = tmp6;
                  tmp7 = tmp9Result;
                }
              }
            } else {
              flag5 = flag3;
              tmp8 = tmp6;
            }
            iter = iter.next;
            flag3 = flag5;
            tmp6 = tmp8;
            flag4 = flag5;
            let tmp4 = tmp8;
            let tmp5 = tmp7;
            continue;
          }
          let tmp19 = clz32Fallback;
          ({ suspendedLanes, pingedLanes } = iter);
          let tmp20 = (1 << 31 - clz32Fallback(tmp3) + 1) - 1 & (tmp18 & ~suspendedLanes & ~pingedLanes);
          let tmp21 = 201326741 & tmp20;
          if (tmp21) {
            let num10 = tmp21 | 1;
          } else {
            num10 = 0;
            if (tmp20) {
              num10 = 2 | tmp20;
            }
          }
          let tmp22 = num10;
        }
        if (flag4) {
          continue;
        } else {
          closure_96 = false;
        }
      }
    }
  }
}
function processRootScheduleInImmediateTask() {
  let next;
  let closure_94 = false;
  let closure_95 = false;
  if (0 !== closure_97) {
    closure_97 = 0;
  }
  require(dependencyMap[3]);
  let iter = closure_92;
  let tmp3 = null;
  if (null !== closure_92) {
    do {
      next = iter.next;
      let tmp4 = closure_298;
      let tmp5 = closure_298(iter, tmp2);
      let tmp6 = iter;
      if (0 === tmp5) {
        iter.next = null;
        if (null === tmp3) {
          closure_92 = next;
        } else {
          tmp3.next = next;
        }
        let tmp7 = tmp3;
        if (null === next) {
          closure_93 = tmp3;
          tmp7 = tmp3;
        }
      } else {
        tmp7 = iter;
        if (3 & tmp5) {
          closure_95 = true;
          tmp7 = iter;
        }
      }
      tmp3 = tmp7;
      iter = next;
    } while (null !== next);
  }
  flushSyncWorkAcrossRoots_impl(0, false);
}
function scheduleTaskForRootDuringMicrotask(expirationTimes) {
  expirationTimes = expirationTimes.expirationTimes;
  let tmp3 = -62914561 & expirationTimes.pendingLanes;
  if (0 < tmp3) {
    do {
      let tmp4 = closure_61;
      let diff = 31 - closure_61(tmp3);
      let tmp6 = 1 << diff;
      let tmp7 = expirationTimes[diff];
      let tmp8 = tmp3;
      if (-1 === tmp7) {
        let tmp9 = tmp6 & tmp && !(tmp6 & tmp2);
        if (!tmp9) {
          let tmp10 = closure_251;
          expirationTimes[diff] = closure_251(tmp6, arg1);
        }
      } else if (tmp7 <= arg1) {
        expirationTimes.expiredLanes = expirationTimes.expiredLanes | tmp6;
      }
      tmp3 = tmp3 & ~tmp6;
    } while (0 < tmp3);
  }
  let num = 0;
  if (expirationTimes === closure_155) {
    num = closure_157;
  }
  const tmp11Result = getNextLanes(expirationTimes, num, null !== expirationTimes.cancelPendingCommit || -1 !== expirationTimes.timeoutHandle);
  const callbackNode = expirationTimes.callbackNode;
  if (0 !== tmp11Result) {
    if (!tmp12) {
      if (null === expirationTimes.cancelPendingCommit) {
        if (3 & tmp11Result) {
          if (!checkIfRootIsPrerendering(expirationTimes, tmp11Result)) {
            if (null !== callbackNode) {
              const result = require(dependencyMap[3]).unstable_cancelCallback(callbackNode);
              const obj = require(dependencyMap[3]);
            }
            expirationTimes.callbackPriority = 2;
            expirationTimes.callbackNode = null;
            return 2;
          }
        }
        if ((tmp11Result & -tmp11Result) === expirationTimes.callbackPriority) {
          return tmp20;
        } else {
          if (null !== callbackNode) {
            const result1 = require(dependencyMap[3]).unstable_cancelCallback(callbackNode);
            const obj2 = require(dependencyMap[3]);
          }
          const tmp25 = lanesToEventPriority(tmp11Result);
          if (2 !== tmp25) {
            if (8 !== tmp25) {
              if (32 !== tmp25) {
                if (268435456 === tmp25) {
                  let unstable_UserBlockingPriority = require(dependencyMap[3]).unstable_IdlePriority;
                }
              }
              unstable_UserBlockingPriority = require(dependencyMap[3]).unstable_NormalPriority;
            }
            const bindResult = performWorkOnRootViaSchedulerTask.bind(null, expirationTimes);
            expirationTimes.callbackPriority = tmp20;
            expirationTimes.callbackNode = require(dependencyMap[3]).unstable_scheduleCallback(unstable_UserBlockingPriority, bindResult);
            return tmp20;
          }
          unstable_UserBlockingPriority = require(dependencyMap[3]).unstable_UserBlockingPriority;
        }
      }
    }
  }
  if (null !== callbackNode) {
    const result2 = require(dependencyMap[3]).unstable_cancelCallback(callbackNode);
    const obj4 = require(dependencyMap[3]);
  }
  expirationTimes.callbackNode = null;
  expirationTimes.callbackPriority = 0;
  return 0;
}
function performWorkOnRootViaSchedulerTask(callbackNode) {
  let closure_90 = false;
  let closure_91 = false;
  if (0 !== closure_177) {
    if (5 !== closure_177) {
      callbackNode.callbackNode = null;
      callbackNode.callbackPriority = 0;
      return null;
    }
  }
  callbackNode = callbackNode.callbackNode;
  if (flushPendingEffects(undefined)) {
    if (callbackNode.callbackNode !== callbackNode) {
      return null;
    }
  }
  let num2 = 0;
  if (callbackNode === closure_155) {
    num2 = closure_157;
  }
  let tmp3 = null !== callbackNode.cancelPendingCommit;
  if (!tmp3) {
    tmp3 = -1 !== callbackNode.timeoutHandle;
  }
  const tmp2Result = getNextLanes(callbackNode, num2, tmp3);
  let tmp5 = null;
  if (0 !== tmp2Result) {
    performWorkOnRoot(callbackNode, tmp2Result, arg1);
    scheduleTaskForRootDuringMicrotask(callbackNode, require(dependencyMap[3]).unstable_now());
    let bindResult = null;
    if (null != callbackNode.callbackNode) {
      bindResult = null;
      if (callbackNode.callbackNode === callbackNode) {
        bindResult = performWorkOnRootViaSchedulerTask.bind(null, callbackNode);
      }
    }
    tmp5 = bindResult;
    const obj = require(dependencyMap[3]);
  }
  return tmp5;
}
function performSyncWorkOnRoot(arg0, arg1) {
  if (flushPendingEffects()) {
    return null;
  } else {
    let closure_90 = closure_91;
    closure_91 = false;
    performWorkOnRoot(arg0, arg1, true);
  }
}
function requestTransitionLane() {
  if (0 === closure_97) {
    closure_97 = claimNextTransitionLane();
  }
  return closure_97;
}
function pingEngtangledActionScope() {
  const diff = closure_99 - 1;
  closure_99 = diff;
  if (0 == diff) {
    if (null !== length) {
      if (null !== closure_101) {
        closure_101.status = "fulfilled";
      }
      let length = null;
      let closure_100 = 0;
      closure_101 = null;
      let num = 0;
      if (0 < length.length) {
        do {
          let tmp6 = arr[num]();
          num = num + 1;
          length = arr.length;
        } while (num < length);
      }
    }
  }
}
function peekCacheFromPool() {
  let pooledCache = ref5.current;
  if (null === pooledCache) {
    pooledCache = _null5.pooledCache;
  }
  return pooledCache;
}
function pushTransition(arg0, pool) {
  if (null === pool) {
    pool = ref5.current;
  } else {
    pool = pool.pool;
  }
  push(ref5, pool);
}
function getSuspendedCache() {
  const tmp = peekCacheFromPool();
  let tmp2 = null;
  if (null !== tmp) {
    const obj = { parent: obj12._currentValue, pool: tmp };
    tmp2 = obj;
  }
  return tmp2;
}
function shallowEqual(arg0, arg1) {
  if (is(arg0, arg1)) {
    return true;
  } else {
    if ("object" === typeof arg0) {
      if (null !== arg0) {
        if ("object" === typeof arg1) {
          if (null !== arg1) {
            const _Object = Object;
            const keys = Object.keys(arg0);
            const _Object2 = Object;
            if (keys.length !== Object.keys(arg1).length) {
              return false;
            } else {
              let num = 0;
              if (0 < keys.length) {
                while (hasOwnProperty.call(arg1, keys[num])) {
                  let tmp3 = is;
                  if (!is(arg0[tmp], arg1[tmp])) {
                    break;
                  } else {
                    num = num + 1;
                  }
                }
                return false;
              }
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
function isThenableResolved(status) {
  status = status.status;
  let tmp = "fulfilled" === status;
  if (!tmp) {
    tmp = "rejected" === status;
  }
  return tmp;
}
function noop() {

}
function trackUsedThenable(arr, promise) {
  let require = promise;
  if (undefined === arr[arg2]) {
    arr.push(promise);
    let iter = promise;
  } else {
    iter = promise;
    if (tmp !== promise) {
      promise.then(noop, noop);
      require = tmp;
      iter = tmp;
    }
  }
  const status = iter.status;
  if ("fulfilled" === status) {
    return iter.value;
  } else if ("rejected" === status) {
    const reason2 = iter.reason;
    checkIfUseWrappedInAsyncCatch(reason2);
    throw reason2;
  } else {
    if ("string" === typeof iter.status) {
      iter.then(noop, noop);
    } else {
      if (null !== _null5) {
        if (100 < _null5.shellSuspendCounter) {
          const _Error = Error;
          throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
        }
      }
      iter.status = "pending";
      iter.then((value) => {
        if ("pending" === tmp.status) {
          tmp.status = "fulfilled";
          tmp.value = value;
        }
      }, (reason) => {
        if ("pending" === tmp.status) {
          tmp.status = "rejected";
          tmp.reason = reason;
        }
      });
    }
    const status2 = iter.status;
    if ("fulfilled" === status2) {
      return iter.value;
    } else if ("rejected" === status2) {
      const reason = iter.reason;
      checkIfUseWrappedInAsyncCatch(reason);
      throw reason;
    } else {
      let closure_109 = iter;
      throw closure_105;
    }
  }
}
function getSuspendedThenable() {
  if (null === closure_109) {
    const _Error = Error;
    throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
  } else {
    closure_109 = null;
    return closure_109;
  }
}
function checkIfUseWrappedInAsyncCatch(arg0) {
  throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
}
function finishQueueingConcurrentUpdates() {
  let tmp13;
  let closure_111 = 0;
  let closure_112 = 0;
  let num = 0;
  if (0 < closure_111) {
    while (true) {
      let tmp3 = closure_110;
      let tmp4 = closure_110;
      let tmp5 = +num;
      let sum = tmp5 + 1;
      closure_110[tmp5] = null;
      let tmp7 = closure_110;
      let tmp9 = closure_110;
      let tmp10 = +sum;
      let sum1 = tmp10 + 1;
      closure_110[tmp10] = null;
      let tmp12 = closure_110;
      tmp13 = closure_110[sum1];
      let tmp14 = closure_110;
      let tmp15 = +sum1;
      let sum2 = tmp15 + 1;
      closure_110[tmp15] = null;
      let tmp17 = closure_110;
      let tmp18 = closure_110[sum2];
      let tmp19 = closure_110;
      let tmp20 = +sum2;
      num = tmp20 + 1;
      closure_110[tmp20] = null;
      let tmp21 = tmp2;
      if (null !== closure_110[sum]) {
        tmp21 = tmp2;
        if (null !== tmp13) {
          break;
        }
      }
      if (0 !== tmp18) {
        let tmp23 = markUpdateLaneFromFiberToRoot;
        let tmp24 = markUpdateLaneFromFiberToRoot(closure_110[num], tmp13, tmp18);
      }
      let tmp2 = tmp21;
    }
    if (null === tmp8.pending) {
      tmp13.next = tmp13;
    } else {
      tmp13.next = iter.next;
      iter.next = tmp13;
    }
    tmp8.pending = tmp13;
  }
}
function enqueueUpdate$1(lanes) {
  let closure_111 = tmp + 1;
  closure_110[+closure_111] = lanes;
  closure_111 = tmp2 + 1;
  closure_110[+closure_111] = arg1;
  closure_111 = tmp3 + 1;
  closure_110[+closure_111] = arg2;
  closure_111 = tmp4 + 1;
  closure_110[+closure_111] = arg3;
  closure_112 = closure_112 | arg3;
  lanes.lanes = lanes.lanes | arg3;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | arg3;
  }
}
function enqueueConcurrentHookUpdate(arg0, arg1, arg2, arg3) {
  enqueueUpdate$1(arg0, arg1, arg2, arg3);
  return getRootForUpdatedFiber(arg0);
}
function enqueueConcurrentRenderForLane(arg0, arg1) {
  enqueueUpdate$1(arg0, null, null, arg1);
  return getRootForUpdatedFiber(arg0);
}
function markUpdateLaneFromFiberToRoot(lanes) {
  let _return2;
  let tmp = lanes;
  lanes.lanes = lanes.lanes | arg2;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | arg2;
  }
  let _return = tmp.return;
  let flag = false;
  let flag2 = false;
  if (null !== _return) {
    do {
      _return.childLanes = _return.childLanes | arg2;
      let alternate2 = _return.alternate;
      if (null !== alternate2) {
        alternate2.childLanes = alternate2.childLanes | arg2;
      }
      let tmp2 = flag;
      if (22 === _return.tag) {
        let stateNode = _return.stateNode;
        let tmp3 = null === stateNode || 1 & stateNode._visibility;
        if (!tmp3) {
          flag = true;
        }
        tmp2 = flag;
      }
      _return2 = _return.return;
      flag = tmp2;
      tmp = _return;
      flag2 = tmp2;
      _return = _return2;
    } while (null !== _return2);
  }
  let tmp4 = null;
  if (3 === tmp.tag) {
    const stateNode2 = tmp.stateNode;
    if (flag2) {
      flag2 = null !== arg1;
    }
    tmp4 = stateNode2;
    if (flag2) {
      const diff = 31 - clz32Fallback(arg2);
      const hiddenUpdates = stateNode2.hiddenUpdates;
      let arr = hiddenUpdates[diff];
      if (null === arr) {
        const items = [arg1];
        hiddenUpdates[diff] = items;
      } else {
        arr = arr.push(arg1);
      }
      arg1.lane = 536870912 | arg2;
    }
  }
  return tmp4;
}
function getRootForUpdatedFiber(arg0) {
  let tmp = arg0;
  if (50 < closure_184) {
    closure_184 = 0;
    let closure_185 = null;
    const _Error = Error;
    throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
  } else {
    let _return = tmp.return;
    if (null !== _return) {
      do {
        tmp = _return;
        _return = _return.return;
      } while (null !== tmp3);
    }
    let stateNode = null;
    if (3 === tmp.tag) {
      stateNode = tmp.stateNode;
    }
    return stateNode;
  }
}
function initializeUpdateQueue(memoizedState) {
  const obj = { <string:2234961839>: 1, <string:1668074203>: "100%", <string:2755968284>: "absolute", <string:2125854999>: 0, <string:102742980>: 0, baseState: memoizedState.memoizedState, shared: { 9223372036854775807: 22817347, 0: 18467840, 0: 21634048 } };
  memoizedState.updateQueue = obj;
}
function cloneUpdateQueue(updateQueue, updateQueue2) {
  updateQueue = updateQueue.updateQueue;
  if (updateQueue2.updateQueue === updateQueue) {
    const obj = {};
    ({ baseState: obj.baseState, firstBaseUpdate: obj.firstBaseUpdate, lastBaseUpdate: obj.lastBaseUpdate, shared: obj.shared } = updateQueue);
    obj.callbacks = null;
    updateQueue2.updateQueue = obj;
  }
}
function createUpdate(lane) {
  return { lane };
}
function enqueueUpdate(updateQueue, next) {
  updateQueue = updateQueue.updateQueue;
  if (null === updateQueue) {
    return null;
  } else {
    const shared = updateQueue.shared;
    if (2 & closure_154) {
      if (null === shared.pending) {
        next.next = next;
      } else {
        next.next = iter.next;
        iter.next = next;
      }
      shared.pending = next;
      markUpdateLaneFromFiberToRoot(updateQueue, null, arg2);
      return getRootForUpdatedFiber(updateQueue);
    } else {
      enqueueUpdate$1(updateQueue, shared, next, arg2);
      return getRootForUpdatedFiber(updateQueue);
    }
  }
}
function entangleTransitions(pendingLanes, updateQueue) {
  updateQueue = updateQueue.updateQueue;
  if (null !== updateQueue) {
    const shared = updateQueue.shared;
    if (4194048 & arg2) {
      shared.lanes = arg2 | shared.lanes & pendingLanes.pendingLanes;
      markRootEntangled(pendingLanes, arg2 | shared.lanes & pendingLanes.pendingLanes);
    }
  }
}
function enqueueCapturedUpdate(arg0, next) {
  let alternate;
  let tmp4;
  let updateQueue;
  ({ updateQueue, alternate } = arg0);
  if (null !== alternate) {
    const updateQueue2 = alternate.updateQueue;
    if (updateQueue === updateQueue2) {
      let iter = updateQueue.firstBaseUpdate;
      let tmp = null;
      let tmp2 = next;
      let tmp3 = null;
      if (null !== iter) {
        do {
          let obj = {};
          ({ lane: obj.lane, tag: obj.tag, payload: obj.payload } = iter);
          obj.callback = null;
          obj.next = null;
          tmp4 = obj;
          if (null !== tmp3) {
            tmp3.next = obj;
            tmp4 = tmp;
          }
          iter = iter.next;
          tmp = tmp4;
          tmp3 = obj;
        } while (null !== iter);
        tmp2 = next;
        if (null !== obj) {
          obj.next = next;
          tmp2 = tmp4;
        }
      }
      obj = { baseState: updateQueue2.baseState, firstBaseUpdate: tmp2, lastBaseUpdate: next };
      ({ shared: obj2.shared, callbacks: obj2.callbacks } = updateQueue2);
      arg0.updateQueue = obj;
    }
  }
  const lastBaseUpdate = updateQueue.lastBaseUpdate;
  if (null === lastBaseUpdate) {
    updateQueue.firstBaseUpdate = next;
  } else {
    lastBaseUpdate.next = next;
  }
  updateQueue.lastBaseUpdate = next;
}
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (closure_114) {
    if (null !== closure_101) {
      throw closure_101;
    }
  }
}
function processUpdateQueue(updateQueue) {
  let firstBaseUpdate;
  let lastBaseUpdate;
  let obj;
  let tmp10;
  let tmp11;
  let tmp9;
  let closure_114 = false;
  updateQueue = updateQueue.updateQueue;
  let closure_113 = false;
  ({ firstBaseUpdate, lastBaseUpdate } = updateQueue);
  let tmp = firstBaseUpdate;
  if (null !== updateQueue.shared.pending) {
    updateQueue.shared.pending = null;
    const next = iter.next;
    iter.next = null;
    let tmp2 = next;
    if (null !== lastBaseUpdate) {
      lastBaseUpdate.next = next;
      tmp2 = firstBaseUpdate;
    }
    const alternate = updateQueue.alternate;
    tmp = tmp2;
    if (null !== alternate) {
      const updateQueue2 = alternate.updateQueue;
      const lastBaseUpdate2 = updateQueue2.lastBaseUpdate;
      tmp = tmp2;
      if (lastBaseUpdate2 !== iter) {
        if (null === lastBaseUpdate2) {
          updateQueue2.firstBaseUpdate = next;
        } else {
          lastBaseUpdate2.next = next;
        }
        updateQueue2.lastBaseUpdate = iter;
      }
    }
  }
  if (null !== tmp) {
    let baseState = updateQueue.baseState;
    let num = 0;
    let iter2 = tmp;
    let tmp26 = null;
    let tmp27 = null;
    let tmp28 = null;
    while (true) {
      let tmp4 = -536870913 & iter2.lane;
      let tmp5 = tmp4 !== iter2.lane;
      if (tmp5) {
        let tmp7 = closure_157;
        let tmp6 = (closure_157 & tmp4) === tmp4;
      } else {
        tmp6 = (arg3 & tmp4) === tmp4;
      }
      if (tmp6) {
        let tmp12 = 0 !== tmp4;
        if (tmp12) {
          let tmp13 = closure_100;
          tmp12 = tmp4 === closure_100;
        }
        if (tmp12) {
          closure_114 = true;
        }
        let tmp14 = tmp28;
        if (null !== tmp28) {
          obj = {};
          ({ tag: obj2.tag, payload: obj2.payload } = iter2);
          tmp28.next = obj;
          tmp14 = obj;
        }
        let tag = iter2.tag;
        if (1 === tag) {
          let payload2 = iter2.payload;
          let callResult = payload2;
          let tmp16 = payload2;
          if ("function" === typeof payload2) {
            callResult = payload2.call(arg2, baseState, arg1);
            tmp16 = payload2;
          }
        } else {
          if (3 === tag) {
            updateQueue.flags = -65537 & updateQueue.flags | 128;
          } else if (0 !== tag) {
            callResult = baseState;
            tmp16 = updateQueue;
            if (2 === tag) {
              closure_113 = true;
              callResult = baseState;
              tmp16 = updateQueue;
            }
          }
          let payload = iter2.payload;
          let callResult1 = payload;
          if ("function" === typeof payload) {
            callResult1 = payload.call(arg2, baseState, arg1);
          }
          callResult = baseState;
          tmp16 = payload;
          if (null != callResult1) {
            let tmp18 = assign;
            callResult = assign({}, baseState, callResult1);
            tmp16 = payload;
          }
        }
        let callback = iter2.callback;
        tmp10 = num;
        let tmp8 = tmp26;
        tmp9 = tmp27;
        obj = tmp14;
        tmp11 = callResult;
        let tmp19 = tmp16;
        let tmp20 = iter2;
        let tmp21 = arg2;
        if (null !== callback) {
          updateQueue.flags = updateQueue.flags | 64;
          if (tmp5) {
            updateQueue.flags = updateQueue.flags | 8192;
          }
          let callbacks = updateQueue.callbacks;
          if (null === callbacks) {
            let items = [callback];
            updateQueue.callbacks = items;
            tmp10 = num;
            tmp8 = tmp26;
            tmp9 = tmp27;
            obj = tmp14;
            tmp11 = callResult;
            tmp19 = tmp16;
            tmp20 = iter2;
            tmp21 = arg2;
          } else {
            let arr = callbacks.push(callback);
            tmp10 = num;
            tmp8 = tmp26;
            tmp9 = tmp27;
            obj = tmp14;
            tmp11 = callResult;
            tmp19 = tmp16;
            tmp20 = iter2;
            tmp21 = arg2;
          }
        }
      } else {
        obj = { lane: tmp4 };
        ({ tag: obj.tag, payload: obj.payload, callback: obj.callback } = iter2);
        obj.next = null;
        tmp8 = baseState;
        tmp9 = obj;
        if (null !== tmp28) {
          tmp28.next = obj;
          tmp8 = tmp26;
          tmp9 = tmp27;
        }
        tmp10 = num | tmp4;
        tmp11 = baseState;
      }
      iter2 = iter2.next;
      num = tmp10;
      tmp26 = tmp8;
      tmp27 = tmp9;
      tmp28 = obj;
      baseState = tmp11;
      let tmp23 = tmp19;
      let tmp24 = tmp20;
      let tmp25 = tmp21;
      if (null !== iter2) {
        continue;
      } else {
        let iter3 = updateQueue.shared.pending;
        if (null === iter3) {
          break;
        } else {
          iter2 = iter3.next;
          iter3.next = null;
          updateQueue.lastBaseUpdate = iter3;
          updateQueue.shared.pending = null;
          num = tmp10;
          tmp26 = tmp8;
          tmp27 = tmp9;
          tmp28 = obj;
          baseState = tmp11;
          tmp19 = tmp23;
          tmp20 = tmp24;
          tmp21 = tmp25;
          // continue
        }
      }
      continue;
    }
    if (null === obj) {
      tmp8 = tmp11;
    }
    updateQueue.baseState = tmp8;
    updateQueue.firstBaseUpdate = tmp9;
    updateQueue.lastBaseUpdate = obj;
    if (null === tmp) {
      updateQueue.shared.lanes = 0;
    }
    closure_165 = closure_165 | tmp10;
    updateQueue.lanes = tmp10;
    updateQueue.memoizedState = tmp11;
  }
}
function callCallback(call) {
  if ("function" !== typeof call) {
    const _Error = Error;
    throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + call);
  } else {
    call.call(arg1);
  }
}
function commitCallbacks(callbacks) {
  let length;
  callbacks = callbacks.callbacks;
  if (null !== callbacks) {
    callbacks.callbacks = null;
    let num = 0;
    if (0 < callbacks.length) {
      do {
        let tmp = closure_326;
        let tmp2 = closure_326(callbacks[num], arg1);
        num = num + 1;
        length = callbacks.length;
      } while (num < length);
    }
  }
}
function pushHiddenContext(arg0, baseLanes) {
  push(module_0, closure_163);
  push(closure_115, baseLanes);
  closure_163 = closure_163 | baseLanes.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(module_0, closure_163);
  push(ref6, ref6.current);
}
function popHiddenContext() {
  const current = ref7.current;
  pop(closure_115);
  pop(ref7);
}
function throwInvalidHookError() {
  throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
}
function areHookInputsEqual(arg0, arg1) {
  if (null === arg1) {
    return false;
  } else {
    if (0 < arg1.length) {
      let num2 = 0;
      if (0 < arg0.length) {
        while (is(arg0[num2], arg1[num2])) {
          num2 = num2 + 1;
        }
        return false;
      }
    }
    return true;
  }
}
function renderWithHooks(memoizedState) {
  let closure_117 = arg5;
  let closure_118 = arg1;
  arg1.memoizedState = null;
  arg1.updateQueue = null;
  arg1.lanes = 0;
  if (null !== memoizedState) {
    if (null !== memoizedState.memoizedState) {
      let tmp2 = closure_129;
    }
    tmp.H = tmp2;
    let closure_123 = false;
    let tmp3 = arg2(arg3, arg4);
    closure_123 = false;
    if (closure_122) {
      tmp3 = renderWithHooksAgain(arg1, arg2, arg3, arg4);
    }
    finishRenderingHooks(memoizedState);
    return tmp3;
  }
  tmp2 = closure_128;
}
function finishRenderingHooks(dependencies) {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = closure_127;
  let tmp = null !== _null3;
  if (tmp) {
    tmp = null !== _null3.next;
  }
  let closure_117 = 0;
  let closure_118 = null;
  const _null3 = null;
  let closure_120 = null;
  let closure_121 = false;
  let closure_124 = 0;
  let closure_125 = null;
  if (tmp) {
    const _Error = Error;
    throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
  } else if (!tmp3) {
    dependencies = dependencies.dependencies;
    let tmp4 = null !== dependencies;
    if (tmp4) {
      tmp4 = checkIfContextChanged(dependencies);
    }
    if (tmp4) {
      let closure_141 = true;
    }
  }
}
function renderWithHooksAgain(updateQueue) {
  let closure_118 = updateQueue;
  let num = 0;
  while (true) {
    let tmp = closure_122;
    if (closure_122) {
      let closure_125 = null;
    }
    let closure_124 = 0;
    closure_122 = false;
    if (25 <= num) {
      break;
    } else {
      num = num + 1;
      let closure_119 = null;
      let closure_120 = null;
      if (null != updateQueue.updateQueue) {
        updateQueue = updateQueue.updateQueue;
        updateQueue.lastEffect = null;
        updateQueue.events = null;
        updateQueue.stores = null;
        if (null != updateQueue.memoCache) {
          updateQueue.memoCache.index = 0;
        }
      }
      let tmp2 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      let tmp3 = closure_130;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = closure_130;
      let tmp5 = closure_122;
      if (closure_122) {
        continue;
      } else {
        return tmp4;
      }
    }
  }
  throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
}
function TransitionAwareHostComponent() {
  const H = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
  const first = H.useState()[0];
  let tmp = first;
  if ("function" === typeof first.then) {
    tmp = useThenable(first);
  }
  let memoizedState = null;
  if (null !== _null3) {
    memoizedState = _null3.memoizedState;
  }
  if (memoizedState !== H.useState()[0]) {
    _null2.flags = _null2.flags | 1024;
  }
  return tmp;
}
function bailoutHooks(updateQueue, flags) {
  flags.updateQueue = updateQueue.updateQueue;
  flags.flags = flags.flags & -2053;
  updateQueue.lanes = updateQueue.lanes & ~arg2;
}
function resetHooksOnUnwind(memoizedState) {
  if (closure_121) {
    let iter = memoizedState.memoizedState;
    if (null !== iter) {
      do {
        let queue = iter.queue;
        if (null !== queue) {
          queue.pending = null;
        }
        iter = iter.next;
      } while (null !== iter);
    }
    closure_121 = false;
  }
  let closure_117 = 0;
  let closure_118 = null;
  let closure_119 = null;
  let closure_120 = null;
  let closure_122 = false;
  let closure_124 = 0;
  let closure_125 = null;
}
function mountWorkInProgressHook() {
  const obj = { -771368826: 1, -814001609: "100%", -1919198945: "absolute", -1202995316: 0, -243338906: 0 };
  if (null === closure_120) {
    closure_120 = obj;
    closure_118.memoizedState = obj;
  } else {
    closure_120.next = obj;
    closure_120 = obj;
  }
  return closure_120;
}
function updateWorkInProgressHook() {
  if (null === _null3) {
    const alternate = _null2.alternate;
    let memoizedState = null;
    if (null !== alternate) {
      memoizedState = alternate.memoizedState;
    }
    let next = memoizedState;
  } else {
    next = _null3.next;
  }
  if (null === _null4) {
    let next2 = _null2.memoizedState;
  } else {
    next2 = _null4.next;
  }
  if (null !== next2) {
    let _null4 = next2;
    let _null3 = next;
  } else if (null === next) {
    if (null === _null2.alternate) {
      const _Error2 = Error;
      throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");
    } else {
      const _Error = Error;
      throw Error("Rendered more hooks than during the previous render.");
    }
  } else {
    const obj = {};
    _null3 = next;
    obj.memoizedState = next.memoizedState;
    obj.baseState = _null3.baseState;
    obj.baseQueue = _null3.baseQueue;
    obj.queue = _null3.queue;
    obj.next = null;
    if (null === _null4) {
      _null4 = obj;
      _null2.memoizedState = obj;
    } else {
      _null4.next = obj;
      _null4 = obj;
    }
  }
  return _null4;
}
function useThenable(arg0) {
  closure_124 = closure_124 + 1;
  if (null === closure_125) {
    closure_125 = [];
  }
  if (null === _null4) {
    let next = tmp3.memoizedState;
  } else {
    next = _null4.next;
  }
  if (null !== next) {
    return tmp2;
  } else {
    const alternate = tmp3.alternate;
    if (null !== alternate) {
      if (null !== alternate.memoizedState) {
        let tmp6 = closure_129;
      }
      tmp5.H = tmp6;
    }
    tmp6 = closure_128;
  }
}
function use($$typeof) {
  if (null !== $$typeof) {
    if ("object" === typeof $$typeof) {
      if ("function" === typeof $$typeof.then) {
        return useThenable($$typeof);
      } else if ($$typeof.$$typeof === forResult) {
        return readContext($$typeof);
      }
    }
  }
  throw Error("An unsupported type was passed to use(): " + String($$typeof));
}
function useMemoCache(arg0) {
  let data;
  let index;
  let updateQueue = _null2.updateQueue;
  let memoCache = null;
  if (null !== updateQueue) {
    memoCache = updateQueue.memoCache;
  }
  let tmp2 = memoCache;
  if (null == memoCache) {
    const alternate = _null2.alternate;
    tmp2 = memoCache;
    if (null !== alternate) {
      const updateQueue2 = alternate.updateQueue;
      let tmp4 = memoCache;
      if (null !== updateQueue2) {
        memoCache = updateQueue2.memoCache;
        if (null != memoCache) {
          let obj = {};
          data = memoCache.data;
          obj.data = data.map((arr) => arr.slice());
          obj.index = 0;
          memoCache = obj;
        }
        tmp4 = memoCache;
      }
      tmp2 = tmp4;
    }
  }
  if (null == tmp2) {
    obj = { data: [], index: 0 };
    tmp2 = obj;
  }
  if (null === updateQueue) {
    obj = { "Null": true, "Null": 5, "Null": true, "Null": true };
    _null2.updateQueue = obj;
    updateQueue = obj;
  }
  updateQueue.memoCache = tmp2;
  let tmp6 = tmp2.data[tmp2.index];
  if (undefined === tmp6) {
    const _Array = Array;
    ({ data, index } = tmp2);
    const ArrayResult = Array(arg0);
    data[index] = ArrayResult;
    let num3 = 0;
    tmp6 = ArrayResult;
    if (0 < arg0) {
      do {
        let tmp9 = closure_23;
        ArrayResult[num3] = closure_23;
        num3 = num3 + 1;
        tmp6 = ArrayResult;
      } while (num3 < arg0);
    }
  }
  tmp2.index = tmp2.index + 1;
  return tmp6;
}
function basicStateReducer(arg0, arg1) {
  let tmp = arg1;
  if ("function" === typeof arg1) {
    tmp = arg1(arg0);
  }
  return tmp;
}
function updateReducer(arg0) {
  return updateReducerImpl(updateWorkInProgressHook(), closure_119, arg0);
}
function updateReducerImpl(queue, arg1, lastRenderedReducer) {
  let tmp7;
  queue = queue.queue;
  if (null === queue) {
    const _Error = Error;
    throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
  } else {
    queue.lastRenderedReducer = lastRenderedReducer;
    let iter = iter3;
    if (null !== queue.pending) {
      if (null !== iter3) {
        iter3.next = iter4.next;
        iter4.next = iter3.next;
      }
      arg1.baseQueue = iter4;
      queue.pending = null;
      iter = iter4;
    }
    const baseState = queue.baseState;
    if (null === iter) {
      queue.memoizedState = baseState;
    } else {
      const next = iter.next;
      let tmp3 = baseState;
      let tmp4 = null;
      let tmp5 = null;
      let tmp6 = null;
      let iter2 = next;
      let flag2 = false;
      while (true) {
        tmp7 = -536870913 & iter2.lane;
        if (tmp7 !== iter2.lane) {
          let tmp10 = closure_157;
          let tmp9 = (closure_157 & tmp7) === tmp7;
        } else {
          let tmp8 = closure_117;
          tmp9 = (closure_117 & tmp7) === tmp7;
        }
        if (!tmp9) {
          let obj = { lane: tmp7 };
          ({ revertLane: obj.revertLane, action: obj.action, hasEagerState: obj.hasEagerState, eagerState: obj.eagerState } = iter2);
          obj.next = null;
          let tmp11 = tmp3;
          let tmp12 = obj;
          if (null !== tmp6) {
            tmp6.next = obj;
            tmp11 = tmp4;
            tmp12 = tmp5;
          }
          let tmp13 = _null2;
          _null2.lanes = _null2.lanes | tmp7;
          let tmp14 = closure_165;
          closure_165 = closure_165 | tmp7;
          let tmp15 = tmp3;
          let tmp16 = flag2;
          let next3 = iter2.next;
          let tmp36 = tmp3;
          let tmp37 = tmp11;
          let tmp38 = tmp12;
          let tmp39 = obj;
          let tmp40 = flag2;
        }
        let revertLane = iter2.revertLane;
        if (0 === revertLane) {
          break;
        } else {
          let tmp44 = closure_117;
          if ((closure_117 & revertLane) === revertLane) {
            let next2 = iter2.next;
            let tmp21 = closure_100;
            let tmp22 = tmp3;
            let tmp23 = tmp4;
            let tmp24 = tmp5;
            let tmp25 = tmp6;
            let tmp26 = next2;
            let flag4 = flag2;
            if (revertLane === closure_100) {
              tmp22 = tmp3;
              tmp23 = tmp4;
              tmp24 = tmp5;
              tmp25 = tmp6;
              tmp26 = next2;
              flag4 = true;
            }
            if (null !== tmp26) {
              tmp3 = tmp22;
              tmp4 = tmp23;
              tmp5 = tmp24;
              tmp6 = tmp25;
              flag2 = flag4;
              iter2 = tmp26;
            }
            let tmp41 = tmp22;
            if (null !== tmp25) {
              tmp25.next = tmp24;
              tmp41 = tmp23;
            }
            let tmp42 = is;
            if (!is(tmp22, queue.memoizedState)) {
              let closure_141 = true;
              if (flag4) {
                if (null !== closure_101) {
                  throw closure_101;
                }
              }
            }
            queue.memoizedState = tmp22;
            queue.baseState = tmp41;
            queue.baseQueue = tmp25;
            queue.lastRenderedState = tmp22;
          } else {
            obj = { lane: 0 };
            ({ revertLane: obj2.revertLane, action: obj2.action, hasEagerState: obj2.hasEagerState, eagerState: obj2.eagerState } = iter2);
            obj.next = null;
            let tmp17 = tmp3;
            let tmp18 = obj;
            if (null !== tmp6) {
              tmp6.next = obj;
              tmp17 = tmp4;
              tmp18 = tmp5;
            }
            let tmp19 = _null2;
            _null2.lanes = _null2.lanes | revertLane;
            let tmp20 = closure_165;
            closure_165 = closure_165 | revertLane;
            let flag3 = flag2;
          }
          let action = iter2.action;
          let tmp29 = closure_123;
          if (closure_123) {
            let tmp30 = lastRenderedReducer(tmp3, action);
          }
          let tmp31 = iter2.hasEagerState ? iter2.eagerState : lastRenderedReducer(tmp3, action);
          let tmp32 = tmp17;
          let tmp33 = tmp18;
          let tmp34 = obj;
          let tmp35 = flag3;
        }
      }
      let tmp27 = tmp6;
      if (null !== tmp6) {
        obj = { MARK_CHANNEL_READ: "%FunctionPrototype%", INDEX_SIZE_ERR: "paddingStart" };
        ({ action: obj3.action, hasEagerState: obj3.hasEagerState, eagerState: obj3.eagerState } = iter2);
        obj.next = null;
        tmp6.next = obj;
        tmp27 = obj;
      }
      tmp17 = tmp4;
      tmp18 = tmp5;
      obj = tmp27;
      flag3 = flag2;
      if (tmp7 === closure_100) {
        tmp17 = tmp4;
        tmp18 = tmp5;
        obj = tmp27;
        flag3 = true;
      }
    }
    if (null === iter) {
      queue.lanes = 0;
    }
    const items = [queue.memoizedState, queue.dispatch];
    return items;
  }
}
function rerenderReducer(lastRenderedReducer) {
  let tmp2;
  const tmp = updateWorkInProgressHook();
  const queue = tmp.queue;
  if (null === queue) {
    const _Error = Error;
    throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
  } else {
    queue.lastRenderedReducer = lastRenderedReducer;
    let memoizedState = tmp.memoizedState;
    let tmp4 = memoizedState;
    if (null !== queue.pending) {
      queue.pending = null;
      const next = iter2.next;
      let iter = next;
      do {
        tmp2 = lastRenderedReducer(memoizedState, iter.action);
        iter = iter.next;
        memoizedState = tmp2;
      } while (iter !== next);
      if (!is(tmp2, tmp.memoizedState)) {
        let closure_141 = true;
      }
      tmp.memoizedState = tmp2;
      if (null === tmp.baseQueue) {
        tmp.baseState = tmp2;
      }
      queue.lastRenderedState = tmp2;
      tmp4 = tmp2;
    }
    const items = [tmp4, queue.dispatch];
    return items;
  }
}
function updateSyncExternalStore(bindResult1, bindResult) {
  const tmp2 = updateWorkInProgressHook();
  const tmp3 = bindResult();
  let tmp5 = closure_119;
  if (!closure_119) {
    tmp5 = tmp2;
  }
  const tmp6 = !is(tmp5.memoizedState, tmp3);
  if (tmp6) {
    tmp2.memoizedState = tmp3;
    let closure_141 = true;
  }
  const queue = tmp2.queue;
  const items = [bindResult1];
  updateEffectImpl(2048, 8, subscribeToStore.bind(null, closure_118, queue, bindResult1), items);
  if (queue.getSnapshot === bindResult) {
    return tmp3;
  }
  closure_118.flags = closure_118.flags | 2048;
  pushSimpleEffect(9, createEffectInstance(), updateStoreInstance.bind(null, closure_118, queue, tmp3, bindResult), null);
  if (null === closure_155) {
    const _Error = Error;
    throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
  } else if (!(124 & closure_117)) {
    pushStoreConsistencyCheck(tmp, bindResult, tmp3);
  }
}
function pushStoreConsistencyCheck(flags, getSnapshot, value) {
  flags.flags = flags.flags | 16384;
  let obj = { getSnapshot, value };
  const updateQueue = _null2.updateQueue;
  if (null === updateQueue) {
    obj = { "Null": true, "Null": 5, "Null": true, "Null": true };
    _null2.updateQueue = obj;
    const items = [obj];
    obj.stores = items;
  } else {
    const stores = updateQueue.stores;
    if (null === stores) {
      const items1 = [obj];
      updateQueue.stores = items1;
    } else {
      stores.push(obj);
    }
  }
}
function updateStoreInstance(arg0, arg1, value, getSnapshot) {
  arg1.value = value;
  arg1.getSnapshot = getSnapshot;
  if (checkIfSnapshotChanged(arg1)) {
    forceStoreRerender(arg0);
  }
}
function subscribeToStore(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg1;
  return arg2(() => {
    if (callback(arg1)) {
      callback2(arg0);
    }
  });
}
function checkIfSnapshotChanged(value) {
  return !is(value.value, value.getSnapshot());
}
function forceStoreRerender(arg0) {
  const tmp = enqueueConcurrentRenderForLane(arg0, 2);
  if (null !== tmp) {
    scheduleUpdateOnFiber(tmp, arg0, 2);
  }
}
function mountStateImpl(arg0) {
  const tmp = mountWorkInProgressHook();
  let tmp2 = arg0;
  if ("function" === typeof arg0) {
    const tmp4 = arg0();
    tmp2 = tmp4;
    if (closure_123) {
      setIsStrictModeForDevtools(true);
      arg0();
      setIsStrictModeForDevtools(false);
      tmp2 = tmp4;
    }
  }
  tmp.baseState = tmp2;
  tmp.memoizedState = tmp2;
  const obj = { 9223372036854775807: 22817347, 0: 18467840, 0: 21634048, lastRenderedReducer: basicStateReducer, lastRenderedState: tmp2 };
  tmp.queue = obj;
  return tmp;
}
function updateOptimisticImpl(arg0, arg1, baseState) {
  let tmp = arg3;
  arg0.baseState = baseState;
  if ("function" !== typeof arg3) {
    tmp = basicStateReducer;
  }
  return updateReducerImpl(arg0, closure_119, tmp);
}
function dispatchActionState(arg0, action, arg2, arg3, payload) {
  if (isRenderPhaseUpdate(arg0)) {
    const _Error = Error;
    throw Error("Cannot update form state while rendering.");
  } else {
    action = action.action;
    if (null !== action) {
      const obj = {
        payload,
        action,
        listeners: [],
        then(arg0) {
              const listeners = obj.listeners;
              listeners.push(arg0);
            }
      };
      const require = obj;
      if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
        arg2(true);
      } else {
        obj.isTransition = false;
      }
      arg3(obj);
      if (null === action.pending) {
        action.pending = obj;
        obj.next = obj;
        runActionStateAction(action, obj);
      } else {
        obj.next = iter.next;
        iter.next = obj;
        action.pending = obj;
      }
    }
  }
}
function runActionStateAction(state, isTransition) {
  let action;
  let payload;
  ({ action, payload } = isTransition);
  state = state.state;
  if (isTransition.isTransition) {
    const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    const obj = {};
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = obj;
    const actionResult = action(state, payload);
    const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
    if (null !== S) {
      tmp17(tmp13, actionResult);
    }
    handleActionReturnValue(tmp, tmp2, actionResult);
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    while (true) {
      let tmp27 = onActionError;
      let tmp28 = onActionError(tmp29, T, __exception);
      // continue
    }
    const tmp13 = obj;
  } else {
    const actionResult1 = action(state, payload);
    handleActionReturnValue(tmp, tmp2, actionResult1);
  }
}
function handleActionReturnValue(arg0, arg1, promise) {
  const require = arg0;
  const dependencyMap = arg1;
  if (null !== promise) {
    if ("object" === typeof promise) {
      if ("function" === typeof promise.then) {
        promise.then((arg0) => {
          callback(arg0, arg1, arg0);
        }, (arg0) => {
          callback2(arg0, arg1, arg0);
        });
      }
    }
  }
  onActionSuccess(arg0, arg1, promise);
}
function onActionSuccess(pending, arg1, value) {
  arg1.status = "fulfilled";
  arg1.value = value;
  notifyActionListeners(arg1);
  pending.state = value;
  if (null !== pending.pending) {
    if (iter.next === iter) {
      pending.pending = null;
    } else {
      const next = iter2.next;
      iter.next = next;
      runActionStateAction(pending, next);
    }
  }
}
function onActionError(pending, arg1, reason) {
  let iter = arg1;
  pending.pending = null;
  if (null !== pending.pending) {
    do {
      iter.status = "rejected";
      iter.reason = reason;
      let tmp = closure_357;
      let tmp2 = closure_357(iter);
      iter = iter.next;
    } while (iter !== iter2.next);
  }
  pending.action = null;
}
function notifyActionListeners(listeners) {
  let length;
  listeners = listeners.listeners;
  let num = 0;
  if (0 < listeners.length) {
    do {
      let tmp = listeners[num]();
      num = num + 1;
      length = listeners.length;
    } while (num < length);
  }
}
function actionStateReducer(arg0, arg1) {
  return arg1;
}
function mountActionState(action, baseState) {
  const tmp = mountWorkInProgressHook();
  tmp.baseState = baseState;
  tmp.memoizedState = baseState;
  let obj = { 9223372036854775807: 22817347, 0: 18467840, 0: 21634048, lastRenderedReducer: actionStateReducer, lastRenderedState: baseState };
  tmp.queue = obj;
  const bindResult = dispatchSetState.bind(null, closure_118, obj);
  obj.dispatch = bindResult;
  obj = { state: baseState, dispatch: null, action, pending: null };
  const tmp4 = mountWorkInProgressHook();
  tmp4.queue = obj;
  const bindResult2 = dispatchActionState.bind(null, closure_118, obj, dispatchOptimisticSetState.bind(null, closure_118, false, mountStateImpl(false).queue), bindResult);
  obj.dispatch = bindResult2;
  tmp4.memoizedState = action;
  const items = [baseState, bindResult2, false];
  return items;
}
function updateActionState(arg0) {
  return updateActionStateImpl(updateWorkInProgressHook(), closure_119, arg0);
}
function updateActionStateImpl(arg0, arg1, queue) {
  const first = updateReducerImpl(arg0, arg1, actionStateReducer)[0];
  if ("object" === typeof first) {
    if (null !== promise) {
      if ("function" === typeof promise.then) {
        let tmp6 = useThenable(promise);
      }
      const tmp10 = updateWorkInProgressHook();
      queue = tmp10.queue;
      if (queue !== tmp10.memoizedState) {
        _null2.flags = _null2.flags | 2048;
        const tmp15 = createEffectInstance();
        pushSimpleEffect(9, tmp15, actionStateActionEffect.bind(null, queue, queue), null);
      }
      const items = [tmp6, queue.dispatch, tmp2];
      return items;
    }
  }
  tmp6 = first;
}
function actionStateActionEffect(arg0, action) {
  arg0.action = action;
}
function rerenderActionState(memoizedState) {
  const tmp = updateWorkInProgressHook();
  if (null !== closure_119) {
    return updateActionStateImpl(tmp, tmp2, memoizedState);
  } else {
    updateWorkInProgressHook();
    const tmp5 = updateWorkInProgressHook();
    tmp5.memoizedState = memoizedState;
    const items = [tmp.memoizedState, tmp5.queue.dispatch, false];
    return items;
  }
}
function pushSimpleEffect(tag, inst, create, deps) {
  let obj = { tag, create, deps, inst, next: null };
  let updateQueue = _null2.updateQueue;
  if (null === updateQueue) {
    obj = { "Null": true, "Null": 5, "Null": true, "Null": true };
    _null2.updateQueue = obj;
    updateQueue = obj;
  }
  if (null === updateQueue.lastEffect) {
    obj.next = obj;
    updateQueue.lastEffect = obj;
  } else {
    iter.next = obj;
    obj.next = iter.next;
    updateQueue.lastEffect = obj;
  }
  return obj;
}
function createEffectInstance() {
  return { destroy: undefined, resource: undefined };
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(arg0, arg1, arg2, arg3) {
  let tmp2 = null;
  if (undefined !== arg3) {
    tmp2 = arg3;
  }
  _null2.flags = _null2.flags | arg0;
  mountWorkInProgressHook().memoizedState = pushSimpleEffect(1 | arg1, { destroy: undefined, resource: undefined }, arg2, tmp2);
}
function updateEffectImpl(arg0, arg1, arg2, arg3) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== arg3) {
    tmp2 = arg3;
  }
  const inst = tmp.memoizedState.inst;
  if (null !== _null3) {
    if (null !== tmp2) {
      if (areHookInputsEqual(tmp2, _null3.memoizedState.deps)) {
        tmp.memoizedState = pushSimpleEffect(arg1, inst, arg2, tmp2);
      }
    }
  }
  _null2.flags = _null2.flags | arg0;
  tmp.memoizedState = pushSimpleEffect(1 | arg1, inst, arg2, tmp2);
}
function mountEffect(arg0, arg1) {
  mountEffectImpl(8390656, 8, arg0, arg1);
}
function updateEffect(arg0, arg1) {
  updateEffectImpl(2048, 8, arg0, arg1);
}
function updateInsertionEffect(arg0, arg1) {
  updateEffectImpl(4, 2, arg0, arg1);
}
function updateLayoutEffect(arg0, arg1) {
  updateEffectImpl(4, 4, arg0, arg1);
}
function imperativeHandleEffect(arg0, arg1) {
  const require = arg1;
  if ("function" === typeof arg1) {
    let closure_1 = arg1(arg0());
    return () => {
      if ("function" === typeof callback) {
        callback();
      } else {
        arg1(null);
      }
    };
  } else if (null != arg1) {
    arg1.current = arg0();
    return () => {
      arg1.current = null;
    };
  }
}
function updateImperativeHandle(queue, closure_101, arr) {
  let combined = null;
  if (null != arr) {
    const items = [queue];
    combined = arr.concat(items);
  }
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, closure_101, queue), combined);
}
function mountDebugValue() {

}
function updateCallback(arg0, arg1) {
  let first = arg0;
  const tmp2 = updateWorkInProgressHook();
  let tmp3 = null;
  if (undefined !== arg1) {
    tmp3 = arg1;
  }
  const memoizedState = tmp2.memoizedState;
  if (null !== tmp3) {
    if (areHookInputsEqual(tmp3, memoizedState[1])) {
      first = memoizedState[0];
    }
    return first;
  }
  const items = [first, tmp3];
  tmp2.memoizedState = items;
}
function updateMemo(arg0, arg1) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== arg1) {
    tmp2 = arg1;
  }
  const memoizedState = tmp.memoizedState;
  if (null !== tmp2) {
    if (areHookInputsEqual(tmp2, memoizedState[1])) {
      return memoizedState[0];
    }
  }
  const tmp4 = arg0();
  if (closure_123) {
    setIsStrictModeForDevtools(true);
    arg0();
    setIsStrictModeForDevtools(false);
  }
  const items = [tmp4, tmp2];
  tmp.memoizedState = items;
  return tmp4;
}
function mountDeferredValueImpl(arg0, memoizedState) {
  let tmp = arg2;
  if (undefined !== arg2) {
    if (!(1073741824 & closure_117)) {
      arg0.memoizedState = tmp;
      const tmp4 = requestDeferredLane();
      _null2.lanes = _null2.lanes | tmp4;
      closure_165 = closure_165 | tmp4;
    }
    return tmp;
  }
  arg0.memoizedState = memoizedState;
  tmp = memoizedState;
}
function updateDeferredValueImpl(arg0, arg1, memoizedState) {
  if (is(memoizedState, arg1)) {
    return memoizedState;
  } else if (null !== ref6.current) {
    const tmp11 = mountDeferredValueImpl(arg0, memoizedState, arg3);
    let tmp4 = tmp11;
    if (!is(tmp11, arg1)) {
      let closure_141 = true;
      tmp4 = tmp11;
    }
  } else if (42 & closure_117) {
    const tmp6 = requestDeferredLane();
    _null2.lanes = _null2.lanes | tmp6;
    closure_165 = closure_165 | tmp6;
    tmp4 = arg1;
  } else {
    closure_141 = true;
    arg0.memoizedState = memoizedState;
    tmp4 = memoizedState;
  }
}
function startTransition(arg0, arg1, arg2, arg3, arg4) {
  let num = 8;
  if (0 !== closure_70) {
    num = 8;
    if (8 > tmp2) {
      num = tmp;
    }
  }
  closure_70 = num;
  const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
  const obj = {};
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = obj;
  dispatchOptimisticSetState(arg0, false, arg1, arg2);
  const promise = arg4();
  const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
  if (null !== S) {
    tmp5(obj, promise);
  }
  if (null !== promise) {
    if ("object" === typeof promise) {
      if ("function" === typeof promise.then) {
        dispatchSetStateInternal(arg0, arg1, function chainThenableValue(promise, arg1) {
          let closure_1 = [];
          const obj = {
            then(arg0) {

            }
          };
          promise.then(() => {
            let length;
            obj.status = "fulfilled";
            obj.value = arg1;
            let num = 0;
            if (0 < arr.length) {
              do {
                let tmp = closure_1;
                let tmp2 = closure_0;
                let tmp3 = closure_1[num](closure_0);
                num = num + 1;
                length = closure_1.length;
              } while (num < length);
            }
          }, (reason) => {
            let length;
            obj.status = "rejected";
            obj.reason = reason;
            let num = 0;
            if (0 < arr.length) {
              do {
                let tmp = closure_1;
                let tmp2 = closure_1[num](undefined);
                num = num + 1;
                length = closure_1.length;
              } while (num < length);
            }
          });
          return obj;
        }(promise, arg3), requestUpdateLane(arg0));
        const tmp18 = function chainThenableValue(promise, arg1) {
          let closure_1 = [];
          const obj = {
            then(arg0) {

            }
          };
          promise.then(() => {
            let length;
            obj.status = "fulfilled";
            obj.value = arg1;
            let num = 0;
            if (0 < arr.length) {
              do {
                let tmp = closure_1;
                let tmp2 = closure_0;
                let tmp3 = closure_1[num](closure_0);
                num = num + 1;
                length = closure_1.length;
              } while (num < length);
            }
          }, (reason) => {
            let length;
            obj.status = "rejected";
            obj.reason = reason;
            let num = 0;
            if (0 < arr.length) {
              do {
                let tmp = closure_1;
                let tmp2 = closure_1[num](undefined);
                num = num + 1;
                length = closure_1.length;
              } while (num < length);
            }
          });
          return obj;
        }(promise, arg3);
      }
      closure_70 = tmp2;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    }
  }
  dispatchSetStateInternal(arg0, arg1, arg3, requestUpdateLane(arg0));
}
function useHostTransitionStatus() {
  return readContext(obj11);
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(arg0) {
  let _return = arg0.return;
  if (null !== _return) {
    const tag = _return.tag;
    while (24 !== tag) {
      if (3 === tag) {
        break;
      } else {
        _return = _return.return;
      }
    }
    const tmp3 = requestUpdateLane(_return);
    const tmp6 = createUpdate(tmp3);
    const tmp7 = enqueueUpdate(_return, tmp6, tmp3);
    if (null !== tmp7) {
      scheduleUpdateOnFiber(tmp7, _return, tmp3);
      entangleTransitions(tmp7, _return, tmp3);
    }
    const obj = { cache: createCache() };
    tmp6.payload = obj;
  }
}
function dispatchReducerAction(_reactInternals, arg1, action) {
  const tmp = requestUpdateLane(_reactInternals);
  const obj = { "Null": 22817347, "Null": 18467840, "Null": 21634048, "Null": 1098866944, "Bool(true)": 115359, "Bool(true)": 18280545, lane: tmp, action };
  if (isRenderPhaseUpdate(_reactInternals)) {
    enqueueRenderPhaseUpdate(arg1, obj);
  } else {
    const tmp7 = enqueueConcurrentHookUpdate(_reactInternals, arg1, obj, tmp);
    if (null !== tmp7) {
      scheduleUpdateOnFiber(tmp7, _reactInternals, tmp);
      entangleTransitionUpdate(tmp7, arg1, tmp);
    }
  }
  markStateUpdateScheduled(_reactInternals, tmp);
}
function dispatchSetState(_reactInternals) {
  const tmp = requestUpdateLane(_reactInternals);
  dispatchSetStateInternal(_reactInternals, arg1, arg2, tmp);
  markStateUpdateScheduled(_reactInternals, tmp);
}
function dispatchSetStateInternal(arg0, lastRenderedReducer, action, lane) {
  const obj = { "Null": 22817347, "Null": 18467840, "Null": 21634048, "Null": 1098866944, "Bool(true)": 115359, "Bool(true)": 18280545, lane, action };
  if (isRenderPhaseUpdate(arg0)) {
    enqueueRenderPhaseUpdate(lastRenderedReducer, obj);
  } else {
    const alternate = tmp.alternate;
    if (0 === tmp.lanes) {
      if (null === alternate) {
        lastRenderedReducer = lastRenderedReducer.lastRenderedReducer;
        if (null !== lastRenderedReducer) {
          const lastRenderedState = lastRenderedReducer.lastRenderedState;
          const tmp7Result = tmp7(lastRenderedState, action);
          tmp3.hasEagerState = true;
          tmp3.eagerState = tmp7Result;
          if (is(tmp7Result, lastRenderedState)) {
            enqueueUpdate$1(tmp, lastRenderedReducer, tmp3, 0);
            if (null === closure_155) {
              finishQueueingConcurrentUpdates();
            }
            return false;
          }
        }
      }
    }
    while (true) {
      let tmp22 = enqueueConcurrentHookUpdate;
      let tmp23 = arg0;
      let tmp24 = lastRenderedReducer;
      let tmp25 = obj;
      let tmp26 = lane;
      let tmp27 = enqueueConcurrentHookUpdate(tmp, lastRenderedReducer, tmp3, lane);
      let tmp28 = tmp27;
      if (null === tmp27) {
        break;
      } else {
        let tmp29 = scheduleUpdateOnFiber;
        let tmp30 = scheduleUpdateOnFiber(tmp27, arg0, lane);
        let tmp31 = entangleTransitionUpdate;
        let tmp32 = lastRenderedReducer;
        let tmp33 = entangleTransitionUpdate(tmp27, lastRenderedReducer, lane);
        let flag2 = true;
        return true;
      }
    }
  }
  return false;
}
function dispatchOptimisticSetState(_reactInternals, arg1, arg2, action) {
  const obj = { "Null": true, "Null": true, "Null": true, "Null": true, "Bool(true)": true, "Bool(true)": true, revertLane: requestTransitionLane(), action };
  if (isRenderPhaseUpdate(_reactInternals)) {
    if (arg1) {
      const _Error = Error;
      throw Error("Cannot update optimistic state while rendering.");
    }
  } else {
    const tmp5 = enqueueConcurrentHookUpdate(_reactInternals, arg2, obj, 2);
    if (null !== tmp5) {
      scheduleUpdateOnFiber(tmp5, _reactInternals, 2);
    }
  }
  markStateUpdateScheduled(_reactInternals, 2);
}
function isRenderPhaseUpdate(alternate) {
  alternate = alternate.alternate;
  let tmp = alternate === closure_118;
  if (!tmp) {
    let tmp3 = null !== alternate;
    if (tmp3) {
      tmp3 = alternate === closure_118;
    }
    tmp = tmp3;
  }
  return tmp;
}
function enqueueRenderPhaseUpdate(pending, next) {
  let closure_121 = true;
  let closure_122 = true;
  if (null === pending.pending) {
    next.next = next;
  } else {
    next.next = iter.next;
    iter.next = next;
  }
  pending.pending = next;
}
function entangleTransitionUpdate(pendingLanes, lanes) {
  if (4194048 & arg2) {
    lanes.lanes = arg2 | lanes.lanes & pendingLanes.pendingLanes;
    markRootEntangled(pendingLanes, arg2 | lanes.lanes & pendingLanes.pendingLanes);
  }
}
function unwrapThenable(arg0) {
  closure_132 = closure_132 + 1;
  if (null === closure_131) {
    closure_131 = [];
  }
  return trackUsedThenable(closure_131, arg0, closure_132);
}
function coerceRef(arg0, props) {
  let tmp = null;
  if (undefined !== props.props.ref) {
    tmp = ref;
  }
  arg0.ref = tmp;
}
function throwOnInvalidObjectType(arg0, $$typeof) {
  if ($$typeof.$$typeof === closure_8) {
    const _Error = Error;
    throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
  } else {
    const _Object2 = Object;
    let callResult = toString.call($$typeof);
    if ("[object Object]" === callResult) {
      const _Object = Object;
      const keys = Object.keys($$typeof);
      callResult = `${"object with keys {" + obj.join(", ")}}`;
    }
    throw Error("Objects are not valid as a React child (found: " + callResult + "). If you meant to render a collection of children, use an array instead.");
  }
}
function resolveLazy(_init) {
  return _init._init(_init._payload);
}
function createChildReconciler(arg0) {
  const require = arg0;
  function deleteChild(deletions) {
    if (deletions) {
      deletions = deletions.deletions;
      if (null === deletions) {
        const items = [arg1];
        deletions.deletions = items;
        deletions.flags = deletions.flags | 16;
      } else {
        deletions.push(arg1);
      }
    }
  }
  function deleteRemainingChildren(arg0, arg1) {
    let sibling = arg1;
    if (arg0) {
      if (null !== sibling) {
        do {
          let tmp = closure_1;
          let tmp2 = closure_1(arg0, sibling);
          sibling = sibling.sibling;
        } while (null !== sibling);
      }
      return null;
    } else {
      return null;
    }
  }
  function mapRemainingChildren(arg0) {
    let sibling = arg0;
    const map = new Map();
    if (null !== arg0) {
      do {
        if (null !== sibling.key) {
          let result = map.set(sibling.key, sibling);
        } else {
          let result1 = map.set(sibling.index, sibling);
        }
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
    return map;
  }
  function useFiber(arg0, arg1) {
    const tmp = callback7(arg0, arg1);
    tmp.index = 0;
    tmp.sibling = null;
    return tmp;
  }
  function placeChild(alternate, arg1, index) {
    alternate.index = index;
    if (alternate) {
      index = alternate.alternate;
      if (null !== index) {
        index = index.index;
        if (index < arg1) {
          alternate.flags = alternate.flags | 67108866;
          index = arg1;
        }
        let tmp3 = index;
      } else {
        alternate.flags = alternate.flags | 67108866;
        tmp3 = arg1;
      }
    } else {
      alternate.flags = alternate.flags | 1048576;
      return arg1;
    }
  }
  function placeSingleChild(alternate) {
    let tmp = alternate;
    if (alternate) {
      tmp = null === alternate.alternate;
    }
    if (tmp) {
      alternate.flags = alternate.flags | 67108866;
    }
    return alternate;
  }
  function updateTextNode(arg0, tag) {
    if (null !== tag) {
      if (6 === tag.tag) {
        let tmp2 = useFiber(tag, arg2);
        tmp2.return = arg0;
      }
      return tmp2;
    }
    const tmp3 = callback10(arg2, arg0.mode, arg3);
    tmp3.return = arg0;
    tmp2 = tmp3;
  }
  function updateElement(mode, elementType, type) {
    type = type.type;
    if (type === createChild) {
      let tmp6 = updateFragment(mode, elementType, type.props.children, arg3, type.key);
    } else if (null === elementType) {
      tmp6 = callback8(type.type, type.key, type.props, undefined, mode.mode, arg3);
      callback4(tmp6, type);
      tmp6.return = mode;
    } else if (elementType.elementType === type) {
      const tmp10 = useFiber(elementType, type.props);
      callback4(tmp10, type);
      tmp10.return = mode;
      tmp6 = tmp10;
    }
    return tmp6;
  }
  function updatePortal(arg0, tag, containerInfo) {
    if (null !== tag) {
      if (4 === tag.tag) {
        if (tag.stateNode.containerInfo === containerInfo.containerInfo) {
          if (tag.stateNode.implementation === containerInfo.implementation) {
            let children = containerInfo.children;
            if (!children) {
              children = [];
            }
            let tmpResult = useFiber(tag, children);
            tmpResult.return = arg0;
            const tmp = useFiber;
          }
          return tmpResult;
        }
      }
    }
    const tmp3 = callback11(containerInfo, arg0.mode, arg3);
    tmp3.return = arg0;
    tmpResult = tmp3;
  }
  function updateFragment(arg0, tag) {
    if (null !== tag) {
      if (7 === tag.tag) {
        let tmp2 = useFiber(tag, arg2);
        tmp2.return = arg0;
      }
      return tmp2;
    }
    const tmp3 = callback9(arg2, arg0.mode, arg3, arg4);
    tmp3.return = arg0;
    tmp2 = tmp3;
  }
  function createChild(mode, $$typeof) {
    if ("string" !== typeof $$typeof) {
      if ("number" !== tmp) {
        if ("bigint" !== tmp) {
          if ("object" === tmp) {
            if (null !== $$typeof) {
              $$typeof = $$typeof.$$typeof;
              if (updatePortal === $$typeof) {
                const tmp24 = callback8($$typeof.type, $$typeof.key, $$typeof.props, undefined, mode.mode, arg2);
                callback4(tmp24, $$typeof);
                tmp24.return = mode;
                return tmp24;
              } else if (updateFragment === $$typeof) {
                const tmp20 = callback11($$typeof, mode.mode, arg2);
                tmp20.return = mode;
                return tmp20;
              } else if (closure_21 === $$typeof) {
                return createChild(mode, $$typeof._init($$typeof._payload), arg2);
              } else {
                if (!useFiber($$typeof)) {
                  if (!callback($$typeof)) {
                    if ("function" === typeof $$typeof.then) {
                      return createChild(mode, callback3($$typeof), arg2);
                    } else if ($$typeof.$$typeof === closure_16) {
                      return createChild(mode, callback2(mode, $$typeof), arg2);
                    } else {
                      callback5(undefined, $$typeof);
                    }
                  }
                }
                const tmp17 = callback9($$typeof, mode.mode, arg2, null);
                tmp17.return = mode;
                return tmp17;
              }
            }
          }
          return null;
        }
      }
    }
    const tmp26 = callback10("" + $$typeof, mode.mode, arg2);
    tmp26.return = mode;
    return tmp26;
  }
  function updateSlot(arg0, key, $$typeof) {
    key = null;
    if (null !== key) {
      key = key.key;
    }
    if ("string" !== typeof $$typeof) {
      if ("number" !== tmp2) {
        if ("bigint" !== tmp2) {
          if ("object" === tmp2) {
            if (null !== $$typeof) {
              $$typeof = $$typeof.$$typeof;
              if (updatePortal === $$typeof) {
                let tmp35 = null;
                if ($$typeof.key === key) {
                  tmp35 = updateElement(arg0, key, $$typeof, arg3);
                }
                return tmp35;
              } else if (updateFragment === $$typeof) {
                let tmp29 = null;
                if ($$typeof.key === key) {
                  tmp29 = updatePortal(arg0, key, $$typeof, arg3);
                }
                return tmp29;
              } else if (closure_21 === $$typeof) {
                return updateSlot(arg0, key, $$typeof._init($$typeof._payload), arg3);
              } else {
                if (!useFiber($$typeof)) {
                  if (!callback($$typeof)) {
                    if ("function" === typeof $$typeof.then) {
                      return updateSlot(arg0, key, callback3($$typeof), arg3);
                    } else if ($$typeof.$$typeof === closure_16) {
                      return updateSlot(arg0, key, callback2(arg0, $$typeof), arg3);
                    } else {
                      callback5(undefined, $$typeof);
                    }
                  }
                }
                let tmp18 = null;
                if (null === key) {
                  tmp18 = updateFragment(arg0, key, $$typeof, arg3, null);
                }
                return tmp18;
              }
            }
          }
          return null;
        }
      }
    }
    let tmp41 = null;
    if (null === key) {
      tmp41 = updateTextNode(arg0, key, "" + $$typeof, arg3);
    }
    return tmp41;
  }
  function updateFromMap(get, arg1, arg2, $$typeof) {
    if ("string" !== typeof $$typeof) {
      if ("number" !== tmp) {
        if ("bigint" !== tmp) {
          if ("object" === tmp) {
            if (null !== $$typeof) {
              $$typeof = $$typeof.$$typeof;
              if (updatePortal === $$typeof) {
                let key2 = arg2;
                if (null !== $$typeof.key) {
                  key2 = $$typeof.key;
                }
                const tmp40 = get.get(key2) || null;
                return updateElement(arg1, tmp40, $$typeof, arg4);
              } else if (updateFragment === $$typeof) {
                let key = arg2;
                if (null !== $$typeof.key) {
                  key = $$typeof.key;
                }
                const tmp34 = get.get(key) || null;
                return updatePortal(arg1, tmp34, $$typeof, arg4);
              } else if (closure_21 === $$typeof) {
                return updateFromMap(get, arg1, arg2, $$typeof._init($$typeof._payload), arg4);
              } else {
                if (!useFiber($$typeof)) {
                  if (!callback($$typeof)) {
                    if ("function" === typeof $$typeof.then) {
                      return updateFromMap(get, arg1, arg2, callback3($$typeof), arg4);
                    } else if ($$typeof.$$typeof === closure_16) {
                      return updateFromMap(get, arg1, arg2, callback2(arg1, $$typeof), arg4);
                    } else {
                      callback5(undefined, $$typeof);
                    }
                  }
                }
                const tmp22 = get.get(arg2) || null;
                return updateFragment(arg1, tmp22, $$typeof, arg4, null);
              }
            }
          }
          return null;
        }
      }
    }
    return updateTextNode(arg1, get.get(arg2) || null, "" + $$typeof, arg4);
  }
  function reconcileChildFibersImpl(arg0, tag, type) {
    let tmp = "object" === typeof type;
    if (tmp) {
      tmp = null !== type;
    }
    if (tmp) {
      tmp = type.type === createChild;
    }
    if (tmp) {
      tmp = null === type.key;
    }
    let children = type;
    if (tmp) {
      children = type.props.children;
    }
    if ("object" === typeof children) {
      if (null !== children) {
        const $$typeof = children.$$typeof;
        if (updatePortal === $$typeof) {
          let sibling2 = tag;
          if (null !== tag) {
            while (sibling2.key !== tmp57) {
              let tmp59 = deleteChild;
              let tmp60 = deleteChild(arg0, sibling2);
              sibling2 = sibling2.sibling;
            }
            type = children.type;
            if (type === createChild) {
              if (7 === sibling2.tag) {
                deleteRemainingChildren(arg0, sibling2.sibling);
                const tmp84 = useFiber(sibling2, children.props.children);
                tmp84.return = arg0;
                let tmp68 = tmp84;
              } else {
                deleteRemainingChildren(arg0, sibling2);
              }
            } else if (sibling2.elementType === type) {
              deleteRemainingChildren(arg0, sibling2.sibling);
              tmp68 = useFiber(sibling2, children.props);
              callback4(tmp68, children);
              tmp68.return = arg0;
            }
            placeSingleChild(tmp68);
            return tmp68;
          }
          if (children.type === createChild) {
            const tmp80 = callback9(children.props.children, arg0.mode, arg3, children.key);
            tmp80.return = arg0;
            tmp68 = tmp80;
          } else {
            const tmp76 = callback8(children.type, children.key, children.props, undefined, arg0.mode, arg3);
            callback4(tmp76, children);
            tmp76.return = arg0;
            tmp68 = tmp76;
          }
        } else if (updateFragment === $$typeof) {
          let sibling = tag;
          if (null !== tag) {
            while (sibling.key !== tmp43) {
              let tmp45 = deleteChild;
              let tmp46 = deleteChild(arg0, sibling);
              sibling = sibling.sibling;
            }
            if (4 === sibling.tag) {
              if (sibling.stateNode.containerInfo === children.containerInfo) {
                if (sibling.stateNode.implementation === children.implementation) {
                  deleteRemainingChildren(arg0, sibling.sibling);
                  let children1 = children.children;
                  if (!children1) {
                    children1 = [];
                  }
                  const tmp53Result = useFiber(sibling, children1);
                  tmp53Result.return = arg0;
                  let tmp50 = tmp53Result;
                  const tmp53 = useFiber;
                }
                placeSingleChild(tmp50);
                return tmp50;
              }
            }
            deleteRemainingChildren(arg0, sibling);
          }
          tmp50 = callback11(children, arg0.mode, arg3);
          tmp50.return = arg0;
        } else if (closure_21 === $$typeof) {
          return reconcileChildFibersImpl(arg0, tag, children._init(children._payload), arg3);
        } else if (useFiber(children)) {
          return function reconcileChildrenArray(arg0, tag, children, arg3) {
            let sibling;
            let tmp8;
            let num = 0;
            let tmp = null;
            let tmp2 = null;
            let tmp3 = tag;
            let num2 = 0;
            if (null !== tag) {
              let num3 = 0;
              let tmp21 = null;
              let tmp22 = null;
              let tmp23 = tag;
              let num4 = 0;
              num = 0;
              tmp = null;
              tmp2 = null;
              tmp3 = tag;
              num2 = 0;
              if (0 < children.length) {
                while (true) {
                  let tmp4 = num3;
                  let tmp5 = tmp21;
                  let tmp6 = tmp22;
                  let tmp7 = num4;
                  tmp8 = null;
                  sibling = tmp23;
                  if (tmp23.index <= num4) {
                    sibling = tmp23.sibling;
                    tmp8 = tmp23;
                  }
                  let tmp9 = callback5;
                  let tmp10 = arg0;
                  let tmp11 = tmp8;
                  let tmp12 = arg3;
                  let tmp13 = callback5(arg0, tmp8, children[num4], arg3);
                  if (null === tmp13) {
                    break;
                  } else {
                    let tmp14 = arg0;
                    if (arg0) {
                      tmp14 = tmp8;
                    }
                    if (tmp14) {
                      tmp14 = null === tmp13.alternate;
                    }
                    if (tmp14) {
                      let tmp15 = callback;
                      let tmp16 = callback(arg0, tmp8);
                    }
                    let tmp17 = callback4;
                    let tmp18 = callback4(tmp13, num3, num4);
                    let tmp19 = tmp13;
                    if (null !== tmp22) {
                      tmp22.sibling = tmp13;
                      tmp19 = tmp21;
                    }
                    let sum = num4 + 1;
                    num = tmp18;
                    tmp = tmp19;
                    tmp2 = tmp13;
                    tmp3 = sibling;
                    num2 = sum;
                    if (null !== sibling) {
                      num3 = tmp18;
                      tmp21 = tmp19;
                      tmp22 = tmp13;
                      tmp23 = sibling;
                      num4 = sum;
                      num = tmp18;
                      tmp = tmp19;
                      tmp2 = tmp13;
                      tmp3 = sibling;
                      num2 = sum;
                    }
                  }
                }
                num = num3;
                tmp = tmp21;
                tmp2 = tmp22;
                num2 = num4;
                tmp3 = tmp8;
                if (null === tmp8) {
                  num = num3;
                  tmp = tmp21;
                  tmp2 = tmp22;
                  tmp3 = sibling;
                  num2 = num4;
                }
              }
            }
            if (num2 === children.length) {
              callback2(arg0, tmp3);
              return tmp;
            } else if (null === tmp3) {
              let tmp46 = tmp;
              let tmp47 = tmp;
              if (num2 < children.length) {
                do {
                  let tmp48 = closure_11;
                  let tmp49 = closure_11(arg0, children[num2], arg3);
                  let tmp50 = num;
                  let tmp51 = tmp46;
                  let tmp52 = tmp2;
                  if (null !== tmp49) {
                    let tmp53 = closure_5;
                    let tmp55 = tmp49;
                    let tmp54 = closure_5(tmp49, num, num2);
                    if (null !== tmp2) {
                      tmp2.sibling = tmp49;
                      tmp55 = tmp46;
                    }
                    tmp51 = tmp55;
                    tmp50 = tmp54;
                    tmp52 = tmp49;
                  }
                  num2 = num2 + 1;
                  num = tmp50;
                  tmp46 = tmp51;
                  tmp2 = tmp52;
                  tmp47 = tmp51;
                } while (num2 < children.length);
              }
              return tmp47;
            } else {
              const arr = callback3(tmp3);
              let tmp40 = num;
              let tmp41 = tmp;
              let tmp42 = tmp2;
              let sum1 = num2;
              let tmp43 = tmp;
              if (num2 < children.length) {
                do {
                  let tmp24 = closure_13;
                  let tmp25 = arr;
                  let tmp26 = arg0;
                  let tmp27 = sum1;
                  let tmp28 = arg3;
                  let tmp29 = closure_13(arr, arg0, sum1, children[sum1], arg3);
                  let tmp30 = sum1;
                  let tmp31 = tmp40;
                  let tmp32 = tmp41;
                  let tmp33 = tmp42;
                  if (null !== tmp29) {
                    let tmp34 = closure_0;
                    if (closure_0) {
                      tmp34 = null !== tmp29.alternate;
                    }
                    if (tmp34) {
                      let key = sum1;
                      if (null !== tmp29.key) {
                        key = tmp29.key;
                      }
                      let deleteResult = arr.delete(key);
                    }
                    let tmp36 = closure_5;
                    let tmp38 = tmp29;
                    let tmp37 = closure_5(tmp29, tmp40, sum1);
                    if (null !== tmp42) {
                      tmp42.sibling = tmp29;
                      tmp38 = tmp41;
                    }
                    tmp32 = tmp38;
                    tmp31 = tmp37;
                    tmp33 = tmp29;
                  }
                  sum1 = sum1 + 1;
                  tmp40 = tmp31;
                  tmp41 = tmp32;
                  tmp42 = tmp33;
                  tmp43 = tmp32;
                } while (sum1 < children.length);
              }
              if (arg0) {
                const item = arr.forEach((arg0) => {
                  callback(arg0, arg0);
                });
              }
              return tmp43;
            }
          }(arg0, tag, children, arg3);
        } else if (callback(children)) {
          const obj = callback(children);
          if ("function" !== typeof obj) {
            const _Error = Error;
            throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
          } else {
            return function reconcileChildrenIterator(arg0, tag, next, arg3) {
              let iter4;
              let iter6;
              let sibling;
              let tmp6;
              if (null == next) {
                const _Error = Error;
                throw Error("An iterable object provided no iterator.");
              } else {
                const iter7 = next.next();
                let num = 0;
                let tmp19 = null;
                let tmp20 = null;
                let tmp21 = tag;
                let num2 = 0;
                let iter2 = iter7;
                if (null !== tag) {
                  let num3 = 0;
                  let tmp22 = null;
                  let tmp23 = null;
                  let tmp24 = tag;
                  let num4 = 0;
                  let iter3 = iter7;
                  num = 0;
                  tmp19 = null;
                  tmp20 = null;
                  tmp21 = tag;
                  num2 = 0;
                  iter2 = iter7;
                  if (!iter7.done) {
                    while (true) {
                      let tmp = num3;
                      let tmp2 = tmp22;
                      let tmp3 = tmp23;
                      let tmp4 = num4;
                      let tmp5 = iter3;
                      tmp6 = null;
                      sibling = tmp24;
                      if (tmp24.index <= num4) {
                        sibling = tmp24.sibling;
                        tmp6 = tmp24;
                      }
                      let tmp7 = callback5;
                      let tmp8 = arg0;
                      let tmp9 = tmp6;
                      let tmp10 = arg3;
                      let tmp11 = callback5(arg0, tmp6, iter3.value, arg3);
                      if (null === tmp11) {
                        break;
                      } else {
                        let tmp12 = arg0;
                        if (arg0) {
                          tmp12 = tmp6;
                        }
                        if (tmp12) {
                          tmp12 = null === tmp11.alternate;
                        }
                        if (tmp12) {
                          let tmp13 = callback;
                          let tmp14 = callback(arg0, tmp6);
                        }
                        let tmp15 = callback4;
                        let tmp16 = callback4(tmp11, num3, num4);
                        let tmp17 = tmp11;
                        if (null !== tmp23) {
                          tmp23.sibling = tmp11;
                          tmp17 = tmp22;
                        }
                        let sum = num4 + 1;
                        let iter = next.next();
                        num = tmp16;
                        tmp19 = tmp17;
                        tmp20 = tmp11;
                        tmp21 = sibling;
                        num2 = sum;
                        iter2 = iter;
                        if (null !== sibling) {
                          num3 = tmp16;
                          tmp22 = tmp17;
                          tmp23 = tmp11;
                          tmp24 = sibling;
                          num4 = sum;
                          iter3 = iter;
                          num = tmp16;
                          tmp19 = tmp17;
                          tmp20 = tmp11;
                          tmp21 = sibling;
                          num2 = sum;
                          iter2 = iter;
                        }
                      }
                    }
                    num = num3;
                    tmp19 = tmp22;
                    tmp20 = tmp23;
                    num2 = num4;
                    iter2 = iter3;
                    tmp21 = tmp6;
                    if (null === tmp6) {
                      num = num3;
                      tmp19 = tmp22;
                      tmp20 = tmp23;
                      tmp21 = sibling;
                      num2 = num4;
                      iter2 = iter3;
                    }
                  }
                }
                if (iter2.done) {
                  callback2(arg0, tmp21);
                  return tmp19;
                } else if (null === tmp21) {
                  let tmp47 = tmp19;
                  let tmp48 = tmp19;
                  if (!iter2.done) {
                    do {
                      let tmp49 = closure_11;
                      let tmp50 = closure_11(arg0, iter2.value, arg3);
                      let tmp51 = num;
                      let tmp52 = tmp47;
                      let tmp53 = tmp20;
                      if (null !== tmp50) {
                        let tmp54 = closure_5;
                        let tmp56 = tmp50;
                        let tmp55 = closure_5(tmp50, num, num2);
                        if (null !== tmp20) {
                          tmp20.sibling = tmp50;
                          tmp56 = tmp47;
                        }
                        tmp52 = tmp56;
                        tmp51 = tmp55;
                        tmp53 = tmp50;
                      }
                      num2 = num2 + 1;
                      iter6 = next.next();
                      num = tmp51;
                      tmp47 = tmp52;
                      tmp20 = tmp53;
                      iter2 = iter6;
                      tmp48 = tmp52;
                    } while (!iter6.done);
                  }
                  return tmp48;
                } else {
                  const arr = callback3(tmp21);
                  let tmp41 = num;
                  let tmp42 = tmp19;
                  let tmp43 = tmp20;
                  let sum1 = num2;
                  let iter5 = iter2;
                  let tmp44 = tmp19;
                  if (!iter2.done) {
                    do {
                      let tmp25 = closure_13;
                      let tmp26 = arr;
                      let tmp27 = arg0;
                      let tmp28 = sum1;
                      let tmp29 = arg3;
                      let tmp30 = closure_13(arr, arg0, sum1, iter5.value, arg3);
                      let tmp31 = sum1;
                      let tmp32 = tmp41;
                      let tmp33 = tmp42;
                      let tmp34 = tmp43;
                      if (null !== tmp30) {
                        let tmp35 = closure_0;
                        if (closure_0) {
                          tmp35 = null !== tmp30.alternate;
                        }
                        if (tmp35) {
                          let key = sum1;
                          if (null !== tmp30.key) {
                            key = tmp30.key;
                          }
                          let deleteResult = arr.delete(key);
                        }
                        let tmp37 = closure_5;
                        let tmp39 = tmp30;
                        let tmp38 = closure_5(tmp30, tmp41, sum1);
                        if (null !== tmp43) {
                          tmp43.sibling = tmp30;
                          tmp39 = tmp42;
                        }
                        tmp33 = tmp39;
                        tmp32 = tmp38;
                        tmp34 = tmp30;
                      }
                      sum1 = sum1 + 1;
                      iter4 = next.next();
                      tmp41 = tmp32;
                      tmp42 = tmp33;
                      tmp43 = tmp34;
                      iter5 = iter4;
                      tmp44 = tmp33;
                    } while (!iter4.done);
                  }
                  if (arg0) {
                    const item = arr.forEach((arg0) => {
                      callback(arg0, arg0);
                    });
                  }
                  return tmp44;
                }
              }
            }(arg0, tag, obj.call(children), arg3);
          }
        } else if ("function" === typeof children.then) {
          return reconcileChildFibersImpl(arg0, tag, callback3(children), arg3);
        } else if (children.$$typeof === closure_16) {
          return reconcileChildFibersImpl(arg0, tag, callback2(arg0, children), arg3);
        } else {
          callback5(undefined, children);
        }
      }
    }
    if ("string" !== typeof children) {
      if ("number" !== tmp5) {
        if ("bigint" !== tmp5) {
          deleteRemainingChildren(arg0, tag);
          return null;
        }
      }
    }
    const text = `${promise}`;
    if (null === tag) {
      deleteRemainingChildren(arg0, tag);
      let tmp14 = callback10(`${promise}`, arg0.mode, arg3);
      tmp14.return = arg0;
      placeSingleChild(tmp14);
    }
    deleteRemainingChildren(arg0, tag.sibling);
    const tmp16 = useFiber(tag, text);
    tmp16.return = arg0;
    tmp14 = tmp16;
  }
  return (arg0, arg1, arg2, arg3) => {
    let closure_132 = 0;
    let closure_131 = null;
    return reconcileChildFibersImpl(arg0, arg1, arg2, arg3);
  };
}
function pushPrimaryTreeSuspenseHandler(alternate) {
  alternate = alternate.alternate;
  push(closure_137, 1 & closure_137.current);
  push(closure_135, alternate);
  let tmp3 = null === closure_136;
  if (tmp3) {
    let tmp4 = null === alternate;
    if (!tmp4) {
      tmp4 = null !== ref6.current;
    }
    if (!tmp4) {
      tmp4 = null !== alternate.memoizedState;
    }
    tmp3 = tmp4;
  }
  if (tmp3) {
    closure_136 = alternate;
  }
}
function pushOffscreenSuspenseHandler(tag) {
  if (22 === tag.tag) {
    push(closure_137, closure_137.current);
    push(closure_135, tag);
    if (null === closure_136) {
      const alternate = tag.alternate;
      if (tmp10) {
        closure_136 = tag;
      }
      const tmp10 = null !== alternate && null !== alternate.memoizedState;
    }
  } else {
    reuseSuspenseHandlerOnStack();
  }
}
function reuseSuspenseHandlerOnStack() {
  push(closure_137, closure_137.current);
  push(closure_135, closure_135.current);
}
function popSuspenseHandler(arg0) {
  pop(closure_135);
  if (closure_136 === arg0) {
    closure_136 = null;
  }
  pop(closure_137);
}
function findFirstSuspended(arg0) {
  let sibling;
  sibling = arg0;
  if (null !== arg0) {
    while (true) {
      let tmp2 = sibling;
      if (13 === sibling.tag) {
        let memoizedState = sibling.memoizedState;
        let tmp3 = memoizedState;
        if (null !== memoizedState) {
          if (null === memoizedState.dehydrated) {
            return sibling;
          } else {
            let tmp7 = shim$1;
            let tmp8 = shim$1();
            let tmp9 = shim$1();
            tmp3 = memoizedState;
          }
        }
      } else {
        if (19 === sibling.tag) {
          if (undefined !== sibling.memoizedProps.revealOrder) {
            tmp3 = tmp;
            if (128 & sibling.flags) {
              break;
            }
          }
        }
        tmp3 = tmp;
        if (null !== sibling.child) {
          sibling.child.return = sibling;
          sibling = sibling.child;
          let tmp4 = tmp;
        }
        let tmp = tmp4;
      }
      if (sibling !== arg0) {
        let tmp5 = sibling;
        let tmp6 = sibling;
        if (null === sibling.sibling) {
          while (null !== tmp5.return) {
            if (tmp5.return === arg0) {
              break;
            } else {
              let _return = tmp5.return;
              tmp5 = _return;
              tmp6 = _return;
              continue;
            }
          }
          return null;
        }
        ({ return: tmp6.sibling.return, sibling } = tmp6);
        tmp4 = tmp3;
      }
    }
    return sibling;
  }
  return null;
}
function applyDerivedStateFromProps(memoizedState) {
  memoizedState = memoizedState.memoizedState;
  const tmp = arg2(arg3, memoizedState);
  let tmp2 = memoizedState;
  if (null != tmp) {
    tmp2 = assign({}, memoizedState, tmp);
  }
  memoizedState.memoizedState = tmp2;
  if (0 === memoizedState.lanes) {
    memoizedState.updateQueue.baseState = tmp2;
  }
}
function checkShouldComponentUpdate(stateNode) {
  stateNode = stateNode.stateNode;
  if ("function" === typeof stateNode.shouldComponentUpdate) {
    let result = stateNode.shouldComponentUpdate(arg3, arg5, arg6);
  } else {
    result = !arg1.prototype || !arg1.prototype.isPureReactComponent;
    if (!result) {
      const tmp4 = shallowEqual(arg2, arg3);
      let tmp5 = !tmp4;
      if (tmp4) {
        tmp5 = !shallowEqual(arg4, arg5);
      }
      result = tmp5;
    }
  }
  return result;
}
function constructClassInstance(_reactInternals, contextType) {
  let tmp = closure_74;
  contextType = contextType.contextType;
  let tmp2 = "object" === typeof contextType;
  if (tmp2) {
    tmp2 = null !== contextType;
  }
  if (tmp2) {
    tmp = readContext(contextType);
  }
  const tmp5 = new contextType(arg2, tmp);
  let state = null;
  if (null !== tmp5.state) {
    state = null;
    if (undefined !== tmp5.state) {
      state = tmp5.state;
    }
  }
  _reactInternals.memoizedState = state;
  tmp5.updater = closure_138;
  _reactInternals.stateNode = tmp5;
  tmp5._reactInternals = _reactInternals;
  return tmp5;
}
function callComponentWillReceiveProps(arg0, componentWillReceiveProps) {
  if ("function" === typeof componentWillReceiveProps.componentWillReceiveProps) {
    const result = componentWillReceiveProps.componentWillReceiveProps(arg2, arg3);
  }
  if ("function" === typeof componentWillReceiveProps.UNSAFE_componentWillReceiveProps) {
    const result1 = componentWillReceiveProps.UNSAFE_componentWillReceiveProps(arg2, arg3);
  }
  if (componentWillReceiveProps.state !== componentWillReceiveProps.state) {
    closure_138.enqueueReplaceState(componentWillReceiveProps, componentWillReceiveProps.state, null);
  }
}
function mountClassInstance(stateNode, contextType, props) {
  stateNode = stateNode.stateNode;
  stateNode.props = props;
  stateNode.state = stateNode.memoizedState;
  stateNode.refs = {};
  initializeUpdateQueue(stateNode);
  contextType = contextType.contextType;
  if ("object" === typeof contextType) {
    if (null !== contextType) {
      let tmp3 = readContext(contextType);
    }
    stateNode.context = tmp3;
    stateNode.state = stateNode.memoizedState;
    const getDerivedStateFromProps = contextType.getDerivedStateFromProps;
    if ("function" === typeof getDerivedStateFromProps) {
      applyDerivedStateFromProps(stateNode, undefined, getDerivedStateFromProps, props);
      stateNode.state = stateNode.memoizedState;
    }
    let tmp10 = "function" === typeof contextType.getDerivedStateFromProps || "function" === typeof stateNode.getSnapshotBeforeUpdate;
    if (!tmp10) {
      tmp10 = "function" !== typeof stateNode.UNSAFE_componentWillMount && "function" !== typeof stateNode.componentWillMount;
      const tmp11 = "function" !== typeof stateNode.UNSAFE_componentWillMount && "function" !== typeof stateNode.componentWillMount;
    }
    if (!tmp10) {
      if ("function" === typeof stateNode.componentWillMount) {
        stateNode.componentWillMount();
      }
      if ("function" === typeof stateNode.UNSAFE_componentWillMount) {
        const result = stateNode.UNSAFE_componentWillMount();
      }
      if (stateNode.state !== stateNode.state) {
        closure_138.enqueueReplaceState(stateNode, stateNode.state, null);
      }
      processUpdateQueue(stateNode, props, stateNode, arg3);
      suspendIfUpdateReadFromEntangledAsyncAction();
      stateNode.state = stateNode.memoizedState;
    }
    if ("function" === typeof stateNode.componentDidMount) {
      stateNode.flags = stateNode.flags | 4194308;
    }
  }
  tmp3 = closure_74;
}
function resolveClassComponentProps(defaultProps) {
  let tmp2 = arg1;
  if ("ref" in arg1) {
    const obj = {};
    tmp2 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = obj;
      while (keys[tmp] !== undefined) {
        let tmp12 = tmp5;
        if ("ref" === tmp5) {
          continue;
        } else {
          obj[tmp5] = arg1[tmp5];
          // continue
        }
        continue;
      }
    }
  }
  defaultProps = defaultProps.defaultProps;
  let tmp6 = tmp2;
  if (defaultProps) {
    let tmp7 = tmp2;
    if (tmp2 === arg1) {
      tmp7 = assign({}, tmp2);
    }
    tmp6 = tmp7;
    const keys1 = Object.keys();
    if (keys1 !== undefined) {
      tmp6 = tmp7;
      while (keys1[arg1] !== undefined) {
        let tmp13 = tmp11;
        if (undefined !== tmp7[tmp11]) {
          continue;
        } else {
          tmp7[tmp11] = defaultProps[tmp11];
          // continue
        }
        continue;
      }
    }
  }
  return tmp6;
}
function defaultOnRecoverableError(arg0) {
  callback4(arg0);
}
function logUncaughtError(onUncaughtError, componentStack) {
  onUncaughtError.onUncaughtError(componentStack.value, { componentStack: componentStack.stack });
}
function logCaughtError(onCaughtError, tag, componentStack) {
  const obj = { componentStack: componentStack.stack };
  let stateNode = null;
  if (1 === tag.tag) {
    stateNode = tag.stateNode;
  }
  obj.errorBoundary = stateNode;
  onCaughtError.onCaughtError(componentStack.value, obj);
}
function createRootErrorUpdate(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg1;
  const tmp = createUpdate(arg2);
  tmp.tag = 3;
  tmp.payload = { element: null };
  tmp.callback = () => {
    callback(arg0, arg1);
  };
  return tmp;
}
function createClassErrorUpdate(arg0) {
  const tmp = createUpdate(arg0);
  tmp.tag = 3;
  return tmp;
}
function initializeClassErrorUpdate(arg0, arg1, type, value) {
  const require = arg1;
  const dependencyMap = type;
  const getDerivedStateFromError = type.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    const isArray = value.value;
    arg0.payload = () => getDerivedStateFromError(value);
    arg0.callback = () => {
      callback(arg1, arg2, arg3);
    };
  }
  const stateNode = type.stateNode;
  if (tmp) {
    arg0.callback = function(arg0, arg1, arg2, self) {
      self = this;
      callback(arg1, arg2, self);
      if ("function" !== typeof getDerivedStateFromError) {
        if (null === set) {
          const _Set = Set;
          const items = [self];
          const set = new Set(items);
        } else {
          set.add(self);
        }
      }
      const stack = self.stack;
      const obj = {};
      let str = "";
      if (null !== stack) {
        str = stack;
      }
      obj.componentStack = str;
      self.componentDidCatch(self.value, obj);
    };
  }
}
function reconcileChildren(child) {
  if (null === child) {
    let tmp5 = callback3(arg1, null, arg2, arg3);
  } else {
    tmp5 = callback2(arg1, child.child, arg2, arg3);
  }
  arg1.child = tmp5;
}
function updateForwardRef(arg0, ref, render) {
  let tmp2 = arg3;
  if ("ref" in arg3) {
    const obj = {};
    tmp2 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp2 = obj;
      while (keys[tmp] !== undefined) {
        let tmp15 = tmp5;
        if ("ref" === tmp5) {
          continue;
        } else {
          obj[tmp5] = arg3[tmp5];
          // continue
        }
        continue;
      }
    }
  }
  prepareToReadContext(ref);
  markComponentRenderStarted(ref);
  markComponentRenderStopped();
  if (null !== arg0) {
    if (!closure_141) {
      bailoutHooks(arg0, ref, arg4);
      let child = bailoutOnAlreadyFinishedWork(arg0, ref, arg4);
    }
    return child;
  }
  ref.flags = ref.flags | 1;
  reconcileChildren(arg0, ref, renderWithHooks(arg0, ref, render.render, tmp2, ref.ref, arg4), arg4);
  child = ref.child;
}
function updateMemoComponent(child, mode, type) {
  if (null === child) {
    type = type.type;
    if ("function" === typeof type) {
      if (!shouldConstruct(type)) {
        if (undefined === type.defaultProps) {
          if (null === type.compare) {
            mode.tag = 15;
            mode.type = type;
            let tmp11 = updateSimpleMemoComponent(child, mode, type, arg3, arg4);
          }
          return tmp11;
        }
      }
    }
    const tmp16 = createFiberFromTypeAndProps(type.type, null, arg3, undefined, mode.mode, arg4);
    tmp16.ref = mode.ref;
    tmp16.return = mode;
    mode.child = tmp16;
    tmp11 = tmp16;
  } else {
    child = child.child;
    if (!checkScheduledUpdateOrContext(child, arg4)) {
      let compare = type.compare;
      if (null === compare) {
        compare = shallowEqual;
      }
      if (compare(child.memoizedProps, arg3)) {
        if (child.ref === mode.ref) {
          return bailoutOnAlreadyFinishedWork(child, mode, arg4);
        }
      }
    }
    mode.flags = mode.flags | 1;
    const tmp3 = createWorkInProgress(child, arg3);
    tmp3.ref = mode.ref;
    tmp3.return = mode;
    mode.child = tmp3;
    return tmp3;
  }
}
function updateSimpleMemoComponent(memoizedProps, ref) {
  let tmp = arg3;
  if (null !== memoizedProps) {
    memoizedProps = memoizedProps.memoizedProps;
    tmp = arg3;
    if (shallowEqual(memoizedProps, arg3)) {
      tmp = arg3;
      if (memoizedProps.ref === ref.ref) {
        let closure_141 = false;
        ref.pendingProps = memoizedProps;
        if (checkScheduledUpdateOrContext(memoizedProps, arg4)) {
          tmp = memoizedProps;
          if (131072 & memoizedProps.flags) {
            closure_141 = true;
            tmp = memoizedProps;
          }
        } else {
          ref.lanes = memoizedProps.lanes;
          return bailoutOnAlreadyFinishedWork(memoizedProps, ref, arg4);
        }
      }
    }
  }
  return updateFunctionComponent(memoizedProps, ref, arg2, tmp, arg4);
}
function updateOffscreenComponent(memoizedState, pendingProps) {
  pendingProps = pendingProps.pendingProps;
  memoizedState = null;
  if (null !== memoizedState) {
    memoizedState = memoizedState.memoizedState;
  }
  if ("hidden" === pendingProps.mode) {
    if (128 & pendingProps.flags) {
      let tmp38 = arg2;
      if (null !== memoizedState) {
        tmp38 = memoizedState.baseLanes | arg2;
      }
      if (tmp) {
        let sibling = memoizedState.child;
        pendingProps.child = sibling;
        let num5 = 0;
        let num6 = 0;
        if (null !== sibling) {
          do {
            num5 = num5 | sibling.lanes | sibling.childLanes;
            sibling = sibling.sibling;
            num6 = num5;
          } while (null !== sibling);
        }
        pendingProps.childLanes = num6 & ~tmp38;
      } else {
        pendingProps.childLanes = 0;
        pendingProps.child = null;
      }
      deferHiddenOffscreenComponent(memoizedState, pendingProps, tmp38, arg2);
      return null;
    } else if (1 & pendingProps.mode) {
      if (536870912 & arg2) {
        pendingProps.memoizedState = { maxAge: "angle", updateAgeOnGet: 180 };
        if (tmp) {
          let cachePool = null;
          if (null !== memoizedState) {
            cachePool = memoizedState.cachePool;
          }
          pushTransition(undefined, cachePool);
          const tmp28 = pushTransition;
        }
        if (null !== memoizedState) {
          pushHiddenContext(undefined, memoizedState);
        } else {
          reuseHiddenContextOnStack();
        }
        pushOffscreenSuspenseHandler(pendingProps);
      } else {
        pendingProps.childLanes = 536870912;
        pendingProps.lanes = 536870912;
        let tmp22 = arg2;
        if (null !== memoizedState) {
          tmp22 = memoizedState.baseLanes | arg2;
        }
        deferHiddenOffscreenComponent(memoizedState, pendingProps, tmp22, arg2);
        return null;
      }
    } else {
      pendingProps.memoizedState = { maxAge: "angle", updateAgeOnGet: 180 };
      if (tmp) {
        pushTransition(undefined, null);
      }
      reuseHiddenContextOnStack();
      pushOffscreenSuspenseHandler(pendingProps);
    }
  } else if (null !== memoizedState) {
    pushTransition(undefined, memoizedState.cachePool);
    pushHiddenContext(undefined, memoizedState);
    reuseSuspenseHandlerOnStack();
    pendingProps.memoizedState = null;
  } else {
    if (tmp) {
      pushTransition(undefined, null);
    }
    reuseHiddenContextOnStack();
    reuseSuspenseHandlerOnStack();
  }
  reconcileChildren(memoizedState, pendingProps, pendingProps.children, arg2);
  return pendingProps.child;
}
function deferHiddenOffscreenComponent(arg0, arg1, baseLanes) {
  const tmp = peekCacheFromPool();
  let tmp2 = null;
  if (null !== tmp) {
    let obj = { parent: obj12._currentValue, pool: tmp };
    tmp2 = obj;
  }
  obj = { baseLanes, cachePool: tmp2 };
  arg1.memoizedState = obj;
  if (null !== arg0) {
    pushTransition(undefined, null);
  }
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(arg1);
  if (null !== arg0) {
    propagateParentContextChanges(undefined, arg1, arg3, true);
  }
  return null;
}
function markRef(ref, ref2) {
  if (null === ref2.ref) {
    if (tmp4) {
      ref2.flags = ref2.flags | 4194816;
    }
    const tmp4 = null !== ref && null !== ref.ref;
  } else {
    if ("function" !== typeof ref) {
      if ("object" !== tmp) {
        const _Error = Error;
        throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
      }
    }
    if (!tmp2) {
      ref2.flags = ref2.flags | 4194816;
    }
    const tmp2 = null !== ref && ref.ref === ref;
  }
}
function updateFunctionComponent(arg0, flags) {
  prepareToReadContext(flags);
  markComponentRenderStarted(flags);
  markComponentRenderStopped();
  if (null !== arg0) {
    if (!closure_141) {
      bailoutHooks(arg0, flags, arg4);
      let child = bailoutOnAlreadyFinishedWork(arg0, flags, arg4);
    }
    return child;
  }
  flags.flags = flags.flags | 1;
  reconcileChildren(arg0, flags, renderWithHooks(arg0, flags, arg2, arg3, undefined, arg4), arg4);
  child = flags.child;
}
function replayFunctionComponent(arg0, flags) {
  prepareToReadContext(flags);
  markComponentRenderStarted(flags);
  flags.updateQueue = null;
  finishRenderingHooks(arg0);
  markComponentRenderStopped();
  if (null !== arg0) {
    if (!closure_141) {
      bailoutHooks(arg0, flags, arg5);
      let child = bailoutOnAlreadyFinishedWork(arg0, flags, arg5);
    }
    return child;
  }
  flags.flags = flags.flags | 1;
  reconcileChildren(arg0, flags, renderWithHooksAgain(flags, arg3, arg2, arg4), arg5);
  child = flags.child;
}
function updateClassComponent(dependencies, stateNode, contextType, memoizedProps) {
  let tmp = prepareToReadContext(stateNode);
  if (null === stateNode.stateNode) {
    resetSuspendedCurrentOnMountInLegacyMode(dependencies, stateNode);
    constructClassInstance(stateNode, contextType, memoizedProps);
    tmp = memoizedProps;
    tmp = arg4;
    tmp = mountClassInstance(stateNode, contextType, memoizedProps, arg4);
    let flag2 = true;
  } else if (null === dependencies) {
    ({ stateNode, memoizedProps } = stateNode);
    const tmp52 = resolveClassComponentProps(contextType, memoizedProps);
    stateNode.props = tmp52;
    contextType = contextType.contextType;
    let tmp53 = closure_74;
    let tmp54 = "object" === typeof contextType;
    if (tmp54) {
      tmp54 = null !== contextType;
    }
    if (tmp54) {
      tmp53 = readContext(contextType);
    }
    const getDerivedStateFromProps2 = contextType.getDerivedStateFromProps;
    let tmp57 = tmp56;
    if ("function" !== typeof getDerivedStateFromProps2) {
      tmp57 = "function" === typeof stateNode.getSnapshotBeforeUpdate;
    }
    let tmp59 = tmp57;
    if (!tmp57) {
      tmp59 = "function" !== typeof stateNode.UNSAFE_componentWillReceiveProps && "function" !== typeof stateNode.componentWillReceiveProps;
      const tmp60 = "function" !== typeof stateNode.UNSAFE_componentWillReceiveProps && "function" !== typeof stateNode.componentWillReceiveProps;
    }
    if (!tmp59) {
      let tmp61 = tmp58;
      if (!tmp58) {
        tmp61 = stateNode.context !== tmp53;
      }
      if (tmp61) {
        callComponentWillReceiveProps(undefined, stateNode, memoizedProps, tmp53);
      }
    }
    let closure_113 = false;
    const memoizedState3 = stateNode.memoizedState;
    stateNode.state = memoizedState3;
    processUpdateQueue(stateNode, memoizedProps, stateNode, arg4);
    suspendIfUpdateReadFromEntangledAsyncAction();
    let memoizedState4 = stateNode.memoizedState;
    if (stateNode.pendingProps === memoizedProps) {
      if (memoizedState3 === memoizedState4) {
        if (!closure_113) {
          flag2 = false;
          if ("function" === typeof stateNode.componentDidMount) {
            stateNode.flags = stateNode.flags | 4194308;
            flag2 = false;
          }
        }
      }
    }
    if ("function" === typeof getDerivedStateFromProps2) {
      applyDerivedStateFromProps(stateNode, undefined, getDerivedStateFromProps2, memoizedProps);
      memoizedState4 = stateNode.memoizedState;
    }
    let tmp81 = closure_113;
    if (!closure_113) {
      tmp81 = checkShouldComponentUpdate(stateNode, contextType, tmp52, memoizedProps, memoizedState3, memoizedState4, tmp53);
    }
    if (tmp81) {
      if (!tmp57) {
        tmp57 = "function" !== typeof stateNode.UNSAFE_componentWillMount && "function" !== typeof stateNode.componentWillMount;
        const tmp90 = "function" !== typeof stateNode.UNSAFE_componentWillMount && "function" !== typeof stateNode.componentWillMount;
      }
      if (!tmp57) {
        if ("function" === typeof stateNode.componentWillMount) {
          stateNode.componentWillMount();
        }
        if ("function" === typeof stateNode.UNSAFE_componentWillMount) {
          const result = stateNode.UNSAFE_componentWillMount();
        }
      }
      if ("function" === typeof stateNode.componentDidMount) {
        stateNode.flags = stateNode.flags | 4194308;
      }
    } else {
      if ("function" === typeof stateNode.componentDidMount) {
        stateNode.flags = stateNode.flags | 4194308;
      }
      stateNode.memoizedProps = memoizedProps;
      stateNode.memoizedState = memoizedState4;
    }
    stateNode.props = memoizedProps;
    stateNode.state = memoizedState4;
    stateNode.context = tmp53;
    flag2 = tmp81;
  } else {
    const stateNode2 = stateNode.stateNode;
    tmp = cloneUpdateQueue;
    tmp = cloneUpdateQueue(dependencies, stateNode);
    tmp = resolveClassComponentProps;
    const memoizedProps2 = stateNode.memoizedProps;
    tmp = resolveClassComponentProps(contextType, memoizedProps2);
    stateNode2.props = tmp;
    const pendingProps = stateNode.pendingProps;
    const contextType2 = contextType.contextType;
    let tmp4 = closure_74;
    let tmp2 = "object" === typeof contextType2;
    if (tmp2) {
      tmp2 = null !== contextType2;
    }
    if (tmp2) {
      tmp4 = readContext(contextType2);
    }
    const getDerivedStateFromProps = contextType.getDerivedStateFromProps;
    let tmp6 = tmp5;
    if ("function" !== typeof getDerivedStateFromProps) {
      tmp6 = "function" === typeof stateNode2.getSnapshotBeforeUpdate;
    }
    let tmp7 = tmp6;
    if (!tmp6) {
      tmp7 = "function" !== typeof stateNode2.UNSAFE_componentWillReceiveProps && "function" !== typeof stateNode2.componentWillReceiveProps;
      const tmp8 = "function" !== typeof stateNode2.UNSAFE_componentWillReceiveProps && "function" !== typeof stateNode2.componentWillReceiveProps;
    }
    if (!tmp7) {
      if (tmp9) {
        callComponentWillReceiveProps(undefined, stateNode2, memoizedProps, tmp4);
      }
      const tmp9 = memoizedProps2 !== pendingProps || stateNode2.context !== tmp4;
    }
    closure_113 = false;
    const memoizedState = stateNode.memoizedState;
    stateNode2.state = memoizedState;
    processUpdateQueue(stateNode, memoizedProps, stateNode2, arg4);
    suspendIfUpdateReadFromEntangledAsyncAction();
    let memoizedState2 = stateNode.memoizedState;
    if (memoizedProps2 === pendingProps) {
      if (memoizedState === memoizedState2) {
        tmp = closure_113;
        if (!closure_113) {
          let tmp24 = "function" !== typeof stateNode2.componentDidUpdate;
          if (!tmp24) {
            tmp24 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
            const tmp25 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
          }
          if (!tmp24) {
            stateNode.flags = stateNode.flags | 4;
          }
          let tmp26 = "function" !== typeof stateNode2.getSnapshotBeforeUpdate;
          if (!tmp26) {
            tmp26 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
            const tmp27 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
          }
          flag2 = false;
          if (!tmp26) {
            stateNode.flags = stateNode.flags | 1024;
            flag2 = false;
          }
        }
      }
    }
    if ("function" === typeof getDerivedStateFromProps) {
      applyDerivedStateFromProps(stateNode, undefined, getDerivedStateFromProps, memoizedProps);
      memoizedState2 = stateNode.memoizedState;
    }
    let tmp33 = closure_113;
    if (!closure_113) {
      tmp33 = checkShouldComponentUpdate(stateNode, contextType, tmp, memoizedProps, memoizedState, memoizedState2, tmp4);
    }
    if (!tmp33) {
      let tmp42 = null !== dependencies && null !== dependencies.dependencies;
      if (tmp42) {
        tmp42 = checkIfContextChanged(dependencies.dependencies);
      }
      tmp33 = tmp42;
    }
    if (tmp33) {
      if (!tmp6) {
        tmp6 = "function" !== typeof stateNode2.UNSAFE_componentWillUpdate && "function" !== typeof stateNode2.componentWillUpdate;
        const tmp48 = "function" !== typeof stateNode2.UNSAFE_componentWillUpdate && "function" !== typeof stateNode2.componentWillUpdate;
      }
      if (!tmp6) {
        if ("function" === typeof stateNode2.componentWillUpdate) {
          stateNode2.componentWillUpdate(memoizedProps, memoizedState2, tmp4);
        }
        if ("function" === typeof stateNode2.UNSAFE_componentWillUpdate) {
          const result1 = stateNode2.UNSAFE_componentWillUpdate(memoizedProps, memoizedState2, tmp4);
        }
      }
      if ("function" === typeof stateNode2.componentDidUpdate) {
        stateNode.flags = stateNode.flags | 4;
      }
      if ("function" === typeof stateNode2.getSnapshotBeforeUpdate) {
        stateNode.flags = stateNode.flags | 1024;
      }
    } else {
      let tmp44 = "function" !== typeof stateNode2.componentDidUpdate;
      if (!tmp44) {
        tmp44 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
        const tmp45 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
      }
      if (!tmp44) {
        stateNode.flags = stateNode.flags | 4;
      }
      let tmp46 = "function" !== typeof stateNode2.getSnapshotBeforeUpdate;
      if (!tmp46) {
        tmp46 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
        const tmp47 = memoizedProps2 === dependencies.memoizedProps && memoizedState === dependencies.memoizedState;
      }
      if (!tmp46) {
        stateNode.flags = stateNode.flags | 1024;
      }
      stateNode.memoizedProps = memoizedProps;
      stateNode.memoizedState = memoizedState2;
    }
    stateNode2.props = memoizedProps;
    stateNode2.state = memoizedState2;
    stateNode2.context = tmp4;
    flag2 = tmp33;
  }
  return finishClassComponent(dependencies, stateNode, contextType, flag2, undefined, arg4);
}
function finishClassComponent(arg0, flags, getDerivedStateFromError) {
  let tmp = arg0;
  markRef(arg0, flags);
  if (!arg3) {
    if (!tmp3) {
      return bailoutOnAlreadyFinishedWork(tmp, flags, arg5);
    }
  }
  let state = flags.stateNode;
  if (128 & flags.flags) {
    if ("function" !== typeof getDerivedStateFromError.getDerivedStateFromError) {
      let closure_88 = -1;
      let tmp9 = null;
    }
    flags.flags = flags.flags | 1;
    if (null === tmp) {
      reconcileChildren(tmp, flags, tmp9, arg5);
      state = state.state;
      flags.memoizedState = state;
      const child = flags.child;
    }
    tmp = callback2(flags, tmp.child, null, arg5);
    flags.child = tmp;
    flags.child = callback2(flags, null, tmp9, arg5);
  }
  markComponentRenderStarted(flags);
  markComponentRenderStopped();
  tmp9 = state.render();
}
function mountSuspenseOffscreenState(baseLanes) {
  return { baseLanes, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(childLanes) {
  let num = 0;
  if (null !== childLanes) {
    num = childLanes.childLanes & ~arg2;
  }
  let tmp2 = num;
  if (arg1) {
    tmp2 = num | closure_168;
  }
  return tmp2;
}
function updateSuspenseComponent(memoizedState, pendingProps, lanes) {
  let child6;
  let children;
  let fallback2;
  let mode2;
  pendingProps = pendingProps.pendingProps;
  let tmp2 = tmp;
  if (!(128 & pendingProps.flags)) {
    let tmp4 = null === memoizedState || null !== memoizedState.memoizedState;
    if (tmp4) {
      tmp4 = 2 & closure_137.current;
    }
    tmp2 = tmp4;
  }
  let flag = false;
  if (tmp2) {
    pendingProps.flags = pendingProps.flags & -129;
    flag = true;
  }
  pendingProps.flags = pendingProps.flags & -33;
  if (null === memoizedState) {
    ({ children, fallback: fallback2 } = pendingProps);
    if (flag) {
      reuseSuspenseHandlerOnStack();
      ({ mode: mode2, child: child6 } = pendingProps);
      let obj = { mode: "hidden", children };
      if (!(1 & mode2)) {
        if (null !== child6) {
          child6.childLanes = 0;
          child6.pendingProps = obj;
          let tmp72 = child6;
          if (2 & pendingProps.mode) {
            child6.actualDuration = -0;
            child6.actualStartTime = -1.1;
            child6.selfBaseDuration = -0;
            child6.treeBaseDuration = -0;
            tmp72 = child6;
          }
        }
        const tmp79 = createFiberFromFragment(fallback2, mode2, lanes, null);
        tmp72.return = pendingProps;
        tmp79.return = pendingProps;
        tmp72.sibling = tmp79;
        pendingProps.child = tmp72;
        mode2 = pendingProps.child;
        mode2.memoizedState = mountSuspenseOffscreenState(lanes);
        mode2.childLanes = getRemainingWorkInPrimaryTree(memoizedState, tmp6, lanes);
        pendingProps.memoizedState = closure_142;
      }
      tmp72 = mountWorkInProgressOffscreenFiber(obj, mode2);
    } else {
      pushPrimaryTreeSuspenseHandler(pendingProps);
      return mountSuspensePrimaryChildren(pendingProps, children);
    }
  } else {
    const memoizedState2 = memoizedState.memoizedState;
    if (null !== memoizedState2) {
      if (null !== memoizedState2.dehydrated) {
        if (tmp) {
          if (256 & pendingProps.flags) {
            pushPrimaryTreeSuspenseHandler(pendingProps);
            pendingProps.flags = pendingProps.flags & -257;
            let tmp42 = retrySuspenseComponentWithoutHydrating(memoizedState, pendingProps, lanes);
          } else if (null !== pendingProps.memoizedState) {
            reuseSuspenseHandlerOnStack();
            pendingProps.child = memoizedState.child;
            pendingProps.flags = pendingProps.flags | 128;
            tmp42 = null;
          } else {
            reuseSuspenseHandlerOnStack();
            const fallback3 = pendingProps.fallback;
            const mode3 = pendingProps.mode;
            obj = { mode: "visible", children: pendingProps.children };
            const tmp88 = mountWorkInProgressOffscreenFiber(obj, mode3);
            const tmp94 = createFiberFromFragment(fallback3, mode3, lanes, null);
            tmp94.flags = tmp94.flags | 2;
            tmp88.return = pendingProps;
            tmp94.return = pendingProps;
            tmp88.sibling = tmp94;
            pendingProps.child = tmp88;
            if (1 & pendingProps.mode) {
              callback2(pendingProps, memoizedState.child, null, lanes);
            }
            const child5 = pendingProps.child;
            child5.memoizedState = mountSuspenseOffscreenState(lanes);
            child5.childLanes = getRemainingWorkInPrimaryTree(memoizedState, tmp6, lanes);
            pendingProps.memoizedState = closure_142;
            tmp42 = tmp94;
          }
        } else {
          pushPrimaryTreeSuspenseHandler(pendingProps);
          shim$1();
          if (!closure_141) {
            propagateParentContextChanges(undefined, pendingProps, lanes, false);
          }
          if (!closure_141) {
            if (!(lanes & memoizedState.childLanes)) {
              shim$1();
              tmp42 = mountSuspensePrimaryChildren(pendingProps, pendingProps.children);
              tmp42.flags = tmp42.flags | 4096;
            }
          }
          if (null !== closure_155) {
            let num14 = 1;
            if (!(42 & (lanes & -lanes))) {
              num14 = 1;
              if (2 !== tmp84) {
                if (8 === tmp84) {
                  num14 = 4;
                } else if (32 === tmp84) {
                  num14 = 16;
                } else {
                  if (256 !== tmp84) {
                    if (512 !== tmp84) {
                      if (1024 !== tmp84) {
                        if (2048 !== tmp84) {
                          if (4096 !== tmp84) {
                            if (8192 !== tmp84) {
                              if (16384 !== tmp84) {
                                if (32768 !== tmp84) {
                                  if (65536 !== tmp84) {
                                    if (131072 !== tmp84) {
                                      if (262144 !== tmp84) {
                                        if (524288 !== tmp84) {
                                          if (1048576 !== tmp84) {
                                            if (2097152 !== tmp84) {
                                              if (4194304 !== tmp84) {
                                                if (8388608 !== tmp84) {
                                                  if (16777216 !== tmp84) {
                                                    if (33554432 !== tmp84) {
                                                      num14 = 268435456 === tmp84 ? 134217728 : 0;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  num14 = 128;
                }
              }
            }
            let num26 = 0;
            if (!(num14 & (tmp43.suspendedLanes | lanes))) {
              num26 = num14;
            }
            if (0 !== num26) {
              if (num26 !== memoizedState2.retryLane) {
                memoizedState2.retryLane = num26;
                enqueueConcurrentRenderForLane(memoizedState, num26);
                scheduleUpdateOnFiber(tmp43, memoizedState, num26);
                throw closure_140;
              }
            }
          }
          shim$1();
          renderDidSuspendDelayIfPossible();
          tmp42 = retrySuspenseComponentWithoutHydrating(memoizedState, pendingProps, lanes);
        }
        return tmp42;
      }
    }
    if (flag) {
      reuseSuspenseHandlerOnStack();
      const fallback = pendingProps.fallback;
      const mode = pendingProps.mode;
      const child2 = memoizedState.child;
      const sibling2 = child2.sibling;
      const obj1 = { mode: "hidden", children: pendingProps.children };
      if (!(1 & mode)) {
        if (pendingProps.child !== child2) {
          let child3 = pendingProps.child;
          child3.childLanes = 0;
          child3.pendingProps = obj1;
          if (2 & pendingProps.mode) {
            child3.actualDuration = -0;
            child3.actualStartTime = -1.1;
            ({ selfBaseDuration: child3.selfBaseDuration, treeBaseDuration: child3.treeBaseDuration } = child2);
          }
          pendingProps.deletions = null;
        }
        if (null !== sibling2) {
          let tmp21 = createWorkInProgress(sibling2, fallback);
        } else {
          tmp21 = createFiberFromFragment(fallback, mode, lanes, null);
          tmp21.flags = tmp21.flags | 2;
        }
        tmp21.return = pendingProps;
        child3.return = pendingProps;
        child3.sibling = tmp21;
        pendingProps.child = child3;
        const child4 = pendingProps.child;
        memoizedState = memoizedState.child.memoizedState;
        if (null === memoizedState) {
          let obj3 = mountSuspenseOffscreenState(lanes);
        } else {
          let cachePool = memoizedState.cachePool;
          if (null !== cachePool) {
            const _currentValue = obj12._currentValue;
            if (cachePool.parent !== _currentValue) {
              const obj2 = { parent: _currentValue, pool: _currentValue };
              cachePool = obj2;
            }
            let tmp24 = cachePool;
          } else {
            tmp24 = getSuspendedCache();
          }
          obj3 = { baseLanes: memoizedState.baseLanes | lanes, cachePool: tmp24 };
        }
        child4.memoizedState = obj3;
        child4.childLanes = getRemainingWorkInPrimaryTree(memoizedState, tmp6, lanes);
        pendingProps.memoizedState = closure_142;
        return tmp21;
      }
      const tmp15 = createWorkInProgress(child2, obj1);
      tmp15.subtreeFlags = 65011712 & child2.subtreeFlags;
      child3 = tmp15;
    } else {
      pushPrimaryTreeSuspenseHandler(pendingProps);
      const child = memoizedState.child;
      const sibling = child.sibling;
      obj = { mode: "visible", children: pendingProps.children };
      const tmp10 = createWorkInProgress(child, obj);
      if (!(1 & pendingProps.mode)) {
        tmp10.lanes = lanes;
      }
      tmp10.return = pendingProps;
      tmp10.sibling = null;
      if (null !== sibling) {
        const deletions = pendingProps.deletions;
        if (null === deletions) {
          const items = [sibling];
          pendingProps.deletions = items;
          pendingProps.flags = pendingProps.flags | 16;
        } else {
          deletions.push(sibling);
        }
      }
      pendingProps.child = tmp10;
      pendingProps.memoizedState = null;
      return tmp10;
    }
  }
}
function mountSuspensePrimaryChildren(mode, children) {
  const tmp = mountWorkInProgressOffscreenFiber({ mode: "visible", children }, mode.mode);
  tmp.return = mode;
  mode.child = tmp;
  return tmp;
}
function mountWorkInProgressOffscreenFiber(arg0, arg1) {
  const tmp = createFiberImplClass(22, arg0, null, arg1);
  tmp.lanes = 0;
  tmp.stateNode = {};
  return tmp;
}
function retrySuspenseComponentWithoutHydrating(child, pendingProps) {
  callback2(pendingProps, child.child, null, arg2);
  const tmp2 = mountSuspensePrimaryChildren(pendingProps, pendingProps.pendingProps.children);
  tmp2.flags = tmp2.flags | 2;
  pendingProps.memoizedState = null;
  return tmp2;
}
function scheduleSuspenseWorkOnFiber(lanes) {
  lanes.lanes = lanes.lanes | arg1;
  const alternate = lanes.alternate;
  if (null !== alternate) {
    alternate.lanes = alternate.lanes | arg1;
  }
  scheduleContextWorkOnParentPath(lanes.return, arg1, arg2);
}
function initSuspenseListRenderState(memoizedState, isBackwards, tail, last, tailMode) {
  memoizedState = memoizedState.memoizedState;
  if (null === memoizedState) {
    const obj = { isBackwards, last, tail, tailMode };
    memoizedState.memoizedState = obj;
  } else {
    memoizedState.isBackwards = isBackwards;
    memoizedState.rendering = null;
    memoizedState.renderingStartTime = 0;
    memoizedState.last = last;
    memoizedState.tail = tail;
    memoizedState.tailMode = tailMode;
  }
}
function updateSuspenseListComponent(flags, pendingProps) {
  let revealOrder;
  let sibling;
  let tail;
  pendingProps = pendingProps.pendingProps;
  ({ revealOrder, tail } = pendingProps);
  reconcileChildren(flags, pendingProps, pendingProps.children, arg2);
  const current = closure_137.current;
  if (2 & current) {
    let tmp9 = 1 & current | 2;
    pendingProps.flags = pendingProps.flags | 128;
  } else {
    if (null !== flags) {
      if (128 & flags.flags) {
        let child = pendingProps.child;
        if (null !== child) {
          while (true) {
            if (13 === child.tag) {
              if (null !== child.memoizedState) {
                let tmp5 = scheduleSuspenseWorkOnFiber;
                let tmp6 = scheduleSuspenseWorkOnFiber(child, arg2, pendingProps);
              }
            } else if (19 === child.tag) {
              let tmp3 = scheduleSuspenseWorkOnFiber;
              let tmp4 = scheduleSuspenseWorkOnFiber(child, arg2, pendingProps);
            } else {
              if (null !== child.child) {
                child.child.return = child;
                sibling = child.child;
              }
              child = sibling;
              if (null === sibling) {
                break;
              }
            }
            if (child === pendingProps) {
              break;
            } else {
              let tmp7 = child;
              let tmp8 = child;
              if (null !== child.sibling) {
                ({ return: tmp8.sibling.return, sibling } = tmp8);
              } else {
                while (null !== tmp7.return) {
                  if (tmp7.return === pendingProps) {
                    break;
                  } else {
                    let _return = tmp7.return;
                    tmp7 = _return;
                    tmp8 = _return;
                    break;
                  }
                }
              }
              break;
            }
          }
        }
      }
    }
    tmp9 = current & 1;
  }
  push(closure_137, tmp9);
  if (1 & pendingProps.mode) {
    if ("forwards" === revealOrder) {
      let sibling3 = pendingProps.child;
      let tmp31 = null;
      let tmp32 = null;
      if (null !== sibling3) {
        do {
          let alternate2 = sibling3.alternate;
          let tmp33 = null !== alternate2;
          if (tmp33) {
            let tmp34 = closure_386;
            tmp33 = null === closure_386(alternate2);
          }
          if (tmp33) {
            tmp31 = sibling3;
          }
          sibling3 = sibling3.sibling;
          tmp32 = tmp31;
        } while (null !== sibling3);
      }
      if (null === tmp32) {
        let sibling4 = pendingProps.child;
        pendingProps.child = null;
      } else {
        sibling4 = tmp32.sibling;
        tmp32.sibling = null;
      }
      initSuspenseListRenderState(pendingProps, false, sibling4, tmp32, tail);
    } else if ("backwards" === revealOrder) {
      let sibling2 = pendingProps.child;
      pendingProps.child = null;
      let tmp19 = null;
      let tmp20 = null;
      if (null !== sibling2) {
        while (true) {
          let alternate = sibling2.alternate;
          let tmp21 = tmp19;
          let tmp22 = sibling2;
          if (null !== alternate) {
            let tmp23 = findFirstSuspended;
            if (null === findFirstSuspended(alternate)) {
              break;
            }
          }
          sibling2 = sibling2.sibling;
          tmp22.sibling = tmp19;
          tmp19 = tmp22;
          tmp20 = tmp22;
        }
        pendingProps.child = sibling2;
        tmp20 = tmp19;
      }
      initSuspenseListRenderState(pendingProps, true, tmp20, null, tail);
    } else if ("together" === revealOrder) {
      initSuspenseListRenderState(pendingProps, false, null, null, undefined);
    } else {
      pendingProps.memoizedState = null;
    }
  } else {
    pendingProps.memoizedState = null;
  }
  return pendingProps.child;
}
function resetSuspendedCurrentOnMountInLegacyMode(arg0, mode) {
  let tmp2 = !tmp;
  if (!(1 & mode.mode)) {
    tmp2 = null !== arg0;
  }
  if (tmp2) {
    arg0.alternate = null;
    mode.alternate = null;
    mode.flags = mode.flags | 2;
  }
}
function bailoutOnAlreadyFinishedWork(dependencies, lanes) {
  let sibling2;
  if (null !== dependencies) {
    lanes.dependencies = dependencies.dependencies;
  }
  let closure_88 = -1;
  closure_165 = closure_165 | lanes.lanes;
  if (!(arg2 & lanes.childLanes)) {
    if (null === dependencies) {
      return null;
    } else {
      propagateParentContextChanges(undefined, lanes, arg2, false);
      if (!(arg2 & lanes.childLanes)) {
        return null;
      }
    }
  }
  if (null !== dependencies) {
    if (lanes.child !== dependencies.child) {
      const _Error = Error;
      throw Error("Resuming work not yet implemented.");
    }
  }
  if (null !== lanes.child) {
    const child = lanes.child;
    const tmp7 = createWorkInProgress(child, child.pendingProps);
    lanes.child = tmp7;
    tmp7.return = lanes;
    let tmp8 = child;
    let tmp9 = tmp7;
    let tmp10 = tmp7;
    if (null !== child.sibling) {
      do {
        let sibling = tmp8.sibling;
        let tmp11 = closure_507;
        let tmp12 = closure_507(sibling, sibling.pendingProps);
        tmp9.sibling = tmp12;
        tmp12.return = lanes;
        tmp8 = sibling;
        tmp9 = tmp12;
        tmp10 = tmp12;
        sibling2 = sibling.sibling;
      } while (null !== sibling2);
    }
    tmp10.sibling = null;
  }
  return lanes.child;
}
function checkScheduledUpdateOrContext(lanes) {
  let tmp2 = tmp;
  if (!(lanes.lanes & arg1)) {
    const dependencies = lanes.dependencies;
    let tmp4 = null === dependencies;
    if (!tmp4) {
      tmp4 = !checkIfContextChanged(dependencies);
    }
    tmp2 = !tmp4;
  }
  return tmp2;
}
function beginWork(memoizedProps, pendingProps) {
  let memoizedState4;
  let pendingProps3;
  if (null !== memoizedProps) {
    if (memoizedProps.memoizedProps !== pendingProps.pendingProps) {
      let closure_141 = true;
    } else {
      let text = checkScheduledUpdateOrContext;
      if (!checkScheduledUpdateOrContext(memoizedProps, arg2)) {
        if (!(128 & pendingProps.flags)) {
          closure_141 = false;
          switch (pendingProps.tag) {
            case 3:
              closure_269(pendingProps, pendingProps.stateNode.containerInfo);
              closure_274(undefined, closure_86, memoizedProps.memoizedState.cache);
              closure_420(memoizedProps, pendingProps, arg2);
              pendingProps.lanes = 0;
              let tmp5 = closure_403(memoizedProps, pendingProps, arg2);
              return tmp5;
            case 4:
              closure_269(pendingProps, pendingProps.stateNode.containerInfo);
            break;
            case 5:
              closure_271(pendingProps);
            break;
            case 6:
            break;
            case 7:
            break;
            case 8:
            break;
            case 9:
            break;
            case 10:
              closure_274(undefined, pendingProps.type, pendingProps.memoizedProps.value);
            break;
            case 11:
            break;
            case 12:
              if (arg2 & pendingProps.childLanes) {
                pendingProps.flags = pendingProps.flags | 4;
              }
              pendingProps.flags = pendingProps.flags | 2048;
              const stateNode = pendingProps.stateNode;
              stateNode.effectDuration = -0;
              stateNode.passiveEffectDuration = -0;
            break;
            case 13:
              const memoizedState2 = pendingProps.memoizedState;
              if (null !== memoizedState2) {
                if (null !== memoizedState2.dehydrated) {
                  closure_382(pendingProps);
                  pendingProps.flags = pendingProps.flags | 128;
                  let sibling = null;
                } else if (arg2 & pendingProps.child.childLanes) {
                  sibling = closure_412(memoizedProps, pendingProps, arg2);
                } else {
                  closure_382(pendingProps);
                  const tmp22 = closure_420(memoizedProps, pendingProps, arg2);
                  sibling = null;
                  if (null !== tmp22) {
                    sibling = tmp22.sibling;
                  }
                }
                tmp5 = sibling;
              } else {
                closure_382(pendingProps);
              }
            break;
            case 14:
            break;
            case 15:
            break;
            case 16:
            break;
            case 17:
            break;
            case 18:
            break;
            case 19:
              let tmp8 = tmp7;
              if (!(arg2 & pendingProps.childLanes)) {
                closure_278(undefined, pendingProps, arg2, false);
                tmp8 = arg2 & pendingProps.childLanes;
              }
              if (!tmp6) {
                const memoizedState = pendingProps.memoizedState;
                if (null !== memoizedState) {
                  memoizedState.rendering = null;
                  memoizedState.tail = null;
                  memoizedState.lastEffect = null;
                }
                closure_267(closure_137, closure_137.current);
                tmp5 = null;
              } else if (tmp8) {
                tmp5 = closure_418(memoizedProps, pendingProps, arg2);
              } else {
                pendingProps.flags = pendingProps.flags | 128;
              }
              const tmp6 = 128 & memoizedProps.flags;
            break;
            case 20:
            break;
            case 21:
            break;
            case 22:
            break;
            case 23:
            break;
            case 24:
              text = closure_274;
              closure_274(undefined, closure_86, memoizedProps.memoizedState.cache);
            break;
            case 25:
            break;
            case 26:
            break;
            case 27:
              closure_271(pendingProps);
            break;
          }
        }
      }
      closure_141 = 131072 & memoizedProps.flags;
    }
  } else {
    closure_141 = false;
  }
  pendingProps.lanes = 0;
  switch (pendingProps.tag) {
    case 0:
      text = closure_406;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      return closure_406(memoizedProps, pendingProps, pendingProps.type, pendingProps.pendingProps, arg2);
    case 1:
      text = closure_408;
      const type3 = pendingProps.type;
      text = closure_392;
      text = memoizedProps;
      text = pendingProps;
      text = type3;
      text = arg2;
      return closure_408(memoizedProps, pendingProps, type3, closure_392(type3, pendingProps.pendingProps), arg2);
    case 2:
      text = globalThis;
      let _Error3 = Error;
      let tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 3:
      text = closure_269;
      text = closure_269(pendingProps, pendingProps.stateNode.containerInfo);
      if (null === memoizedProps) {
        text = globalThis;
        const _Error = Error;
        throw Error("Should have a current fiber. This is a bug in React.");
      } else {
        ({ pendingProps: pendingProps3, memoizedState: memoizedState4 } = pendingProps);
        text = closure_319;
        text = closure_319(memoizedProps, pendingProps);
        text = closure_325;
        text = pendingProps;
        text = pendingProps3;
        text = null;
        text = arg2;
        text = closure_325(pendingProps, pendingProps3, null, arg2);
        const memoizedState5 = pendingProps.memoizedState;
        const cache2 = memoizedState5.cache;
        text = closure_274;
        text = closure_86;
        text = closure_274(undefined, closure_86, cache2);
        if (cache2 !== memoizedState4.cache) {
          text = closure_277;
          text = closure_86;
          const items = [closure_86];
          text = pendingProps;
          text = items;
          text = arg2;
          text = closure_277(pendingProps, items, arg2, true);
        }
        text = closure_324;
        text = closure_324();
        const element = memoizedState5.element;
        if (element === memoizedState4.element) {
          text = closure_420;
          let child = closure_420(memoizedProps, pendingProps, arg2);
        } else {
          text = closure_399;
          text = memoizedProps;
          text = pendingProps;
          text = element;
          text = arg2;
          text = closure_399(memoizedProps, pendingProps, element, arg2);
          child = pendingProps.child;
        }
        return child;
      }
    break;
    case 4:
      text = closure_269;
      text = closure_269(pendingProps, pendingProps.stateNode.containerInfo);
      pendingProps = pendingProps.pendingProps;
      if (null === memoizedProps) {
        text = closure_133;
        text = pendingProps;
        text = null;
        text = pendingProps;
        text = arg2;
        pendingProps.child = closure_133(pendingProps, null, pendingProps, arg2);
      } else {
        text = closure_399;
        text = memoizedProps;
        text = pendingProps;
        text = pendingProps;
        text = arg2;
        text = closure_399(memoizedProps, pendingProps, pendingProps, arg2);
      }
      return pendingProps.child;
    case 5:
      text = closure_271;
      text = closure_271(pendingProps);
      let children = pendingProps.pendingProps.children;
      if (null !== pendingProps.memoizedState) {
        text = closure_332;
        text = closure_335;
        text = memoizedProps;
        text = pendingProps;
        text = null;
        text = null;
        text = arg2;
        text = closure_332(memoizedProps, pendingProps, closure_335, null, null, arg2);
        text = closure_71;
        closure_71._currentValue = text;
      }
      text = closure_405;
      text = closure_405(memoizedProps, pendingProps);
      text = closure_399;
      text = memoizedProps;
      text = pendingProps;
      text = children;
      text = arg2;
      text = closure_399(memoizedProps, pendingProps, children, arg2);
      return pendingProps.child;
    case 6:
      return null;
    case 7:
      text = closure_399;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      text = closure_399(memoizedProps, pendingProps, pendingProps.pendingProps, arg2);
      return pendingProps.child;
    case 8:
      text = closure_399;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      text = closure_399(memoizedProps, pendingProps, pendingProps.pendingProps.children, arg2);
      return pendingProps.child;
    case 9:
      text = closure_280;
      text = closure_280(pendingProps);
      text = closure_281;
      text = closure_242;
      text = closure_281(pendingProps.type._context);
      text = closure_242(pendingProps);
      text = closure_243;
      text = pendingProps.pendingProps.children(text);
      text = closure_243();
      pendingProps.flags = pendingProps.flags | 1;
      text = closure_399;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      text = closure_399(memoizedProps, pendingProps, text, arg2);
      return pendingProps.child;
    case 10:
      text = closure_274;
      text = closure_274(undefined, pendingProps.type, iter.value);
      text = closure_399;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      text = closure_399(memoizedProps, pendingProps, iter.children, arg2);
      return pendingProps.child;
    case 11:
      text = closure_400;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      return closure_400(memoizedProps, pendingProps, pendingProps.type, pendingProps.pendingProps, arg2);
    case 12:
      pendingProps.flags = pendingProps.flags | 4;
      pendingProps.flags = pendingProps.flags | 2048;
      const stateNode2 = pendingProps.stateNode;
      stateNode2.effectDuration = -0;
      stateNode2.passiveEffectDuration = -0;
      text = closure_399;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      text = closure_399(memoizedProps, pendingProps, pendingProps.pendingProps.children, arg2);
      return pendingProps.child;
    case 13:
      text = closure_412;
      return closure_412(memoizedProps, pendingProps, arg2);
    case 14:
      text = closure_401;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      return closure_401(memoizedProps, pendingProps, pendingProps.type, pendingProps.pendingProps, arg2);
    case 15:
      text = closure_402;
      text = memoizedProps;
      text = pendingProps;
      text = arg2;
      return closure_402(memoizedProps, pendingProps, pendingProps.type, pendingProps.pendingProps, arg2);
    case 16:
      const elementType = pendingProps.elementType;
      text = closure_419;
      text = closure_419(memoizedProps, pendingProps);
      const pendingProps2 = pendingProps.pendingProps;
      text = elementType._init(elementType._payload);
      pendingProps.type = text;
      if ("function" !== typeof text) {
        if (null != text) {
          const $$typeof = text.$$typeof;
          text = closure_17;
          if ($$typeof === closure_17) {
            pendingProps.tag = 11;
            text = closure_400;
            text = null;
            text = pendingProps;
            text = pendingProps2;
            text = arg2;
            text = closure_400(null, pendingProps, text, pendingProps2, arg2);
          } else {
            text = closure_20;
            if ($$typeof === closure_20) {
              pendingProps.tag = 14;
              text = closure_401;
              text = null;
              text = pendingProps;
              text = pendingProps2;
              text = arg2;
              text = closure_401(null, pendingProps, text, pendingProps2, arg2);
            }
          }
        }
        text = closure_192;
        text = closure_192(text);
        text = globalThis;
        const _Error2 = Error;
        throw Error("Element type is invalid. Received a promise that resolves to: " + text + ". Lazy element type must resolve to a class or function.");
      } else {
        text = closure_506;
        if (closure_506(text)) {
          text = closure_392;
          pendingProps.tag = 1;
          text = closure_408;
          text = null;
          text = pendingProps;
          text = arg2;
          text = closure_408(null, pendingProps, text, closure_392(text, pendingProps2), arg2);
        } else {
          pendingProps.tag = 0;
          text = closure_406;
          text = null;
          text = pendingProps;
          text = pendingProps2;
          text = arg2;
          text = closure_406(null, pendingProps, text, pendingProps2, arg2);
        }
      }
      return text;
    case 17:
      const type2 = pendingProps.type;
      const tmp94 = closure_392(type2, pendingProps.pendingProps);
      closure_419(memoizedProps, pendingProps);
      pendingProps.tag = 1;
      closure_280(pendingProps);
      text = closure_389(pendingProps, type2, tmp94);
      text = closure_391;
      text = pendingProps;
      text = type2;
      text = tmp94;
      text = arg2;
      text = closure_391(pendingProps, type2, tmp94, arg2);
      text = closure_409;
      text = null;
      text = pendingProps;
      text = type2;
      text = arg2;
      return closure_409(null, pendingProps, type2, true, undefined, arg2);
    case 18:
      text = globalThis;
      _Error3 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 19:
      return closure_418(memoizedProps, pendingProps, arg2);
    case 20:
      text = globalThis;
      _Error3 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 21:
      text = globalThis;
      _Error3 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 22:
      return closure_403(memoizedProps, pendingProps, arg2);
    case 23:
      text = globalThis;
      _Error3 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 24:
      closure_280(pendingProps);
      const tmp44 = closure_281(closure_86);
      if (null === memoizedProps) {
        let tmp63 = closure_303();
        if (null === tmp63) {
          const tmp64 = closure_155;
          const tmp66 = closure_284();
          closure_155.pooledCache = tmp66;
          tmp66.refCount = tmp66.refCount + 1;
          tmp63 = tmp66;
          if (null !== tmp66) {
            tmp64.pooledCacheLanes = tmp64.pooledCacheLanes | arg2;
            tmp63 = tmp66;
          }
        }
        let obj = { parent: tmp44, cache: tmp63 };
        pendingProps.memoizedState = obj;
        closure_318(pendingProps);
        closure_274(undefined, closure_86, tmp63);
      } else {
        if (memoizedProps.lanes & arg2) {
          closure_319(memoizedProps, pendingProps);
          closure_325(pendingProps, null, null, arg2);
          closure_324();
        }
        const memoizedState3 = memoizedProps.memoizedState;
        if (memoizedState3.parent !== tmp44) {
          obj = { parent: tmp44, cache: tmp44 };
          pendingProps.memoizedState = obj;
          if (0 === pendingProps.lanes) {
            pendingProps.updateQueue.baseState = obj;
            pendingProps.memoizedState = obj;
          }
          closure_274(undefined, closure_86, tmp44);
        } else {
          const cache = tmp55.cache;
          closure_274(undefined, closure_86, cache);
          if (cache !== memoizedState3.cache) {
            text = closure_277;
            text = closure_86;
            const items1 = [closure_86];
            text = pendingProps;
            text = items1;
            text = arg2;
            text = closure_277(pendingProps, items1, arg2, true);
          }
        }
      }
      closure_399(memoizedProps, pendingProps, pendingProps.pendingProps.children, arg2);
      return pendingProps.child;
    case 25:
      text = globalThis;
      _Error3 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 26:
      text = closure_271;
      text = closure_271(pendingProps);
      children = pendingProps.pendingProps.children;
      if (null !== pendingProps.memoizedState) {
        text = closure_332;
        text = closure_335;
        text = memoizedProps;
        text = pendingProps;
        text = null;
        text = null;
        text = arg2;
        text = closure_332(memoizedProps, pendingProps, closure_335, null, null, arg2);
        text = closure_71;
        closure_71._currentValue = text;
      }
      text = closure_405;
      text = closure_405(memoizedProps, pendingProps);
      text = closure_399;
      text = memoizedProps;
      text = pendingProps;
      text = children;
      text = arg2;
      text = closure_399(memoizedProps, pendingProps, children, arg2);
      return pendingProps.child;
    case 27:
      text = closure_271;
      text = closure_271(pendingProps);
      children = pendingProps.pendingProps.children;
      if (null !== pendingProps.memoizedState) {
        text = closure_332;
        text = closure_335;
        text = memoizedProps;
        text = pendingProps;
        text = null;
        text = null;
        text = arg2;
        text = closure_332(memoizedProps, pendingProps, closure_335, null, null, arg2);
        text = closure_71;
        closure_71._currentValue = text;
      }
      text = closure_405;
      text = closure_405(memoizedProps, pendingProps);
      text = closure_399;
      text = memoizedProps;
      text = pendingProps;
      text = children;
      text = arg2;
      text = closure_399(memoizedProps, pendingProps, children, arg2);
      return pendingProps.child;
    case 28:
      const type = pendingProps.type;
      closure_419(memoizedProps, pendingProps);
      pendingProps.tag = 0;
      return closure_406(null, pendingProps, type, closure_392(type, pendingProps.pendingProps), arg2);
    case 29:
      throw pendingProps.pendingProps;
    case 30:
      text = globalThis;
      _Error3 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
    case 31:
      obj = {};
      ({ mode: obj3.mode, children: obj3.children } = pendingProps.pendingProps);
      if (null === memoizedProps) {
        const tmp82 = closure_414(obj, tmp78);
        tmp82.ref = pendingProps.ref;
        pendingProps.child = tmp82;
        tmp82.return = pendingProps;
        let tmp80 = tmp82;
      } else {
        tmp80 = closure_507(memoizedProps.child, obj);
        tmp80.ref = pendingProps.ref;
        pendingProps.child = tmp80;
        tmp80.return = pendingProps;
      }
      return tmp80;
    default:
      text = globalThis;
      _Error3 = Error;
      tag = pendingProps.tag;
      text = `Unknown unit of work tag (${tag}`;
      text = `Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`;
      text = Error(`Unknown unit of work tag (${tag}). This error is likely caused by a bug in React. Please file an issue.`);
      throw text;
  }
}
function scheduleRetryEffect(flags) {
  if (null !== arg1) {
    flags.flags = flags.flags | 4;
  }
  if (16384 & flags.flags) {
    let num2 = 536870912;
    if (22 !== flags.tag) {
      num2 = claimNextRetryLane();
    }
    flags.lanes = flags.lanes | num2;
    closure_169 = closure_169 | num2;
  }
}
function cutOffTailIfNeeded(tailMode) {
  tailMode = tailMode.tailMode;
  if ("hidden" === tailMode) {
    let sibling2 = tailMode.tail;
    let tmp5 = null;
    let tmp6 = null;
    if (null !== sibling2) {
      do {
        if (null !== sibling2.alternate) {
          tmp5 = sibling2;
        }
        sibling2 = sibling2.sibling;
        tmp6 = tmp5;
      } while (null !== sibling2);
    }
    if (null === tmp6) {
      tailMode.tail = null;
    } else {
      tmp6.sibling = null;
    }
  } else if ("collapsed" === tailMode) {
    let sibling = tailMode.tail;
    let tmp = null;
    let tmp2 = null;
    if (null !== sibling) {
      do {
        if (null !== sibling.alternate) {
          tmp = sibling;
        }
        sibling = sibling.sibling;
        tmp2 = tmp;
      } while (null !== sibling);
    }
    if (null === tmp2) {
      if (!arg1) {
        if (null !== tailMode.tail) {
          tailMode.tail.sibling = null;
        }
      }
      tailMode.tail = null;
    } else {
      tmp2.sibling = null;
    }
  }
}
function bubbleProperties(alternate) {
  let actualDuration;
  let child;
  let child2;
  let selfBaseDuration;
  let selfBaseDuration2;
  if (null !== alternate.alternate && alternate.alternate.child === alternate.child) {
    if (tmp2) {
      ({ selfBaseDuration: selfBaseDuration2, child: child2 } = alternate);
      let num12 = 0;
      let num14 = 0;
      let num15 = 0;
      let num16 = 0;
      let tmp5 = selfBaseDuration2;
      if (null !== child2) {
        do {
          num12 = num12 | (child2.lanes | child2.childLanes);
          num14 = num14 | 65011712 & child2.subtreeFlags | 65011712 & child2.flags;
          selfBaseDuration2 = selfBaseDuration2 + child2.treeBaseDuration;
          child2 = child2.sibling;
          num15 = num12;
          num16 = num14;
          tmp5 = selfBaseDuration2;
        } while (null !== child2);
      }
      alternate.treeBaseDuration = tmp5;
      let num3 = num15;
      let num4 = num16;
    } else {
      let sibling2 = alternate.child;
      let num9 = 0;
      let num11 = 0;
      num3 = 0;
      num4 = 0;
      if (null !== sibling2) {
        do {
          num9 = num9 | (sibling2.lanes | sibling2.childLanes);
          num11 = num11 | 65011712 & sibling2.subtreeFlags | 65011712 & sibling2.flags;
          sibling2.return = alternate;
          sibling2 = sibling2.sibling;
          num3 = num9;
          num4 = num11;
        } while (null !== sibling2);
      }
    }
  } else if (tmp2) {
    ({ actualDuration, selfBaseDuration, child } = alternate);
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    let num8 = 0;
    let tmp3 = actualDuration;
    let tmp4 = selfBaseDuration;
    if (null !== child) {
      do {
        num5 = num5 | (child.lanes | child.childLanes);
        num6 = num6 | child.subtreeFlags | child.flags;
        actualDuration = actualDuration + child.actualDuration;
        selfBaseDuration = selfBaseDuration + child.treeBaseDuration;
        child = child.sibling;
        num7 = num5;
        num8 = num6;
        tmp3 = actualDuration;
        tmp4 = selfBaseDuration;
      } while (null !== child);
    }
    alternate.actualDuration = tmp3;
    alternate.treeBaseDuration = tmp4;
    num3 = num7;
    num4 = num8;
  } else {
    let sibling = alternate.child;
    let num = 0;
    let num2 = 0;
    num3 = 0;
    num4 = 0;
    if (null !== sibling) {
      do {
        num = num | (sibling.lanes | sibling.childLanes);
        num2 = num2 | sibling.subtreeFlags | sibling.flags;
        sibling.return = alternate;
        sibling = sibling.sibling;
        num3 = num;
        num4 = num2;
      } while (null !== sibling);
    }
  }
  alternate.subtreeFlags = alternate.subtreeFlags | num4;
  alternate.childLanes = num3;
  return null !== alternate.alternate && alternate.alternate.child === alternate.child;
}
function completeWork(arg0, arg1, arg2) {
  return null;
}
function unwindWork(arg0, arg1) {
  popProvider(obj12);
  return null;
}
function unwindInterruptedWork(arg0, arg1) {
  popProvider(obj12);
}
function shouldProfile(mode) {
  return 2 & mode.mode;
}
function commitHookLayoutEffects(mode) {
  if (shouldProfile(mode)) {
    startEffectTimer();
    commitHookEffectListMount(arg1, mode);
    recordEffectDuration();
  } else {
    commitHookEffectListMount(arg1, mode);
  }
}
function commitHookLayoutUnmountEffects(sibling, arg1, arg2) {
  if (shouldProfile(sibling)) {
    startEffectTimer();
    commitHookEffectListUnmount(arg2, sibling, arg1);
    recordEffectDuration();
  } else {
    commitHookEffectListUnmount(arg2, sibling, arg1);
  }
}
function commitHookEffectListMount(arg0, updateQueue) {
  let next;
  updateQueue = updateQueue.updateQueue;
  let lastEffect = null;
  if (null !== updateQueue) {
    lastEffect = tmp.lastEffect;
  }
  if (null !== lastEffect) {
    const next2 = iter.next;
    let iter2 = next2;
    do {
      let tmp4 = iter2;
      let tmp5 = arg0;
      if ((iter2.tag & arg0) === arg0) {
        let tmp44 = arg0;
        if (8 & arg0) {
          let tmp15 = closure_59;
          let tmp16 = null !== closure_59;
          let tmp17 = tmp16;
          if (tmp16) {
            let tmp18 = closure_59;
            tmp17 = "function" === typeof closure_59.markComponentPassiveEffectMountStarted;
          }
          if (tmp17) {
            let tmp19 = closure_59;
            let tmp20 = updateQueue;
            let result = closure_59.markComponentPassiveEffectMountStarted(updateQueue);
          }
        } else {
          let tmp6 = arg0;
          let tmp7 = 4 & arg0;
          let tmp8 = tmp7;
          if (tmp7) {
            let tmp9 = closure_59;
            tmp8 = null !== closure_59;
          }
          let tmp10 = tmp8;
          if (tmp8) {
            let tmp11 = closure_59;
            tmp10 = "function" === typeof closure_59.markComponentLayoutEffectMountStarted;
          }
          if (tmp10) {
            let tmp12 = closure_59;
            let tmp13 = updateQueue;
            let result1 = closure_59.markComponentLayoutEffectMountStarted(updateQueue);
          }
        }
        let tmp22 = iter2;
        let obj = iter2.create();
        let tmp24 = obj;
        iter2.inst.destroy = obj;
        let tmp25 = arg0;
        if (8 & arg0) {
          let tmp34 = closure_59;
          let tmp35 = null !== closure_59;
          let tmp36 = tmp35;
          if (tmp35) {
            let tmp37 = closure_59;
            tmp36 = "function" === typeof closure_59.markComponentPassiveEffectMountStopped;
          }
          if (tmp36) {
            let tmp38 = closure_59;
            let result2 = closure_59.markComponentPassiveEffectMountStopped();
          }
        } else {
          let tmp26 = arg0;
          let tmp27 = 4 & arg0;
          let tmp28 = tmp27;
          if (tmp27) {
            let tmp29 = closure_59;
            tmp28 = null !== closure_59;
          }
          let tmp30 = tmp28;
          if (tmp28) {
            let tmp31 = closure_59;
            tmp30 = "function" === typeof closure_59.markComponentLayoutEffectMountStopped;
          }
          if (tmp30) {
            let tmp32 = closure_59;
            let result3 = closure_59.markComponentLayoutEffectMountStopped();
          }
        }
      }
      let tmp40 = iter2;
      next = iter2.next;
      iter2 = next;
      let tmp41 = next2;
    } while (next !== tmp43);
  }
}
function commitHookEffectListUnmount(arg0, updateQueue) {
  let next;
  updateQueue = updateQueue.updateQueue;
  let lastEffect = null;
  if (null !== updateQueue) {
    lastEffect = tmp.lastEffect;
  }
  if (null !== lastEffect) {
    const next2 = iter.next;
    let iter2 = next2;
    do {
      let tmp4 = iter2;
      let tmp5 = arg0;
      if ((iter2.tag & arg0) === arg0) {
        let tmp46 = iter2;
        let inst = iter2.inst;
        let destroy = inst.destroy;
        if (undefined !== destroy) {
          let tmp49 = inst;
          tmp47.destroy = undefined;
          let tmp50 = arg0;
          if (8 & arg0) {
            let tmp15 = closure_59;
            let tmp16 = null !== closure_59;
            let tmp17 = tmp16;
            if (tmp16) {
              let tmp18 = closure_59;
              tmp17 = "function" === typeof closure_59.markComponentPassiveEffectUnmountStarted;
            }
            if (tmp17) {
              let tmp19 = closure_59;
              let tmp20 = updateQueue;
              let result = closure_59.markComponentPassiveEffectUnmountStarted(updateQueue);
            }
          } else {
            let tmp6 = arg0;
            let tmp7 = 4 & arg0;
            let tmp8 = tmp7;
            if (tmp7) {
              let tmp9 = closure_59;
              tmp8 = null !== closure_59;
            }
            let tmp10 = tmp8;
            if (tmp8) {
              let tmp11 = closure_59;
              tmp10 = "function" === typeof closure_59.markComponentLayoutEffectUnmountStarted;
            }
            if (tmp10) {
              let tmp12 = closure_59;
              let tmp13 = updateQueue;
              let result1 = closure_59.markComponentLayoutEffectUnmountStarted(updateQueue);
            }
          }
          let tmp22 = updateQueue;
          let tmp23 = arg2;
          let tmp24 = destroy;
          let tmp25 = tmp48;
          let destroyResult = destroy();
          while (true) {
            let tmp27 = arg0;
            if (8 & arg0) {
              let tmp36 = closure_59;
              let tmp37 = null !== closure_59;
              let tmp38 = tmp37;
              if (tmp37) {
                let tmp39 = closure_59;
                tmp38 = "function" === typeof closure_59.markComponentPassiveEffectUnmountStopped;
              }
              if (tmp38) {
                let tmp40 = closure_59;
                let result2 = closure_59.markComponentPassiveEffectUnmountStopped();
              }
            } else {
              let tmp28 = arg0;
              let tmp29 = 4 & arg0;
              let tmp30 = tmp29;
              if (tmp29) {
                let tmp31 = closure_59;
                tmp30 = null !== closure_59;
              }
              let tmp32 = tmp30;
              if (tmp30) {
                let tmp33 = closure_59;
                tmp32 = "function" === typeof closure_59.markComponentLayoutEffectUnmountStopped;
              }
              if (tmp32) {
                let tmp34 = closure_59;
                let result3 = closure_59.markComponentLayoutEffectUnmountStopped();
              }
            }
          }
        }
      }
      let tmp42 = iter2;
      next = iter2.next;
      iter2 = next;
      let tmp43 = next2;
    } while (next !== tmp45);
  }
}
function commitHookPassiveMountEffects(sibling, arg1) {
  if (shouldProfile(sibling)) {
    startEffectTimer();
    commitHookEffectListMount(arg1, sibling);
    recordEffectDuration();
  } else {
    commitHookEffectListMount(arg1, sibling);
  }
}
function commitHookPassiveUnmountEffects(sibling, arg1, arg2) {
  if (shouldProfile(sibling)) {
    startEffectTimer();
    commitHookEffectListUnmount(arg2, sibling, arg1);
    recordEffectDuration();
  } else {
    commitHookEffectListUnmount(arg2, sibling, arg1);
  }
}
function commitClassCallbacks(updateQueue) {
  updateQueue = updateQueue.updateQueue;
  if (null !== updateQueue) {
    commitCallbacks(updateQueue, tmp.stateNode);
  }
}
function safelyCallComponentWillUnmount(type) {
  let tmp = arg1;
  arg2.props = resolveClassComponentProps(type.type, type.memoizedProps);
  arg2.state = type.memoizedState;
  if (shouldProfile(type)) {
    startEffectTimer();
    obj.componentWillUnmount();
    recordEffectDuration();
    while (true) {
      let tmp8 = captureCommitPhaseError;
      tmp = captureCommitPhaseError(type, tmp, __exception);
      // continue
    }
  } else {
    obj.componentWillUnmount();
  }
}
function safelyAttachRef(ref) {
  if (null !== ref.ref) {
    const tag = ref.tag;
    if (26 !== tag) {
      if (27 !== tag) {
        if (5 !== tag) {
          let stateNode = ref.stateNode;
        }
        if ("function" === typeof tmp) {
          if (shouldProfile(ref)) {
            startEffectTimer();
            ref.refCleanup = ref(stateNode);
            recordEffectDuration();
          } else {
            ref.refCleanup = tmp(stateNode);
          }
        } else {
          tmp.current = stateNode;
        }
      }
    }
    stateNode = getPublicInstance(ref.stateNode);
  }
}
function safelyDetachRef(ref) {
  const refCleanup = ref.refCleanup;
  if (null !== ref.ref) {
    if ("function" === typeof refCleanup) {
      if (shouldProfile(tmp)) {
        startEffectTimer();
        refCleanup();
        recordEffectDuration();
      } else {
        refCleanup();
      }
      while (true) {
        let tmp23 = ref;
        tmp.refCleanup = null;
        let alternate = tmp.alternate;
        if (null == alternate) {
          break;
        } else {
          let tmp25 = alternate;
          tmp24.refCleanup = null;
          // break
        }
        break;
      }
    } else if ("function" === typeof tmp2) {
      if (shouldProfile(tmp)) {
        startEffectTimer();
        ref(null);
        recordEffectDuration();
      } else {
        tmp2(null);
      }
    } else {
      tmp2.current = null;
    }
  }
}
function commitProfilerUpdate(memoizedProps) {
  let id;
  let onCommit;
  let onRender;
  ({ id, onCommit, onRender } = memoizedProps.memoizedProps);
  let str = "update";
  if (null === arg1) {
    str = "mount";
  }
  let str2 = str;
  if (closure_90) {
    str2 = "nested-update";
  }
  if ("function" === typeof onRender) {
    onRender(id, str2, memoizedProps.actualDuration, memoizedProps.treeBaseDuration, memoizedProps.actualStartTime, arg2);
  }
  if ("function" === typeof onCommit) {
    onCommit(memoizedProps.memoizedProps.id, str2, arg3, arg2);
  }
}
function isHostParent(tag) {
  let tmp = 5 === tag.tag;
  if (!tmp) {
    tmp = 3 === tag.tag;
  }
  if (!tmp) {
    tmp = 4 === tag.tag;
  }
  return tmp;
}
function getHostSibling(arg0) {
  let sibling;
  let tmp = arg0;
  while (true) {
    let tmp2 = tmp;
    let tmp3 = tmp;
    if (null === tmp.sibling) {
      while (null !== tmp2.return) {
        let tmp6 = isHostParent;
        if (isHostParent(tmp2.return)) {
          break;
        } else {
          let _return = tmp2.return;
          tmp2 = _return;
          tmp3 = _return;
          continue;
        }
      }
      return null;
    }
    ({ return: tmp3.sibling.return, sibling } = tmp3);
    let tmp4 = sibling;
    if (5 !== sibling.tag) {
      tmp4 = sibling;
      if (6 !== sibling.tag) {
        let tmp5 = sibling;
        tmp4 = sibling;
        if (18 !== sibling.tag) {
          tmp = tmp5;
          while (!(2 & tmp5.flags)) {
            tmp = tmp5;
            if (null === tmp5.child) {
              break;
            } else {
              tmp = tmp5;
              if (4 === tmp5.tag) {
                break;
              } else {
                tmp5.child.return = tmp5;
                let child = tmp5.child;
                tmp4 = child;
                if (5 !== child.tag) {
                  tmp4 = child;
                  if (6 !== child.tag) {
                    tmp5 = child;
                    tmp4 = child;
                  }
                  continue;
                }
              }
            }
          }
        }
        continue;
      }
    }
    tmp = tmp4;
    if (2 & tmp4.flags) {
      continue;
    } else {
      return tmp4.stateNode;
    }
  }
}
function insertOrAppendPlacementNodeIntoContainer(tag, arg1, containerTag) {
  tag = tag.tag;
  if (5 !== tag) {
    if (6 !== tag) {
      if (4 !== tag) {
        const child = tag.child;
        if (null !== child) {
          insertOrAppendPlacementNodeIntoContainer(child, arg1, containerTag);
          let sibling = child.sibling;
          if (null !== sibling) {
            do {
              let tmp = closure_443;
              let tmp2 = closure_443(sibling, arg1, containerTag);
              sibling = sibling.sibling;
            } while (null !== sibling);
          }
        }
      }
    }
  }
  const stateNode = tag.stateNode;
  if (arg1) {
    if ("number" === typeof containerTag) {
      const _Error = Error;
      throw Error("Container does not support insertBefore operation");
    }
  } else {
    const UIManager = require(dependencyMap[2]).UIManager;
    let _nativeTag = stateNode;
    if ("number" !== typeof stateNode) {
      _nativeTag = stateNode._nativeTag;
    }
    const items = [_nativeTag];
    UIManager.setChildren(containerTag.containerTag, items);
  }
}
function insertOrAppendPlacementNode(tag, arg1, _children) {
  tag = tag.tag;
  if (5 !== tag) {
    if (6 !== tag) {
      if (4 !== tag) {
        const child = tag.child;
        if (null !== child) {
          insertOrAppendPlacementNode(child, arg1, _children);
          let sibling = child.sibling;
          if (null !== sibling) {
            do {
              let tmp = closure_444;
              let tmp2 = closure_444(sibling, arg1, _children);
              sibling = sibling.sibling;
            } while (null !== sibling);
          }
        }
      }
    }
  }
  const stateNode = tag.stateNode;
  if (arg1) {
    _children = _children._children;
    const index = _children.indexOf(stateNode);
    if (0 <= index) {
      _children.splice(index, 1);
      const index1 = _children.indexOf(arg1);
      _children.splice(index1, 0, stateNode);
      const UIManager3 = require(dependencyMap[2]).UIManager;
      const items = [index];
      const items1 = [index1];
      UIManager3.manageChildren(_children._nativeTag, items, items1, [], [], []);
    } else {
      const index2 = _children.indexOf(arg1);
      _children.splice(index2, 0, stateNode);
      const UIManager4 = require(dependencyMap[2]).UIManager;
      const _nativeTag3 = _children._nativeTag;
      let _nativeTag2 = stateNode;
      if ("number" !== typeof stateNode) {
        _nativeTag2 = stateNode._nativeTag;
      }
      const items2 = [_nativeTag2];
      const items3 = [index2];
      UIManager4.manageChildren(_nativeTag3, [], [], items2, items3, []);
    }
  } else {
    let _nativeTag = stateNode;
    if ("number" !== typeof stateNode) {
      _nativeTag = stateNode._nativeTag;
    }
    const _children1 = _children._children;
    const index3 = _children1.indexOf(stateNode);
    if (0 <= index3) {
      _children1.splice(index3, 1);
      _children1.push(stateNode);
      const UIManager2 = require(dependencyMap[2]).UIManager;
      const items4 = [index3];
      const items5 = [_children1.length - 1];
      UIManager2.manageChildren(_children._nativeTag, items4, items5, [], [], []);
    } else {
      _children1.push(stateNode);
      const UIManager = require(dependencyMap[2]).UIManager;
      const items6 = [_nativeTag];
      const items7 = [_children1.length - 1];
      UIManager.manageChildren(_children._nativeTag, [], [], items6, items7, []);
    }
  }
}
function commitLayoutEffectOnFiber(effectDuration, memoizedProps, flags) {
  let componentDidMountResult = flags;
  flags = flags.flags;
  switch (flags.tag) {
    case 0:
      componentDidMountResult = closure_453;
      componentDidMountResult = effectDuration;
      componentDidMountResult = flags;
      componentDidMountResult = closure_453(effectDuration, componentDidMountResult);
      componentDidMountResult = flags;
      componentDidMountResult = 4 & flags;
      if (componentDidMountResult) {
        componentDidMountResult = closure_430;
        componentDidMountResult = flags;
        componentDidMountResult = closure_430(componentDidMountResult, 5);
      }
    break;
    case 1:
      closure_453(effectDuration, componentDidMountResult);
      if (4 & flags) {
        const stateNode2 = componentDidMountResult.stateNode;
        if (null === memoizedProps) {
          componentDidMountResult = closure_429;
          componentDidMountResult = flags;
          if (closure_429(componentDidMountResult)) {
            componentDidMountResult = closure_293;
            componentDidMountResult = closure_293();
            componentDidMountResult = stateNode2;
            componentDidMountResult = stateNode2.componentDidMount();
            componentDidMountResult = closure_292;
            componentDidMountResult = closure_292();
            while (true) {
              componentDidMountResult = closure_497;
              componentDidMountResult = flags;
              componentDidMountResult = closure_497(componentDidMountResult, componentDidMountResult.return, __exception);
              // continue
            }
          } else {
            componentDidMountResult = stateNode2;
            componentDidMountResult = stateNode2.componentDidMount();
          }
        } else {
          componentDidMountResult = closure_392;
          componentDidMountResult = flags;
          componentDidMountResult = memoizedProps;
          componentDidMountResult = closure_392(componentDidMountResult.type, memoizedProps.memoizedProps);
          const memoizedState2 = memoizedProps.memoizedState;
          componentDidMountResult = closure_429;
          if (closure_429(componentDidMountResult)) {
            componentDidMountResult = closure_293;
            componentDidMountResult = closure_293();
            componentDidMountResult = stateNode2;
            componentDidMountResult = memoizedState2;
            componentDidMountResult = stateNode2.componentDidUpdate(componentDidMountResult, memoizedState2, stateNode2.__reactInternalSnapshotBeforeUpdate);
            componentDidMountResult = closure_292;
            componentDidMountResult = closure_292();
          } else {
            componentDidMountResult = stateNode2;
            componentDidMountResult = memoizedState2;
            componentDidMountResult = stateNode2.componentDidUpdate(componentDidMountResult, memoizedState2, stateNode2.__reactInternalSnapshotBeforeUpdate);
          }
        }
      }
      while (true) {
        componentDidMountResult = flags;
        let num11 = 64;
        if (!(64 & flags)) {
          break;
        } else {
          componentDidMountResult = closure_436;
          componentDidMountResult = flags;
          componentDidMountResult = closure_436(componentDidMountResult);
          // break
        }
        componentDidMountResult = flags;
        let num12 = 512;
        if (512 & flags) {
          componentDidMountResult = closure_438;
          componentDidMountResult = flags;
          componentDidMountResult = closure_438(componentDidMountResult, componentDidMountResult.return);
        }
      }
    break;
    case 2:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 3:
      const tmp71 = closure_286();
      closure_453(effectDuration, componentDidMountResult);
      if (64 & flags) {
        const updateQueue = componentDidMountResult.updateQueue;
        if (null !== updateQueue) {
          let stateNode = null;
          componentDidMountResult = flags;
          if (null !== componentDidMountResult.child) {
            const tag = componentDidMountResult.child.tag;
            if (27 !== tag) {
              if (5 !== tag) {
                if (1 === tag) {
                  stateNode = componentDidMountResult.child.stateNode;
                }
              }
            }
            stateNode = closure_265(componentDidMountResult.child.stateNode);
          }
          closure_327(tmp78, stateNode);
        }
      }
      effectDuration.effectDuration = effectDuration.effectDuration + closure_287(tmp71);
    break;
    case 4:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 5:
      closure_453(effectDuration, componentDidMountResult);
      let tmp66 = 512 & flags;
      if (tmp66) {
        closure_438(componentDidMountResult, componentDidMountResult.return);
      }
    break;
    case 6:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 7:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 8:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 9:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 10:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 11:
      componentDidMountResult = closure_453;
      componentDidMountResult = effectDuration;
      componentDidMountResult = flags;
      componentDidMountResult = closure_453(effectDuration, componentDidMountResult);
      componentDidMountResult = flags;
      componentDidMountResult = 4 & flags;
      if (componentDidMountResult) {
        componentDidMountResult = closure_430;
        componentDidMountResult = flags;
        componentDidMountResult = closure_430(componentDidMountResult, 5);
      }
    break;
    case 12:
      if (4 & flags) {
        const tmp48 = closure_286();
        closure_453(effectDuration, componentDidMountResult);
        stateNode = componentDidMountResult.stateNode;
        stateNode.effectDuration = stateNode.effectDuration + closure_288(tmp48);
        closure_440(flags, memoizedProps, closure_87, stateNode.effectDuration);
      } else {
        closure_453(effectDuration, componentDidMountResult);
      }
    break;
    case 13:
      closure_453(effectDuration, componentDidMountResult);
      if (64 & flags) {
        const memoizedState = componentDidMountResult.memoizedState;
        let tmp35 = null !== memoizedState;
        if (tmp35) {
          tmp35 = null !== tmp33.dehydrated;
        }
        if (tmp35) {
          closure_501.bind(null, componentDidMountResult);
          closure_261();
        }
      }
    break;
    case 14:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 15:
      componentDidMountResult = closure_453;
      componentDidMountResult = effectDuration;
      componentDidMountResult = flags;
      componentDidMountResult = closure_453(effectDuration, componentDidMountResult);
      componentDidMountResult = flags;
      componentDidMountResult = 4 & flags;
      if (componentDidMountResult) {
        componentDidMountResult = closure_430;
        componentDidMountResult = flags;
        componentDidMountResult = closure_430(componentDidMountResult, 5);
      }
    break;
    case 16:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 17:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 18:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 19:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 20:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 21:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 22:
      if (1 & componentDidMountResult.mode) {
        let tmp9 = null !== componentDidMountResult.memoizedState;
        if (!tmp9) {
          tmp9 = closure_143;
        }
        if (!tmp9) {
          let tmp12 = null !== memoizedProps;
          if (tmp12) {
            tmp12 = null !== memoizedProps.memoizedState;
          }
          if (!tmp12) {
            tmp12 = closure_144;
          }
          const tmp15 = closure_143;
          const tmp16 = closure_144;
          closure_143 = tmp10;
          closure_144 = tmp12;
          if (tmp12) {
            if (!tmp16) {
              closure_455(effectDuration, componentDidMountResult, 8772 & componentDidMountResult.subtreeFlags);
            }
            closure_143 = tmp15;
            closure_144 = tmp16;
          }
          closure_453(effectDuration, componentDidMountResult);
        }
      } else {
        closure_453(effectDuration, componentDidMountResult);
      }
    break;
    case 23:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 24:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 25:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 26:
      closure_453(effectDuration, componentDidMountResult);
      tmp66 = 512 & flags;
      if (tmp66) {
        closure_438(componentDidMountResult, componentDidMountResult.return);
      }
    break;
    case 27:
      closure_453(effectDuration, componentDidMountResult);
      tmp66 = 512 & flags;
      if (tmp66) {
        closure_438(componentDidMountResult, componentDidMountResult.return);
      }
    break;
    case 28:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 29:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
    break;
    case 30:
    break;
    default:
      componentDidMountResult = closure_453;
      componentDidMountResult = closure_453(effectDuration, flags);
  }
}
function detachFiberAfterEffects(alternate) {
  alternate = alternate.alternate;
  if (null !== alternate) {
    alternate.alternate = null;
    detachFiberAfterEffects(alternate);
  }
  alternate.child = null;
  alternate.deletions = null;
  alternate.sibling = null;
  alternate.stateNode = null;
  alternate.return = null;
  alternate.dependencies = null;
  alternate.memoizedProps = null;
  alternate.memoizedState = null;
  alternate.pendingProps = null;
  alternate.stateNode = null;
  alternate.updateQueue = null;
}
function recursivelyTraverseDeletionEffects(arg0, arg1, child) {
  let sibling = child.child;
  if (null !== sibling) {
    do {
      let tmp = closure_448;
      let tmp2 = closure_448(arg0, arg1, sibling);
      sibling = sibling.sibling;
    } while (null !== sibling);
  }
}
function commitDeletionEffectsOnFiber(arg0, arg1, arg2) {
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__4) {
    if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__4.onCommitFiberUnmount) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__4.onCommitFiberUnmount(closure_57, arg2);
    }
  }
}
function attachSuspenseRetryListeners(tag, arr) {
  const require = tag;
  tag = tag.tag;
  if (13 !== tag) {
    if (19 !== tag) {
      if (22 === tag) {
        const stateNode = tag.stateNode;
        let _retryCache = stateNode._retryCache;
        if (null === _retryCache) {
          const prototype = ctor.prototype;
          const tmp6 = new ctor();
          stateNode._retryCache = tmp6;
          _retryCache = tmp6;
        }
      } else {
        const _Error = Error;
        throw Error("Unexpected Suspense handler tag (" + tag.tag + "). This is a bug in React.");
      }
    }
    const dependencyMap = _retryCache;
    const item = arr.forEach((promise) => {
      const bindResult = callback.bind(null, promise, promise);
      if (!_retryCache.has(promise)) {
        _retryCache.add(promise);
        if (closure_60) {
          if (null !== closure_147) {
            if (null !== closure_148) {
              callback2(closure_148, closure_147);
            }
          }
          const _Error = Error;
          throw Error("Expected finished root and lanes to be set. This is a bug in React.");
        }
        promise.then(bindResult, bindResult);
      }
    });
  }
  let stateNode2 = tag.stateNode;
  if (null === stateNode2) {
    const prototype2 = ctor.prototype;
    const tmp11 = new ctor();
    tag.stateNode = tmp11;
    stateNode2 = tmp11;
  }
  _retryCache = stateNode2;
}
function recursivelyTraverseMutationEffects(arg0, deletions) {
  deletions = deletions.deletions;
  if (null !== deletions) {
    let num = 0;
    if (0 < deletions.length) {
      while (true) {
        let tmp = deletions[num];
        let _return = deletions;
        if (null !== deletions) {
          let tag = _return.tag;
          let tmp2 = _return;
          while (27 !== tag) {
            if (5 === tag) {
              break;
            } else {
              if (3 !== tag) {
                if (4 !== tag) {
                  _return = _return.return;
                }
                continue;
              }
              let containerInfo = _return.stateNode.containerInfo;
              let closure_150 = true;
            }
          }
          containerInfo = _return.stateNode;
          closure_150 = false;
        }
        let tmp3 = containerInfo;
        if (null === containerInfo) {
          break;
        } else {
          let tmp4 = commitDeletionEffectsOnFiber;
          let tmp5 = commitDeletionEffectsOnFiber(arg0, deletions, tmp);
          containerInfo = null;
          closure_150 = false;
          let alternate = tmp.alternate;
          if (null !== alternate) {
            alternate.return = null;
          }
          tmp.return = null;
          num = num + 1;
        }
      }
      const _Error = Error;
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
  }
  if (13878 & deletions.subtreeFlags) {
    let sibling = deletions.child;
    if (null !== sibling) {
      do {
        let tmp6 = closure_451;
        let tmp7 = closure_451(sibling, arg0);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitMutationEffectsOnFiber(tag, effectDuration) {
  let alternate;
  let flags;
  let memoizedProps;
  let memoizedProps2;
  let sibling;
  let stateNode2;
  let stateNode4;
  let combined = tag;
  ({ alternate, flags } = tag);
  switch (tag.tag) {
    case 0:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      combined = 4 & flags;
      if (combined) {
        combined = closure_433;
        combined = tag;
        combined = closure_433(3, combined, combined.return);
        combined = closure_432;
        combined = closure_432(3, combined);
        combined = closure_431;
        combined = closure_431(combined, combined.return, 5);
      }
    break;
    case 1:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      if (512 & flags) {
        combined = closure_144;
        if (!closure_144) {
          combined = alternate;
          combined = null;
          combined = null === alternate;
        }
        if (!combined) {
          combined = closure_439;
          combined = alternate;
          combined = closure_439(alternate, alternate.return);
        }
      }
      combined = flags;
      if (64 & flags) {
        combined = closure_143;
        if (closure_143) {
          combined = tag;
          const updateQueue4 = combined.updateQueue;
          combined = updateQueue4;
          combined = null;
          if (null !== updateQueue4) {
            combined = updateQueue4;
            const callbacks = combined.callbacks;
            if (null !== callbacks) {
              combined = updateQueue4;
              if (null === combined.shared.hiddenCallbacks) {
                combined = callbacks;
              } else {
                combined = hiddenCallbacks;
                combined = callbacks;
                combined = obj7.concat(combined);
              }
              combined.shared.hiddenCallbacks = combined;
              const obj7 = combined.shared.hiddenCallbacks;
            }
          }
        }
      }
    break;
    case 2:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 3:
      combined = closure_286;
      combined = closure_286();
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = closure_287;
      effectDuration.effectDuration = effectDuration.effectDuration + closure_287(combined);
    break;
    case 4:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 5:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      combined = 512 & flags;
      if (combined) {
        combined = closure_144;
        if (!closure_144) {
          combined = alternate;
          combined = null;
          combined = null === alternate;
        }
        if (!combined) {
          combined = closure_439;
          combined = alternate;
          combined = closure_439(alternate, alternate.return);
        }
      }
      combined = flags;
      combined = 4 & flags;
      if (combined) {
        combined = tag;
        combined = null;
        if (null != combined.stateNode) {
          combined = tag;
          let memoizedProps4 = combined.memoizedProps;
          combined = alternate;
          if (null !== alternate) {
            combined = alternate;
            let memoizedProps3 = alternate.memoizedProps;
          } else {
            memoizedProps3 = memoizedProps4;
          }
          combined = memoizedProps3;
          combined = tag;
          let stateNode5 = combined.stateNode;
          combined = stateNode5;
          let viewConfig3 = stateNode5.viewConfig;
          combined = viewConfig3;
          combined = closure_48;
          combined = memoizedProps4;
          combined = closure_48.set(stateNode5._nativeTag, memoizedProps4);
          combined = closure_238;
          combined = memoizedProps3;
          combined = null;
          combined = memoizedProps4;
          combined = closure_238(null, memoizedProps3, memoizedProps4, viewConfig3.validAttributes);
          if (null != combined) {
            combined = closure_0;
            combined = closure_1;
            combined = closure_0(closure_1[2]);
            let UIManager4 = combined.UIManager;
            combined = UIManager4.updateView(stateNode5._nativeTag, viewConfig3.uiViewClassName, combined);
          }
        }
      }
    break;
    case 6:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      if (4 & flags) {
        combined = tag;
        combined = null;
        if (null === combined.stateNode) {
          combined = globalThis;
          const _Error = Error;
          throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
        } else {
          combined = tag;
          ({ memoizedProps: memoizedProps2, stateNode: stateNode4 } = combined);
          combined = closure_0;
          combined = closure_1;
          const UIManager3 = closure_0(closure_1[2]).UIManager;
          combined = stateNode4;
          let obj = {};
          combined = memoizedProps2;
          obj.text = memoizedProps2;
          combined = UIManager3.updateView(stateNode4, "RCTRawText", obj);
        }
      }
    break;
    case 7:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 8:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 9:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 10:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 11:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      combined = 4 & flags;
      if (combined) {
        combined = closure_433;
        combined = tag;
        combined = closure_433(3, combined, combined.return);
        combined = closure_432;
        combined = closure_432(3, combined);
        combined = closure_431;
        combined = closure_431(combined, combined.return, 5);
      }
    break;
    case 12:
      combined = closure_286;
      combined = closure_286();
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      const stateNode3 = combined.stateNode;
      combined = closure_288;
      stateNode3.effectDuration = stateNode3.effectDuration + closure_288(combined);
    break;
    case 13:
      closure_450(effectDuration, combined);
      closure_452(combined);
      if (8192 & combined.child.flags) {
        combined = null;
        combined = null !== alternate;
        if (combined) {
          combined = alternate;
          combined = null !== alternate.memoizedState;
        }
        combined = tag;
        combined = null === combined.memoizedState;
        if (!combined) {
          combined = closure_0;
          combined = closure_1;
          closure_173 = closure_0(closure_1[3]).unstable_now();
          const obj5 = closure_0(closure_1[3]);
        }
      }
      combined = flags;
      if (4 & flags) {
        combined = tag;
        const updateQueue3 = combined.updateQueue;
        combined = null;
        if (null !== updateQueue3) {
          combined = tag;
          combined.updateQueue = null;
          combined = closure_449;
          combined = updateQueue3;
          combined = closure_449(combined, combined);
        }
      }
    break;
    case 14:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      combined = 4 & flags;
      if (combined) {
        combined = closure_433;
        combined = tag;
        combined = closure_433(3, combined, combined.return);
        combined = closure_432;
        combined = closure_432(3, combined);
        combined = closure_431;
        combined = closure_431(combined, combined.return, 5);
      }
    break;
    case 15:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      combined = 4 & flags;
      if (combined) {
        combined = closure_433;
        combined = tag;
        combined = closure_433(3, combined, combined.return);
        combined = closure_432;
        combined = closure_432(3, combined);
        combined = closure_431;
        combined = closure_431(combined, combined.return, 5);
      }
    break;
    case 16:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 17:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 18:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 19:
      closure_450(effectDuration, combined);
      closure_452(combined);
      if (4 & flags) {
        const updateQueue = combined.updateQueue;
        if (null !== updateQueue) {
          combined = tag;
          combined.updateQueue = null;
          combined = closure_449;
          combined = updateQueue;
          combined = closure_449(combined, tmp10);
        }
      }
    break;
    case 20:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 21:
    break;
    case 22:
      let tmp16 = null !== alternate;
      if (tmp16) {
        tmp16 = null !== alternate.memoizedState;
      }
      if (1 & combined.mode) {
        const tmp24 = closure_144;
        let tmp25 = closure_143;
        const tmp26 = closure_143;
        if (!closure_143) {
          tmp25 = tmp14;
        }
        closure_143 = tmp25;
        let tmp27 = tmp24;
        if (!tmp24) {
          tmp27 = tmp16;
        }
        closure_144 = tmp27;
        closure_450(effectDuration, combined);
        closure_144 = tmp24;
        closure_143 = tmp26;
      } else {
        closure_450(effectDuration, combined);
      }
      closure_452(combined);
      if (8192 & flags) {
        const stateNode = combined.stateNode;
        const _visibility = stateNode._visibility;
        if (tmp14) {
          let tmp41 = -2 & _visibility;
        } else {
          tmp41 = 1 | _visibility;
        }
        stateNode._visibility = tmp41;
        if (tmp14) {
          let tmp44 = null === alternate;
          if (!tmp44) {
            tmp44 = tmp16;
          }
          if (!tmp44) {
            tmp44 = closure_143;
          }
          if (!tmp44) {
            tmp44 = closure_144;
          }
          if (!tmp44) {
            if (1 & combined.mode) {
              closure_454(combined);
            }
          }
        }
        let tmp49 = null;
        sibling = tag;
        while (true) {
          let tmp50 = sibling;
          if (5 === sibling.tag) {
            let tmp58 = tmp49;
            if (null === tmp49) {
              tmp49 = sibling;
              combined = sibling;
              combined = sibling;
              let stateNode6 = sibling.stateNode;
              combined = tmp14;
              if (tmp14) {
                let tmp68 = stateNode6;
                let tmp69 = stateNode6;
                let viewConfig2 = stateNode6.viewConfig;
                let tmp70 = closure_238;
                let tmp71 = closure_52;
                obj = {};
                let obj1 = { display: "none" };
                obj.style = obj1;
                let tmp72 = null;
                let tmp73 = obj;
                let tmp75 = closure_0;
                let tmp76 = closure_1;
                let tmp74 = closure_238(null, closure_52, obj, viewConfig2.validAttributes);
                let UIManager2 = closure_0(closure_1[2]).UIManager;
                let updateViewResult = UIManager2.updateView(stateNode6._nativeTag, viewConfig2.uiViewClassName, tmp74);
              } else {
                let tmp59 = combined;
                ({ stateNode: stateNode2, memoizedProps } = combined);
                let viewConfig = stateNode2.viewConfig;
                let tmp60 = closure_238;
                let tmp61 = closure_6;
                obj = {};
                let items = [memoizedProps.style, ];
                let obj2 = { display: "none" };
                items[1] = obj2;
                obj.style = items;
                let tmp62 = null;
                let tmp63 = memoizedProps;
                let tmp65 = closure_0;
                let tmp66 = closure_1;
                let tmp64 = closure_238(null, closure_6({}, memoizedProps, obj), memoizedProps, viewConfig.validAttributes);
                let UIManager = closure_0(closure_1[2]).UIManager;
                let updateViewResult1 = UIManager.updateView(stateNode2._nativeTag, viewConfig.uiViewClassName, tmp64);
              }
            }
          } else {
            combined = sibling;
            if (6 === sibling.tag) {
              let tmp57 = tmp49;
              if (null === tmp49) {
                break;
              }
            } else {
              let tmp51 = sibling;
              if (22 === sibling.tag) {
                let tmp53 = sibling;
                if (null !== sibling.memoizedState) {
                  let tmp54 = sibling;
                  let tmp55 = tag;
                }
              } else {
                let tmp52 = sibling;
              }
              let tmp56 = sibling;
              if (null !== sibling.child) {
                combined = sibling;
                sibling.child.return = sibling;
                sibling = sibling.child;
                // continue
              }
              continue;
            }
          }
          while (true) {
            let tmp78 = sibling;
            let tmp79 = tag;
            if (sibling === combined) {
              break;
            } else {
              let tmp80 = sibling;
              if (null !== sibling.sibling) {
                let tmp87 = tmp49;
                let tmp88 = sibling;
                if (tmp49 === sibling) {
                  tmp49 = null;
                }
                let tmp89 = sibling;
                ({ return: sibling.sibling.return, sibling } = sibling);
                // continue label0
              } else {
                let tmp81 = sibling;
                while (null !== sibling.return) {
                  let tmp82 = sibling;
                  let tmp83 = tag;
                  if (sibling.return === combined) {
                    break;
                  } else {
                    let tmp84 = tmp49;
                    let tmp85 = sibling;
                    if (tmp49 === sibling) {
                      tmp49 = null;
                    }
                    let tmp86 = sibling;
                    let _return = sibling.return;
                    sibling = _return;
                    break;
                  }
                }
              }
              break;
            }
            break;
          }
        }
        combined = sibling;
        combined = globalThis;
        const _Error2 = Error;
        throw Error("Not yet implemented.");
      }
      if (4 & flags) {
        const updateQueue2 = combined.updateQueue;
        if (null !== updateQueue2) {
          combined = updateQueue2;
          const retryQueue = tmp92.retryQueue;
          if (null !== retryQueue) {
            combined = updateQueue2;
            tmp92.retryQueue = null;
            combined = closure_449;
            combined = tag;
            combined = retryQueue;
            combined = closure_449(combined, combined);
          }
        }
      }
    break;
    case 23:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 24:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 25:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 26:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      combined = 512 & flags;
      if (combined) {
        combined = closure_144;
        if (!closure_144) {
          combined = alternate;
          combined = null;
          combined = null === alternate;
        }
        if (!combined) {
          combined = closure_439;
          combined = alternate;
          combined = closure_439(alternate, alternate.return);
        }
      }
      combined = flags;
      combined = 4 & flags;
      if (combined) {
        combined = tag;
        combined = null;
        if (null != combined.stateNode) {
          combined = tag;
          memoizedProps4 = combined.memoizedProps;
          combined = alternate;
          if (null !== alternate) {
            combined = alternate;
            memoizedProps3 = alternate.memoizedProps;
          } else {
            memoizedProps3 = memoizedProps4;
          }
          combined = memoizedProps3;
          combined = tag;
          stateNode5 = combined.stateNode;
          combined = stateNode5;
          viewConfig3 = stateNode5.viewConfig;
          combined = viewConfig3;
          combined = closure_48;
          combined = memoizedProps4;
          combined = closure_48.set(stateNode5._nativeTag, memoizedProps4);
          combined = closure_238;
          combined = memoizedProps3;
          combined = null;
          combined = memoizedProps4;
          combined = closure_238(null, memoizedProps3, memoizedProps4, viewConfig3.validAttributes);
          if (null != combined) {
            combined = closure_0;
            combined = closure_1;
            combined = closure_0(closure_1[2]);
            UIManager4 = combined.UIManager;
            combined = UIManager4.updateView(stateNode5._nativeTag, viewConfig3.uiViewClassName, combined);
          }
        }
      }
    break;
    case 27:
      combined = closure_450;
      combined = effectDuration;
      combined = tag;
      combined = closure_450(effectDuration, combined);
      combined = closure_452;
      combined = closure_452(combined);
      combined = flags;
      combined = 512 & flags;
      if (combined) {
        combined = closure_144;
        if (!closure_144) {
          combined = alternate;
          combined = null;
          combined = null === alternate;
        }
        if (!combined) {
          combined = closure_439;
          combined = alternate;
          combined = closure_439(alternate, alternate.return);
        }
      }
      combined = flags;
      combined = 4 & flags;
      if (combined) {
        combined = tag;
        combined = null;
        if (null != combined.stateNode) {
          combined = tag;
          memoizedProps4 = combined.memoizedProps;
          combined = alternate;
          if (null !== alternate) {
            combined = alternate;
            memoizedProps3 = alternate.memoizedProps;
          } else {
            memoizedProps3 = memoizedProps4;
          }
          combined = memoizedProps3;
          combined = tag;
          stateNode5 = combined.stateNode;
          combined = stateNode5;
          viewConfig3 = stateNode5.viewConfig;
          combined = viewConfig3;
          combined = closure_48;
          combined = memoizedProps4;
          combined = closure_48.set(stateNode5._nativeTag, memoizedProps4);
          combined = closure_238;
          combined = memoizedProps3;
          combined = null;
          combined = memoizedProps4;
          combined = closure_238(null, memoizedProps3, memoizedProps4, viewConfig3.validAttributes);
          if (null != combined) {
            combined = closure_0;
            combined = closure_1;
            combined = closure_0(closure_1[2]);
            UIManager4 = combined.UIManager;
            combined = UIManager4.updateView(stateNode5._nativeTag, viewConfig3.uiViewClassName, combined);
          }
        }
      }
    break;
    case 28:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 29:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
    break;
    case 30:
    break;
    default:
      combined = closure_450;
      combined = closure_450(effectDuration, tag);
      combined = closure_452;
      combined = closure_452(tag);
  }
}
function commitReconciliationEffects(flags) {
  flags = flags.flags;
  if (!(2 & flags)) {
    if (4096 & flags) {
      tmp.flags = tmp.flags & -4097;
    }
  } else {
    const _return = tmp.return;
    let tmp4 = _return;
    if (null !== _return) {
      while (!isHostParent(tmp4)) {
        let _return2 = tmp4.return;
        tmp4 = _return2;
      }
    }
    if (null != tmp2) {
      const tag = tmp2.tag;
      if (27 !== tag) {
        if (5 !== tag) {
          if (3 !== tag) {
            if (4 !== tag) {
              const _Error = Error;
              throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
            }
          }
          insertOrAppendPlacementNodeIntoContainer(tmp, getHostSibling(tmp), tmp2.stateNode.containerInfo);
        }
        tmp.flags = tmp.flags & -3;
      }
      if (32 & tmp2.flags) {
        tmp2.flags = tmp2.flags & -33;
      }
      insertOrAppendPlacementNode(tmp, getHostSibling(tmp), tmp2.stateNode);
    }
    const _Error2 = Error;
    throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
  }
}
function recursivelyTraverseLayoutEffects(arg0, subtreeFlags) {
  if (8772 & subtreeFlags.subtreeFlags) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp2 = closure_445;
        let tmp3 = closure_445(arg0, sibling.alternate, sibling);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function recursivelyTraverseDisappearLayoutEffects(child) {
  let sibling = child.child;
  if (null !== sibling) {
    while (true) {
      let tag = sibling.tag;
      if (0 !== tag) {
        if (11 !== tag) {
          if (14 !== tag) {
            if (15 !== tag) {
              if (1 === tag) {
                let tmp9 = safelyDetachRef;
                let tmp10 = safelyDetachRef(sibling, sibling.return);
                let stateNode = sibling.stateNode;
                if ("function" === typeof stateNode.componentWillUnmount) {
                  let tmp11 = safelyCallComponentWillUnmount;
                  let tmp12 = safelyCallComponentWillUnmount(sibling, sibling.return, stateNode);
                }
                let tmp13 = recursivelyTraverseDisappearLayoutEffects;
                let tmp14 = recursivelyTraverseDisappearLayoutEffects(sibling);
                let tmp4 = stateNode;
              } else {
                if (27 !== tag) {
                  if (26 !== tag) {
                    if (5 !== tag) {
                      if (22 === tag) {
                        tmp4 = tmp;
                        if (null === sibling.memoizedState) {
                          let tmp19 = recursivelyTraverseDisappearLayoutEffects;
                          let tmp20 = recursivelyTraverseDisappearLayoutEffects(sibling);
                          tmp4 = tmp;
                        }
                      } else {
                        let tmp2 = recursivelyTraverseDisappearLayoutEffects;
                        let tmp3 = recursivelyTraverseDisappearLayoutEffects(sibling);
                        tmp4 = tmp;
                      }
                    }
                  }
                }
                let tmp5 = safelyDetachRef;
                let tmp6 = safelyDetachRef(sibling, sibling.return);
                let tmp7 = recursivelyTraverseDisappearLayoutEffects;
                let tmp8 = recursivelyTraverseDisappearLayoutEffects(sibling);
                tmp4 = tmp;
              }
            }
            sibling = sibling.sibling;
            let tmp = tmp4;
            if (null === sibling) {
              break;
            }
          }
        }
      }
      let tmp15 = commitHookLayoutUnmountEffects;
      let tmp16 = commitHookLayoutUnmountEffects(sibling, sibling.return, 4);
      let tmp17 = recursivelyTraverseDisappearLayoutEffects;
      let tmp18 = recursivelyTraverseDisappearLayoutEffects(sibling);
      tmp4 = tmp;
    }
  }
}
function recursivelyTraverseReappearLayoutEffects(arg0, subtreeFlags) {
  let flags;
  let tag;
  const child = subtreeFlags.child;
  if (null !== child) {
    const alternate = child.alternate;
    ({ flags, tag } = child);
  }
}
function commitOffscreenPassiveMountEffects(memoizedState, memoizedState2) {
  let pool = null;
  if (tmp) {
    pool = memoizedState.memoizedState.cachePool.pool;
  }
  let pool1 = null;
  if (tmp3) {
    pool1 = memoizedState2.memoizedState.cachePool.pool;
  }
  if (pool1 !== pool) {
    if (null != pool1) {
      pool1.refCount = pool1.refCount + 1;
    }
    if (null != pool) {
      releaseCache(pool);
    }
  }
}
function commitCachePassiveMountEffect(arg0, alternate) {
  let cache = null;
  if (null !== alternate.alternate) {
    cache = alternate.alternate.memoizedState.cache;
  }
  cache = alternate.memoizedState.cache;
  if (cache !== cache) {
    cache.refCount = cache.refCount + 1;
    if (null != cache) {
      releaseCache(cache);
    }
  }
}
function recursivelyTraversePassiveMountEffects(arg0, subtreeFlags) {
  if (10256 & subtreeFlags.subtreeFlags) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp2 = closure_459;
        let tmp3 = arg0;
        let tmp4 = sibling;
        let tmp5 = arg2;
        let tmp6 = arg3;
        let tmp7 = closure_459(arg0, sibling, arg2, arg3);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitPassiveMountOnFiber(arg0, arg1, arg2, arg3) {
  recursivelyTraversePassiveMountEffects(tmp5, tmp4, tmp3, tmp2);
  if (2048 & tmp6) {
    const alternate = tmp4.alternate;
    commitCachePassiveMountEffect(tmp, tmp4);
  }
}
function recursivelyTraverseReconnectPassiveEffects(arg0, subtreeFlags) {
  let flags;
  let tag;
  let tmp = arg4;
  if (arg4) {
    tmp = 10256 & subtreeFlags.subtreeFlags;
  }
  let sibling = subtreeFlags.child;
  if (null !== sibling) {
    while (true) {
      ({ flags, tag } = sibling);
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            let tmp10 = tmp2;
            if (23 !== tag) {
              if (22 === tag) {
                let stateNode = sibling.stateNode;
                if (null !== sibling.memoizedState) {
                  if (2 & stateNode._visibility) {
                    let tmp37 = recursivelyTraverseReconnectPassiveEffects;
                    let tmp38 = arg0;
                    let tmp39 = sibling;
                    let tmp40 = arg2;
                    let tmp41 = arg3;
                    let tmp42 = tmp;
                    let tmp43 = recursivelyTraverseReconnectPassiveEffects(arg0, sibling, arg2, arg3, tmp);
                  } else if (1 & sibling.mode) {
                    let tmp35 = recursivelyTraverseAtomicPassiveEffects;
                    let tmp36 = recursivelyTraverseAtomicPassiveEffects(arg0, sibling);
                  } else {
                    stateNode._visibility = stateNode._visibility | 2;
                    let tmp28 = recursivelyTraverseReconnectPassiveEffects;
                    let tmp29 = arg0;
                    let tmp30 = sibling;
                    let tmp31 = arg2;
                    let tmp32 = arg3;
                    let tmp33 = tmp;
                    let tmp34 = recursivelyTraverseReconnectPassiveEffects(arg0, sibling, arg2, arg3, tmp);
                  }
                } else {
                  stateNode._visibility = stateNode._visibility | 2;
                  let tmp21 = recursivelyTraverseReconnectPassiveEffects;
                  let tmp22 = arg0;
                  let tmp23 = sibling;
                  let tmp24 = arg2;
                  let tmp25 = arg3;
                  let tmp26 = tmp;
                  let tmp27 = recursivelyTraverseReconnectPassiveEffects(arg0, sibling, arg2, arg3, tmp);
                }
                let tmp44 = tmp;
                if (tmp) {
                  tmp44 = 2048 & flags;
                }
                tmp10 = stateNode;
                if (tmp44) {
                  let tmp45 = commitOffscreenPassiveMountEffects;
                  let tmp46 = commitOffscreenPassiveMountEffects(sibling.alternate, sibling);
                  tmp10 = stateNode;
                }
              } else if (24 === tag) {
                let tmp11 = recursivelyTraverseReconnectPassiveEffects;
                let tmp12 = arg0;
                let tmp13 = sibling;
                let tmp14 = arg2;
                let tmp15 = arg3;
                let tmp16 = tmp;
                let tmp17 = recursivelyTraverseReconnectPassiveEffects(arg0, sibling, arg2, arg3, tmp);
                let tmp18 = tmp;
                if (tmp) {
                  tmp18 = 2048 & flags;
                }
                tmp10 = tmp2;
                if (tmp18) {
                  let tmp19 = commitCachePassiveMountEffect;
                  let alternate = sibling.alternate;
                  let tmp20 = commitCachePassiveMountEffect(undefined, sibling);
                  tmp10 = tmp2;
                }
              } else {
                let tmp3 = recursivelyTraverseReconnectPassiveEffects;
                let tmp4 = arg0;
                let tmp5 = sibling;
                let tmp6 = arg2;
                let tmp7 = arg3;
                let tmp8 = tmp;
                let tmp9 = recursivelyTraverseReconnectPassiveEffects(arg0, sibling, arg2, arg3, tmp);
                tmp10 = tmp2;
              }
            }
          }
          sibling = sibling.sibling;
          let tmp2 = tmp10;
          if (null === sibling) {
            break;
          }
        }
      }
      let tmp47 = recursivelyTraverseReconnectPassiveEffects;
      let tmp48 = arg0;
      let tmp49 = sibling;
      let tmp50 = arg2;
      let tmp51 = arg3;
      let tmp52 = tmp;
      let tmp53 = recursivelyTraverseReconnectPassiveEffects(arg0, sibling, arg2, arg3, tmp);
      let tmp54 = commitHookPassiveMountEffects;
      let tmp55 = commitHookPassiveMountEffects(sibling, 8);
      tmp10 = tmp2;
    }
  }
}
function recursivelyTraverseAtomicPassiveEffects(arg0, subtreeFlags) {
  let flags;
  let tag;
  if (10256 & subtreeFlags.subtreeFlags) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        ({ flags, tag } = sibling);
        if (22 === tag) {
          let tmp8 = closure_461;
          let tmp9 = closure_461(arg0, sibling);
          if (2048 & flags) {
            let tmp10 = closure_456;
            let tmp11 = closure_456(sibling.alternate, sibling);
          }
        } else if (24 === tag) {
          let tmp4 = closure_461;
          let tmp5 = closure_461(arg0, sibling);
          if (2048 & flags) {
            let tmp6 = closure_457;
            let alternate = sibling.alternate;
            let tmp7 = closure_457(undefined, sibling);
          }
        } else {
          let tmp2 = closure_461;
          let tmp3 = closure_461(arg0, sibling);
        }
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function recursivelyAccumulateSuspenseyCommit(subtreeFlags) {
  if (subtreeFlags.subtreeFlags & closure_151) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp2 = closure_463;
        let tmp3 = closure_463(sibling);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function accumulateSuspenseyCommitOnFiber(tag) {
  tag = tag.tag;
  if (26 === tag) {
    recursivelyAccumulateSuspenseyCommit(tag);
    let tmp12 = tag.flags & closure_151;
    if (tmp12) {
      tmp12 = null !== tag.memoizedState;
    }
    if (tmp12) {
      shim();
    }
  } else {
    if (5 !== tag) {
      if (3 !== tag) {
        if (4 !== tag) {
          if (22 === tag) {
            if (null === tag.memoizedState) {
              const alternate = tag.alternate;
              if (null !== alternate) {
                if (null !== alternate.memoizedState) {
                  closure_151 = 16777216;
                  recursivelyAccumulateSuspenseyCommit(tag);
                }
              }
              recursivelyAccumulateSuspenseyCommit(tag);
            }
          }
        }
      }
    }
    recursivelyAccumulateSuspenseyCommit(tag);
  }
}
function detachAlternateSiblings(alternate) {
  alternate = alternate.alternate;
  if (null !== alternate) {
    let sibling = alternate.child;
    if (null !== sibling) {
      alternate.child = null;
      do {
        sibling.sibling = null;
        sibling = sibling.sibling;
      } while (null !== tmp);
    }
  }
}
function recursivelyTraversePassiveUnmountEffects(deletions) {
  let length;
  deletions = deletions.deletions;
  if (16 & deletions.flags) {
    if (null !== deletions) {
      let num = 0;
      if (0 < deletions.length) {
        do {
          let tmp2 = deletions[num];
          closure_146 = tmp2;
          let tmp3 = closure_468;
          let tmp4 = closure_468(tmp2, deletions);
          num = num + 1;
          length = deletions.length;
        } while (num < length);
      }
    }
    detachAlternateSiblings(deletions);
  }
  if (10256 & deletions.subtreeFlags) {
    let sibling = deletions.child;
    if (null !== sibling) {
      do {
        let tmp8 = closure_466;
        let tmp9 = closure_466(sibling);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitPassiveUnmountOnFiber(tag) {
  tag = tag.tag;
  if (0 !== tag) {
    if (11 !== tag) {
      if (15 !== tag) {
        if (3 === tag) {
          recursivelyTraversePassiveUnmountEffects(tag);
          const stateNode3 = tag.stateNode;
          stateNode3.passiveEffectDuration = stateNode3.passiveEffectDuration + popNestedEffectDurations(pushNestedEffectDurations());
          const tmp14 = pushNestedEffectDurations();
        } else if (12 === tag) {
          recursivelyTraversePassiveUnmountEffects(tag);
          const stateNode2 = tag.stateNode;
          stateNode2.passiveEffectDuration = stateNode2.passiveEffectDuration + bubbleNestedEffectDurations(pushNestedEffectDurations());
          const tmp9 = pushNestedEffectDurations();
        } else if (22 === tag) {
          const stateNode = tag.stateNode;
          if (null !== tag.memoizedState) {
            if (2 & stateNode._visibility) {
              stateNode._visibility = stateNode._visibility & -3;
              recursivelyTraverseDisconnectPassiveEffects(tag);
            }
          }
          recursivelyTraversePassiveUnmountEffects(tag);
        } else {
          recursivelyTraversePassiveUnmountEffects(tag);
        }
      }
    }
  }
  recursivelyTraversePassiveUnmountEffects(tag);
  if (2048 & tag.flags) {
    commitHookPassiveUnmountEffects(tag, tag.return, 9);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(deletions) {
  let length;
  deletions = deletions.deletions;
  if (16 & deletions.flags) {
    let num;
    if (null !== deletions) {
      let num3 = 0;
      num = 0;
      if (0 < deletions.length) {
        do {
          let tmp3 = deletions[num3];
          closure_146 = tmp3;
          let tmp4 = closure_468;
          let tmp5 = closure_468(tmp3, deletions);
          num3 = num3 + 1;
          num = num3;
          length = deletions.length;
        } while (num3 < length);
      }
    }
    detachAlternateSiblings(deletions);
    let tmp = num;
  }
  let sibling = deletions.child;
  if (null !== sibling) {
    while (true) {
      let tag = sibling.tag;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            if (22 === tag) {
              let stateNode = sibling.stateNode;
              let tmp10 = stateNode;
              if (2 & stateNode._visibility) {
                stateNode._visibility = stateNode._visibility & -3;
                let tmp11 = recursivelyTraverseDisconnectPassiveEffects;
                let tmp12 = recursivelyTraverseDisconnectPassiveEffects(sibling);
                tmp10 = stateNode;
              }
            } else {
              let tmp8 = recursivelyTraverseDisconnectPassiveEffects;
              let tmp9 = recursivelyTraverseDisconnectPassiveEffects(sibling);
              tmp10 = tmp;
            }
          }
          sibling = sibling.sibling;
          tmp = tmp10;
          if (null === sibling) {
            break;
          }
        }
      }
      let tmp13 = commitHookPassiveUnmountEffects;
      let tmp14 = commitHookPassiveUnmountEffects(sibling, sibling.return, 8);
      let tmp15 = recursivelyTraverseDisconnectPassiveEffects;
      let tmp16 = recursivelyTraverseDisconnectPassiveEffects(sibling);
      tmp10 = tmp;
    }
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(arg0, arg1) {
  let _return;
  let sibling;
  let tag;
  if (null !== tag) {
    while (true) {
      let tmp3 = tag;
      tag = tag.tag;
      if (0 !== tag) {
        if (11 !== tag) {
          if (15 !== tag) {
            if (23 !== tag) {
              if (22 !== tag) {
                if (24 === tag) {
                  let tmp4 = releaseCache;
                  let tmp5 = releaseCache(tmp3.memoizedState.cache);
                }
              }
            }
            if (null !== tmp3.memoizedState) {
              if (null !== tmp3.memoizedState.cachePool) {
                let pool = tmp3.memoizedState.cachePool.pool;
                if (null != pool) {
                  pool.refCount = pool.refCount + 1;
                }
              }
            }
          }
          let child = tmp3.child;
          if (null !== child) {
            child.return = tmp3;
            tag = child;
            let tmp9 = tmp;
            let tmp10 = tmp2;
          } else {
            let tmp8 = tag;
            tmp9 = tmp;
            tmp10 = tmp2;
            if (null !== tag) {
              let tmp11 = tag;
              ({ sibling, return: _return } = tag);
              let tmp12 = detachFiberAfterEffects;
              let tmp13 = detachFiberAfterEffects(tag);
              while (tag !== arg0) {
                if (null !== sibling) {
                  sibling.return = _return;
                  tag = sibling;
                  tmp9 = sibling;
                  tmp10 = _return;
                } else {
                  tag = _return;
                  tmp9 = sibling;
                  tmp10 = _return;
                }
                continue;
              }
              tag = null;
              tmp9 = sibling;
              tmp10 = _return;
            }
          }
          let tmp14 = tag;
          let tmp = tmp9;
          let tmp2 = tmp10;
          if (null === tag) {
            break;
          }
        }
      }
      let tmp6 = commitHookPassiveUnmountEffects;
      let tmp7 = commitHookPassiveUnmountEffects(tmp3, arg1, 8);
    }
  }
}
function requestUpdateLane(mode) {
  if (!(1 & mode.mode)) {
    return 2;
  } else {
    if (!(2 & closure_154)) {
      if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
        let tmp6 = closure_100;
        if (0 === closure_100) {
          tmp6 = requestTransitionLane();
        }
        let num2 = tmp6;
      } else {
        num2 = 32;
        if (0 !== closure_70) {
          num2 = closure_70;
        }
      }
    }
    num2 = closure_157 & -closure_157;
  }
}
function requestDeferredLane() {
  if (0 === closure_168) {
    let num = 536870912;
    if (!(536870912 & closure_157)) {
      num = claimNextTransitionLane();
    }
    closure_168 = num;
  }
  const current = closure_135.current;
  if (null !== current) {
    current.flags = current.flags | 32;
  }
  return closure_168;
}
function scheduleUpdateOnFiber(cancelPendingCommit, mode) {
  let tmp = cancelPendingCommit !== closure_155;
  if (!tmp) {
    let tmp3 = 2 !== closure_158;
    if (tmp3) {
      tmp3 = 9 !== closure_158;
    }
    tmp = tmp3;
  }
  if (tmp) {
    tmp = null === cancelPendingCommit.cancelPendingCommit;
  }
  if (!tmp) {
    prepareFreshStack(cancelPendingCommit, 0);
    markRootSuspended(cancelPendingCommit, closure_157, closure_168, false);
  }
  markRootUpdated$1(cancelPendingCommit, arg2);
  let tmp14 = 2 & closure_154;
  if (tmp14) {
    tmp14 = cancelPendingCommit === closure_155;
  }
  if (!tmp14) {
    if (closure_60) {
      addFiberToLanesMap(cancelPendingCommit, mode, arg2);
    }
    if (cancelPendingCommit === closure_155) {
      if (!(2 & closure_154)) {
        closure_166 = closure_166 | arg2;
      }
      if (4 === closure_164) {
        markRootSuspended(cancelPendingCommit, closure_157, closure_168, false);
      }
    }
    ensureRootIsScheduled(cancelPendingCommit);
    let tmp30 = 2 === arg2;
    if (tmp30) {
      tmp30 = 0 === closure_154;
    }
    if (tmp30) {
      tmp30 = !(1 & mode.mode);
    }
    if (tmp30) {
      let closure_174 = require(dependencyMap[3]).unstable_now() + 500;
      flushSyncWorkAcrossRoots_impl(0, true);
      const obj = require(dependencyMap[3]);
    }
  }
}
function performWorkOnRoot(expiredLanes) {
  if (6 & closure_154) {
    const _Error = Error;
    throw Error("Should not already be working.");
  } else {
    let tmp2 = !arg2;
    if (tmp2) {
      tmp2 = !(124 & arg1);
    }
    if (tmp2) {
      tmp2 = !(arg1 & expiredLanes.expiredLanes);
    }
    if (!tmp2) {
      tmp2 = checkIfRootIsPrerendering(expiredLanes, arg1);
    }
    if (tmp2) {
      function renderRootConcurrent(expiredLanes, arg1) {
        closure_154 = closure_154 | 2;
        callback5();
        callback6();
        if (closure_155 === expiredLanes) {
          if (closure_157 === arg1) {
            let closure_161 = callback2(tmp, arg1);
          }
          callback(arg1);
        }
        if (closure_60) {
          const memoizedUpdaters = tmp.memoizedUpdaters;
          if (0 < memoizedUpdaters.size) {
            callback7(tmp, closure_157);
            obj.clear();
          }
          callback3(tmp, arg1);
          const obj = memoizedUpdaters;
        }
        let closure_175 = null;
        let closure_174 = expiredLanes(closure_1[3]).unstable_now() + 500;
        callback4(expiredLanes, arg1);
      }(expiredLanes, arg1);
    } else {
      renderRootSync(expiredLanes, arg1, true);
    }
  }
}
function commitRootWhenReady(arg0, subtreeFlags) {
  arg0.timeoutHandle = -1;
  subtreeFlags = subtreeFlags.subtreeFlags;
  let tmp = 8192 & subtreeFlags;
  if (!tmp) {
    tmp = !(16785408 & ~subtreeFlags);
  }
  if (tmp) {
    accumulateSuspenseyCommitOnFiber(subtreeFlags);
  }
  function commitRoot(arg0, lanes, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
    let elementType;
    let memoizedProps;
    let memoizedState;
    let type;
    const tmp2 = arg0;
    arg0.cancelPendingCommit = null;
    do {
      let tmp3 = closure_494;
      let tmp4 = closure_494();
      let tmp5 = closure_177;
    } while (0 !== closure_177);
    if (6 & tmp43) {
      const _Error3 = Error;
      throw Error("Should not already be working.");
    } else {
      let tmp7 = null !== closure_59;
      if (tmp7) {
        tmp7 = "function" === typeof closure_59.markCommitStarted;
      }
      if (tmp7) {
        closure_59.markCommitStarted(arg2);
      }
      if (null === lanes) {
        callback2();
      } else if (lanes === tmp2.current) {
        const _Error2 = Error;
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      } else {
        const tmp80 = lanes.lanes | lanes.childLanes | closure_112;
        const pendingLanes = tmp2.pendingLanes;
        tmp2.pendingLanes = tmp80;
        tmp2.suspendedLanes = 0;
        tmp2.pingedLanes = 0;
        tmp2.warmLanes = 0;
        tmp2.expiredLanes = tmp2.expiredLanes & tmp80;
        tmp2.entangledLanes = tmp2.entangledLanes & tmp80;
        tmp2.errorRecoveryDisabledLanes = tmp2.errorRecoveryDisabledLanes & tmp80;
        tmp2.shellSuspendCounter = 0;
        const hiddenUpdates = tmp2.hiddenUpdates;
        let tmp17 = pendingLanes & ~tmp80;
        if (0 < tmp17) {
          do {
            let tmp12 = closure_61;
            let diff = 31 - closure_61(tmp17);
            tmp82[diff] = 0;
            tmp83[diff] = -1;
            let arr = hiddenUpdates[diff];
            let tmp14 = tmp17;
            let tmp15 = tmp18;
            if (null !== arr) {
              hiddenUpdates[diff] = null;
              let num = 0;
              tmp15 = tmp18;
              if (0 < arr.length) {
                do {
                  let tmp16 = arr[num];
                  if (null !== tmp16) {
                    tmp16.lane = tmp16.lane & -536870913;
                  }
                  num = num + 1;
                  tmp15 = tmp16;
                } while (num < arr.length);
              }
            }
            tmp17 = tmp17 & ~1 << diff;
            let tmp18 = tmp15;
          } while (0 < tmp17);
        }
        if (0 !== arg6) {
          callback3(tmp2, arg6, 0);
        }
        let tmp21 = 0 !== arg8;
        if (tmp21) {
          tmp21 = 0 === arg7;
        }
        if (tmp21) {
          tmp2.suspendedLanes = tmp2.suspendedLanes | arg8 & ~pendingLanes & ~arg2;
        }
        if (tmp2 === closure_155) {
          closure_155 = null;
          let closure_156 = null;
          let closure_157 = 0;
        }
        if (!(10256 & lanes.subtreeFlags)) {
          if (!(10256 & lanes.flags)) {
            tmp2.callbackNode = null;
            tmp2.callbackPriority = 0;
          }
          let closure_87 = callback(closure_1[3]).unstable_now();
          if (13878 & lanes.subtreeFlags) {
            const T = constants.T;
            constants.T = null;
            const tmp41 = 2;
            const tmp43 = tmp43 | 4;
            let _return = lanes;
            if (null !== lanes) {
              while (true) {
                let tmp46 = _return;
                let tmp47 = _return;
                let child = _return.child;
                if (1024 & _return.subtreeFlags) {
                  let tmp48 = child;
                  if (null !== child) {
                    let tmp58 = child;
                    let tmp59 = tmp46;
                    child.return = tmp47;
                    _return = child;
                    let tmp60 = _return;
                  }
                }
                let tmp49 = _return;
                if (null !== _return) {
                  while (true) {
                    let tmp50 = child;
                    if (1024 & child) {
                      let tmp51 = memoizedState;
                      if (null !== memoizedState) {
                        let tmp84 = tmp46;
                        let tmp85 = tmp47;
                        let tmp86 = memoizedState;
                        ({ memoizedProps, memoizedState } = memoizedState);
                        let stateNode = tmp47.stateNode;
                        let tmp87 = callback4;
                        let tmp88 = tmp46;
                        let tmp89 = memoizedProps;
                        ({ elementType, type } = tmp47);
                        let tmp90 = stateNode;
                        let tmp91 = memoizedState;
                        let snapshotBeforeUpdate = stateNode.getSnapshotBeforeUpdate(callback4(tmp47.type, memoizedProps, undefined), memoizedState);
                        let tmp93 = snapshotBeforeUpdate;
                        stateNode.__reactInternalSnapshotBeforeUpdate = snapshotBeforeUpdate;
                      }
                    }
                    while (true) {
                      let tmp52 = tmp46;
                      let sibling = tmp47.sibling;
                      child = sibling;
                      if (null !== sibling) {
                        let tmp54 = child;
                        let tmp55 = tmp46;
                        child.return = tmp47.return;
                        _return = child;
                      } else {
                        let tmp53 = tmp46;
                        _return = tmp47.return;
                      }
                      continue label1;
                    }
                  }
                  let tmp56 = globalThis;
                  let _Error = Error;
                  let str2 = "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.";
                  let ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
            constants.T = T;
            const tmp42 = tmp43;
          }
          let closure_177 = 1;
          callback5();
          callback6();
          callback7();
          const obj2 = callback(closure_1[3]);
        }
        tmp2.callbackNode = null;
        tmp2.callbackPriority = 0;
        const result = callback(closure_1[3]).unstable_scheduleCallback(callback(closure_1[3]).unstable_NormalPriority, () => {
          callback();
          return null;
        });
        const obj = callback(closure_1[3]);
      }
    }
  }(arg0, subtreeFlags, arg5, arg2, arg3, undefined, arg6, arg7, arg8);
}
function isRenderConsistentWithExternalStores(arg0) {
  let getSnapshot;
  let sibling;
  let value;
  sibling = arg0;
  while (true) {
    let tag = sibling.tag;
    let tmp = tag;
    if (0 !== tag) {
      let tmp3 = tag;
      if (11 !== tmp) {
        let tmp4 = tag;
      }
      let child = sibling.child;
      if (16384 & sibling.subtreeFlags) {
        let tmp18 = child;
        if (null !== child) {
          sibling = child;
          child.return = tmp2;
          // continue
        }
      }
      if (sibling === arg0) {
        let flag3 = true;
        return true;
      } else {
        let tmp19 = sibling;
        let tmp20 = sibling;
        if (null === sibling.sibling) {
          while (null !== tmp19.return) {
            if (tmp19.return === arg0) {
              break;
            } else {
              let _return = tmp19.return;
              tmp19 = _return;
              tmp20 = _return;
              continue;
            }
          }
          let flag2 = true;
          return true;
        }
        ({ return: tmp20.sibling.return, sibling } = tmp20);
        // continue
      }
    }
    if (16384 & sibling.flags) {
      let updateQueue = sibling.updateQueue;
      if (null !== updateQueue) {
        let tmp6 = updateQueue;
        let stores = tmp5.stores;
        let arr = stores;
        if (null !== stores) {
          let num = 0;
          let tmp7 = stores;
          if (0 < arr.length) {
            let tmp8 = stores;
            let tmp9 = num;
            let tmp10 = arr[num];
            let tmp11 = tmp10;
            ({ getSnapshot, value } = tmp10);
            let tmp12 = is;
            let tmp13 = getSnapshot;
            let tmp14 = value;
            while (is(getSnapshot(), value)) {
              let tmp15 = num;
              let sum = num + 1;
              num = sum;
              let tmp17 = stores;
              continue;
            }
            let flag = false;
            return false;
          }
        }
      }
    }
  }
}
function markRootSuspended(suspendedLanes) {
  suspendedLanes.suspendedLanes = suspendedLanes.suspendedLanes | arg1 & ~closure_167 & ~closure_166;
  suspendedLanes.pingedLanes = suspendedLanes.pingedLanes & ~arg1 & ~closure_167 & ~closure_166;
  if (arg3) {
    suspendedLanes.warmLanes = suspendedLanes.warmLanes | tmp;
  }
  let tmp3 = tmp;
  if (0 < (arg1 & ~closure_167 & ~closure_166)) {
    do {
      let tmp4 = closure_61;
      let diff = 31 - closure_61(tmp3);
      tmp2[diff] = -1;
      tmp3 = tmp3 & ~1 << diff;
    } while (0 < tmp3);
  }
  if (0 !== arg2) {
    markSpawnedDeferredLane(suspendedLanes, arg2, tmp);
  }
}
function resetWorkInProgressStack() {
  if (null !== _return) {
    if (0 === closure_158) {
      let _return = _return.return;
    } else {
      let closure_83 = null;
      let closure_84 = null;
      resetHooksOnUnwind(_return);
      let closure_131 = null;
      let closure_132 = 0;
    }
    if (null !== _return) {
      do {
        let tmp6 = closure_428;
        let tmp7 = closure_428(_return.alternate, _return);
        _return = _return.return;
      } while (null !== _return);
    }
    _return = null;
  }
}
function prepareFreshStack(timeoutHandle) {
  timeoutHandle = timeoutHandle.timeoutHandle;
  if (-1 !== timeoutHandle) {
    timeoutHandle.timeoutHandle = -1;
    clearTimeout(timeoutHandle);
  }
  const cancelPendingCommit = timeoutHandle.cancelPendingCommit;
  if (null !== cancelPendingCommit) {
    timeoutHandle.cancelPendingCommit = null;
    cancelPendingCommit();
  }
  resetWorkInProgressStack();
  let closure_155 = timeoutHandle;
  const tmp5 = createWorkInProgress(timeoutHandle.current, null);
  let closure_156 = tmp5;
  let closure_157 = arg1;
  let closure_158 = 0;
  let closure_159 = null;
  let closure_160 = false;
  let closure_161 = checkIfRootIsPrerendering(timeoutHandle, arg1);
  let closure_162 = false;
  let closure_164 = 0;
  let closure_165 = 0;
  let closure_166 = 0;
  let closure_167 = 0;
  let closure_168 = 0;
  let closure_169 = 0;
  let closure_170 = null;
  let closure_171 = null;
  let closure_172 = false;
  let tmp6 = arg1;
  if (8 & arg1) {
    tmp6 = arg1 | 32 & arg1;
  }
  const entangledLanes = timeoutHandle.entangledLanes;
  let tmp7 = tmp6;
  if (0 !== entangledLanes) {
    let tmp9 = entangledLanes & tmp6;
    let tmp10 = tmp6;
    tmp7 = tmp6;
    if (0 < tmp9) {
      do {
        let tmp11 = closure_61;
        let diff = 31 - closure_61(tmp9);
        tmp10 = tmp10 | tmp8[diff];
        tmp9 = tmp9 & ~1 << diff;
        tmp7 = tmp10;
      } while (0 < tmp9);
    }
  }
  let closure_163 = tmp7;
  finishQueueingConcurrentUpdates();
  return tmp5;
}
function handleThrow(current) {
  let promise = arg1;
  let closure_118 = null;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = closure_127;
  if (arg1 !== closure_105) {
    if (promise !== closure_107) {
      if (promise === closure_106) {
        promise = getSuspendedThenable();
        let closure_158 = 4;
      } else {
        let num = 8;
        if (promise !== closure_140) {
          let num3 = 1;
          if (null !== promise) {
            num3 = 1;
            if ("object" === typeof promise) {
              num3 = 1;
              if ("function" === typeof promise.then) {
                num3 = 6;
              }
            }
          }
          num = num3;
        }
        closure_158 = num;
      }
    }
    let closure_159 = promise;
    if (null === closure_156) {
      let closure_164 = 1;
      logUncaughtError(current, createCapturedValueAtFiber(promise, current.current));
    } else {
      if (2 & tmp5.mode) {
        stopProfilerTimerIfRunningAndRecordDuration(tmp5);
      }
      markComponentRenderStopped();
      if (1 === closure_158) {
        let tmp18 = null !== _null;
        if (tmp18) {
          tmp18 = "function" === typeof _null.markComponentErrored;
        }
        if (tmp18) {
          _null.markComponentErrored(tmp5, promise, closure_157);
        }
      } else {
        let tmp12 = null !== _null;
        if (tmp12) {
          tmp12 = "function" === typeof _null.markComponentSuspended;
        }
        if (tmp12) {
          const result = _null.markComponentSuspended(tmp5, promise, closure_157);
        }
      }
    }
  }
  promise = getSuspendedThenable();
  closure_158 = 3;
}
function pushDispatcher() {
  let H = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = closure_127;
  if (null === H) {
    H = closure_127;
  }
  return H;
}
function pushAsyncDispatcher() {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = closure_152;
  return __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
}
function renderDidSuspendDelayIfPossible() {
  let closure_164 = 4;
  let tmp = closure_160;
  if (!closure_160) {
    let tmp4 = (4194048 & closure_157) !== closure_157;
    if (tmp4) {
      tmp4 = null !== closure_135.current;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    let closure_161 = true;
  }
  let tmp8 = !tmp7;
  if (!(134217727 & closure_165)) {
    tmp8 = !(134217727 & closure_166);
  }
  if (!tmp8) {
    tmp8 = null === closure_155;
  }
  if (!tmp8) {
    markRootSuspended(closure_155, closure_157, closure_168, false);
  }
}
function renderRootSync(memoizedUpdaters) {
  let closure_155;
  let closure_157;
  closure_154 = closure_154 | 2;
  const tmp4 = pushDispatcher();
  const tmp5 = pushAsyncDispatcher();
  if (closure_155 !== memoizedUpdaters) {
    if (closure_60) {
      memoizedUpdaters = tmp.memoizedUpdaters;
      if (0 < memoizedUpdaters.size) {
        restorePendingUpdaters(tmp, closure_157);
        obj.clear();
      }
      movePendingFibersToMemoized(tmp, arg1);
      const obj = memoizedUpdaters;
    }
    let closure_175 = null;
    prepareFreshStack(tmp, arg1);
  }
  markRenderStarted(arg1);
  let flag = false;
  while (true) {
    let tmp26 = closure_158;
    let num2 = 0;
    if (0 === closure_158) {
      break;
    } else {
      let tmp60 = closure_156;
      let tmp61 = null;
      if (null === closure_156) {
        break;
      } else {
        let tmp62 = closure_156;
        let tmp63 = closure_159;
        let tmp64 = closure_158;
        let num6 = 8;
        if (8 === closure_158) {
          let tmp44 = resetWorkInProgressStack;
          let tmp45 = resetWorkInProgressStack();
          let num5 = 6;
        } else {
          let num7 = 3;
          if (3 !== tmp64) {
            if (2 !== tmp64) {
              let num3 = 9;
              if (9 !== tmp64) {
                let num4 = 6;
                if (6 !== tmp64) {
                  let tmp27 = closure_158;
                  closure_158 = 0;
                  closure_159 = null;
                  let tmp28 = throwAndUnwindWorkLoop;
                  let tmp29 = memoizedUpdaters;
                  let tmp30 = tmp62;
                  let tmp31 = tmp63;
                  let tmp32 = throwAndUnwindWorkLoop(tmp, tmp62, tmp63, closure_158);
                  // break
                }
                break;
              }
            }
          }
          let tmp33 = closure_135;
          if (null === closure_135.current) {
            flag = true;
          }
          let tmp34 = closure_158;
          closure_158 = 0;
          closure_159 = null;
          let tmp35 = throwAndUnwindWorkLoop;
          let tmp36 = memoizedUpdaters;
          let tmp37 = tmp62;
          let tmp38 = tmp63;
          let tmp39 = throwAndUnwindWorkLoop(tmp, tmp62, tmp63, closure_158);
          let tmp40 = arg2;
          if (!arg2) {
            break;
          } else {
            let tmp41 = closure_161;
            if (!closure_161) {
              break;
            } else {
              num5 = 0;
            }
          }
        }
        let tmp46 = flag;
        if (flag) {
          let tmp47 = memoizedUpdaters;
          tmp.shellSuspendCounter = tmp.shellSuspendCounter + 1;
        }
        let tmp48 = null;
        let closure_83 = null;
        let closure_84 = null;
        let tmp49 = closure_154;
        let tmp50 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let tmp51 = tmp4;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp4;
        let tmp52 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let tmp53 = tmp5;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = tmp5;
        let tmp54 = markRenderStopped;
        let tmp55 = markRenderStopped();
        let tmp56 = closure_156;
        if (null === closure_156) {
          closure_155 = null;
          closure_157 = 0;
          let tmp57 = finishQueueingConcurrentUpdates;
          let tmp58 = finishQueueingConcurrentUpdates();
        }
        let tmp59 = num5;
        return num5;
      }
    }
    let tmp42 = workLoopSync;
    let tmp43 = workLoopSync();
    num5 = closure_164;
  }
}
function workLoopSync() {
  if (null !== closure_156) {
    do {
      let tmp = closure_485;
      let tmp2 = closure_156;
      let tmp3 = closure_485(closure_156);
      let tmp4 = closure_156;
    } while (null !== closure_156);
  }
}
function workLoopConcurrentByScheduler() {
  if (null !== closure_156) {
    if (!obj.unstable_shouldYield()) {
      performUnitOfWork(closure_156);
      while (null !== closure_156) {
        let tmp7 = require;
        let tmp8 = dependencyMap;
        let obj2 = require(dependencyMap[3]);
        if (obj2.unstable_shouldYield()) {
          break;
        }
      }
    }
    const obj = require(dependencyMap[3]);
  }
}
function performUnitOfWork(alternate) {
  alternate = alternate.alternate;
  if (2 & alternate.mode) {
    startProfilerTimer(alternate);
    let tmp3 = beginWork(alternate, alternate, closure_163);
    stopProfilerTimerIfRunningAndRecordDuration(alternate);
  } else {
    tmp3 = beginWork(alternate, alternate, closure_163);
  }
  alternate.memoizedProps = alternate.pendingProps;
  if (null === tmp3) {
    completeUnitOfWork(alternate);
  } else {
    let closure_156 = tmp3;
  }
}
function replaySuspendedUnitOfWork(alternate) {
  alternate = alternate.alternate;
  if (2 & alternate.mode) {
    startProfilerTimer(alternate);
  }
  const tag = alternate.tag;
  if (15 !== tag) {
    if (0 !== tag) {
      if (11 === tag) {
        let tmp13 = replayFunctionComponent(alternate, alternate, alternate.pendingProps, alternate.type.render, alternate.ref, closure_157);
      } else {
        if (5 === tag) {
          resetHooksOnUnwind(alternate);
        }
        unwindInterruptedWork(alternate, alternate);
        resetWorkInProgress(alternate, closure_163);
        let closure_156 = alternate;
        tmp13 = beginWork(alternate, alternate, closure_163);
      }
    }
    if (tmp) {
      stopProfilerTimerIfRunningAndRecordDuration(alternate);
    }
    alternate.memoizedProps = alternate.pendingProps;
    if (null === tmp13) {
      completeUnitOfWork(alternate);
    } else {
      closure_156 = tmp13;
    }
  }
  tmp13 = replayFunctionComponent(alternate, alternate, alternate.pendingProps, alternate.type, undefined, closure_157);
}
function throwAndUnwindWorkLoop(tag, arg1) {
  let stateNode;
  let type;
  let tmp = arg1;
  let closure_83 = null;
  let closure_84 = null;
  resetHooksOnUnwind(arg1);
  let closure_131 = null;
  let closure_132 = 0;
  const _return = arg1.return;
  arg1.flags = arg1.flags | 32768;
  if (closure_60) {
    restorePendingUpdaters(tag, tmp5);
  }
  let ErrorResult = arg2;
  if (null !== arg2) {
    ErrorResult = arg2;
    if ("object" === typeof arg2) {
      ErrorResult = arg2;
      if ("function" === typeof arg2.then) {
        if (null !== tmp.alternate) {
          propagateParentContextChanges(undefined, arg1, tmp5, true);
        }
        tag = tmp.tag;
        let tmp13 = 1 & tmp.mode;
        if (!tmp13) {
          let tmp14 = 0 !== tag;
          if (tmp14) {
            tmp14 = 11 !== tag;
          }
          if (tmp14) {
            tmp14 = 15 !== tag;
          }
          tmp13 = tmp14;
        }
        if (!tmp13) {
          const alternate = tmp.alternate;
          if (alternate) {
            ({ updateQueue: tmp.updateQueue, memoizedState: tmp.memoizedState, lanes: tmp.lanes } = alternate);
          } else {
            tmp.updateQueue = null;
            tmp.memoizedState = null;
          }
        }
        const current = closure_135.current;
        if (null !== current) {
          const tag3 = current.tag;
          if (13 === tag3) {
            if (1 & tmp.mode) {
              if (null === closure_136) {
                renderDidSuspendDelayIfPossible();
              } else {
                let tmp62 = null === current.alternate;
                if (tmp62) {
                  tmp62 = 0 === closure_164;
                }
                if (tmp62) {
                  closure_164 = 3;
                }
              }
            }
            current.flags = current.flags & -257;
            if (1 & current.mode) {
              current.flags = current.flags | 65536;
              current.lanes = tmp5;
            } else if (current === _return) {
              current.flags = current.flags | 65536;
            } else {
              current.flags = current.flags | 128;
              tmp.flags = tmp.flags | 131072;
              tmp.flags = tmp.flags & -52805;
              if (1 === tmp.tag) {
                if (null === tmp.alternate) {
                  tmp.tag = 17;
                } else {
                  const tmp68 = createUpdate(2);
                  tmp68.tag = 2;
                  enqueueUpdate(tmp, tmp68, 2);
                }
              } else {
                if (tmp66) {
                  tmp.tag = 28;
                }
                const tmp66 = 0 === tmp.tag && null === tmp.alternate;
              }
              tmp.lanes = tmp.lanes | 2;
            }
            if (arg2 === closure_108) {
              current.flags = current.flags | 16384;
              let flag2 = false;
            } else {
              const updateQueue = current.updateQueue;
              if (null === updateQueue) {
                const _Set3 = Set;
                const items = [arg2];
                const set = new Set(items);
                current.updateQueue = set;
              } else {
                updateQueue.add(arg2);
              }
              flag2 = false;
              if (1 & current.mode) {
                attachPingListener(tag, arg2, tmp5);
                flag2 = false;
              }
            }
          } else {
            if (22 === tag3) {
              if (1 & current.mode) {
                current.flags = current.flags | 65536;
                if (arg2 === closure_108) {
                  current.flags = current.flags | 16384;
                  flag2 = false;
                } else {
                  const updateQueue2 = current.updateQueue;
                  if (null === updateQueue2) {
                    let obj = { 9223372036854775807: "o", -9223372036854775808: "o" };
                    const _Set2 = Set;
                    const items1 = [arg2];
                    const set1 = new Set(items1);
                    obj.retryQueue = set1;
                    current.updateQueue = obj;
                  } else {
                    const retryQueue = updateQueue2.retryQueue;
                    if (null === retryQueue) {
                      const _Set = Set;
                      const items2 = [arg2];
                      const set2 = new Set(items2);
                      updateQueue2.retryQueue = set2;
                    } else {
                      retryQueue.add(arg2);
                    }
                  }
                  attachPingListener(tag, arg2, tmp5);
                  flag2 = false;
                }
              }
            }
            const _Error = Error;
            throw Error("Unexpected Suspense handler tag (" + current.tag + "). This is a bug in React.");
          }
        } else if (1 === tag.tag) {
          attachPingListener(tag, arg2, tmp5);
          renderDidSuspendDelayIfPossible();
          flag2 = false;
        } else {
          tmp = globalThis;
          const _Error2 = Error;
          ErrorResult = Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        }
      }
      if (flag2) {
        closure_164 = 1;
        tmp = logUncaughtError;
        tmp = tag;
        tmp = createCapturedValueAtFiber;
        tmp = arg2;
        tmp = logUncaughtError(tag, createCapturedValueAtFiber(arg2, tag.current));
        let closure_156 = null;
      } else if (32768 & tmp.flags) {
        if (1 === arg3) {
          let flag4 = true;
          tmp = unwindUnitOfWork;
          tmp = flag4;
          tmp = unwindUnitOfWork(tmp, flag4);
        } else {
          tmp = closure_161;
          if (!closure_161) {
            if (!(536870912 & closure_157)) {
              flag4 = true;
              let closure_160 = true;
              let tmp89 = tmp88;
              if (2 !== arg3) {
                tmp89 = 9 === arg3;
              }
              let tmp91 = tmp89;
              if (!tmp89) {
                tmp91 = 3 === arg3;
              }
              let tmp93 = tmp91;
              if (!tmp91) {
                tmp93 = 6 === arg3;
              }
              if (tmp93) {
                const current2 = closure_135.current;
                let tmp98 = tmp97;
                if (null !== current2) {
                  tmp98 = 13 === tmp96.tag;
                }
                if (tmp98) {
                  tmp = current2;
                  tmp96.flags = tmp96.flags | 16384;
                }
              }
            }
          }
        }
        flag4 = false;
      } else {
        completeUnitOfWork(tmp);
      }
    }
  }
  obj = { cause: ErrorResult };
  const tmp16 = createCapturedValueAtFiber(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", obj), tmp);
  if (null === arr) {
    const items3 = [tmp16];
    let arr = items3;
  } else {
    arr = arr.push(tmp16);
  }
  if (4 !== closure_164) {
    closure_164 = 2;
  }
  flag2 = true;
  if (null !== _return) {
    tmp = createCapturedValueAtFiber;
    tmp = createCapturedValueAtFiber(ErrorResult, tmp);
    let _return2 = _return;
    const tag2 = _return2.tag;
    while (3 !== tag2) {
      if (1 === tag2) {
        ({ type, stateNode } = _return2);
        tmp = type;
        tmp = stateNode;
        if (!(128 & _return2.flags)) {
          if ("function" === typeof type.getDerivedStateFromError) {
            let num5 = 65536;
            _return2.flags = _return2.flags | 65536;
            let tmp25 = tmp5 & -tmp5;
            _return2.lanes = _return2.lanes | tmp25;
            let tmp26 = initializeClassErrorUpdate;
            let tmp27 = createClassErrorUpdate;
            let tmp28 = createClassErrorUpdate(tmp25);
            let tmp29 = tmp28;
            let tmp30 = tag;
            let tmp31 = _return2;
            let tmp32 = tmp;
            let tmp33 = initializeClassErrorUpdate(tmp28, tag, tmp19, tmp);
            let tmp34 = enqueueCapturedUpdate;
            let tmp35 = enqueueCapturedUpdate(_return2, tmp28);
            flag2 = false;
          } else {
            let tmp20 = type;
            let tmp21 = stateNode;
            if (null !== stateNode) {
              tmp = type;
              tmp = stateNode;
              if ("function" === typeof stateNode.componentDidCatch) {
                tmp = set;
                if (null !== set) {
                  let tmp22 = set;
                  let tmp23 = type;
                  let tmp24 = stateNode;
                }
              }
            }
          }
        }
      }
      _return2 = _return2.return;
      flag2 = false;
    }
    _return2.flags = _return2.flags | 65536;
    _return2.lanes = _return2.lanes | tmp5 & -tmp5;
    enqueueCapturedUpdate(_return2, createRootErrorUpdate(_return2.stateNode, tmp, tmp5 & -tmp5));
    flag2 = false;
  }
}
function completeUnitOfWork(arg0) {
  let _return;
  let alternate;
  _return = arg0;
  while (!(32768 & _return.flags)) {
    ({ alternate, return: _return } = _return);
    let tmp2 = startProfilerTimer;
    let tmp3 = startProfilerTimer(tmp);
    let tmp4 = completeWork;
    let tmp5 = closure_163;
    let tmp6 = completeWork(alternate, tmp, closure_163);
    if (2 & tmp.mode) {
      let tmp7 = stopProfilerTimerIfRunningAndRecordIncompleteDuration;
      let tmp8 = stopProfilerTimerIfRunningAndRecordIncompleteDuration(tmp);
    }
    if (null !== tmp6) {
      let closure_156 = tmp6;
    } else {
      let sibling = tmp.sibling;
      if (null !== sibling) {
        closure_156 = sibling;
      } else {
        closure_156 = _return;
        if (null !== _return) {
          continue;
        } else {
          let tmp9 = closure_164;
          let num = 0;
          if (0 === closure_164) {
            let num2 = 5;
            closure_164 = 5;
          }
        }
      }
    }
  }
  unwindUnitOfWork(_return, closure_160);
}
function unwindUnitOfWork(_return) {
  let actualDuration;
  let child;
  const tmp = unwindWork(_return.alternate, _return);
  while (null === tmp) {
    if (2 & _return.mode) {
      let tmp3 = stopProfilerTimerIfRunningAndRecordIncompleteDuration;
      let tmp4 = stopProfilerTimerIfRunningAndRecordIncompleteDuration(_return);
      ({ actualDuration, child } = _return);
      let tmp5 = actualDuration;
      let tmp6 = child;
      if (null !== child) {
        do {
          actualDuration = actualDuration + child.actualDuration;
          child = child.sibling;
          tmp5 = actualDuration;
          tmp6 = child;
        } while (null !== child);
      }
      _return.actualDuration = tmp5;
      let tmp7 = tmp6;
    }
    _return = _return.return;
    let tmp8 = null !== _return;
    if (tmp8) {
      _return.flags = _return.flags | 32768;
      _return.subtreeFlags = 0;
      _return.deletions = null;
    }
    if (!arg1) {
      let sibling = tmp2.sibling;
      if (null !== sibling) {
        let closure_156 = sibling;
      }
    }
    closure_156 = _return;
    if (tmp8) {
      continue;
    } else {
      let num = 6;
      let closure_164 = 6;
      closure_156 = null;
    }
  }
  tmp.flags = tmp.flags & 32767;
  closure_156 = tmp;
}
function flushMutationEffects() {
  if (1 === closure_177) {
    closure_177 = 0;
    if (13878 & _null6.subtreeFlags) {
      const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      let closure_70 = 2;
      closure_154 = closure_154 | 4;
      let closure_147 = tmp19;
      let closure_148 = tmp16;
      commitMutationEffectsOnFiber(tmp18, tmp16);
      closure_147 = null;
      closure_148 = null;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    }
    closure_178.current = _null6;
    closure_177 = 2;
  }
}
function flushLayoutEffects() {
  if (2 === closure_177) {
    closure_177 = 0;
    if (8772 & _null6.subtreeFlags) {
      const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      let closure_70 = 2;
      closure_154 = closure_154 | 4;
      let tmp10 = tmp9;
      if (null !== _null) {
        tmp10 = "function" === typeof _null.markLayoutEffectsStarted;
      }
      if (tmp10) {
        const result = _null.markLayoutEffectsStarted(tmp32);
      }
      let closure_147 = tmp32;
      let closure_148 = tmp29;
      commitLayoutEffectOnFiber(tmp29, tmp31.alternate, tmp31);
      closure_147 = null;
      closure_148 = null;
      let tmp21 = tmp20;
      if (null !== _null) {
        tmp21 = "function" === typeof _null.markLayoutEffectsStopped;
      }
      if (tmp21) {
        const result1 = _null.markLayoutEffectsStopped();
      }
      closure_70 = tmp5;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      const tmp6 = closure_154;
      const tmp7 = closure_154;
    }
    closure_177 = 3;
  }
}
function flushSpawnedWork() {
  let closure_177 = 0;
  let obj = require(dependencyMap[3]);
  const result = obj.unstable_requestPaint();
  let tmp3 = closure_178;
  if (!(10256 & _null6.subtreeFlags)) {
    if (!(10256 & tmp5.flags)) {
      closure_177 = 0;
      closure_178 = null;
      const _null6 = null;
      releaseRootPooledCache(tmp3, tmp3.pendingLanes);
    }
    const pendingLanes = tmp3.pendingLanes;
    if (0 === pendingLanes) {
      let closure_176 = null;
    }
    const tmp16 = lanesToEventPriority(tmp6);
    const stateNode = tmp5.stateNode;
    if (__REACT_DEVTOOLS_GLOBAL_HOOK__4) {
      if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__4.onCommitFiberRoot) {
        if (2 === tmp16) {
          let unstable_NormalPriority = require(dependencyMap[3]).unstable_ImmediatePriority;
        } else if (8 === tmp16) {
          unstable_NormalPriority = require(dependencyMap[3]).unstable_UserBlockingPriority;
        } else {
          if (32 !== tmp16) {
            if (268435456 === tmp16) {
              unstable_NormalPriority = require(dependencyMap[3]).unstable_IdlePriority;
            }
          }
          unstable_NormalPriority = require(dependencyMap[3]).unstable_NormalPriority;
        }
        __REACT_DEVTOOLS_GLOBAL_HOOK__4.onCommitFiberRoot(closure_57, stateNode, unstable_NormalPriority, !(128 & ~stateNode.current.flags));
      }
    }
    while (true) {
      let tmp35 = closure_60;
      if (!closure_60) {
        break;
      } else {
        let tmp36 = tmp3;
        let memoizedUpdaters = tmp3.memoizedUpdaters;
        let clearResult = memoizedUpdaters.clear();
        // break
      }
      let tmp38 = arr;
      let tmp39 = null;
      if (null !== arr) {
        let tmp66 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        let tmp67 = closure_70;
        let num10 = 2;
        closure_70 = 2;
        let tmp68 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        let tmp69 = tmp3;
        let onRecoverableError = tmp3.onRecoverableError;
        let num5 = 0;
        let tmp70 = arr;
        if (0 < arr.length) {
          do {
            let tmp40 = arr;
            let tmp41 = num5;
            let iter = arr[num5];
            let tmp42 = onRecoverableError;
            obj = { componentStack: iter.stack };
            let onRecoverableErrorResult = onRecoverableError(iter.value, obj);
            let sum = num5 + 1;
            num5 = sum;
            let length = arr.length;
          } while (sum < length);
        }
        let tmp45 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let tmp46 = T;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
        let tmp47 = tmp67;
        closure_70 = tmp67;
      }
      let tmp48 = closure_180;
      let tmp49 = 3 & closure_180;
      if (tmp49) {
        let tmp50 = tmp3;
        tmp49 = 0 !== tmp3.tag;
      }
      if (tmp49) {
        let tmp51 = flushPendingEffects;
        let tmp52 = flushPendingEffects();
      }
      let tmp53 = ensureRootIsScheduled;
      let tmp54 = tmp3;
      let tmp55 = ensureRootIsScheduled(tmp3);
      let pendingLanes2 = tmp3.pendingLanes;
      let num6 = 4194090;
      if (!(4194090 & tmp6)) {
        let closure_184 = 0;
        let tmp60 = flushSyncWorkAcrossRoots_impl;
        let flag2 = false;
        let tmp61 = flushSyncWorkAcrossRoots_impl(0, false);
        let tmp62 = markCommitStopped;
        tmp3 = markCommitStopped();
      } else {
        let tmp56 = pendingLanes2;
        let num7 = 42;
      }
      let flag = true;
      let closure_91 = true;
      let tmp57 = tmp3;
      let tmp58 = closure_185;
      if (tmp3 === closure_185) {
        let tmp59 = closure_184;
        closure_184 = closure_184 + 1;
      } else {
        closure_184 = 0;
        closure_185 = tmp3;
      }
    }
  }
  closure_177 = 5;
}
function releaseRootPooledCache(pooledCacheLanes) {
  pooledCacheLanes.pooledCacheLanes = pooledCacheLanes.pooledCacheLanes & arg1;
  if (0 == (pooledCacheLanes.pooledCacheLanes & arg1)) {
    const pooledCache = pooledCacheLanes.pooledCache;
    if (null != pooledCache) {
      pooledCacheLanes.pooledCache = null;
      releaseCache(pooledCache);
    }
  }
}
function flushPendingEffects(arg0) {
  flushMutationEffects();
  flushLayoutEffects();
  flushSpawnedWork();
  return flushPassiveEffects();
}
function flushPassiveEffects() {
  if (5 !== closure_177) {
    return false;
  } else {
    let closure_181 = 0;
    const tmp50 = lanesToEventPriority(closure_180);
    const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    let num = 32;
    if (32 <= tmp50) {
      num = tmp50;
    }
    let closure_70 = num;
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
    let closure_182 = null;
    closure_177 = 0;
    let closure_178 = null;
    let closure_179 = null;
    closure_180 = 0;
    if (6 & closure_154) {
      const _Error = Error;
      throw Error("Cannot flush passive effects while already rendering.");
    } else {
      let tmp9 = tmp8;
      if (null !== _null) {
        tmp9 = "function" === typeof _null.markPassiveEffectsStarted;
      }
      if (tmp9) {
        const result = _null.markPassiveEffectsStarted(tmp5);
      }
      closure_154 = closure_154 | 4;
      commitPassiveUnmountOnFiber(tmp4.current);
      commitPassiveMountOnFiber(tmp4, tmp4.current, tmp5, tmp3);
      let tmp26 = tmp25;
      if (null !== _null) {
        tmp26 = "function" === typeof _null.markPassiveEffectsStopped;
      }
      if (tmp26) {
        const result1 = _null.markPassiveEffectsStopped();
      }
      flushSyncWorkAcrossRoots_impl(0, false);
      if (__REACT_DEVTOOLS_GLOBAL_HOOK__4) {
        if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__4.onPostCommitFiberRoot) {
          const result2 = __REACT_DEVTOOLS_GLOBAL_HOOK__4.onPostCommitFiberRoot(closure_57, tmp4);
        }
      }
      const stateNode = tmp4.current.stateNode;
      stateNode.effectDuration = 0;
      stateNode.passiveEffectDuration = 0;
      closure_70 = tmp52;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      releaseRootPooledCache(tmp46, tmp47);
      const tmp14 = closure_154;
    }
  }
}
function captureCommitPhaseErrorOnRoot(stateNode) {
  const tmp = enqueueUpdate(stateNode, createRootErrorUpdate(stateNode.stateNode, createCapturedValueAtFiber(arg2, arg1), 2), 2);
  if (null !== tmp) {
    markRootUpdated$1(tmp, 2);
    ensureRootIsScheduled(tmp);
  }
}
function captureCommitPhaseError(tag) {
  let _return = arg1;
  if (3 === tag.tag) {
    captureCommitPhaseErrorOnRoot(tag, tag, arg2);
  } else if (null !== _return) {
    while (3 !== _return.tag) {
      if (1 !== _return.tag) {
        _return = _return.return;
      } else {
        let stateNode = _return.stateNode;
        if ("function" !== typeof _return.type.getDerivedStateFromError) {
          let tmp2 = stateNode;
          if ("function" === typeof stateNode.componentDidCatch) {
            let tmp3 = set;
            if (null !== set) {
              let tmp4 = set;
              let tmp5 = stateNode;
            }
          }
        }
        let tmp6 = createCapturedValueAtFiber;
        let tmp7 = createCapturedValueAtFiber(arg2, tag);
        let tmp8 = enqueueUpdate;
        let tmp9 = createClassErrorUpdate;
        let num = 2;
        let tmp10 = createClassErrorUpdate(2);
        let tmp11 = enqueueUpdate(_return, tmp10, 2);
        if (null !== tmp11) {
          let tmp12 = initializeClassErrorUpdate;
          let tmp13 = tmp10;
          let tmp14 = tmp11;
          let tmp15 = _return;
          let tmp16 = tmp7;
          let tmp17 = initializeClassErrorUpdate(tmp10, tmp11, tmp, tmp7);
          let tmp18 = markRootUpdated$1;
          let tmp19 = markRootUpdated$1(tmp11, 2);
          let tmp20 = ensureRootIsScheduled;
          let tmp21 = ensureRootIsScheduled(tmp11);
        }
      }
    }
    captureCommitPhaseErrorOnRoot(_return, tag, arg2);
  }
}
function attachPingListener(pingCache, promise, bindResult1) {
  pingCache = pingCache.pingCache;
  if (null === pingCache) {
    const prototype2 = ctor2.prototype;
    const obj2 = new ctor2();
    pingCache.pingCache = obj2;
    const _Set2 = Set;
    const set = new Set();
    const result = obj2.set(promise, set);
    let value = set;
  } else {
    value = pingCache.get(promise);
    if (undefined === value) {
      const _Set = Set;
      const set1 = new Set();
      const result1 = pingCache.set(promise, set1);
      value = set1;
    }
  }
  if (!value.has(bindResult1)) {
    let closure_162 = true;
    value.add(bindResult1);
    const bindResult = pingSuspendedRoot.bind(null, pingCache, promise, bindResult1);
    if (closure_60) {
      restorePendingUpdaters(pingCache, bindResult1);
    }
    promise.then(bindResult, bindResult);
  }
}
function pingSuspendedRoot(pingCache) {
  pingCache = pingCache.pingCache;
  if (null !== pingCache) {
    pingCache.delete(arg1);
  }
  pingCache.pingedLanes = pingCache.pingedLanes | pingCache.suspendedLanes & arg2;
  pingCache.warmLanes = pingCache.warmLanes & ~arg2;
  let tmp3 = closure_155 === pingCache;
  if (tmp3) {
    tmp3 = (closure_157 & arg2) === arg2;
  }
  if (tmp3) {
    if (4 === closure_164) {
      if (!(2 & closure_154)) {
        prepareFreshStack(pingCache, 0);
      }
    } else {
      if (3 === closure_164) {
        if ((62914560 & closure_157) === closure_157) {
          const obj = require(dependencyMap[3]);
        }
      }
      closure_167 = closure_167 | arg2;
    }
    if (closure_169 === closure_157) {
      closure_169 = 0;
    }
  }
  ensureRootIsScheduled(pingCache);
}
function retryTimedOutBoundary(mode) {
  let tmp = arg1;
  if (0 === arg1) {
    let num2 = 2;
    if (1 & mode.mode) {
      num2 = claimNextRetryLane();
    }
    tmp = num2;
  }
  const tmp3 = enqueueConcurrentRenderForLane(mode, tmp);
  if (null !== tmp3) {
    markRootUpdated$1(tmp3, tmp);
    ensureRootIsScheduled(tmp3);
  }
}
function retryDehydratedSuspenseBoundary(memoizedState) {
  memoizedState = memoizedState.memoizedState;
  let num = 0;
  if (null !== memoizedState) {
    num = memoizedState.retryLane;
  }
  retryTimedOutBoundary(memoizedState, num);
}
function resolveRetryWakeable(tag) {
  let memoizedState;
  let stateNode;
  tag = tag.tag;
  if (13 === tag) {
    ({ stateNode, memoizedState } = tag);
    let num3 = 0;
    let _retryCache = stateNode;
    if (null !== memoizedState) {
      num3 = memoizedState.retryLane;
      _retryCache = stateNode;
    }
  } else if (19 === tag) {
    _retryCache = tag.stateNode;
    num3 = 0;
  } else if (22 === tag) {
    _retryCache = tag.stateNode._retryCache;
    num3 = 0;
  } else {
    const _Error = Error;
    throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
  }
  if (null !== _retryCache) {
    _retryCache.delete(arg1);
  }
  retryTimedOutBoundary(tag, num3);
}
function restorePendingUpdaters(memoizedUpdaters, closure_157) {
  const require = memoizedUpdaters;
  const dependencyMap = closure_157;
  if (closure_60) {
    memoizedUpdaters = memoizedUpdaters.memoizedUpdaters;
    const item = memoizedUpdaters.forEach((arg0) => {
      callback(arg0, arg0, arg1);
    });
  }
}
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;
  this.ref = null;
  this.refCleanup = null;
  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;
  this.mode = mode;
  this.flags = 0;
  this.subtreeFlags = 0;
  this.deletions = null;
  this.lanes = 0;
  this.childLanes = 0;
  this.alternate = null;
  this.actualDuration = -0;
  this.actualStartTime = -1.1;
  this.selfBaseDuration = -0;
  this.treeBaseDuration = -0;
}
function createFiberImplClass(arg0, arg1, arg2, arg3) {
  return new FiberNode(arg0, arg1, arg2, arg3);
}
function shouldConstruct(arg0) {
  const prototype = arg0.prototype;
  return !(!prototype || !prototype.isReactComponent);
}
function createWorkInProgress(alternate, pendingProps) {
  let dependencies;
  alternate = alternate.alternate;
  if (null === alternate) {
    const tmp3 = createFiberImplClass(alternate.tag, pendingProps, alternate.key, alternate.mode);
    ({ elementType: tmp3.elementType, type: tmp3.type, stateNode: tmp3.stateNode } = alternate);
    tmp3.alternate = alternate;
    alternate.alternate = tmp3;
    alternate = tmp3;
  } else {
    alternate.pendingProps = pendingProps;
    alternate.type = alternate.type;
    alternate.flags = 0;
    alternate.subtreeFlags = 0;
    alternate.deletions = null;
    alternate.actualDuration = -0;
    alternate.actualStartTime = -1.1;
  }
  alternate.flags = 65011712 & alternate.flags;
  ({ childLanes: alternate.childLanes, lanes: alternate.lanes, child: alternate.child, memoizedProps: alternate.memoizedProps, memoizedState: alternate.memoizedState, updateQueue: alternate.updateQueue, dependencies } = alternate);
  let tmp4 = null;
  if (null !== dependencies) {
    const obj = {};
    ({ lanes: obj.lanes, firstContext: obj.firstContext } = dependencies);
    tmp4 = obj;
  }
  alternate.dependencies = tmp4;
  ({ sibling: alternate.sibling, index: alternate.index, ref: alternate.ref, refCleanup: alternate.refCleanup, selfBaseDuration: alternate.selfBaseDuration, treeBaseDuration: alternate.treeBaseDuration } = alternate);
  return alternate;
}
function resetWorkInProgress(flags, lanes) {
  let dependencies;
  flags.flags = flags.flags & 65011714;
  const alternate = flags.alternate;
  if (null === alternate) {
    flags.childLanes = 0;
    flags.lanes = lanes;
    flags.child = null;
    flags.subtreeFlags = 0;
    flags.memoizedProps = null;
    flags.memoizedState = null;
    flags.updateQueue = null;
    flags.dependencies = null;
    flags.stateNode = null;
    flags.selfBaseDuration = 0;
    flags.treeBaseDuration = 0;
  } else {
    ({ childLanes: flags.childLanes, lanes: flags.lanes, child: flags.child } = alternate);
    flags.subtreeFlags = 0;
    flags.deletions = null;
    ({ memoizedProps: flags.memoizedProps, memoizedState: flags.memoizedState, updateQueue: flags.updateQueue, type: flags.type, dependencies } = alternate);
    let tmp = null;
    if (null !== dependencies) {
      const obj = {};
      ({ lanes: obj.lanes, firstContext: obj.firstContext } = dependencies);
      tmp = obj;
    }
    flags.dependencies = tmp;
    ({ selfBaseDuration: flags.selfBaseDuration, treeBaseDuration: flags.treeBaseDuration } = alternate);
  }
  return flags;
}
function createFiberFromTypeAndProps($$typeof, arg1, children, arg3, arg4, lanes) {
  if ("function" === typeof $$typeof) {
    let num = 0;
    let ErrorResult = children;
    let tmp5 = $$typeof;
    let tmp6 = arg4;
    if (shouldConstruct($$typeof)) {
      num = 1;
      ErrorResult = children;
      tmp5 = $$typeof;
      tmp6 = arg4;
    }
  } else {
    num = 5;
    ErrorResult = children;
    tmp5 = $$typeof;
    tmp6 = arg4;
    if ("string" !== tmp) {
      if (closure_22 === $$typeof) {
        const tmp33 = createFiberImplClass(31, children, arg1, arg4);
        tmp33.elementType = closure_22;
        tmp33.lanes = lanes;
        return tmp33;
      } else if (closure_11 === $$typeof) {
        return createFiberFromFragment(children.children, arg4, lanes, arg1);
      } else if (closure_12 === $$typeof) {
        ErrorResult = children;
        tmp5 = $$typeof;
        tmp6 = tmp24;
        num = 8;
        if (1 & (arg4 | 8)) {
          tmp6 = tmp24 | 16;
          ErrorResult = children;
          tmp5 = $$typeof;
          num = 8;
        }
      } else if (closure_13 === $$typeof) {
        const tmp22 = createFiberImplClass(12, children, arg1, 2 | arg4);
        tmp22.elementType = closure_13;
        tmp22.lanes = lanes;
        tmp22.stateNode = { elevation: "%FunctionPrototype%", backgroundColor: "paddingStart" };
        return tmp22;
      } else if (closure_18 === $$typeof) {
        const tmp17 = createFiberImplClass(13, children, arg1, arg4);
        tmp17.elementType = closure_18;
        tmp17.lanes = lanes;
        return tmp17;
      } else if (closure_19 === $$typeof) {
        const tmp11 = createFiberImplClass(19, children, arg1, arg4);
        tmp11.elementType = closure_19;
        tmp11.lanes = lanes;
        return tmp11;
      } else {
        if ("object" === tmp) {
          if (null !== $$typeof) {
            $$typeof = $$typeof.$$typeof;
            ErrorResult = children;
            tmp5 = $$typeof;
            tmp6 = arg4;
            num = 10;
            if (closure_14 !== $$typeof) {
              ErrorResult = children;
              tmp5 = $$typeof;
              tmp6 = arg4;
              num = 10;
              if (forResult !== $$typeof) {
                num = 9;
                ErrorResult = children;
                tmp5 = $$typeof;
                tmp6 = arg4;
                if (closure_15 !== $$typeof) {
                  num = 11;
                  ErrorResult = children;
                  tmp5 = $$typeof;
                  tmp6 = arg4;
                  if (closure_17 !== $$typeof) {
                    num = 14;
                    ErrorResult = children;
                    tmp5 = $$typeof;
                    tmp6 = arg4;
                    if (closure_20 !== $$typeof) {
                      num = 16;
                      ErrorResult = children;
                      tmp5 = null;
                      tmp6 = arg4;
                    }
                  }
                }
              }
            }
          }
        }
        let str = "null";
        if (null !== $$typeof) {
          str = tmp;
        }
        ErrorResult = Error(`Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ${str}.`);
        num = 29;
        tmp5 = null;
        tmp6 = arg4;
      }
    }
  }
  const tmp36 = createFiberImplClass(num, ErrorResult, arg1, tmp6);
  tmp36.elementType = $$typeof;
  tmp36.type = tmp5;
  tmp36.lanes = lanes;
  return tmp36;
}
function createFiberFromFragment(arg0, arg1, lanes) {
  const tmp = createFiberImplClass(7, arg0, arg3, arg1);
  tmp.lanes = lanes;
  return tmp;
}
function createFiberFromText(arg0, arg1, lanes) {
  const tmp = createFiberImplClass(6, arg0, null, arg1);
  tmp.lanes = lanes;
  return tmp;
}
function createFiberFromPortal(children, arg1, lanes) {
  const tmp2 = createFiberImplClass(4, null !== children.children ? children.children : [], children.key, arg1);
  tmp2.lanes = lanes;
  tmp2.stateNode = { containerInfo: children.containerInfo, pendingChildren: null, implementation: children.implementation };
  return tmp2;
}
function FiberRootNode(containerInfo, tag, arg2, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, formState) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.pendingChildren = null;
  this.current = null;
  this.pingCache = null;
  this.timeoutHandle = -1;
  this.cancelPendingCommit = null;
  this.context = null;
  this.pendingContext = null;
  this.next = null;
  this.callbackNode = null;
  let num = 0;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.pendingLanes = 0;
  this.suspendedLanes = 0;
  this.pingedLanes = 0;
  this.warmLanes = 0;
  this.expiredLanes = 0;
  this.errorRecoveryDisabledLanes = 0;
  this.shellSuspendCounter = 0;
  this.entangledLanes = 0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onUncaughtError = onUncaughtError;
  this.onCaughtError = onCaughtError;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.formState = formState;
  this.incompleteTransitions = new Map();
  this.effectDuration = -0;
  this.passiveEffectDuration = -0;
  const map = new Map();
  this.memoizedUpdaters = new Set();
  const items = [];
  this.pendingUpdatersLaneMap = items;
  do {
    let _Set = Set;
    let tmp3 = new.target;
    let tmp4 = new.target;
    let set1 = new Set();
    let tmp6 = set1;
    let arr = items.push(set1);
    num = num + 1;
  } while (31 > num);
}
function findHostInstance(_reactInternals) {
  _reactInternals = _reactInternals._reactInternals;
  if (undefined === _reactInternals) {
    if ("function" === typeof _reactInternals.render) {
      const _Error6 = Error;
      throw Error("Unable to find node on an unmounted component.");
    } else {
      const _Object = Object;
      const keys = Object.keys(_reactInternals);
      const _Error5 = Error;
      throw Error("Argument appears to not be a ReactComponent. Keys: " + keys.join(","));
    }
  } else {
    let alternate = _reactInternals.alternate;
    let _return2 = _reactInternals;
    let tmp13 = alternate;
    if (alternate) {
      const _return = _return2.return;
      while (null !== _return) {
        let alternate2 = _return.alternate;
        if (null === alternate2) {
          _return2 = _return.return;
          tmp13 = _return2;
          if (null === _return2) {
            break;
          }
        } else if (_return.child === alternate2.child) {
          let sibling3 = _return.child;
          if (sibling3) {
            while (sibling3 !== _return2) {
              if (sibling3 === tmp13) {
                let tmp20 = assertIsMounted;
                let tmp21 = assertIsMounted(_return);
                let tmp3 = alternate;
              } else {
                sibling3 = sibling3.sibling;
              }
            }
            let tmp22 = assertIsMounted;
            let tmp23 = assertIsMounted(_return);
            tmp3 = _reactInternals;
          }
          let tmp19 = globalThis;
          let _Error3 = Error;
          let str3 = "Unable to find node on an unmounted component.";
          throw Error("Unable to find node on an unmounted component.");
        } else {
          _return2 = _return;
          tmp13 = alternate2;
          if (_return2.return === tmp13.return) {
            let sibling = _return.child;
            let tmp9 = tmp5;
            let tmp10 = tmp6;
            let flag = false;
            let tmp11 = sibling;
            if (sibling) {
              tmp9 = _return;
              tmp10 = alternate2;
              flag = true;
              tmp11 = sibling;
              while (sibling !== tmp5) {
                tmp9 = alternate2;
                tmp10 = _return;
                flag = true;
                tmp11 = sibling;
                if (sibling === tmp6) {
                  break;
                } else {
                  sibling = sibling.sibling;
                  tmp9 = tmp5;
                  tmp10 = tmp6;
                  flag = false;
                  tmp11 = sibling;
                  if (!sibling) {
                    break;
                  }
                }
              }
            }
            let tmp12 = tmp11;
            _return2 = tmp9;
            tmp13 = tmp10;
            let tmp14 = flag;
            if (!flag) {
              let sibling2 = alternate2.child;
              let tmp15 = tmp9;
              let tmp16 = tmp10;
              let flag2 = flag;
              let tmp17 = sibling2;
              if (sibling2) {
                tmp15 = alternate2;
                tmp16 = _return;
                flag2 = true;
                tmp17 = sibling2;
                while (sibling2 !== tmp9) {
                  tmp15 = _return;
                  tmp16 = alternate2;
                  flag2 = true;
                  tmp17 = sibling2;
                  if (sibling2 === tmp10) {
                    break;
                  } else {
                    sibling2 = sibling2.sibling;
                    tmp15 = tmp9;
                    tmp16 = tmp10;
                    flag2 = flag;
                    tmp17 = sibling2;
                    if (!sibling2) {
                      break;
                    }
                  }
                }
              }
              _return2 = tmp15;
              tmp13 = tmp16;
              tmp14 = flag2;
              tmp12 = tmp17;
              if (!flag2) {
                let tmp18 = globalThis;
                let _Error2 = Error;
                let str2 = "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.";
                throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
              }
            }
          }
          if (_return2.alternate === tmp13) {
            continue;
          } else {
            let tmp32 = globalThis;
            let _Error7 = Error;
            let str9 = "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.";
            throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
          }
        }
        continue;
      }
      if (3 !== _return2.tag) {
        const _Error4 = Error;
        throw Error("Unable to find node on an unmounted component.");
      } else {
        if (_return2.stateNode.current === _return2) {
          alternate = _reactInternals;
        }
        tmp3 = alternate;
      }
    } else {
      const tmp2 = getNearestMountedFiber(_reactInternals);
      if (null === tmp2) {
        const _Error = Error;
        throw Error("Unable to find node on an unmounted component.");
      } else {
        tmp3 = null;
        if (tmp2 === _reactInternals) {
          tmp3 = _reactInternals;
        }
      }
    }
    let tmp24 = null;
    if (null !== tmp3) {
      tmp24 = findCurrentHostFiberImpl(tmp3);
    }
    let tmp26 = null;
    if (null !== tmp24) {
      tmp26 = getPublicInstance(tmp24.stateNode);
    }
    return tmp26;
  }
}
function updateContainer(element, current) {
  current = current.current;
  const tmp = requestUpdateLane(current);
  let tmp2 = null !== _null;
  if (tmp2) {
    tmp2 = "function" === typeof _null.markRenderScheduled;
  }
  if (tmp2) {
    _null.markRenderScheduled(tmp);
  }
  if (null === current.context) {
    current.context = closure_74;
  } else {
    current.pendingContext = closure_74;
  }
  const tmp8 = createUpdate(tmp);
  tmp8.payload = { element };
  let tmp9 = null;
  if (undefined !== arg3) {
    tmp9 = arg3;
  }
  if (null !== tmp9) {
    tmp8.callback = tmp9;
  }
  const tmp10 = enqueueUpdate(current, tmp8, tmp);
  if (null !== tmp10) {
    scheduleUpdateOnFiber(tmp10, current, tmp);
    entangleTransitions(tmp10, current, tmp);
  }
  return tmp;
}
function nativeOnUncaughtError(error, componentStack) {
  const ReactFiberErrorDialog = require(dependencyMap[2]).ReactFiberErrorDialog;
  const obj = { errorBoundary: null, error };
  let str = "";
  if (null != componentStack.componentStack) {
    str = componentStack.componentStack;
  }
  obj.componentStack = str;
  if (false !== ReactFiberErrorDialog.showErrorDialog(obj)) {
    callback4(error);
  }
}
function nativeOnCaughtError(error, errorBoundary) {
  const ReactFiberErrorDialog = require(dependencyMap[2]).ReactFiberErrorDialog;
  const obj = { errorBoundary: errorBoundary.errorBoundary, error };
  let str = "";
  if (null != errorBoundary.componentStack) {
    str = errorBoundary.componentStack;
  }
  obj.componentStack = str;
  if (false !== ReactFiberErrorDialog.showErrorDialog(obj)) {
    const _console = console;
    console.error(error);
  }
}
function unmountComponentAtNode(arg0) {
  const require = arg0;
  const value = map2.get(arg0);
  if (value) {
    updateContainer(null, value, undefined, () => {
      set.delete(arg0);
    });
  }
}
let tmp2 = "undefined" !== typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (tmp2) {
  tmp2 = "function" === typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart;
}
if (tmp2) {
  const _Error = Error;
  const result = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
}
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);
const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _module1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
let closure_7 = false;
let closure_8 = Symbol.for("react.element");
let closure_9 = Symbol.for("react.transitional.element");
let closure_10 = Symbol.for("react.portal");
let closure_11 = Symbol.for("react.fragment");
let closure_12 = Symbol.for("react.strict_mode");
let closure_13 = Symbol.for("react.profiler");
let closure_14 = Symbol.for("react.provider");
let closure_15 = Symbol.for("react.consumer");
const forResult = Symbol.for("react.context");
let closure_17 = Symbol.for("react.forward_ref");
let closure_18 = Symbol.for("react.suspense");
let closure_19 = Symbol.for("react.suspense_list");
let closure_20 = Symbol.for("react.memo");
let closure_21 = Symbol.for("react.lazy");
Symbol.for("react.scope");
let closure_22 = Symbol.for("react.activity");
Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
let closure_23 = Symbol.for("react.memo_cache_sentinel");
Symbol.for("react.view_transition");
let closure_25 = Symbol.for("react.client.reference");
let closure_26 = false;
let closure_27 = null;
let getFiberCurrentPropsFromNode$1 = null;
getInstanceFromTag = null;
let getNodeFromInstance = null;
let obj = {
  preventDefault() {
    this.defaultPrevented = true;
    const nativeEvent = this.nativeEvent;
    if (nativeEvent) {
      if (nativeEvent.preventDefault) {
        nativeEvent.preventDefault();
      } else if ("unknown" !== typeof nativeEvent.returnValue) {
        nativeEvent.returnValue = false;
      }
      tmp.isDefaultPrevented = functionThatReturnsTrue;
    }
  },
  stopPropagation() {
    const nativeEvent = this.nativeEvent;
    if (nativeEvent) {
      if (nativeEvent.stopPropagation) {
        nativeEvent.stopPropagation();
      } else if ("unknown" !== typeof nativeEvent.cancelBubble) {
        nativeEvent.cancelBubble = true;
      }
      tmp.isPropagationStopped = functionThatReturnsTrue;
    }
  },
  persist() {
    this.isPersistent = functionThatReturnsTrue;
  },
  isPersistent: functionThatReturnsFalse,
  destructor() {
    const self = this;
    for (const key10006 in tmp) {
      let tmp2 = key10006;
      self[key10006] = null;
    }
    self.dispatchConfig = null;
    self._targetInst = null;
    self.nativeEvent = null;
    self.isDefaultPrevented = functionThatReturnsFalse;
    self.isPropagationStopped = functionThatReturnsFalse;
    self._dispatchListeners = null;
    self._dispatchInstances = null;
  }
};
obj = assign(SyntheticEvent.prototype, obj);
SyntheticEvent.Interface = {
  currentTarget() {
    return null;
  },
  timeStamp(timeStamp) {
    timeStamp = timeStamp.timeStamp;
    if (!timeStamp) {
      const _Date = Date;
      timeStamp = Date.now();
    }
    return timeStamp;
  }
};
SyntheticEvent.extend = function(arg0) {
  class E {
    constructor() {
      return;
    }
  }
  class Class {
    constructor() {
      return self(...arguments);
    }
  }
  const require = this;
  E.prototype = this.prototype;
  const e = new E();
  assign(e, Class.prototype);
  Class.prototype = e;
  Class.prototype.constructor = Class;
  Class.Interface = assign({}, this.Interface, arg0);
  Class.extend = this.extend;
  addEventPoolingTo(Class);
  return Class;
};
addEventPoolingTo(SyntheticEvent);
obj = {
  touchHistory() {
    return null;
  }
};
let closure_31 = SyntheticEvent.extend(obj);
const items = [];
const items1 = [true];
const items2 = [];
const items3 = [];
const obj1 = { alignItems: false, createStyles: false, guild_id: true, Symbol: "/assets/.cache/intl/bW9kdWxlcy9jaGVja291dC9tZXNzYWdlcw==", touchBank: items3 };
let closure_35 = {
  instrument(arg0) {

  },
  recordTouchTrack(arg0, changedTouches) {
    if (null != callback) {
      callback(arg0, changedTouches);
    }
    if (isMoveish(arg0)) {
      changedTouches = changedTouches.changedTouches;
      const item = changedTouches.forEach(recordTouchMove);
    } else if (isStartish(arg0)) {
      const changedTouches1 = changedTouches.changedTouches;
      const item1 = changedTouches1.forEach(recordTouchStart);
      obj1.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj1.numberActiveTouches) {
        obj1.indexOfSingleActiveTouch = changedTouches.touches[0].identifier;
      }
    } else if ("topTouchEnd" === arg0) {
      const changedTouches2 = changedTouches.changedTouches;
      const item2 = changedTouches2.forEach(recordTouchEnd);
      obj1.numberActiveTouches = changedTouches.touches.length;
      if (1 === obj1.numberActiveTouches) {
        let num2 = 0;
        if (0 < items3.length) {
          while (true) {
            let tmp8 = items3;
            let tmp9 = items3[num2];
            let tmp10 = num2;
            if (null != tmp9) {
              if (tmp9.touchActive) {
                break;
              }
            }
            num2 = num2 + 1;
            let tmp11 = items3;
          }
          obj1.indexOfSingleActiveTouch = num2;
        }
      }
    }
  },
  touchHistory: obj1
};
let closure_36 = null;
let closure_37 = 0;
const obj2 = { startShouldSetResponder: { phasedRegistrationNames: { "Bool(false)": true, "Bool(false)": true }, dependencies: items }, scrollShouldSetResponder: { phasedRegistrationNames: {}, dependencies: [true] }, selectionChangeShouldSetResponder: { phasedRegistrationNames: { "Bool(false)": null, "Bool(false)": null }, dependencies: [-1618016108] }, moveShouldSetResponder: { phasedRegistrationNames: {}, dependencies: items1 }, responderStart: { registrationName: "onResponderStart", dependencies: items }, responderMove: { registrationName: "onResponderMove", dependencies: items1 }, responderEnd: { registrationName: "onResponderEnd", dependencies: items2 }, responderRelease: { registrationName: "onResponderRelease", dependencies: items2 }, responderTerminationRequest: { registrationName: "onResponderTerminationRequest", dependencies: [] }, responderGrant: { registrationName: "onResponderGrant", dependencies: [] }, responderReject: { registrationName: "onResponderReject", dependencies: [] }, responderTerminate: { registrationName: "onResponderTerminate", dependencies: [] } };
const obj3 = {
  _getResponder() {
    return closure_36;
  },
  eventTypes: obj2,
  extractEvents(arg0, arg1, responderIgnoreScroll) {
    let _dispatchInstances;
    let _dispatchListeners;
    let diff1;
    let diff2;
    if (isStartish(arg0)) {
      closure_37 = closure_37 + 1;
    } else if ("topTouchEnd" === arg0) {
      let pooled1 = closure_37;
      if (0 <= closure_37) {
        closure_37 = closure_37 - 1;
      } else {
        return null;
      }
    }
    closure_35.recordTouchTrack(arg0, responderIgnoreScroll);
    let tmp7 = null;
    if (arg1) {
      if ("topScroll" !== arg0) {
        if (0 >= closure_37) {
          if (!isStartish(arg0)) {
            tmp7 = null;
          }
        }
      }
      if (isStartish(arg0)) {
        let scrollShouldSetResponder = obj2.startShouldSetResponder;
      } else if (isMoveish(arg0)) {
        scrollShouldSetResponder = obj2.moveShouldSetResponder;
      } else if ("topSelectionChange" === arg0) {
        scrollShouldSetResponder = obj2.selectionChangeShouldSetResponder;
      } else {
        scrollShouldSetResponder = obj2.scrollShouldSetResponder;
      }
      let tmp18 = arg1;
      if (closure_36) {
        let num5 = 0;
        let tmp21 = closure_36;
        let num6 = 0;
        if (closure_36) {
          do {
            num5 = num5 + 1;
            let tmp22 = closure_212;
            tmp21 = closure_212(tmp21);
            num6 = num5;
          } while (tmp21);
        }
        let num7 = 0;
        let tmp23 = arg1;
        let num8 = 0;
        if (arg1) {
          do {
            num7 = num7 + 1;
            let tmp24 = closure_212;
            tmp23 = closure_212(tmp23);
            num8 = num7;
          } while (tmp23);
        }
        let tmp25 = tmp20;
        let tmp26 = num6;
        let tmp27 = tmp20;
        let tmp28 = num6;
        if (0 < num6 - num8) {
          do {
            let tmp29 = closure_212;
            tmp25 = closure_212(tmp25);
            let diff = tmp26 - 1;
            tmp26 = diff;
            tmp27 = tmp25;
            tmp28 = diff;
            diff1 = diff - num8;
          } while (0 < diff1);
        }
        let tmp32 = arg1;
        let tmp33 = arg1;
        if (0 < num8 - tmp28) {
          do {
            let tmp34 = closure_212;
            tmp32 = closure_212(tmp32);
            num8 = num8 - 1;
            tmp33 = tmp32;
            diff2 = num8 - tmp28;
          } while (0 < diff2);
        }
        let diff3 = tmp36 - 1;
        let tmp38 = diff3;
        if (!+tmp28) {
          let tmp19 = tmp38;
          tmp18 = null;
        } else {
          tmp18 = tmp27;
          tmp19 = diff3;
          while (tmp27 !== tmp33) {
            tmp19 = diff3;
            tmp18 = tmp27;
            if (tmp27 === tmp33.alternate) {
              break;
            } else {
              let tmp39 = getParent$1;
              tmp27 = getParent$1(tmp27);
              tmp33 = getParent$1(tmp33);
              let tmp40 = +diff3;
              diff3 = tmp40 - 1;
              tmp38 = diff3;
              break;
            }
          }
        }
      }
      const pooled = store.getPooled(scrollShouldSetResponder, tmp18, responderIgnoreScroll, arg3);
      pooled.touchHistory = closure_35.touchHistory;
      forEachAccumulated(pooled, tmp18 === closure_36 ? accumulateTwoPhaseDispatchesSingleSkipTarget : accumulateTwoPhaseDispatchesSingle$1);
      ({ _dispatchListeners, _dispatchInstances } = pooled);
      if (isArray(_dispatchListeners)) {
        let num9 = 0;
        if (0 < _dispatchListeners.length) {
          let num11 = 0;
          num9 = 0;
          if (!pooled.isPropagationStopped()) {
            while (!_dispatchListeners[num11](pooled, _dispatchInstances[num11])) {
              let sum = num11 + 1;
              num9 = sum;
              if (sum < _dispatchListeners.length) {
                num11 = sum;
                num9 = sum;
                continue;
              }
            }
            let tmp51 = _dispatchInstances[num11];
            let tmp52 = num11;
            pooled._dispatchInstances = null;
            pooled._dispatchListeners = null;
            if (!pooled.isPersistent()) {
              const constructor = pooled.constructor;
              constructor.release(pooled);
            }
            let tmp6 = tmp52;
            tmp7 = null;
            if (tmp51) {
              tmp6 = tmp52;
              tmp7 = null;
              if (tmp51 !== closure_36) {
                pooled1 = store;
                pooled1 = obj2;
                pooled1 = store;
                pooled1 = tmp51;
                pooled1 = responderIgnoreScroll;
                pooled1 = arg3;
                pooled1 = store.getPooled(obj2.responderGrant, tmp51, responderIgnoreScroll, arg3);
                pooled1 = closure_35;
                pooled1.touchHistory = closure_35.touchHistory;
                pooled1 = forEachAccumulated;
                pooled1 = accumulateDirectDispatchesSingle$1;
                pooled1 = forEachAccumulated(pooled1, accumulateDirectDispatchesSingle$1);
                pooled1 = executeDirectDispatch;
                pooled1 = true === executeDirectDispatch(pooled1);
                pooled1 = closure_36;
                if (closure_36) {
                  const pooled2 = store.getPooled(obj2.responderTerminationRequest, closure_36, responderIgnoreScroll, arg3);
                  pooled2.touchHistory = closure_35.touchHistory;
                  forEachAccumulated(pooled2, accumulateDirectDispatchesSingle$1);
                  let tmp72 = !pooled2._dispatchListeners;
                  if (!tmp72) {
                    tmp72 = executeDirectDispatch(pooled2);
                  }
                  if (!pooled2.isPersistent()) {
                    const constructor2 = pooled2.constructor;
                    constructor2.release(pooled2);
                  }
                  const getPooled = store.getPooled;
                  if (tmp72) {
                    const pooled3 = getPooled(tmp76.responderTerminate, closure_36, responderIgnoreScroll, arg3);
                    pooled3.touchHistory = closure_35.touchHistory;
                    forEachAccumulated(pooled3, accumulateDirectDispatchesSingle$1);
                    const items = [pooled1, pooled3];
                    tmp7 = accumulate(undefined, items);
                    changeResponder(tmp51, pooled1);
                    tmp6 = pooled3;
                  } else {
                    const pooled4 = getPooled(tmp76.responderReject, tmp51, responderIgnoreScroll, arg3);
                    pooled4.touchHistory = closure_35.touchHistory;
                    forEachAccumulated(pooled4, accumulateDirectDispatchesSingle$1);
                    tmp7 = accumulate(undefined, pooled4);
                    tmp6 = pooled2;
                  }
                } else {
                  tmp7 = accumulate(undefined, pooled1);
                  changeResponder(tmp51, pooled1);
                  tmp6 = tmp52;
                }
              }
            }
          }
        }
      } else {
        num9 = tmp19;
        if (_dispatchListeners) {
          num9 = tmp19;
          tmp51 = _dispatchInstances;
          tmp52 = tmp19;
        }
      }
    }
    let tmp99 = closure_36;
    if (closure_36) {
      pooled1 = isStartish;
      tmp99 = isStartish(arg0);
    }
    pooled1 = closure_36;
    if (closure_36) {
      pooled1 = isMoveish;
      pooled1 = isMoveish(arg0);
    }
    pooled1 = closure_36;
    if (closure_36) {
      pooled1 = "topTouchEnd" === arg0;
      if (!pooled1) {
        pooled1 = "topTouchCancel" === arg0;
      }
    }
    if (tmp99) {
      pooled1 = obj2;
      pooled1 = obj2.responderStart;
    } else if (pooled1) {
      pooled1 = obj2;
      pooled1 = obj2.responderMove;
    } else {
      pooled1 = null;
      if (pooled1) {
        pooled1 = obj2;
        pooled1 = obj2.responderEnd;
      }
    }
    pooled1 = tmp7;
    if (pooled1) {
      pooled1 = store;
      pooled1 = closure_36;
      pooled1 = store;
      pooled1 = responderIgnoreScroll;
      pooled1 = arg3;
      pooled1 = store.getPooled(pooled1, closure_36, responderIgnoreScroll, arg3);
      pooled1 = closure_35;
      pooled1.touchHistory = closure_35.touchHistory;
      pooled1 = forEachAccumulated;
      pooled1 = accumulateDirectDispatchesSingle$1;
      pooled1 = forEachAccumulated(pooled1, accumulateDirectDispatchesSingle$1);
      pooled1 = accumulate;
      pooled1 = accumulate(tmp7, pooled1);
    }
    pooled1 = closure_36;
    if (closure_36) {
      pooled1 = "topTouchCancel" === arg0;
    }
    let flag = closure_36;
    if (closure_36) {
      flag = !pooled1;
    }
    if (flag) {
      pooled1 = "topTouchEnd" === arg0;
      if (!pooled1) {
        pooled1 = "topTouchCancel" === arg0;
      }
      flag = pooled1;
    }
    if (flag) {
      const touches = responderIgnoreScroll.touches;
      flag = true;
      if (touches) {
        flag = true;
        if (0 !== touches.length) {
          let num13 = 0;
          flag = true;
          if (0 < touches.length) {
            while (true) {
              let target = touches[num13].target;
              pooled1 = tmp6;
              if (null != target) {
                pooled1 = tmp6;
                if (0 !== target) {
                  pooled1 = getInstanceFromTag;
                  pooled1 = getInstanceFromTag(target);
                  pooled1 = closure_36;
                  if (!pooled1) {
                    let flag2 = false;
                  } else {
                    flag2 = true;
                  }
                  flag = false;
                  if (flag2) {
                    break;
                  }
                }
                break;
              }
              num13 = num13 + 1;
              tmp6 = pooled1;
              flag = true;
              if (num13 >= touches.length) {
                break;
              }
            }
          }
        }
      }
    }
    if (pooled1) {
      pooled1 = obj2;
      pooled1 = obj2.responderTerminate;
    } else {
      pooled1 = null;
      if (flag) {
        pooled1 = obj2;
        pooled1 = obj2.responderRelease;
      }
    }
    if (pooled1) {
      pooled1 = store;
      pooled1 = closure_36;
      pooled1 = store;
      pooled1 = responderIgnoreScroll;
      pooled1 = arg3;
      pooled1 = store.getPooled(pooled1, closure_36, responderIgnoreScroll, arg3);
      pooled1 = closure_35;
      pooled1.touchHistory = closure_35.touchHistory;
      pooled1 = forEachAccumulated;
      pooled1 = accumulateDirectDispatchesSingle$1;
      pooled1 = forEachAccumulated(pooled1, accumulateDirectDispatchesSingle$1);
      pooled1 = accumulate;
      pooled1 = accumulate(pooled1, pooled1);
      pooled1 = changeResponder;
      pooled1 = changeResponder(null);
    }
    return pooled1;
  },
  GlobalResponderHandler: null,
  injection: obj4
};
let closure_40 = null;
const obj5 = {};
let closure_42 = [];
let closure_43 = {};
let closure_44 = {};
const customBubblingEventTypes = require(dependencyMap[2]).ReactNativeViewConfigRegistry.customBubblingEventTypes;
const customDirectEventTypes = require(dependencyMap[2]).ReactNativeViewConfigRegistry.customDirectEventTypes;
closure_40 = slice.call([null, null]);
const result1 = recomputePluginOrdering();
const obj6 = { ResponderEventPlugin: obj3, ReactNativeBridgeEventPlugin: obj7 };
let flag = false;
let flag2 = false;
const keys = Object.keys();
if (keys !== undefined) {
  flag2 = flag;
  while (keys[tmp] !== undefined) {
    let tmp32 = tmp16;
    if (!obj6.hasOwnProperty(tmp16)) {
      continue;
    } else {
      let tmp17 = obj6[tmp16];
      if (!obj5.hasOwnProperty(tmp16)) {
        if (obj5[tmp16]) {
          let _Error2 = Error;
          let str2 = "EventPluginRegistry: Cannot inject two different event plugins using the same name, `";
          let str3 = "`.";
          throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + tmp16 + "`.");
        } else {
          obj5[tmp16] = tmp17;
          flag = true;
          let tmp19 = tmp17;
          // continue
        }
      } else {
        flag = tmp15;
        let tmp18 = tmp17;
      }
      continue;
    }
    continue;
  }
}
if (flag2) {
  const result2 = recomputePluginOrdering();
}
const map = new Map();
const map1 = new Map();
let closure_49 = false;
let closure_50 = null;
let closure_51 = {};
const RCTEventEmitter = require(dependencyMap[2]).RCTEventEmitter;
RCTEventEmitter.register({
  receiveEvent(arg0, arg1, arg2) {
    _receiveRootNodeIDEvent(arg0, arg1, arg2);
  },
  receiveTouches(arg0, touches) {
    let length;
    let length2;
    if ("topTouchEnd" !== arg0) {
      if ("topTouchCancel" !== arg0) {
        const items = [];
        let num = 0;
        let arr2 = items;
        if (0 < arg2.length) {
          do {
            let arr = items.push(touches[arg2[num]]);
            num = num + 1;
            arr2 = items;
            length = arg2.length;
          } while (num < length);
        }
      }
      let num6 = 0;
      if (0 < arr2.length) {
        do {
          let tmp8 = arr2[num6];
          tmp8.changedTouches = arr2;
          tmp8.touches = touches;
          let target = tmp8.target;
          let tmp9 = null == target || 1 > target;
          let tmp10 = null;
          if (!tmp9) {
            tmp10 = target;
          }
          let tmp11 = closure_229;
          let tmp12 = closure_229(tmp10, arg0, tmp8);
          num6 = num6 + 1;
        } while (num6 < arr2.length);
      }
    }
    const items1 = [];
    let num2 = 0;
    if (0 < arg2.length) {
      do {
        let tmp2 = arg2[num2];
        arr = items1.push(touches[tmp2]);
        touches[tmp2] = null;
        num2 = num2 + 1;
        length2 = arg2.length;
      } while (num2 < length2);
    }
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    if (0 < touches.length) {
      do {
        let tmp4 = touches[num4];
        let sum = num3;
        if (null !== tmp4) {
          let tmp6 = +num3;
          sum = tmp6 + 1;
          touches[tmp6] = tmp4;
        }
        num4 = num4 + 1;
        num3 = sum;
        num5 = sum;
      } while (num4 < touches.length);
    }
    touches.length = num5;
    arr2 = items1;
  }
});
getFiberCurrentPropsFromNode$1 = function getFiberCurrentPropsFromNode$1(_nativeTag) {
  return map1.get(_nativeTag._nativeTag) || null;
};
getNodeFromInstance = function getNodeFromInstance(stateNode) {
  stateNode = stateNode.stateNode;
  let nativeTag = stateNode._nativeTag;
  let tmp = undefined === nativeTag;
  if (tmp) {
    tmp = null != stateNode.canonical;
  }
  let publicInstance = stateNode;
  if (tmp) {
    nativeTag = stateNode.canonical.nativeTag;
    publicInstance = stateNode.canonical.publicInstance;
  }
  if (nativeTag) {
    return publicInstance;
  } else {
    const _Error = Error;
    throw Error("All native instances should have a tag.");
  }
};
const injection = obj3.injection;
const result3 = injection.injectGlobalResponderHandler({
  onChange(arg0, stateNode) {
    if (null !== stateNode) {
      const UIManager2 = require(dependencyMap[2]).UIManager;
      UIManager2.setJSResponder(stateNode.stateNode._nativeTag, arg2);
    } else {
      const UIManager = require(dependencyMap[2]).UIManager;
      UIManager.clearJSResponder();
    }
  }
});
let closure_52 = {};
let closure_53 = null;
let closure_54 = 0;
let closure_55 = { unsafelyIgnoreFunctions: true };
let closure_56 = () => {
  class ReactNativeFiberHostComponent {
    constructor(arg0, arg1) {
      this._internalFiberInstanceHandleDEV = undefined;
      this.viewConfig = undefined;
      this._nativeTag = arg0;
      this._children = [];
      this.viewConfig = arg1;
      return;
    }
  }
  const prototype = ReactNativeFiberHostComponent.prototype;
  prototype.blur = function() {
    const TextInputState = callback(closure_1[2]).TextInputState;
    TextInputState.blurTextInput(this);
  };
  prototype.focus = function() {
    const TextInputState = callback(closure_1[2]).TextInputState;
    TextInputState.focusTextInput(this);
  };
  prototype.measure = function(arg0) {
    const UIManager = callback(closure_1[2]).UIManager;
    UIManager.measure(this._nativeTag, callback3(this, arg0));
  };
  prototype.measureInWindow = function(arg0) {
    const UIManager = callback(closure_1[2]).UIManager;
    UIManager.measureInWindow(this._nativeTag, callback3(this, arg0));
  };
  prototype.measureLayout = function(_nativeTag) {
    const self = this;
    if ("number" !== typeof _nativeTag) {
      if (_nativeTag._nativeTag) {
        _nativeTag = _nativeTag._nativeTag;
      }
    }
    if (null != _nativeTag) {
      const UIManager = callback(closure_1[2]).UIManager;
      const _nativeTag2 = self._nativeTag;
      UIManager.measureLayout(_nativeTag2, _nativeTag, callback3(self, arg2), callback3(self, arg1));
      const tmp5 = callback3(self, arg2);
    }
  };
  prototype.setNativeProps = function(arg0) {
    const self = this;
    const tmp = callback2(null, closure_52, arg0, this.viewConfig.validAttributes);
    if (null != tmp) {
      const UIManager = callback(closure_1[2]).UIManager;
      UIManager.updateView(self._nativeTag, self.viewConfig.uiViewClassName, tmp);
    }
  };
  return ReactNativeFiberHostComponent;
}();
let closure_57 = null;
let __REACT_DEVTOOLS_GLOBAL_HOOK__4 = null;
let closure_59 = null;
let closure_60 = "undefined" !== typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (Math.clz32) {
  const _Math = Math;
  let clz32Fallback = Math.clz32;
} else {
  clz32Fallback = function clz32Fallback(arg0) {
    let num = 32;
    if (0 !== arg0 >>> 0) {
      num = 31 - (log(tmp) / LN2 | 0) | 0;
    }
    return num;
  };
}
let closure_64 = 256;
let closure_65 = 4194304;
const obj10 = {
  getInspectorDataForInstance: undefined,
  getInspectorDataForViewTag() {
    throw Error("getInspectorDataForViewTag() is not available in production");
  },
  getInspectorDataForViewAtPoint() {
    throw Error("getInspectorDataForViewAtPoint() is not available in production.");
  }
};
const get = require(dependencyMap[2]).ReactNativeViewConfigRegistry.get;
let closure_67 = 3;
let closure_70 = 0;
const obj11 = { position: 1, offsetY: "100%", "Bool(true)": "absolute", "Bool(true)": 0, "Bool(true)": 0, "Bool(true)": "100%", $$typeof: forResult };
let closure_72 = [];
let closure_73 = -1;
let closure_74 = {};
const weakMap = new WeakMap();
let closure_76 = createCursor(null);
let closure_77 = createCursor(null);
let closure_78 = createCursor(null);
let closure_79 = createCursor(null);
let closure_80 = null;
if ("function" === typeof Object.is) {
  const _Object = Object;
} else {
  is = function is(arg0, arg1) {
    let tmp = arg0 === arg1;
    if (tmp) {
      let tmp2 = 0 !== arg0;
      if (!tmp2) {
        tmp2 = 1 / arg0 === 1 / arg1;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      tmp = arg0 != arg0 && arg1 != arg1;
      const tmp3 = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
let closure_82 = createCursor(null);
let closure_83 = null;
let closure_84 = null;
let closure_85 = "undefined" !== typeof AbortController ? AbortController : function() {
  let closure_0 = [];
  const obj = {
    aborted: false,
    addEventListener(arg0, arg1) {

    }
  };
  this.signal = obj;
  const dependencyMap = obj;
  this.abort = () => {
    obj.aborted = true;
    const item = arr.forEach((arg0) => arg0());
  };
};
const obj12 = { pointerEvents: 1, horizontalOffset: "100%", "Bool(true)": "absolute", "Bool(true)": 0, "Bool(true)": 0, "Bool(true)": "100%", $$typeof: forResult };
let closure_87 = -0;
let closure_88 = -1.1;
let closure_89 = -0;
let closure_90 = false;
let closure_91 = false;
let closure_92 = null;
let closure_93 = null;
let closure_94 = false;
let closure_95 = false;
let closure_96 = false;
let closure_97 = 0;
let closure_98 = null;
let closure_99 = 0;
let closure_100 = 0;
let closure_101 = null;
const S = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S;
__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.S = (arg0, promise) => {
  let tmp = "object" === typeof promise;
  if (tmp) {
    tmp = null !== promise;
  }
  if (tmp) {
    tmp = "function" === typeof promise.then;
  }
  if (tmp) {
    function entangleAsyncAction(arg0, promise) {
      if (null === items) {
        const items = [];
        let closure_99 = 0;
        let closure_100 = callback();
        const obj = {
          status: "pending",
          value: undefined,
          then(arg0) {
              items.push(arg0);
            }
        };
      }
      closure_99 = closure_99 + 1;
      promise.then(closure_302, closure_302);
      return promise;
    }(undefined, promise);
  }
  if (null !== S) {
    S(arg0, promise);
  }
};
let closure_103 = createCursor(null);
let closure_105 = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
let closure_106 = Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.");
let closure_107 = Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary.");
let closure_108 = {
  then() {

  }
};
let closure_109 = null;
let closure_110 = [];
let closure_111 = 0;
let closure_112 = 0;
let closure_113 = false;
let closure_114 = false;
let closure_115 = createCursor(null);
let closure_117 = 0;
let closure_118 = null;
let closure_119 = null;
let closure_120 = null;
let closure_121 = false;
let closure_122 = false;
let closure_123 = false;
let closure_124 = 0;
let closure_125 = null;
let closure_126 = 0;
let closure_127 = { readContext, use, useCallback: throwInvalidHookError, useContext: throwInvalidHookError, useEffect: throwInvalidHookError, useImperativeHandle: throwInvalidHookError, useLayoutEffect: throwInvalidHookError, useInsertionEffect: throwInvalidHookError, useMemo: throwInvalidHookError, useReducer: throwInvalidHookError, useRef: throwInvalidHookError, useState: throwInvalidHookError, useDebugValue: throwInvalidHookError, useDeferredValue: throwInvalidHookError, useTransition: throwInvalidHookError, useSyncExternalStore: throwInvalidHookError, useId: throwInvalidHookError, useHostTransitionStatus: throwInvalidHookError, useFormState: throwInvalidHookError, useActionState: throwInvalidHookError, useOptimistic: throwInvalidHookError, useMemoCache: throwInvalidHookError, useCacheRefresh: throwInvalidHookError };
let closure_128 = {
  readContext,
  use,
  useCallback(arg0, arg1) {
    const items = [arg0, ];
    let tmp2 = null;
    if (undefined !== arg1) {
      tmp2 = arg1;
    }
    items[1] = tmp2;
    mountWorkInProgressHook().memoizedState = items;
    return arg0;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle(queue, closure_101, arr) {
    let combined = null;
    if (null != arr) {
      const items = [queue];
      combined = arr.concat(items);
    }
    mountEffectImpl(4194308, 4, imperativeHandleEffect.bind(null, closure_101, queue), combined);
  },
  useLayoutEffect(arg0, arg1) {
    mountEffectImpl(4194308, 4, arg0, arg1);
  },
  useInsertionEffect(arg0, arg1) {
    mountEffectImpl(4, 2, arg0, arg1);
  },
  useMemo(arg0, arg1) {
    let tmp2 = null;
    if (undefined !== arg1) {
      tmp2 = arg1;
    }
    const tmp3 = arg0();
    if (closure_123) {
      setIsStrictModeForDevtools(true);
      arg0();
      setIsStrictModeForDevtools(false);
    }
    const items = [tmp3, tmp2];
    mountWorkInProgressHook().memoizedState = items;
    return tmp3;
  },
  useReducer(lastRenderedReducer) {
    const tmp2 = mountWorkInProgressHook();
    if (undefined !== arg2) {
      const tmpResult = arg2(arg1);
      let tmp3 = tmpResult;
      if (closure_123) {
        setIsStrictModeForDevtools(true);
        arg2(arg1);
        setIsStrictModeForDevtools(false);
        tmp3 = tmpResult;
      }
    } else {
      tmp3 = arg1;
    }
    tmp2.baseState = tmp3;
    tmp2.memoizedState = tmp3;
    const obj = { 9223372036854775807: 22817347, 0: 18467840, 0: 21634048, lastRenderedReducer, lastRenderedState: tmp3 };
    tmp2.queue = obj;
    const bindResult = dispatchReducerAction.bind(null, closure_118, obj);
    obj.dispatch = bindResult;
    const items = [tmp2.memoizedState, bindResult];
    return items;
  },
  useRef(current) {
    const obj = { current };
    mountWorkInProgressHook().memoizedState = obj;
    return obj;
  },
  useState(arg0) {
    const tmp = mountStateImpl(arg0);
    const queue = tmp.queue;
    const bindResult = dispatchSetState.bind(null, closure_118, queue);
    queue.dispatch = bindResult;
    const items = [tmp.memoizedState, bindResult];
    return items;
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(arg0, arg1) {
    return mountDeferredValueImpl(mountWorkInProgressHook(), arg0, arg1);
  },
  useTransition() {
    const bindResult = startTransition.bind(null, closure_118, mountStateImpl(false).queue, true, false);
    mountWorkInProgressHook().memoizedState = bindResult;
    const items = [false, bindResult];
    return items;
  },
  useSyncExternalStore(bindResult1, getSnapshot) {
    const tmp2 = mountWorkInProgressHook();
    const tmp3 = getSnapshot();
    if (null === closure_155) {
      const _Error = Error;
      throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
    } else {
      if (!(124 & closure_157)) {
        pushStoreConsistencyCheck(tmp, getSnapshot, tmp3);
      }
      tmp2.memoizedState = tmp3;
      let obj = { value: tmp3, getSnapshot };
      tmp2.queue = obj;
      const items = [bindResult1];
      mountEffect(subscribeToStore.bind(null, tmp, obj, bindResult1), items);
      tmp.flags = tmp.flags | 2048;
      obj = { destroy: undefined, resource: undefined };
      pushSimpleEffect(9, obj, updateStoreInstance.bind(null, tmp, obj, tmp3, getSnapshot), null);
      return tmp3;
    }
  },
  useId() {
    let closure_126 = str + 1;
    const text = `${`«${closure_155.identifierPrefix}` + "r" + str.toString(32)}»`;
    mountWorkInProgressHook().memoizedState = text;
    return `${`«${closure_155.identifierPrefix}` + "r" + +closure_126.toString(32)}»`;
  },
  useHostTransitionStatus,
  useFormState: mountActionState,
  useActionState: mountActionState,
  useOptimistic(baseState) {
    const tmp = mountWorkInProgressHook();
    tmp.baseState = baseState;
    tmp.memoizedState = baseState;
    const obj = {};
    tmp.queue = obj;
    const bindResult = dispatchOptimisticSetState.bind(null, closure_118, true, obj);
    obj.dispatch = bindResult;
    const items = [baseState, bindResult];
    return items;
  },
  useMemoCache,
  useCacheRefresh() {
    const bindResult = refreshCache.bind(null, closure_118);
    mountWorkInProgressHook().memoizedState = bindResult;
    return bindResult;
  }
};
let closure_129 = {
  readContext,
  use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState() {
    return updateReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(arg0, arg1) {
    return updateDeferredValueImpl(updateWorkInProgressHook(), _null3.memoizedState, arg0, arg1);
  },
  useTransition() {
    const first = updateReducer(basicStateReducer)[0];
    let tmp2 = first;
    if ("boolean" !== typeof first) {
      tmp2 = useThenable(first);
    }
    const items = [tmp2, updateWorkInProgressHook().memoizedState];
    return items;
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus,
  useFormState: updateActionState,
  useActionState: updateActionState,
  useOptimistic(arg0, arg1) {
    return updateOptimisticImpl(updateWorkInProgressHook(), undefined, arg0, arg1);
  },
  useMemoCache,
  useCacheRefresh: updateRefresh
};
let closure_130 = {
  readContext,
  use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState() {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(arg0, arg1) {
    const tmp = updateWorkInProgressHook();
    if (null === _null3) {
      let tmp7 = mountDeferredValueImpl(tmp, arg0, arg1);
    } else {
      tmp7 = updateDeferredValueImpl(tmp, _null3.memoizedState, arg0, arg1);
    }
    return tmp7;
  },
  useTransition() {
    const first = rerenderReducer(basicStateReducer)[0];
    let tmp2 = first;
    if ("boolean" !== typeof first) {
      tmp2 = useThenable(first);
    }
    const items = [tmp2, updateWorkInProgressHook().memoizedState];
    return items;
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId,
  useHostTransitionStatus,
  useFormState: rerenderActionState,
  useActionState: rerenderActionState,
  useOptimistic(baseState) {
    const tmp = updateWorkInProgressHook();
    if (null !== closure_119) {
      let items = updateOptimisticImpl(tmp, undefined, baseState, arg1);
    } else {
      tmp.baseState = baseState;
      items = [baseState, tmp.queue.dispatch];
    }
    return items;
  },
  useMemoCache,
  useCacheRefresh: updateRefresh
};
let closure_131 = null;
let closure_132 = 0;
let closure_133 = createChildReconciler(true);
let closure_134 = createChildReconciler(false);
let closure_135 = createCursor(null);
let closure_136 = null;
let closure_138 = {
  enqueueSetState(_reactInternals, payload, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    const tmp2 = createUpdate(tmp);
    tmp2.payload = payload;
    if (null != callback) {
      tmp2.callback = callback;
    }
    const tmp3 = enqueueUpdate(_reactInternals, tmp2, tmp);
    if (null !== tmp3) {
      scheduleUpdateOnFiber(tmp3, _reactInternals, tmp);
      entangleTransitions(tmp3, _reactInternals, tmp);
    }
    markStateUpdateScheduled(_reactInternals, tmp);
  },
  enqueueReplaceState(_reactInternals, payload, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    const tmp2 = createUpdate(tmp);
    tmp2.tag = 1;
    tmp2.payload = payload;
    if (null != callback) {
      tmp2.callback = callback;
    }
    const tmp3 = enqueueUpdate(_reactInternals, tmp2, tmp);
    if (null !== tmp3) {
      scheduleUpdateOnFiber(tmp3, _reactInternals, tmp);
      entangleTransitions(tmp3, _reactInternals, tmp);
    }
    markStateUpdateScheduled(_reactInternals, tmp);
  },
  enqueueForceUpdate(_reactInternals, callback) {
    _reactInternals = _reactInternals._reactInternals;
    const tmp = requestUpdateLane(_reactInternals);
    const tmp2 = createUpdate(tmp);
    tmp2.tag = 2;
    if (null != callback) {
      tmp2.callback = callback;
    }
    const tmp3 = enqueueUpdate(_reactInternals, tmp2, tmp);
    if (null !== tmp3) {
      scheduleUpdateOnFiber(tmp3, _reactInternals, tmp);
      entangleTransitions(tmp3, _reactInternals, tmp);
    }
    let tmp8 = null !== _null;
    if (tmp8) {
      tmp8 = "function" === typeof _null.markForceUpdateScheduled;
    }
    if (tmp8) {
      const result = _null.markForceUpdateScheduled(_reactInternals, tmp);
    }
  }
};
let closure_139 = "function" === typeof reportError ? reportError : (message) => {
  if ("object" === typeof window) {
    const _window = window;
    if ("function" === typeof window.ErrorEvent) {
      const _window2 = window;
      const obj = {};
      if ("object" === typeof message) {
        if (null !== message) {
          if ("string" === typeof message.message) {
            const _String2 = String;
            let StringResult = String(message.message);
          }
          obj.message = StringResult;
          obj.error = message;
          const prototype = ErrorEvent.prototype;
          const errorEvent = new ErrorEvent("error", obj);
          const _window3 = window;
        }
      }
      const _String = String;
      StringResult = String(message);
    }
    const _console = console;
    console.error(message);
  }
  if ("object" === typeof process) {
    const _process = process;
    if ("function" === typeof process.emit) {
      const _process2 = process;
      process.emit("uncaughtException", message);
    }
  }
};
let closure_140 = Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.");
let closure_141 = false;
let closure_142 = {};
let closure_143 = false;
let closure_144 = false;
let closure_145 = "function" === typeof WeakSet ? WeakSet : Set;
let closure_146 = null;
let closure_147 = null;
let closure_148 = null;
let closure_149 = null;
let closure_150 = false;
let closure_151 = 8192;
let closure_152 = {
  getCacheForType(arg0) {
    const tmp = readContext(obj12);
    const data = tmp.data;
    let value = data.get(arg0);
    if (undefined === value) {
      const tmp3 = arg0();
      const data2 = tmp.data;
      const result = data2.set(arg0, tmp3);
      value = tmp3;
    }
    return value;
  }
};
let closure_153 = "function" === typeof WeakMap ? WeakMap : Map;
let closure_154 = 0;
let closure_155 = null;
let closure_156 = null;
let closure_157 = 0;
let closure_158 = 0;
let closure_159 = null;
let closure_160 = false;
let closure_161 = false;
let closure_162 = false;
let closure_163 = 0;
let closure_164 = 0;
let closure_165 = 0;
let closure_166 = 0;
let closure_167 = 0;
let closure_168 = 0;
let closure_169 = 0;
let closure_170 = null;
let closure_171 = null;
let closure_172 = false;
let closure_173 = 0;
let closure_174 = Infinity;
let closure_175 = null;
let closure_176 = null;
let closure_177 = 0;
let closure_178 = null;
let closure_179 = null;
let closure_180 = 0;
let closure_181 = 0;
let closure_182 = null;
let closure_183 = null;
let closure_184 = 0;
let closure_185 = null;
const version = _module1.version;
if ("19.1.0" !== version) {
  const _Error5 = Error;
  throw Error("Incompatible React versions: The \"react\" and \"react-native-renderer\" packages must have the exact same version. Instead got:\n  - react:                  " + version + "\n  - react-native-renderer:  19.1.0\nLearn more: https://react.dev/warnings/version-mismatch");
} else if ("function" !== typeof require(dependencyMap[2]).ReactFiberErrorDialog.showErrorDialog) {
  const _Error4 = Error;
  throw Error("Expected ReactFiberErrorDialog.showErrorDialog to be a function.");
} else {
  batchedUpdatesImpl = function batchedUpdatesImpl(arg0, arg1) {
    closure_154 = closure_154 | 1;
    if (0 === closure_154) {
      let closure_174 = require(dependencyMap[3]).unstable_now() + 500;
      flushSyncWorkAcrossRoots_impl(0, true);
      const obj = require(dependencyMap[3]);
    }
    return arg0(arg1);
  };
  const _Map = Map;
  const map2 = new Map();
  const obj13 = { "Bool(false)": "canUnlinkLobby", "Bool(false)": "CONTEXT_MENU_OPEN_GAME_LINK", "Bool(false)": "isArray", "Bool(false)": "PARENTAL_CONSENT_CONNECTION", "Bool(false)": "pricingResultIdMap", currentDispatcherRef: __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE };
  if (null !== obj10) {
    tmp37.rendererConfig = obj10;
  }
  obj13.getLaneLabelMap = () => {
    const map = new Map();
    let num = 1;
    let num2 = 0;
    do {
      let tmp = closure_247;
      let result = map.set(num, closure_247(num));
      num = num * 2;
      num2 = num2 + 1;
    } while (31 > num2);
    return map;
  };
  obj13.injectProfilingHooks = (arg0) => {
    let closure_59 = arg0;
  };
  if ("undefined" !== typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    __REACT_DEVTOOLS_GLOBAL_HOOK__4 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.isDisabled) {
      if (tmp28.supportsFiber) {
        closure_57 = __REACT_DEVTOOLS_GLOBAL_HOOK__4.inject(obj13);
      }
    }
  }
  while (true) {
    exports.createPortal = (children, containerInfo) => {
      let tmp = null;
      if (2 < arguments.length) {
        tmp = null;
        if (undefined !== arguments[2]) {
          tmp = arguments[2];
        }
      }
      return function createPortal$1(children, containerInfo, implementation, arg3) {
        let tmp = null;
        if (3 < arguments.length) {
          tmp = null;
          if (undefined !== arguments[3]) {
            tmp = arguments[3];
          }
        }
        const obj = { $$typeof: closure_10 };
        let text = null;
        if (null != tmp) {
          text = `${tmp}`;
        }
        obj.key = text;
        obj.children = children;
        obj.containerInfo = containerInfo;
        obj.implementation = implementation;
        return obj;
      }(children, containerInfo, null, tmp);
    };
    exports.dispatchCommand = (_nativeTag, blur, items) => {
      if (null != _nativeTag._nativeTag) {
        _nativeTag = _nativeTag._nativeTag;
      } else {
        _nativeTag = require(dependencyMap[2]).getNativeTagFromPublicInstance(_nativeTag);
        const obj = require(dependencyMap[2]);
      }
      if (null != _nativeTag) {
        const nodeFromPublicInstance = require(dependencyMap[2]).getNodeFromPublicInstance(_nativeTag);
        if (null != nodeFromPublicInstance) {
          globalThis.nativeFabricUIManager.dispatchCommand(nodeFromPublicInstance, blur, items);
        } else {
          const UIManager = require(dependencyMap[2]).UIManager;
          const result = UIManager.dispatchViewManagerCommand(_nativeTag, blur, items);
        }
        const obj2 = require(dependencyMap[2]);
      }
    };
    exports.findHostInstance_DEPRECATED = (arg0) => {
      let canonical;
      let publicInstance;
      canonical = arg0;
      if (null == arg0) {
        return null;
      } else {
        if (!canonical.canonical) {
          publicInstance = canonical;
          if (!canonical._nativeTag) {
            publicInstance = findHostInstance(canonical);
          }
        }
        ({ canonical, publicInstance } = canonical);
      }
    };
    exports.findNodeHandle = (_nativeTag) => {
      if (null == _nativeTag) {
        return null;
      } else if ("number" === typeof _nativeTag) {
        return _nativeTag;
      } else if (_nativeTag._nativeTag) {
        return _nativeTag._nativeTag;
      } else {
        if (null != _nativeTag.canonical) {
          if (null != _nativeTag.canonical.nativeTag) {
            return _nativeTag.canonical.nativeTag;
          }
        }
        let nativeTagFromPublicInstance = require(dependencyMap[2]).getNativeTagFromPublicInstance(_nativeTag);
        if (!nativeTagFromPublicInstance) {
          const tmp5 = findHostInstance(_nativeTag);
          if (null == tmp5) {
            nativeTagFromPublicInstance = tmp5;
          } else if (null != tmp5._nativeTag) {
            _nativeTag = tmp5._nativeTag;
          } else {
            _nativeTag = require(dependencyMap[2]).getNativeTagFromPublicInstance(tmp5);
            const obj2 = require(dependencyMap[2]);
          }
        }
        return nativeTagFromPublicInstance;
      }
    };
    exports.isChildPublicInstance = () => {
      throw Error("isChildPublicInstance() is not available in production.");
    };
    exports.render = (arg0, containerTag, arg2, onUncaughtError) => {
      let value = map2.get(containerTag);
      if (!value) {
        onUncaughtError = nativeOnUncaughtError;
        let onCaughtError = nativeOnCaughtError;
        let onRecoverableError = defaultOnRecoverableError;
        let tmp2 = onUncaughtError;
        if (onUncaughtError) {
          tmp2 = undefined !== onUncaughtError.onUncaughtError;
        }
        if (tmp2) {
          onUncaughtError = onUncaughtError.onUncaughtError;
        }
        let tmp3 = onUncaughtError;
        if (onUncaughtError) {
          tmp3 = undefined !== onUncaughtError.onCaughtError;
        }
        if (tmp3) {
          onCaughtError = onUncaughtError.onCaughtError;
        }
        let tmp4 = onUncaughtError;
        if (onUncaughtError) {
          tmp4 = undefined !== onUncaughtError.onRecoverableError;
        }
        if (tmp4) {
          onRecoverableError = onUncaughtError.onRecoverableError;
        }
        let obj = { containerTag, publicInstance: null };
        const prototype = FiberRootNode.prototype;
        const tmp14 = new FiberRootNode(obj, 0, false, "", onUncaughtError, onCaughtError, onRecoverableError, null);
        let num2 = 0;
        if (closure_60) {
          num2 = 2;
        }
        const tmp21 = createFiberImplClass(3, null, null, num2);
        tmp14.current = tmp21;
        tmp21.stateNode = tmp14;
        const tmp23 = createCache();
        tmp23.refCount = tmp23.refCount + 1;
        tmp14.pooledCache = tmp23;
        tmp23.refCount = tmp23.refCount + 1;
        obj = { body: "<string:1243348993>", code: "<string:2137063425>", cache: tmp23 };
        tmp21.memoizedState = obj;
        initializeUpdateQueue(tmp21);
        const result = map2.set(containerTag, tmp14);
        value = tmp14;
      }
      updateContainer(arg0, value, undefined, arg2);
      const current = value.current;
      let stateNode = null;
      if (current.child) {
        const tag = current.child.tag;
        if (27 !== tag) {
          if (5 !== tag) {
            stateNode = current.child.stateNode;
          }
        }
        stateNode = getPublicInstance(current.child.stateNode);
      }
      return stateNode;
    };
    exports.sendAccessibilityEvent = (_nativeTag) => {
      if (null != _nativeTag._nativeTag) {
        _nativeTag = _nativeTag._nativeTag;
      } else {
        _nativeTag = require(dependencyMap[2]).getNativeTagFromPublicInstance(_nativeTag);
        const obj = require(dependencyMap[2]);
      }
      if (null != _nativeTag) {
        const nodeFromPublicInstance = require(dependencyMap[2]).getNodeFromPublicInstance(_nativeTag);
        if (null != nodeFromPublicInstance) {
          const result = globalThis.nativeFabricUIManager.sendAccessibilityEvent(nodeFromPublicInstance, arg1);
        } else {
          const result1 = require(dependencyMap[2]).legacySendAccessibilityEvent(_nativeTag, arg1);
          const obj3 = require(dependencyMap[2]);
        }
        const obj2 = require(dependencyMap[2]);
      }
    };
    exports.unmountComponentAtNode = unmountComponentAtNode;
    exports.unmountComponentAtNodeAndRemoveContainer = (arg0) => {
      unmountComponentAtNode(arg0);
      const UIManager = require(dependencyMap[2]).UIManager;
      UIManager.removeRootView(arg0);
    };
    exports.unstable_batchedUpdates = batchedUpdates$1;
    let tmp30 = "undefined" !== typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tmp30) {
      break;
    } else {
      tmp30 = "function" === typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop;
      // break
    }
    if (tmp30) {
      let _Error3 = Error;
      let result4 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }
  }
}
