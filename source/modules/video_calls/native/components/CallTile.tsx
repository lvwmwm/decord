// Module ID: 10813
// Function ID: 83949
// Name: StreamPreviewTile
// Dependencies: [31, 27, 4149, 1849, 10240, 4148, 33, 4130, 3974, 689, 5462, 1557, 566, 4323, 8537, 10593, 10783, 10619, 10626, 10814, 10819, 10820, 9073, 9094, 10821, 1273, 10559, 3991, 4131, 10822, 2]

// Module 10813 (StreamPreviewTile)
import importAllResult from "result";
import get_ActivityIndicator from "module_3991";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import resetFocusTimer from "resetFocusTimer";
import ParticipantTypes from "ParticipantTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
class StreamPreviewTile {
  constructor(arg0) {
    participant = global.participant;
    obj = {};
    items = [, ];
    items[0] = c16().streamPreview;
    items[1] = global.style;
    obj.style = items;
    obj = {
      guildId: participant.stream.guildId,
      userId: participant.user.id,
      style: { aspectRatio: undefined, borderRadius: 0 },
      disableTransition: true,
      onPress() {
            return outer1_8();
          }
    };
    obj.children = jsx(require("StreamPreviewContainer"), obj);
    return jsx(View, obj);
  }
}
function ParticipantIcon(participant) {
  participant = participant.participant;
  if (participant.type === constants.STREAM) {
    let tmp5 = importDefault(10819);
  } else if (participant.type === constants.USER) {
    const voicePlatform = participant.voicePlatform;
    if (constants2.MOBILE === voicePlatform) {
      tmp5 = importDefault(10820);
    } else if (constants2.XBOX === voicePlatform) {
      tmp5 = importDefault(9073);
    } else if (constants2.PLAYSTATION === voicePlatform) {
      tmp5 = importDefault(9094);
    } else if (constants2.QUEST === voicePlatform) {
      tmp5 = importDefault(10821);
    }
  }
  let tmp16 = null;
  if (null != tmp5) {
    const obj = { source: tmp5, size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, color: importDefault(689).unsafe_rawColors.WHITE, style: tmp.titleIcon };
    tmp16 = callback(require(1273) /* Button */.Icon, obj);
  }
  return tmp16;
}
class TileOverlay {
  constructor(arg0) {
    ({ participant, isActiveStream } = global);
    ({ channel, hasLeftSafeArea, hasRightSafeArea, hasBottomSafeArea, hasTopSafeArea } = global);
    tmp = c16();
    tmp2 = require("useSafeAreaInsets")();
    ({ bottom, left, top, right } = tmp2);
    reveal = Object.useContext(require("useRevealProviderValue").RevealContext).reveal;
    obj = require("module_3991");
    class T {
      constructor() {
        obj = {};
        obj2 = require("withTiming");
        num = 0;
        if (reveal) {
          num = 1;
        }
        obj = { easing: require("Button").STANDARD_EASING, duration: 250 };
        obj.opacity = obj2.withTiming(num, obj);
        return obj;
      }
    }
    obj = { withTiming: require("withTiming").withTiming, reveal, STANDARD_EASING: require("Button").STANDARD_EASING };
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
      tmp8 = reveal;
      tmp9 = closure_2;
      obj3.children = jsx(require("Button").LiveTag, {});
      isActiveStream = jsx(View, obj3);
    }
    items1 = [, ];
    items1[0] = isActiveStream;
    obj4 = { style: tmp.usernamePosition };
    obj5 = { style: tmp.usernameContainer };
    items2 = [, ];
    items2[0] = jsx(ParticipantIcon, { participant });
    items2[1] = jsx(require("ParticipantTitle"), { channel, participant });
    obj5.children = items2;
    obj4.children = jsxs(View, obj5);
    items1[1] = jsx(View, obj4);
    obj2.children = items1;
    return tmp4(require("module_3991").View, obj2);
  }
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ resetFocus: closure_8, toggleFocus: closure_9 } = resetFocusTimer);
({ ParticipantTypes: closure_10, isStreamParticipant: closure_11, VoicePlatforms: closure_12 } = ParticipantTypes);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { liveContainer: { position: "absolute", top: 8, right: 8 }, titleIcon: { marginRight: 6 } };
obj = { flexDirection: "row", alignItems: "center", alignSelf: "flex-start", backgroundColor: null, borderRadius: null, paddingHorizontal: 8, paddingVertical: 4 };
obj.backgroundColor = hexToRgb.hexOpacityToRgba(require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_700, 0.5);
obj.borderRadius = require("_createForOfIteratorHelperLoose").radii.sm;
obj.usernameContainer = obj;
_createForOfIteratorHelperLoose = { overflow: "hidden", position: "absolute", bottom: 8, left: 8, right: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.usernamePosition = _createForOfIteratorHelperLoose;
let obj2 = { flex: 1, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_600 };
obj.streamPreview = obj2;
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", overflow: "hidden", width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
obj.screenshareContainer = obj3;
hexToRgb = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
obj.stageStreamContainer = hexToRgb;
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_17 = { code: "function CallTileTsx1(){const{withTiming,reveal,STANDARD_EASING}=this.__closure;return{opacity:withTiming(reveal?1:0,{easing:STANDARD_EASING,duration:250})};}" };
const memoResult = importAllResult.memo((participant) => {
  let avatarSize;
  let contentStyle;
  let hasLeftSafeArea;
  let hasNotch;
  let hasTopSafeArea;
  let shrinkStreamEmptyState;
  participant = participant.participant;
  const channel = participant.channel;
  const hasRightSafeArea = participant.hasRightSafeArea;
  const hasBottomSafeArea = participant.hasBottomSafeArea;
  ({ contentStyle, hasNotch } = participant);
  ({ avatarSize, hasTopSafeArea, hasLeftSafeArea, shrinkStreamEmptyState } = participant);
  if (hasNotch === undefined) {
    hasNotch = false;
  }
  let analyticsLocations;
  let bottom;
  let right;
  const tmp = callback3();
  analyticsLocations = channel(hasRightSafeArea[10])().analyticsLocations;
  const rect = channel(hasRightSafeArea[11])();
  bottom = rect.bottom;
  right = rect.right;
  let obj = participant(hasRightSafeArea[12]);
  const items = [right];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = {};
    let streamForUser = null;
    if (outer1_11(participant)) {
      streamForUser = right.getStreamForUser(participant.user.id, participant.stream.guildId);
    }
    obj.stream = streamForUser;
    let activeStreamForUser = null;
    if (outer1_11(participant)) {
      activeStreamForUser = right.getActiveStreamForUser(participant.user.id, participant.stream.guildId);
    }
    obj.activeStream = activeStreamForUser;
    return obj;
  });
  const activeStream = stateFromStoresObject.activeStream;
  const items1 = [channel.id, participant.id];
  const callback = hasBottomSafeArea.useCallback(() => {
    outer1_8();
    participant = channel(hasRightSafeArea[13]).selectParticipant(channel.id, participant.id);
  }, items1);
  const items2 = [channel.id, analyticsLocations];
  const items3 = [hasBottomSafeArea, hasRightSafeArea, bottom, right];
  const callback1 = hasBottomSafeArea.useCallback((user) => {
    channel(hasRightSafeArea[14])({ userId: user.user.id, channelId: channel.id, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items2);
  const memo = hasBottomSafeArea.useMemo(() => {
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
  let obj1 = participant(hasRightSafeArea[12]);
  const items4 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items4, () => outer1_7.getCurrentUser());
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
        let tmp17Result = callback(channel(hasRightSafeArea[15]), obj);
      } else {
        obj1 = { style: tmp.screenshareContainer };
        const obj2 = { participant, onSingleTap: closure_9, onDoubleTap: callback };
        let stageStreamContainer;
        if (channel.isGuildStageVoice()) {
          stageStreamContainer = tmp.stageStreamContainer;
        }
        obj2.containerStyle = stageStreamContainer;
        obj1.children = callback(channel(hasRightSafeArea[16]), obj2);
        tmp17Result = callback(bottom, obj1);
        const tmp17 = callback;
        const tmp18 = bottom;
        const tmp19 = callback;
        const tmp22 = channel(hasRightSafeArea[16]);
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
    tmp8 = callback(channel(hasRightSafeArea[17]), obj4);
  } else {
    tmp8 = null;
    if (constants.ACTIVITY === type) {
      const obj5 = { participant, style: contentStyle, channel, onSingleTap: closure_9 };
      tmp8 = callback(channel(hasRightSafeArea[18]), obj5);
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/video_calls/native/components/CallTile.tsx");

export default memoResult;
export { StreamPreviewTile };
export { TileOverlay };
