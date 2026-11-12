// Module ID: 19174
// Function ID: 19175
// Name: ChannelScreenFrameContainer
// Dependencies: [19, 17, 21, 5243, 575, 18584, 5839, 1652, 5200, 2]
// Exports: ChannelScreenFrameTopBorder, default

// Module 19174 (ChannelScreenFrameContainer)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import DeviceUtils from "DeviceUtils" /* 5200 */;
import useToken from "useToken" /* 5839 */;
import useAppFrameDefault from "useAppFrame" /* 18584 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let _Math, _Math2, borderRadius, num, tmp3;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
function FramedContainer(translateX) {
  let children;
  let items4;
  let items6;
  let roundCorners;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp9;
  translateX = translateX.translateX;
  ({ roundCorners, children } = translateX);
  const merged = Object.assign(translateX, Object.assign({ translateX: 0, roundCorners: 0, children: 0 }));
  const tmp2 = closure_8();
  const tmp5 = useAppFrameDefault().hasFrame && roundCorners;
  let obj = useToken;
  const token = obj.useToken(tmp3(575).modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH);
  const items = [closure_9, tmp5, translateX, ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[3] = nativeDefault;
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items;
  class ChannelScreenFrameContainerTsx1 {
    constructor() {
      borderRadius = 0;
      if (closure_0) {
        tmp = globalThis;
        _Math = Math;
        _Math2 = Math;
        tmp2 = closure_1;
        tmp3 = closure_2;
        borderRadius = Math.min(Math.max(closure_1.get(), 0), closure_2.radii.xl);
      }
      return { borderRadius };
    }
  }
  const items1 = [tmp10, tmp11, tmp12];
  ChannelScreenFrameContainerTsx1.__closure = items1;
  ChannelScreenFrameContainerTsx1.__workletHash = 6281290789316;
  ChannelScreenFrameContainerTsx1.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(ChannelScreenFrameContainerTsx1);
  const items2 = [closure_10, translateX, , ];
  const useAnimatedStyle2 = tmp6(1652).useAnimatedStyle;
  _mod1652;
  items2[2] = nativeDefault;
  items2[3] = token;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items2;
  class ChannelScreenFrameContainerTsx2 {
    constructor() {
      obj = { borderRadius: Math.min(Math.max(closure_0.get(), 0), closure_1.radii.xl), borderLeftWidth: null };
      num = 0;
      if (closure_0.get() > 0) {
        num = closure_2;
      }
      obj.borderLeftWidth = num;
      return obj;
    }
  }
  const items3 = [tmp16, tmp17, tmp18];
  ChannelScreenFrameContainerTsx2.__closure = items3;
  ChannelScreenFrameContainerTsx2.__workletHash = 4924901768105;
  ChannelScreenFrameContainerTsx2.__initData = tmp15;
  const animatedStyle2 = useAnimatedStyle2(ChannelScreenFrameContainerTsx2);
  const obj2 = { style: items4, children };
  View = tmp3(1652).View;
  const merged1 = Object.assign(merged);
  items4 = [StyleSheet.absoluteFill, , ];
  let clip;
  const tmp20 = metroImportDefault;
  const tmp21 = metroRequire;
  if (tmp5) {
    clip = tmp2.clip;
  }
  items4[1] = clip;
  items4[2] = animatedStyle;
  const children1 = [hasOwnProperty(View, obj2), ];
  let tmp22Result = null;
  if (tmp5) {
    const obj3 = { pointerEvents: "none", style: items6 };
    items6 = [tmp2.border, animatedStyle2];
    tmp22Result = tmp22(tmp3(1652).View, obj3);
  }
  children1[1] = tmp22Result;
  return tmp20(tmp21, { children: children1 });
}
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { clip: { overflow: "hidden" }, border: obj2 };
obj2 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderColor: nativeDefault.colors.APP_FRAME_BORDER };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let closure_9 = { code: "(function ChannelScreenFrameContainerTsx1(){let[roundCorners,translateX,tokens]=this.__closure;return{borderRadius:roundCorners?Math.min(Math.max(translateX.get(),0),tokens.radii.xl):0};})" };
let closure_10 = { code: "(function ChannelScreenFrameContainerTsx2(){let[translateX,tokens,borderWidth]=this.__closure;return{borderRadius:Math.min(Math.max(translateX.get(),0),tokens.radii.xl),borderLeftWidth:translateX.get()>0?borderWidth:0};})" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/ChannelScreenFrameContainer.tsx");

export default function ChannelScreenFrameContainer(arg0) {
  let roundCorners;
  let tmp2Result;
  let translateX;
  ({ translateX, roundCorners } = arg0);
  const merged = Object.assign(arg0, Object.assign({ translateX: 0, roundCorners: 0 }));
  const obj = DeviceUtils;
  if (obj.isDuo()) {
    const obj2 = { translateX, roundCorners };
    const merged1 = Object.assign(merged);
    tmp2Result = tmp2(FramedContainer, obj2);
  } else {
    const obj3 = { style: StyleSheet.absoluteFill };
    const merged2 = Object.assign(merged);
    tmp2Result = tmp2(View, obj3);
  }
  return tmp2Result;
};
export function ChannelScreenFrameTopBorder() {
  let tmp2 = null;
  const tmp = closure_8();
  if (useAppFrameDefault().hasFrame) {
    const obj = { pointerEvents: "none", style: tmp.border };
    tmp2 = hasOwnProperty(View, obj);
  }
  return tmp2;
}
