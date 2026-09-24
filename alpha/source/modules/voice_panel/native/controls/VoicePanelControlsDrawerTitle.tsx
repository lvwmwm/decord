// Module ID: 12623
// Function ID: 12624
// Name: VoicePanelControlsDrawerTitle
// Dependencies: [19, 17, 12613, 21, 4829, 576, 4561, 5894, 12624, 7406, 4825, 2]

// Module 12623 (VoicePanelControlsDrawerTitle)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import NativeViewDefault from "NativeView" /* 5894 */;
import VoicePanelHeaderGlassBlurDefault from "VoicePanelHeaderGlassBlur" /* 12624 */;
import noop from "module_19" /* 19 */;

const Text_Text = tmp2(4825);
const ReanimatedNativeViewDefault = tmp7(7406);
require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj = { titleWrapper: { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: fn(12613).CONTROLS_DRAWER_HEADER_SIZE }, titlePill: { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 }, titlePillBG: null };
let obj3 = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
obj.titlePillBG = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}" };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default noop.memo(function VoicePanelControlsDrawerTitle(children) {
  let shown = children.shown;
  let flag = children.disablePill;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, blurStyle } = children);
  const tmp = closure_6();
  const sharedValue = ReanimatedRexport.useSharedValue(true);
  let backgroundColor = tmp.titlePillBG.backgroundColor;
  const fn = function p() {
    if (null != shown) {
      value = shown.get();
    } else {
      value = sharedValue.get();
    }
    backgroundColor = "transparent";
    if (value) {
      backgroundColor = "transparent";
    }
    return { backgroundColor };
  };
  fn.__closure = { shown, _shown: sharedValue, disablePill: flag, backgroundColor };
  fn.__workletHash = 14837285839887;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items = [tmp.titleWrapper, style];
  obj3.style = items;
  const tmp6 = hasOwnProperty;
  const tmp8 = NativeViewDefault;
  if (shown == null) {
    shown = sharedValue;
  }
  const items1 = [React4(VoicePanelHeaderGlassBlurDefault, { shown, style: StyleSheet.absoluteFillObject, blurStyle }), ];
  const obj5 = { style: null, children: null };
  const items2 = [tmp.titlePill, animatedStyle];
  obj5.style = items2;
  const obj4 = { shown, style: StyleSheet.absoluteFillObject, blurStyle };
  obj5.children = React4(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: children.title });
  items1[1] = React4(ReanimatedNativeViewDefault, obj5);
  obj3.children = items1;
  return tmp6(tmp8, obj3);
});
