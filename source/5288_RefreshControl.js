// Module ID: 5288
// Function ID: 45656
// Name: RefreshControl
// Dependencies: [57, 65, 29, 31, 27, 33, 5251, 5221, 5252]

// Module 5288 (RefreshControl)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let DrawerLayoutAndroid;
let RefreshControl;
let ScrollView;
let Switch;
let TextInput;
const require = arg1;
let closure_2 = ["refreshControl", "waitFor"];
let closure_3 = ["waitFor", "refreshControl"];
const FlatList = get_ActivityIndicator.FlatList;
({ ScrollView, Switch, TextInput, DrawerLayoutAndroid, RefreshControl } = get_ActivityIndicator);
let closure_10 = require("createNativeWrapper")(ScrollView, { disallowInterruption: true, shouldCancelWhenOutside: false });
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let refreshControl;
  let waitFor;
  ref = importAllResult.useRef(null);
  ({ refreshControl, waitFor } = arg0);
  let obj = { ref };
  const items = [];
  const tmp2 = callback2(arg0, closure_2);
  const tmp3 = jsx;
  const tmp4 = closure_10;
  const tmp5 = _toConsumableArray;
  if (null == waitFor) {
    waitFor = [];
  }
  const items1 = [ref];
  obj.waitFor = items.concat(tmp5(require(5221) /* hasProperty */.toArray(waitFor)), items1);
  let cloneElementResult;
  if (refreshControl) {
    obj = { ref };
    cloneElementResult = importAllResult.cloneElement(refreshControl, obj);
  }
  obj.refreshControl = cloneElementResult;
  return tmp3(tmp4, Object.assign({}, tmp2, obj));
});
let tmp3 = require("createNativeWrapper")(RefreshControl, { disallowInterruption: true, shouldCancelWhenOutside: false });
let tmp5 = require("createNativeWrapper")(Switch, { shouldCancelWhenOutside: false, shouldActivateOnStart: true, disallowInterruption: true });
let tmp6 = require("createNativeWrapper")(TextInput);

export const RefreshControl = tmp3;
export const ScrollView = forwardRefResult;
export const Switch = tmp5;
export const TextInput = tmp6;
export const DrawerLayoutAndroid = require("createNativeWrapper")(DrawerLayoutAndroid, { disallowInterruption: true });
export const FlatList = importAllResult.forwardRef((arg0, ref) => {
  let dependencyMap;
  let refreshControl;
  ref = importAllResult.useRef(null);
  ({ waitFor: dependencyMap, refreshControl } = arg0);
  let obj = {};
  obj = {};
  const entries = Object.entries(callback2(arg0, closure_3));
  while (tmp3 !== undefined) {
    let tmp5 = callback;
    let tmp6 = callback(tmp4, 2);
    let first = tmp6[0];
    let tmp8 = first;
    let tmp9 = tmp6[1];
    let tmp10 = ref;
    let tmp11 = dependencyMap;
    let nativeViewProps = ref(5252).nativeViewProps;
    if (nativeViewProps.includes(first)) {
      let tmp15 = obj;
      let tmp16 = first;
      let tmp17 = tmp9;
      obj[tmp8] = tmp9;
    } else {
      let tmp12 = obj;
      let tmp13 = first;
      let tmp14 = tmp9;
      obj[tmp8] = tmp9;
    }
    continue;
  }
  obj = { ref };
  const obj1 = {
    renderScrollComponent(CompatView, arg1) {
      const obj = {};
      const items = [];
      const items1 = [ref];
      obj.waitFor = items.concat(outer1_5(ref(outer1_1[7]).toArray(null != closure_1 ? closure_1 : [])), items1);
      return outer1_9(outer1_11, Object.assign({}, Object.assign({}, CompatView, obj, obj)));
    }
  };
  let cloneElementResult;
  if (refreshControl) {
    const obj2 = { ref };
    cloneElementResult = importAllResult.cloneElement(refreshControl, obj2);
  }
  obj1.refreshControl = cloneElementResult;
  return <FlatList {...Object.assign(obj, obj, obj1)} />;
});
