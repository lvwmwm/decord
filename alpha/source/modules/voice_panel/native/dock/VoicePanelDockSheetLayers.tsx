// Module ID: 19982
// Function ID: 19983
// Name: VoicePanelDockSheetLayers
// Dependencies: [19, 17, 14855, 21, 5306, 11984, 1655, 19204, 575, 11253, 19983, 5508, 2]
// Exports: default

// Module 19982 (VoicePanelDockSheetLayers)
import native from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import Portal from "Portal" /* 5508 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 11253 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 19204 */;
import voicePanelLayoutTransitionDefault from "voicePanelLayoutTransition" /* 19983 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelDockSlotStore from "VoicePanelDockSlotStore" /* 14855 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const _modDef1655 = _mod1655;
let num, obj1, value;

let StyleSheet;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
({ VoicePanelDockHiddenContext: hasOwnProperty, useShareVoicePanelDockState: metroRequire } = VoicePanelDockSlotStore);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { dockSheetLayers: obj2, dockSurfaceClip: { overflow: "hidden" }, dockSurfaceShadow: { position: "absolute", top: 0, left: 0 } };
obj2 = { alignItems: "flex-start" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_10 = createStyles(obj);
let closure_11 = { code: "(function VoicePanelDockSheetLayersTsx1(){let[wrapperDimensions]=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions.get();return{width:drawerWidth,height:drawerHeight};})" };
let closure_12 = { code: "(function VoicePanelDockSheetLayersTsx2(){let[isDockInLayout]=this.__closure;return{opacity:isDockInLayout.get()?0:1,pointerEvents:isDockInLayout.get()?'none':'box-none'};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockSheetLayers.tsx");

export default function VoicePanelDockSheetLayers(wrapperTransformStyles) {
  let View2;
  let View4;
  let View5;
  let children;
  let dockPTTMeasureHostRef;
  let dockPTTPortalHostName;
  let handleDockSheetLayout;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj4;
  let obj7;
  let obj9;
  let str;
  let tmp13;
  let tmp14;
  let tmp7;
  let tmp8;
  let wrapperDimensions;
  let wrapperSurfaceLayerStyles;
  let wrapperSurfaceStyles;
  wrapperTransformStyles = wrapperTransformStyles.wrapperTransformStyles;
  ({ wrapperSurfaceStyles, wrapperSurfaceLayerStyles, children } = wrapperTransformStyles);
  const context = react.useContext(VoicePanelStateContextDefault);
  const isDockInLayout = context.isDockInLayout;
  ({ handleDockSheetLayout, dockPTTPortalHostName, dockPTTMeasureHostRef, wrapperDimensions } = context);
  const tmp4 = closure_10();
  metroRequire(context);
  let obj = _mod1655;
  const items = [closure_11, wrapperDimensions];
  let c0;
  [tmp7, tmp8] = items;
  class VoicePanelDockSheetLayersTsx1 {
    constructor() {
      value = closure_0.get();
      size = { width: value.drawerWidth, height: value.drawerHeight };
      return size;
    }
  }
  const items1 = [tmp8];
  VoicePanelDockSheetLayersTsx1.__closure = items1;
  VoicePanelDockSheetLayersTsx1.__workletHash = 7716350336190;
  VoicePanelDockSheetLayersTsx1.__initData = tmp7;
  const animatedStyle = obj.useAnimatedStyle(VoicePanelDockSheetLayersTsx1);
  const tmpResult = useDockBoxShadowDefault;
  const tmpResultResult = tmpResult(native.Shadow.SHADOW_TOP_HIGH);
  const tmp12 = useStateFromSharedValueDefault(isDockInLayout);
  const items2 = [closure_12, isDockInLayout];
  c0 = undefined;
  [tmp13, tmp14] = items2;
  const tmp6Result = _mod1655;
  class VoicePanelDockSheetLayersTsx2 {
    constructor() {
      obj = closure_0;
      num = 1;
      if (closure_0.get()) {
        num = 0;
      }
      obj1 = { opacity: num, pointerEvents: null };
      str = "box-none";
      if (obj.get()) {
        str = "none";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const items3 = [tmp14];
  VoicePanelDockSheetLayersTsx2.__closure = items3;
  VoicePanelDockSheetLayersTsx2.__workletHash = 4900754012109;
  VoicePanelDockSheetLayersTsx2.__initData = tmp13;
  const animatedStyle1 = tmp6Result.useAnimatedStyle(VoicePanelDockSheetLayersTsx2);
  let obj2 = { style: items4, accessibilityElementsHidden: tmp12, importantForAccessibility: str, children: metroImportAll(View2, obj4) };
  items4 = [tmp4.dockSheetLayers, animatedStyle1];
  str = "auto";
  const View = tmp(1655).View;
  const tmp17 = React4;
  if (tmp12) {
    str = "no-hide-descendants";
  }
  const obj3 = { children: items8 };
  obj4 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: items6 };
  View2 = tmp(1655).View;
  const obj5 = { style: items5, pointerEvents: "none" };
  items5 = [tmp4.dockSurfaceShadow, { boxShadow: tmpResultResult }, wrapperSurfaceLayerStyles];
  items6 = [metroImportDefault(_modDef1655.View, obj5), ];
  const obj6 = { style: items7, layout: voicePanelLayoutTransitionDefault, children: metroImportDefault(View4, obj7) };
  items7 = [tmp4.dockSurfaceClip, wrapperSurfaceStyles];
  const View3 = tmp(1655).View;
  obj7 = { style: animatedStyle, onLayout: handleDockSheetLayout, children: metroImportDefault(hasOwnProperty.Provider, { value: tmp12, children }) };
  View4 = tmp(1655).View;
  items6[1] = metroImportDefault(View3, obj6);
  items8 = [metroImportDefault(View, obj2), ];
  const obj8 = { style: tmp4.dockSheetLayers, pointerEvents: "box-none", children: metroImportDefault(View5, obj9) };
  obj9 = { ref: dockPTTMeasureHostRef, style: wrapperTransformStyles, pointerEvents: "box-none", collapsable: false, children: metroImportDefault(Portal.PortalHost, { name: dockPTTPortalHostName }) };
  View5 = tmp(1655).View;
  items8[1] = metroImportDefault(React3, obj8);
  return metroImportAll(tmp17, obj3);
};
