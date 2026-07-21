// Module ID: 8222
// Function ID: 64964
// Name: NameplateInner
// Dependencies: []
// Exports: default

// Module 8222 (NameplateInner)
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
  const arg1 = flag6;
  let flag7 = isFocused.animate;
  if (flag7 === undefined) {
    flag7 = false;
  }
  let importDefault;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2 = callback2(flag3, isPressed, flag, flag2, flag5);
  let obj1 = arg1(dependencyMap[6]);
  let num = 1;
  if (flag6) {
    num = 0;
  }
  const sharedValue = obj1.useSharedValue(num);
  importDefault = sharedValue;
  const items1 = [sharedValue, flag6];
  const effect = React.useEffect(() => {
    if (flag6) {
      let obj = flag6(closure_2[7]);
      obj = { duration: 100 };
      const Easing = flag6(closure_2[6]).Easing;
      obj.easing = Easing.in(flag6(closure_2[6]).Easing.ease);
      const result = sharedValue.set(obj.withTiming(1, obj));
    }
  }, items1);
  let obj2 = arg1(dependencyMap[6]);
  const fn = function j() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 15588901070870;
  fn.__initData = closure_8;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj3 = arg1(dependencyMap[8]);
  const backgroundGradientColors = obj3.getBackgroundGradientColors(nameplate.palette, importDefault(dependencyMap[5])());
  let obj4 = arg1(dependencyMap[9]);
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
  const items2 = [tmp2.container, isFocused.style, animatedStyle];
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
    obj.end = {};
    const items3 = [, ];
    ({ left: arr4[0], right: arr4[1] } = backgroundGradientColors);
    obj.colors = items3;
    tmp11Result = callback(importDefault(dependencyMap[10]), obj);
    const tmp11 = callback;
    const tmp14 = importDefault(dependencyMap[10]);
  }
  const items4 = [tmp11Result, ];
  const tmp3 = importDefault(dependencyMap[5])();
  const tmp9 = closure_6;
  if (obj9.isAndroid()) {
    if (flag7) {
      obj2 = { url: str, style: tmp2.img, autoplay: true };
      let tmp15 = callback(arg1(dependencyMap[12]).APNGPlayer, obj2);
    }
    items4[1] = tmp15;
    obj.children = items4;
    return tmp9(importDefault(dependencyMap[6]).View, obj);
  }
  obj3 = { source: obj4, style: tmp2.img, accessibilityRole: "image" };
  obj4 = { uri: str };
  tmp15 = callback(importDefault(dependencyMap[13]), obj3);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles((arg0, arg1, arg2, arg3, arg4) => {
  let obj = { container: {} };
  obj = {};
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
  obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
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
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/collectibles/nameplates/native/Nameplate.tsx");

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
