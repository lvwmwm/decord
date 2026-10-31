// Module ID: 19213
// Function ID: 19214
// Name: useVoicePanelCardUserStateIcons
// Dependencies: [19, 5764, 5679, 5681, 11222, 9234, 563, 12001, 5789, 11942, 18284, 19159, 5712, 1113, 7086, 575, 2]
// Exports: default

// Module 19213 (useVoicePanelCardUserStateIcons)
import CallConstants from "CallConstants" /* 5681 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9234 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11222 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19159 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5764 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let tmp2;
const MobileAudioOutputExperimentDefault = tmp2(11942);
const useMuteAwareLocalVolumeDefault = tmp2(12001);
const ParticipantTypes = CallConstants.ParticipantTypes;
const VoicePanelCardUserStateIconType = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON" };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default function useVoicePanelCardUserStateIcons(arg0, id, guildId) {
  let _null;
  let closure_0;
  _require = arg0;
  importDefault = id;
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
    tmp7 = id;
  }
  muteDeafenIconState = useMuteDeafenIconState(tmp7, guildId);
  let tmp10;
  const useVideoIconState = tmp4(9234).useVideoIconState;
  tmp4(9234);
  if (arg0 === stateFromStores.USER) {
    tmp10 = id;
  }
  videoIconState = useVideoIconState(tmp10, guildId);
  let items = [muteDeafenIconState];
  const tmp4Result4 = tmp4(563);
  stateFromStores = tmp4Result4.useStateFromStores(items, () => muteDeafenIconState.isConnected());
  let items1 = [videoIconState];
  const items2 = [tmp, id];
  const tmp4Result5 = tmp4(563);
  stateFromStores1 = tmp4Result5.useStateFromStores(items1, () => {
    let voicePlatformForChannel = null;
    if (null != c2) {
      voicePlatformForChannel = null;
      if (null != id) {
        voicePlatformForChannel = VoiceStateStore.getVoicePlatformForChannel(tmp, tmp3);
      }
    }
    return voicePlatformForChannel;
  }, items2);
  let tmp15;
  const tmp2Result = useMuteAwareLocalVolumeDefault;
  if (arg0 === stateFromStores.STREAM) {
    tmp15 = id;
  }
  const effectiveVolume = tmp2Result(tmp15, tmp4(5789).MediaEngineContextTypes.STREAM).effectiveVolume;
  const tmp2Result2 = MobileAudioOutputExperimentDefault;
  showTileVolumeIndicator = tmp2Result2.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = arg0 === tmp6.STREAM;
  }
  const tmp4Result6 = tmp4(18284);
  isRTCDisconnectedUIVisible = tmp4Result6.useIsRTCDisconnectedUIVisible(tmp, id);
  const items3 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
  }, items3);
  callback1 = obj.useCallback(() => {
    let intl;
    const obj = { text: intl.string(closure_0(_null[13]).t.HFwRpk), icon: closure_0(_null[14]).CircleErrorIcon, iconColor: id(_null[15]).colors.ICON_FEEDBACK_WARNING };
    const open = id(_null[12]).open;
    id(_null[12]);
    intl = closure_0(_null[13]).intl;
    open("user-disconnected-indicator", obj);
  }, []);
  const items4 = [stateFromStores, arg0, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator];
  return obj.useMemo(() => {
    let obj;
    let tmp15;
    const tmp = stateFromStores;
    if (tmp) {
      if (closure_0 === ParticipantTypes.STREAM) {
        const items = [];
        const tmp20 = showTileVolumeIndicator;
        if (tmp20) {
          let obj2 = {
            type: obj.SPEAKER_MUTE_ICON,
            onPress() {
                    let intl;
                    const open = closure_1(c2[12]).open;
                    const obj = { text: intl.string(closure_0(c2[13]).t.Q8Uzof) };
                    closure_1(c2[12]);
                    const combined = "" + closure_1_1 + "-stream-status";
                    intl = closure_0(c2[13]).intl;
                    open(combined, obj);
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
                    if (closure_0(c2[5]).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const _HermesInternal4 = HermesInternal;
                      const open4 = closure_1(c2[12]).open;
                      const obj2 = { text: intl4.string(closure_0(c2[13]).t.btxSdB) };
                      closure_1(c2[12]);
                      const combined = "" + closure_1_1 + "-status";
                      intl4 = tmp2(tmp3[13]).intl;
                      open4(combined, obj2);
                    } else if (closure_0(c2[5]).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const _HermesInternal3 = HermesInternal;
                      const open3 = closure_1(c2[12]).open;
                      const obj3 = { text: intl3.string(closure_0(c2[13]).t.NjmiOL) };
                      closure_1(c2[12]);
                      const combined1 = "" + closure_1_1 + "-status";
                      intl3 = tmp2(tmp3[13]).intl;
                      open3(combined1, obj3);
                    } else if (closure_0(c2[5]).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const _HermesInternal2 = HermesInternal;
                      const open2 = closure_1(c2[12]).open;
                      const obj4 = { text: intl2.string(closure_0(c2[13]).t.uLddbQ) };
                      closure_1(c2[12]);
                      const combined2 = "" + closure_1_1 + "-status";
                      intl2 = tmp2(tmp3[13]).intl;
                      open2(combined2, obj4);
                    } else if (closure_0(c2[5]).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const _HermesInternal = HermesInternal;
                      const open = closure_1(c2[12]).open;
                      const obj = { text: intl.string(closure_0(c2[13]).t.Q8Uzof) };
                      closure_1(c2[12]);
                      const combined3 = "" + closure_1_1 + "-status";
                      intl = tmp2(tmp3[13]).intl;
                      open(combined3, obj);
                    } else if (closure_0(c2[5]).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const _HermesInternal5 = HermesInternal;
                      const open5 = closure_1(c2[12]).open;
                      const obj5 = { text: intl5.string(closure_0(c2[13]).t.tjtv3P) };
                      closure_1(c2[12]);
                      const combined4 = "" + closure_1_1 + "-status";
                      intl5 = tmp2(tmp3[13]).intl;
                      open5(combined4, obj5);
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
};
export { VoicePanelCardUserStateIconType };
