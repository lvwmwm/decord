// Module ID: 14671
// Function ID: 110636
// Name: ChannelScreenAnimatedFrame
// Dependencies: []
// Exports: default

// Module 14671 (ChannelScreenAnimatedFrame)
let HEADER_CORNER_RADIUS;
let MIDNIGHT_BORDER_WIDTH;
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ HEADER_CORNER_RADIUS, MIDNIGHT_BORDER_WIDTH } = arg1(dependencyMap[2]));
const ThemeTypes = arg1(dependencyMap[3]).ThemeTypes;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.midnightContainer = { borderLeftColor: importDefault(dependencyMap[6]).colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
const obj1 = { borderLeftColor: importDefault(dependencyMap[6]).colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
obj.splitDivider = { borderLeftColor: importDefault(dependencyMap[6]).colors.APP_FRAME_BORDER, borderLeftWidth: importDefault(dependencyMap[6]).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
obj.additionalHeight = { height: HEADER_CORNER_RADIUS };
let closure_7 = obj.createStyles(obj);
let closure_8 = { code: "function ChannelScreenAnimatedFrameTsx1(){const{translateX,maxWidth,isChatLockedOpen,withTiming,STANDARD_EASING,SIDE_PANEL_CLOSE_DURATION_MS,SIDE_PANEL_OPEN_DURATION_MS}=this.__closure;const hide=translateX.get()===maxWidth||isChatLockedOpen;return{opacity:withTiming(hide?0:1,{easing:STANDARD_EASING,duration:hide?SIDE_PANEL_CLOSE_DURATION_MS:SIDE_PANEL_OPEN_DURATION_MS})};}" };
const obj2 = { borderLeftColor: importDefault(dependencyMap[6]).colors.APP_FRAME_BORDER, borderLeftWidth: importDefault(dependencyMap[6]).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenAnimatedFrame.tsx");

export default function ChannelScreenAnimatedFrame(translateX) {
  translateX = translateX.translateX;
  const arg1 = translateX;
  const maxWidth = translateX.maxWidth;
  const importDefault = maxWidth;
  const isChatLockedOpen = translateX.isChatLockedOpen;
  const dependencyMap = isChatLockedOpen;
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  let obj1 = arg1(dependencyMap[9]);
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
  obj = { translateX, maxWidth, isChatLockedOpen, withTiming: arg1(dependencyMap[10]).withTiming, STANDARD_EASING: arg1(dependencyMap[11]).STANDARD_EASING, SIDE_PANEL_CLOSE_DURATION_MS: arg1(dependencyMap[12]).SIDE_PANEL_CLOSE_DURATION_MS, SIDE_PANEL_OPEN_DURATION_MS: arg1(dependencyMap[12]).SIDE_PANEL_OPEN_DURATION_MS };
  E.__closure = obj;
  E.__workletHash = 9063010717249;
  E.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(E);
  const tmp2 = importDefault(dependencyMap[7])();
  const gradientTop = arg1(dependencyMap[13]).useGradientTop();
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
  const items1 = [callback(arg1(dependencyMap[14]).SafeAreaPaddingView, { top: true }), ];
  obj1 = { style: tmp.additionalHeight };
  items1[1] = callback(View, obj1);
  obj.children = items1;
  return closure_6(importDefault(dependencyMap[9]).View, obj);
};
