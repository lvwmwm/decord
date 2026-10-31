// Module ID: 19189
// Function ID: 19190
// Name: usePIPAvoidanceSpecs
// Dependencies: [11223, 11221, 11224, 5095, 12074, 19111, 5596, 575, 10089, 18998, 19112, 11229, 11227, 2]
// Exports: default

// Module 19189 (usePIPAvoidanceSpecs)
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 10089 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11221 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11223 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11224 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11227 */;
import getPIPBottomOffsetForPIPModeDefault from "getPIPBottomOffsetForPIPMode" /* 18998 */;
import getAdjustedBottomOffsetsDefault from "getAdjustedBottomOffsets" /* 19112 */;
import size from "module_2" /* 2 */;

const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
let PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
let __initData = { code: "function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName,dockHeight}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get(),dockHeight:dockHeight.get()};}" };
let closure_7 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName,dockHeight:dockHeight}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}if(mode===VoicePanelModes.PIP){bottomOffset+=dockHeight;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(mode) {
  let closure_5;
  let closure_6;
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  let dockHeight = mode.dockHeight;
  let obj = mode(safeArea[3]);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[4])();
  PIP_WINDOW_OFFSET = tmp2;
  const tmp3 = controlsSpecs(safeArea[5])();
  __initData = tmp3;
  const obj2 = mode(safeArea[6]);
  const token = obj2.useToken(controlsSpecs(safeArea[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const fn = function p() {
    const obj = { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: closure_5.get(), safeArea: safeArea.get(), screenName: closure_6.get(), dockHeight: dockHeight.get() };
    return obj;
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3, dockHeight };
  fn.__workletHash = 2903120831429;
  fn.__initData = __initData;
  const fn2 = function u(dockHeight, current) {
    let keyboardHeight;
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = current;
    if (!cheapWorkletShallowEqual(dockHeight, tmp)) {
      let tmp7;
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = dockHeight);
      dockHeight = dockHeight.dockHeight;
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
      let sum1 = sum;
      if (mode === VoicePanelModes.PIP) {
        sum1 = sum + dockHeight;
      }
      const height = tmp10(11229)(safeArea, token).height;
      let num4 = 0;
      const tmp10Result = updateSharedValueIfChangedDefault;
      const tmp18 = sharedValue;
      if (mode === VoicePanelModes.PANEL) {
        num4 = 0;
        if (controlsSpecs.mode === VoicePanelControlsModes.FLOATING_DEFAULT) {
          num4 = height;
        }
      }
      const rect = { top: num4, bottom: sum1 };
      tmp10Result(tmp18, rect);
    }
  };
  const obj3 = mode(safeArea[3]);
  fn2.__closure = { cheapWorkletShallowEqual: mode(safeArea[8]).cheapWorkletShallowEqual, VoicePanelModes: dockHeight, VoicePanelControlsModes: sharedValue, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[9]), getAdjustedBottomOffsets: controlsSpecs(safeArea[10]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[11]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[12]), pipAvoidanceSpecs: sharedValue };
  fn2.__workletHash = 10171816207853;
  fn2.__initData = token;
  ({ cheapWorkletShallowEqual: mode(safeArea[8]).cheapWorkletShallowEqual, VoicePanelModes: dockHeight, VoicePanelControlsModes: sharedValue, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[9]), getAdjustedBottomOffsets: controlsSpecs(safeArea[10]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[11]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[12]), pipAvoidanceSpecs: sharedValue });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  return sharedValue;
};
