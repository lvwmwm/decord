// Module ID: 19244
// Function ID: 19245
// Name: VoicePanelDockSheetLayers
// Dependencies: [19, 17, 13310, 21, 4913, 11749, 1653, 18010, 575, 10598, 19245, 5105, 2]
// Exports: default

// Module 19244 (VoicePanelDockSheetLayers)
import native from "native" /* 575 */;
import _mod1653 from "module_1653" /* 1653 */;
import Portal from "Portal" /* 5105 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 10598 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11749 */;
import useDockBoxShadowDefault from "useDockBoxShadow" /* 18010 */;
import voicePanelLayoutTransitionDefault from "voicePanelLayoutTransition" /* 19245 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import VoicePanelDockSlotStore from "VoicePanelDockSlotStore" /* 13310 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const _modDef1653 = _mod1653;
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
let closure_11 = { code: "(function VoicePanelDockSheetLayersTsx1(){let[wrapperDimensions,dockSheetLeft]=this.__closure;const{drawerWidth:drawerWidth,drawerHeight:drawerHeight}=wrapperDimensions.get();return{width:drawerWidth,height:drawerHeight,transform:[{translateX:-dockSheetLeft.get()}]};})" };
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
  let dockSheetLeft;
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
  let tmp14;
  let tmp15;
  let tmp7;
  let tmp8;
  let tmp9;
  let wrapperDimensions;
  let wrapperSurfaceLayerStyles;
  let wrapperSurfaceStyles;
  wrapperTransformStyles = wrapperTransformStyles.wrapperTransformStyles;
  ({ wrapperSurfaceStyles, wrapperSurfaceLayerStyles, children } = wrapperTransformStyles);
  const context = react.useContext(VoicePanelStateContextDefault);
  const isDockInLayout = context.isDockInLayout;
  ({ handleDockSheetLayout, dockPTTPortalHostName, dockPTTMeasureHostRef, dockSheetLeft, wrapperDimensions } = context);
  const tmp4 = closure_10();
  metroRequire(context);
  let obj = _mod1653;
  let items = [closure_11, wrapperDimensions, dockSheetLeft];
  let c0;
  let c1;
  [tmp7, tmp8, tmp9] = items;
  class VoicePanelDockSheetLayersTsx1 {
    constructor() {
      value = closure_0.get();
      size = { width: value.drawerWidth, height: value.drawerHeight, transform: null };
      obj1 = { translateX: -closure_1.get() };
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  const items1 = [tmp8, tmp9];
  VoicePanelDockSheetLayersTsx1.__closure = items1;
  VoicePanelDockSheetLayersTsx1.__workletHash = 3684693226456;
  VoicePanelDockSheetLayersTsx1.__initData = tmp7;
  const animatedStyle = obj.useAnimatedStyle(VoicePanelDockSheetLayersTsx1);
  const tmpResult = useDockBoxShadowDefault;
  const tmpResultResult = tmpResult(native.Shadow.SHADOW_TOP_HIGH);
  const tmp13 = useStateFromSharedValueDefault(isDockInLayout);
  const items2 = [closure_12, isDockInLayout];
  c0 = undefined;
  [tmp14, tmp15] = items2;
  const tmp6Result = _mod1653;
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
  const items3 = [tmp15];
  VoicePanelDockSheetLayersTsx2.__closure = items3;
  VoicePanelDockSheetLayersTsx2.__workletHash = 4900754012109;
  VoicePanelDockSheetLayersTsx2.__initData = tmp14;
  const animatedStyle1 = tmp6Result.useAnimatedStyle(VoicePanelDockSheetLayersTsx2);
  let obj2 = { style: items4, accessibilityElementsHidden: tmp13, importantForAccessibility: str, children: metroImportAll(View2, obj4) };
  items4 = [tmp4.dockSheetLayers, animatedStyle1];
  str = "auto";
  const View = tmp(1653).View;
  const tmp18 = React4;
  if (tmp13) {
    str = "no-hide-descendants";
  }
  const obj3 = { children: items8 };
  obj4 = { style: wrapperTransformStyles, pointerEvents: "box-none", children: items6 };
  View2 = tmp(1653).View;
  const obj5 = { style: items5, pointerEvents: "none" };
  items5 = [tmp4.dockSurfaceShadow, { boxShadow: tmpResultResult }, wrapperSurfaceLayerStyles];
  items6 = [metroImportDefault(_modDef1653.View, obj5), ];
  const obj6 = { style: items7, layout: voicePanelLayoutTransitionDefault, children: metroImportDefault(View4, obj7) };
  items7 = [tmp4.dockSurfaceClip, wrapperSurfaceStyles];
  const View3 = tmp(1653).View;
  obj7 = { style: animatedStyle, onLayout: handleDockSheetLayout, children: metroImportDefault(hasOwnProperty.Provider, { value: tmp13, children }) };
  View4 = tmp(1653).View;
  items6[1] = metroImportDefault(View3, obj6);
  items8 = [metroImportDefault(View, obj2), ];
  const obj8 = { style: tmp4.dockSheetLayers, pointerEvents: "box-none", children: metroImportDefault(View5, obj9) };
  obj9 = { ref: dockPTTMeasureHostRef, style: wrapperTransformStyles, pointerEvents: "box-none", collapsable: false, children: metroImportDefault(Portal.PortalHost, { name: dockPTTPortalHostName }) };
  View5 = tmp(1653).View;
  items8[1] = metroImportDefault(React3, obj8);
  return metroImportAll(tmp18, obj3);
};
