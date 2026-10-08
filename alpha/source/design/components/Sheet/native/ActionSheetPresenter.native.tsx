// Module ID: 14060
// Function ID: 14061
// Name: ActionSheetPresenter
// Dependencies: [32, 19, 17, 4759, 1085, 21, 558, 576, 1272, 8941, 5054, 5370, 5356, 6831, 504, 12154, 5304, 2]

// Module 14060 (ActionSheetPresenter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8941 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4759 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const StyleSheet = react_native.StyleSheet;
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function TrackedWrapperInner(sheetKey) {
  let content;
  let first;
  let impressionName;
  let impressionProperties;
  let obj5;
  let ref2;
  let tmp5;
  let tmp8;
  let zIndex;
  let obj = sheetKey(576);
  const cResult = obj.c(22);
  sheetKey = sheetKey.sheetKey;
  ({ content, impressionName, impressionProperties, zIndex } = sheetKey);
  ref = sheetKey.ref;
  [tmp5, importDefault] = ref(T.useState("visible"), 2);
  ref(T.useState("visible"), 2);
  dependencyMap = T.useRef(NOOP);
  const tmp6 = NOOP;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(current) {
      ref.current = current;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  ref = obj2.useRef(tmp6);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        ref2.current();
      }
    }
    cResult[1] = K;
    tmp8 = K;
  } else {
    class K {
      constructor() {
        ref2.current();
      }
    }
  }
  if (cResult[2] === impressionName) {
    let tmp12;
    let tmp11;
    class K {
      constructor() {
        ref2.current();
      }
    }
    useTrackImpressionDefault(obj5);
    const _Symbol = Symbol;
    const tmp9 = importDefault;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          obj = {
            componentDidEnter() {
                      closure_1_1("visible");
                    },
            componentWillLeave(current) {
                      closure_1_1("exiting");
                      ref2.current = current;
                    },
            componentDidLeave() {
                      closure_1_1("exited");
                      ref2.current = current;
                    }
          };
          return obj;
        }
      }
      const items = [];
      cResult[5] = F;
      cResult[6] = items;
      tmp12 = items;
      tmp11 = F;
    } else {
      class F {
        constructor() {
          obj = {
            componentDidEnter() {
                      closure_1_1("visible");
                    },
            componentWillLeave(current) {
                      closure_1_1("exiting");
                      ref2.current = current;
                    },
            componentDidLeave() {
                      closure_1_1("exited");
                      ref2.current = current;
                    }
          };
          return obj;
        }
      }
      tmp12 = cResult[6];
    }
    const imperativeHandle = obj2.useImperativeHandle(ref, tmp11, tmp12);
    if (cResult[7] !== sheetKey) {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(sheetKey);
        }
      }
      cResult[7] = sheetKey;
      cResult[8] = T;
    } else {
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(sheetKey);
        }
      }
    }
    T = tmp14;
    if (cResult[9] === tmp14) {
      let tmp16;
      class T {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(sheetKey);
        }
      }
      if (cResult[12] !== tmp14) {
        class N {
          constructor() {
            current = ref.current;
            if (current != null) {
              current();
            }
            T();
            return true;
          }
        }
        cResult[12] = tmp14;
        cResult[13] = N;
        tmp16 = N;
      } else {
        class N {
          constructor() {
            current = ref.current;
            if (current != null) {
              current();
            }
            T();
            return true;
          }
        }
      }
      tmp9(5370)(tmp16);
      if (cResult[14] === tmp14) {
        class N {
          constructor() {
            current = ref.current;
            if (current != null) {
              current();
            }
            T();
            return true;
          }
        }
      }
      cResult[14] = tmp14;
      cResult[15] = content;
      cResult[16] = sheetKey;
      cResult[17] = zIndex;
      cResult[18] = jsx(sheetKey(5356).Dialog, { dialogKey: sheetKey, onDismiss: tmp14, zIndex, children: content });
      const tmp20 = jsx(sheetKey(5356).Dialog, { dialogKey: sheetKey, onDismiss: tmp14, zIndex, children: content });
    }
    const obj4 = { transitionState: tmp5, close: tmp14, onLeave: tmp8, registerDismissHandler: first };
    cResult[9] = tmp14;
    cResult[10] = tmp5;
    cResult[11] = obj4;
  }
  obj5 = { type: sheetKey(1272).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  cResult[2] = impressionName;
  cResult[3] = impressionProperties;
  cResult[4] = obj5;
}) : (function TrackedWrapperInner(sheetKey) {
  let closure_2;
  let content;
  let impressionName;
  let impressionProperties;
  let zIndex;
  sheetKey = sheetKey.sheetKey;
  ref = undefined;
  let registerDismissHandler;
  let callback2;
  ({ content, impressionName, impressionProperties, zIndex, ref } = sheetKey);
  const tmp = ref(registerDismissHandler.useState("visible"), 2);
  const transitionState = tmp[0];
  dependencyMap = tmp[1];
  ref = registerDismissHandler.useRef(callback2);
  registerDismissHandler = registerDismissHandler.useCallback((current) => {
    ref.current = current;
  }, []);
  const ref2 = registerDismissHandler.useRef(callback2);
  const callback1 = registerDismissHandler.useCallback(() => {
    ref2.current();
  }, []);
  let obj = { type: sheetKey(1272).ImpressionTypes.HALFSHEET, name: impressionName, properties: impressionProperties };
  const tmp5 = transitionState(8941);
  tmp5(obj);
  const imperativeHandle = registerDismissHandler.useImperativeHandle(ref, () => ({
    componentDidEnter() {
      closure_1_2("visible");
    },
    componentWillLeave(current) {
      closure_1_2("exiting");
      ref2.current = current;
    },
    componentDidLeave() {
      closure_1_2("exited");
      ref2.current = callback2;
    }
  }), []);
  const items = [sheetKey];
  callback2 = registerDismissHandler.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(sheetKey);
  }, items);
  const items1 = [transitionState, callback2, callback1, registerDismissHandler];
  const items2 = [callback2];
  const memo = registerDismissHandler.useMemo(() => ({ transitionState, close: callback2, onLeave: callback1, registerDismissHandler }), items1);
  const callback3 = registerDismissHandler.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
    callback2();
    return true;
  }, items2);
  transitionState(5370)(callback3);
  const Provider = transitionState(6831).Provider;
  return <Provider value={memo}>{null}</Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetPresenter(appEntryKey) {
  let stack;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = appEntryKey(576);
  const cResult = obj.c(12);
  appEntryKey = appEntryKey.appEntryKey;
  if (cResult[0] !== appEntryKey) {
    const fn = function c() {
      return () => {
        const obj = ActionSheetActionCreatorsDefault;
        const result = obj.resetActionSheetsForAppEntryKey(appEntryKey);
      };
    };
    const items = [appEntryKey];
    cResult[0] = appEntryKey;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ActionSheetStore];
    const fn2 = function v() {
      return stack.getStack();
    };
    const items2 = [];
    cResult[3] = items1;
    cResult[4] = fn2;
    cResult[5] = items2;
    tmp9 = items2;
    tmp8 = fn2;
    tmp7 = items1;
  } else {
    tmp7 = cResult[3];
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const tmpResult = appEntryKey(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp7, tmp8, tmp9);
  if (cResult[6] === appEntryKey) {
    let tmp11;
    let tmp14;
    if (cResult[7] === stateFromStoresArray) {
      tmp11 = cResult[8];
    }
    if (cResult[10] !== tmp11) {
      const TransitionGroup = tmp(12154).TransitionGroup;
      const tmp17 = <TransitionGroup style={StyleSheet.absoluteFill} component={appEntryKey(5304).TransitionGroupOverlayView}>{tmp11}</TransitionGroup>;
      cResult[10] = tmp11;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[11];
    }
    return tmp14;
  }
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(content) {
        return <closure_1_9 key={arg0.key} sheetKey={arg0.key} content={arg0.content} impressionName={arg0.impressionName} impressionProperties={arg0.impressionProperties} zIndex={arg0.zIndex} />;
      }
    }
    cResult[9] = A;
    tmp12 = A;
  } else {
    class A {
      constructor(content) {
        return <closure_1_9 key={arg0.key} sheetKey={arg0.key} content={arg0.content} impressionName={arg0.impressionName} impressionProperties={arg0.impressionProperties} zIndex={arg0.zIndex} />;
      }
    }
  }
  const mapped = found.map(tmp12);
  cResult[6] = appEntryKey;
  cResult[7] = stateFromStoresArray;
  cResult[8] = mapped;
  tmp11 = mapped;
}) : (function ActionSheetPresenter(appEntryKey) {
  let stack;
  appEntryKey = appEntryKey.appEntryKey;
  const items = [appEntryKey];
  const effect = react.useEffect(() => () => {
    const obj = ActionSheetActionCreatorsDefault;
    const result = obj.resetActionSheetsForAppEntryKey(appEntryKey);
  }, items);
  let obj = appEntryKey(504);
  const items1 = [ActionSheetStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => stack.getStack(), []);
  const found = stateFromStoresArray.filter((appEntryKey) => appEntryKey.appEntryKey === appEntryKey);
  const mapped = found.map((content) => <closure_1_9 key={arg0.key} sheetKey={arg0.key} content={arg0.content} impressionName={arg0.impressionName} impressionProperties={arg0.impressionProperties} zIndex={arg0.zIndex} />);
  const TransitionGroup = appEntryKey(12154).TransitionGroup;
  return <TransitionGroup style={StyleSheet.absoluteFill} component={appEntryKey(5304).TransitionGroupOverlayView}>{mapped}</TransitionGroup>;
});
let result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetPresenter.native.tsx");

export const ActionSheetPresenter = tmp2;
