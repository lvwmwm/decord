// Module ID: 10573
// Function ID: 82530
// Name: UserTile
// Dependencies: []
// Exports: default

// Module 10573 (UserTile)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[3]).clearVoiceChannelEffectForUser;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const VideoToggleState = arg1(dependencyMap[7]).VideoToggleState;
const ParticipantTypes = arg1(dependencyMap[8]).ParticipantTypes;
const MediaEngineContextTypes = arg1(dependencyMap[9]).MediaEngineContextTypes;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[10]));
let obj1 = arg1(dependencyMap[11]);
let obj = {};
obj = { "Null": 3, "Null": "rgb", "Null": 32, "Bool(false)": 32, "Bool(false)": 20, backgroundColor: importDefault(dependencyMap[12]).colors.BLACK };
obj.container = obj;
obj.imageBackground = {};
obj.autoDisabledVideoWrapper = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true };
obj1 = { "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016259745739813683, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001425031744193127, "Bool(true)": null };
const tmp2 = arg1(dependencyMap[10]);
obj1.backgroundColor = arg1(dependencyMap[13]).hexWithOpacity(importDefault(dependencyMap[12]).unsafe_rawColors.PRIMARY_700, 0.5);
obj.autoDisabledVideo = obj1;
const obj2 = { "Null": 0, "Null": 0, "Null": -32, "Null": 4, "Null": 8, "Null": "absolute", borderRadius: importDefault(dependencyMap[12]).radii.sm };
obj.autoDisabledVideoTextWrapper = obj2;
const obj3 = { 0: false, 0: false, 9223372036854775807: false, 0: false, 0: false, 0: false, 0: false, 0: false, 0: false };
const obj6 = arg1(dependencyMap[13]);
obj3.backgroundColor = arg1(dependencyMap[13]).hexWithOpacity(importDefault(dependencyMap[12]).unsafe_rawColors.PRIMARY_700, 0.5);
obj3.borderRadius = importDefault(dependencyMap[12]).radii.md;
obj.statusWrapper = obj3;
obj.labelText = {};
let closure_17 = obj1.createStyles(obj);
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
  const arg1 = hasVideo;
  guildId = guildId.guildId;
  ({ streamId, resizeMode, ringing, avatarSize, speaking, gestureEnabled } = guildId);
  const tmp = callback3();
  const importDefault = tmp;
  const id = user.id;
  const dependencyMap = id;
  let obj = arg1(dependencyMap[14]);
  const items = [closure_8];
  const items1 = [hasVideo, id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = hasVideo;
    if (hasVideo) {
      tmp = id === id.getId();
    }
    return tmp;
  }, items1);
  const items2 = [closure_10];
  const items3 = [id];
  const callback = callback(arg1(dependencyMap[14]).useStateFromStoresArray(items2, () => {
    const items = [closure_10.isLocalVideoAutoDisabled(id)];
    return items;
  }, items3), 1)[0];
  const obj2 = arg1(dependencyMap[14]);
  const items4 = [closure_10];
  const items5 = [id];
  const tmp3 = arg1(dependencyMap[14]).useStateFromStores(items4, () => {
    if (null != id) {
      let NONE = closure_10.getVideoToggleState(id, constants2.DEFAULT);
    } else {
      NONE = constants.NONE;
    }
    return NONE;
  }, items5) === VideoToggleState.AUTO_PROBING;
  if (!ringing) {
    if (hasVideo) {
      if (!tmp3) {
        obj = { resizeMode, streamId, gestureEnabled };
        const VideoSpinnerContext = arg1(dependencyMap[21]).VideoSpinnerContext;
        obj.videoSpinnerContext = stateFromStores ? VideoSpinnerContext.SELF_VIDEO : VideoSpinnerContext.REMOTE_VIDEO;
        obj.userId = user.id;
        let tmp4Result = callback2(importDefault(dependencyMap[20]), obj);
        const tmp4 = callback2;
        const tmp7 = importDefault(dependencyMap[20]);
      }
      return tmp4Result;
    }
  }
  obj = { style: tmp.imageBackground };
  const obj3 = arg1(dependencyMap[14]);
  obj.url = user.getAvatarURL(guildId, 128);
  obj.user = user;
  obj.guildId = guildId;
  obj.speaking = speaking;
  obj.size = avatarSize;
  obj.renderVideoDetails = function renderVideoDetails() {
    if (closure_3) {
      let obj = { style: tmp.autoDisabledVideoWrapper };
      obj = {};
      const items = [, ];
      ({ autoDisabledVideo: arr[0], autoDisabledVideoTextWrapper: arr[1] } = tmp);
      obj.style = items;
      obj = { source: tmp(id[17]), size: hasVideo(id[16]).Icon.Sizes.SMALL, disableColor: true };
      const items1 = [callback(hasVideo(id[16]).Icon, obj), ];
      const obj1 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%", style: tmp.labelText };
      const intl = hasVideo(id[19]).intl;
      obj1.children = intl.string(hasVideo(id[19]).t.m2Hyj0);
      items1[1] = callback(hasVideo(id[18]).Text, obj1);
      obj.children = items1;
      obj.children = callback2(closure_5, obj);
      let tmp2 = callback(closure_5, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  tmp4Result = callback2(importDefault(dependencyMap[15]), obj);
});
let closure_19 = importAllResult.memo((userId) => {
  let deafened;
  let muted;
  userId = userId.userId;
  const arg1 = userId;
  const style = userId.style;
  ({ muted, deafened } = userId);
  const tmp = callback3();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_10];
  const items1 = [userId];
  const tmp2 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_10.isLocalMute(userId), closure_10.isLocalVideoDisabled(userId), closure_10.isLocalVideoAutoDisabled(userId)];
    return items;
  }, items1), 3);
  let tmp3 = tmp2[1];
  if (tmp2[0]) {
    let tmp4 = importDefault(dependencyMap[22]);
  } else if (deafened) {
    tmp4 = importDefault(dependencyMap[23]);
  } else if (muted) {
    tmp4 = importDefault(dependencyMap[24]);
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
      const obj1 = { source: importDefault(dependencyMap[25]), size: arg1(dependencyMap[16]).Icon.Sizes.SMALL, disableColor: true };
      obj.children = callback2(arg1(dependencyMap[16]).Icon, obj1);
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
      const obj4 = { source: tmp4, size: arg1(dependencyMap[16]).Icon.Sizes.SMALL, color: importDefault(dependencyMap[12]).unsafe_rawColors.WHITE, disableColor: tmp4 === importDefault(dependencyMap[22]) };
      obj2.children = callback2(arg1(dependencyMap[16]).Icon, obj4);
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
const obj9 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/video_calls/native/components/UserTile.tsx");

export default function UserTile(participant) {
  let gestureEnabled;
  let hasNotch;
  let ringing;
  let statusStyle;
  let streamId;
  let style;
  participant = participant.participant;
  const arg1 = participant;
  const onSingleTap = participant.onSingleTap;
  const importDefault = onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const dependencyMap = onDoubleTap;
  const onLongPress = participant.onLongPress;
  let closure_3 = onLongPress;
  let COVER = participant.resizeMode;
  if (COVER === undefined) {
    COVER = arg1(dependencyMap[20]).ResizeMode.COVER;
  }
  let importAllResult;
  let View;
  ({ statusStyle, gestureEnabled, hasNotch, style } = participant);
  const items = [onSingleTap, participant];
  const items1 = [onDoubleTap, participant];
  const callback = importAllResult.useCallback(() => {
    let tmp;
    if (null != onSingleTap) {
      tmp = onSingleTap(participant);
    }
    return tmp;
  }, items);
  const items2 = [participant, onLongPress];
  const callback1 = importAllResult.useCallback(() => {
    let tmp;
    if (null != onDoubleTap) {
      tmp = onDoubleTap(participant);
    }
    return tmp;
  }, items1);
  const user = participant.user;
  importAllResult = user;
  const voiceState = participant.voiceState;
  const callback2 = importAllResult.useCallback(() => {
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
  const channel = channel.getChannel(channelId);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let tmp12;
  if (null != guild_id) {
    tmp12 = guild_id;
  }
  let tmp13 = importDefault(dependencyMap[27])(participant);
  let isVoiceMutedResult;
  if (null != voiceState) {
    isVoiceMutedResult = voiceState.isVoiceMuted();
  }
  let isVoiceDeafenedResult;
  if (null != voiceState) {
    isVoiceDeafenedResult = voiceState.isVoiceDeafened();
  }
  let obj1 = arg1(dependencyMap[14]);
  const items3 = [closure_10];
  const items4 = [user.id, participant.type];
  const stateFromStores = obj1.useStateFromStores(items3, () => {
    let isLocalVideoDisabledResult = null != user.id;
    if (isLocalVideoDisabledResult) {
      isLocalVideoDisabledResult = localVideoDisabled.isLocalVideoDisabled(user.id, onSingleTap(onDoubleTap[28])(participant.type));
    }
    return isLocalVideoDisabledResult;
  }, items4);
  let obj2 = arg1(dependencyMap[29]);
  const voiceChatNavigationContext = obj2.useVoiceChatNavigationContext();
  let swipeDismissRef;
  if (null != voiceChatNavigationContext) {
    swipeDismissRef = voiceChatNavigationContext.swipeDismissRef;
  }
  const user2 = participant.user;
  let id;
  if (null != user2) {
    id = user2.id;
  }
  View = id;
  let obj3 = arg1(dependencyMap[14]);
  const items5 = [closure_6];
  const stateFromStores1 = obj3.useStateFromStores(items5, () => {
    let effectForUserId = null;
    if (null != id) {
      effectForUserId = effectForUserId.getEffectForUserId(id);
    }
    return effectForUserId;
  });
  if (participant.type !== ParticipantTypes.USER) {
    const type = participant.type;
  }
  const tmp15 = null != isVoiceMutedResult && isVoiceMutedResult;
  const tmp17 = null != isVoiceDeafenedResult && isVoiceDeafenedResult;
  const tmp7 = importDefault(dependencyMap[26])(obj);
  const Gesture = arg1(dependencyMap[31]).Gesture;
  const tmp23 = importDefault(dependencyMap[30])({ onDoubleTapStart: callback1, onSingleTapStart: callback });
  const LongPressResult = Gesture.LongPress();
  const minDurationResult = Gesture.LongPress().onStart(callback2).minDuration(800);
  let result = minDurationResult;
  if (null != swipeDismissRef) {
    result = minDurationResult.requireExternalGestureToFail(swipeDismissRef);
  }
  obj = {};
  const Gesture2 = arg1(dependencyMap[31]).Gesture;
  obj.gesture = Gesture2.Simultaneous(result, tmp23);
  obj = { style: items6 };
  const items6 = [tmp3.container, style];
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
              return callback(id);
            },
        userId: id,
        hasNotch
      };
      tmp29 = callback2(importDefault(dependencyMap[32]), obj2);
    }
  }
  items7[1] = tmp29;
  obj3 = { muted: tmp15, deafened: tmp17, userId: user.id, style: statusStyle };
  items7[2] = callback2(closure_19, obj3);
  obj.children = items7;
  obj.children = closure_15(View, obj);
  return callback2(arg1(dependencyMap[31]).GestureDetector, obj);
};
