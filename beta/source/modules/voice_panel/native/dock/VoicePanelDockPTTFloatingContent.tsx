// Module ID: 19647
// Function ID: 19648
// Name: VoicePanelDockPTTFloatingContent
// Dependencies: [19, 17, 11413, 21, 575, 5170, 19640, 5401, 1652, 5760, 5177, 12170, 2]
// Exports: default

// Module 19647 (VoicePanelDockPTTFloatingContent)
import native from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import shared from "shared" /* 5177 */;
import useThemeDefault from "useTheme" /* 5401 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5760 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11413 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19640 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const nativeDefault = native;
let _Math, num, num2, obj1, rect, tmp3, tmp5, tmp6, tmp8;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
let size1;
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
const DOCK_TILE_SIZE = VoicePanelDockConstants.DOCK_TILE_SIZE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = 66 + nativeDefault.space.PX_16;
let closure_8 = DOCK_TILE_SIZE / 56;
let createStyles = createStyles_mod;
let obj = { host: { position: "absolute", top: 0, left: 0, width: 0, height: 0, overflow: "visible" }, indicator: size, indicatorFill: obj2, tile: size1 };
size = { position: "absolute", width: 76, height: 76, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { position: "absolute", width: 56, height: 56, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT };
let closure_9 = createStyles(obj);
let closure_10 = { code: "(function VoicePanelDockPTTFloatingContentTsx1(){let[anchor,progress,DOCK_PTT_INDICATOR_SIZE,interpolate,Extrapolation,dragX,dragY,INDICATOR_RESTING_SCALE]=this.__closure;const frame=anchor.get();if(frame==null){return{opacity:0};}const value=progress.get();return{left:frame.x+frame.width/2-DOCK_PTT_INDICATOR_SIZE/2,top:frame.y+frame.height/2-DOCK_PTT_INDICATOR_SIZE/2,opacity:interpolate(value,[0,0.4],[0,1],Extrapolation.CLAMP),transform:[{translateX:dragX.get()},{translateY:dragY.get()},{scale:interpolate(value,[0,1],[INDICATOR_RESTING_SCALE,1],Extrapolation.CLAMP)}]};})" };
let closure_11 = { code: "(function VoicePanelDockPTTFloatingContentTsx2(){let[anchor,progress,DOCK_PTT_TILE_SIZE,interpolate,Extrapolation,dragX,DOCK_PTT_TILE_LIFT,dragY,TILE_RESTING_SCALE]=this.__closure;const frame=anchor.get();if(frame==null){return{opacity:0};}const value=progress.get();return{left:frame.x+frame.width/2-DOCK_PTT_TILE_SIZE/2,top:frame.y+frame.height/2-DOCK_PTT_TILE_SIZE/2,opacity:interpolate(value,[0,0.25],[0,1],Extrapolation.CLAMP),transform:[{translateX:dragX.get()},{translateY:interpolate(value,[0,1],[0,-DOCK_PTT_TILE_LIFT],Extrapolation.EXTEND)+dragY.get()},{scale:Math.max(interpolate(value,[0,1],[TILE_RESTING_SCALE,1]),TILE_RESTING_SCALE)}]};})" };
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPTTFloatingContent.tsx");

export default function VoicePanelDockPTTFloatingContent(arg0) {
  let MicrophoneIcon;
  let anchor;
  let dragX;
  let dragY;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj6;
  let progress;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp9;
  ({ progress, anchor, dragX, dragY } = arg0);
  const tmp = closure_9();
  const tmp4 = useDockBoxShadowDefault;
  const tmp4Result = tmp4(native.Shadow.SHADOW_HIGH);
  const tmp7 = useThemeDefault();
  let items = [closure_10, anchor, progress, 76, , , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  items[4] = _mod1652.interpolate;
  items[5] = _mod1652.Extrapolation;
  items[6] = dragX;
  items[7] = dragY;
  items[8] = 0.5;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items;
  class VoicePanelDockPTTFloatingContentTsx1 {
    constructor() {
      size = closure_0.get();
      if (null == size) {
        return { opacity: 0 };
      } else {
        tmp = closure_1;
        value = closure_1.get();
        rect = { left: null, top: null, opacity: null, transform: null };
        num = 2;
        tmp3 = closure_2;
        rect.left = size.x + size.width / 2 - closure_2 / 2;
        rect.top = size.y + size.height / 2 - closure_2 / 2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        tmp6 = value;
        rect.opacity = closure_3(value, [0, 0.4], [0, 1], closure_4.CLAMP);
        obj1 = { translateX: null };
        tmp7 = closure_5;
        obj1.translateX = closure_5.get();
        items = [, , ];
        items[0] = obj1;
        obj5 = { translateY: null };
        tmp8 = closure_6;
        obj5.translateY = closure_6.get();
        items[1] = obj5;
        obj6 = { scale: null };
        tmp9 = closure_7;
        items1 = [, ];
        items1[0] = closure_7;
        num2 = 1;
        items1[1] = 1;
        tmp10 = value;
        tmp11 = items1;
        obj6.scale = closure_3(value, [0, 1], items1, closure_4.CLAMP);
        items[2] = obj6;
        rect.transform = items;
        return rect;
      }
    }
  }
  let items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  VoicePanelDockPTTFloatingContentTsx1.__closure = items1;
  VoicePanelDockPTTFloatingContentTsx1.__workletHash = 477439147398;
  VoicePanelDockPTTFloatingContentTsx1.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(VoicePanelDockPTTFloatingContentTsx1);
  let items2 = [closure_11, anchor, progress, 56, , , , , , ];
  const useAnimatedStyle2 = tmp5(1652).useAnimatedStyle;
  _mod1652;
  items2[4] = _mod1652.interpolate;
  items2[5] = _mod1652.Extrapolation;
  items2[6] = dragX;
  items2[7] = closure_7;
  items2[8] = dragY;
  items2[9] = closure_8;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  let c8;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items2;
  class VoicePanelDockPTTFloatingContentTsx2 {
    constructor() {
      size = closure_0.get();
      if (null == size) {
        return { opacity: 0 };
      } else {
        tmp = closure_1;
        value = closure_1.get();
        rect = { left: null, top: null, opacity: null, transform: null };
        num = 2;
        tmp3 = closure_2;
        rect.left = size.x + size.width / 2 - closure_2 / 2;
        rect.top = size.y + size.height / 2 - closure_2 / 2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        tmp6 = value;
        rect.opacity = closure_3(value, [0, 0.25], [0, 1], closure_4.CLAMP);
        obj1 = { translateX: null };
        tmp7 = closure_5;
        obj1.translateX = closure_5.get();
        items = [, , ];
        items[0] = obj1;
        obj5 = { translateY: null };
        tmp8 = closure_6;
        items1 = [0];
        items1[1] = -closure_6;
        tmp9 = value;
        tmp10 = items1;
        tmp12 = closure_7;
        tmp11 = closure_3(value, [0, 1], items1, closure_4.EXTEND);
        obj5.translateY = tmp11 + closure_7.get();
        items[1] = obj5;
        obj6 = { scale: null };
        tmp13 = globalThis;
        _Math = Math;
        tmp14 = closure_8;
        items2 = [, ];
        items2[0] = closure_8;
        num2 = 1;
        items2[1] = 1;
        obj6.scale = Math.max(closure_3(value, [0, 1], items2), closure_8);
        items[2] = obj6;
        rect.transform = items;
        return rect;
      }
    }
  }
  const items3 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29];
  VoicePanelDockPTTFloatingContentTsx2.__closure = items3;
  VoicePanelDockPTTFloatingContentTsx2.__workletHash = 6388817195515;
  VoicePanelDockPTTFloatingContentTsx2.__initData = tmp20;
  let obj = { style: tmp.host, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: items6 };
  const animatedStyle2 = useAnimatedStyle2(VoicePanelDockPTTFloatingContentTsx2);
  let obj2 = { style: items4, children: items5 };
  items4 = [tmp.indicator, animatedStyle];
  View = tmp2(1652).View;
  let str = "light";
  const tmp2Result = VisualEffectViewDefault;
  const tmp5Result2 = shared;
  if (tmp5Result2.isThemeDark(tmp7)) {
    str = "dark";
  }
  let obj3 = { blurTheme: str, blurStyle: "ultra-thin", blurAmount: 0.16666666666666666, android_fallbackColor: "transparent", style: StyleSheet.absoluteFill };
  items5 = [hasOwnProperty(tmp2Result, obj3), ];
  const obj4 = { style: tmp.indicatorFill };
  items5[1] = hasOwnProperty(View, obj4);
  items6 = [metroRequire(View, obj2), ];
  const obj5 = { style: items7, children: hasOwnProperty(MicrophoneIcon, obj6) };
  items7 = [tmp.tile, { boxShadow: tmp4Result }, animatedStyle2];
  const View2 = tmp2(1652).View;
  obj6 = { size: "md", color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  MicrophoneIcon = tmp5(12170).MicrophoneIcon;
  items6[1] = hasOwnProperty(View2, obj5);
  return metroRequire(View, obj);
};
