// Module ID: 19201
// Function ID: 19202
// Name: VoicePanelDockSheet
// Dependencies: [19, 17, 11223, 11241, 21, 11249, 5596, 575, 5011, 5095, 11222, 7241, 19202, 2]
// Exports: VoicePanelContentWithDock, getDockSheetShadowOpacity, getDockSheetSurfaceStyle, getDockSheetTransform, useDockSheetSurfaceFills

// Module 19201 (VoicePanelDockSheet)
import react_native from "react-native" /* 17 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import VoicePanelSheetMorph from "VoicePanelSheetMorph" /* 11249 */;
import VoicePanelDockDefault from "VoicePanelDock" /* 19202 */;
import react from "react" /* 19 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11241 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let unpackModuleId;
const StyleSheet = react_native.StyleSheet;
const DEFAULT_BORDER_RADIUS = VoicePanelConstants.DEFAULT_BORDER_RADIUS;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const DOCK_PRESS_EXTENSION = VoicePanelDockConstants.DOCK_PRESS_EXTENSION;
const DOCK_SETTLE_PROGRESS = VoicePanelDockConstants.DOCK_SETTLE_PROGRESS;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
function getDockSheetTransform(connected) {
  let dockHeight;
  let dockJoinMorphOrigin;
  let drawerHeight;
  let drawerWidth;
  let progress;
  let wrapperDimensions;
  ({ progress, wrapperDimensions, dockHeight, dockJoinMorphOrigin } = connected);
  ({ drawerWidth, drawerHeight } = wrapperDimensions);
  if (connected.connected) {
    if (drawerWidth > 0) {
      if (drawerHeight > 0) {
        size = { x: tmp4, y: tmp5, width: drawerWidth, height: drawerHeight };
        let tmp9 = size;
        const obj6 = VoicePanelSheetMorph;
        const dockRect = obj6.getDockRect(size, dockHeight);
        if (null != dockJoinMorphOrigin) {
          const obj = { height: drawerHeight * (dockJoinMorphOrigin.width / drawerWidth) };
          const merged = Object.assign(dockJoinMorphOrigin);
          tmp9 = obj;
        }
        const tmp13Result = VoicePanelSheetMorph;
        const result = tmp13Result.shrinkDockAroundCenter(progress, tmp9, dockRect);
        const tmp13Result2 = VoicePanelSheetMorph;
        const result1 = tmp13Result2.scaleDockAroundCenter(result, drawerWidth, drawerHeight);
        return { translateX: result1.translateX, translateY: result1.translateY + (1 - tmp + tmp2) * (dockHeight + (drawerHeight - dockHeight) * (1 - progress)) - tmp3 * DOCK_PRESS_EXTENSION, scale: result1.scale };
      }
    }
  }
  return null;
}
let obj = { getDockRect: VoicePanelSheetMorph.getDockRect, shrinkDockAroundCenter: VoicePanelSheetMorph.shrinkDockAroundCenter, scaleDockAroundCenter: VoicePanelSheetMorph.scaleDockAroundCenter, DOCK_PRESS_EXTENSION };
getDockSheetTransform.__closure = obj;
getDockSheetTransform.__workletHash = 14978675113825;
getDockSheetTransform.__initData = { code: "function getDockSheetTransform_VoicePanelDockSheetTsx1({connected:connected,progress:progress,wrapperDimensions:wrapperDimensions,dockHeight:dockHeight,dockJoinMorphOrigin:dockJoinMorphOrigin,dockEntryProgress:dockEntryProgress,sheetExitProgress:sheetExitProgress,dockPressProgress:dockPressProgress}){const{getDockRect,shrinkDockAroundCenter,scaleDockAroundCenter,DOCK_PRESS_EXTENSION}=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight,drawerX:drawerX,drawerY:drawerY}=wrapperDimensions;if(!connected&&progress<=0||drawerWidth<=0||drawerHeight<=0){return null;}const fullRect={x:drawerX,y:drawerY,width:drawerWidth,height:drawerHeight};const restRect=getDockRect(fullRect,dockHeight);const origin=dockJoinMorphOrigin!=null?{...dockJoinMorphOrigin,height:drawerHeight*(dockJoinMorphOrigin.width/drawerWidth)}:fullRect;const geometry=shrinkDockAroundCenter(progress,origin,restRect);const{translateX:translateX,translateY:translateY,scale:scale}=scaleDockAroundCenter(geometry,drawerWidth,drawerHeight);const onScreenHeight=dockHeight+(drawerHeight-dockHeight)*(1-progress);const offscreen=(1-dockEntryProgress+sheetExitProgress)*onScreenHeight;const pressExtension=dockPressProgress*DOCK_PRESS_EXTENSION;return{translateX:translateX,translateY:translateY+offscreen-pressExtension,scale:scale};}" };
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
      num = DEFAULT_BORDER_RADIUS * (width / dockJoinMorphOrigin.width);
    }
  }
  if (connected) {
    const items = [DEFAULT_BORDER_RADIUS, num];
    const obj = ReanimatedRexport;
    borderTopLeftRadius = obj.interpolate(sheetMorphProgress, [0, 1], items, ReanimatedRexport.Extrapolation.CLAMP);
    tmp2 = DEFAULT_BORDER_RADIUS;
  } else {
    tmp2 = DEFAULT_BORDER_RADIUS;
    borderTopLeftRadius = DEFAULT_BORDER_RADIUS;
  }
  let borderBottomLeftRadius = 0;
  if (!connected) {
    borderBottomLeftRadius = tmp2;
  }
  return { width, height, borderTopLeftRadius, borderTopRightRadius: borderTopLeftRadius, borderBottomLeftRadius, borderBottomRightRadius: borderBottomLeftRadius };
}
let obj2 = { DEFAULT_BORDER_RADIUS, interpolate: ReanimatedRexport.interpolate, Extrapolation: ReanimatedRexport.Extrapolation };
getDockSheetShape.__closure = obj2;
getDockSheetShape.__workletHash = 17349446304938;
getDockSheetShape.__initData = { code: "function getDockSheetShape_VoicePanelDockSheetTsx2({connected:connected,dockJoinMorphOrigin:dockJoinMorphOrigin,sheetMorphProgress:sheetMorphProgress,wrapperDimensions:wrapperDimensions}){const{DEFAULT_BORDER_RADIUS,interpolate,Extrapolation}=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions;const startRadius=dockJoinMorphOrigin!=null&&dockJoinMorphOrigin.width>0?DEFAULT_BORDER_RADIUS*(drawerWidth/dockJoinMorphOrigin.width):0;const topRadius=connected?interpolate(sheetMorphProgress,[0,1],[DEFAULT_BORDER_RADIUS,startRadius],Extrapolation.CLAMP):DEFAULT_BORDER_RADIUS;const bottomRadius=connected?0:DEFAULT_BORDER_RADIUS;return{width:drawerWidth,height:drawerHeight,borderTopLeftRadius:topRadius,borderTopRightRadius:topRadius,borderBottomLeftRadius:bottomRadius,borderBottomRightRadius:bottomRadius};}" };
function getDockSheetSurfaceStyle(dockJoinMorphOrigin, dockSheetSurfaceFills) {
  let connected;
  let fullscreenFill;
  let prejoinFill;
  let pressedFill;
  let sheetMorphProgress;
  let str;
  let wrapperDimensions;
  ({ pressedFill, fullscreenFill, prejoinFill } = dockSheetSurfaceFills);
  let interpolateColorResult = prejoinFill;
  const mode = dockJoinMorphOrigin.mode;
  if (dockJoinMorphOrigin.connected) {
    let num = 0.03;
    const interpolateColor = ReanimatedRexport.interpolateColor;
    ReanimatedRexport;
    const tmp6 = require;
    if (null == dockJoinMorphOrigin.dockJoinMorphOrigin) {
      num = DOCK_SETTLE_PROGRESS;
    }
    const items = [0, num, 1];
    const items1 = [tmp, pressedFill];
    const items2 = [, , ];
    const tmp6Result = tmp6(5095);
    items2[0] = tmp6Result.interpolateColor(tmp2, [0, 1], items1);
    items2[1] = pressedFill;
    if (null != dockJoinMorphOrigin.dockJoinMorphOrigin) {
      fullscreenFill = prejoinFill;
    }
    items2[2] = fullscreenFill;
    interpolateColorResult = interpolateColor(tmp3, items, items2);
  }
  if (typeof getDockSheetShape === "function") {
    let interpolateResult;
    let tmp10;
    ({ connected, dockJoinMorphOrigin, sheetMorphProgress, wrapperDimensions } = dockJoinMorphOrigin);
    const drawerWidth = wrapperDimensions.drawerWidth;
    let num4 = 0;
    const drawerHeight = wrapperDimensions.drawerHeight;
    if (null != dockJoinMorphOrigin) {
      num4 = 0;
      if (dockJoinMorphOrigin.width > 0) {
        num4 = DEFAULT_BORDER_RADIUS * (drawerWidth / dockJoinMorphOrigin.width);
      }
    }
    if (connected) {
      const items3 = [DEFAULT_BORDER_RADIUS, num4];
      const obj2 = ReanimatedRexport;
      interpolateResult = obj2.interpolate(sheetMorphProgress, [0, 1], items3, ReanimatedRexport.Extrapolation.CLAMP);
      tmp10 = DEFAULT_BORDER_RADIUS;
    } else {
      tmp10 = DEFAULT_BORDER_RADIUS;
      interpolateResult = DEFAULT_BORDER_RADIUS;
    }
    let num5 = 0;
    if (!connected) {
      num5 = tmp10;
    }
    size = { width: drawerWidth, height: drawerHeight, borderTopLeftRadius: interpolateResult, borderTopRightRadius: interpolateResult, borderBottomLeftRadius: num5, borderBottomRightRadius: num5 };
    const obj = { backgroundColor: interpolateColorResult, pointerEvents: str };
    const merged = Object.assign(size);
    str = "auto";
    if (mode === VoicePanelModes.DISMISSED) {
      str = "none";
    }
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let obj3 = { interpolateColor: ReanimatedRexport.interpolateColor, JOIN_SETTLE_PROGRESS: 0.03, DOCK_SETTLE_PROGRESS, getDockSheetShape, VoicePanelModes };
getDockSheetSurfaceStyle.__closure = obj3;
getDockSheetSurfaceStyle.__workletHash = 3422786939285;
getDockSheetSurfaceStyle.__initData = { code: "function getDockSheetSurfaceStyle_VoicePanelDockSheetTsx3(inputs,{pressedFill:pressedFill,restingFill:restingFill,fullscreenFill:fullscreenFill,prejoinFill:prejoinFill}){const{interpolateColor,JOIN_SETTLE_PROGRESS,DOCK_SETTLE_PROGRESS,getDockSheetShape,VoicePanelModes}=this.__closure;const{connected:connected,dockPressProgress:dockPressProgress,dockJoinMorphOrigin:dockJoinMorphOrigin,mode:mode,sheetMorphProgress:sheetMorphProgress}=inputs;const joining=dockJoinMorphOrigin!=null;const fill=connected?interpolateColor(sheetMorphProgress,[0,joining?JOIN_SETTLE_PROGRESS:DOCK_SETTLE_PROGRESS,1],[interpolateColor(dockPressProgress,[0,1],[restingFill,pressedFill]),pressedFill,joining?prejoinFill:fullscreenFill]):prejoinFill;return{...getDockSheetShape(inputs),backgroundColor:fill,pointerEvents:mode===VoicePanelModes.DISMISSED?'none':'auto'};}" };
function getDockSheetShadowOpacity(value, arg1) {
  const items = [0, DOCK_SETTLE_PROGRESS];
  const obj = ReanimatedRexport;
  return max(value, obj.interpolate(arg1, items, [0, 1], ReanimatedRexport.Extrapolation.CLAMP));
}
getDockSheetShadowOpacity.__closure = { interpolate: ReanimatedRexport.interpolate, DOCK_SETTLE_PROGRESS, Extrapolation: ReanimatedRexport.Extrapolation };
getDockSheetShadowOpacity.__workletHash = 8648908038104;
getDockSheetShadowOpacity.__initData = { code: "function getDockSheetShadowOpacity_VoicePanelDockSheetTsx4(dockPressProgress,sheetMorphProgress){const{interpolate,DOCK_SETTLE_PROGRESS,Extrapolation}=this.__closure;return Math.max(dockPressProgress,interpolate(sheetMorphProgress,[0,DOCK_SETTLE_PROGRESS],[0,1],Extrapolation.CLAMP));}" };
const __initData = { code: "function VoicePanelDockSheetTsx5(){const{dockMinimizeProgress,wrapperDimensions,dockJoinMorphOrigin,isDockConnected,mode,VoicePanelModes,SHEET_MORPH_JOINING_PANEL_FADE,isDockExpanding,SHEET_MORPH_EXPANDING_PANEL_FADE,SHEET_MORPH_DOCKING_PANEL_FADE,dockContentSwap,getSheetMorphFadeProgress,isDockRowTouchable}=this.__closure;const progress=1-dockMinimizeProgress.get();const{drawerHeight:drawerHeight}=wrapperDimensions.get();const isJoining=dockJoinMorphOrigin.get()!=null;if(!isDockConnected.get()||drawerHeight<=0){const isShowingContent=mode.get()!==VoicePanelModes.PIP||isJoining;return{opacity:isShowingContent?1:0,pointerEvents:'box-none'};}const fade=isJoining?SHEET_MORPH_JOINING_PANEL_FADE:isDockExpanding.get()?SHEET_MORPH_EXPANDING_PANEL_FADE:SHEET_MORPH_DOCKING_PANEL_FADE;return{opacity:Math.max(dockContentSwap.get(),getSheetMorphFadeProgress(progress,fade.start,fade.end)),pointerEvents:isDockRowTouchable(progress)?'none':'box-none'};}" };
({ interpolate: ReanimatedRexport.interpolate, DOCK_SETTLE_PROGRESS, Extrapolation: ReanimatedRexport.Extrapolation });
let closure_14 = react.memo(function SheetFullscreenContent(children) {
  let items;
  let isDockConnected;
  let isDockExpanding;
  let dockJoinMorphOrigin;
  children = children.children;
  const context = dockJoinMorphOrigin.useContext(isDockConnected(isDockExpanding[10]));
  const dockContentSwap = context.dockContentSwap;
  isDockConnected = context.isDockConnected;
  isDockExpanding = context.isDockExpanding;
  dockJoinMorphOrigin = context.dockJoinMorphOrigin;
  const mode = context.mode;
  const dockMinimizeProgress = context.dockMinimizeProgress;
  const wrapperDimensions = context.wrapperDimensions;
  let obj = dockContentSwap(isDockExpanding[9]);
  const fn = function s() {
    let max;
    let obj2;
    let opacity;
    let str;
    let value2;
    const diff = 1 - dockMinimizeProgress.get();
    const drawerHeight = wrapperDimensions.get().drawerHeight;
    const tmp2 = null != dockJoinMorphOrigin.get();
    if (isDockConnected.get()) {
      if (drawerHeight > 0) {
        let SHEET_MORPH_JOINING_PANEL_FADE;
        if (tmp2) {
          SHEET_MORPH_JOINING_PANEL_FADE = VoicePanelSheetMorph.SHEET_MORPH_JOINING_PANEL_FADE;
        } else {
          const value = isDockExpanding.get();
          const tmp7 = VoicePanelSheetMorph;
          SHEET_MORPH_JOINING_PANEL_FADE = value ? tmp7.SHEET_MORPH_EXPANDING_PANEL_FADE : tmp7.SHEET_MORPH_DOCKING_PANEL_FADE;
        }
        const _Math = Math;
        const obj = { opacity: max(value2, obj2.getSheetMorphFadeProgress(diff, SHEET_MORPH_JOINING_PANEL_FADE.start, SHEET_MORPH_JOINING_PANEL_FADE.end)), pointerEvents: str };
        max = Math.max;
        value2 = dockContentSwap.get();
        str = "box-none";
        obj2 = VoicePanelSheetMorph;
        const obj3 = VoicePanelSheetMorph;
        if (obj3.isDockRowTouchable(diff)) {
          str = "none";
        }
        return obj;
      }
    }
    if (mode.get() !== VoicePanelModes.PIP) {
      opacity = 1;
    } else {
      opacity = 0;
    }
    return { opacity, pointerEvents: "box-none" };
  };
  let obj2 = { dockMinimizeProgress, wrapperDimensions, dockJoinMorphOrigin, isDockConnected, mode, VoicePanelModes: wrapperDimensions, SHEET_MORPH_JOINING_PANEL_FADE: dockContentSwap(isDockExpanding[5]).SHEET_MORPH_JOINING_PANEL_FADE, isDockExpanding, SHEET_MORPH_EXPANDING_PANEL_FADE: dockContentSwap(isDockExpanding[5]).SHEET_MORPH_EXPANDING_PANEL_FADE, SHEET_MORPH_DOCKING_PANEL_FADE: dockContentSwap(isDockExpanding[5]).SHEET_MORPH_DOCKING_PANEL_FADE, dockContentSwap, getSheetMorphFadeProgress: dockContentSwap(isDockExpanding[5]).getSheetMorphFadeProgress, isDockRowTouchable: dockContentSwap(isDockExpanding[5]).isDockRowTouchable };
  fn.__closure = obj2;
  fn.__workletHash = 16462503192915;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: items, children };
  items = [mode.absoluteFill, animatedStyle];
  return closure_9(isDockConnected(isDockExpanding[11]), obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSheet.tsx");

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
  items[0] = React4(closure_14, obj2);
  items[1] = React4(VoicePanelDockDefault, {});
  return unpackModuleId(authStore, obj);
}
