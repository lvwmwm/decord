// Module ID: 16694
// Function ID: 16695
// Name: modal/ModalScreen
// Dependencies: [109, 19, 17, 1074, 21, 4836, 576, 5039, 8230, 1249, 6895, 1613, 16695, 1364, 16292, 2]
// Exports: default

// Module 16694 (modal/ModalScreen)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8230 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let closure_1;
  let impressionName;
  let impressionProperties;
  let items2;
  let left;
  let pop;
  let right;
  const modal = route.route.params.modal;
  importDefault = undefined;
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
  let obj = { type: modal(1249).ImpressionTypes.MODAL, name: impressionName, properties: impressionProperties };
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
  const items = [absoluteFillObject.absoluteFillObject, ];
  let tmp16;
  const tmp14 = closure_10;
  const tmp15 = closure_6;
  const tmp7Result = modal(16695);
  if (!tmp7Result.shouldExcludeSafeAreaForModalKey(modal.key)) {
    const items1 = [tmp.containerWithPadding, ];
    const obj3 = { paddingLeft: left, paddingRight: right };
    items1[1] = obj3;
    tmp16 = items1;
  }
  const obj4 = { style: items, onAccessibilityEscape: pop, children: items2 };
  items[1] = tmp16;
  if (modal.closable) {
    pop = tmp4(5039).pop;
  } else {
    pop = NOOP;
  }
  const createElement = obj2.createElement;
  const modal2 = modal.modal;
  const merged = Object.assign(tmp2);
  items2 = [<modal2 style={undefined} transitionState={null} onClose={callback} />, ];
  const tmp7Result2 = modal(1364);
  items2[1] = tmp7Result2.isIOS() && closure_9(tmp7(16292).PortalKeyboardRenderer, { portal: false });
  const isIOSResult = tmp7Result2.isIOS() && closure_9(tmp7(16292).PortalKeyboardRenderer, { portal: false });
  return tmp14(tmp15, obj4);
};
