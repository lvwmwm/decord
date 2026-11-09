// Module ID: 19567
// Function ID: 19568
// Name: usePIPAvoidanceSpecs
// Dependencies: [11363, 11361, 11364, 1652, 12238, 19489, 5724, 575, 10210, 19375, 19490, 11369, 11367, 2]
// Exports: default

// Module 19567 (usePIPAvoidanceSpecs)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5724 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11361 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11363 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11364 */;
import useAnimatedKeyboardHeightDefault from "useAnimatedKeyboardHeight" /* 12238 */;
import useScreenNameSharedValueDefault from "useScreenNameSharedValue" /* 19489 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp4;
const cheapWorkletShallowEqual = tmp(10210);
const updateSharedValueIfChangedDefault = tmp4(11367);
const calculateVoicePanelHeaderSpecsDefault = tmp4(11369);
const getPIPBottomOffsetForPIPModeDefault = tmp4(19375);
const getAdjustedBottomOffsetsDefault = tmp4(19490);
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const PIP_WINDOW_OFFSET = MorphablePanelConstants.PIP_WINDOW_OFFSET;
let closure_6 = { code: "(function usePIPAvoidanceSpecsTsx1(){let[mode,controlsSpecs,keyboardHeight,safeArea,screenName,dockHeight]=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get(),dockHeight:dockHeight.get()};})" };
let closure_7 = { code: "(function usePIPAvoidanceSpecsTsx2(props,previous){let[cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,edgeGutter,updateSharedValueIfChanged,pipAvoidanceSpecs]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName,dockHeight:dockHeight}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}if(mode===VoicePanelModes.PIP){bottomOffset+=dockHeight;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea,edgeGutter);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default function usePIPAvoidanceSpecs(arg0) {
  let controlsSpecs;
  let dockHeight;
  let mode;
  let safeArea;
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
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp9;
  let tmp2 = dependencyMap;
  ({ mode, controlsSpecs, safeArea, dockHeight } = arg0);
  let tmp = require;
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue({ top: 0, bottom: 0 });
  const tmp4 = importDefault;
  const tmp5 = useAnimatedKeyboardHeightDefault();
  let tmp6 = useScreenNameSharedValueDefault();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.VOICE_PANEL_GUTTER);
  const items = [closure_6, mode, controlsSpecs, tmp5, safeArea, tmp6, dockHeight];
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  function usePIPAvoidanceSpecsTsx1() {
    const obj = { mode: _undefined.get(), controlsSpecs: _undefined2.get(), keyboardHeight: _undefined3.get(), safeArea: _undefined4.get(), screenName: _undefined5.get(), dockHeight: _undefined6.get() };
    return obj;
  }
  const items1 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  usePIPAvoidanceSpecsTsx1.__closure = items1;
  usePIPAvoidanceSpecsTsx1.__workletHash = 12057246335004;
  usePIPAvoidanceSpecsTsx1.__initData = tmp9;
  const items2 = [closure_7, , , , , , , , , , , ];
  const useAnimatedReaction = _mod1652.useAnimatedReaction;
  items2[1] = cheapWorkletShallowEqual.cheapWorkletShallowEqual;
  items2[2] = VoicePanelModes;
  items2[3] = VoicePanelControlsModes;
  items2[4] = 60;
  items2[5] = PIP_WINDOW_OFFSET;
  items2[6] = getPIPBottomOffsetForPIPModeDefault;
  items2[7] = getAdjustedBottomOffsetsDefault;
  items2[8] = calculateVoicePanelHeaderSpecsDefault;
  items2[9] = token;
  items2[10] = updateSharedValueIfChangedDefault;
  items2[11] = sharedValue;
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
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items2;
  function usePIPAvoidanceSpecsTsx2(dockHeight, arg1) {
    let controlsSpecs;
    let keyboardHeight;
    let mode;
    let safeArea;
    const tmp = arg1;
    const tmp2 = c0;
    if (!tmp2(dockHeight, tmp)) {
      let tmp6;
      ({ mode, controlsSpecs, keyboardHeight, safeArea } = dockHeight);
      dockHeight = dockHeight.dockHeight;
      if (mode !== _undefined.PIP) {
        let num = 0;
        if (mode === _undefined.PANEL) {
          num = 0;
          if (controlsSpecs.mode === _undefined2.DRAWER) {
            num = c3 + c4;
          }
        }
        tmp6 = num;
      } else {
        tmp6 = _undefined3(tmp3);
      }
      const obj = { screenBottomOffset: tmp6, safeAreaBottom: safeArea.bottom, keyboardHeight };
      const bottomOffset = _undefined4(obj).bottomOffset;
      let sum = bottomOffset;
      const tmp11 = keyboardHeight <= 0 && mode === tmp4.PANEL && controlsSpecs.mode === _undefined2.FLOATING_DEFAULT;
      if (tmp11) {
        sum = bottomOffset + (controlsSpecs.height + c4);
      }
      let sum1 = sum;
      if (mode === _undefined.PIP) {
        sum1 = sum + dockHeight;
      }
      let num3 = 0;
      const tmp19 = c9;
      const tmp20 = c10;
      if (mode === _undefined.PANEL) {
        num3 = 0;
        if (controlsSpecs.mode === _undefined2.FLOATING_DEFAULT) {
          num3 = tmp18;
        }
      }
      const rect = { top: num3, bottom: sum1 };
      tmp19(tmp20, rect);
    }
  }
  const items3 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  usePIPAvoidanceSpecsTsx2.__closure = items3;
  usePIPAvoidanceSpecsTsx2.__workletHash = 1918666425620;
  usePIPAvoidanceSpecsTsx2.__initData = tmp16;
  const animatedReaction = useAnimatedReaction(usePIPAvoidanceSpecsTsx1, usePIPAvoidanceSpecsTsx2);
  return sharedValue;
};
