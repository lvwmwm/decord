// Module ID: 7311
// Function ID: 59004
// Name: _getEventFilterUrl
// Dependencies: [65, 7292, 7264, 7236, 7247, 7245]

// Module 7311 (_getEventFilterUrl)
import _toConsumableArray from "_toConsumableArray";
import setupIntegration from "setupIntegration";

function _getEventFilterUrl(arg0) {
  const frames = arg0.exception.values[0].stacktrace.frames;
  while (true) {
    let tmp = frames;
    let tmp2 = null;
    if (!frames) {
      break;
    } else {
      let tmp3 = frames;
      tmp2 = (function _getLastValidUrl(frames) {
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
      break;
    }
    return tmp2;
  }
}
let items = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/];

export const inboundFiltersIntegration = setupIntegration.defineIntegration(function _inboundFiltersIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let closure_0 = {};
    let obj = {
      name: "InboundFilters",
      processEvent(type, arg1, getOptions) {
          let tmp = null;
          if (!(function _shouldDropEvent(type, ignoreInternal) {
            if (ignoreInternal.ignoreInternal) {
              while (true) {
                if ("SentryError" === type.exception.values[0].type) {
                  let tmp51 = callback;
                  let tmp52 = outer2_1;
                  let num20 = 2;
                  if (callback(outer2_1[2]).DEBUG_BUILD) {
                    let tmp53 = callback;
                    let tmp54 = outer2_1;
                    let num21 = 3;
                    let logger6 = callback(outer2_1[3]).logger;
                    let num22 = 4;
                    let obj9 = callback(outer2_1[4]);
                    let tmp55 = globalThis;
                    let _HermesInternal6 = HermesInternal;
                    let str10 = "Event dropped due to being internal Sentry Error.\nEvent: ";
                    let warnResult = logger6.warn("Event dropped due to being internal Sentry Error.\nEvent: " + obj9.getEventDescription(type));
                  }
                  let flag10 = true;
                  return true;
                }
              }
            }
            if ((function _isIgnoredError(type, ignoreErrors) {
              let closure_0 = ignoreErrors;
              if (!type.type) {
                if (ignoreErrors) {
                  if (ignoreErrors.length) {
                    const items = [];
                    if (type.message) {
                      items.push(tmp.message);
                    }
                    const iter = type.exception.values[type.exception.values.length - 1];
                    while (true) {
                      let tmp5 = iter;
                      let value = iter;
                      if (!iter) {
                        break;
                      } else {
                        let tmp6 = iter;
                        value = iter.value;
                        break;
                      }
                      if (value) {
                        let tmp7 = items;
                        let tmp8 = iter;
                        let arr = items.push(iter.value);
                        if (iter.type) {
                          let tmp10 = items;
                          let tmp11 = globalThis;
                          let _HermesInternal = HermesInternal;
                          let str = "";
                          let str2 = ": ";
                          let arr1 = items.push("" + iter.type + ": " + iter.value);
                        }
                      }
                      let tmp13 = items;
                      return items.some((arg0) => ignoreErrors(outer4_1[5]).stringMatchesSomePattern(arg0, ignoreErrors));
                    }
                  }
                }
              }
              return false;
            })(type, ignoreInternal.ignoreErrors)) {
              if (callback(outer2_1[2]).DEBUG_BUILD) {
                const logger5 = callback(outer2_1[3]).logger;
                const _HermesInternal5 = HermesInternal;
                logger5.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + callback(outer2_1[4]).getEventDescription(type));
                const obj8 = callback(outer2_1[4]);
              }
              return true;
            } else if ((function _isUselessError(type) {
              if (type.type) {
                return false;
              } else {
                if (type.exception) {
                  if (type.exception.values) {
                    if (0 !== type.exception.values.length) {
                      let tmp = !type.message;
                      if (tmp) {
                        const values = type.exception.values;
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
              }
            })(type)) {
              if (callback(outer2_1[2]).DEBUG_BUILD) {
                const logger4 = callback(outer2_1[3]).logger;
                const _HermesInternal4 = HermesInternal;
                logger4.warn("Event dropped due to not having an error message, error type or stacktrace.\nEvent: " + callback(outer2_1[4]).getEventDescription(type));
                const obj7 = callback(outer2_1[4]);
              }
              return true;
            } else {
              const ignoreTransactions = ignoreInternal.ignoreTransactions;
              let flag2 = false;
              if ("transaction" === type.type) {
                flag2 = false;
                if (ignoreTransactions) {
                  flag2 = false;
                  if (ignoreTransactions.length) {
                    const transaction = type.transaction;
                    let result = !tmp2;
                    if (!!transaction) {
                      result = callback(outer2_1[5]).stringMatchesSomePattern(transaction, ignoreTransactions);
                      const obj = callback(outer2_1[5]);
                    }
                    flag2 = result;
                  }
                }
              }
              if (flag2) {
                if (callback(outer2_1[2]).DEBUG_BUILD) {
                  const logger3 = callback(outer2_1[3]).logger;
                  const _HermesInternal3 = HermesInternal;
                  logger3.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: " + callback(outer2_1[4]).getEventDescription(type));
                  const obj6 = callback(outer2_1[4]);
                }
                return true;
              } else {
                const denyUrls = ignoreInternal.denyUrls;
                let flag3 = false;
                if (denyUrls) {
                  flag3 = false;
                  if (denyUrls.length) {
                    let tmp7 = outer2_4(type);
                    let result1 = !tmp8;
                    if (!!tmp7) {
                      result1 = callback(outer2_1[5]).stringMatchesSomePattern(tmp7, denyUrls);
                      const obj2 = callback(outer2_1[5]);
                    }
                    flag3 = result1;
                  }
                }
                if (flag3) {
                  if (callback(outer2_1[2]).DEBUG_BUILD) {
                    const logger2 = callback(outer2_1[3]).logger;
                    const eventDescription = callback(outer2_1[4]).getEventDescription(type);
                    const _HermesInternal2 = HermesInternal;
                    logger2.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + eventDescription + ".\nUrl: " + outer2_4(type));
                    const obj5 = callback(outer2_1[4]);
                  }
                  return true;
                } else {
                  const allowUrls = ignoreInternal.allowUrls;
                  let flag5 = true;
                  if (allowUrls) {
                    flag5 = true;
                    if (allowUrls.length) {
                      let tmp13 = outer2_4(type);
                      let result2 = !tmp13;
                      if (!result2) {
                        result2 = callback(outer2_1[5]).stringMatchesSomePattern(tmp13, allowUrls);
                        const obj3 = callback(outer2_1[5]);
                      }
                      flag5 = result2;
                    }
                  }
                  if (flag5) {
                    return false;
                  } else {
                    if (callback(outer2_1[2]).DEBUG_BUILD) {
                      const logger = callback(outer2_1[3]).logger;
                      const eventDescription1 = callback(outer2_1[4]).getEventDescription(type);
                      let _HermesInternal = HermesInternal;
                      logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + eventDescription1 + ".\nUrl: " + outer2_4(type));
                      const obj4 = callback(outer2_1[4]);
                    }
                    return true;
                  }
                }
              }
            }
          })(type, (function _mergeOptions(closure_0, options) {
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
                obj.allowUrls = items.concat(outer2_2(allowUrls), outer2_2(allowUrls1));
                const items1 = [];
                let denyUrls = first.denyUrls;
                if (!denyUrls) {
                  denyUrls = [];
                }
                let denyUrls1 = obj.denyUrls;
                const tmp = outer2_2;
                const tmp3 = outer2_2;
                const tmp4 = outer2_2;
                const tmpResult = outer2_2(allowUrls);
                if (!denyUrls1) {
                  denyUrls1 = [];
                }
                obj.denyUrls = items1.concat(outer2_2(denyUrls), outer2_2(denyUrls1));
                const items2 = [];
                let ignoreErrors = first.ignoreErrors;
                if (!ignoreErrors) {
                  ignoreErrors = [];
                }
                let ignoreErrors1 = obj.ignoreErrors;
                const tmp4Result = outer2_2(denyUrls);
                const tmp6 = outer2_2;
                const tmp7 = outer2_2;
                if (!ignoreErrors1) {
                  ignoreErrors1 = [];
                }
                const tmp7Result = outer2_2(ignoreErrors);
                const tmp9 = outer2_2;
                obj.ignoreErrors = items2.concat(tmp7Result, outer2_2(ignoreErrors1), outer2_2(first.disableErrorDefaults ? [] : outer2_3));
                const items3 = [];
                let ignoreTransactions = first.ignoreTransactions;
                if (!ignoreTransactions) {
                  ignoreTransactions = [];
                }
                let ignoreTransactions1 = obj.ignoreTransactions;
                const tmp11 = outer2_2;
                const tmp9Result = outer2_2(ignoreErrors1);
                if (!ignoreTransactions1) {
                  ignoreTransactions1 = [];
                }
                obj.ignoreTransactions = items3.concat(outer2_2(ignoreTransactions), outer2_2(ignoreTransactions1));
                obj.ignoreInternal = undefined === first.ignoreInternal || first.ignoreInternal;
                return obj;
              }
              obj = {};
            }
            first = {};
          })(closure_0, getOptions.getOptions()))) {
            tmp = type;
          }
          return tmp;
        }
    };
    return obj;
  }
});
