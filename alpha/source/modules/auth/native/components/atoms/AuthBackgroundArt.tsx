// Module ID: 7091
// Function ID: 7092
// Name: AuthBackgroundArt
// Dependencies: [19, 17, 21, 7092, 1652, 5380, 5383, 7093, 7096, 7097, 2]

// Module 7091 (AuthBackgroundArt)
import timing_timing from "timing/timing" /* 5380 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp2;
const timingPresets = tmp2(5383);
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: "#07064C" };
const create = StyleSheet.create;
const merged = Object.assign(StyleSheet.absoluteFillObject);
const container = create(obj);
let closure_9 = { code: "(function AuthBackgroundArtTsx1(){let[squareOpacity]=this.__closure;return{opacity:squareOpacity.get()};})" };
const memoResult = react.memo(function AuthBackgroundArt() {
  let closure_0;
  let items3;
  let items4;
  let obj4;
  let sharedValue;
  let tmp8;
  let tmp9;
  let tmpResult2;
  let tmp2 = dependencyMap;
  const tmp3 = sharedValue(7092)();
  _require = tmp3;
  const tmp4 = _require;
  let num = 0;
  const useSharedValue = require("module_1652").useSharedValue;
  require("module_1652");
  if ("square" === tmp3) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const items = [tmp3, sharedValue];
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if ("square" === closure_0) {
      num = 1;
    }
    const result = set(withTiming(num, timingPresets.timingStandard));
  }, items);
  const items1 = [closure_9, sharedValue];
  let c0;
  [tmp8, tmp9] = items1;
  const tmp4Result = tmp4(1652);
  class AuthBackgroundArtTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp9];
  AuthBackgroundArtTsx1.__closure = items2;
  AuthBackgroundArtTsx1.__workletHash = 5771106652293;
  AuthBackgroundArtTsx1.__initData = tmp8;
  let obj = { style: container.container, pointerEvents: "none", accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items3 };
  const animatedStyle = tmp4Result.useAnimatedStyle(AuthBackgroundArtTsx1);
  const obj2 = { backgroundImageSource: sharedValue(7096), backgroundImageCover: true };
  const tmpResult = sharedValue(7093);
  items3 = [closure_6(tmpResult, obj2), ];
  const obj3 = { style: items4, children: closure_6(tmpResult2, obj4) };
  items4 = [StyleSheet.absoluteFill, animatedStyle];
  View = tmp(1652).View;
  obj4 = { backgroundImageSource: sharedValue(7097), backgroundImageCover: true };
  tmpResult2 = sharedValue(7093);
  items3[1] = closure_6(View, obj3);
  return closure_7(View, obj);
});
let result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthBackgroundArt.tsx");

export default memoResult;
