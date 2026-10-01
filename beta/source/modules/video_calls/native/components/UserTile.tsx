// Module ID: 8900
// Function ID: 8901
// Name: UserTile
// Dependencies: [32, 19, 17, 8901, 502, 2045, 1993, 1074, 4857, 4861, 21, 4836, 576, 4683, 504, 8902, 7694, 1177, 8905, 4832, 1115, 8880, 8883, 8074, 8906, 8907, 8908, 8807, 8899, 8909, 8867, 8870, 6073, 8910, 2]
// Exports: default

// Module 8900 (UserTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import CallConstants from "CallConstants" /* 4857 */;
import Constants2 from "Constants" /* 4861 */;
import AssetRegistryDefault from "AssetRegistry" /* 8074 */;
import VoiceChannelEffectsStore2 from "VoiceChannelEffectsStore" /* 8901 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8905 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8906 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8907 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8908 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 8909 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const VoiceChannelEffectsStore = VoiceChannelEffectsStore2;
let guildId, importDefault, userId;

let ColorUtils;
let closure_14;
let closure_15;
let closure_16;
let obj2;
let obj3;
let obj4;
let size;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let closure_7 = VoiceChannelEffectsStore2.clearVoiceChannelEffectForUser;
const VideoToggleState = Constants.VideoToggleState;
const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, autoDisabledVideoWrapper: { width: "100%", flexDirection: "row", justifyContent: "center" }, autoDisabledVideo: obj3, autoDisabledVideoTextWrapper: obj4, statusWrapper: size, labelText: { marginLeft: 8, height: 20, alignItems: "center" } };
obj2 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), alignItems: "center", height: 24 };
ColorUtils = ColorUtils_mod;
obj4 = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
size = { position: "absolute", bottom: 8, right: 8, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = ColorUtils_mod;
let closure_17 = createStyles(obj);
let closure_18 = react.memo((guildId) => {
  let VideoSpinnerContext;
  let avatarSize;
  let closure_1;
  let closure_3;
  let gestureEnabled;
  let hasVideo;
  let resizeMode;
  let ringing;
  let speaking;
  let streamId;
  let user;
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, gestureEnabled } = guildId);
  let tmp = closure_17();
  importDefault = tmp;
  const id = user.id;
  let tmp3 = id;
  let obj = hasVideo(id[14]);
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = hasVideo && id === AuthenticationStore.getId();
    return tmp;
  }, items1);
  let obj2 = hasVideo(id[14]);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(obj2.useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  let obj3 = hasVideo(id[14]);
  const items4 = [MediaEngineStore];
  const items5 = [id];
  const tmp5 = obj3.useStateFromStores(items4, () => {
    let NONE;
    if (null != id) {
      NONE = MediaEngineStore.getVideoToggleState(tmp, MediaEngineContextTypes.DEFAULT);
    } else {
      NONE = VideoToggleState.NONE;
    }
    return NONE;
  }, items5) === VideoToggleState.AUTO_PROBING;
  let closure_4 = tmp5;
  let obj4 = hasVideo(id[15]);
  const avatarSpeakingColor = obj4.useAvatarSpeakingColor({ userId: id, guildId });
  const tmp2 = hasVideo;
  if (!ringing) {
    if (hasVideo) {
      let tmp7Result;
      if (!tmp5) {
        const obj5 = { resizeMode, streamId, gestureEnabled, videoSpinnerContext: stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, userId: user.id };
        const tmp9 = require("VideoRenderer");
        VideoSpinnerContext = tmp2(tmp3[22]).VideoSpinnerContext;
        tmp7Result = closure_14(tmp9, obj5);
      }
      return tmp7Result;
    }
  }
  const obj6 = {
    style: tmp.imageBackground,
    url: user.getAvatarURL(guildId, 128),
    user,
    guildId,
    speaking,
    speakingColor: avatarSpeakingColor,
    size: avatarSize,
    renderVideoDetails() {
      let intl;
      let items;
      let items1;
      let obj2;
      let tmp3;
      const tmp = closure_3;
      if (tmp) {
        const obj = { style: closure_1.autoDisabledVideoWrapper, children: closure_15(View, obj2) };
        obj2 = { style: items, children: items1 };
        items = [, ];
        ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
        const obj3 = { source: AssetRegistryDefault2, size: native.Icon.Sizes.SMALL, disableColor: true };
        const Icon = native.Icon;
        items1 = [authStore2(Icon, obj3), ];
        const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: intl.string(intl2.t.m2Hyj0) };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items1[1] = authStore2(Text, obj4);
        tmp3 = authStore2(View, obj);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }
  };
  const tmp11 = require("VideoBackground");
  tmp7Result = closure_14(tmp11, obj6);
});
let closure_19 = react.memo((userId) => {
  let Icon;
  let Icon2;
  let deafened;
  let items2;
  let muted;
  let obj3;
  let obj6;
  let tmp12Result;
  let tmp7;
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = closure_17();
  let items = [MediaEngineStore];
  const items1 = [userId];
  const obj = userId(504);
  const tmp4 = _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [MediaEngineStore.isLocalMute(userId), MediaEngineStore.isLocalVideoDisabled(userId), MediaEngineStore.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp5 = tmp4[1];
  const tmp6 = tmp4[2];
  if (tmp4[0]) {
    tmp7 = AssetRegistryDefault;
  } else if (deafened) {
    tmp7 = AssetRegistryDefault3;
  } else if (muted) {
    tmp7 = AssetRegistryDefault4;
  }
  if (tmp5) {
    tmp5 = !tmp6;
  }
  if (tmp5) {
    let tmp15 = null;
    const tmp12 = closure_15;
    const tmp13 = closure_16;
    if (tmp5) {
      const obj2 = { style: items2, children: closure_14(Icon, obj3) };
      items2 = [tmp.statusWrapper, style];
      obj3 = { source: AssetRegistryDefault5, size: userId(1177).Icon.Sizes.SMALL, disableColor: true };
      Icon = tmp2(1177).Icon;
      tmp15 = closure_14(View, obj2);
    }
    const items3 = [tmp15, ];
    let tmp20Result = null;
    if (null != tmp7) {
      const items4 = [tmp.statusWrapper, style, ];
      let obj4 = null;
      const tmp21 = View;
      if (tmp5) {
        obj4 = { right: 38 };
      }
      items4[2] = obj4;
      const obj5 = { style: items4, children: closure_14(Icon2, obj6) };
      obj6 = { source: tmp7, size: userId(1177).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp7 === AssetRegistryDefault };
      Icon2 = tmp2(1177).Icon;
      tmp20Result = tmp20(tmp21, obj5);
    }
    const obj7 = { children: items3 };
    items3[1] = tmp20Result;
    tmp12Result = tmp12(tmp13, obj7);
  } else {
    tmp12Result = null;
  }
  return tmp12Result;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

export default function UserTile(participant) {
  let Gesture2;
  let gestureEnabled;
  let hasNotch;
  let items6;
  let items7;
  let obj5;
  let ringing;
  let statusStyle;
  let streamId;
  let style;
  let tmp24;
  let tmp25;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  let COVER = participant.resizeMode;
  const avatarSize = participant.avatarSize;
  if (COVER === undefined) {
    const tmp = participant;
    COVER = participant(onDoubleTap[21]).ResizeMode.COVER;
  }
  let user;
  let id;
  ({ statusStyle, gestureEnabled, hasNotch, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const tmp3 = closure_17();
  const callback = user.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const items2 = [participant, onLongPress];
  const callback1 = user.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  user = participant.user;
  const voiceState = participant.voiceState;
  const callback2 = user.useCallback(() => {
    let tmpResult;
    if (onLongPress != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items2);
  ({ streamId, ringing } = participant);
  let channelId;
  const getChannel = ChannelStore.getChannel;
  const obj = { userId: participant.id };
  const tmp9 = onSingleTap(onDoubleTap[27])(obj);
  if (voiceState != null) {
    channelId = voiceState.channelId;
  }
  const channel = getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp14 = tmp7(tmp8[28])(participant);
  let flag;
  if (voiceState != null) {
    flag = voiceState.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (voiceState != null) {
    flag2 = voiceState.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  const items3 = [MediaEngineStore];
  const items4 = [user.id, participant.type];
  const obj2 = participant(onDoubleTap[14]);
  const stateFromStores = obj2.useStateFromStores(items3, () => {
    const isLocalVideoDisabledResult = null != user.id && MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    return isLocalVideoDisabledResult;
  }, items4);
  const obj3 = participant(onDoubleTap[30]);
  const voiceChatNavigationContext = obj3.useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (voiceChatNavigationContext != null) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (user2 != null) {
    id = user2.id;
  }
  const items5 = [VoiceChannelEffectsStore];
  const tmp15Result = participant(onDoubleTap[14]);
  const stateFromStores1 = tmp15Result.useStateFromStores(items5, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp21 = onSingleTap(onDoubleTap[31])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const Gesture = tmp15(tmp8[32]).Gesture;
  const LongPressResult = Gesture.LongPress();
  const runOnJSResult = LongPressResult.runOnJS(true);
  const onStartResult = runOnJSResult.onStart(callback2);
  const minDurationResult = onStartResult.minDuration(800);
  let result = minDurationResult;
  if (null != swipeDismissRef) {
    result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  const obj4 = { gesture: Gesture2.Simultaneous(result, tmp21), children: tmp24(tmp25, obj5) };
  const GestureDetector = tmp15(tmp8[32]).GestureDetector;
  Gesture2 = tmp15(tmp8[32]).Gesture;
  obj5 = { style: items6, children: items7 };
  items6 = [tmp3.container, style];
  const obj6 = { guildId: guild_id, hasVideo: tmp14, streamId, user, resizeMode: COVER, ringing, speaking: tmp9, avatarSize, gestureEnabled };
  tmp24 = closure_15;
  tmp25 = id;
  const tmp26 = closure_18;
  if (tmp14) {
    tmp14 = !stateFromStores;
  }
  items7 = [closure_14(tmp26, obj6), , ];
  let tmp23Result = null;
  if (null != id) {
    tmp23Result = null;
    if (null != stateFromStores1) {
      const obj7 = {
        voiceChannelEffect: stateFromStores1,
        onComplete() {
              return closure_7(id);
            },
        userId: id,
        hasNotch
      };
      tmp23Result = tmp23(tmp7(tmp8[33]), obj7);
    }
  }
  items7[1] = tmp23Result;
  const obj8 = { muted: flag, deafened: flag2, userId: user.id, style: statusStyle };
  items7[2] = closure_14(closure_19, obj8);
  return closure_14(GestureDetector, obj4);
};
