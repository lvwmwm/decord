// Module ID: 15772
// Function ID: 121722
// Name: usePIPAvoidanceSpecs
// Dependencies: [10015, 10013, 10016, 3991, 15647, 15693, 3834, 689, 9423, 15594, 15694, 10021, 10019, 2]
// Exports: default

// Module 15772 (usePIPAvoidanceSpecs)
import { VoicePanelModes } from "VoicePanelModes";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { PIP_WINDOW_OFFSET } from "MIN_PAN_GESTURE_MOVE";

let closure_6 = { code: "function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}" };
let closure_7 = { code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}" };
const result = require("MIN_PAN_GESTURE_MOVE").fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(mode) {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const safeArea = mode.safeArea;
  let obj = mode(safeArea[3]);
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp2 = controlsSpecs(safeArea[4])();
  const VoicePanelControlsModes = tmp2;
  const tmp3 = controlsSpecs(safeArea[5])();
  const PIP_WINDOW_OFFSET = tmp3;
  const token = mode(safeArea[6]).useToken(controlsSpecs(safeArea[7]).modules.mobile.VOICE_PANEL_GUTTER);
  const obj2 = mode(safeArea[6]);
  const fn = function p() {
    return { mode: mode.get(), controlsSpecs: controlsSpecs.get(), keyboardHeight: tmp2.get(), safeArea: safeArea.get(), screenName: tmp3.get() };
  };
  fn.__closure = { mode, controlsSpecs, keyboardHeight: tmp2, safeArea, screenName: tmp3 };
  fn.__workletHash = 17017598468922;
  fn.__initData = token;
  const fn2 = function u(safeAreaState, safeAreaState2) {
    let controlsSpecs;
    let keyboardHeight;
    let mode;
    let safeArea;
    let obj = mode(safeArea[8]);
    let tmp;
    if (null != safeAreaState2) {
      tmp = safeAreaState2;
    }
    if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = safeAreaState);
      if (mode !== sharedValue.PIP) {
        let num2 = 0;
        if (mode === sharedValue.PANEL) {
          num2 = 0;
          if (controlsSpecs.mode === tmp2.DRAWER) {
            num2 = 60 + closure_5;
          }
        }
        let tmp6 = num2;
      } else {
        tmp6 = controlsSpecs(safeArea[9])(tmp2);
      }
      obj = { screenBottomOffset: tmp6, safeAreaBottom: safeArea.bottom, keyboardHeight };
      const bottomOffset = controlsSpecs(safeArea[10])(obj).bottomOffset;
      let tmp12 = keyboardHeight <= 0;
      if (tmp12) {
        tmp12 = mode === sharedValue.PANEL;
      }
      if (tmp12) {
        tmp12 = controlsSpecs.mode === tmp2.FLOATING_DEFAULT;
      }
      let sum = bottomOffset;
      if (tmp12) {
        sum = bottomOffset + (controlsSpecs.height + closure_5);
      }
      obj = {};
      let num8 = 0;
      if (mode === sharedValue.PANEL) {
        num8 = 0;
        if (controlsSpecs.mode === tmp2.FLOATING_DEFAULT) {
          num8 = controlsSpecs(safeArea[11])(safeArea, token).height;
        }
      }
      obj.top = num8;
      obj.bottom = sum;
      controlsSpecs(safeArea[12])(sharedValue, obj);
      const tmp20 = controlsSpecs(safeArea[12]);
      const tmp21 = sharedValue;
    }
  };
  obj = { cheapWorkletShallowEqual: mode(safeArea[8]).cheapWorkletShallowEqual, VoicePanelModes: sharedValue, VoicePanelControlsModes, DEFAULT_CHANNEL_INPUT_HEIGHT: 60, PIP_WINDOW_OFFSET, getPIPBottomOffsetForPIPMode: controlsSpecs(safeArea[9]), getAdjustedBottomOffsets: controlsSpecs(safeArea[10]), calculateVoicePanelHeaderSpecs: controlsSpecs(safeArea[11]), edgeGutter: token, updateSharedValueIfChanged: controlsSpecs(safeArea[12]), pipAvoidanceSpecs: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 13029906729161;
  fn2.__initData = closure_7;
  const animatedReaction = mode(safeArea[3]).useAnimatedReaction(fn, fn2);
  return sharedValue;
};
