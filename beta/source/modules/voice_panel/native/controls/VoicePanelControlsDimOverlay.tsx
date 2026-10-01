// Module ID: 17031
// Function ID: 17032
// Name: VoicePanelControlsDimOverlay
// Dependencies: [19, 13930, 11755, 11753, 21, 11754, 4566, 16996, 5280, 13928, 5267, 2]

// Module 17031 (VoicePanelControlsDimOverlay)
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5280 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import AccessibilityPreferencesSharedValue from "AccessibilityPreferencesSharedValue" /* 13928 */;
import BackdropConstants from "BackdropConstants" /* 13930 */;
import VoicePanelControlUtils from "VoicePanelControlUtils" /* 16996 */;
import react from "react" /* 19 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let tmp;
const ReanimatedRexport = tmp(4566);
let closure_4 = BackdropConstants.BACKDROP_OPAQUE_MAX_OPACITY;
({ PANEL_CONTROLS_HEIGHT_PHYSICS: hasOwnProperty, VoicePanelModes: metroRequire } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const jsx = Fragment.jsx;
const __initData = { code: "function VoicePanelControlsDimOverlayTsx1(){const{windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY}=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],'clamp');}" };
const __initData2 = { code: "function VoicePanelControlsDimOverlayTsx2(){const{overlayOpacity}=this.__closure;return overlayOpacity.get()>=0.35;}" };
const __initData3 = { code: "function VoicePanelControlsDimOverlayTsx3(){const{withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive}=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?'none':'flex'};}" };
const __initData4 = { code: "function VoicePanelControlsDimOverlayTsx4(){const{overlayActive}=this.__closure;return{pointerEvents:!overlayActive.get()?'none':'auto'};}" };
const memoResult = react.memo(function VoicePanelControlsDimOverlay(wrapperSpecs) {
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  let windowDimensions;
  let setControlsMode;
  let controlsSpecs;
  let derivedValue;
  let derivedValue1;
  const context = controlsSpecs.useContext(windowDimensions(setControlsMode[5]));
  windowDimensions = context.windowDimensions;
  setControlsMode = context.setControlsMode;
  controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  const mode = context.mode;
  let obj = wrapperSpecs(setControlsMode[6]);
  class A {
    constructor() {
      let maxHeight;
      let minHeight;
      const height = windowDimensions.get().height;
      const obj = VoicePanelControlUtils;
      const drawerSpec = obj.getDrawerSpec(height, safeArea.get().top);
      ({ minHeight, maxHeight } = drawerSpec);
      let num = 0;
      if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
        num = 0;
        if (mode.get() === metroRequire.PANEL) {
          const items = [minHeight, maxHeight];
          const items1 = [0, closure_4];
          const tmpResult = ReanimatedRexport;
          num = tmpResult.interpolate(wrapperSpecs.get().height, items, items1, "clamp");
        }
      }
      return num;
    }
  }
  let obj2 = { windowDimensions, getDrawerSpec: wrapperSpecs(setControlsMode[7]).getDrawerSpec, safeArea, controlsSpecs, VoicePanelControlsModes: derivedValue1, mode, VoicePanelModes: derivedValue, interpolate: wrapperSpecs(setControlsMode[6]).interpolate, wrapperSpecs, BACKDROP_OPAQUE_MAX_OPACITY: safeArea };
  A.__closure = obj2;
  A.__workletHash = 17386741533055;
  A.__initData = __initData;
  derivedValue = obj.useDerivedValue(A);
  const fn = function y() {
    return derivedValue.get() >= 0.35;
  };
  fn.__closure = { overlayOpacity: derivedValue };
  fn.__workletHash = 733654137262;
  fn.__initData = __initData2;
  const obj3 = wrapperSpecs(setControlsMode[6]);
  derivedValue1 = obj3.useDerivedValue(fn);
  const obj4 = wrapperSpecs(setControlsMode[6]);
  class S {
    constructor() {
      let obj2;
      let str;
      const obj = { zIndex: 1, opacity: obj2.withSpring(derivedValue.get(), hasOwnProperty), display: str };
      obj2 = spring;
      const accessibilityPreferencesSharedValue = AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
      str = "flex";
      if (accessibilityPreferencesSharedValue.get().screenReaderEnabled) {
        str = "flex";
        if (!derivedValue1.get()) {
          str = "none";
        }
      }
      return obj;
    }
  }
  S.__closure = { withSpring: wrapperSpecs(setControlsMode[8]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[9]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 };
  S.__workletHash = 7500180433000;
  S.__initData = __initData3;
  ({ withSpring: wrapperSpecs(setControlsMode[8]).withSpring, overlayOpacity: derivedValue, PANEL_CONTROLS_HEIGHT_PHYSICS: mode, accessibilityPreferencesSharedValue: wrapperSpecs(setControlsMode[9]).accessibilityPreferencesSharedValue, overlayActive: derivedValue1 });
  const style = obj4.useAnimatedStyle(S);
  const fn2 = function v() {
    let pointerEvents = "none";
    if (derivedValue1.get()) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  };
  fn2.__closure = { overlayActive: derivedValue1 };
  fn2.__workletHash = 873976025930;
  fn2.__initData = __initData4;
  let items = [setControlsMode];
  const obj6 = wrapperSpecs(setControlsMode[6]);
  const animatedProps = obj6.useAnimatedProps(fn2);
  const onDismiss = controlsSpecs.useCallback(() => {
    const obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
    setControlsMode(obj);
  }, items);
  return jsx(wrapperSpecs(setControlsMode[10]).Backdrop, { onDismiss, style, animatedProps, opaque: true, "aria-hidden": true });
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx");

export default memoResult;
