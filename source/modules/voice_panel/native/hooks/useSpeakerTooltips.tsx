// Module ID: 15851
// Function ID: 122329
// Name: useCoachmarkHelper
// Dependencies: [57, 31, 15848, 10045, 1345, 33, 15852, 15790, 10662, 10046, 3991, 5802, 15824, 1212, 1334, 15854, 8608, 2]
// Exports: default

// Module 15851 (useCoachmarkHelper)
import _slicedToArray from "_slicedToArray";
import result from "result";
import useConsoleVoiceUpsellStore from "useConsoleVoiceUpsellStore";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
function useCoachmarkHelper(targetRef, memo1, first) {
  const _require = memo1;
  let closure_1 = first;
  const items = [memo1];
  const callback = React.useCallback(() => {
    if (memo1.visible) {
      memo1.onDismiss();
    }
  }, items);
  const items1 = [first, callback];
  const effect = React.useEffect(() => {
    if (!closure_1) {
      callback();
    }
  }, items1);
  const coachmark = _require(callback[16]).useCoachmark(targetRef, memo1);
}
({ setVoiceUpsellDismissed: closure_5, useConsoleVoiceUpsellStore: closure_6 } = useConsoleVoiceUpsellStore);
let closure_10 = { code: "function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
let closure_11 = { code: "function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}" };
const result = require("useConsoleVoiceUpsellStore").fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(targetRef, first) {
  const tmp2 = importDefault(voiceUpsellDismissed[6])();
  importDefault = tmp2;
  voiceUpsellDismissed = first1().voiceUpsellDismissed;
  const tmp3 = importDefault(voiceUpsellDismissed[7])(undefined);
  const callback = tmp3;
  let obj = first(voiceUpsellDismissed[8]);
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  controlsSpecs = controlsSpecs.useContext(importDefault(voiceUpsellDismissed[9])).controlsSpecs;
  let tmp5 = callback(controlsSpecs.useState(true), 2);
  let closure_5 = tmp6;
  const fn = function b() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 13952338295275;
  fn.__initData = closure_10;
  class S {
    constructor(arg0, arg1) {
      if (targetRef !== first) {
        tmp = closure_0;
        tmp2 = voiceUpsellDismissed;
        num = 10;
        obj = closure_0(voiceUpsellDismissed[10]);
        tmp3 = closure_5;
        tmp4 = c7;
        tmp5 = obj.runOnJS(closure_5)(targetRef === c7.FLOATING_DEFAULT);
      }
      return;
    }
  }
  obj = { runOnJS: first(voiceUpsellDismissed[10]).runOnJS, setIsShowingControls: tmp6, VoicePanelControlsModes };
  S.__closure = obj;
  S.__workletHash = 5084069556209;
  S.__initData = closure_11;
  const animatedReaction = first(voiceUpsellDismissed[10]).useAnimatedReaction(fn, S);
  if (first) {
    first = isVoicePanelFullscreen;
  }
  if (first) {
    first = tmp5[0];
  }
  const items = [first, tmp3];
  const memo = controlsSpecs.useMemo(() => first ? _slicedToArray : [], items);
  const obj2 = first(voiceUpsellDismissed[10]);
  const tmp9 = callback(first(voiceUpsellDismissed[11]).useSelectedDismissibleContent(memo), 2);
  first1 = tmp9[0];
  VoicePanelControlsModes = tmp11;
  const tmp12 = importDefault(voiceUpsellDismissed[12])();
  const ContentDismissActionType = tmp12;
  const items1 = [first, tmp9[1], first1];
  const memo1 = controlsSpecs.useMemo(() => {
    const obj = { position: "bottom" };
    const intl = first(voiceUpsellDismissed[13]).intl;
    obj.title = intl.string(first(voiceUpsellDismissed[13]).t.O2WA4u);
    const intl2 = first(voiceUpsellDismissed[13]).intl;
    obj.description = intl2.string(first(voiceUpsellDismissed[13]).t.fr5bJy);
    let tmp = first;
    if (first) {
      tmp = first1 === first(voiceUpsellDismissed[14]).DismissibleContent.DONUT_MOBILE_NUX;
    }
    obj.visible = tmp;
    obj.renderImgComponent = function renderImgComponent() {
      return memo1(callback(voiceUpsellDismissed[15]), {});
    };
    obj.withBlurBackground = true;
    obj.onDismiss = function onDismiss() {
      return outer1_7(constants.UNKNOWN);
    };
    return obj;
  }, items1);
  const items2 = [tmp2, first, voiceUpsellDismissed, memo1.visible];
  const memo2 = controlsSpecs.useMemo(() => {
    let consoleInfo = null;
    if (null != closure_1) {
      let obj = first(voiceUpsellDismissed[15]);
      consoleInfo = obj.getConsoleInfo(closure_1);
    }
    let tmp5 = first;
    if (first) {
      tmp5 = !voiceUpsellDismissed;
    }
    if (tmp5) {
      tmp5 = null != consoleInfo;
    }
    if (tmp5) {
      tmp5 = !memo1.visible;
    }
    obj = { position: "bottom" };
    let connectLabel;
    if (null != consoleInfo) {
      connectLabel = consoleInfo.connectLabel;
    }
    let str = "";
    let str2 = "";
    if (null != connectLabel) {
      str2 = connectLabel;
    }
    obj.title = str2;
    let connectSublabel;
    if (null != consoleInfo) {
      connectSublabel = consoleInfo.connectSublabel;
    }
    if (null != connectSublabel) {
      str = connectSublabel;
    }
    obj.description = str;
    obj.visible = tmp5;
    let icon;
    if (null != consoleInfo) {
      icon = consoleInfo.icon;
    }
    obj.imgSource = icon;
    obj.withBlurBackground = true;
    obj.onDismiss = function onDismiss() {
      callback(true);
    };
    return obj;
  }, items2);
  closure_10 = tmp15;
  const items3 = [memo1.visible || memo2.visible, tmp12];
  const effect = controlsSpecs.useEffect(() => {
    if (closure_10) {
      obj.lock(tmp11.FLOATING_DEFAULT);
    } else {
      obj.unlock();
    }
  }, items3);
  useCoachmarkHelper(targetRef, memo1, first);
  useCoachmarkHelper(targetRef, memo2, first);
};
