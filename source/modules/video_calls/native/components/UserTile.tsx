// Module ID: 10590
// Function ID: 82627
// Name: UserTile
// Dependencies: [57, 31, 27, 10591, 1194, 1348, 4177, 653, 4148, 4191, 33, 4130, 689, 3974, 566, 7884, 1273, 8479, 4126, 1212, 10574, 10577, 7581, 10592, 10593, 10594, 10534, 10020, 10595, 10215, 10562, 5217, 10596, 2]
// Exports: default

// Module 10590 (UserTile)
import _slicedToArray from "_slicedToArray";
import importAllResult from "Directions";
import { View } from "participantHasVideo";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { clearVoiceChannelEffectForUser as closure_7 } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { VideoToggleState } from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";
import hexToRgb from "hexToRgb";

let closure_14;
let closure_15;
let closure_16;
const require = arg1;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = {};
obj = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
obj.container = obj;
obj.imageBackground = { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" };
obj.autoDisabledVideoWrapper = { width: "100%", flexDirection: "row", justifyContent: "center" };
_createForOfIteratorHelperLoose = { backgroundColor: null, alignItems: "center", height: 24 };
_createForOfIteratorHelperLoose.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, 0.5);
obj.autoDisabledVideo = _createForOfIteratorHelperLoose;
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexDirection: "row", justifyContent: "space-evenly", paddingHorizontal: 8, paddingVertical: 4, alignItems: "center" };
obj.autoDisabledVideoTextWrapper = obj2;
let obj3 = { position: "absolute", bottom: 8, right: 8, backgroundColor: null, borderRadius: null, width: 24, height: 24, justifyContent: "center", alignItems: "center" };
obj3.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, 0.5);
obj3.borderRadius = require("_createForOfIteratorHelperLoose").radii.md;
obj.statusWrapper = obj3;
obj.labelText = { marginLeft: 8, height: 20, alignItems: "center" };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_18 = importAllResult.memo((guildId) => {
  let avatarSize;
  let gestureEnabled;
  let hasVideo;
  let resizeMode;
  let ringing;
  let speaking;
  let streamId;
  let user;
  ({ user, hasVideo } = guildId);
  guildId = guildId.guildId;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, gestureEnabled } = guildId);
  let tmp = callback3();
  const importDefault = tmp;
  const id = user.id;
  let obj = hasVideo(id[14]);
  let items = [closure_8];
  let items1 = [hasVideo, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === outer1_8.getId();
    }
    return tmp;
  }, items1);
  const items2 = [closure_10];
  const items3 = [id];
  callback = callback(hasVideo(id[14]).useStateFromStoresArray(items2, () => {
    const items = [outer1_10.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  const obj2 = hasVideo(id[14]);
  const items4 = [closure_10];
  const items5 = [id];
  const tmp3 = hasVideo(id[14]).useStateFromStores(items4, () => {
    if (null != id) {
      let NONE = outer1_10.getVideoToggleState(id, outer1_13.DEFAULT);
    } else {
      NONE = outer1_11.NONE;
    }
    return NONE;
  }, items5) === VideoToggleState.AUTO_PROBING;
  let closure_4 = tmp3;
  if (!ringing) {
    if (hasVideo) {
      if (!tmp3) {
        obj = { resizeMode, streamId, gestureEnabled };
        const VideoSpinnerContext = hasVideo(id[21]).VideoSpinnerContext;
        obj.videoSpinnerContext = stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
        obj.userId = user.id;
        let tmp4Result = callback2(importDefault(id[20]), obj);
        const tmp4 = callback2;
        const tmp7 = importDefault(id[20]);
      }
      return tmp4Result;
    }
  }
  obj = { style: tmp.imageBackground };
  const obj3 = hasVideo(id[14]);
  obj.url = user.getAvatarURL(guildId, 128);
  obj.user = user;
  obj.guildId = guildId;
  obj.speaking = speaking;
  obj.size = avatarSize;
  obj.renderVideoDetails = function renderVideoDetails() {
    if (_slicedToArray) {
      let obj = { style: tmp.autoDisabledVideoWrapper };
      obj = {};
      const items = [, ];
      ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = tmp);
      obj.style = items;
      obj = { source: tmp(id[17]), size: hasVideo(id[16]).Icon.Sizes.SMALL, disableColor: true };
      const items1 = [outer1_14(hasVideo(id[16]).Icon, obj), ];
      const obj1 = { variant: "text-sm/normal", color: "text-default", style: tmp.labelText };
      const intl = hasVideo(id[19]).intl;
      obj1.children = intl.string(hasVideo(id[19]).t.m2Hyj0);
      items1[1] = outer1_14(hasVideo(id[18]).Text, obj1);
      obj.children = items1;
      obj.children = outer1_15(outer1_5, obj);
      let tmp2 = outer1_14(outer1_5, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  tmp4Result = callback2(importDefault(id[15]), obj);
});
let closure_19 = importAllResult.memo((userId) => {
  let deafened;
  let muted;
  userId = userId.userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = callback3();
  let obj = userId(566);
  let items = [closure_10];
  const items1 = [userId];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_10.isLocalMute(userId), outer1_10.isLocalVideoDisabled(userId), outer1_10.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp3 = tmp2[1];
  if (tmp2[0]) {
    let tmp4 = importDefault(7581);
  } else if (deafened) {
    tmp4 = importDefault(10592);
  } else if (muted) {
    tmp4 = importDefault(10593);
  }
  if (tmp3) {
    tmp3 = !tmp2[2];
  }
  if (tmp3) {
    obj = {};
    let tmp15 = null;
    if (tmp3) {
      obj = {};
      const items2 = [tmp.statusWrapper, style];
      obj.style = items2;
      const obj1 = { source: importDefault(10594), size: userId(1273).Icon.Sizes.SMALL, disableColor: true };
      obj.children = callback2(userId(1273).Icon, obj1);
      tmp15 = callback2(View, obj);
    }
    const items3 = [tmp15, ];
    let tmp22Result = null;
    if (null != tmp4) {
      const obj2 = {};
      const items4 = [tmp.statusWrapper, style, ];
      let tmp24 = null;
      if (tmp3) {
        const obj3 = { right: 38 };
        tmp24 = obj3;
      }
      items4[2] = tmp24;
      obj2.style = items4;
      const obj4 = { source: tmp4, size: userId(1273).Icon.Sizes.SMALL, color: importDefault(689).unsafe_rawColors.WHITE, disableColor: tmp4 === importDefault(7581) };
      obj2.children = callback2(userId(1273).Icon, obj4);
      tmp22Result = callback2(View, obj2);
      const tmp22 = callback2;
      const tmp23 = View;
    }
    items3[1] = tmp22Result;
    obj.children = items3;
    let tmp12Result = closure_15(closure_16, obj);
    const tmp12 = closure_15;
    const tmp13 = closure_16;
  } else {
    tmp12Result = null;
  }
  return tmp12Result;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

export default function UserTile(participant) {
  let gestureEnabled;
  let hasNotch;
  let ringing;
  let statusStyle;
  let streamId;
  let style;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const onLongPress = participant.onLongPress;
  let COVER = participant.resizeMode;
  if (COVER === undefined) {
    COVER = participant(onDoubleTap[20]).ResizeMode.COVER;
  }
  let user;
  let id;
  ({ statusStyle, gestureEnabled, hasNotch, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const callback = user.useCallback(() => {
    let tmp;
    if (null != onSingleTap) {
      tmp = onSingleTap(participant);
    }
    return tmp;
  }, items);
  const items2 = [participant, onLongPress];
  const callback1 = user.useCallback(() => {
    let tmp;
    if (null != onDoubleTap) {
      tmp = onDoubleTap(participant);
    }
    return tmp;
  }, items1);
  user = participant.user;
  const voiceState = participant.voiceState;
  const callback2 = user.useCallback(() => {
    let tmp;
    if (null != onLongPress) {
      tmp = onLongPress(participant);
    }
    return tmp;
  }, items2);
  ({ streamId, ringing } = participant);
  let obj = { userId: participant.id };
  let channelId;
  const tmp3 = callback3();
  if (null != voiceState) {
    channelId = voiceState.channelId;
  }
  channel = channel.getChannel(channelId);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let tmp12;
  if (null != guild_id) {
    tmp12 = guild_id;
  }
  let tmp13 = onSingleTap(onDoubleTap[27])(participant);
  let isVoiceMutedResult;
  if (null != voiceState) {
    isVoiceMutedResult = voiceState.isVoiceMuted();
  }
  let isVoiceDeafenedResult;
  if (null != voiceState) {
    isVoiceDeafenedResult = voiceState.isVoiceDeafened();
  }
  let obj1 = participant(onDoubleTap[14]);
  const items3 = [closure_10];
  const items4 = [user.id, participant.type];
  const stateFromStores = obj1.useStateFromStores(items3, () => {
    let isLocalVideoDisabledResult = null != user.id;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = outer1_10.isLocalVideoDisabled(user.id, onSingleTap(onDoubleTap[28])(participant.type));
    }
    return isLocalVideoDisabledResult;
  }, items4);
  let obj2 = participant(onDoubleTap[29]);
  const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (null != voiceChatNavigationContext) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  id = undefined;
  if (null != user2) {
    id = user2.id;
  }
  let obj3 = participant(onDoubleTap[14]);
  const items5 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj3.useStateFromStores(items5, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = outer1_6.getEffectForUserId(id);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp15 = null != isVoiceMutedResult && isVoiceMutedResult;
  const tmp17 = null != isVoiceDeafenedResult && isVoiceDeafenedResult;
  const tmp7 = onSingleTap(onDoubleTap[26])(obj);
  const Gesture = participant(onDoubleTap[31]).Gesture;
  const tmp23 = onSingleTap(onDoubleTap[30])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const LongPressResult = Gesture.LongPress();
  const minDurationResult = Gesture.LongPress().onStart(callback2).minDuration(800);
  let result = minDurationResult;
  if (null != swipeDismissRef) {
    result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  obj = {};
  const Gesture2 = participant(onDoubleTap[31]).Gesture;
  obj.gesture = Gesture2.Simultaneous(result, tmp23);
  obj = { style: items6 };
  items6 = [tmp3.container, style];
  obj1 = { guildId: tmp12 };
  if (tmp13) {
    tmp13 = !stateFromStores;
  }
  obj1.hasVideo = tmp13;
  obj1.streamId = streamId;
  obj1.user = user;
  obj1.resizeMode = COVER;
  obj1.ringing = ringing;
  obj1.speaking = tmp7;
  obj1.avatarSize = participant.avatarSize;
  obj1.gestureEnabled = gestureEnabled;
  const items7 = [callback2(closure_18, obj1), , ];
  let tmp29 = null;
  if (null != id) {
    tmp29 = null;
    if (null != stateFromStores1) {
      obj2 = {
        voiceChannelEffect: stateFromStores1,
        onComplete() {
              return outer1_7(id);
            },
        userId: id,
        hasNotch
      };
      tmp29 = callback2(onSingleTap(onDoubleTap[32]), obj2);
    }
  }
  items7[1] = tmp29;
  obj3 = { muted: tmp15, deafened: tmp17, userId: user.id, style: statusStyle };
  items7[2] = callback2(closure_19, obj3);
  obj.children = items7;
  obj.children = closure_15(id, obj);
  return callback2(participant(onDoubleTap[31]).GestureDetector, obj);
};
