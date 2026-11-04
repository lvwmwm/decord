// Module ID: 18300
// Function ID: 18301
// Name: ChannelScreenAnimatedFrame
// Dependencies: [19, 21, 5141, 575, 1652, 5378, 1187, 18298, 9970, 7428, 2]
// Exports: default

// Module 18300 (ChannelScreenAnimatedFrame)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import PanelsConfig from "PanelsConfig" /* 18298 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
let num, obj1;

let obj2;
let tmp2;
const ClientThemesOverrides = tmp2(9970);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, splitDivider: { borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH } };
obj2 = { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
({ borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH });
const easing = createStyles(obj);
let closure_5 = { code: "(function ChannelScreenAnimatedFrameTsx1(){let[translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS]=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};})" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(arg0) {
  let isChatLockedOpen;
  let maxWidth;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let translateX;
  ({ translateX, maxWidth, isChatLockedOpen } = arg0);
  let tmp = easing();
  let tmp2 = require;
  const items = [closure_5, translateX, maxWidth, isChatLockedOpen, , , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[4] = timing_timing.withTiming;
  items[5] = native.STANDARD_EASING;
  items[6] = PanelsConfig.SIDE_PANEL_CLOSE_DURATION_MS;
  items[7] = PanelsConfig.SIDE_PANEL_OPEN_DURATION_MS;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class ChannelScreenAnimatedFrameTsx1 {
    constructor() {
      tmp = closure_0.get() === closure_1 || closure_2;
      num = 1;
      tmp2 = closure_3;
      if (tmp) {
        num = 0;
      }
      obj = { easing: closure_4, duration: tmp ? closure_5 : closure_6 };
      obj1 = { opacity: tmp2(num, obj) };
      return obj1;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  ChannelScreenAnimatedFrameTsx1.__closure = items1;
  ChannelScreenAnimatedFrameTsx1.__workletHash = 6023157735704;
  ChannelScreenAnimatedFrameTsx1.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(ChannelScreenAnimatedFrameTsx1);
  const tmp2Result = ClientThemesOverrides;
  const gradientTop = tmp2Result.useGradientTop();
  const items2 = [, , , ];
  ({ container: arr3[0], splitDivider: arr3[1] } = tmp);
  items2[2] = gradientTop;
  items2[3] = animatedStyle;
  const View = _modDef1652.View;
  return <View pointerEvents="none" style={items2}>{null}</View>;
};
