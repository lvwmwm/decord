// Module ID: 5251
// Function ID: 45290
// Name: createNativeWrapper
// Dependencies: [65, 31, 33, 5252]
// Exports: default

// Module 5251 (createNativeWrapper)
import closure_2 from "result";
import result from "result";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ useImperativeHandle: closure_3, useRef: closure_4 } = result);
let items = [];
let closure_6 = items.concat(require("_toConsumableArray")(require("items").nativeViewProps), ["onGestureHandlerEvent", "onGestureHandlerStateChange"]);

export default function createNativeWrapper(displayName) {
  let closure_0 = displayName;
  if (arguments.length > 1) {
    let closure_1 = {};
    const forwardRefResult = React.forwardRef((enabled) => {
      let childProps;
      let gestureHandlerProps;
      const displayName = enabled;
      const keys = Object.keys(enabled);
      obj = { gestureHandlerProps: Object.assign({}, table), childProps: obj };
      obj = { enabled: enabled.enabled, hitSlop: enabled.hitSlop, testID: enabled.testID };
      const reduced = keys.reduce((gestureHandlerProps) => {
        if (outer2_6.includes(arg1)) {
          gestureHandlerProps.gestureHandlerProps[arg1] = enabled[arg1];
        } else {
          gestureHandlerProps.childProps[arg1] = enabled[arg1];
        }
        return gestureHandlerProps;
      }, obj);
      ({ gestureHandlerProps, childProps } = reduced);
      const tmp2 = outer1_4(null);
      table = tmp2;
      const tmp3 = outer1_4(null);
      let closure_2 = tmp3;
      const items = [tmp2, tmp3];
      outer1_3(arg1, () => {
        let current = tmp3.current;
        current = null;
        if (tmp2.current) {
          current = null;
          if (current) {
            tmp2.current.handlerTag = current.handlerTag;
            current = tmp2.current;
          }
        }
        return current;
      }, items);
      obj = { ref: tmp3, children: outer1_5(displayName, Object.assign({}, childProps, { ref: tmp2 })) };
      return outer1_5(displayName(table[3]).NativeViewGestureHandler, Object.assign({}, gestureHandlerProps, obj));
    });
    let str;
    if (null != displayName) {
      str = displayName.displayName;
    }
    if (!str) {
      let name;
      if (null != displayName) {
        const render = displayName.render;
        if (null != render) {
          name = render.name;
        }
      }
      str = name;
    }
    if (!str) {
      str = "string" === typeof displayName && displayName;
      const tmp6 = "string" === typeof displayName && displayName;
    }
    if (!str) {
      str = "ComponentWrapper";
    }
    forwardRefResult.displayName = str;
    return forwardRefResult;
  }
};
