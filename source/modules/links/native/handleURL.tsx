// Module ID: 3820
// Function ID: 31742
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 3820 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const fn = function*(arg0, arg1) {
    let obj = arg2;
    let tmp = arg0;
    let formatResult = arg0;
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
      if (null != obj.sanitizeUrl(formatResult)) {
        let SAFARI = constants.SAFARI;
        if (formatResult.startsWith("https:")) {
          const browserManagerSelectedBrowser = formatResult(flag2[12]).getBrowserManagerSelectedBrowser();
          let tmp11 = browserManagerSelectedBrowser;
          if (null != arg1) {
            tmp11 = arg1;
          }
          let tmp12 = flag2;
          if (flag2) {
            tmp12 = tmp11 === constants.IN_APP;
          }
          SAFARI = tmp11;
          if (tmp12) {
            if (browserManagerSelectedBrowser !== constants.IN_APP) {
              SAFARI = browserManagerSelectedBrowser;
            } else {
              formatResult(flag2[13]).isIOS() ? constants.SAFARI : constants.CHROME;
              const obj4 = formatResult(flag2[13]);
            }
          }
          const obj3 = formatResult(flag2[12]);
        }
        if (constants.IN_APP === SAFARI) {
          const result = formatResult(flag2[12]).browserManagerOpenUrl(formatResult, constants.IN_APP);
          result.catch(() => {
            const intl = callback(closure_2[11]).intl;
            callback(closure_2[10]).presentFailedToast("" + intl.string(callback(closure_2[11]).t.HryVrx) + " " + callback);
          });
          const obj7 = formatResult(flag2[12]);
          let isIOSResult = formatResult(flag2[13]).isIOS();
          if (isIOSResult) {
            isIOSResult = open.isOpen();
          }
          if (isIOSResult) {
            arg1(flag2[14]).hideAllActionSheets();
            const obj9 = arg1(flag2[14]);
          }
          const obj8 = formatResult(flag2[13]);
        } else if (constants.CHROME === SAFARI) {
          const result1 = formatResult(flag2[12]).browserManagerOpenUrl(formatResult, constants.CHROME);
          result1.catch(() => {
            const intl = callback(closure_2[11]).intl;
            callback(closure_2[10]).presentFailedToast("" + intl.string(callback(closure_2[11]).t.HryVrx) + " " + callback);
          });
          const obj6 = formatResult(flag2[12]);
        } else {
          const SAFARI2 = constants.SAFARI;
          const result2 = formatResult(flag2[12]).browserManagerOpenUrl(formatResult, constants.SAFARI);
          const obj5 = formatResult(flag2[12]);
        }
      } else {
        const intl = formatResult(flag2[11]).intl;
        formatResult(flag2[10]).presentFailedToast(intl.string(formatResult(flag2[11]).t.XiqzAp));
        const obj2 = formatResult(flag2[10]);
      }
    }
    yield undefined;
    if (flag2) {
      openInBrowser();
    } else {
      if (!obj2.test(tmp)) {
        const text = `https://${tmp}`;
        tmp = text;
        formatResult = text;
      }
      if (obj3.test(tmp)) {
        const parsed = arg1(flag2[15]).parse(tmp);
        parsed.pathname = callback(parsed.pathname);
        parsed.search = callback(parsed.search);
        parsed.hash = callback(parsed.hash);
        const obj4 = arg1(flag2[15]);
        formatResult = arg1(flag2[15]).format(parsed);
        tmp = formatResult;
        const obj5 = arg1(flag2[15]);
      }
      obj = { payload: arg1(flag2[16])(tmp).payload, safe: true };
      if (!arg1(flag2[17])(obj)) {
        if (flag) {
          if (!yield function tryHandleUniversalLink(arg0) {
            return new Promise((arg0) => {
              const result = callback(closure_2[5]).tryOpenUrlAsUniversalLink(arg0);
              const obj = callback(closure_2[5]);
              result.then(() => {
                closure_7.info("Universal link opened successfully.");
                arg0(true);
              }).catch(() => {
                closure_7.info("URL is not a handled universal link.");
                arg0(false);
              });
            });
          }(tmp)) {
            if (!yield function tryHandleCustomScheme(arg0) {
              let iter2;
              let protocol;
              let regex;
              const tmp = callback(arg0(flag2[6]).LINKING_SCHEMAS_VALUES);
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
                  closure_7.info("tryHandleCustomScheme", arr);
                  let promise = new Promise((arg0) => {
                    const obj = callback(closure_2[5]);
                    const tryOpenSchemeResult = callback(closure_2[5]).tryOpenScheme(arg0);
                    callback(closure_2[5]).tryOpenScheme(arg0).then(() => {
                      closure_7.info("Custom scheme opened successfully.");
                      arg0(true);
                    }).catch(() => {
                      closure_7.info("Custom scheme failed to open.");
                      arg0(false);
                    });
                  });
                }
                return promise;
              }
              promise = new Promise((arg0) => {
                closure_7.info("URL is not a custom scheme.");
                arg0(false);
              });
            }(tmp)) {
              if (!yield function tryHandleWhitelistedURL(arg0) {
                let _loopResult;
                function _loop(protocol) {
                  let num = 0;
                  if (null !== regex.exec(protocol)) {
                    const obj = {};
                    const promise = new Promise((closure_12) => {
                      const canOpenURLResult = closure_4.canOpenURL(closure_12);
                      closure_4.canOpenURL(closure_12).then(() => { ... }).catch(() => { ... });
                    });
                    obj.v = promise;
                    num = obj;
                  }
                  return num;
                }
                const tmp = callback(arg0(flag2[8]).LINKING_WHITELIST_VALUES);
                const iter = tmp();
                let iter2 = iter;
                if (!iter.done) {
                  while (true) {
                    let value = iter2.value;
                    let arg1 = value.regex;
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
                  closure_7.info("URL is not whitelisted.");
                  arg0(false);
                });
              }(tmp)) {
                openInBrowser();
              }
            }
          }
        }
      }
      const obj2 = /^[a-zA-Z0-9+-.]+:/;
      const obj3 = /^https?:/i;
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
const Linking = arg1(dependencyMap[1]).Linking;
let closure_5 = importDefault(dependencyMap[2]);
const WebBrowserType = arg1(dependencyMap[3]).WebBrowserType;
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("handleURL");
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/links/native/handleURL.tsx");

export default function handleURL(arg0, arg1) {
  return _handleURL(...arguments);
};
