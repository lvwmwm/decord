// Module ID: 14794
// Function ID: 112843
// Name: ChannelScreenAnimatedFrame
// Dependencies: [31, 27, 9123, 653, 33, 4130, 689, 4066, 1324, 3991, 4131, 1273, 14792, 8829, 5121, 2]
// Exports: default

// Module 14794 (ChannelScreenAnimatedFrame)
import "result";
import { View } from "get ActivityIndicator";
import MIN_HEADER_HEIGHT from "MIN_HEADER_HEIGHT";
import { ThemeTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let HEADER_CORNER_RADIUS;
let MIDNIGHT_BORDER_WIDTH;
let closure_5;
let closure_6;
const require = arg1;
({ HEADER_CORNER_RADIUS, MIDNIGHT_BORDER_WIDTH } = MIN_HEADER_HEIGHT);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", zIndex: 1, top: 0, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.midnightContainer = { borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
let obj1 = { borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
_createForOfIteratorHelperLoose.splitDivider = { borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderLeftWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
_createForOfIteratorHelperLoose.additionalHeight = { height: HEADER_CORNER_RADIUS };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = { code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}" };
const obj2 = { borderLeftColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderLeftWidth: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
const result = require("MIN_HEADER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const isChatLockedOpen = translateX.isChatLockedOpen;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = translateX(isChatLockedOpen[8]);
  let obj1 = translateX(isChatLockedOpen[9]);
  class E {
    constructor() {
      tmp = translateX.get() === maxWidth || isChatLockedOpen;
      obj = {};
      obj2 = translateX(isChatLockedOpen[10]);
      num = 1;
      if (tmp) {
        num = 0;
      }
      obj = { easing: translateX(isChatLockedOpen[11]).STANDARD_EASING };
      tmp2 = translateX(isChatLockedOpen[12]);
      obj.duration = tmp ? tmp2.SIDE_PANEL_CLOSE_DURATION_MS : tmp2.SIDE_PANEL_OPEN_DURATION_MS;
      obj.opacity = obj2.withTiming(num, obj);
      return obj;
    }
  }
  obj = { translateX, maxWidth, isChatLockedOpen, withTiming: translateX(isChatLockedOpen[10]).withTiming, STANDARD_EASING: translateX(isChatLockedOpen[11]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: translateX(isChatLockedOpen[12]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: translateX(isChatLockedOpen[12]).SIDE_PANEL_OPEN_DURATION_MS };
  E.__closure = obj;
  E.__workletHash = 9063010717249;
  E.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(E);
  let tmp2 = maxWidth(isChatLockedOpen[7])();
  const gradientTop = translateX(isChatLockedOpen[13]).useGradientTop();
  obj = { pointerEvents: "none" };
  const items = [, , , , ];
  ({ container: arr[0], splitDivider: arr[1] } = tmp);
  let midnightContainer;
  if (tmp2 === ThemeTypes.MIDNIGHT) {
    if (!obj.useMobileVisualRefreshConfig({ location: "ChannelScreenAnimatedFrame" }).chatInputFloating) {
      midnightContainer = tmp.midnightContainer;
    }
  }
  items[2] = midnightContainer;
  items[3] = gradientTop;
  items[4] = animatedStyle;
  obj.style = items;
  const items1 = [callback(translateX(isChatLockedOpen[14]).SafeAreaPaddingView, { top: true }), ];
  obj1 = { style: tmp.additionalHeight };
  items1[1] = callback(View, obj1);
  obj.children = items1;
  return closure_6(maxWidth(isChatLockedOpen[9]).View, obj);
};
