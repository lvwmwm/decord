// Module ID: 886
// Function ID: 9793
// Name: _mergeOptions
// Dependencies: []

// Module 886 (_mergeOptions)
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
      obj.allowUrls = items.concat(callback(allowUrls), callback(allowUrls1));
      const items1 = [];
      let denyUrls = first.denyUrls;
      if (!denyUrls) {
        denyUrls = [];
      }
      let denyUrls1 = obj.denyUrls;
      const tmp = callback;
      const tmp3 = callback;
      const tmp4 = callback;
      const tmpResult = callback(allowUrls);
      if (!denyUrls1) {
        denyUrls1 = [];
      }
      obj.denyUrls = items1.concat(callback(denyUrls), callback(denyUrls1));
      const items2 = [];
      let ignoreErrors = first.ignoreErrors;
      if (!ignoreErrors) {
        ignoreErrors = [];
      }
      let ignoreErrors1 = obj.ignoreErrors;
      const tmp4Result = callback(denyUrls);
      const tmp6 = callback;
      const tmp7 = callback;
      if (!ignoreErrors1) {
        ignoreErrors1 = [];
      }
      const tmp7Result = callback(ignoreErrors);
      const tmp9 = callback;
      obj.ignoreErrors = items2.concat(tmp7Result, callback(ignoreErrors1), callback(first.disableErrorDefaults ? [] : items));
      const items3 = [];
      let ignoreTransactions = first.ignoreTransactions;
      if (!ignoreTransactions) {
        ignoreTransactions = [];
      }
      let ignoreTransactions1 = obj.ignoreTransactions;
      const tmp11 = callback;
      const tmp9Result = callback(ignoreErrors1);
      if (!ignoreTransactions1) {
        ignoreTransactions1 = [];
      }
      obj.ignoreTransactions = items3.concat(callback(ignoreTransactions), callback(ignoreTransactions1));
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
  const reversed = closure_2(null != values ? values : []).reverse();
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
    const stacktrace = found.stacktrace;
    if (null != stacktrace) {
      frames = stacktrace.frames;
    }
  }
  let tmp6 = null;
  if (frames) {
    tmp6 = function _getLastValidUrl(frames) {
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
    }(frames);
  }
  return tmp6;
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const items = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const _module = require(dependencyMap[1]);
const defineIntegrationResult = _module.defineIntegration(() => {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    let closure_1 = {};
    const obj = {
      name: "EventFilters",
      setup(getOptions) {
          let closure_0 = callback(closure_1, getOptions.getOptions());
        },
      processEvent(type, arg1, getOptions) {
          if (!closure_0) {
            closure_0 = callback(closure_1, getOptions.getOptions());
          }
          let tmp3 = null;
          if (!function _shouldDropEvent(type, closure_0) {
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
                      result = callback(closure_1[6]).stringMatchesSomePattern(transaction, ignoreTransactions);
                      const obj7 = callback(closure_1[6]);
                    }
                    flag7 = result;
                  }
                }
                if (flag7) {
                  if (callback(closure_1[2]).DEBUG_BUILD) {
                    const debug5 = callback(closure_1[3]).debug;
                    const _HermesInternal5 = HermesInternal;
                    debug5.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: " + callback(closure_1[4]).getEventDescription(type));
                    const obj8 = callback(closure_1[4]);
                  }
                  return true;
                }
              }
            } else if (function _isIgnoredError(type, ignoreErrors) {
              if (null != ignoreErrors) {
                if (ignoreErrors.length) {
                  const possibleEventMessages = ignoreErrors(closure_1[5]).getPossibleEventMessages(type);
                  return possibleEventMessages.some((arg0) => arg1(closure_1[6]).stringMatchesSomePattern(arg0, arg1));
                }
              }
              return false;
            }(type, closure_0.ignoreErrors)) {
              if (callback(closure_1[2]).DEBUG_BUILD) {
                const debug4 = callback(closure_1[3]).debug;
                const _HermesInternal4 = HermesInternal;
                debug4.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + callback(closure_1[4]).getEventDescription(type));
                const obj6 = callback(closure_1[4]);
              }
              return true;
            } else if (function _isUselessError(exception) {
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
            }(type)) {
              if (callback(closure_1[2]).DEBUG_BUILD) {
                const debug3 = callback(closure_1[3]).debug;
                const _HermesInternal3 = HermesInternal;
                debug3.warn("Event dropped due to not having an error message, error type or stacktrace.\nEvent: " + callback(closure_1[4]).getEventDescription(type));
                const obj5 = callback(closure_1[4]);
              }
              return true;
            } else {
              const denyUrls = closure_0.denyUrls;
              let flag = false;
              if (null != denyUrls) {
                flag = false;
                if (denyUrls.length) {
                  const tmp3 = callback2(type);
                  let result1 = !tmp4;
                  if (!!tmp3) {
                    result1 = callback(closure_1[6]).stringMatchesSomePattern(tmp3, denyUrls);
                    const obj = callback(closure_1[6]);
                  }
                  flag = result1;
                }
              }
              if (flag) {
                if (callback(closure_1[2]).DEBUG_BUILD) {
                  const debug2 = callback(closure_1[3]).debug;
                  const eventDescription = callback(closure_1[4]).getEventDescription(type);
                  const _HermesInternal2 = HermesInternal;
                  debug2.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + eventDescription + ".\nUrl: " + callback2(type));
                  const obj4 = callback(closure_1[4]);
                }
                return true;
              } else {
                const allowUrls = closure_0.allowUrls;
                let flag3 = true;
                if (null != allowUrls) {
                  flag3 = true;
                  if (allowUrls.length) {
                    const tmp9 = callback2(type);
                    let result2 = !tmp9;
                    if (!result2) {
                      result2 = callback(closure_1[6]).stringMatchesSomePattern(tmp9, allowUrls);
                      const obj2 = callback(closure_1[6]);
                    }
                    flag3 = result2;
                  }
                }
                if (!flag3) {
                  if (callback(closure_1[2]).DEBUG_BUILD) {
                    const debug = callback(closure_1[3]).debug;
                    const eventDescription1 = callback(closure_1[4]).getEventDescription(type);
                    const _HermesInternal = HermesInternal;
                    debug.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + eventDescription1 + ".\nUrl: " + callback2(type));
                    const obj3 = callback(closure_1[4]);
                  }
                  return true;
                }
              }
            }
            return false;
          }(type, closure_0)) {
            tmp3 = type;
          }
          return tmp3;
        }
    };
    return obj;
  }
});
const _module1 = require(dependencyMap[1]);

export const eventFiltersIntegration = defineIntegrationResult;
export const inboundFiltersIntegration = _module1.defineIntegration(() => {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    const obj = { name: "InboundFilters" };
    return Object.assign({}, defineIntegrationResult({}), obj);
  }
});
