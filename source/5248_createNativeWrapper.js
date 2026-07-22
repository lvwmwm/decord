// Module ID: 5248
// Function ID: 45271
// Name: createNativeWrapper
// Dependencies: []
// Exports: default

// Module 5248 (createNativeWrapper)
let closure_2 = importAll(dependencyMap[1]);
const importDefaultResult = importDefault(dependencyMap[0]);
({ useImperativeHandle: closure_3, useRef: closure_4 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const items = [];
let closure_6 = items.concat(importDefaultResult(arg1(dependencyMap[3]).nativeViewProps), ["<string:80113408>", "<string:3329442304>"]);

export default function createNativeWrapper(displayName) {
  const arg1 = displayName;
  if (arguments.length > 1) {
    let closure_1 = {};
    const forwardRefResult = React.forwardRef((enabled) => {
      let childProps;
      let gestureHandlerProps;
      const keys = Object.keys(enabled);
      let obj = { gestureHandlerProps: Object.assign({}, closure_1), childProps: obj };
      obj = { enabled: enabled.enabled, hitSlop: enabled.hitSlop, testID: enabled.testID };
      const reduced = keys.reduce((gestureHandlerProps) => {
        if (closure_6.includes(arg1)) {
          gestureHandlerProps.gestureHandlerProps[arg1] = gestureHandlerProps[arg1];
        } else {
          gestureHandlerProps.childProps[arg1] = gestureHandlerProps[arg1];
        }
        return gestureHandlerProps;
      }, obj);
      ({ gestureHandlerProps, childProps } = reduced);
      const tmp2 = callback2(null);
      closure_1 = tmp2;
      const tmp3 = callback2(null);
      const items = [tmp2, tmp3];
      callback(arg1, () => {
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
      obj = { ref: tmp3, children: callback3(enabled, Object.assign({}, childProps, { ref: tmp2 })) };
      return callback3(enabled(closure_1[3]).NativeViewGestureHandler, Object.assign({}, gestureHandlerProps, obj));
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
