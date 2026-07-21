// Module ID: 12078
// Function ID: 93163
// Name: ImageButton
// Dependencies: []

// Module 12078 (ImageButton)
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles((arg0, arg1, arg2) => {
  let MEDIUM_BUTTON_PADDING = arg1(dependencyMap[4]).LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = arg1(dependencyMap[4]).SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = arg1(dependencyMap[4]).MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  let obj = {};
  obj = { paddingBottom: importDefault(dependencyMap[5]).space.PX_4, gap: importDefault(dependencyMap[5]).space.PX_8, alignItems: "center", alignSelf: "center" };
  let num = 0;
  if (arg2) {
    num = 1;
  }
  obj.flexGrow = num;
  obj.labelPressable = obj;
  obj = { width: -536870861, marginHorizontal: -299892737, minHeight: sum, minWidth: sum, borderRadius: importDefault(dependencyMap[5]).radii.round };
  obj.pill = obj;
  obj.imageWrapper = { width: sum, height: sum, position: "relative" };
  obj.image = { width: sum, height: sum };
  const obj1 = { o: "center", concat: null, o: 4, borderRadius: importDefault(dependencyMap[5]).radii.round, position: "rgba(0, 0, 0, 0.75)", backgroundColor: importDefault(dependencyMap[5]).colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND };
  obj.imageDim = obj1;
  return obj;
});
let closure_9 = { code: "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}" };
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((size, ref) => {
  let accessibilityLabel;
  let grow;
  let image;
  let label;
  let maxFontSizeMultiplier;
  let onPressIn;
  let str = size.size;
  if (str === undefined) {
    str = "lg";
  }
  ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
  ref = onPressIn;
  const onPressOut = size.onPressOut;
  const importDefault = onPressOut;
  let obj = { ip: null, op: 0.6, st: "BounceOutRight", bm: null, channel: 0.6, ddd: "BounceOutLeft", ind: null, ty: 0.6 };
  ({ grow, image } = size);
  Object.setPrototypeOf(null);
  const merged = Object.assign(size, obj);
  let dependencyMap;
  let obj1 = ref(dependencyMap[6]);
  const tmp3 = callback3(str, obj1.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  let obj2 = ref(dependencyMap[7]);
  const sharedValue = obj2.useSharedValue(0);
  dependencyMap = sharedValue;
  const items = [sharedValue, onPressIn];
  const callback = importAllResult.useCallback((arg0) => {
    const result = sharedValue.set(1);
    if (null != onPressIn) {
      onPressIn(arg0);
    }
  }, items);
  const items1 = [sharedValue, onPressOut];
  const callback1 = importAllResult.useCallback((arg0) => {
    const result = sharedValue.set(0);
    if (null != onPressOut) {
      onPressOut(arg0);
    }
  }, items1);
  let obj3 = ref(dependencyMap[7]);
  const fn = function w() {
    const obj = {};
    let num = 0;
    if (1 === sharedValue.get()) {
      num = 1;
    }
    obj.opacity = onPressIn(sharedValue[8]).withSpring(num, onPressIn(sharedValue[9]).ON_PRESS_SPRING, "animate-always");
    return obj;
  };
  obj = { withSpring: ref(dependencyMap[8]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: ref(dependencyMap[9]).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17257158773379;
  fn.__initData = closure_9;
  obj = { style: tmp3.imageWrapper };
  obj1 = { source: image, style: tmp3.image };
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [callback(closure_5, obj1), ];
  const items3 = [tmp3.imageDim, animatedStyle];
  items2[1] = callback(importDefault(dependencyMap[7]).View, { style: items3 });
  obj.children = items2;
  const tmp8 = callback2(closure_4, obj);
  if (null != label) {
    obj2 = { style: tmp3.labelPressable };
    const merged1 = Object.assign(merged);
    obj2["variant"] = "none";
    obj2["accessibilityLabel"] = accessibilityLabel;
    obj3 = { ref };
    const merged2 = Object.assign(merged);
    obj3["icon"] = tmp8;
    obj3["accessibilityRole"] = "none";
    obj3["accessibilityLabel"] = "";
    obj3["size"] = "lg";
    obj3["pillStyle"] = tmp3.pill;
    obj3["variant"] = "secondary";
    obj3["onPressIn"] = callback;
    obj3["onPressOut"] = callback1;
    obj3["maxFontSizeMultiplier"] = maxFontSizeMultiplier;
    const items4 = [callback(ref(dependencyMap[11]).BaseIconButton, obj3), ];
    const obj4 = { maxFontSizeMultiplier, children: label };
    items4[1] = callback(ref(dependencyMap[12]).Text, obj4);
    obj2["children"] = items4;
    let tmp19 = callback2(ref(dependencyMap[10]).BaseButton, obj2);
  } else {
    const obj5 = { ref };
    const merged3 = Object.assign(merged);
    obj5["size"] = str;
    obj5["icon"] = tmp8;
    obj5["accessibilityLabel"] = accessibilityLabel;
    obj5["pillStyle"] = tmp3.pill;
    obj5["variant"] = "secondary";
    obj5["onPressIn"] = callback;
    obj5["onPressOut"] = callback1;
    tmp19 = callback(ref(dependencyMap[11]).BaseIconButton, obj5);
  }
  return tmp19;
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = forwardRefResult;
