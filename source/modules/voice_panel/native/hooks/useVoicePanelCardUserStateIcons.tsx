// Module ID: 15653
// Function ID: 119610
// Name: useVoicePanelCardUserStateIcons
// Dependencies: []
// Exports: default

// Module 15653 (useVoicePanelCardUserStateIcons)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const ParticipantTypes = arg1(dependencyMap[3]).ParticipantTypes;
const jsx = arg1(dependencyMap[4]).jsx;
const obj = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON" };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default function useVoicePanelCardUserStateIcons(arg0, id, guildId) {
  let tmp = arg3;
  id = arg0;
  const importDefault = id;
  if (arg3 === undefined) {
    tmp = null;
  }
  const dependencyMap = tmp;
  let React;
  let closure_4;
  let closure_5;
  let ParticipantTypes;
  let jsx;
  let obj;
  let isRTCDisconnectedUIVisible;
  let callback;
  let callback1;
  const setShowFloatingCTA = React.useContext(importDefault(dependencyMap[5])).setShowFloatingCTA;
  React = setShowFloatingCTA;
  obj = id(dependencyMap[6]);
  let tmp2;
  if (arg0 === ParticipantTypes.USER) {
    tmp2 = id;
  }
  const muteDeafenIconState = obj.useMuteDeafenIconState(tmp2, guildId);
  closure_4 = muteDeafenIconState;
  let tmp4;
  if (arg0 === ParticipantTypes.USER) {
    tmp4 = id;
  }
  const videoIconState = id(dependencyMap[6]).useVideoIconState(tmp4, guildId);
  closure_5 = videoIconState;
  const obj2 = id(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = id(dependencyMap[7]).useStateFromStores(items, () => muteDeafenIconState.isConnected());
  ParticipantTypes = stateFromStores;
  const obj3 = id(dependencyMap[7]);
  const items1 = [closure_5];
  const items2 = [tmp, id];
  const stateFromStores1 = id(dependencyMap[7]).useStateFromStores(items1, () => {
    let voicePlatformForChannel = null;
    if (null != tmp) {
      voicePlatformForChannel = null;
      if (null != arg1) {
        voicePlatformForChannel = videoIconState.getVoicePlatformForChannel(tmp, arg1);
      }
    }
    return voicePlatformForChannel;
  }, items2);
  jsx = stateFromStores1;
  let tmp9;
  const obj4 = id(dependencyMap[7]);
  if (arg0 === ParticipantTypes.STREAM) {
    tmp9 = id;
  }
  const tmp8 = importDefault(dependencyMap[8]);
  let showTileVolumeIndicator = importDefault(dependencyMap[10]).useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === tmp8(tmp9, id(dependencyMap[9]).MediaEngineContextTypes.STREAM).effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = arg0 === ParticipantTypes.STREAM;
  }
  obj = showTileVolumeIndicator;
  const obj5 = importDefault(dependencyMap[10]);
  isRTCDisconnectedUIVisible = id(dependencyMap[11]).useIsRTCDisconnectedUIVisible(tmp, id);
  const items3 = [setShowFloatingCTA];
  callback = React.useCallback(() => {

  }, items3);
  callback1 = React.useCallback(() => {
    let obj = arg1(tmp[13]);
    obj = {
      key: "user-disconnected-indicator",
      icon() {
        const obj = { size: "xs", color: callback2(closure_2[15]).colors.STATUS_WARNING };
        return callback3(callback(closure_2[14]).CircleErrorIcon, obj);
      }
    };
    const intl = arg0(tmp[16]).intl;
    obj.content = intl.string(arg0(tmp[16]).t.HFwRpk);
    obj.open(obj);
  }, []);
  const items4 = [stateFromStores, arg0, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator];
  return React.useMemo(() => {
    if (stateFromStores) {
      if (arg0 === stateFromStores.STREAM) {
        const items = [];
        if (showTileVolumeIndicator) {
          let obj = {
            type: showTileVolumeIndicator.SPEAKER_MUTE_ICON,
            onPress() {
                    let obj = callback2(closure_2[13]);
                    obj = { key: "" + callback2 + "-stream-status" };
                    const intl = callback(closure_2[16]).intl;
                    obj.content = intl.string(callback(closure_2[16]).t.Q8Uzof);
                    obj.open(obj);
                  }
          };
          items.push(obj);
        }
        obj = { type: showTileVolumeIndicator.STREAM_ICON, voicePlatform: stateFromStores1 };
        items.push(obj);
        return items;
      } else if (arg0 !== stateFromStores.USER) {
        return [];
      } else {
        const items1 = [];
        if (isRTCDisconnectedUIVisible) {
          obj = { type: showTileVolumeIndicator.USER_DISCONNECTED_ICON, onPress: callback1 };
          items1.push(obj);
        }
        let tmp8 = null != videoIconState;
        if (tmp8) {
          tmp8 = videoIconState !== arg0(tmp[6]).VideoIconState.VIDEO_ACTIVE;
        }
        if (tmp8) {
          const obj1 = { type: showTileVolumeIndicator.USER_VIDEO_ICON, videoIconState };
          let tmp17;
          if (videoIconState === arg0(tmp[6]).VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            tmp17 = callback;
          }
          obj1.onPress = tmp17;
          items1.push(obj1);
        }
        if (null != muteDeafenIconState) {
          const obj2 = {
            type: showTileVolumeIndicator.MUTE_DEAFEN_ICON,
            muteDeafenIconState,
            withLeftMargin: items1.length > 0,
            onPress() {
                    if (callback(closure_2[6]).MuteDeafenIconState.DEAFENED_SERVER === closure_4) {
                      let obj = {};
                      const _HermesInternal4 = HermesInternal;
                      obj.key = "" + callback2 + "-status";
                      const intl4 = callback(closure_2[16]).intl;
                      obj.content = intl4.string(callback(closure_2[16]).t.btxSdB);
                      callback2(closure_2[13]).open(obj);
                      const obj7 = callback2(closure_2[13]);
                    } else if (callback(closure_2[6]).MuteDeafenIconState.DEAFENED === tmp) {
                      obj = {};
                      const _HermesInternal3 = HermesInternal;
                      obj.key = "" + callback2 + "-status";
                      const intl3 = callback(closure_2[16]).intl;
                      obj.content = intl3.string(callback(closure_2[16]).t.NjmiOL);
                      callback2(closure_2[13]).open(obj);
                      const obj5 = callback2(closure_2[13]);
                    } else if (callback(closure_2[6]).MuteDeafenIconState.MUTED_SERVER === tmp) {
                      let obj2 = callback2(closure_2[13]);
                      const obj1 = {};
                      const _HermesInternal2 = HermesInternal;
                      obj1.key = "" + callback2 + "-status";
                      const intl2 = callback(closure_2[16]).intl;
                      obj1.content = intl2.string(callback(closure_2[16]).t.uLddbQ);
                      obj2.open(obj1);
                    } else if (callback(closure_2[6]).MuteDeafenIconState.MUTED_LOCAL === tmp) {
                      obj = callback2(closure_2[13]);
                      obj2 = {};
                      const _HermesInternal = HermesInternal;
                      obj2.key = "" + callback2 + "-status";
                      const intl = callback(closure_2[16]).intl;
                      obj2.content = intl.string(callback(closure_2[16]).t.Q8Uzof);
                      obj.open(obj2);
                    } else if (callback(closure_2[6]).MuteDeafenIconState.MUTED === tmp) {
                      const obj3 = {};
                      const _HermesInternal5 = HermesInternal;
                      obj3.key = "" + callback2 + "-status";
                      const intl5 = callback(closure_2[16]).intl;
                      obj3.content = intl5.string(callback(closure_2[16]).t.tjtv3P);
                      callback2(closure_2[13]).open(obj3);
                      const obj9 = callback2(closure_2[13]);
                    }
                  }
          };
          items1.push(obj2);
        }
        return items1;
      }
    } else {
      return [];
    }
  }, items4);
};
export const VoicePanelCardUserStateIconType = obj;
