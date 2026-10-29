// Module ID: 18844
// Function ID: 18845
// Name: modal/ModalScreen
// Dependencies: [109, 19, 17, 1084, 21, 5005, 587, 558, 576, 6731, 1272, 6016, 7642, 1631, 7098, 4962, 18845, 1381, 11997, 16326, 2]

// Module 18844 (modal/ModalScreen)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6016 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7098 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c10;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
let closure_3 = ["impressionName", "impressionProperties"];
let closure_4 = ["impressionName", "impressionProperties"];
({ View: metroImportDefault, StyleSheet: metroImportAll } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { containerWithPadding: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_12 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function Modal(route) {
  let closure_1;
  let impressionName;
  let impressionProperties;
  let left;
  let modal;
  let right;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp = modal;
  let obj = modal(576);
  const cResult = obj.c(41);
  const params = route.route.params;
  modal = params.modal;
  const presentation = params.presentation;
  const tmp4 = closure_12();
  if (cResult[0] !== modal.props) {
    let props = modal.props;
    if (props == null) {
      props = {};
    }
    cResult[0] = modal.props;
    cResult[1] = props;
    tmp5 = props;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    ({ impressionName, impressionProperties } = tmp5);
    cResult[2] = tmp5;
    cResult[3] = impressionName;
    cResult[4] = impressionProperties;
    cResult[5] = _objectWithoutProperties(tmp5, closure_3);
    tmp8 = impressionProperties;
    tmp7 = impressionName;
    const tmp12 = _objectWithoutProperties(tmp5, closure_3);
  } else {
    tmp7 = cResult[3];
    tmp8 = cResult[4];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h() {
      const arr = closure_1(dependencyMap[9]);
      arr.pop();
    };
    cResult[6] = fn;
  }
  if (cResult[7] === tmp7) {
    let tmp14;
    let tmp21;
    let tmp25;
    let tmp24;
    let tmp28;
    let tmp27;
    if (cResult[8] === tmp8) {
      tmp14 = cResult[9];
    }
    useTrackImpressionDefault(tmp14);
    let callbacks = modal.callbacks;
    let onExited;
    const useRef = react.useRef;
    if (callbacks != null) {
      onExited = callbacks.onExited;
    }
    importDefault = useRef(onExited);
    const callbacks2 = modal.callbacks;
    let onExited1;
    const tmp19 = cResult[10];
    if (callbacks2 != null) {
      onExited1 = callbacks2.onExited;
    }
    if (tmp19 !== onExited1) {
      const callbacks3 = modal.callbacks;
      let onExited2;
      if (callbacks3 != null) {
        onExited2 = callbacks3.onExited;
      }
      class R {
        constructor() {
          const callbacks = modal.callbacks;
          let onExited;
          const tmp = closure_1;
          if (callbacks != null) {
            onExited = callbacks.onExited;
          }
          tmp.current = onExited;
        }
      }
      cResult[10] = onExited2;
      cResult[11] = R;
      tmp21 = R;
    } else {
      tmp21 = cResult[11];
    }
    const effect = obj4.useEffect(tmp21);
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
      const items = [];
      class R {
        constructor() {
          const callbacks = modal.callbacks;
          let onExited;
          const tmp = closure_1;
          if (callbacks != null) {
            onExited = callbacks.onExited;
          }
          tmp.current = onExited;
        }
      }
      cResult[13] = items;
      tmp25 = items;
      tmp24 = L;
    } else {
      class L {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
      tmp25 = cResult[13];
    }
    const effect1 = obj4.useEffect(tmp24, tmp25);
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
      const items1 = [];
      class R {
        constructor() {
          const callbacks = modal.callbacks;
          let onExited;
          const tmp = closure_1;
          if (callbacks != null) {
            onExited = callbacks.onExited;
          }
          tmp.current = onExited;
        }
      }
      cResult[15] = tmp29;
      tmp28 = tmp29;
      tmp27 = items1;
    } else {
      class L {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
      tmp28 = cResult[15];
    }
    const layoutEffect = obj4.useLayoutEffect(tmp28, tmp27);
    ({ left, right } = useSafeAreaInsetsDefault());
    useSafeAreaInsetsDefault();
    const tmp32 = useIsWindowLargeDefault();
    if (cResult[16] === tmp32) {
      class L {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
      if (cResult[19] === tmp33) {
        class L {
          constructor() {
            return () => {
              const current = ref.current;
              let currentResult;
              if (current != null) {
                currentResult = current();
              }
              return currentResult;
            };
          }
        }
        if (cResult[22] === tmp35) {
          class L {
            constructor() {
              return () => {
                const current = ref.current;
                let currentResult;
                if (current != null) {
                  currentResult = current();
                }
                return currentResult;
              };
            }
          }
        }
        class R {
          constructor() {
            const callbacks = modal.callbacks;
            let onExited;
            const tmp = closure_1;
            if (callbacks != null) {
              onExited = callbacks.onExited;
            }
            tmp.current = onExited;
          }
        }
        cResult[22] = tmp35;
        cResult[23] = left;
        cResult[24] = right;
        cResult[25] = tmp4;
        cResult[26] = undefined;
      }
      class R {
        constructor() {
          const callbacks = modal.callbacks;
          let onExited;
          const tmp = closure_1;
          if (callbacks != null) {
            onExited = callbacks.onExited;
          }
          tmp.current = onExited;
        }
      }
      cResult[19] = tmp33;
      cResult[20] = modal.key;
      cResult[21] = tmp33;
    }
    let isIpadOSResult = tmp32;
    if (isIpadOSResult) {
      class L {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
      isIpadOSResult = obj5.isIpadOS();
    }
    if (isIpadOSResult) {
      class L {
        constructor() {
          return () => {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          };
        }
      }
      isIpadOSResult = "modal" === presentation;
    }
    cResult[16] = tmp32;
    cResult[17] = presentation;
    cResult[18] = isIpadOSResult;
  }
  const obj2 = { type: tmp(1272).ImpressionTypes.MODAL, name: tmp7, properties: tmp8 };
  cResult[7] = tmp7;
  cResult[8] = tmp8;
  cResult[9] = obj2;
  tmp14 = obj2;
}) : (function Modal(route) {
  let SafeAreaProvider;
  let closure_1;
  let impressionName;
  let impressionProperties;
  let items2;
  let left;
  let pop;
  let right;
  const params = route.route.params;
  const modal = params.modal;
  importDefault = undefined;
  const presentation = params.presentation;
  let props = modal.props;
  let tmp = closure_12();
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp2 = _objectWithoutProperties(props, closure_4);
  const callback = react.useCallback(() => {
    const arr = closure_1(dependencyMap[9]);
    arr.pop();
  }, []);
  let obj = { type: modal(1272).ImpressionTypes.MODAL, name: impressionName, properties: impressionProperties };
  const tmp6 = useTrackImpressionDefault;
  tmp6(obj);
  let callbacks = modal.callbacks;
  let onExited;
  const useRef = react.useRef;
  if (callbacks != null) {
    onExited = callbacks.onExited;
  }
  importDefault = useRef(onExited);
  const effect = obj2.useEffect(() => {
    const callbacks = modal.callbacks;
    let onExited;
    const tmp = closure_1;
    if (callbacks != null) {
      onExited = callbacks.onExited;
    }
    tmp.current = onExited;
  });
  const effect1 = obj2.useEffect(() => {
    let ref;
    return () => {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    };
  }, []);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const obj = modal(dependencyMap[12]);
    return obj.trackAppUIViewed("ModalScreen");
  }, []);
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  let isIpadOSResult = tmp4(7098)();
  if (isIpadOSResult) {
    const tmp7Result = modal(4962);
    isIpadOSResult = tmp7Result.isIpadOS();
  }
  if (isIpadOSResult) {
    isIpadOSResult = "modal" === presentation;
  }
  if (!isIpadOSResult) {
    const tmp7Result3 = modal(18845);
    isIpadOSResult = tmp7Result3.shouldExcludeSafeAreaForModalKey(modal.key);
  }
  const items = [absoluteFillObject.absoluteFillObject, ];
  let tmp17;
  const tmp16 = closure_7;
  if (!isIpadOSResult) {
    const items1 = [tmp.containerWithPadding, ];
    const obj3 = { paddingLeft: left, paddingRight: right };
    items1[1] = obj3;
    tmp17 = items1;
  }
  items[1] = tmp17;
  const obj4 = { style: items, onAccessibilityEscape: pop, children: closure_11(SafeAreaProvider, { children: items2 }) };
  if (modal.closable) {
    pop = tmp4(6731).pop;
  } else {
    pop = NOOP;
  }
  SafeAreaProvider = tmp7(16326).SafeAreaProvider;
  const createElement = obj2.createElement;
  const modal2 = modal.modal;
  const merged = Object.assign(tmp2);
  items2 = [<modal2 style={undefined} transitionState={null} onClose={callback} />, ];
  const tmp7Result4 = modal(1381);
  items2[1] = tmp7Result4.isIOS() && closure_10(modal(11997).PortalKeyboardRenderer, { portal: false });
  tmp7Result4.isIOS() && closure_10(modal(11997).PortalKeyboardRenderer, { portal: false });
  return closure_10(tmp16, obj4);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default tmp4;
