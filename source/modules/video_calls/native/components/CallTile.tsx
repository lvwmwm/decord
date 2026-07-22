// Module ID: 10774
// Function ID: 83708
// Name: StreamPreviewTile
// Dependencies: []

// Module 10774 (StreamPreviewTile)
class StreamPreviewTile {
  constructor(arg0) {
    participant = global.participant;
    obj = {};
    items = [, ];
    items[0] = closure_16().streamPreview;
    items[1] = global.style;
    obj.style = items;
    obj = {
      guildId: participant.stream.guildId,
      userId: participant.user.id,
      style: { aspectRatio: undefined, borderRadius: 0 },
      disableTransition: true,
      onPress() {
            return callback();
          }
    };
    obj.children = jsx(importDefault(dependencyMap[19]), obj);
    return jsx(View, obj);
  }
}
function ParticipantIcon(participant) {
  participant = participant.participant;
  if (participant.type === constants.STREAM) {
    let tmp5 = importDefault(dependencyMap[20]);
  } else if (participant.type === constants.USER) {
    const voicePlatform = participant.voicePlatform;
    if (constants2.MOBILE === voicePlatform) {
      tmp5 = importDefault(dependencyMap[21]);
    } else if (constants2.XBOX === voicePlatform) {
      tmp5 = importDefault(dependencyMap[22]);
    } else if (constants2.PLAYSTATION === voicePlatform) {
      tmp5 = importDefault(dependencyMap[23]);
    } else if (constants2.QUEST === voicePlatform) {
      tmp5 = importDefault(dependencyMap[24]);
    }
  }
  let tmp16 = null;
  if (null != tmp5) {
    const obj = { source: tmp5, size: arg1(dependencyMap[25]).Icon.Sizes.REFRESH_SMALL_16, color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE, style: tmp.titleIcon };
    tmp16 = callback(arg1(dependencyMap[25]).Icon, obj);
  }
  return tmp16;
}
class TileOverlay {
  constructor(arg0) {
    ({ participant, isActiveStream } = global);
    ({ channel, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = global);
    tmp = closure_16();
    tmp2 = importDefault(dependencyMap[11])();
    ({ bottom, left, top, right } = tmp2);
    reveal = Object.useContext(arg1(dependencyMap[26]).RevealContext).reveal;
    arg1 = reveal;
    obj = arg1(dependencyMap[27]);
    class T {
      constructor() {
        obj = {};
        obj2 = reveal(closure_2[28]);
        num = 0;
        if (reveal) {
          num = 1;
        }
        obj = { easing: reveal(closure_2[25]).STANDARD_EASING, duration: 250 };
        obj.opacity = obj2.withTiming(num, obj);
        return obj;
      }
    }
    obj = { withTiming: arg1(dependencyMap[28]).withTiming, reveal, STANDARD_EASING: arg1(dependencyMap[25]).STANDARD_EASING };
    T.__closure = obj;
    T.__workletHash = 15640123774063;
    T.__initData = memo;
    obj1 = {};
    num = 0;
    animatedStyle = obj.useAnimatedStyle(T);
    if (hasBottomSafeArea) {
      num = bottom;
    }
    obj1.bottom = num;
    num2 = 0;
    if (hasRightSafeArea) {
      num2 = right;
    }
    obj1.right = num2;
    num3 = 0;
    if (hasLeftSafeArea) {
      num3 = left;
    }
    obj1.left = num3;
    num4 = 0;
    if (hasTopSafeArea) {
      num4 = top;
    }
    obj1.top = num4;
    tmp4 = jsxs;
    obj2 = { pointerEvents: "none", style: items };
    items = [, , ];
    items[0] = StyleSheet.absoluteFill;
    items[1] = obj1;
    items[2] = animatedStyle;
    if (isActiveStream) {
      tmp5 = jsx;
      tmp6 = View;
      obj3 = {};
      obj3.style = tmp.liveContainer;
      tmp7 = jsx;
      tmp8 = arg1;
      tmp9 = dependencyMap;
      obj3.children = jsx(arg1(dependencyMap[25]).LiveTag, {});
      isActiveStream = jsx(View, obj3);
    }
    items1 = [, ];
    items1[0] = isActiveStream;
    obj4 = { style: tmp.usernamePosition };
    obj5 = { style: tmp.usernameContainer };
    items2 = [, ];
    items2[0] = jsx(ParticipantIcon, { participant });
    items2[1] = jsx(importDefault(dependencyMap[29]), { channel, participant });
    obj5.children = items2;
    obj4.children = jsxs(View, obj5);
    items1[1] = jsx(View, obj4);
    obj2.children = items1;
    return tmp4(importDefault(dependencyMap[27]).View, obj2);
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ resetFocus: closure_8, toggleFocus: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ ParticipantTypes: closure_10, isStreamParticipant: closure_11, VoicePlatforms: closure_12 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = { liveContainer: { convertShortcutToName: "Array", hasUnreadMessages: "parseSemver", CreatorMonetizationRestrictions: "Array" }, titleIcon: { marginRight: 6 } };
obj = {};
let obj4 = arg1(dependencyMap[8]);
obj.backgroundColor = obj4.hexOpacityToRgba(importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_700, 0.5);
obj.borderRadius = importDefault(dependencyMap[9]).radii.sm;
obj.usernameContainer = obj;
obj1 = { "Bool(false)": 0.001, "Bool(false)": 0.001, "Bool(false)": null, "Bool(false)": "/", "Bool(false)": null, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.usernamePosition = obj1;
const obj2 = { backgroundColor: importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_600, borderRadius: false };
obj.streamPreview = obj2;
const tmp5 = arg1(dependencyMap[6]);
obj.screenshareContainer = { backgroundColor: importDefault(dependencyMap[9]).colors.BLACK };
obj4 = { backgroundColor: importDefault(dependencyMap[9]).colors.BLACK };
obj.stageStreamContainer = obj4;
let closure_16 = obj1.createStyles(obj);
let closure_17 = { code: "function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const obj3 = { backgroundColor: importDefault(dependencyMap[9]).colors.BLACK };
const memoResult = importAllResult.memo((participant) => {
  let avatarSize;
  let contentStyle;
  let hasLeftSafeArea;
  let hasNotch;
  let hasTopSafeArea;
  let shrinkStreamEmptyState;
  participant = participant.participant;
  const arg1 = participant;
  const channel = participant.channel;
  const importDefault = channel;
  const hasRightSafeArea = participant.hasRightSafeArea;
  const dependencyMap = hasRightSafeArea;
  const hasBottomSafeArea = participant.hasBottomSafeArea;
  ({ contentStyle, hasNotch } = participant);
  ({ avatarSize, hasTopSafeArea, hasLeftSafeArea, shrinkStreamEmptyState } = participant);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  let analyticsLocations;
  let bottom;
  let closure_6;
  const tmp = callback3();
  analyticsLocations = importDefault(dependencyMap[10])().analyticsLocations;
  const rect = importDefault(dependencyMap[11])();
  bottom = rect.bottom;
  const right = rect.right;
  closure_6 = right;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let streamForUser = null;
    if (callback2(participant)) {
      streamForUser = right.getStreamForUser(participant.user.id, participant.stream.guildId);
    }
    obj.stream = streamForUser;
    let activeStreamForUser = null;
    if (callback2(participant)) {
      activeStreamForUser = right.getActiveStreamForUser(participant.user.id, participant.stream.guildId);
    }
    obj.activeStream = activeStreamForUser;
    return obj;
  });
  const activeStream = stateFromStoresObject.activeStream;
  const items1 = [channel.id, participant.id];
  const callback = importAllResult.useCallback(() => {
    callback();
    const participant = channel(hasRightSafeArea[13]).selectParticipant(channel.id, participant.id);
  }, items1);
  const items2 = [channel.id, analyticsLocations];
  const items3 = [hasBottomSafeArea, hasRightSafeArea, bottom, right];
  const callback1 = importAllResult.useCallback((user) => {
    channel(hasRightSafeArea[14])({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items2);
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    let num = 8;
    if (hasBottomSafeArea) {
      num = 8 + bottom;
    }
    obj.bottom = num;
    let num2 = 8;
    if (hasRightSafeArea) {
      num2 = 8 + right;
    }
    obj.right = num2;
    return obj;
  }, items3);
  let obj1 = arg1(dependencyMap[12]);
  const items4 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const type = participant.type;
  if (constants.HIDDEN_STREAM === type) {
    obj = { participant, style: contentStyle };
    let tmp8 = callback(StreamPreviewTile, obj);
  } else if (constants.STREAM === type) {
    if (null != activeStream) {
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      if (activeStream.ownerId !== id) {
        obj = { participant, onSingleTap: closure_9, onDoubleTap: callback, removeEmptyStateImage: shrinkStreamEmptyState, onFullScreen: callback, fullscreenIconStyle: memo, style: contentStyle };
        let tmp17Result = callback(importDefault(dependencyMap[15]), obj);
      } else {
        obj1 = { style: tmp.screenshareContainer };
        const obj2 = { participant, onSingleTap: closure_9, onDoubleTap: callback };
        let stageStreamContainer;
        if (channel.isGuildStageVoice()) {
          stageStreamContainer = tmp.stageStreamContainer;
        }
        obj2.containerStyle = stageStreamContainer;
        obj1.children = callback(importDefault(dependencyMap[16]), obj2);
        tmp17Result = callback(bottom, obj1);
        const tmp17 = callback;
        const tmp18 = bottom;
        const tmp19 = callback;
        const tmp22 = importDefault(dependencyMap[16]);
      }
      tmp8 = tmp17Result;
    } else {
      tmp8 = null;
      if (null != stateFromStoresObject.stream) {
        const obj3 = { participant, style: contentStyle };
        tmp8 = callback(StreamPreviewTile, obj3);
      }
    }
  } else if (constants.USER === type) {
    const obj4 = { participant, avatarSize, onSingleTap: closure_9, onDoubleTap: callback, onLongPress: callback1, statusStyle: memo, hasNotch, resizeMode: participant.resizeMode, style: contentStyle };
    tmp8 = callback(importDefault(dependencyMap[17]), obj4);
  } else {
    tmp8 = null;
    if (constants.ACTIVITY === type) {
      const obj5 = { participant, style: contentStyle, channel, onSingleTap: closure_9 };
      tmp8 = callback(importDefault(dependencyMap[18]), obj5);
    }
  }
  let tmp32 = null;
  if (participant.type !== constants.ACTIVITY) {
    const obj6 = { participant, isActiveStream: null != activeStream, channel, hasTopSafeArea, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea };
    tmp32 = callback(TileOverlay, obj6);
  }
  const children = [tmp8, tmp32];
  return callback2(closure_14, { children });
});
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/video_calls/native/components/CallTile.tsx");

export default memoResult;
export { StreamPreviewTile };
export { TileOverlay };
