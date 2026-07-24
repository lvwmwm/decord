// Module ID: 15602
// Function ID: 120304
// Name: Modal
// Dependencies: [29, 31, 27, 653, 33, 4130, 689, 4337, 8604, 480, 6707, 1557, 15603, 477, 15491, 2]
// Exports: default

// Module 15602 (Modal)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { NOOP } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
let closure_3 = ["impressionName", "impressionProperties"];
({ View: closure_6, StyleSheet: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.containerWithPadding = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  let impressionName;
  let impressionProperties;
  let left;
  let right;
  const modal = route.route.params.modal;
  let importDefault;
  let props = modal.props;
  if (null == props) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp = _createForOfIteratorHelperLoose();
  const callback = React.useCallback(() => {
    let arr = callback(outer1_2[7]);
    arr = arr.pop();
  }, []);
  let obj = {};
  const tmp2 = callback(props, closure_3);
  obj.type = modal(480).ImpressionTypes.MODAL;
  obj.name = impressionName;
  obj.properties = impressionProperties;
  importDefault(8604)(obj);
  let callbacks = modal.callbacks;
  let onExited;
  if (null != callbacks) {
    onExited = callbacks.onExited;
  }
  importDefault = React.useRef(onExited);
  const effect = React.useEffect(() => {
    const callbacks = modal.callbacks;
    let onExited;
    if (null != callbacks) {
      onExited = callbacks.onExited;
    }
    closure_1.current = onExited;
  });
  const effect1 = React.useEffect(() => () => {
    let currentResult;
    if (null != outer1_1.current) {
      currentResult = outer1_1.current();
    }
    return currentResult;
  }, []);
  const layoutEffect = React.useLayoutEffect(() => modal(outer1_2[10]).trackAppUIViewed("ModalScreen"), []);
  const tmp5 = importDefault(8604);
  ({ left, right } = importDefault(1557)());
  let obj2 = modal(15603);
  obj = {};
  const items = [absoluteFillObject.absoluteFillObject, ];
  let tmp14;
  if (!obj2.shouldExcludeSafeAreaForModalKey(modal.key)) {
    const items1 = [tmp.containerWithPadding, ];
    const obj1 = { paddingLeft: left, paddingRight: right };
    items1[1] = obj1;
    tmp14 = items1;
  }
  items[1] = tmp14;
  obj.style = items;
  if (modal.closable) {
    let pop = importDefault(4337).pop;
  } else {
    pop = NOOP;
  }
  obj.onAccessibilityEscape = pop;
  obj2 = {};
  const merged = Object.assign(tmp2);
  obj2["style"] = undefined;
  obj2["transitionState"] = null;
  obj2["onClose"] = callback;
  const items2 = [<modal.modal />, ];
  const tmp11 = importDefault(1557)();
  const tmp12 = closure_10;
  const tmp13 = closure_6;
  let isIOSResult = modal(477).isIOS();
  if (isIOSResult) {
    const obj3 = { portal: false };
    isIOSResult = callback2(modal(15491).PortalKeyboardRenderer, obj3);
  }
  items2[1] = isIOSResult;
  obj.children = items2;
  return tmp12(tmp13, obj);
};
