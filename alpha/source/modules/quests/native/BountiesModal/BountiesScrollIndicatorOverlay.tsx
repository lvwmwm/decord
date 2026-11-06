// Module ID: 17220
// Function ID: 17221
// Name: BountiesScrollIndicatorOverlay
// Dependencies: [32, 19, 17, 21, 5403, 5170, 575, 1652, 5400, 1705, 5745, 17221, 5781, 1113, 2]
// Exports: default

// Module 17220 (BountiesScrollIndicatorOverlay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import timingPresets from "timingPresets" /* 5403 */;
import LinearGradientDefault from "LinearGradient" /* 5745 */;
import BountiesScrollIndicatorAnimationDefault from "BountiesScrollIndicatorAnimation" /* 17221 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let metroImportDefault;
let metroRequire;
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"];
let closure_9 = 5000 + timingPresets.timingSlowDuration;
let closure_10 = createStyles.createStyles(() => {
  let rect;
  let rect1;
  const obj = { scrollIndicator: rect, scrollIndicatorContent: rect1, scrollIndicatorText: { textAlign: "center" } };
  rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  rect1 = { position: "absolute", bottom: 124, left: 0, right: 0, alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
  return obj;
});
let closure_11 = { code: "(function BountiesScrollIndicatorOverlayTsx1(){let[scheduleOnRN,animationCallbackJSThread]=this.__closure;scheduleOnRN(animationCallbackJSThread);})" };
let closure_12 = { code: "(function BountiesScrollIndicatorOverlayTsx2(){let[withTiming,visible,enabled,timingSlow,timingStandard,_worklet_14195002390100_init_data,scheduleOnRN,animationCallbackJSThread]=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,'respect-motion-settings',function BountiesScrollIndicatorOverlayTsx1Factory([_worklet_14195002390100_init_data,scheduleOnRN,animationCallbackJSThread]){const BountiesScrollIndicatorOverlayTsx1=function(){scheduleOnRN(animationCallbackJSThread);};BountiesScrollIndicatorOverlayTsx1.__closure=[scheduleOnRN,animationCallbackJSThread];BountiesScrollIndicatorOverlayTsx1.__workletHash=14195002390100;BountiesScrollIndicatorOverlayTsx1.__initData=_worklet_14195002390100_init_data;return BountiesScrollIndicatorOverlayTsx1;}([_worklet_14195002390100_init_data,scheduleOnRN,animationCallbackJSThread]))};})" };
let closure_13 = { code: "(function BountiesScrollIndicatorOverlayTsx3(){let[withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow]=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};})" };
let closure_14 = { code: "(function BountiesScrollIndicatorOverlayTsx4(){let[withTiming,visible,timingStandard]=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};})" };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default function BountiesScrollIndicatorOverlay(enabled) {
  let first;
  let intl;
  let isEndCardVisible;
  let items10;
  let items12;
  let items7;
  let items8;
  let items9;
  let obj4;
  let opacityStyle;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp5;
  enabled = enabled.enabled;
  _require = undefined;
  ({ isEndCardVisible, opacityStyle } = enabled);
  let tmp = closure_10();
  let obj = react;
  let tmp2 = _slicedToArray;
  [first, tmp5] = react.useState(true);
  let closure_1 = tmp5;
  const tmp6 = _slicedToArray(react.useState(enabled), 2);
  if (enabled !== tmp6[0]) {
    tmp6[1](enabled);
    if (enabled) {
      tmp5(true);
    }
  }
  let items = [enabled];
  const effect = obj.useEffect(() => {
    let timeout;
    const f142058 = () => {
      importDefault(closure_0);
      closure_0 = !closure_0;
      let num = 5000;
      const _setTimeout = setTimeout;
      if (closure_0) {
        num = closure_2_9;
      }
      enabled = _setTimeout(f142058, num);
    };
    const tmp = timeout;
    if (tmp) {
      let c0 = false;
      let _setTimeout = setTimeout;
      timeout = setTimeout(f142058, closure_1_9);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const tmp2Result = tmp2(obj.useState(enabled && first), 2);
  _require = tmp13;
  const first1 = tmp2Result[0];
  const tmp2Result2 = tmp2(obj.useState(enabled && first), 2);
  if ((enabled && first) !== tmp2Result2[0]) {
    tmp2Result2[1](enabled && first);
    if (enabled && first) {
      tmp2Result[1](true);
    }
  }
  const callback = obj.useCallback(() => {
    closure_0(false);
  }, []);
  let items1 = [closure_12, , , , , , , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items1[1] = require("timing/timing").withTiming;
  items1[2] = enabled && first;
  items1[3] = enabled;
  items1[4] = require("timingPresets").timingSlow;
  items1[5] = require("timingPresets").timingStandard;
  items1[6] = closure_11;
  items1[7] = require("module_1705").scheduleOnRN;
  items1[8] = callback;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items1;
  class BountiesScrollIndicatorOverlayTsx2 {
    constructor() {
      let tmp3;
      let tmp4;
      let tmp5;
      let num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      const items = [, , ];
      const tmp2 = c2 ? c3 : c4;
      items[0] = c5;
      items[1] = c6;
      items[2] = c7;
      [tmp3, tmp4, tmp5] = items;
      const obj = { opacity: tmp(num, tmp2, "respect-motion-settings", BountiesScrollIndicatorOverlayTsx1) };
      class BountiesScrollIndicatorOverlayTsx1 {
        constructor() {
          tmp = closure_0(closure_1);
          return;
        }
      }
      const items1 = [tmp4, tmp5];
      BountiesScrollIndicatorOverlayTsx1.__closure = items1;
      BountiesScrollIndicatorOverlayTsx1.__workletHash = 14195002390100;
      BountiesScrollIndicatorOverlayTsx1.__initData = tmp3;
      return obj;
    }
  }
  const items2 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  BountiesScrollIndicatorOverlayTsx2.__closure = items2;
  BountiesScrollIndicatorOverlayTsx2.__workletHash = 4007229602387;
  BountiesScrollIndicatorOverlayTsx2.__initData = tmp21;
  const animatedStyle = useAnimatedStyle(BountiesScrollIndicatorOverlayTsx2);
  const items3 = [closure_13, , , , , , ];
  const useAnimatedStyle2 = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items3[1] = require("timing/timing").withTiming;
  items3[2] = enabled && first;
  items3[3] = isEndCardVisible;
  items3[4] = enabled;
  items3[5] = require("timingPresets").timingStandard;
  items3[6] = require("timingPresets").timingSlow;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items3;
  class BountiesScrollIndicatorOverlayTsx3 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (c1) {
        num = 0;
        if (!c2) {
          num = 1;
        }
      }
      const tmp3 = c2;
      if (!tmp3) {
        let tmp5;
        const tmp4 = c3;
        if (tmp4) {
          tmp5 = c5;
        }
        const obj = { opacity: tmp(num, tmp5) };
        return obj;
      }
      tmp5 = c4;
    }
  }
  const items4 = [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  BountiesScrollIndicatorOverlayTsx3.__closure = items4;
  BountiesScrollIndicatorOverlayTsx3.__workletHash = 17526580643643;
  BountiesScrollIndicatorOverlayTsx3.__initData = tmp32;
  const animatedStyle2 = useAnimatedStyle2(BountiesScrollIndicatorOverlayTsx3);
  const items5 = [closure_14, , , ];
  const useAnimatedStyle3 = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items5[1] = require("timing/timing").withTiming;
  items5[2] = enabled && first;
  items5[3] = require("timingPresets").timingStandard;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp41, tmp42, tmp43, tmp44] = items5;
  class BountiesScrollIndicatorOverlayTsx4 {
    constructor() {
      let items;
      let num = 0.9;
      if (c1) {
        num = 1;
      }
      const obj = { transform: items };
      items = [{ scale: tmp(num, c2) }];
      ({ scale: _undefined(num, c2) });
      return obj;
    }
  }
  const items6 = [tmp42, tmp43, tmp44];
  BountiesScrollIndicatorOverlayTsx4.__closure = items6;
  BountiesScrollIndicatorOverlayTsx4.__workletHash = 12953435859578;
  BountiesScrollIndicatorOverlayTsx4.__initData = tmp41;
  const animatedStyle3 = useAnimatedStyle3(BountiesScrollIndicatorOverlayTsx4);
  const obj2 = { style: items7, pointerEvents: "none", children: items9 };
  items7 = [tmp.scrollIndicator, opacityStyle];
  const View = _modDef1652.View;
  const obj3 = { style: items8, children: closure_6(LinearGradientDefault, obj4) };
  items8 = [StyleSheet.absoluteFill, animatedStyle2];
  const View2 = _modDef1652.View;
  obj4 = { colors, style: StyleSheet.absoluteFill };
  items9 = [closure_6(View2, obj3), ];
  const obj5 = { style: items10, children: items12 };
  items10 = [tmp.scrollIndicatorContent, ];
  const items11 = [animatedStyle, animatedStyle3];
  items10[1] = items11;
  const View3 = _modDef1652.View;
  items12 = [closure_6(BountiesScrollIndicatorAnimationDefault, { visible: enabled && first, isFadingInContent: first1 }), ];
  const obj6 = { variant: "body-sm/semibold", color: "text-default", style: tmp.scrollIndicatorText, children: intl.string(require("intl").t.eafsh4) };
  const Text = tmp18(5781).Text;
  intl = tmp18(1113).intl;
  items12[1] = closure_6(Text, obj6);
  items9[1] = closure_7(View3, obj5);
  return closure_7(View, obj2);
};
