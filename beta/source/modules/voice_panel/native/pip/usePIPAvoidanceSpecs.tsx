// Module ID: 16907
// Function ID: 16908
// Name: usePIPAvoidanceSpecs
// Dependencies: [11755, 11753, 11756, 4566, 16269, 16835, 4531, 576, 8853, 16733, 16836, 11759, 10896, 2]
// Exports: default

// Module 16907 (usePIPAvoidanceSpecs)
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 8853 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 10896 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 16733 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 16836 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
let VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
let closure_6 = { code: "function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}" };
const __initData = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(mode) {
  let closure_4;
  let closure_5;
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  let obj = mode(safeArea[3]);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[4])();
  VoicePanelControlsModes = tmp2;
  const tmp3 = controlsSpecs(safeArea[5])();
  PIP_WINDOW_OFFSET = tmp3;
  const obj2 = mode(safeArea[6]);
  const token = obj2.useToken(controlsSpecs(safeArea[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const fn = function p() {
    const obj = { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: closure_4.get(), safeArea: safeArea.get(), screenName: closure_5.get() };
    return obj;
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 17017598468922;
  fn.__initData = token;
  const fn2 = function u(safeAreaState, current) {
    let keyboardHeight;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = current;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
      let tmp7;
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = safeAreaState);
      if (mode !== VoicePanelModes.PIP) {
        let num = 0;
        if (mode === VoicePanelModes.PANEL) {
          num = 0;
          if (controlsSpecs.mode === VoicePanelControlsModes.DRAWER) {
            num = 60 + PIP_WINDOW_OFFSET;
          }
        }
        tmp7 = num;
      } else {
        tmp7 = getPIPBottomOffsetForPIPModeDefault(tmp4);
      }
      const obj = { screenBottomOffset: tmp7, safeAreaBottom: safeArea.bottom, keyboardHeight };
      const bottomOffset = getAdjustedBottomOffsetsDefault(obj).bottomOffset;
      let sum = bottomOffset;
      const tmp11 = keyboardHeight <= 0 && mode === tmp5.PANEL && controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT;
      if (tmp11) {
        sum = bottomOffset + (controlsSpecs.height + PIP_WINDOW_OFFSET);
      }
      const height = tmp10(11759)(safeArea, token).height;
      let num4 = 0;
      const tmp10Result = updateSharedValueIfChangedDefault;
      const tmp17 = sharedValue;
      if (mode === VoicePanelModes.PANEL) {
        num4 = 0;
        if (controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT) {
          num4 = height;
        }
      }
      const rect = { top: num4, bottom: sum };
      tmp10Result(tmp17, rect);
    }
  };
  const obj3 = mode(safeArea[3]);
  fn2.__closure = { cheapWorkletShallowEqual: mode(safeArea[8]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[9]), getAdjustedBottomOffsets: controlsSpecs(safeArea[10]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[11]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[12]), pipAvoidanceSpecs: sharedValue };
  fn2.__workletHash = 13029906729161;
  fn2.__initData = __initData;
  ({ cheapWorkletShallowEqual: mode(safeArea[8]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[9]), getAdjustedBottomOffsets: controlsSpecs(safeArea[10]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[11]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[12]), pipAvoidanceSpecs: sharedValue });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  return sharedValue;
};
