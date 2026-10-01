// Module ID: 16931
// Function ID: 16932
// Name: useVoicePanelCardUserStateIcons
// Dependencies: [19, 4859, 4855, 4857, 21, 11754, 9133, 563, 9477, 4891, 9437, 15868, 16877, 4528, 6028, 576, 1115, 2]
// Exports: default

// Module 16931 (useVoicePanelCardUserStateIcons)
import Fragment from "Fragment" /* 21 */;
import CallConstants from "CallConstants" /* 4857 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9133 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11754 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 16877 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let tmp2;
const MobileAudioOutputExperimentDefault = tmp2(9437);
const useMuteAwareLocalVolumeDefault = tmp2(9477);
const ParticipantTypes = CallConstants.ParticipantTypes;
const jsx = Fragment.jsx;
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
  const useVideoIconState = tmp4(9133).useVideoIconState;
  tmp4(9133);
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
  const effectiveVolume = tmp2Result(tmp15, tmp4(4891).MediaEngineContextTypes.STREAM).effectiveVolume;
  const tmp2Result2 = MobileAudioOutputExperimentDefault;
  showTileVolumeIndicator = tmp2Result2.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = arg0 === tmp6.STREAM;
  }
  const tmp4Result6 = tmp4(15868);
  isRTCDisconnectedUIVisible = tmp4Result6.useIsRTCDisconnectedUIVisible(tmp, id);
  const items3 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
  }, items3);
  callback1 = obj.useCallback(() => {
    let intl;
    let obj = {
      key: "user-disconnected-indicator",
      icon() {
        const obj = { size: "xs", color: id(_null[15]).colors.STATUS_WARNING };
        const CircleErrorIcon = closure_1_0(_null[14]).CircleErrorIcon;
        return stateFromStores1(CircleErrorIcon, obj);
      },
      content: intl.string(closure_0(_null[16]).t.HFwRpk)
    };
    const open = id(_null[13]).open;
    id(_null[13]);
    intl = closure_0(_null[16]).intl;
    open(obj);
  }, []);
  const items4 = [stateFromStores, arg0, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator];
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
                    const tmp = closure_1(c2[13]);
                    const open = tmp.open;
                    const obj = { key: "" + closure_1_1 + "-stream-status", content: intl.string(closure_0(c2[16]).t.Q8Uzof) };
                    intl = closure_0(c2[16]).intl;
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
                    if (closure_0(c2[6]).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const _HermesInternal4 = HermesInternal;
                      const obj2 = { key: "" + closure_1_1 + "-status", content: intl4.string(closure_0(c2[16]).t.btxSdB) };
                      const open4 = closure_1(c2[13]).open;
                      closure_1(c2[13]);
                      intl4 = tmp2(tmp3[16]).intl;
                      open4(obj2);
                    } else if (closure_0(c2[6]).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const _HermesInternal3 = HermesInternal;
                      const obj3 = { key: "" + closure_1_1 + "-status", content: intl3.string(closure_0(c2[16]).t.NjmiOL) };
                      const open3 = closure_1(c2[13]).open;
                      closure_1(c2[13]);
                      intl3 = tmp2(tmp3[16]).intl;
                      open3(obj3);
                    } else if (closure_0(c2[6]).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const _HermesInternal2 = HermesInternal;
                      const obj4 = { key: "" + closure_1_1 + "-status", content: intl2.string(closure_0(c2[16]).t.uLddbQ) };
                      const open2 = closure_1(c2[13]).open;
                      closure_1(c2[13]);
                      intl2 = tmp2(tmp3[16]).intl;
                      open2(obj4);
                    } else if (closure_0(c2[6]).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const _HermesInternal = HermesInternal;
                      const obj = { key: "" + closure_1_1 + "-status", content: intl.string(closure_0(c2[16]).t.Q8Uzof) };
                      const open = closure_1(c2[13]).open;
                      closure_1(c2[13]);
                      intl = tmp2(tmp3[16]).intl;
                      open(obj);
                    } else if (closure_0(c2[6]).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const _HermesInternal5 = HermesInternal;
                      const obj5 = { key: "" + closure_1_1 + "-status", content: intl5.string(closure_0(c2[16]).t.tjtv3P) };
                      const open5 = closure_1(c2[13]).open;
                      closure_1(c2[13]);
                      intl5 = tmp2(tmp3[16]).intl;
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
};
export { VoicePanelCardUserStateIconType };
