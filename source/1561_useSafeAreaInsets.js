// Module ID: 1561
// Function ID: 17610
// Name: useSafeAreaInsets
// Dependencies: [57, 29, 31, 27, 33, 1562]
// Exports: SafeAreaListener, SafeAreaProvider, useSafeArea, useSafeAreaFrame, withSafeAreaInsets

// Module 1561 (useSafeAreaInsets)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let StyleSheet;
let closure_7;
const require = arg1;
function useSafeAreaInsets() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error(c12);
    throw error;
  } else {
    return context;
  }
}
let closure_2 = ["children", "initialMetrics", "initialSafeAreaInsets", "style"];
let closure_3 = ["onChange", "style", "children"];
({ Dimensions: closure_7, StyleSheet } = get_ActivityIndicator);
let context = importAllResult.createContext(null);
let context1 = importAllResult.createContext(null);
const styles = StyleSheet.create({ fill: { flex: 1 } });
let c12 = "No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.";

export const SafeAreaInsetsContext = context;
export const SafeAreaFrameContext = context1;
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  let children;
  let initialMetrics;
  let initialSafeAreaInsets;
  let style;
  ({ initialMetrics, initialSafeAreaInsets } = arg0);
  ({ children, style } = arg0);
  context = importAllResult.useContext(context);
  context1 = importAllResult.useContext(context1);
  let insets;
  if (null != initialMetrics) {
    insets = initialMetrics.insets;
  }
  if (null != insets) {
    initialSafeAreaInsets = insets;
  }
  if (null != initialSafeAreaInsets) {
    context = initialSafeAreaInsets;
  }
  let tmp6 = null;
  if (null != context) {
    tmp6 = context;
  }
  const tmp7 = callback(importAllResult.useState(tmp6), 2);
  const first = tmp7[0];
  const _require = tmp7[1];
  let frame;
  if (null != initialMetrics) {
    frame = initialMetrics.frame;
  }
  if (null != frame) {
    context1 = frame;
  }
  if (null == context1) {
    let obj = { x: 0, y: 0, width: store.get("window").width, height: store.get("window").height };
    context1 = obj;
  }
  const tmp12 = callback(importAllResult.useState(context1), 2);
  const dependencyMap = tmp12[1];
  const onInsetsChange = importAllResult.useCallback((nativeEvent) => {
    let closure_0;
    let closure_1;
    ({ frame: closure_0, insets: closure_1 } = nativeEvent.nativeEvent);
    callback2((height) => {
      let tmp = height;
      if (styles) {
        if (styles.height === height.height) {
          if (styles.width === height.width) {
            if (styles.x === height.x) {
              tmp = height;
            }
          }
        }
        tmp = styles;
      }
      return tmp;
    });
    callback((arg0) => {
      let rect = arg0;
      if (arg0) {
        if (closure_1.bottom === rect.bottom) {
          if (closure_1.left === rect.left) {
            return rect;
          }
        }
      }
      rect = closure_1;
    });
  }, []);
  style = [closure_11.fill, ];
  style[1] = style;
  obj = {};
  let tmp15 = null;
  if (null != first) {
    obj = { value: tmp12[0] };
    const obj1 = { value: first, children };
    obj.children = <context.Provider value={first}>{children}</context.Provider>;
    tmp15 = <context1.Provider value={tmp12[0]} />;
  }
  obj.children = tmp15;
  return jsx(_require(1562).NativeSafeAreaProvider, Object.assign({ style, onInsetsChange }, callback2(arg0, closure_2), obj));
};
export const SafeAreaListener = function SafeAreaListener(onChange) {
  let children;
  let style;
  onChange = onChange.onChange;
  ({ style, children } = onChange);
  const items = [closure_11.fill, style];
  return jsx(onChange(1562).NativeSafeAreaProvider, Object.assign({}, callback2(onChange, closure_3), {
    style: items,
    onInsetsChange(insets) {
      onChange({ insets: insets.nativeEvent.insets, frame: insets.nativeEvent.frame });
    },
    children
  }));
};
export { useSafeAreaInsets };
export const useSafeAreaFrame = function useSafeAreaFrame() {
  const context = importAllResult.useContext(context1);
  if (null == context) {
    const _Error = Error;
    const error = new Error(c12);
    throw error;
  } else {
    return context;
  }
};
export const withSafeAreaInsets = function withSafeAreaInsets(arg0) {
  let closure_0 = arg0;
  return importAllResult.forwardRef((arg0, ref) => outer1_8(closure_0, Object.assign({}, arg0, { insets: outer1_13(), ref })));
};
export const useSafeArea = function useSafeArea() {
  return useSafeAreaInsets();
};
export const SafeAreaConsumer = context.Consumer;
export const SafeAreaContext = context;
