// Module ID: 10774
// Function ID: 83723
// Name: getSizeStyle
// Dependencies: [31, 27, 4143, 4148, 33, 4130, 689, 3974, 10775, 1450, 4663, 566, 7477, 10776, 4660, 1212, 7884, 1273, 10778, 10780, 8497, 4126, 2]

// Module 10774 (getSizeStyle)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ParticipantTypes } from "ParticipantTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_7;
let closure_8;
const require = arg1;
function getSizeStyle(size, speakerTileStyles) {
  if (require(10775) /* StageTileSize */.StageTileSize.FULL === size) {
    return speakerTileStyles.full;
  } else if (require(10775) /* StageTileSize */.StageTileSize.HALF === size) {
    return speakerTileStyles.half;
  } else {
    return speakerTileStyles.third;
  }
}
function getTileWidthStyle(arg0, arg1, arg2) {
  const StageTileSize = require(10775) /* StageTileSize */.StageTileSize;
  if (arg2) {
    let obj = { maxWidth: arg0 === StageTileSize.FULL ? closure_9 : result1 };
  } else {
    if (arg0 === StageTileSize.THIRD) {
      obj = { maxWidth: (arg1 - 36) / 3 };
    } else {
      obj = { flex: 1 };
    }
    return obj;
  }
}
function getImageBackgroundStyle(size, imageBackground) {
  if (size === require(10775) /* StageTileSize */.StageTileSize.THIRD) {
    const items = [imageBackground.imageBackground, ];
    const obj = { paddingBottom: 12 };
    items[1] = obj;
    let items1 = items;
  } else {
    items1 = [imageBackground.imageBackground];
  }
  return items1;
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
const result1 = obj.HALF * 1.7777777777777777;
obj = { container: { marginHorizontal: 4, marginVertical: 4, alignItems: "center", flex: 1 }, full: obj1, half: _createForOfIteratorHelperLoose, third: obj3 };
_createForOfIteratorHelperLoose = { height: obj.HALF };
let obj4 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.avatarContainer = obj4;
obj.imageBackground = { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" };
let obj5 = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", bottom: 4, marginHorizontal: 4, paddingVertical: 4, paddingHorizontal: 8, backgroundColor: null, borderRadius: 6 };
obj5.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, 0.3);
obj.nameplateContainer = obj5;
obj.nameplateText = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
let obj7 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, width: 16, height: 16, justifyContent: "center", alignItems: "center", marginEnd: 4 };
obj.restricted = obj7;
obj1 = { height: obj.FULL };
obj3 = { height: obj.THIRD };
let obj6 = { color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.blocked = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
let obj8 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
const memoResult = importAllResult.memo((channel) => {
  let blocked;
  let ignored;
  channel = channel.channel;
  const participant = channel.participant;
  const size = channel.size;
  const tmp = styles();
  let obj = channel(user[10]);
  user = participant.user;
  ({ blocked, ignored } = participant);
  const isScreenLandscape = obj.useIsScreenLandscape();
  let obj1 = channel(user[11]);
  const items = [_isNativeReflectConstruct];
  const items1 = [channel.id, participant.id];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getParticipant(channel.id, participant.id), items1);
  const items2 = [channel.id, user.id];
  if (null != stateFromStores) {
    if (stateFromStores.type === ParticipantTypes.USER) {
      let tmp23Result = blocked;
      if (!blocked) {
        tmp23Result = ignored;
      }
      const tmp8 = participant(user[13])(channel, stateFromStores);
      obj = {};
      const intl = channel(user[15]).intl;
      obj = { name: tmp8 };
      obj.accessibilityLabel = intl.formatToPlainString(channel(user[15]).t.ODlyvk, obj);
      obj.accessibilityRole = "button";
      const items3 = [tmp.container, getSizeStyle(size, tmp), getTileWidthStyle(size, participant(user[9])().width, isScreenLandscape)];
      obj.style = items3;
      obj.onPress = tmp4;
      obj1 = { style: tmp.avatarContainer };
      const obj2 = { style: getImageBackgroundStyle(size, tmp), url: user.getAvatarURL(channel.guild_id, 64), speaking: stateFromStores.speaking, animate: true, size: channel(user[17]).AvatarSizes.XLARGE, isStageCall: true };
      let tmp17 = tmp23Result;
      if (tmp23Result) {
        const obj3 = { opacity: 0.5 };
        tmp17 = obj3;
      }
      obj2.avatarStyle = tmp17;
      const items4 = [callback(participant(user[16]), obj2), , ];
      const obj4 = { userId: user.id, channelId: channel.id };
      items4[1] = callback(channel(user[18]).VoiceStatus, obj4);
      const obj5 = { userId: user.id, channelId: channel.id };
      items4[2] = callback(channel(user[18]).ModeratorStatus, obj5);
      obj1.children = items4;
      const items5 = [closure_8(View, obj1), ];
      const obj6 = { style: tmp.nameplateContainer };
      if (tmp23Result) {
        const obj7 = {};
        const items6 = [tmp.restricted, ];
        blocked = null;
        if (blocked) {
          blocked = tmp.blocked;
        }
        items6[1] = blocked;
        obj7.style = items6;
        if (blocked) {
          const obj8 = { source: participant(user[19]), size: channel(user[17]).Icon.Sizes.EXTRA_SMALL, color: participant(user[6]).unsafe_rawColors.RED_400 };
          blocked = callback(channel(user[17]).Icon, obj8);
        }
        const items7 = [blocked, ];
        if (ignored) {
          const obj9 = { source: participant(user[20]), size: channel(user[17]).Icon.Sizes.EXTRA_SMALL };
          ignored = callback(channel(user[17]).Icon, obj9);
        }
        items7[1] = ignored;
        obj7.children = items7;
        tmp23Result = closure_8(View, obj7);
        const tmp23 = closure_8;
        const tmp24 = View;
      }
      const items8 = [tmp23Result, ];
      const obj10 = { lineClamp: 1, style: tmp.nameplateText, variant: "text-sm/medium", color: "text-overlay-light", children: tmp8 };
      items8[1] = callback(channel(user[21]).Text, obj10);
      obj6.children = items8;
      items5[1] = closure_8(View, obj6);
      obj.children = items5;
      return closure_8(channel(user[14]).PressableOpacity, obj);
    }
  }
  return null;
});
const result2 = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/native/components/SpeakerTile.tsx");

export default memoResult;
export const SPEAKER_TILE_HEIGHTS = obj;
export const LANDSCAPE_MAX_TILE_WIDTH_FULL = result;
export const LANDSCAPE_MAX_TILE_WIDTH = result1;
export const useSpeakerTileStyles = styles;
export { getSizeStyle };
export { getTileWidthStyle };
