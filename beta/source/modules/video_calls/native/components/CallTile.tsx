// Module ID: 9517
// Function ID: 9518
// Name: CallTile
// Dependencies: [19, 17, 4858, 1372, 8829, 4857, 21, 4836, 4683, 576, 6583, 1613, 504, 5037, 7624, 8872, 9484, 8900, 8911, 9518, 9523, 9524, 8550, 9259, 9525, 1177, 8837, 4566, 4837, 9526, 2]

// Module 9517 (CallTile)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import timing from "timing" /* 4837 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import AssetRegistryDefault from "AssetRegistry" /* 8550 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9259 */;
import TouchableStreamPreviewDefault from "TouchableStreamPreview" /* 9518 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9523 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 9524 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 9525 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import UserStore from "UserStore" /* 1372 */;
import ChannelCallStore from "ChannelCallStore" /* 8829 */;
import CallConstants from "CallConstants" /* 4857 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let obj1;

let ColorUtils;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let unpackModuleId;
class StreamPreviewTile {
  constructor(participant) {
    let items;
    let obj2;
    participant = participant.participant;
    const style = participant.style;
    const obj = { style: items, children: map1(TouchableStreamPreviewDefault, obj2) };
    items = [closure_16().streamPreview, style];
    obj2 = {
      guildId: participant.stream.guildId,
      userId: participant.user.id,
      style: { aspectRatio: "disabled", borderRadius: false },
      disableTransition: true,
      onPress() {
        return closure_1_8();
      }
    };
    return map1(hasOwnProperty, obj);
  }
}
function ParticipantIcon(participant) {
  let tmp3;
  participant = participant.participant;
  const tmp = closure_16();
  if (participant.type === constants.STREAM) {
    tmp3 = AssetRegistryDefault3;
  } else if (participant.type === tmp2.USER) {
    const voicePlatform = participant.voicePlatform;
    if (constants2.MOBILE === voicePlatform) {
      tmp3 = AssetRegistryDefault4;
    } else if (constants2.XBOX === voicePlatform) {
      tmp3 = AssetRegistryDefault;
    } else if (constants2.PLAYSTATION === voicePlatform) {
      tmp3 = AssetRegistryDefault2;
    } else if (constants2.QUEST === voicePlatform) {
      tmp3 = AssetRegistryDefault5;
    }
  }
  let tmp14 = null;
  if (null != tmp3) {
    const obj = { source: tmp3, size: native.Icon.Sizes.REFRESH_SMALL_16, color: nativeDefault.unsafe_rawColors.WHITE, style: tmp.titleIcon };
    const Icon = native.Icon;
    tmp14 = map1(Icon, obj);
  }
  return tmp14;
}
class TileOverlay {
  constructor(arg0) {
    let bottom;
    let channel;
    let hasBottomSafeArea;
    let hasLeftSafeArea;
    let hasRightSafeArea;
    let hasTopSafeArea;
    let isActiveStream;
    let items;
    let items1;
    let items2;
    let left;
    let num2;
    let num3;
    let num4;
    let obj6;
    let participant;
    let right;
    let top;
    ({ participant, isActiveStream } = arg0);
    let reveal;
    ({ channel, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = arg0);
    let tmp = closure_16();
    ({ bottom, left, top, right } = useSafeAreaInsetsDefault());
    useSafeAreaInsetsDefault();
    const tmp5 = reveal;
    reveal = react.useContext(reveal(8837).RevealContext).reveal;
    let obj = reveal(4566);
    class T {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        tmp3 = closure_0(closure_2[28]);
        num = 0;
        withTiming = tmp3.withTiming;
        if (reveal) {
          num = 1;
        }
        obj = { opacity: null };
        obj1 = { easing: tmp(tmp2[25]).STANDARD_EASING, duration: 250 };
        obj.opacity = withTiming(num, obj1);
        return obj;
      }
    }
    let obj2 = { withTiming: reveal(4837).withTiming, reveal, STANDARD_EASING: reveal(1177).STANDARD_EASING };
    T.__closure = obj2;
    T.__workletHash = 15640123774063;
    T.__initData = __initData;
    let num = 0;
    const animatedStyle = obj.useAnimatedStyle(T);
    if (hasBottomSafeArea) {
      num = bottom;
    }
    const rect = { bottom: num, right: num2, left: num3, top: num4 };
    num2 = 0;
    if (hasRightSafeArea) {
      num2 = right;
    }
    num3 = 0;
    if (hasLeftSafeArea) {
      num3 = left;
    }
    num4 = 0;
    if (hasTopSafeArea) {
      num4 = top;
    }
    const obj3 = { pointerEvents: "none", style: items, children: items1 };
    items = [absoluteFill.absoluteFill, rect, animatedStyle];
    const View = tmp2(4566).View;
    if (isActiveStream) {
      const obj4 = { style: tmp.liveContainer, children: closure_13(tmp5(1177).LiveTag, {}) };
      isActiveStream = closure_13(closure_5, obj4);
    }
    items1 = [isActiveStream, ];
    const obj5 = { style: tmp.usernamePosition, children: closure_15(closure_5, obj6) };
    obj6 = { style: tmp.usernameContainer, children: items2 };
    items2 = [closure_13(ParticipantIcon, { participant }), closure_13(tmp2(9526), { channel, participant })];
    items1[1] = closure_13(closure_5, obj5);
    return closure_15(View, obj3);
  }
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ resetFocus: metroImportAll, toggleFocus: c9 } = ChannelCallStore);
({ ParticipantTypes: c10, isStreamParticipant: unpackModuleId, VoicePlatforms: closure_12 } = CallConstants);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { liveContainer: { position: "absolute", top: 8, right: 8 }, titleIcon: { marginRight: 6 }, usernameContainer: obj2, usernamePosition: rect, streamPreview: obj3, screenshareContainer: obj4, stageStreamContainer: obj5 };
obj2 = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", backgroundColor: ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.PRIMARY_700, 0.5), borderRadius: nativeDefault.radii.sm, paddingHorizontal: 8, paddingVertical: 4 };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
rect = { overflow: "hidden", position: "absolute", bottom: 8, left: 8, right: 40, borderRadius: nativeDefault.radii.sm };
obj3 = { flex: 1, width: "100%", backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
obj4 = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: nativeDefault.colors.BLACK };
obj5 = { backgroundColor: nativeDefault.colors.BLACK };
const authStore3 = createStyles(obj);
const __initData = { code: "function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const memoResult = react.memo((participant) => {
  let avatarSize;
  let contentStyle;
  let currentUser;
  let hasLeftSafeArea;
  let hasNotch;
  let hasTopSafeArea;
  let items5;
  let obj6;
  let shrinkStreamEmptyState;
  let stageStreamContainer;
  let tmp10;
  let tmp2Result;
  participant = participant.participant;
  const channel = participant.channel;
  const hasRightSafeArea = participant.hasRightSafeArea;
  const hasBottomSafeArea = participant.hasBottomSafeArea;
  ({ contentStyle, hasNotch } = participant);
  ({ avatarSize, hasTopSafeArea, hasLeftSafeArea, shrinkStreamEmptyState } = participant);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  const resizeMode = participant.resizeMode;
  let tmp = closure_16();
  const tmp2 = channel;
  const analyticsLocations = channel(hasRightSafeArea[10])().analyticsLocations;
  let rect = channel(hasRightSafeArea[11])();
  const bottom = rect.bottom;
  const right = rect.right;
  let obj = participant(hasRightSafeArea[12]);
  const items = [right];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let activeStreamForUser;
    let streamForUser = null;
    const tmp = unpackModuleId;
    if (unpackModuleId(participant)) {
      streamForUser = ApplicationStreamingStore.getStreamForUser(tmp2.user.id, tmp2.stream.guildId);
    }
    const obj = { stream: streamForUser, activeStream: activeStreamForUser };
    activeStreamForUser = null;
    if (tmp(participant)) {
      activeStreamForUser = ApplicationStreamingStore.getActiveStreamForUser(tmp2.user.id, tmp2.stream.guildId);
    }
    return obj;
  });
  const activeStream = stateFromStoresObject.activeStream;
  const items1 = [channel.id, participant.id];
  const stream = stateFromStoresObject.stream;
  const callback = hasBottomSafeArea.useCallback(() => {
    metroImportAll();
    const obj = ChannelRTCActionCreatorsDefault;
    participant = obj.selectParticipant(channel.id, participant.id);
  }, items1);
  const items2 = [channel.id, analyticsLocations];
  const items3 = [hasBottomSafeArea, hasRightSafeArea, bottom, right];
  const callback1 = hasBottomSafeArea.useCallback((user) => {
    const obj = { userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items2);
  const memo = hasBottomSafeArea.useMemo(() => {
    let num2;
    let num = 8;
    if (hasBottomSafeArea) {
      num = 8 + bottom;
    }
    const rect = { bottom: num, right: num2 };
    num2 = 8;
    if (hasRightSafeArea) {
      num2 = 8 + right;
    }
    return rect;
  }, items3);
  const items4 = [UserStore];
  const obj2 = participant(hasRightSafeArea[12]);
  const stateFromStores = obj2.useStateFromStores(items4, () => currentUser.getCurrentUser());
  const type = participant.type;
  if (constants.HIDDEN_STREAM === type) {
    const obj3 = { participant, style: contentStyle };
    tmp10 = closure_13(StreamPreviewTile, obj3);
  } else if (constants.STREAM === type) {
    if (null != activeStream) {
      let tmp17Result;
      let id;
      const ownerId = activeStream.ownerId;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (ownerId !== id) {
        const obj4 = { participant, onSingleTap, onDoubleTap: callback, removeEmptyStateImage: shrinkStreamEmptyState, onFullScreen: callback, fullscreenIconStyle: memo, style: contentStyle };
        tmp17Result = closure_13(tmp2(tmp3[15]), obj4);
      } else {
        const obj5 = { style: tmp.screenshareContainer, children: closure_13(tmp2Result, obj6) };
        obj6 = { participant, onSingleTap, onDoubleTap: callback, containerStyle: stageStreamContainer };
        stageStreamContainer = undefined;
        const tmp18 = bottom;
        tmp2Result = tmp2(hasRightSafeArea[16]);
        if (channel.isGuildStageVoice()) {
          stageStreamContainer = tmp.stageStreamContainer;
        }
        tmp17Result = tmp17(tmp18, obj5);
      }
      tmp10 = tmp17Result;
    } else {
      tmp10 = null;
      if (null != stream) {
        const obj7 = { participant, style: contentStyle };
        tmp10 = closure_13(StreamPreviewTile, obj7);
      }
    }
  } else if (constants.USER === type) {
    const obj8 = { participant, avatarSize, onSingleTap, onDoubleTap: callback, onLongPress: callback1, statusStyle: memo, hasNotch, resizeMode, style: contentStyle };
    tmp10 = closure_13(tmp2(tmp3[17]), obj8);
  } else {
    tmp10 = null;
    if (constants.ACTIVITY === type) {
      const obj9 = { participant, style: contentStyle, channel, onSingleTap };
      tmp10 = closure_13(tmp2(tmp3[18]), obj9);
    }
  }
  let tmp27 = null;
  if (participant.type !== constants.ACTIVITY) {
    const obj10 = { participant, isActiveStream: null != activeStream, channel, hasTopSafeArea, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea };
    tmp27 = closure_13(TileOverlay, obj10);
  }
  const obj11 = { children: items5 };
  items5 = [tmp10, tmp27];
  return closure_15(closure_14, obj11);
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/CallTile.tsx");

export default memoResult;
export { StreamPreviewTile };
export { TileOverlay };
