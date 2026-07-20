// Module ID: 4507
// Function ID: 39638
// Name: TabsHost
// Dependencies: []
// Exports: default

// Module 4507 (TabsHost)
let Platform;
let StyleSheet;
let jsx;
let closure_3 = [true, true, true, true];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const useState = arg1(dependencyMap[2]).useState;
({ Platform, StyleSheet, findNodeHandle: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx, jsxs: closure_9 } = arg1(dependencyMap[4]));
const styles = StyleSheet.create({ fillParent: { 9223372036854775807: "y", 9223372036854775807: "URF_ENTER_EMAIL", 9223372036854775807: "MASTERPASS_BROWSER_NOT_SUPPORTED" } });

export default function TabsHost(onNativeFocusChange) {
  let bottomAccessory;
  let nativeContainerStyle;
  let obj = arg1(closure_2[5]);
  obj.bottomTabsDebugLog("TabsHost render");
  onNativeFocusChange = onNativeFocusChange.onNativeFocusChange;
  const arg1 = onNativeFocusChange;
  let controlledBottomTabs = onNativeFocusChange.experimentalControlNavigationStateInJS;
  if (undefined === controlledBottomTabs) {
    controlledBottomTabs = importDefault(closure_2[6]).experiment.controlledBottomTabs;
  }
  ({ bottomAccessory, nativeContainerStyle } = onNativeFocusChange);
  const tmp4 = callback2(onNativeFocusChange, closure_3);
  const ref = React.useRef(null);
  const importDefault = ref;
  closure_2 = React.useRef(-1);
  const effect = React.useEffect(() => {
    if (null != ref.current) {
      const tmp5 = callback(ref.current);
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
  return closure_9(importDefault(closure_2[7]), Object.assign(obj, tmp4, obj));
};
