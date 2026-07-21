// Module ID: 1561
// Function ID: 17603
// Name: useSafeAreaInsets
// Dependencies: []
// Exports: SafeAreaListener, SafeAreaProvider, useSafeArea, useSafeAreaFrame, withSafeAreaInsets

// Module 1561 (useSafeAreaInsets)
let StyleSheet;
function useSafeAreaInsets() {
  const context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error(closure_12);
    throw error;
  } else {
    return context;
  }
}
let closure_2 = [];
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ Dimensions: closure_7, StyleSheet } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const context = importAllResult.createContext(null);
const context1 = importAllResult.createContext(null);
const styles = StyleSheet.create({ fill: { flex: 1 } });
let closure_12 = "No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.";

export const SafeAreaInsetsContext = context;
export const SafeAreaFrameContext = context1;
export const SafeAreaProvider = function SafeAreaProvider(arg0) {
  let children;
  let initialMetrics;
  let initialSafeAreaInsets;
  let style;
  ({ initialMetrics, initialSafeAreaInsets } = arg0);
  ({ children, style } = arg0);
  let context = importAllResult.useContext(context);
  let context1 = importAllResult.useContext(context1);
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
  const tmp7 = callback2(importAllResult.useState(tmp6), 2);
  const first = tmp7[0];
  const callback = tmp7[1];
  let frame;
  if (null != initialMetrics) {
    frame = initialMetrics.frame;
  }
  if (null != frame) {
    context1 = frame;
  }
  if (null == context1) {
    let obj = { max: -536870861, guildId: -299892737, width: store.get("window").width, height: store.get("window").height };
    context1 = obj;
  }
  const tmp12 = callback2(importAllResult.useState(context1), 2);
  let closure_1 = tmp12[1];
  const onInsetsChange = importAllResult.useCallback((nativeEvent) => {
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
    obj.children = <context.Provider {...obj1} />;
    tmp15 = <context1.Provider {...obj} />;
  }
  obj.children = tmp15;
  return jsx(callback(closure_1[5]).NativeSafeAreaProvider, Object.assign({ style, onInsetsChange }, callback3(arg0, closure_2), obj));
};
export const SafeAreaListener = function SafeAreaListener(onChange) {
  let children;
  let style;
  const arg1 = onChange.onChange;
  ({ style, children } = onChange);
  const items = [closure_11.fill, style];
  return jsx(arg1(dependencyMap[5]).NativeSafeAreaProvider, Object.assign({}, callback3(onChange, closure_3), {
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
    const error = new Error(closure_12);
    throw error;
  } else {
    return context;
  }
};
export const withSafeAreaInsets = function withSafeAreaInsets(arg0) {
  const arg1 = arg0;
  return importAllResult.forwardRef((arg0, ref) => callback(arg0, Object.assign({}, arg0, { insets: callback2(), ref })));
};
export const useSafeArea = function useSafeArea() {
  return useSafeAreaInsets();
};
export const SafeAreaConsumer = context.Consumer;
export const SafeAreaContext = context;
