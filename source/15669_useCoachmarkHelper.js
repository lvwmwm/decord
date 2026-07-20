// Module ID: 15669
// Function ID: 119728
// Name: useCoachmarkHelper
// Dependencies: []
// Exports: default

// Module 15669 (useCoachmarkHelper)
function useCoachmarkHelper(targetRef, memo1, first) {
  const importDefault = first;
  const items = [memo1];
  const callback = React.useCallback((arg0, self) => {
    if (self.visible) {
      self.onDismiss();
    }
  }, items);
  const dependencyMap = callback;
  const items1 = [first, callback];
  const effect = React.useEffect(() => {
    if (!arg2) {
      callback();
    }
  }, items1);
  const coachmark = memo1(dependencyMap[16]).useCoachmark(targetRef, memo1);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ setVoiceUpsellDismissed: closure_5, useConsoleVoiceUpsellStore: closure_6 } = arg1(dependencyMap[2]));
const VoicePanelControlsModes = arg1(dependencyMap[3]).VoicePanelControlsModes;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const jsx = arg1(dependencyMap[5]).jsx;
let closure_10 = { code: "function useSpeakerTooltipsTsx1(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().mode;}" };
let closure_11 = { code: "function useSpeakerTooltipsTsx2(currentControlsMode,previous){const{runOnJS,setIsShowingControls,VoicePanelControlsModes}=this.__closure;if(currentControlsMode===previous)return;runOnJS(setIsShowingControls)(currentControlsMode===VoicePanelControlsModes.FLOATING_DEFAULT);}" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/voice_panel/native/hooks/useSpeakerTooltips.tsx");

export default function useSpeakerTooltips(targetRef, first) {
  const tmp2 = importDefault(dependencyMap[6])();
  const importDefault = tmp2;
  const voiceUpsellDismissed = first1().voiceUpsellDismissed;
  const dependencyMap = voiceUpsellDismissed;
  const tmp3 = importDefault(dependencyMap[7])(undefined);
  const callback = tmp3;
  let obj = first(dependencyMap[8]);
  const isVoicePanelFullscreen = obj.useIsVoicePanelFullscreen();
  const controlsSpecs = React.useContext(importDefault(dependencyMap[9])).controlsSpecs;
  const React = controlsSpecs;
  const tmp5 = callback(React.useState(true), 2);
  const tmp6 = tmp5[1];
  const fn = function b() {
    return controlsSpecs.get().mode;
  };
  fn.__closure = { controlsSpecs };
  fn.__workletHash = 13952338295275;
  fn.__initData = closure_10;
  class S {
    constructor(arg0, arg1) {
      if (targetRef !== first) {
        tmp = first;
        tmp2 = voiceUpsellDismissed;
        num = 10;
        obj = first(voiceUpsellDismissed[10]);
        tmp3 = closure_5;
        tmp4 = closure_7;
        tmp5 = obj.runOnJS(closure_5)(targetRef === closure_7.FLOATING_DEFAULT);
      }
      return;
    }
  }
  obj = { runOnJS: first(dependencyMap[10]).runOnJS, setIsShowingControls: tmp6, VoicePanelControlsModes };
  S.__closure = obj;
  S.__workletHash = 5084069556209;
  S.__initData = closure_11;
  const animatedReaction = first(dependencyMap[10]).useAnimatedReaction(fn, S);
  if (first) {
    first = isVoicePanelFullscreen;
  }
  if (first) {
    first = tmp5[0];
  }
  const items = [first, tmp3];
  const memo = React.useMemo(() => first ? tmp3 : [], items);
  const obj2 = first(dependencyMap[10]);
  const tmp9 = callback(first(dependencyMap[11]).useSelectedDismissibleContent(memo), 2);
  const first1 = tmp9[0];
  const VoicePanelControlsModes = tmp11;
  const tmp12 = importDefault(dependencyMap[12])();
  const ContentDismissActionType = tmp12;
  const items1 = [first, tmp9[1], first1];
  const memo1 = React.useMemo(() => {
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
      return callback3(callback(closure_2[15]), {});
    };
    obj.withBlurBackground = true;
    obj.onDismiss = function onDismiss() {
      return callback2(constants.UNKNOWN);
    };
    return obj;
  }, items1);
  const jsx = memo1;
  const items2 = [tmp2, first, voiceUpsellDismissed, memo1.visible];
  const memo2 = React.useMemo(() => {
    let consoleInfo = null;
    if (null != tmp2) {
      let obj = first(voiceUpsellDismissed[15]);
      consoleInfo = obj.getConsoleInfo(tmp2);
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
  const effect = React.useEffect(() => {
    if (tmp15) {
      obj.lock(tmp11.FLOATING_DEFAULT);
    } else {
      obj.unlock();
    }
  }, items3);
  useCoachmarkHelper(targetRef, memo1, first);
  useCoachmarkHelper(targetRef, memo2, first);
};
