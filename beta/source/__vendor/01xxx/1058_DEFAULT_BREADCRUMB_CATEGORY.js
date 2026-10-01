// Module ID: 1058
// Function ID: 1059
// Name: DEFAULT_BREADCRUMB_CATEGORY
// Dependencies: [682, 1030, 1020, 1023]
// Exports: sentryTraceGesture

// Module 1058 (DEFAULT_BREADCRUMB_CATEGORY)
import _mod682 from "module_682" /* 682 */;
import DEFAULT from "DEFAULT" /* 1020 */;
import userInteractionIntegration from "userInteractionIntegration" /* 1030 */;

const require = globalThis.__r;
let _require;

function addGestureBreadcrumb(message, event) {
  event = event.event;
  const obj = { message, level: "info", type: user, category: gesture };
  if (event) {
    const obj2 = { gesture: tmp };
    const _Object = Object;
    const keys = Object.keys(closure_6);
    for (const item10018 of keys) {
      let tmp8 = closure_6[item10018];
      let tmp9 = tmp8;
      if (tmp8 in event) {
        obj2[tmp9] = event[tmp9];
      }
      continue;
    }
    obj.data = obj2;
  }
  const obj3 = _mod682;
  obj3.addBreadcrumb(obj);
  const debug = _mod682.debug;
  debug.log("[GestureTracing] " + obj.message);
}
let gesture = "gesture";
const user = "user";
gesture = "gesture";
let closure_6 = { NUMBER_OF_POINTERS: "numberOfPointers", NUMBER_OF_TOUCHES: "numberOfTouches", FORCE: "force", FORCE_CHANGE: "forceChange", ROTATION: "rotation", ROTATION_CHANGE: "rotationChange", SCALE: "scale", SCALE_CHANGE: "scaleChange", DURATION: "duration", VELOCITY: "velocity", VELOCITY_X: "velocityX", VELOCITY_Y: "velocityY" };

export const DEFAULT_BREADCRUMB_CATEGORY = "gesture";
export const DEFAULT_BREADCRUMB_TYPE = "user";
export const GESTURE_POSTFIX_LENGTH = 14;
export const ACTION_GESTURE_FALLBACK = "gesture";
export const sentryTraceGesture = function sentryTraceGesture(elementId, handlers) {
  let formatted;
  _require = elementId;
  const tmp = handlers;
  if (tmp) {
    if (handlers.handlers) {
      if (elementId) {
        if (handlers.handlerName.length > 14) {
          const str4 = handlers.handlerName;
          const str5 = str4.substring(0, handlers.handlerName.length - 14);
          formatted = str5.toLowerCase();
        } else {
          formatted = gesture;
        }
        const onBegin = handlers.handlers.onBegin;
        handlers.handlers.onBegin = (event) => {
          const obj = userInteractionIntegration;
          const obj2 = { elementId, op: "" + DEFAULT.UI_ACTION + "." + formatted };
          const result = obj.startUserInteractionSpan(obj2);
          const tmp3 = elementId;
          const tmp4 = formatted;
          if (result) {
            const setAttribute = result.setAttribute;
            const attr = setAttribute(tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1023).SPAN_ORIGIN_AUTO_INTERACTION);
          }
          const obj3 = { event, name: tmp4 };
          addGestureBreadcrumb("Gesture " + tmp3 + " begin.", obj3);
          if (onBegin) {
            onBegin(event);
          }
        };
        const onEnd = handlers.handlers.onEnd;
        handlers.handlers.onEnd = (event) => {
          const obj = { event, name: formatted };
          addGestureBreadcrumb("Gesture " + elementId + " end.", obj);
          if (onEnd) {
            tmp2(event);
          }
        };
        return handlers;
      } else {
        const debug3 = require("module_682").debug;
        debug3.warn("[GestureTracing] Can not wrap gesture without name.");
        return handlers;
      }
    } else {
      const debug2 = require("module_682").debug;
      debug2.warn("[GestureTracing] Can not wrap gesture without handlers. If you want to wrap a gesture composition wrap individual gestures.");
      return handlers;
    }
  } else {
    const tmp2 = _require;
    let tmp3 = formatted;
    const debug = require("module_682").debug;
    debug.warn("[GestureTracing] Gesture can not be undefined");
    return handlers;
  }
};
