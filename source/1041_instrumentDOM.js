// Module ID: 1041
// Function ID: 11195
// Name: instrumentDOM
// Dependencies: [794, 1015]

// Module 1041 (instrumentDOM)
let require = arg1;
const dependencyMap = arg6;
function instrumentDOM() {
  if (require(1015) /* WINDOW */.WINDOW.document) {
    const bindResult = require(794) /* registerSpanErrorInstrumentation */.triggerHandlers.bind(null, "dom");
    require = bindResult;
    let tmp6 = makeDOMEventHandler(bindResult, true);
    const _document = require(1015) /* WINDOW */.WINDOW.document;
    const listener = _document.addEventListener("click", tmp6, false);
    const _document2 = require(1015) /* WINDOW */.WINDOW.document;
    const listener1 = _document2.addEventListener("keypress", tmp6, false);
    const items = ["EventTarget", "Node"];
    const item = items.forEach((arg0) => {
      const tmp = bindResult(outer1_1[1]).WINDOW[arg0];
      let prototype;
      if (null != tmp) {
        prototype = tmp.prototype;
      }
      let hasOwnPropertyResult = null != prototype && null != prototype.hasOwnProperty;
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = prototype.hasOwnProperty("addEventListener");
      }
      if (hasOwnPropertyResult) {
        bindResult(outer1_1[0]).fill(prototype, "addEventListener", (arg0) => {
          let closure_0 = arg0;
          return function(arg0, arg1, arg2) {
            const self = this;
            if ("click" === arg0) {
              const __sentry_instrumentation_handlers__ = self.__sentry_instrumentation_handlers__;
              let obj = __sentry_instrumentation_handlers__;
              if (!__sentry_instrumentation_handlers__) {
                obj = {};
              }
              self.__sentry_instrumentation_handlers__ = obj;
              let tmp6 = tmp5;
              if (!obj[tmp]) {
                obj = { refCount: 0 };
                tmp6 = obj;
              }
              obj[tmp] = tmp6;
              if (!tmp6.handler) {
                const tmp10 = outer3_6(outer2_0);
                tmp7.handler = tmp10;
                callback.call(self, tmp, tmp10, arg2);
              }
              tmp6.refCount = tmp6.refCount + 1;
            }
            callback.call(self, arg0, arg1, arg2);
          };
        });
        let obj = bindResult(outer1_1[0]);
        bindResult(outer1_1[0]).fill(prototype, "removeEventListener", (arg0) => {
          let closure_0 = arg0;
          return function(arg0, arg1, arg2) {
            const self = this;
            if ("click" === arg0) {
              const __sentry_instrumentation_handlers__ = self.__sentry_instrumentation_handlers__;
              let obj = __sentry_instrumentation_handlers__;
              if (!__sentry_instrumentation_handlers__) {
                obj = {};
              }
              if (obj[tmp4]) {
                tmp10.refCount = tmp10.refCount - 1;
                if (tmp10.refCount <= 0) {
                  callback.call(self, arg0, tmp9.handler, arg2);
                  tmp9.handler = undefined;
                  delete tmp[tmp3];
                }
                const _Object = Object;
                if (0 === Object.keys(tmp6).length) {
                  delete tmp2.__sentry_instrumentation_handlers__;
                }
              }
            }
            callback.call(self, arg0, arg1, arg2);
          };
        });
        const obj2 = bindResult(outer1_1[0]);
      }
    });
    const triggerHandlers = require(794) /* registerSpanErrorInstrumentation */.triggerHandlers;
  }
}
function makeDOMEventHandler(bindResult, arg1) {
  let closure_0 = bindResult;
  let closure_1 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  return (_sentryCaptured) => {
    if (_sentryCaptured) {
      if (!_sentryCaptured._sentryCaptured) {
        const target = _sentryCaptured.target;
        while (true) {
          let str = "keypress";
          let tmp2 = "keypress" === _sentryCaptured.type;
          if (!tmp2) {
            break;
          } else {
            let tmp3 = null;
            let tmp4 = null == target || !target.tagName;
            if (!tmp4) {
              let str2 = "INPUT";
              let tmp5 = "INPUT" !== target.tagName;
              if (tmp5) {
                let str3 = "TEXTAREA";
                tmp5 = "TEXTAREA" !== target.tagName;
              }
              if (tmp5) {
                tmp5 = !target.isContentEditable;
              }
              tmp4 = tmp5;
            }
            tmp2 = tmp4;
            break;
          }
          if (!tmp2) {
            let tmp6 = bindResult;
            let tmp7 = dependencyMap;
            let num = 0;
            let obj = bindResult(794);
            let str4 = "_sentryCaptured";
            let flag = true;
            let result = obj.addNonEnumerableProperty(_sentryCaptured, "_sentryCaptured", true);
            let tmp9 = target;
            if (target) {
              tmp9 = !target._sentryId;
            }
            if (tmp9) {
              let tmp10 = bindResult;
              let tmp11 = dependencyMap;
              let obj2 = bindResult(794);
              let obj3 = bindResult(794);
              let str5 = "_sentryId";
              let result1 = obj2.addNonEnumerableProperty(target, "_sentryId", obj3.uuid4());
            }
            let str6 = "input";
            if ("keypress" !== _sentryCaptured.type) {
              str6 = _sentryCaptured.type;
            }
            let tmp14 = outer1_3;
            let flag2 = false;
            if (_sentryCaptured.type === outer1_3) {
              let tmp15 = _sentryCaptured;
              if (tmp13.target) {
                let tmp16 = outer1_4;
                if (_sentryCaptured.target._sentryId === outer1_4) {
                  flag2 = true;
                }
              }
              flag2 = false;
            }
            while (true) {
              if (flag2) {
                break;
              } else {
                let tmp17 = bindResult;
                obj = { event: _sentryCaptured, name: str6 };
                let tmp18 = dependencyMap;
                obj.global = dependencyMap;
                let tmp19 = bindResult(obj);
                outer1_3 = _sentryCaptured.type;
                let _sentryId;
                if (target) {
                  _sentryId = target._sentryId;
                }
                outer1_4 = _sentryId;
                break;
              }
              let tmp21 = globalThis;
              let _clearTimeout = clearTimeout;
              let tmp22 = outer1_2;
              let clearTimeoutResult = clearTimeout(outer1_2);
              let tmp24 = bindResult;
              let tmp25 = dependencyMap;
              let num2 = 1;
              let WINDOW = bindResult(1015).WINDOW;
              let num3 = 1000;
              outer1_2 = WINDOW.setTimeout(() => {
                let outer2_4;
                let outer2_3;
              }, 1000);
            }
          }
        }
      }
    }
  };
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addClickKeypressInstrumentationHandler = function addClickKeypressInstrumentationHandler(arg0) {
  require(794) /* registerSpanErrorInstrumentation */.addHandler("dom", arg0);
  const obj = require(794) /* registerSpanErrorInstrumentation */;
  require(794) /* registerSpanErrorInstrumentation */.maybeInstrument("dom", instrumentDOM);
};
arg5.instrumentDOM = instrumentDOM;
