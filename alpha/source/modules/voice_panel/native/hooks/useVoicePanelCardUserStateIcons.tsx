// Module ID: 17683
// Function ID: 17684
// Name: useVoicePanelCardUserStateIcons
// Dependencies: [19, 5109, 5112, 5114, 558, 576, 11925, 8781, 573, 11094, 5136, 11035, 16582, 17684, 4768, 1126, 5001, 587, 2]

// Module 17683 (useVoicePanelCardUserStateIcons)
import intl6 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import CallConstants from "CallConstants" /* 5114 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 8781 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11925 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17684 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let tmp2;
const MobileAudioOutputExperimentDefault = tmp2(11035);
const useMuteAwareLocalVolumeDefault = tmp2(11094);
const ParticipantTypes = CallConstants.ParticipantTypes;
const VoicePanelCardUserStateIconType = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON" };
tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoicePanelCardUserStateIcons(arg0, arg1, arg2, arg3) {
  let closure_0;
  let closure_1;
  let connected;
  let muteDeafenIconState;
  let setShowFloatingCTA;
  let tmp13;
  let tmp14;
  let tmp17;
  _require = arg1;
  let tmp = _require;
  const tmp2 = setShowFloatingCTA;
  let obj = require("react");
  const cResult = obj.c(35);
  let tmp4 = null;
  if (undefined !== arg3) {
    tmp4 = arg3;
  }
  importDefault = tmp4;
  const tmp5 = importDefault;
  setShowFloatingCTA = muteDeafenIconState.useContext(require("VoicePanelStateContext")).setShowFloatingCTA;
  let tmp8;
  const useMuteDeafenIconState = tmp(tmp2[7]).useMuteDeafenIconState;
  tmp(tmp2[7]);
  if (arg0 === ParticipantTypes.USER) {
    tmp8 = arg1;
  }
  muteDeafenIconState = useMuteDeafenIconState(tmp8, arg2);
  let tmp11;
  const useVideoIconState = tmp(tmp2[7]).useVideoIconState;
  tmp(tmp2[7]);
  if (arg0 === ParticipantTypes.USER) {
    tmp11 = arg1;
  }
  const videoIconState = useVideoIconState(tmp11, arg2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore];
    const fn = function _() {
      return connected.isConnected();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp13 = items;
    tmp14 = fn;
  } else {
    [tmp13, tmp14] = cResult;
  }
  const tmpResult6 = tmp(tmp2[8]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp13, tmp14);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [VoiceStateStore];
    cResult[2] = items1;
    tmp17 = items1;
  } else {
    tmp17 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp19;
    let tmp20;
    let tmp24;
    let tmp28;
    if (cResult[4] === arg1) {
      tmp19 = cResult[5];
      tmp20 = cResult[6];
    }
    const tmpResult7 = tmp(tmp2[8]);
    const stateFromStores1 = tmpResult7.useStateFromStores(tmp17, tmp19, tmp20);
    let tmp23;
    const tmp5Result = tmp5(tmp2[9]);
    if (arg0 === ParticipantTypes.STREAM) {
      tmp23 = arg1;
    }
    const _Symbol = Symbol;
    const effectiveVolume = tmp5Result(tmp23, tmp(tmp2[10]).MediaEngineContextTypes.STREAM).effectiveVolume;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { location: "useVoicePanelCardUserStateIcons" };
      cResult[7] = obj2;
      tmp24 = obj2;
    } else {
      tmp24 = cResult[7];
    }
    const tmp5Result2 = tmp5(tmp2[11]);
    const showTileVolumeIndicator = tmp5Result2.useConfig(tmp24).showTileVolumeIndicator && 0 === effectiveVolume && arg0 === tmp7.STREAM;
    const tmpResult8 = tmp(tmp2[12]);
    const isRTCDisconnectedUIVisible = tmpResult8.useIsRTCDisconnectedUIVisible(tmp4, arg1);
    if (cResult[8] !== setShowFloatingCTA) {
      const fn2 = function y() {
        setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
      };
      cResult[8] = setShowFloatingCTA;
      cResult[9] = fn2;
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          let intl;
          const obj = { text: intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk), icon: closure_0(setShowFloatingCTA[16]).CircleErrorIcon, iconColor: closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING };
          const openMana = closure_1(setShowFloatingCTA[14]).openMana;
          closure_1(setShowFloatingCTA[14]);
          intl = closure_0(setShowFloatingCTA[15]).intl;
          openMana("user-disconnected-indicator", obj);
        }
      }
      cResult[10] = P;
    } else {
      class P {
        constructor() {
          let intl;
          const obj = { text: intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk), icon: closure_0(setShowFloatingCTA[16]).CircleErrorIcon, iconColor: closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING };
          const openMana = closure_1(setShowFloatingCTA[14]).openMana;
          closure_1(setShowFloatingCTA[14]);
          intl = closure_0(setShowFloatingCTA[15]).intl;
          openMana("user-disconnected-indicator", obj);
        }
      }
    }
    if (stateFromStores) {
      class P {
        constructor() {
          let intl;
          const obj = { text: intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk), icon: closure_0(setShowFloatingCTA[16]).CircleErrorIcon, iconColor: closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING };
          const openMana = closure_1(setShowFloatingCTA[14]).openMana;
          closure_1(setShowFloatingCTA[14]);
          intl = closure_0(setShowFloatingCTA[15]).intl;
          openMana("user-disconnected-indicator", obj);
        }
      }
    } else {
      class P {
        constructor() {
          let intl;
          const obj = { text: intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk), icon: closure_0(setShowFloatingCTA[16]).CircleErrorIcon, iconColor: closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING };
          const openMana = closure_1(setShowFloatingCTA[14]).openMana;
          closure_1(setShowFloatingCTA[14]);
          intl = closure_0(setShowFloatingCTA[15]).intl;
          openMana("user-disconnected-indicator", obj);
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            let intl;
            const obj = { text: intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk), icon: closure_0(setShowFloatingCTA[16]).CircleErrorIcon, iconColor: closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING };
            const openMana = closure_1(setShowFloatingCTA[14]).openMana;
            closure_1(setShowFloatingCTA[14]);
            intl = closure_0(setShowFloatingCTA[15]).intl;
            openMana("user-disconnected-indicator", obj);
          }
        }
        cResult[11] = tmp29;
        tmp28 = tmp29;
      } else {
        class P {
          constructor() {
            let intl;
            const obj = { text: intl.string(closure_0(setShowFloatingCTA[15]).t.HFwRpk), icon: closure_0(setShowFloatingCTA[16]).CircleErrorIcon, iconColor: closure_1(setShowFloatingCTA[17]).colors.ICON_FEEDBACK_WARNING };
            const openMana = closure_1(setShowFloatingCTA[14]).openMana;
            closure_1(setShowFloatingCTA[14]);
            intl = closure_0(setShowFloatingCTA[15]).intl;
            openMana("user-disconnected-indicator", obj);
          }
        }
      }
    }
    return tmp28;
  }
  class M {
    constructor() {
      let voicePlatformForChannel = null;
      if (null != closure_1) {
        voicePlatformForChannel = null;
        if (null != closure_0) {
          voicePlatformForChannel = VoiceStateStore.getVoicePlatformForChannel(tmp, tmp3);
        }
      }
      return voicePlatformForChannel;
    }
  }
  const items2 = [tmp4, arg1];
  cResult[3] = tmp4;
  cResult[4] = arg1;
  cResult[5] = M;
  cResult[6] = items2;
  tmp20 = items2;
  tmp19 = M;
}) : (function useVoicePanelCardUserStateIcons(arg0, arg1, arg2) {
  let _null;
  let closure_0;
  let closure_1;
  _require = arg0;
  importDefault = arg1;
  let tmp = arg3;
  if (arg3 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  let setShowFloatingCTA;
  let muteDeafenIconState;
  let videoIconState;
  let stateFromStores;
  let stateFromStores1;
  let showTileVolumeIndicator;
  let isRTCDisconnectedUIVisible;
  let callback;
  let callback1;
  let obj = setShowFloatingCTA;
  const tmp2 = importDefault;
  const tmp3 = dependencyMap;
  setShowFloatingCTA = setShowFloatingCTA.useContext(VoicePanelStateContextDefault).setShowFloatingCTA;
  const tmp4 = _require;
  let tmp5 = require("VoiceStateIconUtils");
  let tmp7;
  const useMuteDeafenIconState = tmp5.useMuteDeafenIconState;
  if (arg0 === stateFromStores.USER) {
    tmp7 = arg1;
  }
  muteDeafenIconState = useMuteDeafenIconState(tmp7, arg2);
  let tmp10;
  const useVideoIconState = tmp4(8781).useVideoIconState;
  tmp4(8781);
  if (arg0 === stateFromStores.USER) {
    tmp10 = arg1;
  }
  videoIconState = useVideoIconState(tmp10, arg2);
  let items = [muteDeafenIconState];
  const tmp4Result4 = tmp4(573);
  stateFromStores = tmp4Result4.useStateFromStores(items, () => muteDeafenIconState.isConnected());
  let items1 = [videoIconState];
  const items2 = [tmp, arg1];
  const tmp4Result5 = tmp4(573);
  stateFromStores1 = tmp4Result5.useStateFromStores(items1, () => {
    let voicePlatformForChannel = null;
    if (null != c2) {
      voicePlatformForChannel = null;
      if (null != closure_1) {
        voicePlatformForChannel = VoiceStateStore.getVoicePlatformForChannel(tmp, tmp3);
      }
    }
    return voicePlatformForChannel;
  }, items2);
  let tmp15;
  const tmp2Result = useMuteAwareLocalVolumeDefault;
  if (arg0 === stateFromStores.STREAM) {
    tmp15 = arg1;
  }
  const effectiveVolume = tmp2Result(tmp15, tmp4(5136).MediaEngineContextTypes.STREAM).effectiveVolume;
  const tmp2Result2 = MobileAudioOutputExperimentDefault;
  showTileVolumeIndicator = tmp2Result2.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = arg0 === tmp6.STREAM;
  }
  const tmp4Result6 = tmp4(16582);
  isRTCDisconnectedUIVisible = tmp4Result6.useIsRTCDisconnectedUIVisible(tmp, arg1);
  const items3 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
  }, items3);
  callback1 = obj.useCallback(() => {
    let intl;
    const obj = { text: intl.string(closure_0(_null[15]).t.HFwRpk), icon: closure_0(_null[16]).CircleErrorIcon, iconColor: closure_1(_null[17]).colors.ICON_FEEDBACK_WARNING };
    const openMana = closure_1(_null[14]).openMana;
    closure_1(_null[14]);
    intl = closure_0(_null[15]).intl;
    openMana("user-disconnected-indicator", obj);
  }, []);
  const items4 = [stateFromStores, arg0, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, arg1, callback1, showTileVolumeIndicator];
  return obj.useMemo(() => {
    let obj;
    let tmp15;
    let tmp = stateFromStores;
    if (tmp) {
      if (closure_0 === ParticipantTypes.STREAM) {
        const items = [];
        const tmp20 = showTileVolumeIndicator;
        if (tmp20) {
          let obj2 = {
            type: obj.SPEAKER_MUTE_ICON,
            onPress() {
                    let intl;
                    const tmp = closure_1(c2[14]);
                    const open = tmp.open;
                    const obj = { key: "" + closure_1_1 + "-stream-status", content: intl.string(closure_0(c2[15]).t.Q8Uzof) };
                    intl = closure_0(c2[15]).intl;
                    open(obj);
                  }
          };
          items.push(obj2);
        }
        let obj3 = { type: obj.STREAM_ICON, voicePlatform: stateFromStores1 };
        items.push(obj3);
        return items;
      } else if (tmp2 !== tmp3.USER) {
        return [];
      } else {
        const items1 = [];
        const tmp26 = isRTCDisconnectedUIVisible;
        if (tmp26) {
          obj = { type: obj.USER_DISCONNECTED_ICON, onPress: callback1 };
          items1.push(obj);
        }
        let tmp9 = null != videoIconState;
        if (tmp9) {
          tmp9 = tmp7 !== VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE;
        }
        if (tmp9) {
          let obj4 = { type: obj.USER_VIDEO_ICON, videoIconState: tmp7, onPress: tmp15 };
          const push = items1.push;
          tmp15 = undefined;
          if (videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            tmp15 = callback;
          }
          push(obj4);
        }
        if (null != muteDeafenIconState) {
          let obj5 = {
            type: obj.MUTE_DEAFEN_ICON,
            muteDeafenIconState: tmp17,
            withLeftMargin: items1.length > 0,
            onPress() {
                    let intl;
                    let intl2;
                    let intl3;
                    let intl4;
                    let intl5;
                    if (closure_0(c2[7]).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const _HermesInternal4 = HermesInternal;
                      const obj2 = { key: "" + closure_1_1 + "-status", content: intl4.string(closure_0(c2[15]).t.btxSdB) };
                      const open4 = closure_1(c2[14]).open;
                      closure_1(c2[14]);
                      intl4 = tmp2(tmp3[15]).intl;
                      open4(obj2);
                    } else if (closure_0(c2[7]).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const _HermesInternal3 = HermesInternal;
                      const obj3 = { key: "" + closure_1_1 + "-status", content: intl3.string(closure_0(c2[15]).t.NjmiOL) };
                      const open3 = closure_1(c2[14]).open;
                      closure_1(c2[14]);
                      intl3 = tmp2(tmp3[15]).intl;
                      open3(obj3);
                    } else if (closure_0(c2[7]).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const _HermesInternal2 = HermesInternal;
                      const obj4 = { key: "" + closure_1_1 + "-status", content: intl2.string(closure_0(c2[15]).t.uLddbQ) };
                      const open2 = closure_1(c2[14]).open;
                      closure_1(c2[14]);
                      intl2 = tmp2(tmp3[15]).intl;
                      open2(obj4);
                    } else if (closure_0(c2[7]).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const _HermesInternal = HermesInternal;
                      const obj = { key: "" + closure_1_1 + "-status", content: intl.string(closure_0(c2[15]).t.Q8Uzof) };
                      const open = closure_1(c2[14]).open;
                      closure_1(c2[14]);
                      intl = tmp2(tmp3[15]).intl;
                      open(obj);
                    } else if (closure_0(c2[7]).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const _HermesInternal5 = HermesInternal;
                      const obj5 = { key: "" + closure_1_1 + "-status", content: intl5.string(closure_0(c2[15]).t.tjtv3P) };
                      const open5 = closure_1(c2[14]).open;
                      closure_1(c2[14]);
                      intl5 = tmp2(tmp3[15]).intl;
                      open5(obj5);
                    }
                  }
          };
          items1.push(obj5);
        }
        return items1;
      }
    } else {
      return [];
    }
  }, items4);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default tmp2;
export { VoicePanelCardUserStateIconType };
