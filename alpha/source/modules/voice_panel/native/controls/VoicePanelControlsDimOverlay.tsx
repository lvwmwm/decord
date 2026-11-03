// Module ID: 19493
// Function ID: 19494
// Name: VoicePanelControlsDimOverlay
// Dependencies: [19, 15958, 11360, 11358, 21, 11359, 1652, 19456, 5757, 16412, 5721, 2]

// Module 19493 (VoicePanelControlsDimOverlay)
import Fragment from "Fragment" /* 21 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11358 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11359 */;
import BackdropConstants from "BackdropConstants" /* 15958 */;
import react from "react" /* 19 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11360 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_4 = BackdropConstants.BACKDROP_OPAQUE_MAX_OPACITY;
({ PANEL_CONTROLS_HEIGHT_PHYSICS: hasOwnProperty, VoicePanelModes: metroRequire } = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const jsx = Fragment.jsx;
let closure_9 = { code: "(function VoicePanelControlsDimOverlayTsx1(){let[windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY]=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],'clamp');})" };
let closure_10 = { code: "(function VoicePanelControlsDimOverlayTsx2(){let[overlayOpacity]=this.__closure;return overlayOpacity.get()>=0.35;})" };
let closure_11 = { code: "(function VoicePanelControlsDimOverlayTsx3(){let[withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive]=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?'none':'flex'};})" };
let closure_12 = { code: "(function VoicePanelControlsDimOverlayTsx4(){let[overlayActive]=this.__closure;return{pointerEvents:!overlayActive.get()?'none':'auto'};})" };
const memoResult = react.memo(function VoicePanelControlsDimOverlay(wrapperSpecs) {
  let controlsSpecs;
  let mode;
  let safeArea;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp28;
  let tmp29;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let windowDimensions;
  let obj = react;
  wrapperSpecs = wrapperSpecs.wrapperSpecs;
  const context = react.useContext(VoicePanelStateContextDefault);
  const setControlsMode = context.setControlsMode;
  ({ windowDimensions, controlsSpecs, safeArea, mode } = context);
  let items = [closure_9, windowDimensions, , , , , , , , , ];
  const useDerivedValue = setControlsMode(1652).useDerivedValue;
  const tmp4 = setControlsMode(1652);
  items[2] = setControlsMode(19456).getDrawerSpec;
  items[3] = safeArea;
  items[4] = controlsSpecs;
  items[5] = VoicePanelControlsModes;
  items[6] = mode;
  items[7] = constants;
  items[8] = setControlsMode(1652).interpolate;
  items[9] = wrapperSpecs;
  items[10] = closure_4;
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
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  class VoicePanelControlsDimOverlayTsx1 {
    constructor() {
      let maxHeight;
      let minHeight;
      ({ minHeight, maxHeight } = _undefined2(_undefined.get().height, _undefined3.get().top));
      let num = 0;
      _undefined2(_undefined.get().height, _undefined3.get().top);
      if (_undefined4.get().mode === _undefined5.DRAWER) {
        num = 0;
        if (_undefined6.get() === _undefined7.PANEL) {
          const items = [minHeight, maxHeight];
          const items1 = [0, c9];
          num = _undefined8(_undefined9.get().height, items, items1, "clamp");
        }
      }
      return num;
    }
  }
  let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  VoicePanelControlsDimOverlayTsx1.__closure = items1;
  VoicePanelControlsDimOverlayTsx1.__workletHash = 15211606332422;
  VoicePanelControlsDimOverlayTsx1.__initData = tmp5;
  const derivedValue = useDerivedValue(VoicePanelControlsDimOverlayTsx1);
  const items2 = [closure_10, derivedValue];
  c0 = undefined;
  [tmp17, tmp18] = items2;
  const tmp3Result = setControlsMode(1652);
  class VoicePanelControlsDimOverlayTsx2 {
    constructor() {
      return _undefined.get() >= 0.35;
    }
  }
  const items3 = [tmp18];
  VoicePanelControlsDimOverlayTsx2.__closure = items3;
  VoicePanelControlsDimOverlayTsx2.__workletHash = 14055617662103;
  VoicePanelControlsDimOverlayTsx2.__initData = tmp17;
  const derivedValue1 = tmp3Result.useDerivedValue(VoicePanelControlsDimOverlayTsx2);
  const items4 = [closure_11, , , , , ];
  const useAnimatedStyle = tmp3(1652).useAnimatedStyle;
  setControlsMode(1652);
  items4[1] = setControlsMode(5757).withSpring;
  items4[2] = derivedValue;
  items4[3] = closure_5;
  items4[4] = setControlsMode(16412).accessibilityPreferencesSharedValue;
  items4[5] = derivedValue1;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items4;
  class VoicePanelControlsDimOverlayTsx3 {
    constructor() {
      let str;
      const obj = { zIndex: 1, opacity: _undefined(_undefined2.get(), c2), display: str };
      str = "flex";
      if (_undefined3.get().screenReaderEnabled) {
        str = "flex";
        if (!_undefined4.get()) {
          str = "none";
        }
      }
      return obj;
    }
  }
  const items5 = [tmp22, tmp23, tmp24, tmp25, tmp26];
  VoicePanelControlsDimOverlayTsx3.__closure = items5;
  VoicePanelControlsDimOverlayTsx3.__workletHash = 6945037469681;
  VoicePanelControlsDimOverlayTsx3.__initData = tmp21;
  const style = useAnimatedStyle(VoicePanelControlsDimOverlayTsx3);
  const items6 = [closure_12, derivedValue1];
  c0 = undefined;
  [tmp28, tmp29] = items6;
  const tmp3Result4 = setControlsMode(1652);
  class VoicePanelControlsDimOverlayTsx4 {
    constructor() {
      let pointerEvents = "none";
      if (_undefined.get()) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items7 = [tmp29];
  VoicePanelControlsDimOverlayTsx4.__closure = items7;
  VoicePanelControlsDimOverlayTsx4.__workletHash = 10220341121843;
  VoicePanelControlsDimOverlayTsx4.__initData = tmp28;
  const items8 = [setControlsMode];
  const animatedProps = tmp3Result4.useAnimatedProps(VoicePanelControlsDimOverlayTsx4);
  const onDismiss = obj.useCallback(() => {
    const obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
    setControlsMode(obj);
  }, items8);
  return jsx(setControlsMode(5721).Backdrop, { onDismiss, style, animatedProps, opaque: true, "aria-hidden": true });
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx");

export default memoResult;
