// Module ID: 15550
// Function ID: 15551
// Name: VEVOO
// Dependencies: [19, 17, 4835, 574, 21, 4836, 576, 4566, 5280, 5284, 8053, 15551, 15553, 15554, 10354, 5992, 504, 15292, 2]

// Module 15550 (VEVOO)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 574 */;
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let rect;
let size;
function VisualEffectViewOverrideOverlay_(arg0) {
  let FormSection;
  let closure_0;
  let closure_1;
  let items;
  let items1;
  let items2;
  let obj4;
  const x = arg0.x;
  _require = x;
  const y = arg0.y;
  importDefault = y;
  let PX_8;
  const onClose = arg0.onClose;
  const tmp = closure_8();
  PX_8 = require("native").space.PX_8;
  const fn = function _() {
    let diff;
    let sum;
    let withSpring;
    let withSpring2;
    const rect = { top: withSpring(sum, springPresets.springUnclamped), left: withSpring2(diff, springPresets.springUnclamped) };
    withSpring = spring.withSpring;
    spring;
    sum = closure_1.get() - PX_8 + DEV_WIDGET_SIZE;
    withSpring2 = spring.withSpring;
    spring;
    diff = closure_0.get() - PX_8;
    return rect;
  };
  const obj = require("ReanimatedRexport");
  const point = { withSpring: require("spring").withSpring, y, px8: PX_8, DEV_WIDGET_SIZE, springUnclamped: require("springPresets").springUnclamped, x };
  fn.__closure = point;
  fn.__workletHash = 8104480272354;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = { style: items, children: items2 };
  items = [tmp.wrapper, animatedStyle];
  const obj3 = { style: tmp.scrollView, children: closure_7(FormSection, obj4) };
  const View = require("ReanimatedRexport").View;
  obj4 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent, children: items1 };
  FormSection = require("Form").FormSection;
  items1 = [closure_6(require("VEVOOPropBlurAmount"), {}), closure_6(require("VEVOOPropTintColor"), {}), closure_6(require("VEVOOPropBlurEffectName"), {})];
  items2 = [closure_6(ScrollView, obj3), ];
  const obj5 = { styles: tmp.close, type: "neutral", IconComponent: require("XSmallIcon").XSmallIcon, onPress: onClose, accessibilityLabel: "Close" };
  const tmp3 = require("ActionButton");
  items2[1] = closure_6(tmp3, obj5);
  return closure_7(View, obj2);
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
const __initData = { code: "function VEVOOTsx1(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}" };
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
