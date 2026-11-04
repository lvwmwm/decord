// Module ID: 5533
// Function ID: 5534
// Name: RefreshControl
// Dependencies: [32, 109, 19, 17, 21, 5439, 5440, 5461, 5534, 5499]
// Exports: FlatList

// Module 5533 (RefreshControl)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import GestureDetectorType from "GestureDetectorType" /* 5440 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native from "react-native" /* 17 */;
import createNativeWrapper_mod from "createNativeWrapper" /* 5439 */;

const require = globalThis.__r;
const react = react2;

let RefreshControl;
let ScrollView2;
let Switch;
let TextInput;
let metroImportAll;
let closure_2 = ["children", "refreshControl", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER", "keyboardShouldPersistTaps"];
let closure_3 = ["refreshControl", "ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
const useState = react2.useState;
({ FlatList: metroImportAll, RefreshControl, ScrollView: ScrollView2, Switch, TextInput } = react_native);
const jsx = Fragment.jsx;
let createNativeWrapper = createNativeWrapper_mod;
const importDefaultResultResult = createNativeWrapper(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false }, GestureDetectorType.GestureDetectorType.Virtual);
createNativeWrapper = createNativeWrapper_mod;
let closure_10 = createNativeWrapper(ScrollView2, { disallowInterruption: true, shouldCancelWhenOutside: false }, GestureDetectorType.GestureDetectorType.Intercepting);
class ScrollView {
  constructor(children) {
    let block;
    let cloneElementResult;
    let keyboardShouldPersistTaps;
    let obj2;
    let refreshControl;
    let tmp5;
    ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require, keyboardShouldPersistTaps } = children);
    children = children.children;
    let tmp = _objectWithoutProperties(children, closure_2);
    [block, closure_2] = useState(null);
    let tmp4 = jsx;
    let obj = { keyboardShouldPersistTaps, children: tmp4(tmp5, obj2) };
    obj2 = {
      ref: children.ref,
      keyboardShouldPersistTaps,
      disableScrollViewPanResponder: "handled" === keyboardShouldPersistTaps || tmp.disableScrollViewPanResponder,
      onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER(arg0) {
        const handlerTag = arg0;
        const obj = require("ghQueueMicrotask");
        obj.ghQueueMicrotask(() => {
          const tmp = first && first.handlerTag === handlerTag.handlerTag;
          if (!tmp) {
            closure_2(handlerTag);
            const tmp4 = handlerTag;
            if (require != null) {
              require(tmp4);
            }
          }
        });
      },
      refreshControl: cloneElementResult,
      children
    };
    const ScrollViewResponderProvider = require("ScrollViewResponderProvider").ScrollViewResponderProvider;
    const merged = Object.assign(tmp);
    cloneElementResult = undefined;
    tmp5 = closure_10;
    if (refreshControl) {
      let obj4;
      const cloneElement = react.cloneElement;
      if (block) {
        obj4 = { block };
        const obj3 = { block };
      } else {
        obj4 = {};
      }
      cloneElementResult = cloneElement(refreshControl, obj4);
    }
    return tmp4(ScrollViewResponderProvider, obj);
  }
}
let tmp6 = createNativeWrapper(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
const RefreshControl_export = importDefaultResultResult;
const Switch_export = tmp6;
const TextInput_export = createNativeWrapper(TextInput);

export { RefreshControl_export as RefreshControl };
export { ScrollView };
export { Switch_export as Switch };
export { TextInput_export as TextInput };
export const FlatList = (ref) => {
  let cloneElementResult;
  let obj2;
  let refreshControl;
  let updateGesture;
  ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require } = ref);
  ref = ref.ref;
  let tmp = _objectWithoutProperties(ref, updateGesture);
  const tmp2 = obj2(useState(null), 2);
  const block = tmp2[0];
  closure_2 = tmp2[1];
  updateGesture = function updateGesture(arg0) {
    const handlerTag = arg0;
    const obj = require("ghQueueMicrotask");
    obj.ghQueueMicrotask(() => {
      const tmp = first && first.handlerTag === handlerTag.handlerTag;
      if (!tmp) {
        closure_2(handlerTag);
        const tmp4 = handlerTag;
        if (require != null) {
          require(tmp4);
        }
      }
    });
  };
  let obj = {};
  obj2 = {};
  const entries = Object.entries(tmp);
  for (const item10028 of entries) {
    let tmp6 = obj2(item10028, 2);
    let first1 = tmp6[0];
    let tmp8 = first1;
    let tmp9 = tmp6[1];
    let NativeWrapperProps = require("module_5499").NativeWrapperProps;
    if (NativeWrapperProps.has(first1)) {
      obj2[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  const obj3 = {
    ref,
    renderScrollComponent(arg0) {
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      return <ScrollView onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER={updateGesture} />;
    },
    refreshControl: cloneElementResult
  };
  let merged = Object.assign(obj);
  cloneElementResult = undefined;
  const tmp14 = jsx;
  const tmp15 = closure_8;
  if (refreshControl) {
    let obj5;
    const cloneElement = react.cloneElement;
    if (block) {
      obj5 = { block };
      const obj4 = { block };
    } else {
      obj5 = {};
    }
    cloneElementResult = cloneElement(refreshControl, obj5);
  }
  return tmp14(tmp15, obj3);
};
