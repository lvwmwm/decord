// Module ID: 17344
// Function ID: 17345
// Name: modal/ModalScreen
// Dependencies: [109, 19, 17, 1074, 21, 4788, 576, 4991, 9080, 1249, 7749, 1612, 17345, 1364, 16980, 2]
// Exports: default

// Module 17344 (modal/ModalScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useTrackImpressionDefault from "useTrackImpression" /* 9080 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = ["impressionName", "impressionProperties"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4788);
const obj2 = { containerWithPadding: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  const modal = route.route.params.modal;
  importDefault = undefined;
  let props = modal.props;
  if (props == null) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp = closure_11();
  const callback = noop.useCallback(() => {
    closure_1(4991).pop();
  }, []);
  const obj = { type: null, name: null, properties: null };
  const tmp2 = _objectWithoutProperties(props, closure_3);
  obj.type = modal(1249).ImpressionTypes.MODAL;
  obj.name = impressionName;
  obj.properties = impressionProperties;
  useTrackImpressionDefault(obj);
  let callbacks = modal.callbacks;
  let onExited;
  if (callbacks != null) {
    onExited = callbacks.onExited;
  }
  importDefault = noop.useRef(onExited);
  const effect = obj2.useEffect(() => {
    const callbacks = modal.callbacks;
    let onExited;
    if (callbacks != null) {
      onExited = callbacks.onExited;
    }
    closure_1.current = onExited;
  });
  const effect1 = obj2.useEffect(() => () => {
    const current = ref.current;
    let currentResult;
    if (current != null) {
      currentResult = current();
    }
    return currentResult;
  }, []);
  const layoutEffect = obj2.useLayoutEffect(() => modal(7749).trackAppUIViewed("ModalScreen"), []);
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp13 = useSafeAreaInsetsDefault();
  const items = [absoluteFillObject.absoluteFillObject, ];
  let tmp16;
  if (!tmp7Result.shouldExcludeSafeAreaForModalKey(modal.key)) {
    const items1 = [tmp.containerWithPadding, ];
    const obj3 = { paddingLeft: left, paddingRight: right };
    items1[1] = obj3;
    tmp16 = items1;
  }
  const obj4 = { style: items, onAccessibilityEscape: null, children: null };
  items[1] = tmp16;
  if (modal.closable) {
    let pop = tmp4(4991).pop;
  } else {
    pop = NOOP;
  }
  obj4.onAccessibilityEscape = pop;
  const obj5 = {};
  const merged = Object.assign(tmp2);
  obj5.style = undefined;
  obj5.transitionState = null;
  obj5.onClose = callback;
  const items2 = [<modal.modal />, ];
  const tmp14 = closure_10;
  const tmp15 = closure_6;
  tmp7Result = modal(17345);
  let isIOSResult = modal(1364).isIOS();
  if (isIOSResult) {
    isIOSResult = closure_9(tmp7(16980).PortalKeyboardRenderer, { portal: false });
  }
  items2[1] = isIOSResult;
  obj4.children = items2;
  return tmp14(tmp15, obj4);
};
