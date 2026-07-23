// Module ID: 15788
// Function ID: 121889
// Name: useVoicePanelCardUserStateIcons
// Dependencies: [31, 4202, 4146, 4148, 33, 10014, 8867, 624, 10747, 4227, 10712, 15058, 15739, 3831, 7507, 689, 1212, 2]
// Exports: default

// Module 15788 (useVoicePanelCardUserStateIcons)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";
import { jsx } from "jsxProd";

const require = arg1;
let obj = { STREAM_ICON: "STREAM_ICON", USER_VIDEO_ICON: "USER_VIDEO_ICON", MUTE_DEAFEN_ICON: "MUTE_DEAFEN_ICON", USER_DISCONNECTED_ICON: "DISCONNECTED_ICON", SPEAKER_MUTE_ICON: "SPEAKER_MUTE_ICON" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_panel/native/hooks/useVoicePanelCardUserStateIcons.tsx");

export default function useVoicePanelCardUserStateIcons(arg0, id, guildId) {
  let tmp = arg3;
  const _require = arg0;
  const importDefault = id;
  if (arg3 === undefined) {
    tmp = null;
  }
  const dependencyMap = tmp;
  let setShowFloatingCTA;
  let muteDeafenIconState;
  let videoIconState;
  let stateFromStores;
  let stateFromStores1;
  let showTileVolumeIndicator;
  let isRTCDisconnectedUIVisible;
  let callback;
  let callback1;
  setShowFloatingCTA = setShowFloatingCTA.useContext(importDefault(10014)).setShowFloatingCTA;
  let tmp2;
  if (arg0 === stateFromStores.USER) {
    tmp2 = id;
  }
  muteDeafenIconState = _require(8867).useMuteDeafenIconState(tmp2, guildId);
  let obj = _require(8867);
  let tmp4;
  if (arg0 === stateFromStores.USER) {
    tmp4 = id;
  }
  videoIconState = _require(8867).useVideoIconState(tmp4, guildId);
  let obj2 = _require(8867);
  let items = [muteDeafenIconState];
  stateFromStores = _require(624).useStateFromStores(items, () => muteDeafenIconState.isConnected());
  let obj3 = _require(624);
  let items1 = [videoIconState];
  const items2 = [tmp, id];
  stateFromStores1 = _require(624).useStateFromStores(items1, () => {
    let voicePlatformForChannel = null;
    if (null != closure_2) {
      voicePlatformForChannel = null;
      if (null != closure_1) {
        voicePlatformForChannel = videoIconState.getVoicePlatformForChannel(closure_2, closure_1);
      }
    }
    return voicePlatformForChannel;
  }, items2);
  let tmp9;
  const obj4 = _require(624);
  if (arg0 === stateFromStores.STREAM) {
    tmp9 = id;
  }
  let tmp8 = importDefault(10747);
  showTileVolumeIndicator = importDefault(10712).useConfig({ location: "useVoicePanelCardUserStateIcons" }).showTileVolumeIndicator;
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = 0 === tmp8(tmp9, _require(4227).MediaEngineContextTypes.STREAM).effectiveVolume;
  }
  if (showTileVolumeIndicator) {
    showTileVolumeIndicator = arg0 === stateFromStores.STREAM;
  }
  let obj5 = importDefault(10712);
  isRTCDisconnectedUIVisible = _require(15058).useIsRTCDisconnectedUIVisible(tmp, id);
  const items3 = [setShowFloatingCTA];
  callback = setShowFloatingCTA.useCallback(() => {

  }, items3);
  callback1 = setShowFloatingCTA.useCallback(() => {
    let obj = id(tmp[13]);
    obj = {
      key: "user-disconnected-indicator",
      icon() {
        const obj = { size: "xs", color: callback2(689).colors.STATUS_WARNING };
        return stateFromStores1(callback(7507).CircleErrorIcon, obj);
      }
    };
    const intl = callback(tmp[16]).intl;
    obj.content = intl.string(callback(tmp[16]).t.HFwRpk);
    obj.open(obj);
  }, []);
  const items4 = [stateFromStores, arg0, videoIconState, muteDeafenIconState, isRTCDisconnectedUIVisible, stateFromStores1, callback, id, callback1, showTileVolumeIndicator];
  return setShowFloatingCTA.useMemo(() => {
    if (stateFromStores) {
      if (callback === stateFromStores.STREAM) {
        const items = [];
        if (showTileVolumeIndicator) {
          let obj = {
            type: showTileVolumeIndicator.SPEAKER_MUTE_ICON,
            onPress() {
                    let obj = callback2(3831);
                    obj = { key: "" + outer1_1 + "-stream-status" };
                    const intl = callback(1212).intl;
                    obj.content = intl.string(callback(1212).t.Q8Uzof);
                    obj.open(obj);
                  }
          };
          items.push(obj);
        }
        obj = { type: showTileVolumeIndicator.STREAM_ICON, voicePlatform: stateFromStores1 };
        items.push(obj);
        return items;
      } else if (callback !== stateFromStores.USER) {
        return [];
      } else {
        const items1 = [];
        if (isRTCDisconnectedUIVisible) {
          obj = { type: showTileVolumeIndicator.USER_DISCONNECTED_ICON, onPress: callback1 };
          items1.push(obj);
        }
        let tmp8 = null != videoIconState;
        if (tmp8) {
          tmp8 = videoIconState !== callback(tmp[6]).VideoIconState.VIDEO_ACTIVE;
        }
        if (tmp8) {
          let obj1 = { type: showTileVolumeIndicator.USER_VIDEO_ICON, videoIconState };
          let tmp17;
          if (videoIconState === callback(tmp[6]).VideoIconState.VIDEO_DISABLED_LOCAL_AUTO) {
            tmp17 = callback;
          }
          obj1.onPress = tmp17;
          items1.push(obj1);
        }
        if (null != muteDeafenIconState) {
          let obj2 = {
            type: showTileVolumeIndicator.MUTE_DEAFEN_ICON,
            muteDeafenIconState,
            withLeftMargin: items1.length > 0,
            onPress() {
                    if (callback(8867).MuteDeafenIconState.DEAFENED_SERVER === outer1_4) {
                      let obj = {};
                      const _HermesInternal4 = HermesInternal;
                      obj.key = "" + outer1_1 + "-status";
                      const intl4 = callback(1212).intl;
                      obj.content = intl4.string(callback(1212).t.btxSdB);
                      callback2(3831).open(obj);
                      const obj7 = callback2(3831);
                    } else if (callback(8867).MuteDeafenIconState.DEAFENED === tmp) {
                      obj = {};
                      const _HermesInternal3 = HermesInternal;
                      obj.key = "" + outer1_1 + "-status";
                      const intl3 = callback(1212).intl;
                      obj.content = intl3.string(callback(1212).t.NjmiOL);
                      callback2(3831).open(obj);
                      const obj5 = callback2(3831);
                    } else if (callback(8867).MuteDeafenIconState.MUTED_SERVER === tmp) {
                      let obj2 = callback2(3831);
                      const obj1 = {};
                      const _HermesInternal2 = HermesInternal;
                      obj1.key = "" + outer1_1 + "-status";
                      const intl2 = callback(1212).intl;
                      obj1.content = intl2.string(callback(1212).t.uLddbQ);
                      obj2.open(obj1);
                    } else if (callback(8867).MuteDeafenIconState.MUTED_LOCAL === tmp) {
                      obj = callback2(3831);
                      obj2 = {};
                      const _HermesInternal = HermesInternal;
                      obj2.key = "" + outer1_1 + "-status";
                      const intl = callback(1212).intl;
                      obj2.content = intl.string(callback(1212).t.Q8Uzof);
                      obj.open(obj2);
                    } else if (callback(8867).MuteDeafenIconState.MUTED === tmp) {
                      const obj3 = {};
                      const _HermesInternal5 = HermesInternal;
                      obj3.key = "" + outer1_1 + "-status";
                      const intl5 = callback(1212).intl;
                      obj3.content = intl5.string(callback(1212).t.tjtv3P);
                      callback2(3831).open(obj3);
                      const obj9 = callback2(3831);
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
