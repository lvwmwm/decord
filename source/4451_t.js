// Module ID: 4451
// Function ID: 39146
// Name: t
// Dependencies: []

// Module 4451 (t)
let self = this;
const fn = function t(exports, React) {
  function ownKeys(arg0, arg1) {
    arg1 = arg0;
    const keys = Object.keys(arg0);
    if (Object.getOwnPropertySymbols) {
      const _Object = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      let found = ownPropertySymbols;
      if (arg1) {
        found = ownPropertySymbols.filter((arg0) => Object.getOwnPropertyDescriptor(arg0, arg0).enumerable);
      }
      const push = keys.push;
      push.apply(keys, found);
    }
    return keys;
  }
  function _objectSpread2(arg0) {
    const arg1 = arg0;
    for (let num = 1; num < arguments.length; num = num + 1) {
      let tmp = null != arguments[num] ? arguments[num] : {};
      if (num % 2) {
        let tmp5 = ownKeys;
        let _Object5 = Object;
        let arr2 = ownKeys(Object(tmp), true);
        let item = arr2.forEach((arg0) => {

        });
      } else {
        let _Object = Object;
        if (Object.getOwnPropertyDescriptors) {
          let _Object3 = Object;
          let _Object4 = Object;
          let definePropertiesResult = Object.defineProperties(arg0, Object.getOwnPropertyDescriptors(tmp));
        } else {
          let tmp2 = ownKeys;
          let _Object2 = Object;
          let arr = ownKeys(Object(tmp));
          let item1 = arr.forEach((arg0) => {
            Object.defineProperty(arg0, arg0, Object.getOwnPropertyDescriptor(tmp, arg0));
          });
        }
      }
    }
    return arg0;
  }
  function _typeof(arg0) {
    if ("function" === typeof Symbol) {
      const _Symbol = Symbol;
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
  function _defineProperty(arg0, arg1, value) {
    if (arg1 in arg0) {
      const _Object = Object;
      const obj = { consumed: true, ForcedColorsPreference: true, MOBILE_NITRO_HOME_SETTINGS_BADGE: true, NOTIFICATION_WARNING: true, value };
      Object.defineProperty(arg0, arg1, obj);
    } else {
      arg0[arg1] = value;
    }
    return arg0;
  }
  function _objectWithoutProperties(arg0, arr) {
    if (null == arg0) {
      return {};
    } else {
      if (null == arg0) {
        let obj = {};
      } else {
        obj = {};
        const _Object = Object;
        const keys = Object.keys(arg0);
        let num2 = 0;
        if (0 < keys.length) {
          do {
            let tmp2 = keys[num2];
            if (arr.indexOf(tmp2) < 0) {
              obj[tmp2] = arg0[tmp2];
            }
            num2 = num2 + 1;
          } while (num2 < keys.length);
        }
      }
      const _Object2 = Object;
      if (Object.getOwnPropertySymbols) {
        const _Object3 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
        for (let num4 = 0; num4 < ownPropertySymbols.length; num4 = num4 + 1) {
          let tmp4 = ownPropertySymbols[num4];
          if (arr.indexOf(tmp4) < 0) {
            let _Object4 = Object;
            if (propertyIsEnumerable.call(arg0, tmp4)) {
              obj[tmp4] = arg0[tmp4];
            }
          }
        }
      }
      return obj;
    }
  }
  function _slicedToArray(arg0, arg1) {
    let tmp;
    if (Array.isArray(arg0)) {
      tmp = arg0;
    }
    if (!tmp) {
      let tmp5 = arg0;
      if (arg0) {
        const _Symbol = Symbol;
        @@iterator = "undefined" !== typeof Symbol;
        if (Symbol_iterator) {
          const _Symbol2 = Symbol;
          @@iterator = tmp2[Symbol.iterator];
        }
        if (!Symbol_iterator) {
          @@iterator = tmp2[Symbol.iterator];
        }
        tmp5 = Symbol_iterator;
      }
      let tmp9;
      if (null != tmp5) {
        const items = [];
        const iter = obj.call(arg0);
        const iter3 = iter.next();
        const done = iter3.done;
        let tmp11 = done;
        if (!done) {
          items.push(iter4.value);
          if (!tmp3) {
            const iter5 = iter2.next();
            const done2 = iter5.done;
            tmp11 = done2;
            while (!done2) {
              let tmp19 = items;
              let tmp20 = iter5;
              let arr = items.push(iter6.value);
              let tmp22 = arg1;
              if (!tmp3) {
                continue;
              } else {
                let tmp23 = items;
                let tmp24 = arg1;
                if (items.length === tmp3) {
                  break;
                }
              }
              continue;
            }
          }
        }
        while (true) {
          let tmp25 = tmp11;
          let tmp26 = tmp11;
          if (tmp11) {
            break;
          } else {
            let tmp27 = iter;
            tmp26 = null == iter2.return;
            // break
          }
          if (!tmp26) {
            let tmp28 = iter;
            let returnResult = iter2.return();
          }
          let tmp30 = flag2;
          if (flag2) {
            let tmp31 = tmp4;
            throw tmp4;
          } else {
            tmp9 = items;
          }
        }
      }
      tmp = tmp9;
      const obj = tmp5;
    }
    if (tmp) {
      if (tmp) {
        return tmp;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    } else {
      if (arg0) {
        if ("string" !== typeof arg0) {
          const _Object = Object;
          const substr = toString.call(arg0).slice(8, -1);
          let name = substr;
          if (tmp33) {
            name = arg0.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr1 = _arrayLikeToArray(arg0, arg1);
              } else {
                const obj2 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            let tmp32 = arr1;
          }
          const _Array = Array;
          arr1 = Array.from(arg0);
          const callResult = toString.call(arg0);
          const tmp33 = "Object" === substr && arg0.constructor;
        }
      }
      tmp32 = _arrayLikeToArray(arg0, arg1);
    }
  }
  function _arrayLikeToArray(arg0, arg1) {
    let length = arg1;
    if (tmp) {
      length = arg0.length;
    }
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arg0[num];
    }
    return array;
  }
  let obj = {
    exports: {},
    exports: function requireFactoryWithThrowingShims() {
      function emptyFunction() {

      }
      let closure_1 = emptyFunction;
      function emptyFunctionWithReset() {

      }
      let closure_2 = emptyFunctionWithReset;
      if (closure_4) {
        return factoryWithThrowingShims;
      } else {
        closure_4 = 1;
        if (closure_2) {
          let str = closure_1;
        } else {
          closure_2 = 1;
          str = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          closure_1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        }
        const arg1 = str;
        emptyFunctionWithReset.resetWarningCache = emptyFunction;
        function factoryWithThrowingShims() {
          function shim(arg0, arg1, arg2, arg3, arg4, arg5) {
            if (arg5 !== shim) {
              const _Error = Error;
              const error = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              error.name = "Invariant Violation";
              throw error;
            }
          }
          function getShim() {
            return shim;
          }
          shim.isRequired = shim;
          const obj = { array: shim, bool: shim, func: shim, number: shim, object: shim, string: shim, symbol: shim, any: shim, arrayOf: getShim, element: shim, elementType: shim, instanceOf: getShim, node: shim, objectOf: getShim, oneOf: getShim, oneOfType: getShim, shape: getShim, exact: getShim, checkPropTypes: closure_2, resetWarningCache: closure_1, PropTypes: obj };
          return obj;
        }
        return factoryWithThrowingShims;
      }
    }()()
  };
  const _exports = obj.exports;
  let _default = _exports;
  if (_exports) {
    _default = _exports;
    if (_exports.__esModule) {
      const _Object = Object;
      _default = _exports;
      if (hasOwnProperty.call(_exports, "default")) {
        _default = _exports.default;
      }
    }
  }
  function useAttachEvent(arg0, self) {
    self = arg0;
    const tmp = arg2;
    const ref = self.useRef(arg2);
    const items = [arg2];
    const effect = self.useEffect(() => {
      ref.current = arg2;
    }, items);
    const items1 = [tmp, self, arg0, ref];
    const effect1 = self.useEffect(() => {
      if (tmp) {
        if (arg0) {
          function decoratedCb() {
            if (ref.current) {
              const current = ref.current;
              current(...arguments);
            }
          }
          const arg0 = decoratedCb;
          arg0.on(arg1, decoratedCb);
          return () => {
            decoratedCb.off(closure_1, decoratedCb);
          };
        }
        const tmp = arg0;
      }
      return () => {

      };
    }, items1);
  }
  function usePrevious(arg0, self) {
    self = arg0;
    const ref = self.useRef(arg0);
    const items = [arg0];
    const effect = self.useEffect(() => {
      ref.current = arg0;
    }, items);
    return ref.current;
  }
  function isUnknownObject(stripe) {
    let tmp = null !== stripe;
    if (tmp) {
      tmp = "object" === _typeof(stripe);
    }
    return tmp;
  }
  function isEqual(stripe, stripe) {
    let length;
    let length2;
    if (isUnknownObject(stripe)) {
      if (isUnknownObject(stripe)) {
        const _Array = Array;
        const isArray = Array.isArray(stripe);
        const _Array2 = Array;
        if (isArray !== Array.isArray(stripe)) {
          return false;
        } else {
          const _Object4 = Object;
          const tmp4 = toString.call(stripe) === "[object Object]";
          const _Object5 = Object;
          if (tmp4 !== (toString2.call(stripe) === "[object Object]")) {
            return false;
          } else {
            if (!tmp4) {
              if (!isArray) {
                return stripe === stripe;
              }
            }
            const _Object = Object;
            const keys = Object.keys(stripe);
            const _Object2 = Object;
            const keys1 = Object.keys(stripe);
            if (keys.length !== keys1.length) {
              return false;
            } else {
              const obj = {};
              let num = 0;
              if (0 < keys.length) {
                do {
                  obj[keys[num]] = true;
                  num = num + 1;
                  length = keys.length;
                } while (num < length);
              }
              let num2 = 0;
              if (0 < keys1.length) {
                do {
                  obj[keys1[num2]] = true;
                  num2 = num2 + 1;
                  length2 = keys1.length;
                } while (num2 < length2);
              }
              const _Object3 = Object;
              const keys2 = Object.keys(obj);
              if (keys2.length !== keys.length) {
                return false;
              } else {
                return keys2.every(function pred(arg0) {
                  return callback(arg0[arg0], arg1[arg0]);
                });
              }
            }
          }
        }
      }
    }
    return stripe === stripe;
  }
  function extractAllowedOptionsUpdates(stripe) {
    const arg1 = stripe;
    let reduced = null;
    if (isUnknownObject(stripe)) {
      const _Object = Object;
      const keys = Object.keys(stripe);
      reduced = keys.reduce((arg0, arg1) => {
        const tmp = callback(arg1);
        let tmp2 = !tmp;
        if (tmp) {
          tmp2 = !callback2(arg0[arg1], arg1[arg1]);
        }
        if (arg2.includes(arg1)) {
          let tmp6 = arg0;
          if (tmp2) {
            const _console = console;
            const concat = "Unsupported prop change: options.".concat;
            console.warn("Unsupported prop change: options.".concat(arg1, " is not a mutable property."));
            tmp6 = arg0;
          }
        } else {
          tmp6 = arg0;
          if (tmp2) {
            let obj = {};
            obj = arg0;
            if (!arg0) {
              obj = {};
            }
            closure_26(obj, obj);
            obj = {};
            callback3(obj, arg1, arg0[arg1]);
            closure_26(obj, {}, obj);
            tmp6 = obj;
          }
        }
        return tmp6;
      }, null);
    }
    return reduced;
  }
  function validateStripe(elements, arg1) {
    let str = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
    if (arguments.length > 1) {
      str = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
      if (undefined !== arguments[1]) {
        str = arguments[1];
      }
    }
    if (null !== elements) {
      let tmp = isUnknownObject(elements);
      if (tmp) {
        tmp = "function" === typeof elements.elements;
      }
      if (tmp) {
        tmp = "function" === typeof elements.createToken;
      }
      if (tmp) {
        tmp = "function" === typeof elements.createPaymentMethod;
      }
      if (tmp) {
        tmp = "function" === typeof elements.confirmCardPayment;
      }
      if (!tmp) {
        const _Error = Error;
        const error = new Error(str);
        throw error;
      }
    }
    return elements;
  }
  function parseStripeProp(stripe) {
    let str = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
    if (arguments.length > 1) {
      str = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
      if (undefined !== arguments[1]) {
        str = arguments[1];
      }
    }
    const arg1 = str;
    let tmp = isUnknownObject(stripe);
    if (tmp) {
      tmp = "function" === typeof stripe.then;
    }
    if (tmp) {
      let obj = { tag: "async" };
      const resolved = Promise.resolve(stripe);
      obj.stripePromise = resolved.then((arg0) => {
        callback(arg0, str);
        return arg0;
      });
      return obj;
    } else {
      validateStripe(stripe, str);
      if (null === stripe) {
        obj = { tag: "empty" };
      } else {
        obj = { tag: "sync", stripe };
      }
      return obj;
    }
  }
  function registerWithStripeJs(_registerWrapper) {
    let registerAppInfo = _registerWrapper;
    if (_registerWrapper) {
      registerAppInfo = _registerWrapper._registerWrapper;
    }
    if (registerAppInfo) {
      registerAppInfo = _registerWrapper.registerAppInfo;
    }
    if (registerAppInfo) {
      _registerWrapper._registerWrapper({});
      _registerWrapper.registerAppInfo({});
    }
  }
  const context = React.createContext(null);
  context.displayName = "ElementsContext";
  function parseElementsContext(context, arg1) {
    if (context) {
      return context;
    } else {
      const _Error = Error;
      const concat = "Could not find Elements context; You need to wrap the part of your app that ".concat;
      const error = new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(arg1, " in an <Elements> provider."));
      throw error;
    }
  }
  class Elements {
    constructor(arg0) {
      stripe = exports.stripe;
      React = stripe;
      options = exports.options;
      items = [];
      items[0] = stripe;
      memo = React.useMemo(() => callback2(stripe), items);
      f39185 = memo;
      tmp2 = _slicedToArray(React.useState(() => {
        const obj = {};
        let stripe = null;
        if ("sync" === memo.tag) {
          stripe = memo.stripe;
        }
        obj.stripe = stripe;
        let elementsResult = null;
        if ("sync" === memo.tag) {
          stripe = memo.stripe;
          elementsResult = stripe.elements(options);
        }
        obj.elements = elementsResult;
        return obj;
      }), 2);
      first = tmp2[0];
      closure_3 = first;
      closure_4 = tmp2[1];
      items1 = [, , ];
      items1[0] = memo;
      items1[1] = first;
      items1[2] = options;
      effect = React.useEffect(() => {
        let closure_0 = true;
        function safeSetContext(stripe) {
          let closure_0 = stripe;
          callback((stripe) => {
            let tmp = stripe;
            if (!stripe.stripe) {
              const obj = { stripe, elements: stripe.elements(closure_1) };
              tmp = obj;
            }
            return tmp;
          });
        }
        const options = safeSetContext;
        if ("async" === memo.tag) {
          if (!value.stripe) {
            memo.stripePromise.then((arg0) => {
              let tmp = arg0;
              if (arg0) {
                tmp = closure_0;
              }
              if (tmp) {
                safeSetContext(arg0);
              }
            });
            const stripePromise = memo.stripePromise;
          }
          return () => {
            let closure_0 = false;
          };
        }
        let stripe = "sync" !== memo.tag;
        if (!stripe) {
          stripe = value.stripe;
        }
        if (!stripe) {
          safeSetContext(memo.stripe);
        }
      }, items1);
      tmp5 = usePrevious(stripe);
      closure_5 = tmp5;
      items2 = [, ];
      items2[0] = tmp5;
      items2[1] = stripe;
      effect1 = React.useEffect(() => {
        let tmp = null !== tmp5;
        if (tmp) {
          tmp = tmp5 !== stripe;
        }
        if (tmp) {
          const _console = console;
          console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
        }
      }, items2);
      tmp7 = usePrevious(options);
      f39187 = tmp7;
      items3 = [, , ];
      items3[0] = options;
      items3[1] = tmp7;
      items3[2] = first.elements;
      effect2 = React.useEffect(() => {
        if (value.elements) {
          const tmp4 = callback(options, tmp7, ["guild", "toString"]);
          if (tmp4) {
            const elements = value.elements;
            elements.update(tmp4);
          }
        }
      }, items3);
      items4 = [];
      items4[0] = first.stripe;
      effect3 = React.useEffect(() => {
        callback3(value.stripe);
      }, items4);
      return React.createElement(call.Provider, { value: first }, exports.children);
    }
  }
  obj = {};
  ({ any: obj2.stripe, object: obj2.options } = _default);
  Elements.propTypes = obj;
  function useElementsContextWithUseCase(arg0) {
    const context = arg1.useContext(context);
    parseElementsContext(context, arg0);
    return context;
  }
  class ElementsConsumer {
    constructor(arg0) {
      return exports.children(useElementsContextWithUseCase("mounts <ElementsConsumer>"));
    }
  }
  obj = { children: _default.func.isRequired };
  ElementsConsumer.propTypes = obj;
  let closure_17 = [];
  const context1 = React.createContext(null);
  context1.displayName = "CheckoutSdkContext";
  function parseCheckoutSdkContext(context, arg1) {
    if (context) {
      return context;
    } else {
      const _Error = Error;
      const concat = "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat;
      const error = new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(arg1, " in an <CheckoutProvider> provider."));
      throw error;
    }
  }
  const context2 = React.createContext(null);
  context2.displayName = "CheckoutContext";
  class CheckoutProvider {
    constructor(arg0) {
      stripe = exports.stripe;
      React = stripe;
      options = exports.options;
      items = [];
      items[0] = stripe;
      memo = React.useMemo(() => callback2(stripe, "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details."), items);
      closure_2 = memo;
      element = null;
      tmp3 = _slicedToArray(React.useState(null), 2);
      first = tmp3[0];
      closure_3 = first;
      tmp5 = tmp3[1];
      useState = tmp5;
      tmp6 = _slicedToArray(React.useState(() => {
        const obj = {};
        let stripe = null;
        if ("sync" === memo.tag) {
          stripe = memo.stripe;
        }
        obj.stripe = stripe;
        obj.checkoutSdk = null;
        return obj;
      }), 2);
      first1 = tmp6[0];
      closure_5 = first1;
      f39200 = tmp6[1];
      safeSetContext = function safeSetContext(checkoutSdk) {
        const stripe = checkoutSdk;
        const options = arg1;
        callback((stripe) => {
          let tmp = stripe;
          if (!stripe.stripe) {
            const obj = { stripe, checkoutSdk: arg1 };
            tmp = obj;
          }
          return tmp;
        });
      };
      closure_8 = React.useRef(false);
      items1 = [, , , ];
      items1[0] = memo;
      items1[1] = first1;
      items1[2] = options;
      items1[3] = tmp5;
      effect = React.useEffect(() => {
        let closure_0 = true;
        if ("async" === memo.tag) {
          if (!first1.stripe) {
            memo.stripePromise.then((initCheckout) => {
              let closure_0 = initCheckout;
              let tmp = initCheckout;
              if (initCheckout) {
                tmp = closure_0;
              }
              if (tmp) {
                tmp = !ref.current;
              }
              if (tmp) {
                ref.current = true;
                const checkout = initCheckout.initCheckout(closure_1);
                checkout.then((on) => {
                  if (on) {
                    callback(on, on);
                    on.on("change", closure_4);
                  }
                });
              }
            });
            const stripePromise = memo.stripePromise;
          }
          return () => {
            let closure_0 = false;
          };
        }
        let stripe = "sync" === memo.tag;
        if (stripe) {
          stripe = memo.stripe;
        }
        if (stripe) {
          stripe = !ref.current;
        }
        if (stripe) {
          ref.current = true;
          const stripe2 = memo.stripe;
          const checkout = stripe2.initCheckout(options);
          checkout.then((on) => {
            if (on) {
              callback(stripe.stripe, on);
              on.on("change", closure_4);
            }
          });
        }
      }, items1);
      tmp9 = safeSetContext(stripe);
      isEqual = tmp9;
      items2 = [, ];
      items2[0] = tmp9;
      items2[1] = stripe;
      effect1 = React.useEffect(() => {
        let tmp = null !== tmp9;
        if (tmp) {
          tmp = tmp9 !== stripe;
        }
        if (tmp) {
          const _console = console;
          console.warn("Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.");
        }
      }, items2);
      tmp11 = safeSetContext(options);
      closure_10 = tmp11;
      tmp12 = safeSetContext(first1.checkoutSdk);
      validateStripe = tmp12;
      items3 = [, , , ];
      items3[0] = options;
      items3[1] = tmp11;
      items3[2] = first1.checkoutSdk;
      items3[3] = tmp12;
      effect2 = React.useEffect(() => {
        if (first1.checkoutSdk) {
          let appearance;
          if (null != tmp11) {
            const elementsOptions = tmp11.elementsOptions;
            if (null !== elementsOptions) {
              if (undefined !== elementsOptions) {
                appearance = elementsOptions.appearance;
              }
            }
          }
          let appearance1;
          if (null != options) {
            const elementsOptions2 = options.elementsOptions;
            if (null !== elementsOptions2) {
              if (undefined !== elementsOptions2) {
                appearance1 = elementsOptions2.appearance;
              }
            }
          }
          let tmp9 = !tmp9(appearance1, appearance);
          let checkoutSdk = !tmp12;
          if (checkoutSdk) {
            checkoutSdk = first1.checkoutSdk;
          }
          let tmp13 = appearance1;
          if (appearance1) {
            if (!tmp9) {
              tmp9 = checkoutSdk;
            }
            tmp13 = tmp9;
          }
          if (tmp13) {
            const checkoutSdk2 = first1.checkoutSdk;
            checkoutSdk2.changeAppearance(appearance1);
          }
        }
      }, items3);
      items4 = [];
      items4[0] = first1.stripe;
      effect3 = React.useEffect(() => {
        callback3(first1.stripe);
      }, items4);
      items5 = [, ];
      items5[0] = first1.checkoutSdk;
      items5[1] = first;
      if (first1.checkoutSdk) {
        tmp16 = React;
        tmp17 = isRequired;
        obj = {};
        obj.value = first1;
        tmp18 = isRequired;
        obj = {};
        obj.value = tmp15;
        element = React.createElement(isRequired.Provider, obj, React.createElement(isRequired.Provider, obj, exports.children));
      }
      return element;
    }
  }
  const obj1 = { stripe: _default.any };
  const obj2 = { fetchClientSecret: _default.func.isRequired, elementsOptions: _default.object };
  obj1.options = _default.shape(obj2).isRequired;
  CheckoutProvider.propTypes = obj1;
  function useElementsOrCheckoutSdkContextWithUseCase(arg0) {
    const context = arg1.useContext(context1);
    let context1 = arg1.useContext(context);
    if (context) {
      if (context1) {
        const _Error = Error;
        const concat = "You cannot wrap the part of your app that ".concat;
        const error = new Error("You cannot wrap the part of your app that ".concat(arg0, " in both <CheckoutProvider> and <Elements> providers."));
        throw error;
      }
    }
    if (context) {
      parseCheckoutSdkContext(context, arg0);
      context1 = context;
    } else {
      parseElementsContext(context1, arg0);
    }
    return context1;
  }
  let closure_22 = ["locations"];
  function createElementComponent(address, arg1) {
    arg1 = address;
    const formatted = address.charAt(0).toUpperCase();
    const combined = "".concat(formatted + address.slice(1), "Element");
    const tmp3 = arg1 ? function ServerElement(id) {
      callback2("mounts <".concat(combined, ">"));
      return <div id={arg0.id} className={arg0.className} />;
    } : function ClientElement(options) {
      let className;
      let id;
      let onBlur;
      let onCancel;
      let onChange;
      let onClick;
      let onConfirm;
      let onEscape;
      let onFocus;
      let onLoadError;
      let onLoaderStart;
      let onNetworksChange;
      let onShippingAddressChange;
      let onShippingRateChange;
      options = options.options;
      ({ id, className } = options);
      if (undefined === options) {
        options = {};
      }
      let readyCallback = options.onReady;
      const combined = readyCallback;
      ({ onBlur, onFocus, onChange, onEscape, onClick, onLoadError, onLoaderStart, onNetworksChange, onConfirm, onCancel, onShippingAddressChange, onShippingRateChange } = options);
      const tmp = callback2("mounts <".concat(combined, ">"));
      let elements = null;
      if ("elements" in tmp) {
        elements = tmp.elements;
      }
      let checkoutSdk = null;
      if ("checkoutSdk" in tmp) {
        checkoutSdk = tmp.checkoutSdk;
      }
      const tmp4 = callback3(options.useState(null), 2);
      const first = tmp4[0];
      let closure_5 = tmp4[1];
      const callback = options.useRef(null);
      const ref = options.useRef(null);
      callback(first, "blur", onBlur);
      callback(first, "focus", onFocus);
      callback(first, "escape", onEscape);
      callback(first, "click", onClick);
      callback(first, "loaderror", onLoadError);
      callback(first, "loaderstart", onLoaderStart);
      callback(first, "networkschange", onNetworksChange);
      callback(first, "confirm", onConfirm);
      callback(first, "cancel", onCancel);
      callback(first, "shippingaddresschange", onShippingAddressChange);
      callback(first, "shippingratechange", onShippingRateChange);
      callback(first, "change", onChange);
      let tmp19;
      if (readyCallback) {
        if ("expressCheckout" !== options) {
          readyCallback = function readyCallback(first) {
            readyCallback(first);
          };
        }
        tmp19 = readyCallback;
      }
      callback(first, "ready", tmp19);
      const items = [elements, checkoutSdk, options];
      const layoutEffect = options.useLayoutEffect(() => {
        if (null === closure_6.current) {
          if (null !== ref.current) {
            if (elements) {
              if (checkoutSdk) {
                if ("payment" === options) {
                  let paymentElement = checkoutSdk.createPaymentElement(options);
                } else if ("address" === tmp8) {
                  if ("mode" in options) {
                    const mode = options.mode;
                    const tmp28 = callback3(options, closure_22);
                    if ("shipping" === mode) {
                      paymentElement = checkoutSdk.createShippingAddressElement(tmp28);
                    } else if ("billing" !== mode) {
                      const _Error3 = Error;
                      const error = new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                      throw error;
                    } else {
                      paymentElement = checkoutSdk.createBillingAddressElement(tmp28);
                    }
                  } else {
                    const _Error2 = Error;
                    const error1 = new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                    throw error1;
                  }
                } else if ("expressCheckout" === tmp8) {
                  paymentElement = checkoutSdk.createExpressCheckoutElement(options);
                } else if ("currencySelector" === tmp8) {
                  paymentElement = checkoutSdk.createCurrencySelectorElement();
                } else {
                  const _Error = Error;
                  const concat = "Invalid Element type ".concat;
                  const error2 = new Error("Invalid Element type ".concat(readyCallback, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
                  throw error2;
                }
              } else {
                paymentElement = null;
                if (elements) {
                  paymentElement = elements.create(options, options);
                }
              }
              closure_6.current = paymentElement;
              callback(paymentElement);
              if (paymentElement) {
                paymentElement.mount(ref.current);
              }
            }
          }
        }
      }, items);
      const tmp23 = ref(options);
      const items1 = [options, tmp23];
      const effect = options.useEffect(() => {
        if (closure_6.current) {
          const tmp4 = callback2(options, tmp23, [true]);
          let tmp5 = tmp4;
          if (tmp4) {
            tmp5 = "update" in closure_6.current;
          }
          if (tmp5) {
            const current = closure_6.current;
            current.update(tmp4);
          }
        }
      }, items1);
      const layoutEffect1 = options.useLayoutEffect(() => () => {
        if (ref.current) {
          if ("function" === typeof ref.current.destroy) {
            const current = ref.current;
            current.destroy();
            ref.current = null;
          }
        }
      }, []);
      return <div id={id} className={className} ref={ref} />;
    };
    tmp3.propTypes = { id: _default.string, className: _default.string, onChange: _default.func, onBlur: _default.func, onFocus: _default.func, onReady: _default.func, onEscape: _default.func, onClick: _default.func, onLoadError: _default.func, onLoaderStart: _default.func, onNetworksChange: _default.func, onConfirm: _default.func, onCancel: _default.func, onShippingAddressChange: _default.func, onShippingRateChange: _default.func, options: _default.object };
    tmp3.displayName = combined;
    tmp3.__elementType = address;
    return tmp3;
  }
  const context3 = React.createContext(null);
  context3.displayName = "EmbeddedCheckoutProviderContext";
  function useEmbeddedCheckoutContext() {
    const context = arg1.useContext(context3);
    if (context) {
      return context;
    } else {
      const _Error = Error;
      const error = new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
      throw error;
    }
  }
  const elementComponent = createElementComponent("auBankAccount", tmp5);
  const elementComponent1 = createElementComponent("card", tmp5);
  const elementComponent2 = createElementComponent("cardNumber", tmp5);
  const elementComponent3 = createElementComponent("cardExpiry", tmp5);
  const elementComponent4 = createElementComponent("cardCvc", tmp5);
  const elementComponent5 = createElementComponent("fpxBank", tmp5);
  const elementComponent6 = createElementComponent("iban", tmp5);
  const elementComponent7 = createElementComponent("idealBank", tmp5);
  const elementComponent8 = createElementComponent("p24Bank", tmp5);
  const elementComponent9 = createElementComponent("epsBank", tmp5);
  const elementComponent10 = createElementComponent("payment", tmp5);
  const elementComponent11 = createElementComponent("expressCheckout", tmp5);
  const elementComponent12 = createElementComponent("currencySelector", tmp5);
  const elementComponent13 = createElementComponent("paymentRequestButton", tmp5);
  const elementComponent14 = createElementComponent("linkAuthentication", tmp5);
  const elementComponent15 = createElementComponent("address", tmp5);
  const elementComponent16 = createElementComponent("shippingAddress", tmp5);
  const elementComponent17 = createElementComponent("paymentMethodMessaging", tmp5);
  const elementComponent18 = createElementComponent("affirmMessage", tmp5);
  exports.AddressElement = elementComponent15;
  exports.AffirmMessageElement = elementComponent18;
  exports.AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", "undefined" === typeof window);
  exports.AuBankAccountElement = elementComponent;
  exports.CardCvcElement = elementComponent4;
  exports.CardElement = elementComponent1;
  exports.CardExpiryElement = elementComponent3;
  exports.CardNumberElement = elementComponent2;
  exports.CheckoutProvider = CheckoutProvider;
  exports.CurrencySelectorElement = elementComponent12;
  exports.Elements = Elements;
  exports.ElementsConsumer = ElementsConsumer;
  exports.EmbeddedCheckout = "undefined" === typeof window ? function EmbeddedCheckoutServerElement(arg0) {
    let className;
    let id;
    ({ id, className } = arg0);
    useEmbeddedCheckoutContext();
    return <div id={id} className={className} />;
  } : function EmbeddedCheckoutClientElement(arg0, self) {
    let className;
    let id;
    ({ id, className } = arg0);
    const embeddedCheckout = useEmbeddedCheckoutContext().embeddedCheckout;
    self = embeddedCheckout;
    let closure_1 = self.useRef(false);
    const ref = self.useRef(null);
    const items = [embeddedCheckout];
    const layoutEffect = self.useLayoutEffect(() => {
      let tmp = !ref.current && embeddedCheckout;
      if (tmp) {
        tmp = null !== ref.current;
      }
      if (tmp) {
        embeddedCheckout.mount(ref.current);
        ref.current = true;
      }
      return () => {
        if (ref.current) {
          if (closure_0) {
            closure_0.unmount();
            ref.current = false;
          }
        }
      };
    }, items);
    return <div ref={ref} id={id} className={className} />;
  };
  exports.EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider(stripe, self) {
    stripe = stripe.stripe;
    self = stripe;
    const options = stripe.options;
    const items = [stripe];
    const memo = self.useMemo(() => callback(stripe, "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details."), items);
    let closure_3 = self.useRef(null);
    const ref = self.useRef(null);
    const tmp3 = _slicedToArray(self.useState({ embeddedCheckout: null }), 2);
    const value = tmp3[0];
    let closure_6 = tmp3[1];
    const items1 = [memo, options, value, ref];
    const effect = self.useEffect(() => {
      if (!ref.current) {
        if (!ref.current) {
          function setStripeAndInitEmbeddedCheckout(stripe) {
            let current = ref2.current;
            if (!current) {
              current = ref.current;
            }
            if (!current) {
              ref2.current = stripe;
              const current2 = ref2.current;
              const embeddedCheckout = current2.initEmbeddedCheckout(closure_1);
              ref.current = embeddedCheckout.then((embeddedCheckout) => {
                callback({ embeddedCheckout });
              });
            }
          }
          const stripe = setStripeAndInitEmbeddedCheckout;
          if ("async" === memo.tag) {
            if (!ref.current) {
              memo.stripePromise.then((stripe) => {
                if (stripe) {
                  setStripeAndInitEmbeddedCheckout(stripe);
                }
              });
              const stripePromise = memo.stripePromise;
            }
          }
          let current = "sync" !== memo.tag;
          if (!current) {
            current = ref.current;
          }
          if (!current) {
            let tmp11 = !options.clientSecret;
            if (tmp11) {
              tmp11 = !options.fetchClientSecret;
            }
            current = tmp11;
          }
          if (!current) {
            const result = setStripeAndInitEmbeddedCheckout(memo.stripe);
          }
        }
      }
    }, items1);
    const items2 = [value.embeddedCheckout];
    const effect1 = self.useEffect(() => () => {
      if (closure_5.embeddedCheckout) {
        tmp.current = null;
        const embeddedCheckout = closure_5.embeddedCheckout;
        embeddedCheckout.destroy();
      } else if (tmp.current) {
        const current = ref.current;
        current.then(() => {
          closure_3.current = null;
          if (closure_5.embeddedCheckout) {
            const embeddedCheckout = closure_5.embeddedCheckout;
            embeddedCheckout.destroy();
          }
        });
      }
    }, items2);
    const items3 = [ref];
    const effect2 = self.useEffect(() => {
      callback2(ref);
    }, items3);
    const tmp8 = usePrevious(stripe);
    const usePrevious = tmp8;
    const items4 = [tmp8, stripe];
    const effect3 = self.useEffect(() => {
      let tmp = null !== tmp8;
      if (tmp) {
        tmp = tmp8 !== stripe;
      }
      if (tmp) {
        const _console = console;
        console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.");
      }
    }, items4);
    const tmp10 = usePrevious(options);
    const isUnknownObject = tmp10;
    const items5 = [tmp10, options];
    const effect4 = self.useEffect(() => {
      if (null != tmp10) {
        if (null != options) {
          let tmp4 = undefined === options.clientSecret;
          if (tmp4) {
            tmp4 = undefined === options.fetchClientSecret;
          }
          if (tmp4) {
            const _console2 = console;
            console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.");
          }
          let tmp9 = null != tmp10.clientSecret;
          if (tmp9) {
            tmp9 = options.clientSecret !== tmp10.clientSecret;
          }
          if (tmp9) {
            const _console3 = console;
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
          }
          let tmp15 = null != tmp10.fetchClientSecret;
          if (tmp15) {
            tmp15 = options.fetchClientSecret !== tmp10.fetchClientSecret;
          }
          if (tmp15) {
            const _console4 = console;
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.");
          }
          let tmp21 = null != tmp10.onComplete;
          if (tmp21) {
            tmp21 = options.onComplete !== tmp10.onComplete;
          }
          if (tmp21) {
            const _console5 = console;
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.");
          }
          let tmp27 = null != tmp10.onShippingDetailsChange;
          if (tmp27) {
            tmp27 = options.onShippingDetailsChange !== tmp10.onShippingDetailsChange;
          }
          if (tmp27) {
            const _console6 = console;
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.");
          }
          let tmp33 = null != tmp10.onLineItemsChange;
          if (tmp33) {
            tmp33 = options.onLineItemsChange !== tmp10.onLineItemsChange;
          }
          if (tmp33) {
            const _console7 = console;
            console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.");
          }
        } else {
          const _console = console;
          console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");
        }
      }
    }, items5);
    return <context3.Provider value={value}>{arg0.children}</context3.Provider>;
  };
  exports.EpsBankElement = elementComponent9;
  exports.ExpressCheckoutElement = elementComponent11;
  exports.FpxBankElement = elementComponent5;
  exports.IbanElement = elementComponent6;
  exports.IdealBankElement = elementComponent7;
  exports.LinkAuthenticationElement = elementComponent14;
  exports.P24BankElement = elementComponent8;
  exports.PaymentElement = elementComponent10;
  exports.PaymentMethodMessagingElement = elementComponent17;
  exports.PaymentRequestButtonElement = elementComponent13;
  exports.ShippingAddressElement = elementComponent16;
  exports.useCheckout = function useCheckout() {
    parseCheckoutSdkContext(arg1.useContext(context1), "calls useCheckout()");
    const context = arg1.useContext(context2);
    if (context) {
      return context;
    } else {
      const _Error = Error;
      const error = new Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
      throw error;
    }
  };
  exports.useElements = function useElements() {
    return useElementsContextWithUseCase("calls useElements()").elements;
  };
  exports.useStripe = function useStripe() {
    return useElementsOrCheckoutSdkContextWithUseCase("calls useStripe()").stripe;
  };
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    fn(exports, require(dependencyMap[0]));
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define([true, true], fn);
  }
}
if ("undefined" !== typeof globalThis) {
  self = globalThis;
}
const obj = {};
self.ReactStripe = obj;
fn(obj, self.React);
