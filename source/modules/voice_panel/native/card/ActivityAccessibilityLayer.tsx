// Module ID: 15701
// Function ID: 120024
// Name: FocusedActivityAccessibilityLayer
// Dependencies: [2162688, 270401536, 45154304, 260308992, 737476608, 731774976, 361431040, 1029242880, 119603200, 689045504, 442368000]
// Exports: default

// Module 15701 (FocusedActivityAccessibilityLayer)
function FocusedActivityAccessibilityLayer(activityName) {
  let channelId;
  let children;
  activityName = activityName.activityName;
  ({ channelId, children } = activityName);
  const tmp = callback4();
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  const ref = React.useRef(null);
  const dependencyMap = ref;
  callback = React.useCallback(() => {
    callback(true);
  }, []);
  const callback1 = React.useCallback(() => {
    callback(false);
    let obj = callback(ref[6]);
    obj = { ref, delay: 300 };
    const result = obj.setAccessibilityFocus(obj);
  }, []);
  if (null != activityName) {
    const intl2 = callback(dependencyMap[7]).intl;
    let obj = { name: activityName };
    let formatToPlainStringResult = intl2.formatToPlainString(callback(dependencyMap[7]).t.XSfwGL, obj);
  } else {
    const intl = callback(dependencyMap[7]).intl;
    formatToPlainStringResult = intl.string(callback(dependencyMap[7]).t.KYNi2m);
  }
  obj = { style: tmp.fill };
  obj = { nativeID: "voice-panel-activity-" + channelId, accessibilityViewIsModal: first };
  let tmp15;
  if (first) {
    tmp15 = callback1;
  }
  obj.onAccessibilityEscape = tmp15;
  obj.accessibilityElementsHidden = !first;
  let str = "no-hide-descendants";
  if (first) {
    str = "auto";
  }
  obj.importantForAccessibility = str;
  obj.style = tmp.fill;
  obj.children = children;
  const items = [closure_8(callback(dependencyMap[8]).AccessibilityView, obj), ];
  const obj1 = { ref, style: absoluteFill.absoluteFill };
  let str2 = "auto";
  let str3 = "auto";
  if (first) {
    str3 = "none";
  }
  obj1.pointerEvents = str3;
  obj1.accessible = true;
  obj1.accessibilityRole = "button";
  obj1.accessibilityLabel = formatToPlainStringResult;
  const intl3 = callback(dependencyMap[7]).intl;
  obj1.accessibilityHint = intl3.string(callback(dependencyMap[7]).t.8DaKO6);
  obj1.accessibilityElementsHidden = first;
  if (first) {
    str2 = "no-hide-descendants";
  }
  obj1.importantForAccessibility = str2;
  obj1.onPress = callback;
  items[1] = closure_8(closure_4, obj1);
  obj.children = items;
  return closure_9(closure_6, obj);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ Pressable: closure_4, StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const IS_IOS = arg1(dependencyMap[3]).IS_IOS;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles({ fill: { flex: 1 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default function ActivityAccessibilityLayer(isActivityFocused) {
  let obj = Object.create(null);
  obj.isActivityFocused = 0;
  const merged = Object.assign(isActivityFocused, obj);
  obj = arg1(dependencyMap[9]);
  if (IS_IOS) {
    if (obj.useIsScreenReaderEnabled()) {
      if (isActivityFocused.isActivityFocused) {
        obj = {};
        const merged1 = Object.assign(merged);
        let children = callback3(FocusedActivityAccessibilityLayer, obj);
      }
      return children;
    }
  }
  children = merged.children;
};
