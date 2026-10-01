// Module ID: 16946
// Function ID: 16947
// Name: useSpeakerTooltips
// Dependencies: [32, 19, 16944, 11753, 2042, 21, 16947, 16881, 8963, 11754, 4566, 6806, 16918, 1115, 2029, 16949, 10589, 2]
// Exports: default

// Module 16946 (useSpeakerTooltips)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11753 */;
import VoicePanelConsoleFacepile from "VoicePanelConsoleFacepile" /* 16949 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConsoleVoiceUpsellStore from "ConsoleVoiceUpsellStore" /* 16944 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let tmp;
const dismissible_content = tmp(2029);
let _slicedToArray = _slicedToArray_mod;
({ setVoiceUpsellDismissed: hasOwnProperty, useConsoleVoiceUpsellStore: metroRequire } = ConsoleVoiceUpsellStore);
let VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let __initData = { code: "function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
const __initData2 = { code: "function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(targetRef, arg1) {
  let closure_1;
  let closure_10;
  let closure_3;
  let closure_7;
  let controlsSpecs;
  let first1;
  let voiceUpsellDismissed;
  const f106610 = () => {
    const obj = memo2;
    if (memo2.visible) {
      obj.onDismiss();
    }
  };
  const f106611 = () => {
    const tmp = first;
    if (!tmp) {
      callback1();
    }
  };
  let tmp = arg1;
  let first = arg1;
  let tmp3 = voiceUpsellDismissed;
  const tmp4 = require("useConsoleConnectedAccountForVoiceUpsell")();
  const tmp2 = importDefault;
  importDefault = tmp4;
  voiceUpsellDismissed = first1().voiceUpsellDismissed;
  let tmp5 = require("useChannelFloatingCTAContent")(undefined);
  _slicedToArray = tmp5;
  let obj = first(voiceUpsellDismissed[8]);
  let obj2 = controlsSpecs;
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  controlsSpecs = controlsSpecs.useContext(require("VoicePanelStateContext")).controlsSpecs;
  const tmp9 = _slicedToArray(controlsSpecs.useState(true), 2);
  let closure_5 = tmp11;
  first = tmp9[0];
  const fn = function v() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 13952338295275;
  fn.__initData = __initData;
  const fn2 = function b(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_5)(arg0 === VoicePanelControlsModes.FLOATING_DEFAULT);
    }
  };
  const obj3 = first(voiceUpsellDismissed[10]);
  fn2.__closure = { runOnJS: first(voiceUpsellDismissed[10]).runOnJS, setIsShowingControls: tmp9[1], VoicePanelControlsModes };
  fn2.__workletHash = 5084069556209;
  fn2.__initData = __initData2;
  ({ runOnJS: first(voiceUpsellDismissed[10]).runOnJS, setIsShowingControls: tmp9[1], VoicePanelControlsModes });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const tmp8 = _slicedToArray;
  if (arg1) {
    tmp = isVoicePanelFullscreen;
  }
  if (tmp) {
    tmp = first;
  }
  first = tmp;
  const items = [tmp, tmp5];
  const memo = obj2.useMemo(() => first ? closure_3 : [], items);
  const tmp6Result = first(tmp3[11]);
  const tmp8Result = tmp8(tmp6Result.useSelectedDismissibleContent(memo), 2);
  first1 = tmp8Result[0];
  VoicePanelControlsModes = tmp16;
  const tmp17 = tmp2(tmp3[12])();
  let closure_8 = tmp17;
  const items1 = [tmp, tmp8Result[1], first1];
  const memo1 = obj2.useMemo(() => {
    let intl;
    let intl2;
    let tmp3;
    const obj = {
      position: "bottom",
      title: intl.string(intl3.t.O2WA4u),
      description: intl2.string(intl3.t.fr5bJy),
      visible: tmp3,
      renderImgComponent() {
        return memo1(closure_1_1(voiceUpsellDismissed[15]), {});
      },
      withBlurBackground: true,
      onDismiss() {
        return closure_1_7(constants.UNKNOWN);
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    tmp3 = first;
    if (tmp3) {
      tmp3 = first1 === dismissible_content.DismissibleContent.DONUT_MOBILE_NUX;
    }
    return obj;
  }, items1);
  const items2 = [tmp4, tmp, voiceUpsellDismissed, memo1.visible];
  const memo2 = obj2.useMemo(() => {
    let icon;
    let str2;
    let consoleInfo = null;
    if (null != closure_1) {
      const obj = VoicePanelConsoleFacepile;
      consoleInfo = obj.getConsoleInfo(tmp);
    }
    let str;
    const tmp5 = first && !voiceUpsellDismissed && null != consoleInfo && !memo1.visible;
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
  }, items2);
  __initData = tmp20;
  const items3 = [memo1.visible || memo2.visible, tmp17];
  const effect = obj2.useEffect(() => {
    if (closure_10) {
      closure_8.lock(VoicePanelControlsModes.FLOATING_DEFAULT);
    } else {
      closure_8.unlock();
    }
  }, items3);
  first = tmp;
  const items4 = [memo1];
  const callback = obj2.useCallback(f106610, items4);
  const items5 = [tmp, callback];
  const effect1 = obj2.useEffect(f106611, items5);
  const tmp6Result3 = first(tmp3[16]);
  const coachmark = tmp6Result3.useCoachmark(targetRef, memo1);
  first = tmp;
  const items6 = [memo2];
  const callback1 = obj2.useCallback(f106610, items6);
  const items7 = [tmp, callback1];
  const effect2 = obj2.useEffect(f106611, items7);
  const tmp6Result4 = first(tmp3[16]);
  const coachmark1 = tmp6Result4.useCoachmark(targetRef, memo2);
};
