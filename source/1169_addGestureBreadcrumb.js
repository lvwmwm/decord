// Module ID: 1169
// Function ID: 13290
// Name: addGestureBreadcrumb
// Dependencies: [794, 1141, 1131, 1134]

// Module 1169 (addGestureBreadcrumb)
const require = arg1;
const dependencyMap = arg6;
function addGestureBreadcrumb(message, event) {
  event = event.event;
  let obj = { message, level: "info", type: user, category: gesture };
  if (event) {
    obj = { gesture: tmp2 };
    const _Object = Object;
    const keys = Object.keys(table);
    for (const item10022 of keys) {
      let tmp8 = table;
      let tmp9 = table[item10022];
      let tmp10 = tmp9;
      let tmp11 = event;
      if (tmp9 in tmp) {
        let tmp12 = obj;
        let tmp13 = tmp9;
        let tmp14 = event;
        tmp3[tmp10] = tmp[tmp10];
      }
      continue;
    }
    obj.data = obj;
    const tmp3 = obj;
  }
  require(794) /* registerSpanErrorInstrumentation */.addBreadcrumb(obj);
  const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
  debug.log("[GestureTracing] " + obj.message);
}
const gesture = "gesture";
const user = "user";
let closure_4 = { NUMBER_OF_POINTERS: "numberOfPointers", NUMBER_OF_TOUCHES: "numberOfTouches", FORCE: "force", FORCE_CHANGE: "forceChange", ROTATION: "rotation", ROTATION_CHANGE: "rotationChange", SCALE: "scale", SCALE_CHANGE: "scaleChange", DURATION: "duration", VELOCITY: "velocity", VELOCITY_X: "velocityX", VELOCITY_Y: "velocityY" };
arg5.DEFAULT_BREADCRUMB_CATEGORY = "gesture";
arg5.DEFAULT_BREADCRUMB_TYPE = "user";
arg5.GESTURE_POSTFIX_LENGTH = 14;
arg5.ACTION_GESTURE_FALLBACK = "gesture";
arg5.sentryTraceGesture = function sentryTraceGesture(arg0, handlers) {
  const _require = arg0;
  if (handlers) {
    if (handlers.handlers) {
      if (arg0) {
        let str4 = "gesture";
        if (handlers.handlerName.length > 14) {
          str4 = handlers.handlerName.substring(0, handlers.handlerName.length - 14).toLowerCase();
          const str5 = handlers.handlerName;
          const str6 = handlers.handlerName.substring(0, handlers.handlerName.length - 14);
        }
        const onBegin = handlers.handlers.onBegin;
        handlers.handlers.onBegin = (event) => {
          let obj = callback(str4[1]);
          obj = { elementId: callback, op: "" + callback(str4[2]).UI_ACTION + "." + str4 };
          const result = obj.startUserInteractionSpan(obj);
          if (result) {
            const attr = result.setAttribute(callback(str4[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, callback(str4[3]).SPAN_ORIGIN_AUTO_INTERACTION);
          }
          obj = { event, name: str4 };
          outer1_5("Gesture " + callback + " begin.", obj);
          if (onBegin) {
            onBegin(event);
          }
        };
        const onEnd = handlers.handlers.onEnd;
        handlers.handlers.onEnd = (event) => {
          outer1_5("Gesture " + closure_0 + " end.", { event, name: str4 });
          if (onEnd) {
            onEnd(event);
          }
        };
        return handlers;
      } else {
        const debug3 = _require(str4[0]).debug;
        debug3.warn("[GestureTracing] Can not wrap gesture without name.");
        return handlers;
      }
    } else {
      const debug2 = _require(str4[0]).debug;
      debug2.warn("[GestureTracing] Can not wrap gesture without handlers. If you want to wrap a gesture composition wrap individual gestures.");
      return handlers;
    }
  } else {
    const debug = _require(str4[0]).debug;
    debug.warn("[GestureTracing] Gesture can not be undefined");
    return handlers;
  }
};
