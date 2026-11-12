// Module ID: 19662
// Function ID: 19663
// Name: useSpeakerTooltips
// Dependencies: [32, 19, 19660, 11393, 5016, 21, 19663, 19576, 11358, 11394, 1652, 1705, 7674, 19612, 1113, 5003, 19665, 10109, 2]
// Exports: default

// Module 19662 (useSpeakerTooltips)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11393 */;
import VoicePanelConsoleFacepile from "VoicePanelConsoleFacepile" /* 19665 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConsoleVoiceUpsellStore from "ConsoleVoiceUpsellStore" /* 19660 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_6, importDefault;

let hasOwnProperty;
let metroRequire;
let tmp;
const dismissible_content = tmp(5003);
let _slicedToArray = _slicedToArray_mod;
({ setVoiceUpsellDismissed: hasOwnProperty, useConsoleVoiceUpsellStore: metroRequire } = ConsoleVoiceUpsellStore);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_10 = { code: "(function useSpeakerTooltipsTsx1(){let[controlsSpecs]=this.__closure;return controlsSpecs.get().mode;})" };
let closure_11 = { code: "(function useSpeakerTooltipsTsx2(currentControlsMode,previous){let[scheduleOnRN,setIsShowingControls,VoicePanelControlsModes]=this.__closure;if(currentControlsMode===previous)return;scheduleOnRN(setIsShowingControls,currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(targetRef, arg1) {
  let closure_0;
  let closure_1;
  let closure_3;
  let first;
  let memo1;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let voiceUpsellDismissed;
  const f119118 = () => {
    const obj = memo2;
    if (memo2.visible) {
      obj.onDismiss();
    }
  };
  const f119119 = () => {
    const tmp = closure_1;
    if (!tmp) {
      callback1();
    }
  };
  let tmp = arg1;
  _require = arg1;
  let tmp3 = voiceUpsellDismissed;
  const tmp4 = require("useConsoleConnectedAccountForVoiceUpsell")();
  const tmp2 = importDefault;
  importDefault = tmp4;
  voiceUpsellDismissed = closure_6().voiceUpsellDismissed;
  let tmp5 = require("useChannelFloatingCTAContent")(undefined);
  _slicedToArray = tmp5;
  let obj = require("VoicePanelUtils");
  let obj2 = first;
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  const controlsSpecs = first.useContext(require("VoicePanelStateContext")).controlsSpecs;
  [tmp10, tmp11] = first.useState(true);
  _slicedToArray(first.useState(true), 2);
  const items = [closure_10, controlsSpecs];
  [tmp13, tmp14] = items;
  function useSpeakerTooltipsTsx1() {
    return _undefined.get().mode;
  }
  const items1 = [tmp14];
  useSpeakerTooltipsTsx1.__closure = items1;
  useSpeakerTooltipsTsx1.__workletHash = 14111641987858;
  useSpeakerTooltipsTsx1.__initData = tmp13;
  const items2 = [closure_11, , , ];
  const useAnimatedReaction = require("module_1652").useAnimatedReaction;
  require("module_1652");
  items2[1] = require("module_1705").scheduleOnRN;
  items2[2] = tmp11;
  items2[3] = memo1;
  let c0;
  let c1;
  let c2;
  [tmp15, tmp16, tmp17, tmp18] = items2;
  function useSpeakerTooltipsTsx2(arg0, arg1) {
    if (arg0 !== arg1) {
      _undefined(c1, arg0 === _undefined2.FLOATING_DEFAULT);
    }
  }
  const items3 = [tmp16, tmp17, tmp18];
  useSpeakerTooltipsTsx2.__closure = items3;
  useSpeakerTooltipsTsx2.__workletHash = 11431330900869;
  useSpeakerTooltipsTsx2.__initData = tmp15;
  const animatedReaction = useAnimatedReaction(useSpeakerTooltipsTsx1, useSpeakerTooltipsTsx2);
  const tmp8 = _slicedToArray;
  if (tmp) {
    tmp = isVoicePanelFullscreen;
  }
  if (tmp) {
    tmp = tmp10;
  }
  _require = tmp;
  const items4 = [tmp, tmp5];
  const memo = obj2.useMemo(() => closure_0 ? closure_3 : [], items4);
  const tmp6Result = require("useSelectedDismissibleContent");
  const tmp8Result = tmp8(tmp6Result.useSelectedDismissibleContent(memo), 2);
  first = tmp8Result[0];
  let closure_5 = tmp23;
  const tmp24 = tmp2(tmp3[13])();
  closure_6 = tmp24;
  const items5 = [tmp, tmp8Result[1], first];
  memo1 = obj2.useMemo(() => {
    let intl;
    let intl2;
    let tmp3;
    const obj = {
      position: "bottom",
      title: intl.string(intl3.t.O2WA4u),
      description: intl2.string(intl3.t.fr5bJy),
      visible: tmp3,
      renderImgComponent() {
        return closure_1_9(closure_1_1(voiceUpsellDismissed[16]), {});
      },
      withBlurBackground: true,
      onDismiss() {
        return closure_1_5(constants.UNKNOWN);
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    tmp3 = closure_0;
    if (tmp3) {
      tmp3 = first === dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    }
    return obj;
  }, items5);
  const items6 = [tmp4, tmp, voiceUpsellDismissed, memo1.visible];
  const memo2 = obj2.useMemo(() => {
    let icon;
    let str2;
    let consoleInfo = null;
    if (null != closure_1) {
      const obj = VoicePanelConsoleFacepile;
      consoleInfo = obj.getConsoleInfo(tmp);
    }
    let str;
    const tmp5 = closure_0 && !voiceUpsellDismissed && null != consoleInfo && !memo1.visible;
    if (consoleInfo != null) {
      str = consoleInfo.connectLabel;
    }
    if (str == null) {
      str = "";
    }
    const obj2 = {
      position: "bottom",
      title: str,
      description: str2,
      visible: tmp5,
      imgSource: icon,
      withBlurBackground: true,
      onDismiss() {
        closure_1_5(true);
      }
    };
    str2 = undefined;
    if (consoleInfo != null) {
      str2 = consoleInfo.connectSublabel;
    }
    if (str2 == null) {
      str2 = "";
    }
    icon = undefined;
    if (consoleInfo != null) {
      icon = consoleInfo.icon;
    }
    return obj2;
  }, items6);
  let closure_8 = tmp27;
  const items7 = [memo1.visible || memo2.visible, tmp24];
  const effect = obj2.useEffect(() => {
    if (closure_8) {
      closure_6.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
    } else {
      closure_6.unlock();
    }
  }, items7);
  const items8 = [memo1];
  const callback = obj2.useCallback(f119118, items8);
  const items9 = [tmp, callback];
  const effect1 = obj2.useEffect(f119119, items9);
  const tmp6Result3 = require("useCoachmark");
  const coachmark = tmp6Result3.useCoachmark(targetRef, memo1);
  importDefault = tmp;
  const items10 = [memo2];
  const callback1 = obj2.useCallback(f119118, items10);
  const items11 = [tmp, callback1];
  const effect2 = obj2.useEffect(f119119, items11);
  const tmp6Result4 = require("useCoachmark");
  const coachmark1 = tmp6Result4.useCoachmark(targetRef, memo2);
};
