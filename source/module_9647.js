// Module ID: 9647
// Function ID: 75155
// Dependencies: []

// Module 9647
const tmp2 = arg1(dependencyMap[1]);
({ Pressable: closure_3, View: closure_4 } = tmp2);
const DRAG_HANDLE = arg1(dependencyMap[2]).DRAG_HANDLE;
const jsx = arg1(dependencyMap[3]).jsx;
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj["backgroundColor"] = "transparent";
obj["height"] = DRAG_HANDLE.slotHeight;
obj["alignItems"] = "center";
obj["bottom"] = undefined;
obj.headerHandleWrap = obj;
obj1 = { backgroundColor: DRAG_HANDLE.barColor, borderRadius: importDefault(dependencyMap[5]).radii.xs, marginTop: DRAG_HANDLE.barMarginTop, height: DRAG_HANDLE.barHeight, width: DRAG_HANDLE.barWidth };
obj.dragHandleBar = obj1;
let closure_6 = obj1.createStyles(obj);
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function MediaKeyboardBottomSheetHandle(onPress) {
  onPress = onPress.onPress;
  const tmp = callback();
  let obj = arg1(dependencyMap[6]);
  const gradientBottom = obj.useGradientBottom();
  let obj1 = arg1(dependencyMap[8]);
  const derivedStateFromSharedValue = obj1.useDerivedStateFromSharedValue(onPress.animatedIndex, (arg0) => arg0 > 0);
  const intl = arg1(dependencyMap[9]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[9]).t;
  if (derivedStateFromSharedValue) {
    let stringResult = string(t.iTcuma);
  } else {
    stringResult = string(t.dcl9MQ);
  }
  if (tmp3) {
    obj = { onPress, accessibilityLabel: stringResult, aria-hidden: null == onPress };
    let tmp6Result = tmp6(arg1(dependencyMap[10]).ActionSheetDragHandle, obj);
  } else {
    obj = { accessibilityLabel: stringResult, accessibilityRole: "button", aria-hidden: null == onPress };
    const items = [tmp.headerHandleWrap, gradientBottom];
    obj.style = items;
    obj.onPress = onPress;
    obj1 = { style: tmp.dragHandleBar };
    obj.children = tmp6(closure_4, obj1);
    tmp6Result = tmp6(closure_3, obj);
  }
  return tmp6Result;
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardBottomSheetHandle.tsx");

export default memoResult;
