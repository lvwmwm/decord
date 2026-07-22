// Module ID: 15438
// Function ID: 117808
// Name: Modal
// Dependencies: []
// Exports: default

// Module 15438 (Modal)
let closure_3 = [21644204566566740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 8594063488.00214];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ View: closure_6, StyleSheet: closure_7 } = arg1(dependencyMap[2]));
const NOOP = arg1(dependencyMap[3]).NOOP;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
obj.containerWithPadding = obj;
let closure_11 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalScreen.tsx");

export default function Modal(route) {
  let impressionName;
  let impressionProperties;
  let left;
  let right;
  const modal = route.route.params.modal;
  const arg1 = modal;
  let importDefault;
  let props = modal.props;
  if (null == props) {
    props = {};
  }
  ({ impressionName, impressionProperties } = props);
  const tmp = callback3();
  const callback = React.useCallback(() => {
    let arr = callback(closure_2[7]);
    arr = arr.pop();
  }, []);
  let obj = {};
  const tmp2 = callback(props, closure_3);
  obj.type = arg1(dependencyMap[9]).ImpressionTypes.MODAL;
  obj.name = impressionName;
  obj.properties = impressionProperties;
  importDefault(dependencyMap[8])(obj);
  const callbacks = modal.callbacks;
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
    if (null != ref.current) {
      currentResult = ref.current();
    }
    return currentResult;
  }, []);
  const layoutEffect = React.useLayoutEffect(() => modal(closure_2[10]).trackAppUIViewed("ModalScreen"), []);
  const tmp5 = importDefault(dependencyMap[8]);
  ({ left, right } = importDefault(dependencyMap[11])());
  let obj2 = arg1(dependencyMap[12]);
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
    let pop = importDefault(dependencyMap[7]).pop;
  } else {
    pop = NOOP;
  }
  obj.onAccessibilityEscape = pop;
  obj2 = {};
  const merged = Object.assign(tmp2);
  obj2["style"] = undefined;
  obj2["transitionState"] = null;
  obj2["onClose"] = callback;
  const items2 = [<modal.modal {......obj2} />, ];
  const tmp11 = importDefault(dependencyMap[11])();
  const tmp12 = closure_10;
  const tmp13 = closure_6;
  let isIOSResult = arg1(dependencyMap[13]).isIOS();
  if (isIOSResult) {
    const obj3 = { portal: false };
    isIOSResult = callback2(arg1(dependencyMap[14]).PortalKeyboardRenderer, obj3);
  }
  items2[1] = isIOSResult;
  obj.children = items2;
  return tmp12(tmp13, obj);
};
