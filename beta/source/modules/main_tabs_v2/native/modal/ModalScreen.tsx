// Module ID: 19330
// Function ID: 19331
// Name: modal/ModalScreen
// Dependencies: [109, 19, 17, 1072, 21, 5140, 575, 7183, 5097, 19331, 18388, 6799, 6160, 1260, 7730, 16749, 1377, 12564, 2]
// Exports: default

// Module 19330 (modal/ModalScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7183 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let importDefault;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let tmp;
const useTrackImpressionDefault = tmp(6160);
const ModalActionCreatorsDefault = tmp(6799);
const useAppFrameDefault = tmp(18388);
let closure_3 = ["impressionName", "impressionProperties"];
({ View: metroRequire, StyleSheet: metroImportDefault } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles((paddingLeft, paddingRight) => {
  const obj = { containerWithPadding: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingLeft, paddingRight }, content: { flex: 1 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingLeft, paddingRight });
  return obj;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  let SafeAreaProvider;
  let closure_1;
  let impressionName;
  let impressionProperties;
  let insets;
  let items1;
  let items2;
  let items3;
  let items4;
  let pop;
  let styles;
  const params = route.route.params;
  const modal = params.modal;
  importDefault = undefined;
  let tmp = importDefault;
  const presentation = params.presentation;
  let isIpadOSResult = useIsWindowLargeDefault();
  if (isIpadOSResult) {
    let obj = modal(5097);
    isIpadOSResult = obj.isIpadOS();
  }
  if (isIpadOSResult) {
    isIpadOSResult = "modal" === presentation;
  }
  if (!isIpadOSResult) {
    const obj2 = modal(19331);
    isIpadOSResult = obj2.shouldExcludeSafeAreaForModalKey(modal.key);
  }
  const obj3 = { enabled: !isIpadOSResult };
  ({ insets, styles } = useAppFrameDefault(obj3));
  useAppFrameDefault(obj3);
  const tmp7 = closure_11(insets.left, insets.right);
  let props = modal.props;
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp9 = _objectWithoutProperties(props, closure_3);
  const callback = react.useCallback(() => {
    const arr = closure_1(dependencyMap[11]);
    arr.pop();
  }, []);
  const obj4 = { type: modal(1260).ImpressionTypes.MODAL, name: impressionName, properties: impressionProperties };
  const tmpResult = useTrackImpressionDefault;
  tmpResult(obj4);
  let callbacks = modal.callbacks;
  let onExited;
  const useRef = react.useRef;
  if (callbacks != null) {
    onExited = callbacks.onExited;
  }
  importDefault = useRef(onExited);
  const effect = obj5.useEffect(() => {
    const callbacks = modal.callbacks;
    let onExited;
    const tmp = closure_1;
    if (callbacks != null) {
      onExited = callbacks.onExited;
    }
    tmp.current = onExited;
  });
  const effect1 = obj5.useEffect(() => {
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
  const layoutEffect = obj5.useLayoutEffect(() => {
    const obj = modal(dependencyMap[14]);
    return obj.trackAppUIViewed("ModalScreen");
  }, []);
  const items = [absoluteFillObject.absoluteFillObject, , ];
  let containerWithPadding;
  if (!isIpadOSResult) {
    containerWithPadding = tmp7.containerWithPadding;
  }
  items[1] = containerWithPadding;
  items[2] = styles.container;
  const obj6 = { style: items, onAccessibilityEscape: pop, children: closure_10(SafeAreaProvider, { children: items4 }) };
  if (modal.closable) {
    pop = ModalActionCreatorsDefault.pop;
  } else {
    pop = NOOP;
  }
  const obj7 = { style: items1, children: items3 };
  items1 = [tmp7.content, styles.content];
  const obj8 = { style: items2, collapsable: null == styles.container, children: null };
  items2 = [tmp7.content, styles.body];
  SafeAreaProvider = tmp12(16749).SafeAreaProvider;
  const createElement = obj5.createElement;
  const modal2 = modal.modal;
  const merged = Object.assign(tmp9);
  items3 = [closure_9(closure_6, obj8), ];
  let tmp18Result = null;
  if (null != styles.container) {
    const obj10 = { style: styles.border, pointerEvents: "none" };
    tmp18Result = tmp18(tmp19, obj10);
  }
  items3[1] = tmp18Result;
  items4 = [closure_10(closure_6, obj7), ];
  const tmp12Result = modal(1377);
  items4[1] = tmp12Result.isIOS() && closure_9(modal(12564).PortalKeyboardRenderer, { portal: false });
  tmp12Result.isIOS() && closure_9(modal(12564).PortalKeyboardRenderer, { portal: false });
  return closure_9(closure_6, obj6);
};
