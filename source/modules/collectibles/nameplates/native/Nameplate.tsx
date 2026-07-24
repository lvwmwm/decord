// Module ID: 8273
// Function ID: 65241
// Name: NameplateInner
// Dependencies: [31, 4122, 33, 4130, 566, 4066, 3991, 4131, 1873, 8274, 4554, 477, 8043, 5085, 2]
// Exports: default

// Module 8273 (NameplateInner)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function NameplateInner(isFocused) {
  let animatedImageUrl;
  let isPressed;
  let nameplate;
  let staticImageUrl;
  ({ nameplate, isPressed } = isFocused);
  if (isPressed === undefined) {
    isPressed = false;
  }
  let flag = isFocused.isFocused;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFocused.isMuted;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = isFocused.fullOpacity;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = isFocused.isSquarePreview;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = isFocused.invertPressOpacity;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = isFocused.fadeIn;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = isFocused.animate;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let sharedValue;
  let obj = flag6(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.useReducedMotion);
  const tmp2 = callback2(flag3, isPressed, flag, flag2, flag5);
  let obj1 = flag6(3991);
  let num = 1;
  if (flag6) {
    num = 0;
  }
  sharedValue = obj1.useSharedValue(num);
  const items1 = [sharedValue, flag6];
  const effect = React.useEffect(() => {
    if (flag6) {
      let obj = flag6(outer1_2[7]);
      obj = { duration: 100 };
      const Easing = flag6(outer1_2[6]).Easing;
      obj.easing = Easing.in(flag6(outer1_2[6]).Easing.ease);
      const result = sharedValue.set(obj.withTiming(1, obj));
    }
  }, items1);
  let obj2 = flag6(3991);
  const fn = function j() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 15588901070870;
  fn.__initData = closure_8;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = flag6(1873);
  const backgroundGradientColors = obj3.getBackgroundGradientColors(nameplate.palette, sharedValue(4066)());
  let obj4 = flag6(8274);
  const nameplateAssets = obj4.getNameplateAssets(nameplate);
  ({ staticImageUrl, animatedImageUrl } = nameplateAssets);
  if (flag7) {
    flag7 = !stateFromStores;
  }
  if (flag7) {
    staticImageUrl = animatedImageUrl;
  }
  let str = "";
  if (null != staticImageUrl) {
    str = staticImageUrl;
  }
  obj = { style: items2 };
  items2 = [tmp2.container, isFocused.style, animatedStyle];
  let tmp11Result = null;
  if (null != backgroundGradientColors) {
    obj = { style: tmp2.gradient };
    obj1 = {};
    let num4 = 0;
    if (flag4) {
      num4 = -2;
    }
    obj1.x = num4;
    obj1.y = 0;
    obj.start = obj1;
    obj.end = { x: 1, y: 0 };
    const items3 = [, ];
    ({ left: arr4[0], right: arr4[1] } = backgroundGradientColors);
    obj.colors = items3;
    tmp11Result = callback(sharedValue(4554), obj);
    const tmp11 = callback;
    const tmp14 = sharedValue(4554);
  }
  const items4 = [tmp11Result, ];
  const tmp3 = sharedValue(4066)();
  const tmp9 = closure_6;
  if (obj9.isAndroid()) {
    if (flag7) {
      obj2 = { url: str, style: tmp2.img, autoplay: true };
      let tmp15 = callback(flag6(8043).APNGPlayer, obj2);
    }
    items4[1] = tmp15;
    obj.children = items4;
    return tmp9(sharedValue(3991).View, obj);
  }
  obj3 = { source: obj4, style: tmp2.img, accessibilityRole: "image" };
  obj4 = { uri: str };
  tmp15 = callback(sharedValue(5085), obj3);
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2, arg3, arg4) => {
  let obj = { container: { position: "absolute", overflow: "hidden", top: 0, bottom: 0, left: 0, right: 0 } };
  obj = { position: "absolute", width: "100%", height: "100%" };
  let num = 1;
  let num2 = 1;
  if (!arg0) {
    if (arg3) {
      if (!arg2) {
        num2 = 0;
      }
    }
    if (arg1) {
      let num5 = 0.6;
      if (arg4) {
        num5 = 0.3;
      }
      let num4 = num5;
    } else {
      num4 = 0.4;
      if (arg2) {
        num4 = 0.8;
      }
    }
  }
  obj.opacity = num2;
  obj.gradient = obj;
  obj = { position: "absolute", height: "100%", right: 0, aspectRatio: 5.333333333333333 };
  if (!arg0) {
    if (arg3) {
      if (!arg2) {
        num = 0.1;
      }
    }
    if (arg1) {
      let num8 = 0.5;
      if (arg4) {
        num8 = 0.4;
      }
      let num7 = num8;
    } else {
      num7 = 0.6;
      if (arg2) {
        num7 = 0.8;
      }
    }
  }
  obj.opacity = num;
  obj.img = obj;
  return obj;
});
let closure_8 = { code: "function NameplateTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("jsxProd").fileFinishedImporting("modules/collectibles/nameplates/native/Nameplate.tsx");

export default function Nameplate(nameplate) {
  nameplate = nameplate.nameplate;
  let tmp = null;
  let obj = Object.create(null);
  obj.nameplate = 0;
  const merged = Object.assign(nameplate, obj);
  if (null != nameplate) {
    obj = { nameplate };
    const merged1 = Object.assign(merged);
    obj["aria-hidden"] = true;
    tmp = callback(NameplateInner, obj);
  }
  return tmp;
};
