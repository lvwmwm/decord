// Module ID: 13814
// Function ID: 13815
// Name: VoicePanelControlsDrawerTitle
// Dependencies: [19, 17, 11221, 21, 5014, 575, 5095, 6960, 13815, 7241, 5624, 2]

// Module 13814 (VoicePanelControlsDrawerTitle)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import VoicePanelHeaderGlassBlurDefault from "VoicePanelHeaderGlassBlur" /* 13815 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp2;
let tmp7;
const Text_Text = tmp2(5624);
const ReanimatedNativeViewDefault = tmp7(7241);
const StyleSheet = react_native.StyleSheet;
const CONTROLS_DRAWER_HEADER_SIZE = VoicePanelControlsConstants.CONTROLS_DRAWER_HEADER_SIZE;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleWrapper: { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: CONTROLS_DRAWER_HEADER_SIZE }, titlePill: obj2, titlePillBG: obj3 };
obj2 = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles(obj);
const __initData = { code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}" };
const memoResult = react.memo(function VoicePanelControlsDrawerTitle(shown) {
  let blurStyle;
  let items;
  let items1;
  let items2;
  let style;
  shown = shown.shown;
  let flag = shown.disablePill;
  const title = shown.title;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, blurStyle } = shown);
  const tmp = closure_6();
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(true);
  let backgroundColor = tmp.titlePillBG.backgroundColor;
  const fn = function p() {
    let value;
    const obj = shown;
    if (null != shown) {
      value = obj.get();
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
  const obj2 = ReanimatedRexport;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items, children: items1 };
  items = [tmp.titleWrapper, style];
  const tmp8 = NativeViewDefault;
  const tmp10 = VoicePanelHeaderGlassBlurDefault;
  const tmp6 = hasOwnProperty;
  if (shown == null) {
    shown = sharedValue;
  }
  items1 = [, ];
  const obj4 = { shown, style: StyleSheet.absoluteFillObject, blurStyle };
  items1[0] = React3(tmp10, obj4);
  const obj5 = { style: items2, children: React3(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }) };
  items2 = [tmp.titlePill, animatedStyle];
  const tmp7Result = ReanimatedNativeViewDefault;
  items1[1] = React3(tmp7Result, obj5);
  return tmp6(tmp8, obj3);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default memoResult;
