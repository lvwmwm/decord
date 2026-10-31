// Module ID: 11777
// Function ID: 11778
// Name: UserTile
// Dependencies: [32, 19, 17, 6058, 11778, 502, 4863, 2006, 1072, 5681, 5768, 21, 5014, 575, 5011, 504, 8821, 1187, 11779, 5624, 1113, 11764, 11766, 11780, 11781, 11782, 11783, 9235, 6852, 11228, 11784, 11006, 11754, 5303, 11785, 2]
// Exports: default

// Module 11777 (UserTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import CallConstants from "CallConstants" /* 5681 */;
import Constants2 from "Constants" /* 5768 */;
import VoiceChannelEffectsStore2 from "VoiceChannelEffectsStore" /* 11778 */;
import AssetRegistryDefault from "AssetRegistry" /* 11779 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11780 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 11781 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 11782 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 11783 */;
import mediaEngineContextFromParticipantTypeDefault from "mediaEngineContextFromParticipantType" /* 11784 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6058 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import MediaEngineStore from "MediaEngineStore" /* 2006 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import ColorUtils_mod from "ColorUtils" /* 5011 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const VoiceChannelEffectsStore = VoiceChannelEffectsStore2;
let importDefault;

let ColorUtils;
let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
let obj4;
let size;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let closure_8 = VoiceChannelEffectsStore2.clearVoiceChannelEffectForUser;
const VideoToggleState = Constants.VideoToggleState;
const ParticipantTypes = CallConstants.ParticipantTypes;
const MediaEngineContextTypes = Constants2.MediaEngineContextTypes;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, autoDisabledVideoWrapper: { width: "100%", flexDirection: "row", justifyContent: "center" }, autoDisabledVideo: obj3, autoDisabledVideoTextWrapper: obj4, statusWrapper: size, labelText: { marginLeft: 8, height: 20, alignItems: "center" } };
obj2 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), alignItems: "center", height: 24 };
ColorUtils = ColorUtils_mod;
obj4 = { borderRadius: nativeDefault.radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
size = { position: "absolute", bottom: 8, right: 8, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.md, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
ColorUtils = ColorUtils_mod;
let closure_18 = createStyles(obj);
let closure_19 = react.memo(function VideoContent(guildId) {
  let VideoSpinnerContext;
  let avatarSize;
  let closure_1;
  let closure_3;
  let gestureEnabled;
  let hasVideo;
  let playingSoundboard;
  let resizeMode;
  let ringing;
  let speaking;
  let streamId;
  let user;
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  _slicedToArray = undefined;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, playingSoundboard, gestureEnabled } = guildId);
  let tmp = closure_18();
  importDefault = tmp;
  const id = user.id;
  let tmp3 = id;
  let obj = hasVideo(id[15]);
  let items = [AuthenticationStore];
  let items1 = [hasVideo, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = hasVideo && id === AuthenticationStore.getId();
    return tmp;
  }, items1);
  let obj2 = hasVideo(id[15]);
  const items2 = [MediaEngineStore];
  const items3 = [id];
  _slicedToArray = _slicedToArray(obj2.useStateFromStoresArray(items2, () => {
    const items = [MediaEngineStore.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  let obj3 = hasVideo(id[15]);
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
  const tmp2 = hasVideo;
  if (!ringing) {
    if (hasVideo) {
      let tmp6Result;
      if (!tmp5) {
        let obj4 = { resizeMode, streamId, gestureEnabled, videoSpinnerContext: stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO, userId: user.id };
        const tmp8 = require("VideoRenderer");
        VideoSpinnerContext = tmp2(tmp3[22]).VideoSpinnerContext;
        tmp6Result = closure_15(tmp8, obj4);
      }
      return tmp6Result;
    }
  }
  const obj5 = {
    style: tmp.imageBackground,
    url: user.getAvatarURL(guildId, 128),
    user,
    guildId,
    speaking,
    playingSoundboard,
    size: avatarSize,
    renderVideoDetails: function renderVideoAutoDisabledStatus() {
      let intl;
      let items;
      let items1;
      let obj2;
      let tmp3;
      const tmp = closure_3;
      if (tmp) {
        const obj = { style: closure_1.autoDisabledVideoWrapper, children: authStore4(View, obj2) };
        obj2 = { style: items, children: items1 };
        items = [, ];
        ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = closure_1);
        const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL, disableColor: true };
        const Icon = native.Icon;
        items1 = [closure_15(Icon, obj3), ];
        const obj4 = { variant: "text-sm/normal", color: "text-default", style: closure_1.labelText, children: intl.string(intl2.t.m2Hyj0) };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items1[1] = closure_15(Text, obj4);
        tmp3 = closure_15(View, obj);
      } else {
        tmp3 = null;
      }
      return tmp3;
    }
  };
  const tmp10 = require("VideoBackground");
  tmp6Result = closure_15(tmp10, obj5);
});
let closure_20 = react.memo(function VoiceStatus(userId) {
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
  const tmp = closure_18();
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
    tmp7 = AssetRegistryDefault2;
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
    const tmp12 = closure_16;
    const tmp13 = closure_17;
    if (tmp5) {
      const obj2 = { style: items2, children: closure_15(Icon, obj3) };
      items2 = [tmp.statusWrapper, style];
      obj3 = { source: AssetRegistryDefault5, size: userId(1187).Icon.Sizes.SMALL, disableColor: true };
      Icon = tmp2(1187).Icon;
      tmp15 = closure_15(View, obj2);
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
      const obj5 = { style: items4, children: closure_15(Icon2, obj6) };
      obj6 = { source: tmp7, size: userId(1187).Icon.Sizes.SMALL, color: nativeDefault.unsafe_rawColors.WHITE, disableColor: tmp7 === AssetRegistryDefault2 };
      Icon2 = tmp2(1187).Icon;
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
  let items7;
  let items8;
  let obj5;
  let ringing;
  let statusStyle;
  let streamId;
  let style;
  let tmp26;
  let tmp27;
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
  const tmp3 = closure_18();
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
  const callback2 = user.useCallback(() => {
    let tmpResult;
    if (onLongPress != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items2);
  ({ streamId, ringing } = participant);
  const withLocalSelfMuteDeaf = participant(onDoubleTap[27]).withLocalSelfMuteDeaf;
  const voiceState = participant.voiceState;
  participant(onDoubleTap[27]);
  const obj = participant(onDoubleTap[27]);
  const result = withLocalSelfMuteDeaf(voiceState, obj.useLocalSelfMuteDeaf());
  const obj2 = { userId: participant.id };
  const items3 = [SoundboardStore];
  let channelId;
  const tmp11 = onSingleTap(onDoubleTap[28])(obj2);
  const obj4 = participant(onDoubleTap[15]);
  const stateFromStores = obj4.useStateFromStores(items3, () => SoundboardStore.isUserPlayingSounds(participant.id));
  const getChannel = ChannelStore.getChannel;
  if (result != null) {
    channelId = result.channelId;
  }
  const channel = getChannel(channelId);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp17 = tmp10(tmp8[29])(participant);
  let flag;
  if (result != null) {
    flag = result.isVoiceMuted();
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (result != null) {
    flag2 = result.isVoiceDeafened();
  }
  if (flag2 == null) {
    flag2 = false;
  }
  const items4 = [MediaEngineStore];
  const items5 = [user.id, participant.type];
  const tmp7Result = participant(onDoubleTap[15]);
  const stateFromStores1 = tmp7Result.useStateFromStores(items4, () => {
    const isLocalVideoDisabledResult = null != user.id && MediaEngineStore.isLocalVideoDisabled(tmp.id, mediaEngineContextFromParticipantTypeDefault(participant.type));
    return isLocalVideoDisabledResult;
  }, items5);
  const tmp7Result3 = participant(onDoubleTap[31]);
  const voiceChatNavigationContext = tmp7Result3.useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (voiceChatNavigationContext != null) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (user2 != null) {
    id = user2.id;
  }
  const items6 = [VoiceChannelEffectsStore];
  const tmp7Result4 = participant(onDoubleTap[15]);
  const stateFromStores2 = tmp7Result4.useStateFromStores(items6, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = VoiceChannelEffectsStore.getEffectForUserId(tmp);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp23 = onSingleTap(onDoubleTap[32])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const Gesture = tmp7(tmp8[33]).Gesture;
  const LongPressResult = Gesture.LongPress();
  const runOnJSResult = LongPressResult.runOnJS(true);
  const onStartResult = runOnJSResult.onStart(callback2);
  const minDurationResult = onStartResult.minDuration(800);
  let result1 = minDurationResult;
  if (null != swipeDismissRef) {
    result1 = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  const obj3 = { gesture: Gesture2.Simultaneous(result1, tmp23), children: tmp26(tmp27, obj5) };
  const GestureDetector = tmp7(tmp8[33]).GestureDetector;
  Gesture2 = tmp7(tmp8[33]).Gesture;
  obj5 = { style: items7, children: items8 };
  items7 = [tmp3.container, style];
  const obj6 = { guildId: guild_id, hasVideo: tmp17, streamId, user, resizeMode: COVER, ringing, speaking: tmp11, playingSoundboard: stateFromStores, avatarSize, gestureEnabled };
  tmp26 = closure_16;
  tmp27 = id;
  const tmp28 = closure_19;
  if (tmp17) {
    tmp17 = !stateFromStores1;
  }
  items8 = [closure_15(tmp28, obj6), , ];
  let tmp25Result = null;
  if (null != id) {
    tmp25Result = null;
    if (null != stateFromStores2) {
      const obj7 = {
        voiceChannelEffect: stateFromStores2,
        onComplete() {
              return closure_8(id);
            },
        userId: id,
        hasNotch
      };
      tmp25Result = tmp25(tmp10(tmp8[34]), obj7);
    }
  }
  items8[1] = tmp25Result;
  const obj8 = { muted: flag, deafened: flag2, userId: user.id, style: statusStyle };
  items8[2] = closure_15(closure_20, obj8);
  return closure_15(GestureDetector, obj3);
};
