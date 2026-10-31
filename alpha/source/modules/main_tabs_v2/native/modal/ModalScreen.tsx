// Module ID: 18953
// Function ID: 18954
// Name: modal/ModalScreen
// Dependencies: [109, 19, 17, 1072, 21, 5014, 575, 6744, 6028, 1260, 7654, 1625, 7112, 4971, 18954, 16421, 1375, 12221, 2]
// Exports: default

// Module 18953 (modal/ModalScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6028 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let importDefault;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let closure_3 = ["impressionName", "impressionProperties"];
({ View: metroRequire, StyleSheet: metroImportDefault } = react_native);
const NOOP = Constants.NOOP;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { containerWithPadding: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
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
  let tmp = closure_11();
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp2 = _objectWithoutProperties(props, closure_3);
  const callback = react.useCallback(() => {
    const arr = closure_1(dependencyMap[7]);
    arr.pop();
  }, []);
  let obj = { type: modal(1260).ImpressionTypes.MODAL, name: impressionName, properties: impressionProperties };
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
    const obj = modal(dependencyMap[10]);
    return obj.trackAppUIViewed("ModalScreen");
  }, []);
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  let isIpadOSResult = tmp4(7112)();
  if (isIpadOSResult) {
    const tmp7Result = modal(4971);
    isIpadOSResult = tmp7Result.isIpadOS();
  }
  if (isIpadOSResult) {
    isIpadOSResult = "modal" === presentation;
  }
  if (!isIpadOSResult) {
    const tmp7Result3 = modal(18954);
    isIpadOSResult = tmp7Result3.shouldExcludeSafeAreaForModalKey(modal.key);
  }
  const items = [absoluteFillObject.absoluteFillObject, ];
  let tmp17;
  const tmp16 = closure_6;
  if (!isIpadOSResult) {
    const items1 = [tmp.containerWithPadding, ];
    const obj3 = { paddingLeft: left, paddingRight: right };
    items1[1] = obj3;
    tmp17 = items1;
  }
  items[1] = tmp17;
  const obj4 = { style: items, onAccessibilityEscape: pop, children: closure_10(SafeAreaProvider, { children: items2 }) };
  if (modal.closable) {
    pop = tmp4(6744).pop;
  } else {
    pop = NOOP;
  }
  SafeAreaProvider = tmp7(16421).SafeAreaProvider;
  const createElement = obj2.createElement;
  const modal2 = modal.modal;
  const merged = Object.assign(tmp2);
  items2 = [<modal2 style={undefined} transitionState={null} onClose={callback} />, ];
  const tmp7Result4 = modal(1375);
  items2[1] = tmp7Result4.isIOS() && closure_9(modal(12221).PortalKeyboardRenderer, { portal: false });
  tmp7Result4.isIOS() && closure_9(modal(12221).PortalKeyboardRenderer, { portal: false });
  return closure_9(tmp16, obj4);
};
