// Module ID: 4515
// Function ID: 39734
// Name: TabsHost
// Dependencies: [57, 29, 31, 27, 33, 4516, 4491, 4517, 4518, 4520]
// Exports: default

// Module 4515 (TabsHost)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import { useState } from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let closure_8;
let closure_9;
let jsx;
const require = arg1;
let closure_3 = ["onNativeFocusChange", "experimentalControlNavigationStateInJS", "bottomAccessory", "nativeContainerStyle"];
({ Platform, StyleSheet, findNodeHandle: closure_8 } = get_ActivityIndicator);
({ jsx, jsxs: closure_9 } = jsxProd);
const styles = StyleSheet.create({ fillParent: { flex: 1, width: "100%", height: "100%" } });

export default function TabsHost(onNativeFocusChange) {
  let bottomAccessory;
  let nativeContainerStyle;
  let obj = onNativeFocusChange(4516);
  obj.bottomTabsDebugLog("TabsHost render");
  onNativeFocusChange = onNativeFocusChange.onNativeFocusChange;
  let controlledBottomTabs = onNativeFocusChange.experimentalControlNavigationStateInJS;
  if (undefined === controlledBottomTabs) {
    controlledBottomTabs = ref(4491).experiment.controlledBottomTabs;
  }
  ({ bottomAccessory, nativeContainerStyle } = onNativeFocusChange);
  const tmp4 = callback2(onNativeFocusChange, closure_3);
  ref = React.useRef(null);
  const dependencyMap = React.useRef(-1);
  const effect = React.useEffect(() => {
    if (null != ref.current) {
      const tmp5 = outer1_8(ref.current);
      let num2 = -1;
      if (null != tmp5) {
        num2 = tmp5;
      }
      closure_2.current = num2;
      const tmp2 = closure_2;
    } else {
      closure_2.current = -1;
    }
  }, []);
  const items = [onNativeFocusChange];
  const callback = React.useCallback((nativeEvent) => {
    const current = ref.current;
    let num = -1;
    if (null != current) {
      num = current;
    }
    onNativeFocusChange(ref[5]).bottomTabsDebugLog("TabsHost [" + num + "] onNativeFocusChange: " + JSON.stringify(nativeEvent.nativeEvent));
    if (null != onNativeFocusChange) {
      onNativeFocusChange(nativeEvent);
    }
  }, items);
  callback(useState("regular"), 2);
  obj = { style: fillParent.fillParent, onNativeFocusChange: callback, controlNavigationStateInJS: controlledBottomTabs };
  let backgroundColor;
  if (null != nativeContainerStyle) {
    backgroundColor = nativeContainerStyle.backgroundColor;
  }
  obj.nativeContainerBackgroundColor = backgroundColor;
  obj.ref = ref;
  obj = {};
  const items1 = [tmp4.children, ];
  if (bottomAccessory) {
    bottomAccessory = false;
  }
  items1[1] = bottomAccessory;
  obj.children = items1;
  return closure_9(ref(4517), Object.assign(obj, tmp4, obj));
};
