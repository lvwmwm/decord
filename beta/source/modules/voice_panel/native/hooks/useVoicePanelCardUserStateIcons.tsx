// Module ID: 19659
// Function ID: 19660
// Name: useVoicePanelCardUserStateIcons
// Dependencies: [19, 6845, 5019, 5925, 5835, 5837, 11394, 9347, 563, 12200, 5950, 12141, 18665, 11359, 19575, 5869, 1113, 7185, 575, 2]
// Exports: default

// Module 19659 (useVoicePanelCardUserStateIcons)
import CallConstants from "CallConstants" /* 5837 */;
import VoiceStateIconUtils from "VoiceStateIconUtils" /* 9347 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11394 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19575 */;
import react from "react" /* 19 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6845 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5925 */;
import VoiceStateStore from "VoiceStateStore" /* 5835 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let tmp2;
const MobileAudioOutputExperimentDefault = tmp2(12141);
const useMuteAwareLocalVolumeDefault = tmp2(12200);
const ParticipantTypes = CallConstants.ParticipantTypes;
const VoicePanelCardUserStateIconType = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON", STAGE_MODERATOR_ICON: "STAGE_MODERATOR_ICON" };
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
  let isStageUnifiedCall;
  let stateFromStores3;
  let callback;
  let callback1;
  let obj = setShowFloatingCTA;
  const tmp2 = importDefault;
  const tmp3 = dependencyMap;
  setShowFloatingCTA = setShowFloatingCTA.useContext(VoicePanelStateContextDefault).setShowFloatingCTA;
  const tmp4 = _require;
  const tmp5 = require("VoiceStateIconUtils");
  let tmp6 = showTileVolumeIndicator;
  let tmp7;
  const useMuteDeafenIconState = tmp5.useMuteDeafenIconState;
  if (arg0 === showTileVolumeIndicator.USER) {
    tmp7 = id;
  }
  muteDeafenIconState = useMuteDeafenIconState(tmp7, guildId);
  let tmp10;
  const useVideoIconState = tmp4(9347).useVideoIconState;
  tmp4(9347);
  if (arg0 === tmp6.USER) {
    tmp10 = id;
  }
  videoIconState = useVideoIconState(tmp10, guildId);
  let items = [stateFromStores];
  const tmp4Result7 = tmp4(563);
  stateFromStores = tmp4Result7.useStateFromStores(items, () => stateFromStores.isConnected());
  let items1 = [stateFromStores1];
  const items2 = [tmp, id];
  const tmp4Result8 = tmp4(563);
  stateFromStores1 = tmp4Result8.useStateFromStores(items1, () => {
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
  if (arg0 === tmp6.STREAM) {
    tmp15 = id;
  }
  const effectiveVolume = tmp2Result(tmp15, tmp4(5950).MediaEngineContextTypes.STREAM).effectiveVolume;
  const tmp2Result2 = MobileAudioOutputExperimentDefault;
  showTileVolumeIndicator = tmp2Result2.useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = arg0 === tmp6.STREAM;
  }
  const tmp4Result9 = tmp4(18665);
  isRTCDisconnectedUIVisible = tmp4Result9.useIsRTCDisconnectedUIVisible(tmp, id);
  const items3 = [videoIconState];
  const items4 = [tmp];
  const tmp4Result10 = tmp4(563);
  const stateFromStores2 = tmp4Result10.useStateFromStores(items3, () => ChannelStore.getChannel(c2), items4);
  const tmp4Result11 = tmp4(11359);
  isStageUnifiedCall = tmp4Result11.useIsStageUnifiedCall(stateFromStores2, "useVoicePanelCardUserStateIcons");
  const items5 = [muteDeafenIconState];
  const items6 = [isStageUnifiedCall, arg0, id, tmp];
  const tmp4Result12 = tmp4(563);
  stateFromStores3 = tmp4Result12.useStateFromStores(items5, () => {
    const isModeratorResult = isStageUnifiedCall && closure_0 === ParticipantTypes.USER && null != id && null != c2 && StageChannelRoleStore.isModerator(id, c2);
    return isModeratorResult;
  }, items6);
  const items7 = [setShowFloatingCTA];
  callback = obj.useCallback(() => {
    setShowFloatingCTA(VoicePanelFloatingCTAUtils.OverrideFloatingCTA.BAD_CONNECTION);
  }, items7);
  callback1 = obj.useCallback(() => {
    let intl;
    const obj = { text: intl.string(closure_0(_null[16]).t.HFwRpk), icon: closure_0(_null[17]).CircleErrorIcon, iconColor: id(_null[18]).colors.ICON_FEEDBACK_WARNING };
    const open = id(_null[15]).open;
    id(_null[15]);
    intl = closure_0(_null[16]).intl;
    open("user-disconnected-indicator", obj);
  }, []);
  const items8 = [stateFromStores, arg0, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator, stateFromStores3];
  return obj.useMemo(() => {
    let obj;
    let tmp18;
    const tmp = stateFromStores;
    if (tmp) {
      if (closure_0 === ParticipantTypes.STREAM) {
        const items = [];
        const tmp23 = showTileVolumeIndicator;
        if (tmp23) {
          let obj2 = {
            type: obj.SPEAKER_MUTE_ICON,
            onPress() {
                    let intl;
                    const open = closure_1(c2[15]).open;
                    const obj = { text: intl.string(closure_0(c2[16]).t.Q8Uzof) };
                    closure_1(c2[15]);
                    const combined = "" + closure_1_1 + "-stream-status";
                    intl = closure_0(c2[16]).intl;
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
        const tmp29 = stateFromStores3;
        if (tmp29) {
          obj = { type: obj.STAGE_MODERATOR_ICON };
          items1.push(obj);
        }
        const tmp6 = isRTCDisconnectedUIVisible;
        if (tmp6) {
          let obj4 = { type: obj.USER_DISCONNECTED_ICON, onPress: callback1 };
          items1.push(obj4);
        }
        let tmp12 = null != videoIconState;
        if (tmp12) {
          tmp12 = tmp10 !== VoiceStateIconUtils.VideoIconState.VIDEO_ACTIVE;
        }
        if (tmp12) {
          let obj5 = { type: obj.USER_VIDEO_ICON, videoIconState: tmp10, onPress: tmp18 };
          const push = items1.push;
          tmp18 = undefined;
          if (videoIconState === VoiceStateIconUtils.VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            tmp18 = callback;
          }
          push(obj5);
        }
        if (null != muteDeafenIconState) {
          const obj6 = {
            type: obj.MUTE_DEAFEN_ICON,
            muteDeafenIconState: tmp20,
            withLeftMargin: items1.length > 0,
            onPress() {
                    let intl;
                    let intl2;
                    let intl3;
                    let intl4;
                    let intl5;
                    if (closure_0(c2[7]).MuteDeafenIconState.DEAFENED_SERVER === muteDeafenIconState) {
                      const _HermesInternal4 = HermesInternal;
                      const open4 = closure_1(c2[15]).open;
                      const obj2 = { text: intl4.string(closure_0(c2[16]).t.btxSdB) };
                      closure_1(c2[15]);
                      const combined = "" + closure_1_1 + "-status";
                      intl4 = tmp2(tmp3[16]).intl;
                      open4(combined, obj2);
                    } else if (closure_0(c2[7]).MuteDeafenIconState.DEAFENED === muteDeafenIconState) {
                      const _HermesInternal3 = HermesInternal;
                      const open3 = closure_1(c2[15]).open;
                      const obj3 = { text: intl3.string(closure_0(c2[16]).t.NjmiOL) };
                      closure_1(c2[15]);
                      const combined1 = "" + closure_1_1 + "-status";
                      intl3 = tmp2(tmp3[16]).intl;
                      open3(combined1, obj3);
                    } else if (closure_0(c2[7]).MuteDeafenIconState.MUTED_SERVER === muteDeafenIconState) {
                      const _HermesInternal2 = HermesInternal;
                      const open2 = closure_1(c2[15]).open;
                      const obj4 = { text: intl2.string(closure_0(c2[16]).t.uLddbQ) };
                      closure_1(c2[15]);
                      const combined2 = "" + closure_1_1 + "-status";
                      intl2 = tmp2(tmp3[16]).intl;
                      open2(combined2, obj4);
                    } else if (closure_0(c2[7]).MuteDeafenIconState.MUTED_LOCAL === muteDeafenIconState) {
                      const _HermesInternal = HermesInternal;
                      const open = closure_1(c2[15]).open;
                      const obj = { text: intl.string(closure_0(c2[16]).t.Q8Uzof) };
                      closure_1(c2[15]);
                      const combined3 = "" + closure_1_1 + "-status";
                      intl = tmp2(tmp3[16]).intl;
                      open(combined3, obj);
                    } else if (closure_0(c2[7]).MuteDeafenIconState.MUTED === muteDeafenIconState) {
                      const _HermesInternal5 = HermesInternal;
                      const open5 = closure_1(c2[15]).open;
                      const obj5 = { text: intl5.string(closure_0(c2[16]).t.tjtv3P) };
                      closure_1(c2[15]);
                      const combined4 = "" + closure_1_1 + "-status";
                      intl5 = tmp2(tmp3[16]).intl;
                      open5(combined4, obj5);
                    }
                  }
          };
          items1.push(obj6);
        }
        return items1;
      }
    } else {
      return [];
    }
  }, items8);
};
export { VoicePanelCardUserStateIconType };
