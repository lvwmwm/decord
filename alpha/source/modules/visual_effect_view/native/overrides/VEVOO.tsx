// Module ID: 18120
// Function ID: 18121
// Name: VEVOO
// Dependencies: [19, 17, 5750, 573, 21, 5141, 575, 1652, 5757, 5758, 8301, 18121, 18123, 18124, 10897, 7180, 504, 17845, 2]

// Module 18120 (VEVOO)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 573 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5757 */;
import springPresets from "springPresets" /* 5758 */;
import XSmallIcon from "XSmallIcon" /* 7180 */;
import ActionButtonDefault from "ActionButton" /* 10897 */;
import VEVOOPropBlurAmountDefault from "VEVOOPropBlurAmount" /* 18121 */;
import VEVOOPropTintColorDefault from "VEVOOPropTintColor" /* 18123 */;
import VEVOOPropBlurEffectNameDefault from "VEVOOPropBlurEffectName" /* 18124 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5750 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let size;
function VisualEffectViewOverrideOverlay_(arg0) {
  let FormSection;
  let items2;
  let items3;
  let items4;
  let obj3;
  let onClose;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let x;
  let y;
  ({ onClose, x, y } = arg0);
  const tmp = closure_8();
  const PX_8 = nativeDefault.space.PX_8;
  const items = [closure_9, , , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = y;
  items[3] = PX_8;
  items[4] = DEV_WIDGET_SIZE;
  items[5] = springPresets.springUnclamped;
  items[6] = x;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class VEVOOTsx1 {
    constructor() {
      rect = { top: closure_0(closure_1.get() - closure_2 + closure_3, closure_4), left: closure_0(closure_5.get() - closure_2, closure_4) };
      return rect;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  VEVOOTsx1.__closure = items1;
  VEVOOTsx1.__workletHash = 4442371406619;
  VEVOOTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(VEVOOTsx1);
  const obj = { style: items2, children: items4 };
  items2 = [tmp.wrapper, animatedStyle];
  const obj2 = { style: tmp.scrollView, children: metroImportDefault(FormSection, obj3) };
  const View = tmp2(1652).View;
  obj3 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent, children: items3 };
  FormSection = tmp4(8301).FormSection;
  items3 = [metroRequire(VEVOOPropBlurAmountDefault, {}), metroRequire(VEVOOPropTintColorDefault, {}), metroRequire(VEVOOPropBlurEffectNameDefault, {})];
  items4 = [metroRequire(ScrollView, obj2), ];
  const obj4 = { styles: tmp.close, type: "neutral", IconComponent: XSmallIcon.XSmallIcon, onPress: onClose, accessibilityLabel: "Close" };
  const tmp2Result = ActionButtonDefault;
  items4[1] = metroRequire(tmp2Result, obj4);
  return metroImportDefault(View, obj);
}
const ScrollView = react_native.ScrollView;
const DEV_WIDGET_SIZE = Constants.DEV_WIDGET_SIZE;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
const styles = createStyles.createStyles({ zeroPadding: { paddingVertical: 0, paddingHorizontal: 0 }, zeroPaddingVertical: { paddingVertical: 0 }, zeroPaddingHorizontal: { paddingHorizontal: 0 }, zeroHeight: { height: 0 }, enabledSwitchStyle: { alignSelf: "flex-start" } });
createStyles = createStyles_mod;
let obj = { wrapper: size, scrollView: obj2, scrollViewContent: obj3, close: rect };
size = { borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_660, borderRadius: nativeDefault.radii.lg, position: "absolute", top: 0, left: 0, width: 300, height: 400 };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj2 = { borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj3 = { paddingBottom: nativeDefault.space.PX_24 };
rect = { position: "absolute", right: nativeDefault.space.PX_8, top: nativeDefault.space.PX_8 };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function VEVOOTsx1(){let[withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x]=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};})" };
const memoResult = react.memo(function VisualEffectViewOverrideOverlay(arg0) {
  let obj = get_initialized;
  const items = [DevSettingsStore];
  let tmp = null;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("visual_effect_view_overrides"))) {
    const obj2 = {
      onClose() {
          const obj = require("DevSettingsActions");
          obj.toggle("visual_effect_view_overrides", false);
        }
    };
    const merged = Object.assign(arg0);
    tmp = metroRequire(VisualEffectViewOverrideOverlay_, obj2);
  }
  return tmp;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default memoResult;
export const useVisualEffectViewOverrideSharedStyles = styles;
