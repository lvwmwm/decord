// Module ID: 12223
// Function ID: 95592
// Name: ImageButton
// Dependencies: [31, 27, 33, 4130, 4547, 689, 4548, 3991, 4542, 4546, 4550, 7534, 4126, 2]

// Module 12223 (ImageButton)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2) => {
  let MEDIUM_BUTTON_PADDING = require(4547) /* getButtonPadding */.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = require(4547) /* getButtonPadding */.SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = require(4547) /* getButtonPadding */.MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  let obj = {};
  obj = { paddingBottom: importDefault(689).space.PX_4, gap: importDefault(689).space.PX_8, alignItems: "center", alignSelf: "center" };
  let num = 0;
  if (arg2) {
    num = 1;
  }
  obj.flexGrow = num;
  obj.labelPressable = obj;
  obj = { paddingHorizontal: 0, paddingVertical: 0, minHeight: sum, minWidth: sum, borderRadius: importDefault(689).radii.round };
  obj.pill = obj;
  obj.imageWrapper = { width: sum, height: sum, position: "relative" };
  obj.image = { width: sum, height: sum };
  const obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: importDefault(689).colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND, borderRadius: importDefault(689).radii.round };
  obj.imageDim = obj1;
  return obj;
});
let closure_9 = { code: "function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}" };
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
  const onPressOut = size.onPressOut;
  let obj = { size: 0, label: 0, grow: 0, image: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, onPressIn: 0, onPressOut: 0 };
  ({ grow, image } = size);
  Object.setPrototypeOf(null);
  const merged = Object.assign(size, obj);
  let sharedValue;
  let obj1 = onPressIn(sharedValue[6]);
  const tmp3 = callback3(str, obj1.useIconSizeStyles(str, true, maxFontSizeMultiplier).width, grow);
  let obj2 = onPressIn(sharedValue[7]);
  sharedValue = obj2.useSharedValue(0);
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
  let obj3 = onPressIn(sharedValue[7]);
  const fn = function w() {
    const obj = {};
    let num = 0;
    if (1 === sharedValue.get()) {
      num = 1;
    }
    obj.opacity = onPressIn(sharedValue[8]).withSpring(num, onPressIn(sharedValue[9]).ON_PRESS_SPRING, "animate-always");
    return obj;
  };
  obj = { withSpring: onPressIn(sharedValue[8]).withSpring, pressed: sharedValue, ON_PRESS_SPRING: onPressIn(sharedValue[9]).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 17257158773379;
  fn.__initData = closure_9;
  obj = { style: tmp3.imageWrapper };
  obj1 = { source: image, style: tmp3.image };
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [callback(closure_5, obj1), ];
  const items3 = [tmp3.imageDim, animatedStyle];
  items2[1] = callback(onPressOut(sharedValue[7]).View, { style: items3 });
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
    const items4 = [callback(onPressIn(sharedValue[11]).BaseIconButton, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items4[1] = callback(onPressIn(sharedValue[12]).Text, obj4);
    obj2["children"] = items4;
    let tmp19 = callback2(onPressIn(sharedValue[10]).BaseButton, obj2);
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
    tmp19 = callback(onPressIn(sharedValue[11]).BaseIconButton, obj5);
  }
  return tmp19;
});
let result = require("jsxProd").fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = forwardRefResult;
