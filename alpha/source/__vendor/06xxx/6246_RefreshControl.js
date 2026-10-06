// Module ID: 6246
// Function ID: 6247
// Name: RefreshControl
// Dependencies: [32, 109, 19, 17, 21, 6159, 6160, 6179, 6219, 6215]
// Exports: FlatList

// Module 6246 (RefreshControl)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import GestureDetectorType from "GestureDetectorType" /* 6160 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6215 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native from "react-native" /* 17 */;
import createNativeWrapper_mod from "createNativeWrapper" /* 6159 */;

const require = globalThis.__r;
const react = react2;

let RefreshControl;
let ScrollView2;
let Switch;
let TextInput;
let c9;
let closure_3 = ["children", "refreshControl", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER", "keyboardShouldPersistTaps"];
let closure_4 = ["refreshControl", "ref", "onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER"];
const useState = react2.useState;
({ FlatList: c9, RefreshControl, ScrollView: ScrollView2, Switch, TextInput } = react_native);
const jsx = Fragment.jsx;
let createNativeWrapper = createNativeWrapper_mod;
const importDefaultResultResult = createNativeWrapper(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false }, GestureDetectorType.GestureDetectorType.Virtual);
createNativeWrapper = createNativeWrapper_mod;
let closure_11 = createNativeWrapper(ScrollView2, { disallowInterruption: true, shouldCancelWhenOutside: false }, GestureDetectorType.GestureDetectorType.Intercepting);
class ScrollView {
  constructor(children) {
    let block;
    let cloneElementResult;
    let closure_2;
    let keyboardShouldPersistTaps;
    let refreshControl;
    ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require, keyboardShouldPersistTaps } = children);
    children = children.children;
    let tmp = _objectWithoutProperties(children, closure_3);
    [block, dependencyMap] = useState(null);
    let tmp4 = jsx;
    let obj = {
      ref: children.ref,
      keyboardShouldPersistTaps,
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
      children: tmp4(block(6219), { keyboardShouldPersistTaps, children })
    };
    const merged = Object.assign(tmp);
    cloneElementResult = undefined;
    const tmp5 = closure_11;
    if (refreshControl) {
      let obj3;
      const cloneElement = react.cloneElement;
      if (block) {
        obj3 = { block };
        const obj2 = { block };
      } else {
        obj3 = {};
      }
      cloneElementResult = cloneElement(refreshControl, obj3);
    }
    return tmp4(tmp5, obj);
  }
}
const tmp6 = createNativeWrapper(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
const RefreshControl_export = importDefaultResultResult;
const Switch_export = tmp6;
const TextInput_export = createNativeWrapper(TextInput);

export { RefreshControl_export as RefreshControl };
export { ScrollView };
export { Switch_export as Switch };
export { TextInput_export as TextInput };
export const FlatList = (ref) => {
  let block;
  let cloneElementResult;
  let closure_2;
  let first1;
  let obj2;
  let refreshControl;
  let tmp9;
  ({ refreshControl, onGestureUpdate_CAN_CAUSE_INFINITE_RERENDER: require } = ref);
  ref = ref.ref;
  let tmp = _objectWithoutProperties(ref, obj2);
  [block, dependencyMap] = useState(null);
  function updateGesture(arg0) {
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
  }
  let obj = {};
  obj2 = {};
  const entries = Object.entries(tmp);
  for (const item10028 of entries) {
    [first1, tmp9] = item10028;
    let tmp8 = first1;
    let NativeWrapperProps = maybeExtractNativeEvent.NativeWrapperProps;
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
  const tmp15 = closure_9;
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
