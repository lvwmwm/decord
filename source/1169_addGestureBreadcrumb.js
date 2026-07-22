// Module ID: 1169
// Function ID: 13288
// Name: addGestureBreadcrumb
// Dependencies: []

// Module 1169 (addGestureBreadcrumb)
function addGestureBreadcrumb(message, event) {
  event = event.event;
  let obj = { message, level: "info", type: closure_3, category: closure_2 };
  if (event) {
    obj = { gesture: tmp2 };
    const _Object = Object;
    const keys = Object.keys(closure_4);
    for (const item10022 of keys) {
      let tmp8 = closure_4;
      let tmp9 = closure_4[item10022];
      let tmp10 = tmp9;
      let tmp11 = event;
      if (tmp9 in tmp) {
        let tmp12 = obj;
        let tmp13 = tmp9;
        let tmp14 = event;
        tmp3[tmp10] = tmp[tmp10];
      }
    }
    obj.data = obj;
    const tmp3 = obj;
  }
  event(arg6[0]).addBreadcrumb(obj);
  const debug = event(arg6[0]).debug;
  debug.log("[GestureTracing] " + obj.message);
}
let closure_2 = "gesture";
let closure_3 = "user";
let closure_4 = {};
arg5.DEFAULT_BREADCRUMB_CATEGORY = "gesture";
arg5.DEFAULT_BREADCRUMB_TYPE = "user";
arg5.GESTURE_POSTFIX_LENGTH = 14;
arg5.ACTION_GESTURE_FALLBACK = "gesture";
arg5.sentryTraceGesture = function sentryTraceGesture(arg0, handlers) {
  handlers = arg0;
  if (handlers) {
    if (handlers.handlers) {
      if (arg0) {
        let str4 = "gesture";
        if (handlers.handlerName.length > 14) {
          str4 = handlers.handlerName.substring(0, handlers.handlerName.length - 14).toLowerCase();
          const str5 = handlers.handlerName;
          const str6 = handlers.handlerName.substring(0, handlers.handlerName.length - 14);
        }
        const arg6 = str4;
        const onBegin = handlers.handlers.onBegin;
        handlers.handlers.onBegin = (event) => {
          let obj = event(str4[1]);
          obj = { elementId: event, op: "" + event(str4[2]).UI_ACTION + "." + str4 };
          const result = obj.startUserInteractionSpan(obj);
          if (result) {
            const attr = result.setAttribute(event(str4[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, event(str4[3]).SPAN_ORIGIN_AUTO_INTERACTION);
          }
          obj = { event, name: str4 };
          callback("Gesture " + event + " begin.", obj);
          if (onBegin) {
            onBegin(event);
          }
        };
        const onEnd = handlers.handlers.onEnd;
        handlers.handlers.onEnd = (event) => {
          callback("Gesture " + event + " end.", { event, name: str4 });
          if (onEnd) {
            onEnd(event);
          }
        };
        return handlers;
      } else {
        const debug3 = handlers(arg6[0]).debug;
        debug3.warn("[GestureTracing] Can not wrap gesture without name.");
        return handlers;
      }
    } else {
      const debug2 = handlers(arg6[0]).debug;
      debug2.warn("[GestureTracing] Can not wrap gesture without handlers. If you want to wrap a gesture composition wrap individual gestures.");
      return handlers;
    }
  } else {
    const debug = handlers(arg6[0]).debug;
    debug.warn("[GestureTracing] Gesture can not be undefined");
    return handlers;
  }
};
