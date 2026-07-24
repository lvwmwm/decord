// Module ID: 4459
// Function ID: 39309
// Name: _typeof
// Dependencies: []

// Module 4459 (_typeof)
function _typeof(arg0) {
  if ("function" === typeof Symbol) {
    let _Symbol = Symbol;
    if ("symbol" === typeof Symbol.iterator) {
      function _typeof(arg0) {
        return typeof arg0;
      }
    }
    return _typeof(arg0);
  }
  _typeof = function _typeof(arg0) {
    if (arg0) {
      const _Symbol = Symbol;
      if ("function" === typeof Symbol) {
        const _Symbol2 = Symbol;
        if (arg0.constructor === Symbol) {
          const _Symbol3 = Symbol;
          let str2 = "symbol";
        }
        return str2;
      }
    }
    str2 = typeof arg0;
  };
}
let combined = "".concat("https://js.stripe.com", "/");
let closure_1 = combined.concat("basil", "/stripe.js");
const re2 = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
const re3 = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
function isStripeJSURL(arg0) {
  let isMatch = regex.test(arg0);
  if (!isMatch) {
    isMatch = regex2.test(arg0);
  }
  return isMatch;
}
function injectScript(advancedFraudSignals) {
  let str = "";
  if (advancedFraudSignals) {
    str = "";
    if (!advancedFraudSignals.advancedFraudSignals) {
      str = "?advancedFraudSignals=false";
    }
  }
  const element = <script />;
  const combined = "".concat(closure_1);
  element.src = combined.concat(str);
  let body = document.head;
  if (!body) {
    const _document = document;
    body = document.body;
  }
  if (body) {
    body.appendChild(element);
    return element;
  } else {
    const _Error = Error;
    const error = new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
    throw error;
  }
}
let c6 = null;
let c7 = null;
let c8 = null;
function loadScript(arg0) {
  let closure_0 = arg0;
  if (null !== promise) {
    let catchPromise = promise;
  } else {
    promise = new Promise((arg0, arg1) => {
      if ("undefined" !== typeof window) {
        const _document = document;
        if ("undefined" !== typeof document) {
          let _window = window;
          if (tmp2) {
            const _console = console;
            console.warn("loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used");
          }
          const _window2 = window;
          if (window.Stripe) {
            const _window3 = window;
            arg0(window.Stripe);
          } else {
            const _document2 = document;
            const concat = "script[src^=\"".concat;
            const elements = document.querySelectorAll("script[src^=\"".concat("https://js.stripe.com", "\"]"));
            let num = 0;
            let tmp5 = null;
            if (0 < elements.length) {
              tmp5 = tmp6;
              while (!outer1_4(elements[num].src)) {
                num = num + 1;
                tmp5 = null;
                if (num >= elements.length) {
                  break;
                }
              }
            }
            let obj = tmp5;
            if (tmp5) {
              if (closure_0) {
                const _console2 = console;
                console.warn("loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used");
              }
              const outer1_8 = (function onLoad(arg0, arg1) {
                let closure_0 = arg0;
                let closure_1 = arg1;
                return () => {
                  if (window.Stripe) {
                    const _window = window;
                    callback(window.Stripe);
                  } else {
                    const _Error = Error;
                    const error = new Error("Stripe.js not available");
                    callback2(error);
                  }
                };
              })(arg0, arg1);
              const outer1_7 = (function onError(arg0) {
                let closure_0 = arg0;
                return (cause) => {
                  const error = new Error("Failed to load Stripe.js", { cause });
                  callback(error);
                };
              })(arg1);
              const listener = obj.addEventListener("load", outer1_8);
              const listener1 = obj.addEventListener("error", outer1_7);
            }
            if (obj) {
              if (obj) {
                if (null !== outer1_8) {
                  if (null !== outer1_7) {
                    const removed = obj.removeEventListener("load", outer1_8);
                    const removed1 = obj.removeEventListener("error", outer1_7);
                    const parentNode = obj.parentNode;
                    let tmp15 = tmp36;
                    if (null !== parentNode) {
                      tmp15 = undefined === obj2;
                    }
                    if (!tmp15) {
                      obj2.removeChild(obj);
                    }
                    obj = outer1_5(closure_0);
                  }
                }
              }
            } else {
              obj = outer1_5(closure_0);
            }
          }
          tmp2 = window.Stripe && closure_0;
        }
      }
      arg0(null);
    });
    catchPromise = promise.catch((arg0) => Promise.reject(arg0));
  }
  return catchPromise;
}
function validateLoadParams(advancedFraudSignals) {
  const combined = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(advancedFraudSignals), "\n");
  if (null !== advancedFraudSignals) {
    if ("object" === _typeof(advancedFraudSignals)) {
      const _Object = Object;
      if (1 === Object.keys(advancedFraudSignals).length) {
        if ("boolean" === typeof advancedFraudSignals.advancedFraudSignals) {
          return advancedFraudSignals;
        }
      }
      const _Error = Error;
      const error = new Error(combined);
      throw error;
    }
  }
  const error1 = new Error(combined);
  throw error1;
}
let c11 = false;
function loadStripe(KEY) {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  let c11 = true;
  let closure_1 = Date.now();
  return loadScript(array).then((version) => (function initStripe(version, array, closure_1) {
    if (null === version) {
      return null;
    } else {
      let match = array[0].match(/^pk_test/);
      version = version.version;
      let str = "v3";
      if (3 !== version) {
        str = version;
      }
      if (match) {
        match = str !== "basil";
      }
      if (match) {
        const _console = console;
        const concat = "Stripe.js@".concat;
        const combined = "Stripe.js@".concat(str, " was loaded on the page, but @stripe/stripe-js@");
        const combined1 = combined.concat("7.3.1", " expected Stripe.js@");
        console.warn(combined1.concat("basil", ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
      }
      const applyResult = version.apply(undefined, array);
      let _registerWrapper = applyResult;
      if (applyResult) {
        _registerWrapper = applyResult._registerWrapper;
      }
      if (_registerWrapper) {
        const obj = { name: "stripe-js", version: "7.3.1", startTime: closure_1 };
        applyResult._registerWrapper(obj);
      }
      return applyResult;
    }
  })(version, array, closure_1));
}
loadStripe.setLoadParameters = (advancedFraudSignals) => {
  let closure_0 = advancedFraudSignals;
  if (c11) {
    if (closure_0) {
      validateLoadParams(advancedFraudSignals);
      const _Object = Object;
      const keys = Object.keys(advancedFraudSignals);
    }
  }
  if (c11) {
    const _Error = Error;
    const error = new Error("You cannot change load parameters after calling loadStripe");
    throw error;
  } else {
    validateLoadParams(advancedFraudSignals);
    closure_0 = advancedFraudSignals;
  }
};
arg5.loadStripe = loadStripe;
