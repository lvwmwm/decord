// Module ID: 11714
// Function ID: 11715
// Name: PictureInPictureVideo
// Dependencies: [32, 19, 17, 4857, 6837, 502, 2007, 4912, 6750, 11667, 10981, 5676, 21, 5009, 1188, 575, 10987, 12, 11664, 11715, 504, 5754, 11716, 11719, 11727, 11209, 11740, 11749, 11660, 11804, 5591, 8707, 11742, 11674, 11670, 11673, 1492, 1376, 8894, 2]

// Module 11714 (PictureInPictureVideo)
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import CallConstants from "CallConstants" /* 5676 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import transitionToActivityDefault from "transitionToActivity" /* 11660 */;
import useShouldForcePipOrientation from "useShouldForcePipOrientation" /* 11670 */;
import usePipDimensionsDefault from "usePipDimensions" /* 11673 */;
import useIsViewingActivity from "useIsViewingActivity" /* 11674 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 2007 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import SpeakingStore from "SpeakingStore" /* 6750 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11667 */;
import ChannelCallStore from "ChannelCallStore" /* 10981 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import native_mod from "native" /* 1188 */;
import size_mod from "module_2" /* 2 */;

let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let native;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function areParticipantsEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  [, , tmp] = arg0;
  [, , tmp2] = arg1;
  return tmp === tmp2;
}
({ TouchableOpacity: closure_4, View: hasOwnProperty } = react_native);
({ togglePipFocus: map1, useIsVoiceChatFocused: closure_14 } = ChannelCallStore);
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { elevationShadow: native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS), background: obj2, backgroundPipFab: obj3, pip: obj4, pipFab: obj5, avatarContainer: { width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, activityPipContainer: { flex: 1, width: "100%" }, thermalAlertIconContainer: { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: 11, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 }, thermalAlertIcon: size };
createStyles = createStyles.createStyles;
native = native_mod;
obj2 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3 = { backgroundColor: nativeDefault.colors.BLACK, borderRadius: nativeDefault.radii.lg };
obj4 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj5 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
size = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
let closure_19 = createStyles(obj);
let closure_20 = react.memo(function PictureInPictureVideo(channel) {
  let items2;
  let tmp20;
  channel = channel.channel;
  const pipParticipant = channel.pipParticipant;
  const selfParticipant = channel.selfParticipant;
  let openVoice;
  let closure_3;
  let closure_4;
  let tmp = channel;
  let obj = channel(openVoice[16]);
  const voiceChatNavigationContext = obj.useVoiceChatNavigationContext();
  openVoice = undefined;
  if (voiceChatNavigationContext != null) {
    openVoice = voiceChatNavigationContext.openVoice;
  }
  if (openVoice == null) {
    openVoice = pipParticipant(tmp2[17]).noop;
  }
  closure_3 = closure_14();
  let tmp6 = pipParticipant;
  closure_4 = pipParticipant(tmp2[18])(channel.id);
  let type;
  if (pipParticipant != null) {
    type = pipParticipant.type;
  }
  let tmp6ResultResult = type === ParticipantTypes.ACTIVITY;
  if (tmp6ResultResult) {
    let applicationId;
    const tmp6Result = tmp6(openVoice[19]);
    if (pipParticipant != null) {
      applicationId = pipParticipant.applicationId;
    }
    tmp6ResultResult = tmp6Result(applicationId);
  }
  const items = [MediaEngineStore];
  const items1 = [pipParticipant];
  let type1;
  const tmpResult = tmp(openVoice[20]);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    const isLocalVideoDisabledResult = null != pipParticipant && MediaEngineStore.isLocalVideoDisabled(tmp.id);
    return isLocalVideoDisabledResult;
  }, items1);
  if (pipParticipant != null) {
    type1 = pipParticipant.type;
  }
  function onPipTap() {
    const tmp = closure_3;
    if (tmp) {
      openVoice();
    }
    const tmp4 = closure_4;
    if (tmp4) {
      const obj = ChannelRTCActionCreatorsDefault;
      const participant = obj.selectParticipant(channel.id, null);
    } else {
      map1();
    }
  }
  if (ParticipantTypes.HIDDEN_STREAM !== type1) {
    let tmp14;
    if (ParticipantTypes.STREAM !== type1) {
      if (ParticipantTypes.USER === type1) {
        let tmp15 = null;
        if (tmp6(openVoice[25])(pipParticipant)) {
          tmp15 = null;
          if (!stateFromStores) {
            const obj2 = { participant: pipParticipant, avatarSize: tmp(openVoice[14]).AvatarSizes.PROFILE, resizeMode: tmp(openVoice[24]).ResizeMode.COVER, onSingleTap: onPipTap, onDoubleTap: onPipTap };
            const tmp6Result4 = tmp6(openVoice[26]);
            tmp15 = closure_16(tmp6Result4, obj2);
          }
        }
        tmp14 = tmp15;
      } else {
        tmp14 = null;
        if (ParticipantTypes.ACTIVITY === type1) {
          const obj3 = {
            participant: pipParticipant,
            channel,
            onSingleTap() {
                      const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
                      if (null != currentEmbeddedActivity) {
                        transitionToActivityDefault(channel.guild_id, currentEmbeddedActivity.location);
                      }
                      const tmp6 = closure_3;
                      if (tmp6) {
                        openVoice();
                      }
                    }
          };
          tmp14 = closure_16(tmp6(tmp2[27]), obj3);
        }
      }
    }
    let tmp24 = null;
    const tmp22 = closure_18;
    const tmp23 = closure_17;
    if (null != selfParticipant) {
      tmp24 = null;
      if (!tmp6ResultResult) {
        const obj4 = {
          participant: selfParticipant,
          avatarSize: tmp(openVoice[14]).AvatarSizes.PROFILE,
          resizeMode: tmp(openVoice[24]).ResizeMode.COVER,
          onSingleTap() {
                  const tmp = closure_3;
                  if (tmp) {
                    openVoice();
                  } else {
                    map1();
                  }
                }
        };
        const tmp6Result5 = tmp6(openVoice[26]);
        tmp24 = closure_16(tmp6Result5, obj4);
      }
    }
    const obj5 = { children: items2 };
    items2 = [tmp24, tmp14];
    return tmp22(tmp23, obj5);
  }
  if (pipParticipant.user.id === AuthenticationStore.getId()) {
    function onScreenshareTap() {
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (null != voiceChannelId) {
        let id;
        const selectParticipant = ChannelRTCActionCreatorsDefault.selectParticipant;
        ChannelRTCActionCreatorsDefault;
        if (pipParticipant != null) {
          id = pipParticipant.id;
        }
        if (id == null) {
          id = null;
        }
        const participant = selectParticipant(voiceChannelId, id);
        const tmp7 = closure_3;
        if (tmp7) {
          openVoice();
        }
      }
    }
    const obj6 = { onSingleTap: onScreenshareTap, onDoubleTap: onScreenshareTap };
    tmp20 = closure_16(tmp6(tmp2[22]), obj6);
  } else {
    const obj7 = { removeEmptyStateButton: true, removeEmptyStateImage: true, resizeMode: tmp(openVoice[24]).ResizeMode.CONTAIN, participant: pipParticipant, onSingleTap: onPipTap, onDoubleTap: onPipTap };
    const tmp6Result6 = tmp6(openVoice[23]);
    tmp20 = closure_16(tmp6Result6, obj7);
  }
  tmp14 = tmp20;
});
let closure_22 = react.memo(function ActivityPictureInPictureVideo(arg0) {
  let Icon;
  let arr5;
  let channel;
  let id;
  let items6;
  let leadingEdgeDebounce;
  let obj11;
  let selfParticipant;
  let speaking;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  const f99837 = () => {
    const items = [ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(), ChannelCallLifecycleStore.isReactingToThermalState()];
    return items;
  };
  const f126346 = () => {
    const items = [ChannelRTCStore.getParticipants(id), ChannelRTCStore.getVideoParticipants(id), ChannelRTCStore.getParticipantsVersion(id)];
    return items;
  };
  ({ channel, selfParticipant } = arg0);
  const tmp = closure_19();
  const tmp2 = id;
  let items = [ChannelCallLifecycleStore];
  const obj = id(leadingEdgeDebounce[20]);
  id = channel.id;
  leadingEdgeDebounce = undefined;
  [tmp5, tmp6] = obj.useStateFromStoresArray(items, f99837);
  _slicedToArray(obj.useStateFromStoresArray(items, f99837), 2);
  const items1 = [ChannelCallLifecycleStore];
  const obj2 = id(leadingEdgeDebounce[20]);
  const stateFromStores = obj2.useStateFromStores(items1, () => ChannelCallLifecycleStore.isReactingToThermalState());
  const items2 = [ChannelRTCStore];
  const items3 = [id];
  const obj3 = id(leadingEdgeDebounce[20]);
  [arr5, tmp9] = obj3.useStateFromStores(items2, f126346, items3, areParticipantsEqual);
  _slicedToArray(obj3.useStateFromStores(items2, f126346, items3, areParticipantsEqual), 2);
  const items4 = [SpeakingStore];
  const items5 = [selfParticipant];
  const obj4 = id(leadingEdgeDebounce[20]);
  const stateFromStores1 = obj4.useStateFromStores(items4, () => {
    let user;
    let found = null;
    if (null != selfParticipant) {
      const speakers = SpeakingStore.getSpeakers();
      found = speakers.find((item) => {
        const isSpeakingResult = item !== user.user.id && speaking.isSpeaking(item);
        return isSpeakingResult;
      });
    }
    return found;
  }, items5);
  const obj5 = id(leadingEdgeDebounce[29]);
  leadingEdgeDebounce = obj5.useLeadingEdgeDebounce(stateFromStores1, 1000);
  if (null != leadingEdgeDebounce) {
    let found = arr5.find((id) => id.id === leadingEdgeDebounce);
    if (null != found) {
      tmp14 = found;
    }
    const tmp2Result = tmp2(leadingEdgeDebounce[30]);
    const token = tmp2Result.useToken(selfParticipant(tmp3[15]).unsafe_rawColors.PRIMARY_800);
    if (tmp14 != null) {
      const user = tmp14.user;
      const avatarURL = user.getAvatarURL(channel.guild_id, 80);
    }
    if (null == tmp14) {
      return null;
    } else {
      let tmp25 = null != tmp14.streamId;
      if (tmp25) {
        const voiceState = tmp14.voiceState;
        let selfVideo;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
        tmp25 = selfVideo;
      }
      const obj6 = { style: items6, children: null };
      items6 = [tmp.avatarContainer, ];
      const obj7 = { backgroundColor: tmp23 };
      items6[1] = obj7;
      if (tmp25) {
        let tmp28;
        let tmp30;
        if (!tmp6) {
          tmp28 = closure_16;
          const obj8 = { participant: tmp14, avatarSize: tmp2(leadingEdgeDebounce[14]).AvatarSizes.PROFILE, resizeMode: tmp2(leadingEdgeDebounce[24]).ResizeMode.COVER };
          const tmp20Result = selfParticipant(leadingEdgeDebounce[26]);
          tmp30 = closure_16(tmp20Result, obj8);
        }
        const items7 = [tmp30, ];
        let tmp28Result = null;
        if (tmp5) {
          const obj9 = { style: tmp.thermalAlertIconContainer, children: tmp28(Icon, obj11) };
          obj11 = { style: tmp.thermalAlertIcon, source: selfParticipant(leadingEdgeDebounce[32]), color: tmp.thermalAlertIcon.color };
          Icon = tmp2(tmp3[14]).Icon;
          tmp28Result = tmp28(tmp27, obj9);
        }
        items7[1] = tmp28Result;
        obj6.children = items7;
        return tmp26(closure_5, obj6);
      }
      const obj12 = { size: tmp2(leadingEdgeDebounce[14]).AvatarSizes.LARGE_48, channel, guildId: channel.guild_id, user: null, speaking: null };
      const Avatar = tmp2(tmp3[14]).Avatar;
      ({ user: obj10.user, speaking: obj10.speaking } = tmp14);
      tmp30 = closure_16(Avatar, obj12);
      tmp28 = closure_16;
    }
  }
  let streamId;
  if (selfParticipant != null) {
    streamId = selfParticipant.streamId;
  }
  tmp14 = selfParticipant;
  if (null == streamId) {
    tmp14 = selfParticipant;
    if (!stateFromStores) {
      const items8 = [];
      let num = 0;
      HermesBuiltin.arraySpread(items8, tmp9, 0);
      const first = items8.sort((lastSpoke, lastSpoke2) => {
        let num = -1;
        if (lastSpoke.lastSpoke < lastSpoke2.lastSpoke) {
          num = 1;
        }
        return num;
      })[0];
      tmp14 = selfParticipant;
      if (null != first) {
        tmp14 = first;
      }
    }
  }
});
const memoResult = react.memo(function PipctureInPictureVideoContainer(arg0) {
  let channel;
  let height;
  let obj10;
  let obj8;
  let pipParticipant;
  let selfParticipant;
  let str;
  let tmp10;
  let tmp8Result;
  let width;
  ({ channel, pipParticipant, selfParticipant } = arg0);
  const tmp = closure_19();
  const obj = useIsViewingActivity;
  const obj2 = { channelId: channel.id };
  const isViewingActivity = obj.useIsViewingActivity(obj2);
  const obj3 = useShouldForcePipOrientation;
  const shouldForcePipOrientation = obj3.useShouldForcePipOrientation({ channel });
  const obj4 = { channelId: channel.id, forcedOrientation: shouldForcePipOrientation };
  const tmp6 = usePipDimensionsDefault(obj4);
  const items = [isViewingActivity ? tmp.pipFab : tmp.pip, , , ];
  const obj5 = { style: isViewingActivity ? tmp.backgroundPipFab : tmp.background, children: authStore4(tmp10, obj10) };
  ({ width, height } = useWindowDimensionsDefault());
  useWindowDimensionsDefault();
  let elevationShadow;
  tmp10 = React3;
  const tmp2Result = PlatformUtils;
  if (tmp2Result.isAndroid()) {
    elevationShadow = tmp.elevationShadow;
  }
  items[1] = elevationShadow;
  if (width > height) {
    str = "row";
  } else {
    str = "column";
  }
  const obj6 = { style: items, children: tmp8Result };
  items[2] = { flexDirection: str };
  items[3] = tmp6;
  if (isViewingActivity) {
    const obj7 = { pointerEvents: "none", style: tmp.activityPipContainer, children: authStore4(closure_22, obj8) };
    obj8 = { channel, pipParticipant, selfParticipant };
    tmp8Result = tmp8(tmp9, obj7);
  } else {
    const obj9 = { channel, pipParticipant, selfParticipant };
    tmp8Result = tmp8(closure_20, obj9);
  }
  obj10 = { activeOpacity: 0.7, children: authStore4(hasOwnProperty, obj6) };
  return authStore4(hasOwnProperty, obj5);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/video_calls/native/components/PictureInPictureVideo.tsx");

export default memoResult;
export { areParticipantsEqual };
