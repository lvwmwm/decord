// Module ID: 3822
// Function ID: 31747
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 27, 3823, 653, 3, 3824, 3826, 3827, 3828, 3829, 3830, 1212, 4096, 477, 4098, 1445, 4111, 12857, 2]
// Exports: default

// Module 3822 (_createForOfIteratorHelperLoose)
import module_3824 from "module_3824";
import { Linking } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { WebBrowserType } from "ME";
import importDefaultResult from "ME";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function sanitizeURLPart(str) {
  let replaced = str;
  if (null != str) {
    replaced = str.replace(/[^\x00-\x7F]+/g, (arg0) => encodeURIComponent(arg0));
  }
  return replaced;
}
async function _handleURL(arg0, arg1, arg2) {
  let iter = (function*(arg0, arg1) {
    let obj = arg2;
    let tmp = arg0;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (obj === undefined) {
      obj = {};
    }
    let flag = obj.allowExternal;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = obj.forceExternalBrowser;
    if (flag2 === undefined) {
      flag2 = false;
    }
    function openInBrowser() {
      if (null != obj.sanitizeUrl(closure_0)) {
        let SAFARI = outer3_6.SAFARI;
        if (closure_0.startsWith("https:")) {
          const browserManagerSelectedBrowser = outer3_0(outer3_2[12]).getBrowserManagerSelectedBrowser();
          let tmp11 = browserManagerSelectedBrowser;
          if (null != closure_1) {
            tmp11 = closure_1;
          }
          let tmp12 = flag2;
          if (flag2) {
            tmp12 = tmp11 === outer3_6.IN_APP;
          }
          SAFARI = tmp11;
          if (tmp12) {
            if (browserManagerSelectedBrowser !== outer3_6.IN_APP) {
              SAFARI = browserManagerSelectedBrowser;
            } else {
              outer3_0(outer3_2[13]).isIOS() ? outer3_6.SAFARI : outer3_6.CHROME;
              const obj4 = outer3_0(outer3_2[13]);
            }
          }
          const obj3 = outer3_0(outer3_2[12]);
        }
        if (outer3_6.IN_APP === SAFARI) {
          const result = outer3_0(outer3_2[12]).browserManagerOpenUrl(closure_0, outer3_6.IN_APP);
          result.catch(() => {
            const intl = outer4_0(outer4_2[11]).intl;
            outer4_0(outer4_2[10]).presentFailedToast("" + intl.string(outer4_0(outer4_2[11]).t.HryVrx) + " " + outer1_0);
          });
          const obj7 = outer3_0(outer3_2[12]);
          let isIOSResult = outer3_0(outer3_2[13]).isIOS();
          if (isIOSResult) {
            isIOSResult = outer3_5.isOpen();
          }
          if (isIOSResult) {
            outer3_1(outer3_2[14]).hideAllActionSheets();
            const obj9 = outer3_1(outer3_2[14]);
          }
          const obj8 = outer3_0(outer3_2[13]);
        } else if (outer3_6.CHROME === SAFARI) {
          const result1 = outer3_0(outer3_2[12]).browserManagerOpenUrl(closure_0, outer3_6.CHROME);
          result1.catch(() => {
            const intl = outer4_0(outer4_2[11]).intl;
            outer4_0(outer4_2[10]).presentFailedToast("" + intl.string(outer4_0(outer4_2[11]).t.HryVrx) + " " + outer1_0);
          });
          const obj6 = outer3_0(outer3_2[12]);
        } else {
          const SAFARI2 = outer3_6.SAFARI;
          const result2 = outer3_0(outer3_2[12]).browserManagerOpenUrl(closure_0, outer3_6.SAFARI);
          const obj5 = outer3_0(outer3_2[12]);
        }
      } else {
        let intl = outer3_0(outer3_2[11]).intl;
        outer3_0(outer3_2[10]).presentFailedToast(intl.string(outer3_0(outer3_2[11]).t.XiqzAp));
        const obj2 = outer3_0(outer3_2[10]);
      }
    }
    yield undefined;
    if (flag2) {
      openInBrowser();
    } else {
      if (!obj2.test(tmp)) {
        const text = `https://${tmp}`;
        tmp = text;
        closure_0 = text;
      }
      if (obj3.test(tmp)) {
        const parsed = outer2_1(outer2_2[15]).parse(tmp);
        parsed.pathname = outer2_10(parsed.pathname);
        parsed.search = outer2_10(parsed.search);
        parsed.hash = outer2_10(parsed.hash);
        let obj4 = outer2_1(outer2_2[15]);
        const formatResult = outer2_1(outer2_2[15]).format(parsed);
        tmp = formatResult;
        closure_0 = formatResult;
        let obj5 = outer2_1(outer2_2[15]);
      }
      obj = { payload: outer2_1(outer2_2[16])(tmp).payload, safe: true };
      if (!outer2_1(outer2_2[17])(obj)) {
        if (flag) {
          if (!yield (function tryHandleUniversalLink(arg0) {
            let closure_0 = arg0;
            return new Promise((closure_0) => {
              const result = outer4_1(outer4_2[5]).tryOpenUrlAsUniversalLink(closure_0);
              const obj = outer4_1(outer4_2[5]);
              result.then(() => {
                outer5_7.info("Universal link opened successfully.");
                callback(true);
              }).catch(() => {
                outer5_7.info("URL is not a handled universal link.");
                callback(false);
              });
            });
          })(tmp)) {
            if (!yield (function tryHandleCustomScheme(arg0) {
              let iter2;
              let protocol;
              let regex;
              let closure_0 = arg0;
              const tmp = outer3_8(outer3_0(outer3_2[6]).LINKING_SCHEMAS_VALUES);
              let iter = tmp();
              let tmp2 = arg0;
              let arr = arg0;
              if (!iter.done) {
                do {
                  ({ regex, protocol } = iter.value);
                  let match = regex.exec(tmp2);
                  let tmp4 = tmp2;
                  let tmp5;
                  if (null != match) {
                    tmp5 = match[1];
                  }
                  if (null != tmp5) {
                    let sum = protocol + tmp5;
                    closure_0 = sum;
                    tmp4 = sum;
                  }
                  iter2 = tmp();
                  tmp2 = tmp4;
                  iter = iter2;
                  arr = tmp4;
                } while (!iter2.done);
              }
              let first = null;
              if (-1 !== arr.indexOf("://")) {
                first = arr.split("://")[0];
              }
              if ("http" !== first) {
                if ("https" !== first) {
                  outer3_7.info("tryHandleCustomScheme", arr);
                  let promise = new Promise((closure_0) => {
                    const obj = outer4_1(outer4_2[5]);
                    const tryOpenSchemeResult = outer4_1(outer4_2[5]).tryOpenScheme(closure_0);
                    outer4_1(outer4_2[5]).tryOpenScheme(closure_0).then(() => {
                      outer5_7.info("Custom scheme opened successfully.");
                      callback(true);
                    }).catch(() => {
                      outer5_7.info("Custom scheme failed to open.");
                      callback(false);
                    });
                  });
                }
                return promise;
              }
              promise = new Promise((arg0) => {
                outer4_7.info("URL is not a custom scheme.");
                arg0(false);
              });
            })(tmp)) {
              if (!yield (function tryHandleWhitelistedURL(arg0) {
                let _loopResult;
                let closure_0 = arg0;
                function _loop(protocol) {
                  let closure_0 = protocol;
                  let num = 0;
                  if (null !== regex.exec(closure_0)) {
                    let obj = {};
                    const promise = new Promise((closure_0) => {
                      const canOpenURLResult = outer5_4.canOpenURL(closure_0);
                      outer5_4.canOpenURL(closure_0).then(() => { ... }).catch(() => { ... });
                    });
                    obj.v = promise;
                    num = obj;
                  }
                  return num;
                }
                const tmp = outer3_8(outer3_0(outer3_2[8]).LINKING_WHITELIST_VALUES);
                const iter = tmp();
                let iter2 = iter;
                if (!iter.done) {
                  while (true) {
                    let value = iter2.value;
                    let regex = value.regex;
                    _loopResult = _loop(value.protocol);
                    if (0 !== _loopResult) {
                      if (_loopResult) {
                        break;
                      }
                    }
                    let iter3 = tmp();
                    iter2 = iter3;
                  }
                  return _loopResult.v;
                }
                return new Promise((arg0) => {
                  outer4_7.info("URL is not whitelisted.");
                  arg0(false);
                });
              })(tmp)) {
                openInBrowser();
              }
            }
          }
        }
      }
      obj2 = /^[a-zA-Z0-9+-.]+:/;
      obj3 = /^https?:/i;
    }
  })();
  iter.next();
  return iter;
}
importDefaultResult = new importDefaultResult("handleURL");
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/links/native/handleURL.tsx");

export default function handleURL(arg0, arg1) {
  return _handleURL(...arguments);
};
