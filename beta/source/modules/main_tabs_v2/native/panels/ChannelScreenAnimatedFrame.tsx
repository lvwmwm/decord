// Module ID: 15634
// Function ID: 15635
// Name: ChannelScreenAnimatedFrame
// Dependencies: [19, 21, 4836, 576, 4566, 4837, 1177, 15632, 7297, 6544, 2]
// Exports: default

// Module 15634 (ChannelScreenAnimatedFrame)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import timing from "timing" /* 4837 */;
import PanelsConfig from "PanelsConfig" /* 15632 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let num, obj1, tmp2, tmp2Result, tmp3, tmp4;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, splitDivider: obj3 };
obj2 = { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
let closure_4 = createStyles(obj);
const __initData = { code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const isChatLockedOpen = translateX.isChatLockedOpen;
  let tmp = closure_4();
  let obj = translateX(isChatLockedOpen[4]);
  class S {
    constructor() {
      tmp = translateX.get() === maxWidth || isChatLockedOpen;
      tmp2 = closure_0;
      tmp3 = closure_2;
      tmp4 = closure_0(closure_2[5]);
      num = 1;
      withTiming = tmp4.withTiming;
      if (tmp) {
        num = 0;
      }
      obj = { easing: tmp2(tmp3[6]).STANDARD_EASING, duration: null };
      tmp2Result = tmp2(tmp3[7]);
      obj1 = { opacity: withTiming(num, obj) };
      obj.duration = tmp ? tmp2Result.SIDE_PANEL_CLOSE_DURATION_MS : tmp2Result.SIDE_PANEL_OPEN_DURATION_MS;
      return obj1;
    }
  }
  let obj2 = { translateX, maxWidth, isChatLockedOpen, withTiming: translateX(isChatLockedOpen[5]).withTiming, STANDARD_EASING: translateX(isChatLockedOpen[6]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[7]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[7]).SIDE_PANEL_OPEN_DURATION_MS };
  S.__closure = obj2;
  S.__workletHash = 9063010717249;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  const obj3 = translateX(isChatLockedOpen[8]);
  const gradientTop = obj3.useGradientTop();
  const items = [, , , ];
  ({ container: arr[0], splitDivider: arr[1] } = tmp);
  items[2] = gradientTop;
  items[3] = animatedStyle;
  const View = maxWidth(isChatLockedOpen[4]).View;
  return <View pointerEvents="none" style={items}>{null}</View>;
};
