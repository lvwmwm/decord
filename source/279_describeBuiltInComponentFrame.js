// Module ID: 279
// Function ID: 3926
// Name: describeBuiltInComponentFrame
// Dependencies: []

// Module 279 (describeBuiltInComponentFrame)
import module_0 from "module_0";
import closure_130 from "module_0";

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
                const items = [true, true];
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
    let tmp2 = closure_180;
    let tmp3 = _return;
    str = `${closure_180(_return)}`;
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
  if (items3[closure_195(undefined, arg0)]) {
    tmp.touchActive = true;
    ({ currentPageX: tmp.previousPageX, currentPageY: tmp.previousPageY, currentTimeStamp: tmp.previousTimeStamp } = tmp);
    ({ pageX: tmp.currentPageX, pageY: tmp.currentPageY } = arg0);
    tmp.currentTimeStamp = timestampForTouch(arg0);
    obj1.mostRecentTimeStamp = timestampForTouch(arg0);
  }
}
function recordTouchEnd(arg0) {
  if (items3[closure_195(undefined, arg0)]) {
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
      let tmp3 = closure_203;
      tmp = closure_203(tmp);
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
          let tmp12 = closure_200;
          tmp11 = closure_200(tmp2, tmp5);
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
      callback2(tmp15, closure_219);
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
              let tmp29 = closure_226;
              let tmp30 = tmp27;
              let tmp31 = arg3;
              tmp27 = closure_226(tmp27, arg1[num3], arg2[num3], arg3);
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
              let tmp36 = closure_228;
              tmp32 = closure_228(tmp32, arg1[sum], arg3);
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
              let tmp39 = closure_227;
              tmp37 = closure_227(tmp37, arg2[sum1], arg3);
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
          let tmp9 = closure_227;
          tmp7 = closure_227(tmp7, arg1[num], arg2);
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
          let tmp9 = closure_228;
          tmp7 = closure_228(tmp7, arg1[num], arg2);
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
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.setStrictMode) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__2.setStrictMode(closure_57, arg0);
    }
  }
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
  let closure_62 = tmp2;
  if (!(4194048 & closure_62 << 1)) {
    closure_62 = 256;
  }
  return closure_62;
}
function claimNextRetryLane() {
  let closure_63 = tmp2;
  if (!(62914560 & closure_63 << 1)) {
    closure_63 = 4194304;
  }
  return closure_63;
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
  let sum = closure_65;
  if (1 === closure_65 % 10) {
    sum = tmp + 2;
  }
  closure_65 = sum + 2;
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
  if (0 <= closure_71) {
    arg0.current = closure_70[closure_71];
    closure_70[closure_71] = null;
    closure_71 = closure_71 - 1;
  }
}
function push(current, current2) {
  const sum = closure_71 + 1;
  closure_71 = sum;
  closure_70[sum] = current.current;
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
  push(closure_76, arg1);
  push(closure_75, arg0);
  push(closure_74, null);
  pop(closure_74);
  push(closure_74, { isInAParentText: false });
}
function popHostContainer() {
  pop(closure_74);
  pop(closure_75);
  pop(closure_76);
}
function pushHostContext(memoizedState) {
  if (null !== memoizedState.memoizedState) {
    push(closure_77, memoizedState);
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
    push(closure_75, memoizedState);
    push(ref, tmp5);
  }
}
function popHostContext(arg0) {
  if (ref2.current === arg0) {
    pop(closure_74);
    pop(ref2);
  }
  if (ref3.current === arg0) {
    pop(ref3);
    obj11._currentValue = null;
  }
}
function upgradeHydrationErrorsToRecoverable() {
  if (null === closure_78) {
    return tmp;
  } else {
    if (null === navigation) {
      const navigation = tmp;
    } else {
      const push = navigation.push;
      push.apply(navigation, tmp);
    }
    closure_78 = null;
  }
}
function pushProvider(arg0, _currentValue, _currentValue2) {
  push(closure_80, _currentValue._currentValue);
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
  let closure_81 = dependencies;
  let closure_82 = null;
  dependencies = dependencies.dependencies;
  if (null !== dependencies) {
    dependencies.firstContext = null;
  }
}
function readContext(arg0) {
  return readContextForConsumer(closure_81, arg0);
}
function readContextDuringReconciliation(arg0, arg1) {
  if (null === closure_81) {
    prepareToReadContext(arg0);
  }
  return readContextForConsumer(arg0, arg1);
}
function readContextForConsumer(flags, _currentValue) {
  _currentValue = _currentValue._currentValue;
  let obj = { context: _currentValue, memoizedValue: _currentValue, next: null };
  if (null === closure_82) {
    if (null === flags) {
      const _Error = Error;
      throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    } else {
      closure_82 = obj;
      obj = { lanes: 0 };
      obj.firstContext = obj;
      flags.dependencies = obj;
      flags.flags = flags.flags | 524288;
    }
  } else {
    closure_82.next = obj;
    closure_82 = obj;
  }
  return _currentValue;
}
function createCache() {
  const obj = { controller: new closure_83() };
  const tmp = new closure_83();
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
function ensureRootIsScheduled(next) {
  let tmp = next !== closure_86;
  if (tmp) {
    tmp = null === next.next;
  }
  if (tmp) {
    if (null === closure_86) {
      closure_86 = next;
      let closure_85 = next;
    } else {
      closure_86.next = next;
      closure_86 = next;
    }
  }
  let closure_88 = true;
  if (!closure_87) {
    closure_87 = true;
    const result = require(dependencyMap[3]).unstable_scheduleCallback(require(dependencyMap[3]).unstable_ImmediatePriority, processRootScheduleInImmediateTask);
    const obj = require(dependencyMap[3]);
  }
}
function flushSyncWorkAcrossRoots_impl(arg0, arg1) {
  let pingedLanes;
  let suspendedLanes;
  if (!closure_89) {
    if (closure_88) {
      closure_89 = true;
      while (true) {
        let iter = closure_85;
        let tmp6 = tmp4;
        let tmp7 = tmp5;
        let flag3 = false;
        let flag4 = false;
        if (null !== closure_85) {
          while (true) {
            if (!arg1) {
              {
                let tmp10 = closure_146;
                let num9 = 0;
                let tmp9 = getNextLanes;
                if (iter === closure_146) {
                  num9 = closure_148;
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
          closure_89 = false;
        }
      }
    }
  }
}
function processRootScheduleInImmediateTask() {
  let next;
  let closure_87 = false;
  let closure_88 = false;
  if (0 !== closure_90) {
    closure_90 = 0;
  }
  require(dependencyMap[3]);
  let iter = closure_85;
  let tmp3 = null;
  if (null !== closure_85) {
    do {
      next = iter.next;
      let tmp4 = closure_271;
      let tmp5 = closure_271(iter, tmp2);
      let tmp6 = iter;
      if (0 === tmp5) {
        iter.next = null;
        if (null === tmp3) {
          closure_85 = next;
        } else {
          tmp3.next = next;
        }
        let tmp7 = tmp3;
        if (null === next) {
          closure_86 = tmp3;
          tmp7 = tmp3;
        }
      } else {
        tmp7 = iter;
        if (3 & tmp5) {
          closure_88 = true;
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
      let tmp4 = closure_59;
      let diff = 31 - closure_59(tmp3);
      let tmp6 = 1 << diff;
      let tmp7 = expirationTimes[diff];
      let tmp8 = tmp3;
      if (-1 === tmp7) {
        let tmp9 = tmp6 & tmp && !(tmp6 & tmp2);
        if (!tmp9) {
          let tmp10 = closure_235;
          expirationTimes[diff] = closure_235(tmp6, arg1);
        }
      } else if (tmp7 <= arg1) {
        expirationTimes.expiredLanes = expirationTimes.expiredLanes | tmp6;
      }
      tmp3 = tmp3 & ~tmp6;
    } while (0 < tmp3);
  }
  let num = 0;
  if (expirationTimes === closure_146) {
    num = closure_148;
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
  if (0 !== closure_168) {
    if (5 !== closure_168) {
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
  if (callbackNode === closure_146) {
    num2 = closure_148;
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
    performWorkOnRoot(arg0, arg1, true);
  }
}
function requestTransitionLane() {
  if (0 === closure_90) {
    closure_90 = claimNextTransitionLane();
  }
  return closure_90;
}
function pingEngtangledActionScope() {
  const diff = closure_92 - 1;
  closure_92 = diff;
  if (0 == diff) {
    if (null !== length) {
      if (null !== closure_94) {
        closure_94.status = "fulfilled";
      }
      let length = null;
      let closure_93 = 0;
      closure_94 = null;
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
    pooledCache = _null4.pooledCache;
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
    const obj = { parent: closure_84._currentValue, pool: tmp };
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
      if (null !== _null4) {
        if (100 < _null4.shellSuspendCounter) {
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
      let closure_102 = iter;
      throw closure_98;
    }
  }
}
function getSuspendedThenable() {
  if (null === closure_102) {
    const _Error = Error;
    throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
  } else {
    closure_102 = null;
    return closure_102;
  }
}
function checkIfUseWrappedInAsyncCatch(arg0) {
  throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
}
function finishQueueingConcurrentUpdates() {
  let tmp13;
  let closure_104 = 0;
  let closure_105 = 0;
  let num = 0;
  if (0 < closure_104) {
    while (true) {
      let tmp3 = closure_103;
      let tmp4 = closure_103;
      let tmp5 = +num;
      let sum = tmp5 + 1;
      closure_103[tmp5] = null;
      let tmp7 = closure_103;
      let tmp9 = closure_103;
      let tmp10 = +sum;
      let sum1 = tmp10 + 1;
      closure_103[tmp10] = null;
      let tmp12 = closure_103;
      tmp13 = closure_103[sum1];
      let tmp14 = closure_103;
      let tmp15 = +sum1;
      let sum2 = tmp15 + 1;
      closure_103[tmp15] = null;
      let tmp17 = closure_103;
      let tmp18 = closure_103[sum2];
      let tmp19 = closure_103;
      let tmp20 = +sum2;
      num = tmp20 + 1;
      closure_103[tmp20] = null;
      let tmp21 = tmp2;
      if (null !== closure_103[sum]) {
        tmp21 = tmp2;
        if (null !== tmp13) {
          break;
        }
      }
      if (0 !== tmp18) {
        let tmp23 = markUpdateLaneFromFiberToRoot;
        let tmp24 = markUpdateLaneFromFiberToRoot(closure_103[num], tmp13, tmp18);
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
  let closure_104 = tmp + 1;
  closure_103[+closure_104] = lanes;
  closure_104 = tmp2 + 1;
  closure_103[+closure_104] = arg1;
  closure_104 = tmp3 + 1;
  closure_103[+closure_104] = arg2;
  closure_104 = tmp4 + 1;
  closure_103[+closure_104] = arg3;
  closure_105 = closure_105 | arg3;
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
  if (50 < closure_175) {
    closure_175 = 0;
    let closure_176 = null;
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
function initializeUpdateQueue(baseState) {
  baseState.updateQueue = { baseState: baseState.memoizedState, shared: { <string:2801796165>: "decimal-pad", <string:2264925301>: "number-pad", <string:3120563277>: "phone-pad" } };
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
    if (2 & closure_145) {
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
  if (closure_107) {
    if (null !== closure_94) {
      throw closure_94;
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
  let closure_107 = false;
  updateQueue = updateQueue.updateQueue;
  let closure_106 = false;
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
        let tmp7 = closure_148;
        let tmp6 = (closure_148 & tmp4) === tmp4;
      } else {
        tmp6 = (arg3 & tmp4) === tmp4;
      }
      if (tmp6) {
        let tmp12 = 0 !== tmp4;
        if (tmp12) {
          let tmp13 = closure_93;
          tmp12 = tmp4 === closure_93;
        }
        if (tmp12) {
          closure_107 = true;
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
              closure_106 = true;
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
    closure_156 = closure_156 | tmp10;
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
        let tmp = closure_299;
        let tmp2 = closure_299(callbacks[num], arg1);
        num = num + 1;
        length = callbacks.length;
      } while (num < length);
    }
  }
}
function pushHiddenContext(arg0, baseLanes) {
  push(module_0, closure_154);
  push(closure_108, baseLanes);
  closure_154 = closure_154 | baseLanes.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(module_0, closure_154);
  push(ref6, ref6.current);
}
function popHiddenContext() {
  const current = ref7.current;
  pop(closure_108);
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
  let closure_110 = arg5;
  let closure_111 = arg1;
  arg1.memoizedState = null;
  arg1.updateQueue = null;
  arg1.lanes = 0;
  if (null !== memoizedState) {
    if (null !== memoizedState.memoizedState) {
      let tmp2 = closure_122;
    }
    tmp.H = tmp2;
    let closure_116 = false;
    let tmp3 = arg2(arg3, arg4);
    closure_116 = false;
    if (closure_115) {
      tmp3 = renderWithHooksAgain(arg1, arg2, arg3, arg4);
    }
    finishRenderingHooks(memoizedState);
    return tmp3;
  }
  tmp2 = closure_121;
}
function finishRenderingHooks(dependencies) {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = closure_120;
  let tmp = null !== _null2;
  if (tmp) {
    tmp = null !== _null2.next;
  }
  let closure_110 = 0;
  let closure_111 = null;
  const _null2 = null;
  let closure_113 = null;
  let closure_114 = false;
  let closure_117 = 0;
  let closure_118 = null;
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
      let closure_134 = true;
    }
  }
}
function renderWithHooksAgain(updateQueue) {
  let closure_111 = updateQueue;
  let num = 0;
  while (true) {
    let tmp = closure_115;
    if (closure_115) {
      let closure_118 = null;
    }
    let closure_117 = 0;
    closure_115 = false;
    if (25 <= num) {
      break;
    } else {
      num = num + 1;
      let closure_112 = null;
      let closure_113 = null;
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
      let tmp3 = closure_123;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = closure_123;
      let tmp5 = closure_115;
      if (closure_115) {
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
  if (null !== _null2) {
    memoizedState = _null2.memoizedState;
  }
  if (memoizedState !== H.useState()[0]) {
    _null.flags = _null.flags | 1024;
  }
  return tmp;
}
function bailoutHooks(updateQueue, flags) {
  flags.updateQueue = updateQueue.updateQueue;
  flags.flags = flags.flags & -2053;
  updateQueue.lanes = updateQueue.lanes & ~arg2;
}
function resetHooksOnUnwind(memoizedState) {
  if (closure_114) {
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
    closure_114 = false;
  }
  let closure_110 = 0;
  let closure_111 = null;
  let closure_112 = null;
  let closure_113 = null;
  let closure_115 = false;
  let closure_117 = 0;
  let closure_118 = null;
}
function mountWorkInProgressHook() {
  const obj = {};
  if (null === closure_113) {
    closure_113 = obj;
    closure_111.memoizedState = obj;
  } else {
    closure_113.next = obj;
    closure_113 = obj;
  }
  return closure_113;
}
function updateWorkInProgressHook() {
  if (null === _null2) {
    const alternate = _null.alternate;
    let memoizedState = null;
    if (null !== alternate) {
      memoizedState = alternate.memoizedState;
    }
    let next = memoizedState;
  } else {
    next = _null2.next;
  }
  if (null === _null3) {
    let next2 = _null.memoizedState;
  } else {
    next2 = _null3.next;
  }
  if (null !== next2) {
    let _null3 = next2;
    let _null2 = next;
  } else if (null === next) {
    if (null === _null.alternate) {
      const _Error2 = Error;
      throw Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.");
    } else {
      const _Error = Error;
      throw Error("Rendered more hooks than during the previous render.");
    }
  } else {
    const obj = {};
    _null2 = next;
    obj.memoizedState = next.memoizedState;
    obj.baseState = _null2.baseState;
    obj.baseQueue = _null2.baseQueue;
    obj.queue = _null2.queue;
    obj.next = null;
    if (null === _null3) {
      _null3 = obj;
      _null.memoizedState = obj;
    } else {
      _null3.next = obj;
      _null3 = obj;
    }
  }
  return _null3;
}
function useThenable(arg0) {
  closure_117 = closure_117 + 1;
  if (null === closure_118) {
    closure_118 = [];
  }
  if (null === _null3) {
    let next = tmp3.memoizedState;
  } else {
    next = _null3.next;
  }
  if (null !== next) {
    return tmp2;
  } else {
    const alternate = tmp3.alternate;
    if (null !== alternate) {
      if (null !== alternate.memoizedState) {
        let tmp6 = closure_122;
      }
      tmp5.H = tmp6;
    }
    tmp6 = closure_121;
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
  let updateQueue = _null.updateQueue;
  let memoCache = null;
  if (null !== updateQueue) {
    memoCache = updateQueue.memoCache;
  }
  let tmp2 = memoCache;
  if (null == memoCache) {
    const alternate = _null.alternate;
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
    obj = { unicodeVersion: "onKeyPress", TypeError: "onKeyPressCapture", body: "onSubmitEditing", variant: "onSubmitEditingCapture" };
    _null.updateQueue = obj;
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
  return updateReducerImpl(updateWorkInProgressHook(), closure_112, arg0);
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
          let tmp10 = closure_148;
          let tmp9 = (closure_148 & tmp7) === tmp7;
        } else {
          let tmp8 = closure_110;
          tmp9 = (closure_110 & tmp7) === tmp7;
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
          let tmp13 = _null;
          _null.lanes = _null.lanes | tmp7;
          let tmp14 = closure_156;
          closure_156 = closure_156 | tmp7;
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
          let tmp44 = closure_110;
          if ((closure_110 & revertLane) === revertLane) {
            let next2 = iter2.next;
            let tmp21 = closure_93;
            let tmp22 = tmp3;
            let tmp23 = tmp4;
            let tmp24 = tmp5;
            let tmp25 = tmp6;
            let tmp26 = next2;
            let flag4 = flag2;
            if (revertLane === closure_93) {
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
              let closure_134 = true;
              if (flag4) {
                if (null !== closure_94) {
                  throw closure_94;
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
            let tmp19 = _null;
            _null.lanes = _null.lanes | revertLane;
            let tmp20 = closure_156;
            closure_156 = closure_156 | revertLane;
            let flag3 = flag2;
          }
          let action = iter2.action;
          let tmp29 = closure_116;
          if (closure_116) {
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
        obj = { <string:3625373795>: -536870861, <string:1634093829>: -299892737 };
        ({ action: obj3.action, hasEagerState: obj3.hasEagerState, eagerState: obj3.eagerState } = iter2);
        obj.next = null;
        tmp6.next = obj;
        tmp27 = obj;
      }
      tmp17 = tmp4;
      tmp18 = tmp5;
      obj = tmp27;
      flag3 = flag2;
      if (tmp7 === closure_93) {
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
        let closure_134 = true;
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
  let tmp5 = closure_112;
  if (!closure_112) {
    tmp5 = tmp2;
  }
  const tmp6 = !is(tmp5.memoizedState, tmp3);
  if (tmp6) {
    tmp2.memoizedState = tmp3;
    let closure_134 = true;
  }
  const queue = tmp2.queue;
  const items = [bindResult1];
  updateEffectImpl(2048, 8, subscribeToStore.bind(null, closure_111, queue, bindResult1), items);
  if (queue.getSnapshot === bindResult) {
    return tmp3;
  }
  closure_111.flags = closure_111.flags | 2048;
  pushSimpleEffect(9, createEffectInstance(), updateStoreInstance.bind(null, closure_111, queue, tmp3, bindResult), null);
  if (null === closure_146) {
    const _Error = Error;
    throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
  } else if (!(124 & closure_110)) {
    pushStoreConsistencyCheck(tmp, bindResult, tmp3);
  }
}
function pushStoreConsistencyCheck(flags, getSnapshot, value) {
  flags.flags = flags.flags | 16384;
  let obj = { getSnapshot, value };
  const updateQueue = _null.updateQueue;
  if (null === updateQueue) {
    obj = { unicodeVersion: "onKeyPress", TypeError: "onKeyPressCapture", body: "onSubmitEditing", variant: "onSubmitEditingCapture" };
    _null.updateQueue = obj;
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
    if (closure_116) {
      setIsStrictModeForDevtools(true);
      arg0();
      setIsStrictModeForDevtools(false);
      tmp2 = tmp4;
    }
  }
  tmp.baseState = tmp2;
  tmp.memoizedState = tmp2;
  const obj = { HierarchyRequestError: "decimal-pad", WrongDocumentError: "number-pad", InvalidCharacterError: "phone-pad", lastRenderedReducer: basicStateReducer, lastRenderedState: tmp2 };
  tmp.queue = obj;
  return tmp;
}
function updateOptimisticImpl(arg0, arg1, baseState) {
  let tmp = arg3;
  arg0.baseState = baseState;
  if ("function" !== typeof arg3) {
    tmp = basicStateReducer;
  }
  return updateReducerImpl(arg0, closure_112, tmp);
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
      let tmp = closure_330;
      let tmp2 = closure_330(iter);
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
  let obj = { HierarchyRequestError: "decimal-pad", WrongDocumentError: "number-pad", InvalidCharacterError: "phone-pad", lastRenderedReducer: actionStateReducer, lastRenderedState: baseState };
  tmp.queue = obj;
  const bindResult = dispatchSetState.bind(null, closure_111, obj);
  obj.dispatch = bindResult;
  obj = { state: baseState, dispatch: null, action, pending: null };
  const tmp4 = mountWorkInProgressHook();
  tmp4.queue = obj;
  const bindResult2 = dispatchActionState.bind(null, closure_111, obj, dispatchOptimisticSetState.bind(null, closure_111, false, mountStateImpl(false).queue), bindResult);
  obj.dispatch = bindResult2;
  tmp4.memoizedState = action;
  const items = [baseState, bindResult2, false];
  return items;
}
function updateActionState(arg0) {
  return updateActionStateImpl(updateWorkInProgressHook(), closure_112, arg0);
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
        _null.flags = _null.flags | 2048;
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
  if (null !== closure_112) {
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
  let updateQueue = _null.updateQueue;
  if (null === updateQueue) {
    obj = { unicodeVersion: "onKeyPress", TypeError: "onKeyPressCapture", body: "onSubmitEditing", variant: "onSubmitEditingCapture" };
    _null.updateQueue = obj;
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
  _null.flags = _null.flags | arg0;
  mountWorkInProgressHook().memoizedState = pushSimpleEffect(1 | arg1, { destroy: undefined, resource: undefined }, arg2, tmp2);
}
function updateEffectImpl(arg0, arg1, arg2, arg3) {
  const tmp = updateWorkInProgressHook();
  let tmp2 = null;
  if (undefined !== arg3) {
    tmp2 = arg3;
  }
  const inst = tmp.memoizedState.inst;
  if (null !== _null2) {
    if (null !== tmp2) {
      if (areHookInputsEqual(tmp2, _null2.memoizedState.deps)) {
        tmp.memoizedState = pushSimpleEffect(arg1, inst, arg2, tmp2);
      }
    }
  }
  _null.flags = _null.flags | arg0;
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
  if (closure_116) {
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
    if (!(1073741824 & closure_110)) {
      arg0.memoizedState = tmp;
      const tmp4 = requestDeferredLane();
      _null.lanes = _null.lanes | tmp4;
      closure_156 = closure_156 | tmp4;
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
      let closure_134 = true;
      tmp4 = tmp11;
    }
  } else if (42 & closure_110) {
    const tmp6 = requestDeferredLane();
    _null.lanes = _null.lanes | tmp6;
    closure_156 = closure_156 | tmp6;
    tmp4 = arg1;
  } else {
    closure_134 = true;
    arg0.memoizedState = memoizedState;
    tmp4 = memoizedState;
  }
}
function startTransition(arg0, arg1, arg2, arg3, arg4) {
  let num = 8;
  if (0 !== closure_68) {
    num = 8;
    if (8 > tmp2) {
      num = tmp;
    }
  }
  closure_68 = num;
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
            "Null": null,
            "Null": null,
            "Null": null,
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
            "Null": null,
            "Null": null,
            "Null": null,
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
      closure_68 = tmp2;
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
function dispatchReducerAction(arg0, arg1, action) {
  const tmp = requestUpdateLane(arg0);
  const obj = { "Bool(true)": "decimal-pad", "Bool(true)": "number-pad", "Bool(true)": "phone-pad", "Bool(true)": "default", "Bool(true)": "email-address", "Bool(true)": "url", lane: tmp, action };
  if (isRenderPhaseUpdate(arg0)) {
    enqueueRenderPhaseUpdate(arg1, obj);
  } else {
    const tmp7 = enqueueConcurrentHookUpdate(arg0, arg1, obj, tmp);
    if (null !== tmp7) {
      scheduleUpdateOnFiber(tmp7, arg0, tmp);
      entangleTransitionUpdate(tmp7, arg1, tmp);
    }
  }
}
function dispatchSetState(arg0, arg1, arg2) {
  dispatchSetStateInternal(arg0, arg1, arg2, requestUpdateLane(arg0));
}
function dispatchSetStateInternal(arg0, lastRenderedReducer, action, lane) {
  const obj = { "Bool(true)": "decimal-pad", "Bool(true)": "number-pad", "Bool(true)": "phone-pad", "Bool(true)": "default", "Bool(true)": "email-address", "Bool(true)": "url", lane, action };
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
            if (null === closure_146) {
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
function dispatchOptimisticSetState(arg0, arg1, arg2, action) {
  const obj = { revertLane: requestTransitionLane(), action };
  if (isRenderPhaseUpdate(arg0)) {
    if (arg1) {
      const _Error = Error;
      throw Error("Cannot update optimistic state while rendering.");
    }
  } else {
    const tmp5 = enqueueConcurrentHookUpdate(arg0, arg2, obj, 2);
    if (null !== tmp5) {
      scheduleUpdateOnFiber(tmp5, arg0, 2);
    }
  }
}
function isRenderPhaseUpdate(alternate) {
  alternate = alternate.alternate;
  let tmp = alternate === closure_111;
  if (!tmp) {
    let tmp3 = null !== alternate;
    if (tmp3) {
      tmp3 = alternate === closure_111;
    }
    tmp = tmp3;
  }
  return tmp;
}
function enqueueRenderPhaseUpdate(pending, next) {
  let closure_114 = true;
  let closure_115 = true;
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
  closure_125 = closure_125 + 1;
  if (null === closure_124) {
    closure_124 = [];
  }
  return trackUsedThenable(closure_124, arg0, closure_125);
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
    let closure_125 = 0;
    let closure_124 = null;
    return reconcileChildFibersImpl(arg0, arg1, arg2, arg3);
  };
}
function pushPrimaryTreeSuspenseHandler(alternate) {
  alternate = alternate.alternate;
  push(closure_130, 1 & closure_130.current);
  push(closure_128, alternate);
  let tmp3 = null === closure_129;
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
    closure_129 = alternate;
  }
}
function pushOffscreenSuspenseHandler(tag) {
  if (22 === tag.tag) {
    push(closure_130, closure_130.current);
    push(closure_128, tag);
    if (null === closure_129) {
      const alternate = tag.alternate;
      if (tmp10) {
        closure_129 = tag;
      }
      const tmp10 = null !== alternate && null !== alternate.memoizedState;
    }
  } else {
    reuseSuspenseHandlerOnStack();
  }
}
function reuseSuspenseHandlerOnStack() {
  push(closure_130, closure_130.current);
  push(closure_128, closure_128.current);
}
function popSuspenseHandler(arg0) {
  pop(closure_128);
  if (closure_129 === arg0) {
    closure_129 = null;
  }
  pop(closure_130);
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
            let tmp5 = shim$1;
            let tmp6 = shim$1();
            let tmp7 = shim$1();
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
        let tmp8 = sibling;
        let tmp9 = sibling;
        if (null === sibling.sibling) {
          while (null !== tmp8.return) {
            if (tmp8.return === arg0) {
              break;
            } else {
              let _return = tmp8.return;
              tmp8 = _return;
              tmp9 = _return;
              continue;
            }
          }
          return null;
        }
        ({ return: tmp9.sibling.return, sibling } = tmp9);
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
  let tmp = closure_72;
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
  tmp5.updater = closure_131;
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
    closure_131.enqueueReplaceState(componentWillReceiveProps, componentWillReceiveProps.state, null);
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
        closure_131.enqueueReplaceState(stateNode, stateNode.state, null);
      }
      processUpdateQueue(stateNode, props, stateNode, arg3);
      suspendIfUpdateReadFromEntangledAsyncAction();
      stateNode.state = stateNode.memoizedState;
    }
    if ("function" === typeof stateNode.componentDidMount) {
      stateNode.flags = stateNode.flags | 4194308;
    }
  }
  tmp3 = closure_72;
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
        let tmp13 = tmp5;
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
  if (null !== arg0) {
    if (!closure_134) {
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
        let closure_134 = false;
        ref.pendingProps = memoizedProps;
        if (checkScheduledUpdateOrContext(memoizedProps, arg4)) {
          tmp = memoizedProps;
          if (131072 & memoizedProps.flags) {
            closure_134 = true;
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
        pendingProps.memoizedState = { 9223372036854775807: 180, 9223372036854775807: null };
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
      pendingProps.memoizedState = { 9223372036854775807: 180, 9223372036854775807: null };
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
    let obj = { parent: closure_84._currentValue, pool: tmp };
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
  if (null !== arg0) {
    if (!closure_134) {
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
  flags.updateQueue = null;
  finishRenderingHooks(arg0);
  if (null !== arg0) {
    if (!closure_134) {
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
    let tmp53 = closure_72;
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
    let closure_106 = false;
    const memoizedState3 = stateNode.memoizedState;
    stateNode.state = memoizedState3;
    processUpdateQueue(stateNode, memoizedProps, stateNode, arg4);
    suspendIfUpdateReadFromEntangledAsyncAction();
    let memoizedState4 = stateNode.memoizedState;
    if (stateNode.pendingProps === memoizedProps) {
      if (memoizedState3 === memoizedState4) {
        if (!closure_106) {
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
    let tmp81 = closure_106;
    if (!closure_106) {
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
    let tmp4 = closure_72;
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
    closure_106 = false;
    const memoizedState = stateNode.memoizedState;
    stateNode2.state = memoizedState;
    processUpdateQueue(stateNode, memoizedProps, stateNode2, arg4);
    suspendIfUpdateReadFromEntangledAsyncAction();
    let memoizedState2 = stateNode.memoizedState;
    if (memoizedProps2 === pendingProps) {
      if (memoizedState === memoizedState2) {
        tmp = closure_106;
        if (!closure_106) {
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
    let tmp33 = closure_106;
    if (!closure_106) {
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
  if (!(128 & flags.flags)) {
    let renderResult = state.render();
  } else {
    renderResult = null;
  }
  flags.flags = flags.flags | 1;
  if (null === tmp) {
    reconcileChildren(tmp, flags, renderResult, arg5);
    state = state.state;
    flags.memoizedState = state;
    const child = flags.child;
  }
  tmp = callback2(flags, tmp.child, null, arg5);
  flags.child = tmp;
  flags.child = callback2(flags, null, renderResult, arg5);
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
    tmp2 = num | closure_159;
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
      tmp4 = 2 & closure_130.current;
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
        }
        const tmp78 = createFiberFromFragment(fallback2, mode2, lanes, null);
        child6.return = pendingProps;
        tmp78.return = pendingProps;
        child6.sibling = tmp78;
        pendingProps.child = child6;
        mode2 = pendingProps.child;
        mode2.memoizedState = mountSuspenseOffscreenState(lanes);
        mode2.childLanes = getRemainingWorkInPrimaryTree(memoizedState, tmp6, lanes);
        pendingProps.memoizedState = closure_135;
      }
      child6 = mountWorkInProgressOffscreenFiber(obj, mode2);
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
            const tmp87 = mountWorkInProgressOffscreenFiber(obj, mode3);
            const tmp93 = createFiberFromFragment(fallback3, mode3, lanes, null);
            tmp93.flags = tmp93.flags | 2;
            tmp87.return = pendingProps;
            tmp93.return = pendingProps;
            tmp87.sibling = tmp93;
            pendingProps.child = tmp87;
            if (1 & pendingProps.mode) {
              callback2(pendingProps, memoizedState.child, null, lanes);
            }
            const child5 = pendingProps.child;
            child5.memoizedState = mountSuspenseOffscreenState(lanes);
            child5.childLanes = getRemainingWorkInPrimaryTree(memoizedState, tmp6, lanes);
            pendingProps.memoizedState = closure_135;
            tmp42 = tmp93;
          }
        } else {
          pushPrimaryTreeSuspenseHandler(pendingProps);
          shim$1();
          if (!closure_134) {
            propagateParentContextChanges(undefined, pendingProps, lanes, false);
          }
          if (!closure_134) {
            if (!(lanes & memoizedState.childLanes)) {
              shim$1();
              tmp42 = mountSuspensePrimaryChildren(pendingProps, pendingProps.children);
              tmp42.flags = tmp42.flags | 4096;
            }
          }
          if (null !== closure_146) {
            let num11 = 1;
            if (!(42 & (lanes & -lanes))) {
              num11 = 1;
              if (2 !== tmp83) {
                if (8 === tmp83) {
                  num11 = 4;
                } else if (32 === tmp83) {
                  num11 = 16;
                } else {
                  if (256 !== tmp83) {
                    if (512 !== tmp83) {
                      if (1024 !== tmp83) {
                        if (2048 !== tmp83) {
                          if (4096 !== tmp83) {
                            if (8192 !== tmp83) {
                              if (16384 !== tmp83) {
                                if (32768 !== tmp83) {
                                  if (65536 !== tmp83) {
                                    if (131072 !== tmp83) {
                                      if (262144 !== tmp83) {
                                        if (524288 !== tmp83) {
                                          if (1048576 !== tmp83) {
                                            if (2097152 !== tmp83) {
                                              if (4194304 !== tmp83) {
                                                if (8388608 !== tmp83) {
                                                  if (16777216 !== tmp83) {
                                                    if (33554432 !== tmp83) {
                                                      num11 = 268435456 === tmp83 ? 134217728 : 0;
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
                  num11 = 128;
                }
              }
            }
            let num23 = 0;
            if (!(num11 & (tmp43.suspendedLanes | lanes))) {
              num23 = num11;
            }
            if (0 !== num23) {
              if (num23 !== memoizedState2.retryLane) {
                memoizedState2.retryLane = num23;
                enqueueConcurrentRenderForLane(memoizedState, num23);
                scheduleUpdateOnFiber(tmp43, memoizedState, num23);
                throw closure_133;
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
            const _currentValue = closure_84._currentValue;
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
        pendingProps.memoizedState = closure_135;
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
    const obj = { "Null": false, "Null": false, "Null": false, isBackwards, last, tail, tailMode };
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
  const current = closure_130.current;
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
  push(closure_130, tmp9);
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
            let tmp34 = closure_359;
            tmp33 = null === closure_359(alternate2);
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
  closure_156 = closure_156 | lanes.lanes;
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
        let tmp11 = closure_473;
        let tmp12 = closure_473(sibling, sibling.pendingProps);
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
  if (null !== memoizedProps) {
    if (memoizedProps.memoizedProps !== pendingProps.pendingProps) {
      let closure_134 = true;
    } else {
      if (!checkScheduledUpdateOrContext(memoizedProps, arg2)) {
        if (!(128 & pendingProps.flags)) {
          pushProvider(undefined, closure_84, memoizedProps.memoizedState.cache);
          bailoutOnAlreadyFinishedWork(memoizedProps, pendingProps, arg2);
          pendingProps.lanes = 0;
          updateOffscreenComponent(memoizedProps, pendingProps, arg2);
        }
      }
      closure_134 = 131072 & memoizedProps.flags;
    }
  } else {
    closure_134 = false;
  }
  throw pendingProps.pendingProps;
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
    closure_160 = closure_160 | num2;
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
  let sibling = alternate.child;
  if (null !== alternate.alternate && alternate.alternate.child === alternate.child) {
    let num6 = 0;
    let num7 = 0;
    let num3 = 0;
    let num4 = 0;
    if (null !== sibling) {
      do {
        num6 = num6 | (sibling.lanes | sibling.childLanes);
        num7 = num7 | 65011712 & sibling.subtreeFlags | 65011712 & sibling.flags;
        sibling.return = alternate;
        sibling = sibling.sibling;
        num3 = num6;
        num4 = num7;
      } while (null !== sibling);
    }
  } else {
    let num = 0;
    let num2 = 0;
    let sibling2 = sibling;
    num3 = 0;
    num4 = 0;
    if (null !== sibling) {
      do {
        num = num | (sibling2.lanes | sibling2.childLanes);
        num2 = num2 | sibling2.subtreeFlags | sibling2.flags;
        sibling2.return = alternate;
        sibling2 = sibling2.sibling;
        num3 = num;
        num4 = num2;
      } while (null !== sibling2);
    }
  }
  alternate.subtreeFlags = alternate.subtreeFlags | num4;
  alternate.childLanes = num3;
  return null !== alternate.alternate && alternate.alternate.child === alternate.child;
}
function completeWork(arg0, arg1, arg2) {
  return null;
}
function unwindWork(arg0, tag) {
  switch (tag.tag) {
    case 1:
      const flags4 = tag.flags;
      let tmp42 = null;
      if (65536 & flags4) {
        tag.flags = -65537 & flags4 | 128;
        tmp42 = tag;
      }
      return tmp42;
    case 2:
      return null;
    case 3:
      closure_257(closure_84);
      closure_252();
      const flags3 = tag.flags;
      let tmp41 = null;
      if (65536 & flags3) {
        tmp41 = null;
        if (!(128 & flags3)) {
          tag.flags = -65537 & flags3 | 128;
          tmp41 = tag;
        }
      }
      return tmp41;
    case 4:
      closure_252();
      return null;
    case 5:
      closure_254(tag);
      return null;
    case 6:
      return null;
    case 7:
      return null;
    case 8:
      return null;
    case 9:
      return null;
    case 10:
      closure_257(tag.type);
      return null;
    case 11:
      return null;
    case 12:
      return null;
    case 13:
      closure_358(tag);
      const memoizedState = tag.memoizedState;
      if (null !== memoizedState) {
        if (null !== memoizedState.dehydrated) {
          if (null === tag.alternate) {
            const _Error = Error;
            throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          }
        }
      }
      const flags2 = tag.flags;
      let tmp31 = null;
      if (65536 & flags2) {
        tag.flags = -65537 & flags2 | 128;
        tmp31 = tag;
      }
      return tmp31;
    case 14:
      return null;
    case 15:
      return null;
    case 16:
      return null;
    case 17:
      return null;
    case 18:
      return null;
    case 19:
      closure_248(closure_130);
      return null;
    case 20:
      return null;
    case 21:
      return null;
    case 22:
      closure_358(tag);
      closure_303();
      if (null !== arg0) {
        closure_248(closure_96);
      }
      let flags = tag.flags;
      let tmp14 = 65536 & flags;
      let tmp15 = null;
      if (tmp14) {
        let tmp16 = -65537 & flags;
        let tmp17 = tmp16 | 128;
        tag.flags = tmp17;
        tmp15 = tag;
      }
      return tmp15;
    case 23:
      closure_358(tag);
      closure_303();
      if (null !== arg0) {
        closure_248(closure_96);
      }
      flags = tag.flags;
      tmp14 = 65536 & flags;
      tmp15 = null;
      if (tmp14) {
        tmp16 = -65537 & flags;
        tmp17 = tmp16 | 128;
        tag.flags = tmp17;
        tmp15 = tag;
      }
      return tmp15;
    case 24:
      closure_257(closure_84);
      return null;
    case 25:
      return null;
    case 26:
      closure_254(tag);
      return null;
    case 27:
      closure_254(tag);
      return null;
    default:
      return null;
  }
}
function unwindInterruptedWork(arg0, arg1) {
  popProvider(closure_84);
}
function commitHookEffectListMount(arg0, updateQueue) {
  let next2;
  updateQueue = updateQueue.updateQueue;
  let lastEffect = null;
  if (null !== updateQueue) {
    lastEffect = tmp.lastEffect;
  }
  if (null !== lastEffect) {
    const next = iter.next;
    let iter2 = next;
    do {
      let tmp6 = iter2;
      let tmp7 = arg0;
      if ((iter2.tag & arg0) === arg0) {
        let tmp8 = iter2;
        let obj = iter2.create();
        let tmp10 = obj;
        iter2.inst.destroy = obj;
      }
      let tmp11 = iter2;
      next2 = iter2.next;
      iter2 = next2;
      let tmp12 = next;
    } while (next2 !== tmp5);
  }
}
function commitHookEffectListUnmount(arg0, updateQueue) {
  updateQueue = updateQueue.updateQueue;
  let lastEffect = null;
  if (null !== updateQueue) {
    lastEffect = tmp.lastEffect;
  }
  if (null !== lastEffect) {
    const next2 = iter.next;
    let iter2 = next2;
    while (true) {
      let tmp4 = iter2;
      let tmp5 = arg0;
      if ((iter2.tag & arg0) === arg0) {
        let tmp6 = iter2;
        let inst = iter2.inst;
        let destroy = inst.destroy;
        if (undefined !== destroy) {
          let tmp9 = inst;
          tmp7.destroy = undefined;
          let tmp10 = updateQueue;
          let tmp11 = arg2;
          let tmp12 = destroy;
          let tmp13 = tmp8;
          let destroyResult = destroy();
        }
      }
      while (true) {
        let tmp15 = iter2;
        let next = iter2.next;
        iter2 = next;
        let tmp16 = next2;
        if (next !== tmp18) {
          break;
        } else {
          break label0;
        }
      }
    }
  }
}
function commitClassCallbacks(updateQueue) {
  updateQueue = updateQueue.updateQueue;
  if (null !== updateQueue) {
    commitCallbacks(updateQueue, tmp.stateNode);
  }
}
function safelyCallComponentWillUnmount(type, arg1, componentWillUnmount) {
  componentWillUnmount.props = resolveClassComponentProps(type.type, type.memoizedProps);
  componentWillUnmount.state = type.memoizedState;
  componentWillUnmount.componentWillUnmount();
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
          ref.refCleanup = ref(stateNode);
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
      refCleanup();
      while (true) {
        let tmp7 = ref;
        tmp.refCleanup = null;
        let alternate = tmp.alternate;
        if (null == alternate) {
          break;
        } else {
          let tmp9 = alternate;
          tmp8.refCleanup = null;
          // break
        }
        break;
      }
    } else if ("function" === typeof tmp2) {
      ref(null);
    } else {
      tmp2.current = null;
    }
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
              let tmp = closure_410;
              let tmp2 = closure_410(sibling, arg1, containerTag);
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
              let tmp = closure_411;
              let tmp2 = closure_411(sibling, arg1, _children);
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
function commitLayoutEffectOnFiber(arg0, memoizedProps, flags) {
  const tmp = flags;
  flags = flags.flags;
  switch (flags.tag) {
    case 0:
      closure_420(arg0, tmp);
      let tmp90 = 4 & flags;
      if (tmp90) {
        closure_402(5, tmp);
      }
    break;
    case 1:
      closure_420(arg0, tmp);
      if (4 & flags) {
        let stateNode = tmp.stateNode;
        if (null === memoizedProps) {
          stateNode.componentDidMount();
        } else {
          const tmp73 = closure_365(tmp.type, memoizedProps.memoizedProps);
          const memoizedState2 = memoizedProps.memoizedState;
          stateNode.componentDidUpdate(tmp73, memoizedState2, stateNode.__reactInternalSnapshotBeforeUpdate);
        }
      }
      while (true) {
        let num10 = 64;
        if (!(64 & flags)) {
          break;
        } else {
          let tmp80 = closure_404;
          let tmp81 = flags;
          let tmp82 = closure_404(tmp);
          // break
        }
        let num11 = 512;
        if (512 & flags) {
          let tmp83 = closure_406;
          let tmp84 = flags;
          let tmp85 = closure_406(tmp, tmp.return);
        }
      }
    break;
    case 2:
      closure_420(arg0, flags);
    break;
    case 3:
      closure_420(arg0, tmp);
      if (64 & flags) {
        const updateQueue = tmp.updateQueue;
        if (null !== updateQueue) {
          stateNode = null;
          if (null !== tmp.child) {
            const tag = tmp.child.tag;
            if (27 !== tag) {
              if (5 !== tag) {
                if (1 === tag) {
                  stateNode = tmp.child.stateNode;
                }
              }
            }
            stateNode = closure_247(tmp.child.stateNode);
          }
          closure_300(tmp52, stateNode);
        }
      }
    break;
    case 4:
      closure_420(arg0, flags);
    break;
    case 5:
      closure_420(arg0, tmp);
      let tmp43 = 512 & flags;
      if (tmp43) {
        closure_406(tmp, tmp.return);
      }
    break;
    case 6:
      closure_420(arg0, flags);
    break;
    case 7:
      closure_420(arg0, flags);
    break;
    case 8:
      closure_420(arg0, flags);
    break;
    case 9:
      closure_420(arg0, flags);
    break;
    case 10:
      closure_420(arg0, flags);
    break;
    case 11:
      closure_420(arg0, tmp);
      tmp90 = 4 & flags;
      if (tmp90) {
        closure_402(5, tmp);
      }
    break;
    case 12:
      closure_420(arg0, flags);
    break;
    case 13:
      closure_420(arg0, tmp);
      if (64 & flags) {
        const memoizedState = tmp.memoizedState;
        let tmp32 = null !== memoizedState;
        if (tmp32) {
          tmp32 = null !== tmp30.dehydrated;
        }
        if (tmp32) {
          closure_468.bind(null, tmp);
          closure_243();
        }
      }
    break;
    case 14:
      closure_420(arg0, flags);
    break;
    case 15:
      closure_420(arg0, tmp);
      tmp90 = 4 & flags;
      if (tmp90) {
        closure_402(5, tmp);
      }
    break;
    case 16:
      closure_420(arg0, flags);
    break;
    case 17:
      closure_420(arg0, flags);
    break;
    case 18:
      closure_420(arg0, flags);
    break;
    case 19:
      closure_420(arg0, flags);
    break;
    case 20:
      closure_420(arg0, flags);
    break;
    case 21:
      closure_420(arg0, flags);
    break;
    case 22:
      if (1 & tmp.mode) {
        let tmp9 = null !== tmp.memoizedState;
        if (!tmp9) {
          tmp9 = closure_136;
        }
        if (!tmp9) {
          let tmp11 = null !== memoizedProps;
          if (tmp11) {
            tmp11 = null !== memoizedProps.memoizedState;
          }
          if (!tmp11) {
            tmp11 = closure_137;
          }
          const tmp14 = closure_136;
          const tmp15 = closure_137;
          closure_136 = tmp9;
          closure_137 = tmp11;
          if (tmp11) {
            if (!tmp15) {
              closure_422(arg0, tmp, 8772 & tmp.subtreeFlags);
            }
            closure_136 = tmp14;
            closure_137 = tmp15;
          }
          closure_420(arg0, tmp);
        }
      } else {
        closure_420(arg0, tmp);
      }
    break;
    case 23:
      closure_420(arg0, flags);
    break;
    case 24:
      closure_420(arg0, flags);
    break;
    case 25:
      closure_420(arg0, flags);
    break;
    case 26:
      closure_420(arg0, tmp);
      tmp43 = 512 & flags;
      if (tmp43) {
        closure_406(tmp, tmp.return);
      }
    break;
    case 27:
      closure_420(arg0, tmp);
      tmp43 = 512 & flags;
      if (tmp43) {
        closure_406(tmp, tmp.return);
      }
    break;
    case 28:
      closure_420(arg0, flags);
    break;
    case 29:
      closure_420(arg0, flags);
    break;
    case 30:
    break;
    default:
      closure_420(arg0, flags);
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
      let tmp = closure_415;
      let tmp2 = closure_415(arg0, arg1, sibling);
      sibling = sibling.sibling;
    } while (null !== sibling);
  }
}
function commitDeletionEffectsOnFiber(arg0, arg1, mode) {
  if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
    if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberUnmount) {
      __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberUnmount(closure_57, mode);
    }
  }
  while (true) {
    let tmp6 = mode;
    let num = 1;
    if (1 & mode.mode) {
      let tmp12 = closure_137;
      let tmp13 = closure_137;
      if (!closure_137) {
        let tmp14 = mode;
        let tmp15 = null;
        tmp12 = null !== mode.memoizedState;
      }
      closure_137 = tmp12;
      let tmp16 = recursivelyTraverseDeletionEffects;
      let tmp17 = arg0;
      let tmp18 = arg1;
      let tmp19 = mode;
      let tmp20 = recursivelyTraverseDeletionEffects(arg0, arg1, mode);
      let tmp21 = tmp13;
      closure_137 = tmp13;
    } else {
      let tmp7 = recursivelyTraverseDeletionEffects;
      let tmp8 = arg0;
      let tmp9 = arg1;
      let tmp10 = mode;
      let tmp11 = recursivelyTraverseDeletionEffects(arg0, arg1, mode);
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
              let closure_141 = true;
            }
          }
          containerInfo = _return.stateNode;
          closure_141 = false;
        }
        let tmp3 = containerInfo;
        if (null === containerInfo) {
          break;
        } else {
          let tmp4 = commitDeletionEffectsOnFiber;
          let tmp5 = commitDeletionEffectsOnFiber(arg0, deletions, tmp);
          containerInfo = null;
          closure_141 = false;
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
        let tmp6 = closure_418;
        let tmp7 = closure_418(sibling, arg0);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitMutationEffectsOnFiber(arg0, arg1) {
  recursivelyTraverseMutationEffects(tmp3, tmp2);
  commitReconciliationEffects(tmp2);
  if (4 & tmp4) {
    const updateQueue = tmp2.updateQueue;
    if (null !== updateQueue) {
      tmp2.updateQueue = null;
      attachSuspenseRetryListeners(tmp2, tmp8);
    }
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
        let tmp2 = closure_412;
        let tmp3 = closure_412(arg0, sibling.alternate, sibling);
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
      let tmp15 = commitHookEffectListUnmount;
      let tmp16 = commitHookEffectListUnmount(4, sibling, sibling.return);
      let tmp17 = recursivelyTraverseDisappearLayoutEffects;
      let tmp18 = recursivelyTraverseDisappearLayoutEffects(sibling);
      tmp4 = tmp;
    }
  }
}
function recursivelyTraverseReappearLayoutEffects(arg0, subtreeFlags) {
  let tmp = arg2;
  if (arg2) {
    tmp = 8772 & subtreeFlags.subtreeFlags;
  }
  let sibling = subtreeFlags.child;
  if (null !== sibling) {
    while (true) {
      if (null === sibling.memoizedState) {
        let tmp2 = recursivelyTraverseReappearLayoutEffects;
        let tmp3 = recursivelyTraverseReappearLayoutEffects(undefined, sibling, tmp);
      }
      let tmp4 = safelyAttachRef;
      let tmp5 = safelyAttachRef(sibling, sibling.return);
      while (true) {
        sibling = sibling.sibling;
        if (null !== sibling) {
          break;
        } else {
          break label0;
        }
      }
    }
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
        let tmp2 = closure_426;
        let tmp3 = arg0;
        let tmp4 = sibling;
        let tmp5 = arg2;
        let tmp6 = arg3;
        let tmp7 = closure_426(arg0, sibling, arg2, arg3);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function commitPassiveMountOnFiber(arg0, flags) {
  let alternate2;
  let id;
  let onPostCommit;
  let stateNode;
  let tmp = flags;
  flags = flags.flags;
  switch (flags.tag) {
    case 0:
      closure_425(arg0, tmp, arg2, arg3);
      let tmp91 = 2048 & flags;
      if (tmp91) {
        closure_402(9, tmp);
      }
    break;
    case 1:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 2:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 3:
      closure_425(arg0, tmp, arg2, arg3);
      if (2048 & flags) {
        let cache = null;
        if (null !== tmp.alternate) {
          cache = tmp.alternate.memoizedState.cache;
        }
        cache = tmp.memoizedState.cache;
        if (cache !== cache) {
          tmp = cache;
          tmp80.refCount = tmp80.refCount + 1;
          tmp = cache;
          if (null != cache) {
            closure_267(cache);
          }
        }
      }
    break;
    case 4:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 5:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 6:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 7:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 8:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 9:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 10:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 11:
      closure_425(arg0, tmp, arg2, arg3);
      tmp91 = 2048 & flags;
      if (tmp91) {
        closure_402(9, tmp);
      }
    break;
    case 12:
      closure_425(arg0, flags, arg2, arg3);
      if (tmp50) {
        const stateNode2 = tmp.stateNode;
        const memoizedProps = tmp.memoizedProps;
        ({ id, onPostCommit } = memoizedProps);
        if ("function" === typeof onPostCommit) {
          let str2 = "update";
          if (null === tmp.alternate) {
            str2 = "mount";
          }
          tmp60(id, str2, stateNode2.passiveEffectDuration, -0);
          const tmp62 = id;
        }
      }
      const tmp50 = 2048 & flags;
    break;
    case 13:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 14:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 15:
      closure_425(arg0, tmp, arg2, arg3);
      tmp91 = 2048 & flags;
      if (tmp91) {
        closure_402(9, tmp);
      }
    break;
    case 16:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 17:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 18:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 19:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 20:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 21:
      tmp = closure_425(arg0, tmp, arg2, arg3);
    break;
    case 22:
      ({ stateNode, alternate: alternate2 } = tmp);
      if (null !== tmp.memoizedState) {
        if (2 & stateNode._visibility) {
          closure_425(arg0, tmp, arg2, arg3);
        } else if (1 & tmp.mode) {
          closure_428(arg0, tmp);
        } else {
          stateNode._visibility = stateNode._visibility | 2;
          closure_425(arg0, tmp, arg2, arg3);
        }
      } else {
        tmp = stateNode;
        if (2 & stateNode._visibility) {
          closure_425(arg0, tmp, arg2, arg3);
        } else {
          stateNode._visibility = stateNode._visibility | 2;
          closure_427(arg0, flags, arg2, arg3, 10256 & tmp.subtreeFlags);
        }
      }
      if (2048 & flags) {
        closure_423(alternate2, tmp);
      }
    break;
    case 23:
    break;
    case 24:
      closure_425(arg0, tmp, arg2, arg3);
      if (2048 & flags) {
        const alternate = tmp.alternate;
        closure_424(undefined, tmp);
      }
    break;
    default:
      tmp = closure_425(arg0, tmp, arg2, arg3);
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
      let tmp54 = commitHookEffectListMount;
      let tmp55 = commitHookEffectListMount(8, sibling);
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
          let tmp8 = closure_428;
          let tmp9 = closure_428(arg0, sibling);
          if (2048 & flags) {
            let tmp10 = closure_423;
            let tmp11 = closure_423(sibling.alternate, sibling);
          }
        } else if (24 === tag) {
          let tmp4 = closure_428;
          let tmp5 = closure_428(arg0, sibling);
          if (2048 & flags) {
            let tmp6 = closure_424;
            let alternate = sibling.alternate;
            let tmp7 = closure_424(undefined, sibling);
          }
        } else {
          let tmp2 = closure_428;
          let tmp3 = closure_428(arg0, sibling);
        }
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function recursivelyAccumulateSuspenseyCommit(subtreeFlags) {
  if (subtreeFlags.subtreeFlags & closure_142) {
    let sibling = subtreeFlags.child;
    if (null !== sibling) {
      do {
        let tmp2 = closure_430;
        let tmp3 = closure_430(sibling);
        sibling = sibling.sibling;
      } while (null !== sibling);
    }
  }
}
function accumulateSuspenseyCommitOnFiber(tag) {
  tag = tag.tag;
  if (26 === tag) {
    recursivelyAccumulateSuspenseyCommit(tag);
    let tmp12 = tag.flags & closure_142;
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
                  closure_142 = 16777216;
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
          closure_139 = tmp2;
          let tmp3 = closure_435;
          let tmp4 = closure_435(tmp2, deletions);
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
        let tmp8 = closure_433;
        let tmp9 = closure_433(sibling);
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
        if (3 !== tag) {
          if (12 !== tag) {
            if (22 === tag) {
              const stateNode = tag.stateNode;
              if (null !== tag.memoizedState) {
                if (2 & stateNode._visibility) {
                  stateNode._visibility = stateNode._visibility & -3;
                  recursivelyTraverseDisconnectPassiveEffects(tag);
                }
              }
              recursivelyTraversePassiveUnmountEffects(tag);
            }
          }
        }
        recursivelyTraversePassiveUnmountEffects(tag);
      }
    }
  }
  recursivelyTraversePassiveUnmountEffects(tag);
  if (2048 & tag.flags) {
    commitHookEffectListUnmount(9, tag, tag.return);
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
          closure_139 = tmp3;
          let tmp4 = closure_435;
          let tmp5 = closure_435(tmp3, deletions);
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
      let tmp13 = commitHookEffectListUnmount;
      let tmp14 = commitHookEffectListUnmount(8, sibling, sibling.return);
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
      let tmp6 = commitHookEffectListUnmount;
      let tmp7 = commitHookEffectListUnmount(8, tmp3, arg1);
    }
  }
}
function requestUpdateLane(mode) {
  if (!(1 & mode.mode)) {
    return 2;
  } else {
    if (!(2 & closure_145)) {
      if (null !== __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T) {
        let tmp6 = closure_93;
        if (0 === closure_93) {
          tmp6 = requestTransitionLane();
        }
        let num2 = tmp6;
      } else {
        num2 = 32;
        if (0 !== closure_68) {
          num2 = closure_68;
        }
      }
    }
    num2 = closure_148 & -closure_148;
  }
}
function requestDeferredLane() {
  if (0 === closure_159) {
    let num = 536870912;
    if (!(536870912 & closure_148)) {
      num = claimNextTransitionLane();
    }
    closure_159 = num;
  }
  const current = closure_128.current;
  if (null !== current) {
    current.flags = current.flags | 32;
  }
  return closure_159;
}
function scheduleUpdateOnFiber(cancelPendingCommit, mode) {
  let tmp = cancelPendingCommit !== closure_146;
  if (!tmp) {
    let tmp3 = 2 !== closure_149;
    if (tmp3) {
      tmp3 = 9 !== closure_149;
    }
    tmp = tmp3;
  }
  if (tmp) {
    tmp = null === cancelPendingCommit.cancelPendingCommit;
  }
  if (!tmp) {
    prepareFreshStack(cancelPendingCommit, 0);
    markRootSuspended(cancelPendingCommit, closure_148, closure_159, false);
  }
  markRootUpdated$1(cancelPendingCommit, arg2);
  let tmp14 = 2 & closure_145;
  if (tmp14) {
    tmp14 = cancelPendingCommit === closure_146;
  }
  if (!tmp14) {
    if (cancelPendingCommit === closure_146) {
      if (!(2 & closure_145)) {
        closure_157 = closure_157 | arg2;
      }
      if (4 === closure_155) {
        markRootSuspended(cancelPendingCommit, closure_148, closure_159, false);
      }
    }
    ensureRootIsScheduled(cancelPendingCommit);
    let tmp27 = 2 === arg2;
    if (tmp27) {
      tmp27 = 0 === closure_145;
    }
    if (tmp27) {
      tmp27 = !(1 & mode.mode);
    }
    if (tmp27) {
      let closure_165 = require(dependencyMap[3]).unstable_now() + 500;
      flushSyncWorkAcrossRoots_impl(0, true);
      const obj = require(dependencyMap[3]);
    }
  }
}
function performWorkOnRoot(expiredLanes) {
  if (6 & closure_145) {
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
        let closure_146;
        let closure_148;
        let tmp2 = arg1;
        const tmp4 = tmp4 | 2;
        const tmp5 = callback7();
        const tmp6 = callback8();
        if (closure_146 === expiredLanes) {
          if (closure_148 === tmp2) {
            let closure_152 = callback(tmp, tmp2);
          }
          while (true) {
            let tmp13 = closure_149;
            let num = 0;
            if (0 === closure_149) {
              break;
            } else {
              let tmp76 = tmp66;
              let tmp66 = null;
              if (null === tmp66) {
                break;
              } else {
                tmp2 = tmp66;
                let promise = tmp66;
                let tmp77 = closure_149;
                let num13 = 1;
                if (1 === closure_149) {
                  closure_149 = 0;
                  let tmp60 = callback11;
                  let tmp61 = expiredLanes;
                  let tmp62 = tmp2;
                  let tmp63 = promise;
                  let num11 = 1;
                  let tmp64 = callback11(tmp, tmp2, promise, 1);
                  // break
                } else {
                  if (2 !== tmp77) {
                    let num14 = 9;
                    if (9 !== tmp77) {
                      let num15 = 3;
                      if (3 === tmp77) {
                        let num10 = 7;
                        closure_149 = 7;
                      } else {
                        let num16 = 4;
                        if (4 === tmp77) {
                          let num9 = 5;
                          closure_149 = 5;
                        } else {
                          let num17 = 7;
                          if (7 === tmp77) {
                            let tmp42 = callback3;
                            let tmp43 = promise;
                            closure_149 = 0;
                            if (callback3(promise)) {
                              let tmp49 = callback10;
                              let tmp50 = tmp2;
                              let tmp51 = callback10(tmp2);
                              // break
                            } else {
                              let tmp44 = callback11;
                              let tmp45 = expiredLanes;
                              let tmp46 = tmp2;
                              let tmp47 = promise;
                              let num8 = 7;
                              let tmp48 = callback11(tmp, tmp2, promise, 7);
                              // break
                            }
                            break;
                          } else {
                            let num18 = 5;
                            if (5 !== tmp77) {
                              let num2 = 6;
                              if (6 === tmp77) {
                                closure_149 = 0;
                                let tmp17 = callback11;
                                let tmp18 = expiredLanes;
                                let tmp19 = tmp2;
                                let tmp20 = promise;
                                let num4 = 6;
                                let tmp21 = callback11(tmp, tmp2, promise, 6);
                                // break
                              } else {
                                let num3 = 8;
                                if (8 === tmp77) {
                                  let tmp15 = callback5;
                                  let tmp16 = callback5();
                                  let closure_155 = 6;
                                } else {
                                  let tmp14 = globalThis;
                                  let _Error = Error;
                                  let str = "Unexpected SuspendedReason. This is a bug in React.";
                                  throw Error("Unexpected SuspendedReason. This is a bug in React.");
                                }
                              }
                            }
                            break;
                          }
                          let memoizedState = null;
                          let tmp23 = tmp66;
                          let tag = tmp66.tag;
                          let num5 = 26;
                          if (26 === tag) {
                            let tmp24 = tmp66;
                            memoizedState = tmp66.memoizedState;
                          } else if (5 !== tag) {
                            let num6 = 27;
                            closure_149 = 0;
                            let tmp37 = callback11;
                            let tmp38 = expiredLanes;
                            let tmp39 = tmp2;
                            let tmp40 = promise;
                            let num7 = 5;
                            let tmp41 = callback11(tmp, tmp2, promise, 5);
                            // break
                          }
                          let tmp25 = tmp66;
                          let tmp26 = memoizedState;
                          if (memoizedState) {
                            let tmp35 = callback2;
                            let tmp36 = callback2();
                          } else {
                            closure_149 = 0;
                            let tmp27 = tmp25;
                            let sibling = tmp25.sibling;
                            if (tmp66 !== sibling) {
                              let tmp34 = sibling;
                              tmp66 = tmp28;
                              // break
                            } else {
                              let tmp29 = tmp25;
                              let _return = tmp25.return;
                              let tmp30 = _return;
                              if (tmp66 !== _return) {
                                let tmp31 = _return;
                                tmp66 = tmp30;
                                let tmp32 = callback12;
                                let tmp33 = callback12(tmp30);
                                // break
                              } else {
                                // break
                              }
                              break;
                            }
                            break;
                          }
                          break;
                        }
                      }
                    }
                    let tmp67 = null;
                    let closure_81 = null;
                    let closure_82 = null;
                    let tmp68 = closure_5;
                    let tmp69 = tmp5;
                    closure_5.H = tmp5;
                    let tmp70 = closure_5;
                    let tmp71 = tmp6;
                    closure_5.A = tmp6;
                    let tmp72 = tmp4;
                    let tmp73 = tmp66;
                    let num12 = 0;
                    if (null === tmp66) {
                      closure_146 = null;
                      closure_148 = 0;
                      let tmp74 = callback4;
                      let tmp75 = callback4();
                      num12 = closure_155;
                    }
                    return num12;
                  }
                  let tmp52 = callback3;
                  let tmp53 = promise;
                  if (callback3(promise)) {
                    closure_149 = 0;
                    let tmp57 = callback10;
                    let tmp58 = tmp2;
                    let tmp59 = callback10(tmp2);
                    // break
                  } else {
                    function lanes() {
                      let tmp = 2 !== closure_149;
                      if (tmp) {
                        tmp = 9 !== closure_149;
                      }
                      if (!tmp) {
                        tmp = closure_146 !== arg0;
                      }
                      if (!tmp) {
                        closure_149 = 7;
                      }
                      callback(arg0);
                    }
                    let tmp54 = lanes;
                    let tmp55 = promise;
                    let nextPromise = promise.then(lanes, lanes);
                  }
                }
                break;
              }
            }
            let tmp65 = callback9;
            tmp66 = callback9();
          }
        }
        let closure_166 = null;
        let closure_165 = expiredLanes(closure_1[3]).unstable_now() + 500;
        callback6(expiredLanes, tmp2);
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
      let tmp3 = closure_461;
      let tmp4 = closure_461();
      let tmp5 = closure_168;
    } while (0 !== closure_168);
    if (6 & tmp36) {
      const _Error3 = Error;
      throw Error("Should not already be working.");
    } else if (null !== lanes) {
      if (lanes === tmp2.current) {
        const _Error2 = Error;
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      } else {
        const tmp71 = lanes.lanes | lanes.childLanes | closure_105;
        const pendingLanes = tmp2.pendingLanes;
        tmp2.pendingLanes = tmp71;
        tmp2.suspendedLanes = 0;
        tmp2.pingedLanes = 0;
        tmp2.warmLanes = 0;
        tmp2.expiredLanes = tmp2.expiredLanes & tmp71;
        tmp2.entangledLanes = tmp2.entangledLanes & tmp71;
        tmp2.errorRecoveryDisabledLanes = tmp2.errorRecoveryDisabledLanes & tmp71;
        tmp2.shellSuspendCounter = 0;
        const hiddenUpdates = tmp2.hiddenUpdates;
        let tmp12 = pendingLanes & ~tmp71;
        if (0 < tmp12) {
          do {
            let tmp7 = closure_59;
            let diff = 31 - closure_59(tmp12);
            tmp73[diff] = 0;
            tmp74[diff] = -1;
            let arr = hiddenUpdates[diff];
            let tmp9 = tmp12;
            let tmp10 = tmp13;
            if (null !== arr) {
              hiddenUpdates[diff] = null;
              let num = 0;
              tmp10 = tmp13;
              if (0 < arr.length) {
                do {
                  let tmp11 = arr[num];
                  if (null !== tmp11) {
                    tmp11.lane = tmp11.lane & -536870913;
                  }
                  num = num + 1;
                  tmp10 = tmp11;
                } while (num < arr.length);
              }
            }
            tmp12 = tmp12 & ~1 << diff;
            let tmp13 = tmp10;
          } while (0 < tmp12);
        }
        if (0 !== arg6) {
          callback2(tmp2, arg6, 0);
        }
        let tmp16 = 0 !== arg8;
        if (tmp16) {
          tmp16 = 0 === arg7;
        }
        if (tmp16) {
          tmp2.suspendedLanes = tmp2.suspendedLanes | arg8 & ~pendingLanes & ~arg2;
        }
        if (tmp2 === closure_146) {
          closure_146 = null;
          let closure_147 = null;
          let closure_148 = 0;
        }
        if (!(10256 & lanes.subtreeFlags)) {
          if (!(10256 & lanes.flags)) {
            tmp2.callbackNode = null;
            tmp2.callbackPriority = 0;
          }
          if (13878 & lanes.subtreeFlags) {
            const T = constants.T;
            constants.T = null;
            const tmp34 = 2;
            const tmp36 = tmp36 | 4;
            let _return = lanes;
            if (null !== lanes) {
              while (true) {
                let tmp39 = _return;
                let tmp40 = _return;
                let child = _return.child;
                if (1024 & _return.subtreeFlags) {
                  let tmp41 = child;
                  if (null !== child) {
                    let tmp51 = child;
                    let tmp52 = tmp39;
                    child.return = tmp40;
                    _return = child;
                    let tmp53 = _return;
                  }
                }
                let tmp42 = _return;
                if (null !== _return) {
                  while (true) {
                    let tmp43 = child;
                    if (1024 & child) {
                      let tmp44 = memoizedState;
                      if (null !== memoizedState) {
                        let tmp75 = tmp39;
                        let tmp76 = tmp40;
                        let tmp77 = memoizedState;
                        ({ memoizedProps, memoizedState } = memoizedState);
                        let stateNode = tmp40.stateNode;
                        let tmp78 = callback3;
                        let tmp79 = tmp39;
                        let tmp80 = memoizedProps;
                        ({ elementType, type } = tmp40);
                        let tmp81 = stateNode;
                        let tmp82 = memoizedState;
                        let snapshotBeforeUpdate = stateNode.getSnapshotBeforeUpdate(callback3(tmp40.type, memoizedProps, undefined), memoizedState);
                        let tmp84 = snapshotBeforeUpdate;
                        stateNode.__reactInternalSnapshotBeforeUpdate = snapshotBeforeUpdate;
                      }
                    }
                    while (true) {
                      let tmp45 = tmp39;
                      let sibling = tmp40.sibling;
                      child = sibling;
                      if (null !== sibling) {
                        let tmp47 = child;
                        let tmp48 = tmp39;
                        child.return = tmp40.return;
                        _return = child;
                      } else {
                        let tmp46 = tmp39;
                        _return = tmp40.return;
                      }
                      continue label1;
                    }
                  }
                  let tmp49 = globalThis;
                  let _Error = Error;
                  let str = "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.";
                  let ErrorResult = Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                }
              }
            }
            constants.T = T;
            const tmp35 = tmp36;
          }
          let closure_168 = 1;
          callback4();
          callback5();
          callback6();
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
  suspendedLanes.suspendedLanes = suspendedLanes.suspendedLanes | arg1 & ~closure_158 & ~closure_157;
  suspendedLanes.pingedLanes = suspendedLanes.pingedLanes & ~arg1 & ~closure_158 & ~closure_157;
  if (arg3) {
    suspendedLanes.warmLanes = suspendedLanes.warmLanes | tmp;
  }
  let tmp3 = tmp;
  if (0 < (arg1 & ~closure_158 & ~closure_157)) {
    do {
      let tmp4 = closure_59;
      let diff = 31 - closure_59(tmp3);
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
    if (0 === closure_149) {
      let _return = _return.return;
    } else {
      let closure_81 = null;
      let closure_82 = null;
      resetHooksOnUnwind(_return);
      let closure_124 = null;
      let closure_125 = 0;
    }
    if (null !== _return) {
      do {
        let tmp6 = closure_401;
        let tmp7 = closure_401(_return.alternate, _return);
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
  let closure_146 = timeoutHandle;
  const tmp5 = createWorkInProgress(timeoutHandle.current, null);
  let closure_147 = tmp5;
  let closure_148 = arg1;
  let closure_149 = 0;
  let closure_150 = null;
  let closure_151 = false;
  let closure_152 = checkIfRootIsPrerendering(timeoutHandle, arg1);
  let closure_153 = false;
  let closure_155 = 0;
  let closure_156 = 0;
  let closure_157 = 0;
  let closure_158 = 0;
  let closure_159 = 0;
  let closure_160 = 0;
  let closure_161 = null;
  let closure_162 = null;
  let closure_163 = false;
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
        let tmp11 = closure_59;
        let diff = 31 - closure_59(tmp9);
        tmp10 = tmp10 | tmp8[diff];
        tmp9 = tmp9 & ~1 << diff;
        tmp7 = tmp10;
      } while (0 < tmp9);
    }
  }
  let closure_154 = tmp7;
  finishQueueingConcurrentUpdates();
  return tmp5;
}
function handleThrow(current) {
  let promise = arg1;
  let closure_111 = null;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = closure_120;
  if (arg1 !== closure_98) {
    if (promise !== closure_100) {
      if (promise === closure_99) {
        promise = getSuspendedThenable();
        let closure_149 = 4;
      } else {
        let num = 8;
        if (promise !== closure_133) {
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
        closure_149 = num;
      }
    }
    let closure_150 = promise;
    if (null === closure_147) {
      let closure_155 = 1;
      logUncaughtError(current, createCapturedValueAtFiber(promise, current.current));
    }
  }
  promise = getSuspendedThenable();
  closure_149 = 3;
}
function pushDispatcher() {
  let H = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H;
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = closure_120;
  if (null === H) {
    H = closure_120;
  }
  return H;
}
function pushAsyncDispatcher() {
  __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = closure_143;
  return __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
}
function renderDidSuspendDelayIfPossible() {
  let closure_155 = 4;
  let tmp = closure_151;
  if (!closure_151) {
    let tmp4 = (4194048 & closure_148) !== closure_148;
    if (tmp4) {
      tmp4 = null !== closure_128.current;
    }
    tmp = tmp4;
  }
  if (!tmp) {
    let closure_152 = true;
  }
  let tmp8 = !tmp7;
  if (!(134217727 & closure_156)) {
    tmp8 = !(134217727 & closure_157);
  }
  if (!tmp8) {
    tmp8 = null === closure_146;
  }
  if (!tmp8) {
    markRootSuspended(closure_146, closure_148, closure_159, false);
  }
}
function renderRootSync(arg0, arg1, arg2) {
  let closure_146;
  let closure_148;
  closure_145 = closure_145 | 2;
  const tmp4 = pushDispatcher();
  const tmp5 = pushAsyncDispatcher();
  let tmp6 = closure_146 === arg0;
  if (tmp6) {
    tmp6 = closure_148 === arg1;
  }
  if (!tmp6) {
    let closure_166 = null;
    prepareFreshStack(tmp, arg1);
  }
  let flag = false;
  while (true) {
    let tmp14 = closure_149;
    let num = 0;
    if (0 === closure_149) {
      break;
    } else {
      let tmp46 = closure_147;
      let tmp47 = null;
      if (null === closure_147) {
        break;
      } else {
        let tmp48 = closure_147;
        let tmp49 = closure_150;
        let tmp50 = closure_149;
        let num5 = 8;
        if (8 === closure_149) {
          let tmp32 = resetWorkInProgressStack;
          let tmp33 = resetWorkInProgressStack();
          let num4 = 6;
        } else {
          let num6 = 3;
          if (3 !== tmp50) {
            if (2 !== tmp50) {
              let num2 = 9;
              if (9 !== tmp50) {
                let num3 = 6;
                if (6 !== tmp50) {
                  let tmp15 = closure_149;
                  closure_149 = 0;
                  closure_150 = null;
                  let tmp16 = throwAndUnwindWorkLoop;
                  let tmp17 = arg0;
                  let tmp18 = tmp48;
                  let tmp19 = tmp49;
                  let tmp20 = throwAndUnwindWorkLoop(tmp, tmp48, tmp49, closure_149);
                  // break
                }
                break;
              }
            }
          }
          let tmp21 = closure_128;
          if (null === closure_128.current) {
            flag = true;
          }
          let tmp22 = closure_149;
          closure_149 = 0;
          closure_150 = null;
          let tmp23 = throwAndUnwindWorkLoop;
          let tmp24 = arg0;
          let tmp25 = tmp48;
          let tmp26 = tmp49;
          let tmp27 = throwAndUnwindWorkLoop(tmp, tmp48, tmp49, closure_149);
          let tmp28 = arg2;
          if (!arg2) {
            break;
          } else {
            let tmp29 = closure_152;
            if (!closure_152) {
              break;
            } else {
              num4 = 0;
            }
          }
        }
        let tmp34 = flag;
        if (flag) {
          let tmp35 = arg0;
          tmp.shellSuspendCounter = tmp.shellSuspendCounter + 1;
        }
        let tmp36 = null;
        let closure_81 = null;
        let closure_82 = null;
        let tmp37 = closure_145;
        let tmp38 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let tmp39 = tmp4;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.H = tmp4;
        let tmp40 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let tmp41 = tmp5;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A = tmp5;
        let tmp42 = closure_147;
        if (null === closure_147) {
          closure_146 = null;
          closure_148 = 0;
          let tmp43 = finishQueueingConcurrentUpdates;
          let tmp44 = finishQueueingConcurrentUpdates();
        }
        let tmp45 = num4;
        return num4;
      }
    }
    let tmp30 = workLoopSync;
    let tmp31 = workLoopSync();
    num4 = closure_155;
  }
}
function workLoopSync() {
  if (null !== closure_147) {
    do {
      let tmp = closure_452;
      let tmp2 = closure_147;
      let tmp3 = closure_452(closure_147);
      let tmp4 = closure_147;
    } while (null !== closure_147);
  }
}
function workLoopConcurrentByScheduler() {
  if (null !== closure_147) {
    if (!obj.unstable_shouldYield()) {
      performUnitOfWork(closure_147);
      while (null !== closure_147) {
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
  const tmp = beginWork(alternate.alternate, alternate, closure_154);
  alternate.memoizedProps = alternate.pendingProps;
  if (null === tmp) {
    completeUnitOfWork(alternate);
  } else {
    let closure_147 = tmp;
  }
}
function replaySuspendedUnitOfWork(pendingProps) {
  let alternate;
  let tag;
  ({ alternate, tag } = pendingProps);
  if (15 !== tag) {
    if (0 !== tag) {
      if (11 === tag) {
        let tmp10 = replayFunctionComponent(alternate, pendingProps, pendingProps.pendingProps, pendingProps.type.render, pendingProps.ref, closure_148);
      } else {
        if (5 === tag) {
          resetHooksOnUnwind(pendingProps);
        }
        unwindInterruptedWork(alternate, pendingProps);
        resetWorkInProgress(pendingProps, closure_154);
        let closure_147 = pendingProps;
        tmp10 = beginWork(alternate, pendingProps, closure_154);
      }
    }
    pendingProps.memoizedProps = pendingProps.pendingProps;
    if (null === tmp10) {
      completeUnitOfWork(pendingProps);
    } else {
      closure_147 = tmp10;
    }
  }
  tmp10 = replayFunctionComponent(alternate, pendingProps, pendingProps.pendingProps, pendingProps.type, undefined, closure_148);
}
function throwAndUnwindWorkLoop(tag, arg1) {
  let stateNode;
  let type;
  let tmp = arg1;
  let closure_81 = null;
  let closure_82 = null;
  resetHooksOnUnwind(arg1);
  let closure_124 = null;
  let closure_125 = 0;
  const _return = arg1.return;
  arg1.flags = arg1.flags | 32768;
  let ErrorResult = arg2;
  if (null !== arg2) {
    ErrorResult = arg2;
    if ("object" === typeof arg2) {
      ErrorResult = arg2;
      if ("function" === typeof arg2.then) {
        if (null !== tmp.alternate) {
          propagateParentContextChanges(undefined, tmp4, tmp5, true);
        }
        tag = tmp.tag;
        let tmp11 = 1 & tmp.mode;
        if (!tmp11) {
          let tmp12 = 0 !== tag;
          if (tmp12) {
            tmp12 = 11 !== tag;
          }
          if (tmp12) {
            tmp12 = 15 !== tag;
          }
          tmp11 = tmp12;
        }
        if (!tmp11) {
          const alternate = tmp.alternate;
          if (alternate) {
            ({ updateQueue: tmp.updateQueue, memoizedState: tmp.memoizedState, lanes: tmp.lanes } = alternate);
          } else {
            tmp.updateQueue = null;
            tmp.memoizedState = null;
          }
        }
        const current = closure_128.current;
        if (null !== current) {
          const tag3 = current.tag;
          if (13 === tag3) {
            if (1 & tmp.mode) {
              if (null === closure_129) {
                renderDidSuspendDelayIfPossible();
              } else {
                let tmp60 = null === current.alternate;
                if (tmp60) {
                  tmp60 = 0 === closure_155;
                }
                if (tmp60) {
                  closure_155 = 3;
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
                  const tmp66 = createUpdate(2);
                  tmp66.tag = 2;
                  enqueueUpdate(tmp, tmp66, 2);
                }
              } else {
                if (tmp64) {
                  tmp.tag = 28;
                }
                const tmp64 = 0 === tmp.tag && null === tmp.alternate;
              }
              tmp.lanes = tmp.lanes | 2;
            }
            if (arg2 === closure_101) {
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
                if (arg2 === closure_101) {
                  current.flags = current.flags | 16384;
                  flag2 = false;
                } else {
                  const updateQueue2 = current.updateQueue;
                  if (null === updateQueue2) {
                    let obj = { NewData: "o", NoData: "o" };
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
        closure_155 = 1;
        tmp = logUncaughtError;
        tmp = tag;
        tmp = createCapturedValueAtFiber;
        tmp = arg2;
        tmp = logUncaughtError(tag, createCapturedValueAtFiber(arg2, tag.current));
        let closure_147 = null;
      } else if (32768 & tmp.flags) {
        if (1 === arg3) {
          let flag4 = true;
          tmp = flag4;
          tmp = unwindUnitOfWork(tmp, flag4);
        } else {
          tmp = closure_152;
          if (!closure_152) {
            if (!(536870912 & closure_148)) {
              flag4 = true;
              let closure_151 = true;
              let tmp87 = tmp86;
              if (2 !== arg3) {
                tmp87 = 9 === arg3;
              }
              let tmp89 = tmp87;
              if (!tmp87) {
                tmp89 = 3 === arg3;
              }
              let tmp91 = tmp89;
              if (!tmp89) {
                tmp91 = 6 === arg3;
              }
              if (tmp91) {
                const current2 = closure_128.current;
                let tmp96 = tmp95;
                if (null !== current2) {
                  tmp96 = 13 === tmp94.tag;
                }
                if (tmp96) {
                  tmp94.flags = tmp94.flags | 16384;
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
  const tmp14 = createCapturedValueAtFiber(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", obj), tmp);
  if (null === arr) {
    const items3 = [tmp14];
    let arr = items3;
  } else {
    arr = arr.push(tmp14);
  }
  if (4 !== closure_155) {
    closure_155 = 2;
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
            let tmp23 = tmp5 & -tmp5;
            _return2.lanes = _return2.lanes | tmp23;
            let tmp24 = initializeClassErrorUpdate;
            let tmp25 = createClassErrorUpdate;
            let tmp26 = createClassErrorUpdate(tmp23);
            let tmp27 = tmp26;
            let tmp28 = tag;
            let tmp29 = _return2;
            let tmp30 = tmp;
            let tmp31 = initializeClassErrorUpdate(tmp26, tag, tmp17, tmp);
            let tmp32 = enqueueCapturedUpdate;
            let tmp33 = enqueueCapturedUpdate(_return2, tmp26);
            flag2 = false;
          } else {
            let tmp18 = type;
            let tmp19 = stateNode;
            if (null !== stateNode) {
              tmp = type;
              tmp = stateNode;
              if ("function" === typeof stateNode.componentDidCatch) {
                tmp = set;
                if (null !== set) {
                  let tmp20 = set;
                  let tmp21 = type;
                  let tmp22 = stateNode;
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
  let _return = arg0;
  while (!(32768 & _return.flags)) {
    _return = _return.return;
    let tmp2 = completeWork;
    let tmp3 = closure_154;
    let tmp4 = completeWork(tmp.alternate, tmp, closure_154);
    if (null !== tmp4) {
      let closure_147 = tmp4;
    } else {
      let sibling = tmp.sibling;
      if (null !== sibling) {
        closure_147 = sibling;
      } else {
        closure_147 = _return;
        if (null !== _return) {
          continue;
        } else {
          let tmp5 = closure_155;
          let num = 0;
          if (0 === closure_155) {
            let num2 = 5;
            closure_155 = 5;
          }
        }
      }
    }
  }
  unwindUnitOfWork(_return, closure_151);
}
function unwindUnitOfWork(arg0, arg1) {
  let _return = arg0;
  const tmp = unwindWork(_return.alternate, _return);
  while (null === tmp) {
    _return = _return.return;
    let tmp3 = null !== _return;
    if (tmp3) {
      _return.flags = _return.flags | 32768;
      _return.subtreeFlags = 0;
      _return.deletions = null;
    }
    if (!arg1) {
      let sibling = tmp2.sibling;
      if (null !== sibling) {
        let closure_147 = sibling;
      }
    }
    closure_147 = _return;
    if (tmp3) {
      continue;
    } else {
      let num = 6;
      let closure_155 = 6;
      closure_147 = null;
    }
  }
  tmp.flags = tmp.flags & 32767;
  closure_147 = tmp;
}
function flushMutationEffects() {
  if (1 === closure_168) {
    closure_168 = 0;
    if (13878 & _null5.subtreeFlags) {
      const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      let closure_68 = 2;
      closure_145 = closure_145 | 4;
      commitMutationEffectsOnFiber(tmp18, tmp16);
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    }
    closure_169.current = _null5;
    closure_168 = 2;
  }
}
function flushLayoutEffects() {
  if (2 === closure_168) {
    closure_168 = 0;
    if (8772 & _null5.subtreeFlags) {
      const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
      let closure_68 = 2;
      closure_145 = closure_145 | 4;
      commitLayoutEffectOnFiber(tmp16, tmp18.alternate, tmp18);
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
    }
    closure_168 = 3;
  }
}
function flushSpawnedWork() {
  let closure_168 = 0;
  let obj = require(dependencyMap[3]);
  const result = obj.unstable_requestPaint();
  let tmp3 = closure_169;
  if (!(10256 & _null5.subtreeFlags)) {
    if (!(10256 & tmp5.flags)) {
      closure_168 = 0;
      closure_169 = null;
      const _null5 = null;
      releaseRootPooledCache(tmp3, tmp3.pendingLanes);
    }
    const pendingLanes = tmp3.pendingLanes;
    if (0 === pendingLanes) {
      let closure_167 = null;
    }
    lanesToEventPriority(tmp6);
    const stateNode = tmp5.stateNode;
    if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
      if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberRoot) {
        __REACT_DEVTOOLS_GLOBAL_HOOK__2.onCommitFiberRoot(closure_57, stateNode, undefined, !(128 & ~stateNode.current.flags));
      }
    }
    while (true) {
      let tmp26 = arr;
      let tmp27 = null;
      if (null === arr) {
        break;
      } else {
        let tmp49 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
        let tmp50 = closure_68;
        let num6 = 2;
        closure_68 = 2;
        let tmp51 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
        let tmp52 = tmp3;
        let onRecoverableError = tmp3.onRecoverableError;
        let num3 = 0;
        let tmp53 = arr;
        if (0 < arr.length) {
          do {
            let tmp28 = arr;
            let tmp29 = num3;
            let iter = arr[num3];
            let tmp30 = onRecoverableError;
            obj = { componentStack: iter.stack };
            let onRecoverableErrorResult = onRecoverableError(iter.value, obj);
            let sum = num3 + 1;
            num3 = sum;
            let length = arr.length;
          } while (sum < length);
        }
        let tmp33 = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        let tmp34 = T;
        __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
        let tmp35 = tmp50;
        closure_68 = tmp50;
        // break
      }
      let tmp36 = closure_171;
      let tmp37 = 3 & closure_171;
      if (tmp37) {
        let tmp38 = tmp3;
        tmp37 = 0 !== tmp3.tag;
      }
      if (tmp37) {
        let tmp39 = flushPendingEffects;
        let tmp40 = flushPendingEffects();
      }
      let tmp41 = ensureRootIsScheduled;
      let tmp42 = tmp3;
      let tmp43 = ensureRootIsScheduled(tmp3);
      let pendingLanes2 = tmp3.pendingLanes;
      let num4 = 4194090;
      if (!(4194090 & tmp6)) {
        let closure_175 = 0;
        let tmp48 = flushSyncWorkAcrossRoots_impl;
        let flag = false;
        tmp3 = flushSyncWorkAcrossRoots_impl(0, false);
      } else {
        let tmp44 = pendingLanes2;
        let num5 = 42;
      }
      let tmp45 = tmp3;
      let tmp46 = closure_176;
      if (tmp3 === closure_176) {
        let tmp47 = closure_175;
        closure_175 = closure_175 + 1;
      } else {
        closure_175 = 0;
        closure_176 = tmp3;
      }
    }
  }
  closure_168 = 5;
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
  if (5 !== closure_168) {
    return false;
  } else {
    let closure_172 = 0;
    const tmp35 = lanesToEventPriority(closure_171);
    const T = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T;
    let num = 32;
    if (32 <= tmp35) {
      num = tmp35;
    }
    let closure_68 = num;
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = null;
    let closure_173 = null;
    closure_168 = 0;
    let closure_169 = null;
    let closure_170 = null;
    closure_171 = 0;
    if (6 & closure_145) {
      const _Error = Error;
      throw Error("Cannot flush passive effects while already rendering.");
    } else {
      closure_145 = closure_145 | 4;
      commitPassiveUnmountOnFiber(tmp4.current);
      commitPassiveMountOnFiber(tmp4, tmp4.current, tmp5, tmp3);
      flushSyncWorkAcrossRoots_impl(0, false);
      if (__REACT_DEVTOOLS_GLOBAL_HOOK__2) {
        if ("function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__2.onPostCommitFiberRoot) {
          const result = __REACT_DEVTOOLS_GLOBAL_HOOK__2.onPostCommitFiberRoot(closure_57, tmp4);
        }
      }
      closure_68 = tmp37;
      __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.T = T;
      releaseRootPooledCache(tmp31, tmp32);
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
    let closure_153 = true;
    value.add(bindResult1);
    const bindResult = pingSuspendedRoot.bind(null, pingCache, promise, bindResult1);
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
  let tmp3 = closure_146 === pingCache;
  if (tmp3) {
    tmp3 = (closure_148 & arg2) === arg2;
  }
  if (tmp3) {
    if (4 === closure_155) {
      if (!(2 & closure_145)) {
        prepareFreshStack(pingCache, 0);
      }
    } else {
      if (3 === closure_155) {
        if ((62914560 & closure_148) === closure_148) {
          const obj = require(dependencyMap[3]);
        }
      }
      closure_158 = closure_158 | arg2;
    }
    if (closure_160 === closure_148) {
      closure_160 = 0;
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
  ({ sibling: alternate.sibling, index: alternate.index, ref: alternate.ref, refCleanup: alternate.refCleanup } = alternate);
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
  if (null === current.context) {
    current.context = closure_72;
  } else {
    current.pendingContext = closure_72;
  }
  const tmp4 = createUpdate(tmp);
  tmp4.payload = { element };
  let tmp5 = null;
  if (undefined !== arg3) {
    tmp5 = arg3;
  }
  if (null !== tmp5) {
    tmp4.callback = tmp5;
  }
  const tmp6 = enqueueUpdate(current, tmp4, tmp);
  if (null !== tmp6) {
    scheduleUpdateOnFiber(tmp6, current, tmp);
    entangleTransitions(tmp6, current, tmp);
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
const items = ["appSmallName"];
const items1 = ["<string:1368828533>"];
const items2 = [false, false];
const items3 = [];
const obj1 = { 0: "<string:3679518721>", "Null": "<string:3193045660>", "Null": "<string:1917108737>", "Null": "Boolean", touchBank: items3 };
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
const obj2 = { startShouldSetResponder: { phasedRegistrationNames: { "Null": null, "Null": null }, dependencies: items }, scrollShouldSetResponder: { phasedRegistrationNames: {}, dependencies: ["Dragging"] }, selectionChangeShouldSetResponder: { phasedRegistrationNames: {}, dependencies: [null] }, moveShouldSetResponder: { phasedRegistrationNames: { "Null": null, "Null": null }, dependencies: items1 }, responderStart: { registrationName: "onResponderStart", dependencies: items }, responderMove: { registrationName: "onResponderMove", dependencies: items1 }, responderEnd: { registrationName: "onResponderEnd", dependencies: items2 }, responderRelease: { registrationName: "onResponderRelease", dependencies: items2 }, responderTerminationRequest: { registrationName: "onResponderTerminationRequest", dependencies: [] }, responderGrant: { registrationName: "onResponderGrant", dependencies: [] }, responderReject: { registrationName: "onResponderReject", dependencies: [] }, responderTerminate: { registrationName: "onResponderTerminate", dependencies: [] } };
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
            let tmp22 = closure_203;
            tmp21 = closure_203(tmp21);
            num6 = num5;
          } while (tmp21);
        }
        let num7 = 0;
        let tmp23 = arg1;
        let num8 = 0;
        if (arg1) {
          do {
            num7 = num7 + 1;
            let tmp24 = closure_203;
            tmp23 = closure_203(tmp23);
            num8 = num7;
          } while (tmp23);
        }
        let tmp25 = tmp20;
        let tmp26 = num6;
        let tmp27 = tmp20;
        let tmp28 = num6;
        if (0 < num6 - num8) {
          do {
            let tmp29 = closure_203;
            tmp25 = closure_203(tmp25);
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
            let tmp34 = closure_203;
            tmp32 = closure_203(tmp32);
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
closure_40 = slice.call([false, false]);
const result = recomputePluginOrdering();
const obj6 = { ResponderEventPlugin: obj3, ReactNativeBridgeEventPlugin: obj7 };
let flag = false;
let flag2 = false;
const keys = Object.keys();
if (keys !== undefined) {
  flag2 = flag;
  while (keys[tmp] !== undefined) {
    let tmp27 = tmp14;
    if (!obj6.hasOwnProperty(tmp14)) {
      continue;
    } else {
      let tmp15 = obj6[tmp14];
      if (!obj5.hasOwnProperty(tmp14)) {
        if (obj5[tmp14]) {
          let _Error = Error;
          let str = "EventPluginRegistry: Cannot inject two different event plugins using the same name, `";
          let str2 = "`.";
          throw Error("EventPluginRegistry: Cannot inject two different event plugins using the same name, `" + tmp14 + "`.");
        } else {
          obj5[tmp14] = tmp15;
          flag = true;
          let tmp17 = tmp15;
          // continue
        }
      } else {
        flag = tmp13;
        let tmp16 = tmp15;
      }
      continue;
    }
    continue;
  }
}
if (flag2) {
  const result1 = recomputePluginOrdering();
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
          let tmp11 = closure_220;
          let tmp12 = closure_220(tmp10, arg0, tmp8);
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
const result2 = injection.injectGlobalResponderHandler({
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
let __REACT_DEVTOOLS_GLOBAL_HOOK__2 = null;
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
let closure_62 = 256;
let closure_63 = 4194304;
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
let closure_65 = 3;
let closure_68 = 0;
const obj11 = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, "Null": null, $$typeof: forResult };
let closure_70 = [];
let closure_71 = -1;
let closure_72 = {};
const weakMap = new WeakMap();
let closure_74 = createCursor(null);
let closure_75 = createCursor(null);
let closure_76 = createCursor(null);
let closure_77 = createCursor(null);
let closure_78 = null;
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
let closure_80 = createCursor(null);
let closure_81 = null;
let closure_82 = null;
let closure_83 = "undefined" !== typeof AbortController ? AbortController : function() {
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
let closure_84 = { $$typeof: forResult };
let closure_85 = null;
let closure_86 = null;
let closure_87 = false;
let closure_88 = false;
let closure_89 = false;
let closure_90 = 0;
let closure_91 = null;
let closure_92 = 0;
let closure_93 = 0;
let closure_94 = null;
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
        let closure_92 = 0;
        let closure_93 = callback();
        const obj = {
          status: "pending",
          value: undefined,
          then(arg0) {
              items.push(arg0);
            }
        };
      }
      closure_92 = closure_92 + 1;
      promise.then(closure_275, closure_275);
      return promise;
    }(undefined, promise);
  }
  if (null !== S) {
    S(arg0, promise);
  }
};
let closure_96 = createCursor(null);
let closure_98 = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
let closure_99 = Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.");
let closure_100 = Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary.");
let closure_101 = {
  then() {

  }
};
let closure_102 = null;
let closure_103 = [];
let closure_104 = 0;
let closure_105 = 0;
let closure_106 = false;
let closure_107 = false;
let closure_108 = createCursor(null);
let closure_110 = 0;
let closure_111 = null;
let closure_112 = null;
let closure_113 = null;
let closure_114 = false;
let closure_115 = false;
let closure_116 = false;
let closure_117 = 0;
let closure_118 = null;
let closure_119 = 0;
let closure_120 = { readContext, use, useCallback: throwInvalidHookError, useContext: throwInvalidHookError, useEffect: throwInvalidHookError, useImperativeHandle: throwInvalidHookError, useLayoutEffect: throwInvalidHookError, useInsertionEffect: throwInvalidHookError, useMemo: throwInvalidHookError, useReducer: throwInvalidHookError, useRef: throwInvalidHookError, useState: throwInvalidHookError, useDebugValue: throwInvalidHookError, useDeferredValue: throwInvalidHookError, useTransition: throwInvalidHookError, useSyncExternalStore: throwInvalidHookError, useId: throwInvalidHookError, useHostTransitionStatus: throwInvalidHookError, useFormState: throwInvalidHookError, useActionState: throwInvalidHookError, useOptimistic: throwInvalidHookError, useMemoCache: throwInvalidHookError, useCacheRefresh: throwInvalidHookError };
let closure_121 = {
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
    if (closure_116) {
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
      if (closure_116) {
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
    const obj = { HierarchyRequestError: "decimal-pad", WrongDocumentError: "number-pad", InvalidCharacterError: "phone-pad", lastRenderedReducer, lastRenderedState: tmp3 };
    tmp2.queue = obj;
    const bindResult = dispatchReducerAction.bind(null, closure_111, obj);
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
    const bindResult = dispatchSetState.bind(null, closure_111, queue);
    queue.dispatch = bindResult;
    const items = [tmp.memoizedState, bindResult];
    return items;
  },
  useDebugValue: mountDebugValue,
  useDeferredValue(arg0, arg1) {
    return mountDeferredValueImpl(mountWorkInProgressHook(), arg0, arg1);
  },
  useTransition() {
    const bindResult = startTransition.bind(null, closure_111, mountStateImpl(false).queue, true, false);
    mountWorkInProgressHook().memoizedState = bindResult;
    const items = [false, bindResult];
    return items;
  },
  useSyncExternalStore(bindResult1, getSnapshot) {
    const tmp2 = mountWorkInProgressHook();
    const tmp3 = getSnapshot();
    if (null === closure_146) {
      const _Error = Error;
      throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
    } else {
      if (!(124 & closure_148)) {
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
    let closure_119 = str + 1;
    const text = `${`«${closure_146.identifierPrefix}` + "r" + str.toString(32)}»`;
    mountWorkInProgressHook().memoizedState = text;
    return `${`«${closure_146.identifierPrefix}` + "r" + +closure_119.toString(32)}»`;
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
    const bindResult = dispatchOptimisticSetState.bind(null, closure_111, true, obj);
    obj.dispatch = bindResult;
    const items = [baseState, bindResult];
    return items;
  },
  useMemoCache,
  useCacheRefresh() {
    const bindResult = refreshCache.bind(null, closure_111);
    mountWorkInProgressHook().memoizedState = bindResult;
    return bindResult;
  }
};
let closure_122 = {
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
    return updateDeferredValueImpl(updateWorkInProgressHook(), _null2.memoizedState, arg0, arg1);
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
let closure_123 = {
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
    if (null === _null2) {
      let tmp7 = mountDeferredValueImpl(tmp, arg0, arg1);
    } else {
      tmp7 = updateDeferredValueImpl(tmp, _null2.memoizedState, arg0, arg1);
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
    if (null !== closure_112) {
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
let closure_124 = null;
let closure_125 = 0;
let closure_126 = createChildReconciler(true);
let closure_127 = createChildReconciler(false);
let closure_128 = createCursor(null);
let closure_129 = null;
let closure_131 = {
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
  }
};
let closure_132 = "function" === typeof reportError ? reportError : (message) => {
  if ("object" === typeof window) {
    const _window = window;
    if ("function" === typeof window.ErrorEvent) {
      const _window2 = window;
      const obj = { "Null": null, "Null": null };
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
let closure_133 = Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.");
let closure_134 = false;
let closure_135 = { "Null": false, "Null": false, "Null": false, "Null": false };
let closure_136 = false;
let closure_137 = false;
let closure_138 = "function" === typeof WeakSet ? WeakSet : Set;
let closure_139 = null;
let closure_140 = null;
let closure_141 = false;
let closure_142 = 8192;
let closure_143 = {
  getCacheForType(arg0) {
    const tmp = readContext(closure_84);
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
let closure_144 = "function" === typeof WeakMap ? WeakMap : Map;
let closure_145 = 0;
let closure_146 = null;
let closure_147 = null;
let closure_148 = 0;
let closure_149 = 0;
let closure_150 = null;
let closure_151 = false;
let closure_152 = false;
let closure_153 = false;
let closure_154 = 0;
let closure_155 = 0;
let closure_156 = 0;
let closure_157 = 0;
let closure_158 = 0;
let closure_159 = 0;
let closure_160 = 0;
let closure_161 = null;
let closure_162 = null;
let closure_163 = false;
let closure_164 = 0;
let closure_165 = Infinity;
let closure_166 = null;
let closure_167 = null;
let closure_168 = 0;
let closure_169 = null;
let closure_170 = null;
let closure_171 = 0;
let closure_172 = 0;
let closure_173 = null;
let closure_174 = null;
let closure_175 = 0;
let closure_176 = null;
const version = _module1.version;
if ("19.1.0" !== version) {
  const _Error3 = Error;
  throw Error("Incompatible React versions: The \"react\" and \"react-native-renderer\" packages must have the exact same version. Instead got:\n  - react:                  " + version + "\n  - react-native-renderer:  19.1.0\nLearn more: https://react.dev/warnings/version-mismatch");
} else if ("function" !== typeof require(dependencyMap[2]).ReactFiberErrorDialog.showErrorDialog) {
  const _Error2 = Error;
  throw Error("Expected ReactFiberErrorDialog.showErrorDialog to be a function.");
} else {
  batchedUpdatesImpl = function batchedUpdatesImpl(arg0, arg1) {
    closure_145 = closure_145 | 1;
    if (0 === closure_145) {
      let closure_165 = require(dependencyMap[3]).unstable_now() + 500;
      flushSyncWorkAcrossRoots_impl(0, true);
      const obj = require(dependencyMap[3]);
    }
    return arg0(arg1);
  };
  const _Map = Map;
  const map2 = new Map();
  const obj12 = { "Bool(true)": 3309567, "Bool(true)": 601874432, "Bool(true)": 4319821, "Bool(true)": -367009792, "Bool(true)": 1900146671, currentDispatcherRef: __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE };
  if (null !== obj10) {
    tmp32.rendererConfig = obj10;
  }
  if ("undefined" !== typeof globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    __REACT_DEVTOOLS_GLOBAL_HOOK__2 = globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__.isDisabled) {
      if (tmp25.supportsFiber) {
        closure_57 = __REACT_DEVTOOLS_GLOBAL_HOOK__2.inject(obj12);
      }
    }
  }
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
      const tmp19 = createFiberImplClass(3, null, null, 0);
      tmp14.current = tmp19;
      tmp19.stateNode = tmp14;
      const tmp21 = createCache();
      tmp21.refCount = tmp21.refCount + 1;
      tmp14.pooledCache = tmp21;
      tmp21.refCount = tmp21.refCount + 1;
      obj = { unsafe_rawColors: true, np: true, cache: tmp21 };
      tmp19.memoizedState = obj;
      initializeUpdateQueue(tmp19);
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
  exports.unmountComponentAtNode = unmountComponentAtNode;
  exports.unmountComponentAtNodeAndRemoveContainer = (arg0) => {
    unmountComponentAtNode(arg0);
    const UIManager = require(dependencyMap[2]).UIManager;
    UIManager.removeRootView(arg0);
  };
  exports.unstable_batchedUpdates = batchedUpdates$1;
}
