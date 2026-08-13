// Module ID: 5341
// Function ID: 5342
// Name: useFrameSize
// Dependencies: [19, 17, 21, 5342, 5343, 1521]
// Exports: FrameSizeProvider, useFrameSize

// Module 5341 (useFrameSize)
import noop from "noop";
import { Platform } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import __react_navigation__elements_contexts from "__react_navigation__elements_contexts";

let c4;
let jsx;
const require = arg1;
({ jsx, jsxs: c4 } = jsxProd);
const namedContext = __react_navigation__elements_contexts.getNamedContext("FrameContext", undefined);

export const useFrameSize = function useFrameSize(arg0, arg1) {
  const context = React.useContext(closure_5);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useFrameSize must be used within a FrameSizeProvider");
    throw error;
  } else {
    const obj = require(5343) /* is */;
    const tmp5 = arg1 ? context.subscribeThrottled : context.subscribe;
    return obj.useSyncExternalStoreWithSelector(tmp5, context.getCurrent, context.getCurrent, arg0);
  }
};
export const FrameSizeProvider = function FrameSizeProvider(initialFrame) {
  initialFrame = initialFrame.initialFrame;
  let closure_0;
  let importDefault;
  let dependencyMap;
  let React;
  let callback;
  let redux;
  let ref;
  let obj = { width: initialFrame.width, height: initialFrame.height };
  closure_0 = React.useRef(obj);
  importDefault = React.useRef(new Set());
  const tmp2 = importDefault(1521)(() => ref.current);
  dependencyMap = tmp2;
  const tmp3 = importDefault(1521)((arg0) => {
    let closure_0 = arg0;
    let current = ref2.current;
    current.add(arg0);
    return () => {
      const current = outer1_1.current;
      current.delete(closure_0);
    };
  });
  React = tmp3;
  const tmp4 = importDefault(1521)((arg0) => {
    let closure_0 = arg0;
    let c2 = false;
    const _undefined = false;
    let closure_4 = _undefined(() => {
      clearTimeout(timeout);
      let c2 = true;
      if (c3) {
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          if (c2) {
            c2 = false;
            callback();
          }
        }, 100);
      } else {
        c3 = true;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let c3 = false;
        }, 100);
        c2 = false;
        callback();
      }
    });
    return () => {
      callback2();
      clearTimeout(closure_1);
    };
  });
  callback = tmp4;
  const items = [tmp3, tmp4, tmp2];
  const memo = React.useMemo(() => ({ getCurrent: c2, subscribe: c3, subscribeThrottled: c4 }), items);
  const tmp6 = importDefault(1521)((height) => {
    if (!tmp2) {
      const obj = { width: null, height: null };
      ({ width: obj[0], height: obj[1] } = height);
      tmp.current = obj;
      const current = ref2.current;
      const item = current.forEach((arg0) => arg0());
    }
  });
  redux = tmp6;
  ref = React.useRef(null);
  const items1 = [tmp6];
  const effect = React.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3) => {
        if (!tmp) {
          const obj = { width: null, height: null };
          obj[0] = arg2;
          obj[1] = arg3;
          callback(obj);
        }
      });
    }
  }, items1);
  obj = { value: memo, children: null };
  obj = {
    ref,
    onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      _undefined2({ width: layout.width, height: layout.height });
    }
  };
  const items2 = [null, initialFrame.render(obj)];
  obj[1] = items2;
  return callback(redux.Provider, obj);
};
