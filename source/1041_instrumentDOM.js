// Module ID: 1041
// Function ID: 11193
// Name: instrumentDOM
// Dependencies: []

// Module 1041 (instrumentDOM)
function instrumentDOM() {
  if (arg1(arg6[1]).WINDOW.document) {
    const bindResult = arg1(arg6[0]).triggerHandlers.bind(null, "dom");
    const arg1 = bindResult;
    const tmp6 = makeDOMEventHandler(bindResult, true);
    const _document = arg1(arg6[1]).WINDOW.document;
    const listener = _document.addEventListener("click", tmp6, false);
    const _document2 = arg1(arg6[1]).WINDOW.document;
    const listener1 = _document2.addEventListener("keypress", tmp6, false);
    const items = [true, true];
    const item = items.forEach((arg0) => {
      const tmp = bindResult(closure_1[1]).WINDOW[arg0];
      let prototype;
      if (null != tmp) {
        prototype = tmp.prototype;
      }
      let hasOwnPropertyResult = null != prototype && null != prototype.hasOwnProperty;
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = prototype.hasOwnProperty("addEventListener");
      }
      if (hasOwnPropertyResult) {
        bindResult(closure_1[0]).fill(prototype, "addEventListener", (arg0) => function(arg0, arg1, arg2) {
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
              const tmp10 = callback(arg0);
              tmp7.handler = tmp10;
              arg0.call(self, tmp, tmp10, arg2);
            }
            tmp6.refCount = tmp6.refCount + 1;
          }
          arg0.call(self, arg0, arg1, arg2);
        });
        const obj = bindResult(closure_1[0]);
        bindResult(closure_1[0]).fill(prototype, "removeEventListener", (arg0) => function(arg0, arg1, arg2) {
          const self = this;
          if ("click" === arg0) {
            const __sentry_instrumentation_handlers__ = self.__sentry_instrumentation_handlers__;
            let obj = __sentry_instrumentation_handlers__;
            if (!__sentry_instrumentation_handlers__) {
              obj = {};
            }
            if (obj[tmp]) {
              tmp7.refCount = tmp7.refCount - 1;
              if (tmp7.refCount <= 0) {
                arg0.call(self, arg0, tmp6.handler, arg2);
                tmp6.handler = undefined;
                delete r4[r6];
              }
              const _Object = Object;
              if (0 === Object.keys(tmp3).length) {
                delete r5.__sentry_instrumentation_handlers__;
              }
            }
          }
          arg0.call(self, arg0, arg1, arg2);
        });
        const obj2 = bindResult(closure_1[0]);
      }
    });
    const triggerHandlers = arg1(arg6[0]).triggerHandlers;
  }
}
function makeDOMEventHandler(bindResult, arg1) {
  arg1 = bindResult;
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
            // break
          }
          if (!tmp2) {
            let tmp6 = _sentryCaptured;
            let tmp7 = closure_1;
            let num = 0;
            let obj = _sentryCaptured(closure_1[0]);
            let str4 = "_sentryCaptured";
            let flag = true;
            let result = obj.addNonEnumerableProperty(_sentryCaptured, "_sentryCaptured", true);
            let tmp9 = target;
            if (target) {
              tmp9 = !target._sentryId;
            }
            if (tmp9) {
              let tmp10 = _sentryCaptured;
              let tmp11 = closure_1;
              let obj2 = _sentryCaptured(closure_1[0]);
              let obj3 = _sentryCaptured(closure_1[0]);
              let str5 = "_sentryId";
              let result1 = obj2.addNonEnumerableProperty(target, "_sentryId", obj3.uuid4());
            }
            let str6 = "input";
            if ("keypress" !== _sentryCaptured.type) {
              str6 = _sentryCaptured.type;
            }
            let tmp14 = type;
            let flag2 = false;
            if (_sentryCaptured.type === type) {
              let tmp15 = _sentryCaptured;
              if (tmp13.target) {
                let tmp16 = _sentryId;
                if (_sentryCaptured.target._sentryId === _sentryId) {
                  flag2 = true;
                }
              }
              flag2 = false;
            }
            while (true) {
              if (flag2) {
                break;
              } else {
                let tmp17 = _sentryCaptured;
                obj = { event: _sentryCaptured, name: str6 };
                let tmp18 = closure_1;
                obj.global = closure_1;
                let tmp19 = _sentryCaptured(obj);
                let type = _sentryCaptured.type;
                let _sentryId;
                if (target) {
                  _sentryId = target._sentryId;
                }
                // break
              }
              let tmp21 = globalThis;
              let _clearTimeout = clearTimeout;
              let tmp22 = timeout;
              let clearTimeoutResult = clearTimeout(timeout);
              let tmp24 = _sentryCaptured;
              let tmp25 = closure_1;
              let num2 = 1;
              let WINDOW = _sentryCaptured(closure_1[1]).WINDOW;
              let num3 = 1000;
              let timeout = WINDOW.setTimeout(() => {
                let closure_4;
                let closure_3;
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
  arg1(arg6[0]).addHandler("dom", arg0);
  const obj = arg1(arg6[0]);
  arg1(arg6[0]).maybeInstrument("dom", instrumentDOM);
};
arg5.instrumentDOM = instrumentDOM;
