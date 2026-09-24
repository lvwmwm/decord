// Module ID: 9704
// Function ID: 9705
// Name: PictureInPictureVideo
// Dependencies: [32, 19, 17, 2044, 4806, 502, 1996, 2099, 5670, 9683, 9668, 4811, 21, 4790, 1181, 580, 558, 568, 9705, 12, 9677, 9706, 504, 4991, 9707, 9710, 9723, 9737, 9738, 9667, 9746, 9768, 4494, 8438, 9740, 9690, 9686, 9689, 1482, 1368, 8640, 2]

// Module 9704 (PictureInPictureVideo)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import useToken2 from "useToken" /* 4494 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4991 */;
import transitionToActivityDefault from "transitionToActivity" /* 9667 */;
import useShouldForcePipOrientation from "useShouldForcePipOrientation" /* 9686 */;
import usePipDimensionsDefault from "usePipDimensions" /* 9689 */;
import useIsViewingActivity from "useIsViewingActivity" /* 9690 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4806 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1996 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SpeakingStore from "SpeakingStore" /* 5670 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9683 */;

require = fn;
function areParticipantsEqual(arg0, arg1) {
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelCallStore = fn(9668);
({ togglePipFocus: map1, useIsVoiceChatFocused: closure_14 } = ChannelCallStore);
const ParticipantTypes = fn(4811).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4790);
let obj = { elevationShadow: null, background: null, backgroundPipFab: null, pip: null, pipFab: null, avatarContainer: null, activityPipContainer: null, thermalAlertIconContainer: null, thermalAlertIcon: null };
const native = fn(1181);
obj.elevationShadow = native.generateBoxShadowStyle(fn(1181).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
obj.background = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.backgroundPipFab = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
let obj5 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
obj.pip = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.pipFab = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.avatarContainer = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" };
obj.activityPipContainer = { flex: 1, width: "100%" };
obj.thermalAlertIconContainer = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: 11, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
let size = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
obj.thermalAlertIcon = size;
let closure_19 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_20 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(openVoice[17]).c(42);
  channel = channel.channel;
  const pipParticipant = channel.pipParticipant;
  let obj = channel(openVoice[17]);
  const tmp = channel;
  const voiceChatNavigationContext = channel(openVoice[18]).useVoiceChatNavigationContext();
  openVoice = undefined;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = pipParticipant(tmp2[19]).noop;
  }
  const tmp7 = closure_14();
  closure_3 = tmp7;
  const obj2 = channel(openVoice[18]);
  const tmp8 = pipParticipant;
  closure_4 = pipParticipant(openVoice[20])(channel.id);
  let applicationId;
  if (pipParticipant != null) {
    applicationId = pipParticipant.applicationId;
  }
  if (cResult[0] === applicationId) {
    let type;
    if (pipParticipant != null) {
      type = pipParticipant.type;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [MediaEngineStore];
      cResult[3] = items;
      let tmp17 = items;
    } else {
      tmp17 = cResult[3];
    }
    if (cResult[4] !== pipParticipant) {
      class C {
        constructor() {
          isLocalVideoDisabledResult = null != pipParticipant;
          if (isLocalVideoDisabledResult) {
            tmp3 = closure_9;
            isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
          }
          return isLocalVideoDisabledResult;
        }
      }
      const items1 = [pipParticipant];
      cResult[4] = pipParticipant;
      cResult[5] = C;
      cResult[6] = items1;
      let tmp20 = items1;
      const tmp19 = C;
    } else {
      class C {
        constructor() {
          isLocalVideoDisabledResult = null != pipParticipant;
          if (isLocalVideoDisabledResult) {
            tmp3 = closure_9;
            isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
          }
          return isLocalVideoDisabledResult;
        }
      }
      tmp20 = cResult[6];
    }
    const stateFromStores = tmp(tmp2[22]).useStateFromStores(tmp17, tmp19, tmp20);
    if (cResult[7] === tmp7) {
      class C {
        constructor() {
          isLocalVideoDisabledResult = null != pipParticipant;
          if (isLocalVideoDisabledResult) {
            tmp3 = closure_9;
            isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
          }
          return isLocalVideoDisabledResult;
        }
      }
    }
    cResult[7] = tmp7;
    cResult[8] = openVoice;
    if (pipParticipant != null) {
      class C {
        constructor() {
          isLocalVideoDisabledResult = null != pipParticipant;
          if (isLocalVideoDisabledResult) {
            tmp3 = closure_9;
            isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
          }
          return isLocalVideoDisabledResult;
        }
      }
    }
    const fn = function z() {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (null != voiceChannelId) {
        let id;
        if (pipParticipant != null) {
          id = pipParticipant.id;
        }
        if (id == null) {
          id = null;
        }
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(voiceChannelId, id);
        if (closure_3) {
          openVoice();
        }
      }
    };
    cResult[9] = undefined;
    cResult[10] = fn;
    const tmpResult = tmp(tmp2[22]);
  }
  if (pipParticipant != null) {
    class C {
      constructor() {
        isLocalVideoDisabledResult = null != pipParticipant;
        if (isLocalVideoDisabledResult) {
          tmp3 = closure_9;
          isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
        }
        return isLocalVideoDisabledResult;
      }
    }
  }
  let tmp8ResultResult = undefined === ParticipantTypes.ACTIVITY;
  if (tmp8ResultResult) {
    class C {
      constructor() {
        isLocalVideoDisabledResult = null != pipParticipant;
        if (isLocalVideoDisabledResult) {
          tmp3 = closure_9;
          isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
        }
        return isLocalVideoDisabledResult;
      }
    }
    if (pipParticipant != null) {
      class C {
        constructor() {
          isLocalVideoDisabledResult = null != pipParticipant;
          if (isLocalVideoDisabledResult) {
            tmp3 = closure_9;
            isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
          }
          return isLocalVideoDisabledResult;
        }
      }
    }
    tmp8ResultResult = tmp8(tmp2[21])(tmp15);
    const tmp8Result = tmp8(tmp2[21]);
  }
  if (pipParticipant != null) {
    class C {
      constructor() {
        isLocalVideoDisabledResult = null != pipParticipant;
        if (isLocalVideoDisabledResult) {
          tmp3 = closure_9;
          isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
        }
        return isLocalVideoDisabledResult;
      }
    }
  }
  cResult[0] = undefined;
  if (pipParticipant != null) {
    class C {
      constructor() {
        isLocalVideoDisabledResult = null != pipParticipant;
        if (isLocalVideoDisabledResult) {
          tmp3 = closure_9;
          isLocalVideoDisabledResult = closure_9.isLocalVideoDisabled(tmp.id);
        }
        return isLocalVideoDisabledResult;
      }
    }
  }
  cResult[1] = undefined;
  cResult[2] = tmp8ResultResult;
}) : ((channel) => {
  channel = channel.channel;
  const pipParticipant = channel.pipParticipant;
  const selfParticipant = channel.selfParticipant;
  let openVoice;
  closure_3 = undefined;
  closure_4 = undefined;
  const voiceChatNavigationContext = channel(openVoice[18]).useVoiceChatNavigationContext();
  openVoice = undefined;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = pipParticipant(tmp2[19]).noop;
  }
  closure_3 = closure_14();
  closure_4 = pipParticipant(tmp2[20])(channel.id);
  let type;
  if (pipParticipant != null) {
    type = pipParticipant.type;
  }
  let tmp6ResultResult = type === ParticipantTypes.ACTIVITY;
  if (tmp6ResultResult) {
    let applicationId;
    if (pipParticipant != null) {
      applicationId = pipParticipant.applicationId;
    }
    tmp6ResultResult = tmp6(tmp2[21])(applicationId);
    const tmp6Result = tmp6(tmp2[21]);
  }
  let obj = channel(openVoice[18]);
  const items = [MediaEngineStore];
  const items1 = [pipParticipant];
  let type1;
  const stateFromStores = channel(openVoice[22]).useStateFromStores(items, () => {
    let isLocalVideoDisabledResult = null != pipParticipant;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = MediaEngineStore.isLocalVideoDisabled(tmp.id);
    }
    return isLocalVideoDisabledResult;
  }, items1);
  if (pipParticipant != null) {
    type1 = pipParticipant.type;
  }
  function onPipTap() {
    if (closure_3) {
      openVoice();
    }
    if (closure_4) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    } else {
      __initData2();
    }
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    if (tmp8.STREAM !== type1) {
      if (tmp8.USER === type1) {
        let tmp15 = null;
        if (tmp6(tmp2[27])(pipParticipant)) {
          tmp15 = null;
          if (!stateFromStores) {
            const obj2 = { participant: pipParticipant, avatarSize: tmp(tmp2[14]).AvatarSizes.PROFILE, resizeMode: tmp(tmp2[26]).ResizeMode.COVER, onSingleTap: onPipTap, onDoubleTap: onPipTap };
            tmp15 = closure_16(tmp6(tmp2[28]), obj2);
            const tmp6Result4 = tmp6(tmp2[28]);
          }
        }
        let tmp14 = tmp15;
      } else {
        tmp14 = null;
        if (tmp8.ACTIVITY === type1) {
          const obj3 = {
            participant: pipParticipant,
            channel,
            onSingleTap() {
                      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                      if (null != currentEmbeddedActivity) {
                        transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                      }
                      if (closure_3) {
                        openVoice();
                      }
                    }
          };
          tmp14 = closure_16(tmp6(tmp2[30]), obj3);
        }
      }
      let tmp24 = null;
      if (null != selfParticipant) {
        tmp24 = null;
        if (!tmp6ResultResult) {
          const obj4 = {
            participant: selfParticipant,
            avatarSize: tmp(tmp2[14]).AvatarSizes.PROFILE,
            resizeMode: tmp(tmp2[26]).ResizeMode.COVER,
            onSingleTap() {
                      if (closure_3) {
                        openVoice();
                      } else {
                        __initData2();
                      }
                    }
          };
          tmp24 = closure_16(tmp6(tmp2[28]), obj4);
          const tmp6Result5 = tmp6(tmp2[28]);
        }
      }
      const obj5 = { children: null };
      const items2 = [tmp24, tmp14];
      obj5.children = items2;
      return closure_18(closure_17, obj5);
    }
  }
  if (pipParticipant.user.id === AuthenticationStore.getId()) {
    function onScreenshareTap() {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (null != voiceChannelId) {
        let id;
        if (pipParticipant != null) {
          id = pipParticipant.id;
        }
        if (id == null) {
          id = null;
        }
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(voiceChannelId, id);
        if (closure_3) {
          openVoice();
        }
      }
    }
    const obj6 = { onSingleTap: onScreenshareTap, onDoubleTap: onScreenshareTap };
    closure_16(tmp6(tmp2[24]), obj6);
  } else {
    const obj7 = { removeEmptyStateButton: true, removeEmptyStateImage: true, resizeMode: tmp(tmp2[26]).ResizeMode.CONTAIN, participant: pipParticipant, onSingleTap: onPipTap, onDoubleTap: onPipTap };
    closure_16(tmp6(tmp2[25]), obj7);
    const tmp6Result6 = tmp6(tmp2[25]);
  }
}));
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(leadingEdgeDebounce[17]).c(18);
  channelId = channelId.channelId;
  const selfParticipant = channelId.selfParticipant;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelCallLifecycleStore];
    const fn = function o() {
      return reactingToThermalState.isReactingToThermalState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = channelId(leadingEdgeDebounce[17]);
  const stateFromStores = channelId(leadingEdgeDebounce[22]).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelRTCStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    const fn2 = function h() {
      const items = [ChannelRTCStore.getParticipants(channelId), ChannelRTCStore.getVideoParticipants(channelId), ChannelRTCStore.getParticipantsVersion(channelId)];
      return items;
    };
    const items2 = [channelId];
    cResult[3] = channelId;
    cResult[4] = fn2;
    cResult[5] = items2;
    let tmp11 = items2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult = channelId(leadingEdgeDebounce[22]);
  const tmpResult4 = channelId(leadingEdgeDebounce[22]);
  [arr4, r10057] = channelId(leadingEdgeDebounce[22]).useStateFromStores(tmp8, tmp10, tmp11, areParticipantsEqual);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [SpeakingStore];
    cResult[6] = items3;
    let tmp13 = items3;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== selfParticipant) {
    class A {
      constructor() {
        found = null;
        if (null != selfParticipant) {
          tmp2 = closure_11;
          speakers = closure_11.getSpeakers();
          found = speakers.find((item) => {
            let isSpeakingResult = item !== user.user.id;
            if (isSpeakingResult) {
              isSpeakingResult = speaking.isSpeaking(item);
            }
            return isSpeakingResult;
          });
        }
        return found;
      }
    }
    const items4 = [selfParticipant];
    cResult[7] = selfParticipant;
    cResult[8] = A;
    cResult[9] = items4;
    let tmp16 = items4;
    const tmp15 = A;
  } else {
    class A {
      constructor() {
        found = null;
        if (null != selfParticipant) {
          tmp2 = closure_11;
          speakers = closure_11.getSpeakers();
          found = speakers.find((item) => {
            let isSpeakingResult = item !== user.user.id;
            if (isSpeakingResult) {
              isSpeakingResult = speaking.isSpeaking(item);
            }
            return isSpeakingResult;
          });
        }
        return found;
      }
    }
    tmp16 = cResult[9];
  }
  const tmp12 = _slicedToArray(channelId(leadingEdgeDebounce[22]).useStateFromStores(tmp8, tmp10, tmp11, areParticipantsEqual), 2);
  const stateFromStores1 = channelId(leadingEdgeDebounce[22]).useStateFromStores(tmp13, tmp15, tmp16);
  const tmpResult5 = channelId(leadingEdgeDebounce[22]);
  leadingEdgeDebounce = channelId(leadingEdgeDebounce[31]).useLeadingEdgeDebounce(stateFromStores1, 1000);
  if (null != leadingEdgeDebounce) {
    class A {
      constructor() {
        found = null;
        if (null != selfParticipant) {
          tmp2 = closure_11;
          speakers = closure_11.getSpeakers();
          found = speakers.find((item) => {
            let isSpeakingResult = item !== user.user.id;
            if (isSpeakingResult) {
              isSpeakingResult = speaking.isSpeaking(item);
            }
            return isSpeakingResult;
          });
        }
        return found;
      }
    }
    if (cResult[13] !== leadingEdgeDebounce) {
      class A {
        constructor() {
          found = null;
          if (null != selfParticipant) {
            tmp2 = closure_11;
            speakers = closure_11.getSpeakers();
            found = speakers.find((item) => {
              let isSpeakingResult = item !== user.user.id;
              if (isSpeakingResult) {
                isSpeakingResult = speaking.isSpeaking(item);
              }
              return isSpeakingResult;
            });
          }
          return found;
        }
      }
      cResult[13] = leadingEdgeDebounce;
      cResult[14] = tmp20;
      const tmp19 = tmp20;
    } else {
      class A {
        constructor() {
          found = null;
          if (null != selfParticipant) {
            tmp2 = closure_11;
            speakers = closure_11.getSpeakers();
            found = speakers.find((item) => {
              let isSpeakingResult = item !== user.user.id;
              if (isSpeakingResult) {
                isSpeakingResult = speaking.isSpeaking(item);
              }
              return isSpeakingResult;
            });
          }
          return found;
        }
      }
    }
    let found = arr4.find(tmp19);
    cResult[10] = arr4;
    cResult[11] = leadingEdgeDebounce;
    cResult[12] = found;
  }
  if (selfParticipant != null) {
    class A {
      constructor() {
        found = null;
        if (null != selfParticipant) {
          tmp2 = closure_11;
          speakers = closure_11.getSpeakers();
          found = speakers.find((item) => {
            let isSpeakingResult = item !== user.user.id;
            if (isSpeakingResult) {
              isSpeakingResult = speaking.isSpeaking(item);
            }
            return isSpeakingResult;
          });
        }
        return found;
      }
    }
  }
  if (null != undefined) {
    class A {
      constructor() {
        found = null;
        if (null != selfParticipant) {
          tmp2 = closure_11;
          speakers = closure_11.getSpeakers();
          found = speakers.find((item) => {
            let isSpeakingResult = item !== user.user.id;
            if (isSpeakingResult) {
              isSpeakingResult = speaking.isSpeaking(item);
            }
            return isSpeakingResult;
          });
        }
        return found;
      }
    }
  } else {
    class A {
      constructor() {
        found = null;
        if (null != selfParticipant) {
          tmp2 = closure_11;
          speakers = closure_11.getSpeakers();
          found = speakers.find((item) => {
            let isSpeakingResult = item !== user.user.id;
            if (isSpeakingResult) {
              isSpeakingResult = speaking.isSpeaking(item);
            }
            return isSpeakingResult;
          });
        }
        return found;
      }
    }
    return selfParticipant;
  }
}) : ((channelId) => {
  channelId = channelId.channelId;
  const selfParticipant = channelId.selfParticipant;
  let leadingEdgeDebounce;
  let items = [ChannelCallLifecycleStore];
  const stateFromStores = channelId(leadingEdgeDebounce[22]).useStateFromStores(items, () => reactingToThermalState.isReactingToThermalState());
  const obj = channelId(leadingEdgeDebounce[22]);
  const items1 = [ChannelRTCStore];
  const items2 = [channelId];
  const obj2 = channelId(leadingEdgeDebounce[22]);
  [arr4, tmp3] = channelId(leadingEdgeDebounce[22]).useStateFromStores(items1, () => {
    const items = [ChannelRTCStore.getParticipants(channelId), ChannelRTCStore.getVideoParticipants(channelId), ChannelRTCStore.getParticipantsVersion(channelId)];
    return items;
  }, items2, areParticipantsEqual);
  const tmp2 = _slicedToArray(channelId(leadingEdgeDebounce[22]).useStateFromStores(items1, () => {
    const items = [ChannelRTCStore.getParticipants(channelId), ChannelRTCStore.getVideoParticipants(channelId), ChannelRTCStore.getParticipantsVersion(channelId)];
    return items;
  }, items2, areParticipantsEqual), 2);
  const items3 = [SpeakingStore];
  const items4 = [selfParticipant];
  const stateFromStores1 = channelId(leadingEdgeDebounce[22]).useStateFromStores(items3, () => {
    let found = null;
    if (null != selfParticipant) {
      const speakers = SpeakingStore.getSpeakers();
      found = speakers.find((item) => {
        let isSpeakingResult = item !== user.user.id;
        if (isSpeakingResult) {
          isSpeakingResult = speaking.isSpeaking(item);
        }
        return isSpeakingResult;
      });
    }
    return found;
  }, items4);
  const obj3 = channelId(leadingEdgeDebounce[22]);
  leadingEdgeDebounce = channelId(leadingEdgeDebounce[31]).useLeadingEdgeDebounce(stateFromStores1, 1000);
  if (null != leadingEdgeDebounce) {
    let found = arr4.find((id) => id.id === leadingEdgeDebounce);
    if (null != found) {
      if (found.type === ParticipantTypes.USER) {
        return found;
      }
    }
  }
  let streamId;
  if (selfParticipant != null) {
    streamId = selfParticipant.streamId;
  }
  if (null != streamId) {
    return selfParticipant;
  } else {
    if (!stateFromStores) {
      const items5 = [];
      HermesBuiltin.arraySpread(tmp3, 0);
      const first = items5.sort((lastSpoke, lastSpoke2) => {
        let num = -1;
        if (lastSpoke.lastSpoke < lastSpoke2.lastSpoke) {
          num = 1;
        }
        return num;
      })[0];
      if (null != first) {
        return first;
      }
    }
    return selfParticipant;
  }
  const obj4 = channelId(leadingEdgeDebounce[31]);
});
ReactCompilerGating = fn(558);
let closure_23 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(26);
  ({ channel, selfParticipant } = arg0);
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelCallLifecycleStore];
    const fn = function o() {
      const items = [ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(), ChannelCallLifecycleStore.isReactingToThermalState()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = initialize;
  [tmp9, tmp10] = initialize.useStateFromStoresArray(tmp5, tmp6);
  if (cResult[2] === channel.id) {
    if (cResult[3] === selfParticipant) {
      let tmp11 = cResult[4];
    }
    const tmp13 = closure_22(tmp11);
    const useToken = tmp(4494).useToken;
    if (cResult[5] === channel.guild_id) {
      let user1;
      if (tmp13 != null) {
        user1 = tmp13.user;
      }
      if (cResult[6] === user1) {
        let tmp19 = cResult[7];
      }
      const tmp23 = tmp15(8438)(tmp19, tmp16);
      if (null == tmp13) {
        return null;
      } else {
        let tmp26 = null != tmp13.streamId;
        if (tmp26) {
          const voiceState = tmp13.voiceState;
          let selfVideo;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
          tmp26 = selfVideo;
        }
        if (cResult[8] !== tmp23) {
          const obj2 = { backgroundColor: tmp23 };
          cResult[8] = tmp23;
          cResult[9] = obj2;
          let tmp27 = obj2;
        } else {
          tmp27 = cResult[9];
        }
        if (cResult[10] === tmp4.avatarContainer) {
          if (cResult[11] === tmp27) {
            let tmp28 = cResult[12];
          }
          if (cResult[13] === channel) {
            if (cResult[14] === tmp10) {
              if (cResult[15] === tmp13) {
                if (cResult[16] === tmp26) {
                  if (cResult[18] === tmp9) {
                    if (cResult[19] === tmp4.thermalAlertIcon) {
                      if (cResult[20] === tmp4.thermalAlertIconContainer) {
                        let tmp35 = cResult[21];
                      }
                      if (cResult[22] === tmp28) {
                        if (cResult[23] === tmp29) {
                          if (cResult[24] === tmp35) {
                            let tmp39 = cResult[25];
                          }
                          return tmp39;
                        }
                      }
                      const obj3 = { style: tmp28, children: null };
                      const items1 = [tmp29, tmp35];
                      obj3.children = items1;
                      const tmp42 = collapsedCategories(hasOwnProperty, obj3);
                      cResult[22] = tmp28;
                      cResult[23] = tmp29;
                      cResult[24] = tmp35;
                      cResult[25] = tmp42;
                      tmp39 = tmp42;
                    }
                  }
                  let tmp36 = null;
                  if (tmp9) {
                    const obj4 = { style: tmp4.thermalAlertIconContainer, children: null };
                    const obj5 = { style: tmp4.thermalAlertIcon, source: tmp15(9740), color: tmp4.thermalAlertIcon.color };
                    obj4.children = value2(tmp(1181).Icon, obj5);
                    tmp36 = value2(hasOwnProperty, obj4);
                  }
                  cResult[18] = tmp9;
                  cResult[19] = tmp4.thermalAlertIcon;
                  cResult[20] = tmp4.thermalAlertIconContainer;
                  cResult[21] = tmp36;
                  tmp35 = tmp36;
                }
              }
            }
          }
          if (tmp26) {
            if (!tmp10) {
              const obj7 = { participant: tmp13, avatarSize: tmp(1181).AvatarSizes.PROFILE, resizeMode: tmp(9723).ResizeMode.COVER };
              let tmp32 = value2(tmp15(9738), obj7);
              const tmp15Result = tmp15(9738);
            }
            cResult[13] = channel;
            cResult[14] = tmp10;
            cResult[15] = tmp13;
            cResult[16] = tmp26;
            cResult[17] = tmp32;
          }
          const obj8 = { size: tmp(1181).AvatarSizes.LARGE_48, channel, guildId: channel.guild_id, user: null, speaking: null };
          ({ user: obj6.user, speaking: obj6.speaking } = tmp13);
          tmp32 = value2(tmp(1181).Avatar, obj8);
        }
        const items2 = [tmp4.avatarContainer, tmp27];
        cResult[10] = tmp4.avatarContainer;
        cResult[11] = tmp27;
        cResult[12] = items2;
        tmp28 = items2;
      }
    }
    let avatarURL;
    if (tmp13 != null) {
      const user = tmp13.user;
      avatarURL = user.getAvatarURL(channel.guild_id, 80);
    }
    cResult[5] = channel.guild_id;
    let user2;
    if (tmp13 != null) {
      user2 = tmp13.user;
    }
    cResult[6] = user2;
    cResult[7] = avatarURL;
    tmp19 = avatarURL;
    const tmpResult2 = tmp(4494);
  }
  const obj9 = { channelId: channel.id, selfParticipant };
  cResult[2] = channel.id;
  cResult[3] = selfParticipant;
  cResult[4] = obj9;
  tmp11 = obj9;
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_19();
  let items = [ChannelCallLifecycleStore];
  [tmp5, tmp6] = initialize.useStateFromStoresArray(items, () => {
    const items = [ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(), ChannelCallLifecycleStore.isReactingToThermalState()];
    return items;
  });
  const tmp7 = closure_22({ channelId: channel.id, selfParticipant: channel.selfParticipant });
  const obj2 = { channelId: channel.id, selfParticipant: channel.selfParticipant };
  const tmp4 = _slicedToArray(initialize.useStateFromStoresArray(items, () => {
    const items = [ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(), ChannelCallLifecycleStore.isReactingToThermalState()];
    return items;
  }), 2);
  const token = useToken2.useToken(nativeDefault.unsafe_rawColors.PRIMARY_800);
  if (tmp7 != null) {
    const user = tmp7.user;
    const avatarURL = user.getAvatarURL(channel.guild_id, 80);
  }
  if (null == tmp7) {
    return null;
  } else {
    let tmp13 = null != tmp7.streamId;
    if (tmp13) {
      const voiceState = tmp7.voiceState;
      let selfVideo;
      if (voiceState != null) {
        selfVideo = voiceState.selfVideo;
      }
      tmp13 = selfVideo;
    }
    const obj4 = { style: null, children: null };
    const items1 = [tmp.avatarContainer, ];
    const obj5 = { backgroundColor: tmp11 };
    items1[1] = obj5;
    obj4.style = items1;
    if (tmp13) {
      if (!tmp6) {
        let tmp16 = value2;
        const obj6 = { participant: tmp7, avatarSize: tmp2(1181).AvatarSizes.PROFILE, resizeMode: tmp2(9723).ResizeMode.COVER };
        let tmp18 = value2(tmp8(9738), obj6);
        const tmp8Result = tmp8(9738);
      }
      const items2 = [tmp18, ];
      let tmp16Result = null;
      if (tmp5) {
        const obj8 = { style: tmp.thermalAlertIconContainer, children: null };
        const obj9 = { style: tmp.thermalAlertIcon, source: tmp8(9740), color: tmp.thermalAlertIcon.color };
        obj8.children = tmp16(tmp2(1181).Icon, obj9);
        tmp16Result = tmp16(tmp15, obj8);
      }
      items2[1] = tmp16Result;
      obj4.children = items2;
      return tmp14(tmp15, obj4);
    }
    const obj16 = { size: tmp2(1181).AvatarSizes.LARGE_48, channel, guildId: channel.guild_id, user: null, speaking: null };
    ({ user: obj7.user, speaking: obj7.speaking } = tmp7);
    tmp18 = value2(tmp2(1181).Avatar, obj16);
    tmp16 = value2;
  }
}));
ReactCompilerGating = fn(558);
let obj7 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(28);
  ({ channel, pipParticipant, selfParticipant } = arg0);
  let activityPipContainer = closure_19();
  if (cResult[0] !== channel.id) {
    const obj2 = { channelId: channel.id };
    cResult[0] = channel.id;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const isViewingActivity = useIsViewingActivity.useIsViewingActivity(tmp4);
  if (cResult[2] !== channel) {
    const obj3 = { channel };
    cResult[2] = channel;
    cResult[3] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  const tmpResult = useIsViewingActivity;
  const shouldForcePipOrientation = useShouldForcePipOrientation.useShouldForcePipOrientation(tmp6);
  if (cResult[4] === channel.id) {
    if (cResult[5] === shouldForcePipOrientation) {
      let tmp8 = cResult[6];
    }
    const tmp10 = usePipDimensionsDefault(tmp8);
    const tmp12 = isViewingActivity ? activityPipContainer.backgroundPipFab : activityPipContainer.background;
    const tmp13 = isViewingActivity ? activityPipContainer.pipFab : activityPipContainer.pip;
    ({ width, height } = useWindowDimensionsDefault());
    if (cResult[7] !== activityPipContainer.elevationShadow) {
      let elevationShadow;
      if (tmpResult4.isAndroid()) {
        elevationShadow = activityPipContainer.elevationShadow;
      }
      cResult[7] = activityPipContainer.elevationShadow;
      cResult[8] = elevationShadow;
      let tmp14 = elevationShadow;
      tmpResult4 = tmp(1368);
    } else {
      tmp14 = cResult[8];
    }
    if (width > height) {
      let str = "row";
    } else {
      str = "column";
    }
    if (cResult[9] !== str) {
      const obj4 = { flexDirection: str };
      cResult[9] = str;
      cResult[10] = obj4;
      let tmp16 = obj4;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp10) {
      if (cResult[12] === tmp13) {
        if (cResult[13] === tmp14) {
          if (cResult[14] === tmp16) {
            let tmp17 = cResult[15];
          }
          if (cResult[16] === channel) {
            if (cResult[17] === isViewingActivity) {
              if (cResult[18] === pipParticipant) {
                if (cResult[19] === selfParticipant) {
                  if (cResult[20] === activityPipContainer.activityPipContainer) {
                    if (cResult[22] === cResult[21]) {
                      if (cResult[23] === tmp17) {
                        let tmp25 = cResult[24];
                      }
                      if (cResult[25] === tmp25) {
                        if (cResult[26] === tmp12) {
                          let tmp30 = cResult[27];
                        }
                        return tmp30;
                      }
                      const obj5 = { style: tmp12, children: tmp25 };
                      const tmp33 = value2(hasOwnProperty, obj5);
                      cResult[25] = tmp25;
                      cResult[26] = tmp12;
                      cResult[27] = tmp33;
                      tmp30 = tmp33;
                    }
                    const obj6 = { activeOpacity: 0.7, children: null };
                    const obj7 = { style: tmp17, children: cResult[21] };
                    obj6.children = value2(hasOwnProperty, obj7);
                    const tmp29 = value2(React4, obj6);
                    cResult[22] = cResult[21];
                    cResult[23] = tmp17;
                    cResult[24] = tmp29;
                    tmp25 = tmp29;
                  }
                }
              }
            }
          }
          if (isViewingActivity) {
            const obj8 = { pointerEvents: "none", style: activityPipContainer.activityPipContainer, children: null };
            const obj9 = { channel, pipParticipant, selfParticipant };
            obj8.children = tmp19(closure_23, obj9);
            let tmp19Result = tmp19(hasOwnProperty, obj8);
          } else {
            const obj10 = { channel, pipParticipant, selfParticipant };
            tmp19Result = tmp19(closure_20, obj10);
          }
          cResult[16] = channel;
          cResult[17] = isViewingActivity;
          cResult[18] = pipParticipant;
          cResult[19] = selfParticipant;
          activityPipContainer = activityPipContainer.activityPipContainer;
          cResult[20] = activityPipContainer;
          cResult[21] = tmp19Result;
        }
      }
    }
    const items = [tmp13, tmp14, tmp16, tmp10];
    cResult[11] = tmp10;
    cResult[12] = tmp13;
    cResult[13] = tmp14;
    cResult[14] = tmp16;
    cResult[15] = items;
    tmp17 = items;
    const tmp11 = useWindowDimensionsDefault();
  }
  const obj11 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  cResult[4] = channel.id;
  cResult[5] = shouldForcePipOrientation;
  cResult[6] = obj11;
  tmp8 = obj11;
}) : ((arg0) => {
  ({ channel, pipParticipant, selfParticipant } = arg0);
  const tmp = closure_19();
  const isViewingActivity = useIsViewingActivity.useIsViewingActivity({ channelId: channel.id });
  const obj2 = { channelId: channel.id };
  const shouldForcePipOrientation = useShouldForcePipOrientation.useShouldForcePipOrientation({ channel });
  const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp6 = usePipDimensionsDefault({ channelId: channel.id, forcedOrientation: shouldForcePipOrientation });
  const obj5 = { style: isViewingActivity ? tmp.backgroundPipFab : tmp.background, children: null };
  const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , , ];
  ({ width, height } = useWindowDimensionsDefault());
  const tmp10 = React4;
  const tmp7 = useWindowDimensionsDefault();
  let elevationShadow;
  if (tmp2Result.isAndroid()) {
    elevationShadow = tmp.elevationShadow;
  }
  items[1] = elevationShadow;
  if (width > height) {
    let str = "row";
  } else {
    str = "column";
  }
  const obj6 = { style: items, children: null };
  items[2] = { flexDirection: str };
  items[3] = tmp6;
  if (isViewingActivity) {
    const obj7 = { pointerEvents: "none", style: tmp.activityPipContainer, children: null };
    const obj8 = { channel, pipParticipant, selfParticipant };
    obj7.children = tmp8(closure_23, obj8);
    let tmp8Result = tmp8(tmp9, obj7);
  } else {
    const obj9 = { channel, pipParticipant, selfParticipant };
    tmp8Result = tmp8(closure_20, obj9);
  }
  tmp2Result = PlatformUtils;
  obj6.children = tmp8Result;
  obj5.children = value2(tmp10, { activeOpacity: 0.7, children: value2(hasOwnProperty, obj6) });
  return value2(hasOwnProperty, obj5);
}));
export { areParticipantsEqual };
