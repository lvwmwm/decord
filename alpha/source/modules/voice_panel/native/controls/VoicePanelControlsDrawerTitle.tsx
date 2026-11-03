// Module ID: 13960
// Function ID: 13961
// Name: VoicePanelControlsDrawerTitle
// Dependencies: [19, 17, 11358, 21, 5141, 575, 1652, 7086, 13961, 5747, 2]

// Module 13960 (VoicePanelControlsDrawerTitle)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import NativeViewDefault from "NativeView" /* 7086 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11358 */;
import VoicePanelHeaderGlassBlurDefault from "VoicePanelHeaderGlassBlur" /* 13961 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let tmp3, value;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp12;
let tmp2;
const _modDef1652 = tmp12(1652);
const Text_Text = tmp2(5747);
const StyleSheet = react_native.StyleSheet;
const CONTROLS_DRAWER_HEADER_SIZE = VoicePanelControlsConstants.CONTROLS_DRAWER_HEADER_SIZE;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { titleWrapper: { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: CONTROLS_DRAWER_HEADER_SIZE }, titlePill: obj2, titlePillBG: obj3 };
obj2 = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles(obj);
let closure_7 = { code: "(function VoicePanelControlsDrawerTitleTsx1(){let[shown,_shown,disablePill,backgroundColor]=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};})" };
const memoResult = react.memo(function VoicePanelControlsDrawerTitle(title) {
  let blurStyle;
  let disablePill;
  let items2;
  let items3;
  let items4;
  let shown;
  let style;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  ({ shown, disablePill } = title);
  title = title.title;
  if (disablePill === undefined) {
    disablePill = false;
  }
  ({ style, blurStyle } = title);
  const tmp = closure_6();
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(true);
  let backgroundColor = tmp.titlePillBG.backgroundColor;
  const items = [closure_7, shown, sharedValue, disablePill, backgroundColor];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  const obj2 = _mod1652;
  class VoicePanelControlsDrawerTitleTsx1 {
    constructor() {
      obj = closure_0;
      if (null != closure_0) {
        value = obj.get();
      } else {
        tmp = closure_1;
        value = closure_1.get();
      }
      backgroundColor = "transparent";
      if (value) {
        tmp3 = closure_2;
        backgroundColor = "transparent";
        if (!closure_2) {
          backgroundColor = closure_3;
        }
      }
      return { backgroundColor };
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9];
  VoicePanelControlsDrawerTitleTsx1.__closure = items1;
  VoicePanelControlsDrawerTitleTsx1.__workletHash = 6652044620822;
  VoicePanelControlsDrawerTitleTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(VoicePanelControlsDrawerTitleTsx1);
  const obj3 = { style: items2, children: items3 };
  items2 = [tmp.titleWrapper, style];
  const tmp13 = NativeViewDefault;
  const tmp11 = hasOwnProperty;
  const tmp15 = VoicePanelHeaderGlassBlurDefault;
  if (shown == null) {
    shown = sharedValue;
  }
  items3 = [, ];
  const obj4 = { shown, style: StyleSheet.absoluteFillObject, blurStyle };
  items3[0] = React3(tmp15, obj4);
  const obj5 = { style: items4, children: React3(Text_Text.Text, { variant: "redesign/heading-18/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }) };
  items4 = [tmp.titlePill, animatedStyle];
  const View = _modDef1652.View;
  items3[1] = React3(View, obj5);
  return tmp11(tmp13, obj3);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default memoResult;
