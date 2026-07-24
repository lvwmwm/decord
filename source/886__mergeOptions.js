// Module ID: 886
// Function ID: 9795
// Name: _mergeOptions
// Dependencies: [65, 863, 800, 801, 807, 864, 809]

// Module 886 (_mergeOptions)
import _toConsumableArray from "_toConsumableArray";
import setupIntegration from "setupIntegration";
import setupIntegration from "setupIntegration";

function _mergeOptions() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      obj = {};
      const items = [];
      let allowUrls = first.allowUrls;
      if (!allowUrls) {
        allowUrls = [];
      }
      let allowUrls1 = obj.allowUrls;
      if (!allowUrls1) {
        allowUrls1 = [];
      }
      obj.allowUrls = items.concat(_toConsumableArray(allowUrls), _toConsumableArray(allowUrls1));
      const items1 = [];
      let denyUrls = first.denyUrls;
      if (!denyUrls) {
        denyUrls = [];
      }
      let denyUrls1 = obj.denyUrls;
      const tmp = _toConsumableArray;
      const tmp3 = _toConsumableArray;
      const tmp4 = _toConsumableArray;
      const tmpResult = _toConsumableArray(allowUrls);
      if (!denyUrls1) {
        denyUrls1 = [];
      }
      obj.denyUrls = items1.concat(_toConsumableArray(denyUrls), _toConsumableArray(denyUrls1));
      const items2 = [];
      let ignoreErrors = first.ignoreErrors;
      if (!ignoreErrors) {
        ignoreErrors = [];
      }
      let ignoreErrors1 = obj.ignoreErrors;
      const tmp4Result = _toConsumableArray(denyUrls);
      const tmp6 = _toConsumableArray;
      const tmp7 = _toConsumableArray;
      if (!ignoreErrors1) {
        ignoreErrors1 = [];
      }
      const tmp7Result = _toConsumableArray(ignoreErrors);
      const tmp9 = _toConsumableArray;
      obj.ignoreErrors = items2.concat(tmp7Result, _toConsumableArray(ignoreErrors1), _toConsumableArray(first.disableErrorDefaults ? [] : items));
      const items3 = [];
      let ignoreTransactions = first.ignoreTransactions;
      if (!ignoreTransactions) {
        ignoreTransactions = [];
      }
      let ignoreTransactions1 = obj.ignoreTransactions;
      const tmp11 = _toConsumableArray;
      const tmp9Result = _toConsumableArray(ignoreErrors1);
      if (!ignoreTransactions1) {
        ignoreTransactions1 = [];
      }
      obj.ignoreTransactions = items3.concat(_toConsumableArray(ignoreTransactions), _toConsumableArray(ignoreTransactions1));
      return obj;
    }
    obj = {};
  }
  first = {};
}
function _getEventFilterUrl(exception) {
  exception = exception.exception;
  let values;
  if (null != exception) {
    values = exception.values;
  }
  const reversed = _toConsumableArray(null != values ? values : []).reverse();
  const found = reversed.find((mechanism) => {
    mechanism = mechanism.mechanism;
    let parent_id;
    if (null != mechanism) {
      parent_id = mechanism.parent_id;
    }
    let tmp2 = undefined === parent_id;
    if (tmp2) {
      const stacktrace = mechanism.stacktrace;
      let length;
      if (null != stacktrace) {
        const frames = stacktrace.frames;
        if (null != frames) {
          length = frames.length;
        }
      }
      tmp2 = length;
    }
    return tmp2;
  });
  let frames;
  if (null != found) {
    let stacktrace = found.stacktrace;
    if (null != stacktrace) {
      frames = stacktrace.frames;
    }
  }
  let tmp6 = null;
  if (frames) {
    tmp6 = (function _getLastValidUrl(frames) {
      let tmp2;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          let first = arguments[0];
        }
        let diff = first.length - 1;
        if (diff >= 0) {
          while (true) {
            tmp2 = first[diff];
            if (tmp2) {
              if ("<anonymous>" !== tmp2.filename) {
                if ("[native code]" !== tmp2.filename) {
                  break;
                }
              }
            }
            diff = diff - 1;
          }
          return tmp2.filename || null;
        }
        return null;
      }
      first = [];
    })(frames);
  }
  return tmp6;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const defineIntegrationResult = setupIntegration.defineIntegration(() => {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_1 = {};
    let obj = {
      name: "EventFilters",
      setup(getOptions) {
          let closure_0 = outer1_5(closure_1, getOptions.getOptions());
        },
      processEvent(type, arg1, getOptions) {
          if (!closure_0) {
            closure_0 = outer1_5(closure_1, getOptions.getOptions());
          }
          let tmp3 = null;
          if (!(function _shouldDropEvent(type, closure_0) {
            if (type.type) {
              if ("transaction" === type.type) {
                const ignoreTransactions = closure_0.ignoreTransactions;
                let flag7 = false;
                if (null != ignoreTransactions) {
                  flag7 = false;
                  if (ignoreTransactions.length) {
                    const transaction = type.transaction;
                    let result = !tmp42;
                    if (!!transaction) {
                      result = outer2_0(809).stringMatchesSomePattern(transaction, ignoreTransactions);
                      const obj7 = outer2_0(809);
                    }
                    flag7 = result;
                  }
                }
                if (flag7) {
                  if (outer2_0(800).DEBUG_BUILD) {
                    const debug5 = outer2_0(801).debug;
                    const _HermesInternal5 = HermesInternal;
                    debug5.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: " + outer2_0(807).getEventDescription(type));
                    const obj8 = outer2_0(807);
                  }
                  return true;
                }
              }
            } else if ((function _isIgnoredError(type, ignoreErrors) {
              let closure_0 = ignoreErrors;
              if (null != ignoreErrors) {
                if (ignoreErrors.length) {
                  const possibleEventMessages = outer3_0(table[5]).getPossibleEventMessages(type);
                  return possibleEventMessages.some((arg0) => outer4_0(table[6]).stringMatchesSomePattern(arg0, closure_0));
                }
              }
              return false;
            })(type, closure_0.ignoreErrors)) {
              if (outer2_0(800).DEBUG_BUILD) {
                const debug4 = outer2_0(801).debug;
                const _HermesInternal4 = HermesInternal;
                debug4.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + outer2_0(807).getEventDescription(type));
                const obj6 = outer2_0(807);
              }
              return true;
            } else if ((function _isUselessError(exception) {
              exception = exception.exception;
              if (null != exception) {
                let values = exception.values;
                if (null != values) {
                  if (values.length) {
                    let tmp = !exception.message;
                    if (tmp) {
                      values = exception.exception.values;
                      tmp = !values.some((stacktrace) => {
                        stacktrace = stacktrace.stacktrace;
                        if (!stacktrace) {
                          let type = stacktrace.type;
                          if (type) {
                            type = "Error" !== stacktrace.type;
                          }
                          stacktrace = type;
                        }
                        if (!stacktrace) {
                          stacktrace = stacktrace.value;
                        }
                        return stacktrace;
                      });
                    }
                    return tmp;
                  }
                }
              }
              return false;
            })(type)) {
              if (outer2_0(800).DEBUG_BUILD) {
                const debug3 = outer2_0(801).debug;
                const _HermesInternal3 = HermesInternal;
                debug3.warn("Event dropped due to not having an error message, error type or stacktrace.\nEvent: " + outer2_0(807).getEventDescription(type));
                const obj5 = outer2_0(807);
              }
              return true;
            } else {
              const denyUrls = closure_0.denyUrls;
              let flag = false;
              if (null != denyUrls) {
                flag = false;
                if (denyUrls.length) {
                  const tmp3 = outer2_6(type);
                  let result1 = !tmp4;
                  if (!!tmp3) {
                    result1 = outer2_0(809).stringMatchesSomePattern(tmp3, denyUrls);
                    const obj = outer2_0(809);
                  }
                  flag = result1;
                }
              }
              if (flag) {
                if (outer2_0(800).DEBUG_BUILD) {
                  const debug2 = outer2_0(801).debug;
                  const eventDescription = outer2_0(807).getEventDescription(type);
                  const _HermesInternal2 = HermesInternal;
                  debug2.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + eventDescription + ".\nUrl: " + outer2_6(type));
                  const obj4 = outer2_0(807);
                }
                return true;
              } else {
                const allowUrls = closure_0.allowUrls;
                let flag3 = true;
                if (null != allowUrls) {
                  flag3 = true;
                  if (allowUrls.length) {
                    const tmp9 = outer2_6(type);
                    let result2 = !tmp9;
                    if (!result2) {
                      result2 = outer2_0(809).stringMatchesSomePattern(tmp9, allowUrls);
                      const obj2 = outer2_0(809);
                    }
                    flag3 = result2;
                  }
                }
                if (!flag3) {
                  if (outer2_0(800).DEBUG_BUILD) {
                    const debug = outer2_0(801).debug;
                    const eventDescription1 = outer2_0(807).getEventDescription(type);
                    const _HermesInternal = HermesInternal;
                    debug.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + eventDescription1 + ".\nUrl: " + outer2_6(type));
                    const obj3 = outer2_0(807);
                  }
                  return true;
                }
              }
            }
            return false;
          })(type, closure_0)) {
            tmp3 = type;
          }
          return tmp3;
        }
    };
    return obj;
  }
});

export const eventFiltersIntegration = defineIntegrationResult;
export const inboundFiltersIntegration = setupIntegration.defineIntegration(() => {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    const obj = { name: "InboundFilters" };
    return Object.assign({}, defineIntegrationResult({}), obj);
  }
});
