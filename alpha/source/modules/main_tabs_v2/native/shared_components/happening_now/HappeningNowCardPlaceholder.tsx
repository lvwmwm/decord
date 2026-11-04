// Module ID: 18384
// Function ID: 18385
// Name: HappeningNowCardPlaceholder
// Dependencies: [19, 17, 17533, 21, 5141, 575, 1652, 1705, 5378, 17534, 2]
// Exports: HappeningNowCardPlaceholder

// Module 18384 (HappeningNowCardPlaceholder)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5378 */;
import HappeningNowConstants from "HappeningNowConstants" /* 17533 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let View = react_native.View;
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { placeholderContainer: { flexDirection: "row", alignItems: "center" }, placeholderIcon: size, placeholderContent: { flex: 1 }, placeholderText: obj2, placeholderTextTop: { width: "75%" }, placeholderTextBottom: { width: "50%", marginTop: 8 } };
size = { height: HAPPENING_NOW_CONTENT_HEIGHT, width: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj2 = { height: 12, borderRadius: 5, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function HappeningNowCardPlaceholderTsx1(){let[opacity,withRepeat,withTiming,endOpacity,duration,Easing]=this.__closure;opacity.set(withRepeat(withTiming(endOpacity,{duration:duration,easing:Easing.ease}),-1,true));})" };
let closure_9 = { code: "(function HappeningNowCardPlaceholderTsx2(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardPlaceholder.tsx");

export function HappeningNowCardPlaceholder(panelVariant) {
  let duration;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj4;
  let tmp5;
  let tmp6;
  let v06;
  let v1000;
  let flag = panelVariant.panelVariant;
  const fullWidth = panelVariant.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  _require = 1000;
  importDefault = 0.6;
  let sharedValue;
  const tmp2 = sharedValue;
  let obj = require("module_1652");
  sharedValue = obj.useSharedValue(0.3);
  let items = [sharedValue, 1000, 0.6];
  const effect = react.useEffect(() => {
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    const items = [closure_8, sharedValue, , , , , ];
    const scheduleOnUI = _mod1705.scheduleOnUI;
    _mod1705;
    items[2] = _mod1652.withRepeat;
    items[3] = timing_timing.withTiming;
    items[4] = c1;
    items[5] = c0;
    items[6] = _mod1652.Easing;
    c0 = undefined;
    c1 = undefined;
    let c2;
    let c3;
    let c4;
    let c5;
    [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
    class HappeningNowCardPlaceholderTsx1 {
      constructor() {
        obj = { duration: closure_4, easing: closure_5.ease };
        result = closure_0.set(closure_1(closure_2(closure_3, obj), -1, true));
        return;
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
    HappeningNowCardPlaceholderTsx1.__closure = items1;
    HappeningNowCardPlaceholderTsx1.__workletHash = 2445184542345;
    HappeningNowCardPlaceholderTsx1.__initData = tmp2;
    scheduleOnUI(HappeningNowCardPlaceholderTsx1);
  }, items);
  let items1 = [closure_9, sharedValue];
  const obj2 = require("module_1652");
  _require = undefined;
  [tmp5, tmp6] = items1;
  class HappeningNowCardPlaceholderTsx2 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  HappeningNowCardPlaceholderTsx2.__closure = items2;
  HappeningNowCardPlaceholderTsx2.__workletHash = 8479372261668;
  HappeningNowCardPlaceholderTsx2.__initData = tmp5;
  const tmp8 = ease;
  const animatedStyle = obj2.useAnimatedStyle(HappeningNowCardPlaceholderTsx2);
  let str = "medium";
  const tmp10 = require("HappeningNowCard");
  const tmp9 = importDefault;
  if (fullWidth) {
    str = "full";
  }
  const obj3 = { width: str, panelVariant: flag, children: closure_6(View, obj4) };
  obj4 = { style: items3, children: items4 };
  items3 = [animatedStyle, tmp.placeholderContainer];
  const obj5 = { style: tmp.placeholderIcon };
  View = tmp9(tmp2[6]).View;
  items4 = [tmp8(View, obj5), ];
  const obj7 = { style: items5 };
  items5 = [, ];
  const obj6 = { style: tmp.placeholderContent, children: items6 };
  ({ placeholderText: arr6[0], placeholderTextTop: arr6[1] } = tmp);
  items6 = [tmp8(View, obj7), ];
  const obj8 = { style: items7 };
  items7 = [, ];
  ({ placeholderText: arr8[0], placeholderTextBottom: arr8[1] } = tmp);
  items6[1] = tmp8(View, obj8);
  items4[1] = closure_6(View, obj6);
  return tmp8(tmp10, obj3);
}
