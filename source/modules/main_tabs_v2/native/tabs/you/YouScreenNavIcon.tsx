// Module ID: 15354
// Function ID: 116931
// Name: str2
// Dependencies: []

// Module 15354 (str2)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5, Fragment: closure_6 } = arg1(dependencyMap[2]));
let obj1 = arg1(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
const ICON_SIZE = arg1(dependencyMap[4]).ICON_SIZE;
const tmp4 = obj1.isYouNavFloating() ? ICON_SIZE.md : ICON_SIZE.sm;
let obj2 = arg1(dependencyMap[3]);
let str = "sm";
if (obj2.isYouNavFloating()) {
  str = "md";
}
const result = (importDefault(dependencyMap[5]).space.PX_32 - tmp4) / 2;
let obj3 = arg1(dependencyMap[3]);
const isYouNavFloatingResult = obj1.isYouNavFloating();
const colors = importDefault(dependencyMap[5]).colors;
let closure_8 = obj3.isYouNavFloating() ? colors.TEXT_DEFAULT : colors.WHITE;
let obj4 = arg1(dependencyMap[3]);
let str2 = "text-overlay-light";
if (obj4.isYouNavFloating()) {
  str2 = "text-default";
}
let obj5 = arg1(dependencyMap[3]);
let num = 6;
if (obj5.isYouNavFloating()) {
  num = 8;
}
let obj6 = arg1(dependencyMap[3]);
let num2 = 2;
if (obj6.isYouNavFloating()) {
  num2 = 4;
}
let obj = { shape: arg1(dependencyMap[6]).CutoutShape.Circle, x: tmp4 - num - num2, y: -num2, size: num + 2 * num2 };
const items = [obj];
const isYouNavFloatingResult1 = obj3.isYouNavFloating();
obj = {};
obj1 = {};
const obj9 = arg1(dependencyMap[7]);
let prop;
if (!obj12.isYouNavFloating()) {
  prop = importDefault(dependencyMap[5]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
}
obj1.backgroundColor = prop;
obj1.borderRadius = importDefault(dependencyMap[5]).modules.button.BORDER_RADIUS;
obj1.marginHorizontal = importDefault(dependencyMap[5]).space.PX_4;
const obj12 = arg1(dependencyMap[3]);
let str3 = "row";
if (obj13.isYouNavFloating()) {
  str3 = "column";
}
obj1.flexDirection = str3;
obj1.alignItems = "center";
obj1.padding = result;
const obj13 = arg1(dependencyMap[3]);
obj1.overflow = "hidden";
obj.container = obj1;
obj2 = {};
const obj14 = arg1(dependencyMap[3]);
let PX_4;
if (!obj16.isYouNavFloating()) {
  PX_4 = importDefault(dependencyMap[5]).space.PX_4;
}
obj2.marginLeft = PX_4;
const obj16 = arg1(dependencyMap[3]);
let PX_41;
if (obj17.isYouNavFloating()) {
  PX_41 = importDefault(dependencyMap[5]).space.PX_4;
}
obj2.marginTop = PX_41;
obj.label = obj2;
obj3 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: importDefault(dependencyMap[5]).radii.round, height: num, width: num, position: "absolute", right: 0, top: 0 };
obj.dot = obj3;
obj4 = { getFieldErrors: false, convertSurrogateToName: false, GameDepthTier5SmallBadge: false, es-EC: false, scale: false, backgroundColor: importDefault(dependencyMap[5]).colors.WHITE };
const items1 = [{ rotate: "30deg" }];
obj4.transform = items1;
obj.nitroSlant = obj4;
obj5 = { width: importDefault(dependencyMap[5]).space.PX_12, left: "75%" };
obj.nitroSlantLarge = obj5;
obj6 = { width: importDefault(dependencyMap[5]).space.PX_8, left: "45%" };
obj.nitroSlantSmall = obj6;
let closure_11 = obj9.createStyles(obj);
const obj17 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(importAllResult.forwardRef((showRedDot, ref) => {
  let IconComponent;
  let accessibilityLabel;
  let label;
  let onPress;
  let showNitroSlant;
  ({ accessibilityLabel, label, showNitroSlant } = showRedDot);
  ({ onPress, IconComponent } = showRedDot);
  if (showNitroSlant === undefined) {
    showNitroSlant = false;
  }
  let flag = showRedDot.showRedDot;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  let obj = { size: str, color: closure_8 };
  const tmp2 = callback(IconComponent, obj);
  let tmp3 = tmp2;
  if (flag) {
    obj = {};
    obj = { cutouts: items, children: tmp2 };
    const items = [callback(importDefault(dependencyMap[6]), obj), ];
    const obj1 = { style: tmp.dot };
    items[1] = callback(View, obj1);
    obj.children = items;
    tmp3 = callback2(View, obj);
  }
  let tmp10;
  if (flag) {
    const obj2 = {};
    const intl = ref(dependencyMap[8]).intl;
    obj2.text = intl.string(ref(dependencyMap[8]).t.y2b7CA);
    tmp10 = obj2;
  }
  const obj3 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: importDefault(dependencyMap[5]).space.PX_8 };
  if (showNitroSlant) {
    let obj6 = ref(dependencyMap[3]);
    showNitroSlant = !obj6.isYouNavFloating();
  }
  if (showNitroSlant) {
    const obj4 = {};
    const obj5 = {};
    const items1 = [, ];
    ({ nitroSlant: arr2[0], nitroSlantSmall: arr2[1] } = tmp);
    obj5.style = items1;
    const items2 = [callback(View, obj5), ];
    obj6 = {};
    const items3 = [, ];
    ({ nitroSlant: arr4[0], nitroSlantLarge: arr4[1] } = tmp);
    obj6.style = items3;
    items2[1] = callback(View, obj6);
    obj4.children = items2;
    showNitroSlant = callback2(closure_6, obj4);
  }
  const items4 = [showNitroSlant, tmp3, ];
  if (null != label) {
    const obj7 = { style: tmp.label };
    let str = "text-sm/semibold";
    if (obj13.isYouNavFloating()) {
      str = "text-xs/semibold";
    }
    obj7.variant = str;
    obj7.color = str2;
    obj7.maxFontSizeMultiplier = 2;
    if (null != label) {
      accessibilityLabel = label;
    }
    obj7.children = accessibilityLabel;
    let tmp23Result = callback(ref(dependencyMap[10]).Text, obj7);
    const obj13 = ref(dependencyMap[3]);
    const tmp23 = callback;
  } else {
    tmp23Result = null;
    const obj11 = ref(dependencyMap[3]);
  }
  items4[2] = tmp23Result;
  obj3.children = items4;
  return callback2(ref(dependencyMap[9]).PressableScale, obj3);
}));
const result1 = arg1(dependencyMap[11]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;
