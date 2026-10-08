// Module ID: 6441
// Function ID: 6442
// Name: LegacyRefreshControl
// Dependencies: [32, 109, 19, 17, 21, 6440, 6331, 6368]
// Exports: LegacyFlatList

// Module 6441 (LegacyRefreshControl)
import Fragment from "Fragment" /* 21 */;
import tagMessage from "tagMessage" /* 6331 */;
import createNativeWrapperDefault from "createNativeWrapper" /* 6440 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let DrawerLayoutAndroid;
let RefreshControl;
let ScrollView;
let Switch;
let TextInput;
let metroImportDefault;
let closure_2 = ["refreshControl", "waitFor"];
let closure_3 = ["waitFor", "refreshControl"];
({ FlatList: metroImportDefault, DrawerLayoutAndroid, RefreshControl, ScrollView, Switch, TextInput } = react_native);
const jsx = Fragment.jsx;
let tmp3 = createNativeWrapperDefault(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
let closure_9 = createNativeWrapperDefault(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
class LegacyScrollView {
  constructor(arg0) {
    let cloneElementResult;
    let items;
    let refreshControl;
    let waitFor;
    const ref = react.useRef(null);
    ({ refreshControl, waitFor } = arg0);
    const obj2 = { waitFor: items, refreshControl: cloneElementResult };
    const merged = Object.assign(_objectWithoutProperties(arg0, closure_2));
    const toArray = tagMessage.toArray;
    tagMessage;
    const obj = react;
    const tmp3 = jsx;
    const tmp4 = closure_9;
    if (waitFor == null) {
      waitFor = [];
    }
    items = [];
    items[HermesBuiltin.arraySpread(items, toArray(waitFor), 0)] = ref;
    cloneElementResult = undefined;
    if (refreshControl) {
      const obj3 = { ref };
      cloneElementResult = obj.cloneElement(refreshControl, obj3);
    }
    return tmp3(tmp4, obj2);
  }
}
let tmp4 = createNativeWrapperDefault(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
let tmp5 = createNativeWrapperDefault(TextInput);

export const LegacyRefreshControl = tmp3;
export { LegacyScrollView };
export const LegacySwitch = tmp4;
export const LegacyTextInput = tmp5;
export const LegacyDrawerLayoutAndroid = createNativeWrapperDefault(DrawerLayoutAndroid, { disallowInterruption: true });
export const LegacyFlatList = (arg0) => {
  let cloneElementResult;
  let first;
  let refreshControl;
  let tmp9;
  const ref = react.useRef(null);
  ({ waitFor: dependencyMap, refreshControl } = arg0);
  let obj = {};
  const obj2 = {};
  const entries = Object.entries(_objectWithoutProperties(arg0, closure_3));
  let tmp3 = entries[Symbol.iterator]();
  while (tmp3 !== undefined) {
    [first, tmp9] = tmp4;
    let tmp8 = first;
    let nativeViewProps = ref(6368).nativeViewProps;
    if (nativeViewProps.includes(first)) {
      obj2[tmp8] = tmp9;
    } else {
      obj[tmp8] = tmp9;
    }
    continue;
  }
  const obj3 = {
    renderScrollComponent(arg0) {
      let items1;
      const obj = { waitFor: items1 };
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(obj2);
      let items = dependencyMap;
      const toArray = tagMessage.toArray;
      tagMessage;
      const tmp2 = jsx;
      const tmp3 = LegacyScrollView;
      if (dependencyMap == null) {
        items = [];
      }
      items1 = [];
      items1[HermesBuiltin.arraySpread(items1, toArray(items), 0)] = ref;
      return tmp2(tmp3, obj);
    },
    refreshControl: cloneElementResult
  };
  let merged = Object.assign(obj);
  cloneElementResult = undefined;
  const tmp14 = jsx;
  const tmp15 = closure_7;
  if (refreshControl) {
    const obj4 = { ref };
    cloneElementResult = react.cloneElement(refreshControl, obj4);
  }
  return tmp14(tmp15, obj3);
};
