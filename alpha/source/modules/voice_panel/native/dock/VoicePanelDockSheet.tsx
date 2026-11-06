// Module ID: 19507
// Function ID: 19508
// Name: VoicePanelDockSheet
// Dependencies: [19, 17, 11381, 11399, 21, 11407, 5754, 575, 5167, 1652, 11380, 19508, 2]
// Exports: VoicePanelContentWithDock, getDockSheetShadowOpacity, getDockSheetShape, getDockSheetSurfaceStyle, getDockSheetTransform, useDockSheetSurfaceFills

// Module 19507 (VoicePanelDockSheet)
import react_native from "react-native" /* 17 */;
import _mod1652 from "module_1652" /* 1652 */;
import ColorUtils from "ColorUtils" /* 5167 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11380 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11407 */;
import VoicePanelDockDefault from "VoicePanelDock" /* 19508 */;
import react from "react" /* 19 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11381 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11399 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let diff, max, opacity, tmp3, value;

let DOCK_PRESS_EXTENSION;
let DOCK_SETTLE_PROGRESS;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp18;
let tmp19;
let tmp20;
let tmp21;
let tmp22;
let tmp23;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const _modDef1652 = tmp(1652);
const StyleSheet = react_native.StyleSheet;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const DEFAULT_BORDER_RADIUS = VoicePanelConstants.DEFAULT_BORDER_RADIUS;
({ DOCK_SETTLE_PROGRESS, DOCK_PRESS_EXTENSION } = VoicePanelDockConstants);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [{ code: "(function getDockSheetTransform_VoicePanelDockSheetTsx1({connected:connected,progress:progress,wrapperDimensions:wrapperDimensions,dockHeight:dockHeight,dockBottom:dockBottom,dockJoinMorphOrigin:dockJoinMorphOrigin,dockEntryProgress:dockEntryProgress,sheetExitProgress:sheetExitProgress,dockPressProgress:dockPressProgress}){let[getDockRect,shrinkDockAroundCenter,scaleDockAroundCenter,DOCK_PRESS_EXTENSION]=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight,drawerX:drawerX,drawerY:drawerY}=wrapperDimensions;if(!connected&&progress<=0||drawerWidth<=0||drawerHeight<=0){return null;}const fullRect={x:drawerX,y:drawerY,width:drawerWidth,height:drawerHeight};const restRect={...getDockRect(fullRect,dockHeight),y:drawerY+Math.max(Math.max(dockBottom-drawerY,drawerHeight)-dockHeight,0)};const origin=dockJoinMorphOrigin!=null?{...dockJoinMorphOrigin,height:drawerHeight*(dockJoinMorphOrigin.width/drawerWidth)}:fullRect;const geometry=shrinkDockAroundCenter(progress,origin,restRect);const{translateX:translateX,translateY:translateY,scale:scale}=scaleDockAroundCenter(geometry,drawerWidth,drawerHeight);const onScreenHeight=dockHeight+(drawerHeight-dockHeight)*(1-progress);const offscreen=(1-dockEntryProgress+sheetExitProgress)*onScreenHeight;const pressExtension=dockPressProgress*DOCK_PRESS_EXTENSION;return{translateX:translateX,translateY:translateY+offscreen-pressExtension,scale:scale};})" }, VoicePanelSheetMorph.getDockRect, VoicePanelSheetMorph.shrinkDockAroundCenter, VoicePanelSheetMorph.scaleDockAroundCenter, DOCK_PRESS_EXTENSION];
[tmp5, tmp6, tmp7, tmp8, tmp9] = items;
function getDockSheetTransform(connected) {
  let dockHeight;
  let dockJoinMorphOrigin;
  let drawerHeight;
  let drawerWidth;
  let drawerY;
  let progress;
  let wrapperDimensions;
  ({ progress, wrapperDimensions, dockHeight, dockJoinMorphOrigin } = connected);
  ({ drawerWidth, drawerHeight, drawerY } = wrapperDimensions);
  if (connected.connected) {
    if (drawerWidth > 0) {
      if (drawerHeight > 0) {
        size = { x: tmp5, y: drawerY, width: drawerWidth, height: drawerHeight };
        const obj2 = { y: drawerY + Math.max(Math.max(tmp - drawerY, drawerHeight) - dockHeight, 0) };
        const merged = Object.assign(_undefined(size, dockHeight));
        const _Math = Math;
        const _Math2 = Math;
        let tmp9 = size;
        if (null != dockJoinMorphOrigin) {
          const obj = { height: drawerHeight * (dockJoinMorphOrigin.width / drawerWidth) };
          const merged1 = Object.assign(dockJoinMorphOrigin);
          tmp9 = obj;
        }
        const tmp12 = _undefined3(_undefined2(progress, tmp9, obj2), drawerWidth, drawerHeight);
        return { translateX: tmp12.translateX, translateY: tmp12.translateY + (1 - tmp2 + tmp3) * (dockHeight + (drawerHeight - dockHeight) * (1 - progress)) - tmp4 * c3, scale: tmp12.scale };
      }
    }
  }
  return null;
}
let items1 = [tmp6, tmp7, tmp8, tmp9];
getDockSheetTransform.__closure = items1;
getDockSheetTransform.__workletHash = 3423331622410;
getDockSheetTransform.__initData = tmp5;
let items2 = [{ code: "(function getDockSheetShape_VoicePanelDockSheetTsx2({connected:connected,dockJoinMorphOrigin:dockJoinMorphOrigin,sheetMorphProgress:sheetMorphProgress,wrapperDimensions:wrapperDimensions}){let[DEFAULT_BORDER_RADIUS,interpolate,Extrapolation]=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions;const startRadius=dockJoinMorphOrigin!=null&&dockJoinMorphOrigin.width>0?DEFAULT_BORDER_RADIUS*(drawerWidth/dockJoinMorphOrigin.width):0;const topRadius=connected?interpolate(sheetMorphProgress,[0,1],[DEFAULT_BORDER_RADIUS,startRadius],Extrapolation.CLAMP):DEFAULT_BORDER_RADIUS;const bottomRadius=connected?0:DEFAULT_BORDER_RADIUS;return{width:drawerWidth,height:drawerHeight,borderTopLeftRadius:topRadius,borderTopRightRadius:topRadius,borderBottomLeftRadius:bottomRadius,borderBottomRightRadius:bottomRadius};})" }, DEFAULT_BORDER_RADIUS, _mod1652.interpolate, _mod1652.Extrapolation];
[tmp10, tmp11, tmp12, tmp13] = items2;
function getDockSheetShape(arg0) {
  let borderTopLeftRadius;
  let connected;
  let dockJoinMorphOrigin;
  let sheetMorphProgress;
  let tmp2;
  let wrapperDimensions;
  ({ connected, dockJoinMorphOrigin, sheetMorphProgress, wrapperDimensions } = arg0);
  const width = wrapperDimensions.drawerWidth;
  let num = 0;
  const height = wrapperDimensions.drawerHeight;
  if (null != dockJoinMorphOrigin) {
    num = 0;
    if (dockJoinMorphOrigin.width > 0) {
      num = c0 * (width / dockJoinMorphOrigin.width);
    }
  }
  if (connected) {
    const items = [c0, num];
    borderTopLeftRadius = _undefined(sheetMorphProgress, [0, 1], items, _undefined2.CLAMP);
    tmp2 = c0;
  } else {
    tmp2 = c0;
    borderTopLeftRadius = c0;
  }
  let borderBottomLeftRadius = 0;
  if (!connected) {
    borderBottomLeftRadius = tmp2;
  }
  return { width, height, borderTopLeftRadius, borderTopRightRadius: borderTopLeftRadius, borderBottomLeftRadius, borderBottomRightRadius: borderBottomLeftRadius };
}
const items3 = [tmp11, tmp12, tmp13];
getDockSheetShape.__closure = items3;
getDockSheetShape.__workletHash = 16412823313747;
getDockSheetShape.__initData = tmp10;
const items4 = [{ code: "(function getDockSheetSurfaceStyle_VoicePanelDockSheetTsx3(inputs,{pressedFill:pressedFill,restingFill:restingFill,fullscreenFill:fullscreenFill,prejoinFill:prejoinFill}){let[interpolateColor,JOIN_SETTLE_PROGRESS,DOCK_SETTLE_PROGRESS,getDockSheetShape,VoicePanelModes]=this.__closure;const{connected:connected,dockPressProgress:dockPressProgress,dockJoinMorphOrigin:dockJoinMorphOrigin,mode:mode,sheetMorphProgress:sheetMorphProgress}=inputs;const joining=dockJoinMorphOrigin!=null;const fill=connected?interpolateColor(sheetMorphProgress,[0,joining?JOIN_SETTLE_PROGRESS:DOCK_SETTLE_PROGRESS,1],[interpolateColor(dockPressProgress,[0,1],[restingFill,pressedFill]),pressedFill,joining?prejoinFill:fullscreenFill]):prejoinFill;return{...getDockSheetShape(inputs),backgroundColor:fill,pointerEvents:mode===VoicePanelModes.DISMISSED?'none':'auto'};})" }, _mod1652.interpolateColor, 0.03, DOCK_SETTLE_PROGRESS, getDockSheetShape, VoicePanelModes];
let c3;
let c4;
[tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items4;
function getDockSheetSurfaceStyle(dockJoinMorphOrigin, arg1) {
  let fullscreenFill;
  let prejoinFill;
  let pressedFill;
  let str;
  ({ pressedFill, fullscreenFill, prejoinFill } = arg1);
  let tmp6Result = prejoinFill;
  const mode = dockJoinMorphOrigin.mode;
  if (dockJoinMorphOrigin.connected) {
    const items = [0, null != dockJoinMorphOrigin.dockJoinMorphOrigin ? c1 : c2, 1];
    const items1 = [tmp, pressedFill];
    const items2 = [_undefined(tmp2, [0, 1], items1), pressedFill, ];
    if (null != dockJoinMorphOrigin.dockJoinMorphOrigin) {
      fullscreenFill = prejoinFill;
    }
    items2[2] = fullscreenFill;
    tmp6Result = tmp6(tmp3, items, items2);
  }
  const obj = { backgroundColor: tmp6Result, pointerEvents: str };
  const merged = Object.assign(_undefined(dockJoinMorphOrigin));
  str = "auto";
  if (mode === _undefined2.DISMISSED) {
    str = "none";
  }
  return obj;
}
const items5 = [tmp15, tmp16, tmp17, tmp18, tmp19];
getDockSheetSurfaceStyle.__closure = items5;
getDockSheetSurfaceStyle.__workletHash = 735853986892;
getDockSheetSurfaceStyle.__initData = tmp14;
const items6 = [{ code: "(function getDockSheetShadowOpacity_VoicePanelDockSheetTsx4(dockPressProgress,sheetMorphProgress){let[interpolate,DOCK_SETTLE_PROGRESS,Extrapolation]=this.__closure;return Math.max(dockPressProgress,interpolate(sheetMorphProgress,[0,DOCK_SETTLE_PROGRESS],[0,1],Extrapolation.CLAMP));})" }, _mod1652.interpolate, DOCK_SETTLE_PROGRESS, _mod1652.Extrapolation];
let c0;
let c1;
let c2;
[tmp20, tmp21, tmp22, tmp23] = items6;
function getDockSheetShadowOpacity(arg0, arg1) {
  const items = [0, c1];
  return Math.max(arg0, _undefined(arg1, items, [0, 1], _undefined2.CLAMP));
}
const items7 = [tmp21, tmp22, tmp23];
getDockSheetShadowOpacity.__closure = items7;
getDockSheetShadowOpacity.__workletHash = 12557842886465;
getDockSheetShadowOpacity.__initData = tmp20;
let closure_9 = { code: "(function VoicePanelDockSheetTsx5(){let[dockMinimizeProgress,wrapperDimensions,dockJoinMorphOrigin,isDockConnected,mode,VoicePanelModes,SHEET_MORPH_JOINING_PANEL_FADE,isDockExpanding,SHEET_MORPH_EXPANDING_PANEL_FADE,SHEET_MORPH_DOCKING_PANEL_FADE,dockContentSwap,getSheetMorphFadeProgress,isDockRowTouchable]=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();const isJoining=dockJoinMorphOrigin.get()!=null;if(!isDockConnected.get()||drawerHeight<=0){const isShowingContent=mode.get()!==VoicePanelModes.PIP||isJoining;return{opacity:isShowingContent?1:0,pointerEvents:'box-none'};}const fade=isJoining?SHEET_MORPH_JOINING_PANEL_FADE:isDockExpanding.get()?SHEET_MORPH_EXPANDING_PANEL_FADE:SHEET_MORPH_DOCKING_PANEL_FADE;return{opacity:Math.max(dockContentSwap.get(),getSheetMorphFadeProgress(progress,fade.start,fade.end)),pointerEvents:isDockRowTouchable(progress)?'none':'box-none'};})" };
let closure_10 = react.memo(function SheetFullscreenContent(children) {
  let dockContentSwap;
  let dockJoinMorphOrigin;
  let dockMinimizeProgress;
  let isDockConnected;
  let isDockExpanding;
  let items2;
  let mode;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let wrapperDimensions;
  children = children.children;
  let tmp2 = dependencyMap;
  const context = react.useContext(VoicePanelStateContextDefault);
  ({ dockContentSwap, isDockConnected, isDockExpanding, dockJoinMorphOrigin, mode, dockMinimizeProgress, wrapperDimensions } = context);
  let tmp4 = _mod1652;
  const items = [closure_9, dockMinimizeProgress, wrapperDimensions, dockJoinMorphOrigin, isDockConnected, mode, VoicePanelModes, , , , , , , ];
  const useAnimatedStyle = tmp4.useAnimatedStyle;
  items[7] = VoicePanelSheetMorph.SHEET_MORPH_JOINING_PANEL_FADE;
  items[8] = isDockExpanding;
  items[9] = VoicePanelSheetMorph.SHEET_MORPH_EXPANDING_PANEL_FADE;
  items[10] = VoicePanelSheetMorph.SHEET_MORPH_DOCKING_PANEL_FADE;
  items[11] = dockContentSwap;
  items[12] = VoicePanelSheetMorph.getSheetMorphFadeProgress;
  items[13] = VoicePanelSheetMorph.isDockRowTouchable;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items;
  class VoicePanelDockSheetTsx5 {
    constructor() {
      diff = 1 - closure_0.get();
      drawerHeight = closure_1.get().drawerHeight;
      tmp2 = null != closure_2.get();
      if (closure_3.get()) {
        num = 0;
        if (drawerHeight > 0) {
          if (tmp2) {
            tmp4 = closure_6;
          } else {
            tmp3 = closure_7;
            tmp4 = closure_7.get() ? closure_8 : closure_9;
          }
          obj = { opacity: null, pointerEvents: null };
          tmp5 = globalThis;
          _Math = Math;
          tmp6 = closure_10;
          max = Math.max;
          tmp8 = closure_11;
          value = closure_10.get();
          obj.opacity = max(value, closure_11(diff, tmp4.start, tmp4.end));
          tmp9 = closure_12;
          str = "box-none";
          if (closure_12(diff)) {
            str = "none";
          }
          obj.pointerEvents = str;
          return obj;
        }
      }
      if (closure_4.get() !== closure_5.PIP) {
        opacity = 1;
      } else {
        opacity = 0;
      }
      return { opacity, pointerEvents: "box-none" };
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  VoicePanelDockSheetTsx5.__closure = items1;
  VoicePanelDockSheetTsx5.__workletHash = 14755707317578;
  VoicePanelDockSheetTsx5.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(VoicePanelDockSheetTsx5);
  let obj = { style: items2, children };
  items2 = [StyleSheet.absoluteFill, animatedStyle];
  return metroRequire(_modDef1652.View, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSheet.tsx");

export { getDockSheetTransform };
export function useDockSheetSurfaceFills() {
  let token;
  let token1;
  let token2;
  let obj = token(token2[6]);
  token = obj.useToken(token1(token2[7]).colors.BACKGROUND_BASE_LOW);
  let obj2 = token(token2[6]);
  token1 = obj2.useToken(token1(token2[7]).colors.MOBILE_VOICE_PANEL_BACKGROUND);
  const obj3 = token(token2[6]);
  token2 = obj3.useToken(token1(token2[7]).colors.BACKGROUND_BASE_LOWER);
  const items = [token1, token2, token];
  return react.useMemo(() => {
    let obj2;
    const obj = { pressedFill: token, restingFill: obj2.hexWithOpacity(token, 0), fullscreenFill: token1, prejoinFill: token2 };
    obj2 = ColorUtils;
    return obj;
  }, items);
}
export { getDockSheetShape };
export { getDockSheetSurfaceStyle };
export { getDockSheetShadowOpacity };
export function VoicePanelContentWithDock(children) {
  let items;
  const obj = { children: items };
  items = [, ];
  const obj2 = { children: children.children };
  items[0] = metroRequire(closure_10, obj2);
  items[1] = metroRequire(VoicePanelDockDefault, {});
  return metroImportAll(metroImportDefault, obj);
}
