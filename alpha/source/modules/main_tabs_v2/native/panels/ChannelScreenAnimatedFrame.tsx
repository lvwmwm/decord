// Module ID: 18721
// Function ID: 18722
// Name: ChannelScreenAnimatedFrame
// Dependencies: [19, 17, 21, 5306, 575, 1630, 1655, 9060, 2]
// Exports: default

// Module 18721 (ChannelScreenAnimatedFrame)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import _mod1655 from "module_1655" /* 1655 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9060 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let num2, opacity, tmp2, tmp3, tmp4, tmp5;

let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, splitDivider: obj3 };
obj2 = { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { zIndex: 1, borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_6 = createStyles(obj);
let closure_7 = { code: "(function ChannelScreenAnimatedFrameTsx1(){let[isChatLockedOpen,interpolate,translateX,maxWidth,Extrapolation]=this.__closure;return{opacity:isChatLockedOpen?0:interpolate(translateX.get(),[maxWidth,0],[0,1],Extrapolation.CLAMP)};})" };
let closure_8 = { code: "(function ChannelScreenAnimatedFrameTsx2(){let[isChatLockedOpen,interpolate,translateX,maxWidth,Extrapolation]=this.__closure;return{opacity:isChatLockedOpen?1:interpolate(translateX.get(),[maxWidth,0],[1,0],Extrapolation.CLAMP)};})" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(arg0) {
  let isChatLockedOpen;
  let items4;
  let items5;
  let items6;
  let maxWidth;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let translateX;
  ({ translateX, maxWidth, isChatLockedOpen } = arg0);
  const tmp = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  let items = [closure_7, isChatLockedOpen, , , , ];
  const useAnimatedStyle = _mod1655.useAnimatedStyle;
  items[2] = _mod1655.interpolate;
  items[3] = translateX;
  items[4] = maxWidth;
  items[5] = _mod1655.Extrapolation;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class ChannelScreenAnimatedFrameTsx1 {
    constructor() {
      opacity = 0;
      if (!closure_0) {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        items = [, ];
        items[0] = closure_3;
        items[1] = 0;
        tmp4 = closure_4;
        tmp5 = items;
        opacity = closure_1(closure_2.get(), items, [0, 1], closure_4.CLAMP);
      }
      return { opacity };
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  ChannelScreenAnimatedFrameTsx1.__closure = items1;
  ChannelScreenAnimatedFrameTsx1.__workletHash = 9515959290845;
  ChannelScreenAnimatedFrameTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(ChannelScreenAnimatedFrameTsx1);
  const items2 = [closure_8, isChatLockedOpen, , , , ];
  const useAnimatedStyle2 = tmp4(1655).useAnimatedStyle;
  _mod1655;
  items2[2] = _mod1655.interpolate;
  items2[3] = translateX;
  items2[4] = maxWidth;
  items2[5] = _mod1655.Extrapolation;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items2;
  class ChannelScreenAnimatedFrameTsx2 {
    constructor() {
      opacity = 1;
      if (!closure_0) {
        tmp = closure_1;
        tmp2 = closure_2;
        tmp3 = closure_3;
        items = [, ];
        items[0] = closure_3;
        num2 = 0;
        items[1] = 0;
        tmp4 = closure_4;
        tmp5 = items;
        opacity = closure_1(closure_2.get(), items, [1, 0], closure_4.CLAMP);
      }
      return { opacity };
    }
  }
  const items3 = [tmp15, tmp16, tmp17, tmp18, tmp19];
  ChannelScreenAnimatedFrameTsx2.__closure = items3;
  ChannelScreenAnimatedFrameTsx2.__workletHash = 11289548854911;
  ChannelScreenAnimatedFrameTsx2.__initData = tmp14;
  const animatedStyle2 = useAnimatedStyle2(ChannelScreenAnimatedFrameTsx2);
  const obj = { children: items5 };
  const tmp4Result2 = ClientThemesOverrides;
  const gradientTop = tmp4Result2.useGradientTop();
  const obj2 = { pointerEvents: "none", style: items4 };
  items4 = [tmp.container, { height: top }, gradientTop, animatedStyle];
  items5 = [_false(tmp2(1655).View, obj2), ];
  const obj3 = { pointerEvents: "none", style: items6 };
  items6 = [tmp.splitDivider, { top }, animatedStyle2];
  items5[1] = _false(_modDef1655.View, obj3);
  return hasOwnProperty(constants, obj);
};
