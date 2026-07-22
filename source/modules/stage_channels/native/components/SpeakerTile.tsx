// Module ID: 10764
// Function ID: 83674
// Name: getSizeStyle
// Dependencies: []

// Module 10764 (getSizeStyle)
function getSizeStyle(size, speakerTileStyles) {
  if (speakerTileStyles(dependencyMap[8]).StageTileSize.FULL === size) {
    return speakerTileStyles.full;
  } else if (speakerTileStyles(dependencyMap[8]).StageTileSize.HALF === size) {
    return speakerTileStyles.half;
  } else {
    return speakerTileStyles.third;
  }
}
function getTileWidthStyle(arg0, arg1, arg2) {
  const StageTileSize = arg1(dependencyMap[8]).StageTileSize;
  if (arg2) {
    let obj = { maxWidth: arg0 === StageTileSize.FULL ? result : result1 };
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
  if (size === imageBackground(dependencyMap[8]).StageTileSize.THIRD) {
    const items = [imageBackground.imageBackground, ];
    const obj = { paddingBottom: 12 };
    items[1] = obj;
    let items1 = items;
  } else {
    items1 = [imageBackground.imageBackground];
  }
  return items1;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const ParticipantTypes = arg1(dependencyMap[3]).ParticipantTypes;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
const result1 = obj.HALF * 1.7777777777777777;
let obj2 = arg1(dependencyMap[5]);
obj = { container: { "Bool(true)": "BG_GRADIENT_CITRUS_SHERBERT_1", "Bool(true)": 31.1, "Bool(true)": "BG_GRADIENT_CITRUS_SHERBERT_2", "Bool(true)": 67.09 }, full: obj1, half: obj2, third: obj3 };
obj2 = { height: obj.HALF };
const obj1 = { height: obj.FULL };
const obj3 = { height: obj.THIRD };
const tmp2 = arg1(dependencyMap[4]);
obj.avatarContainer = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.imageBackground = { "Bool(true)": false, "Bool(false)": "auto", "Bool(false)": "none", "Bool(false)": true };
const obj5 = { 1012087393: "/assets/images/native/icons", -880776023: 32, -1420401754: 32, -1347553197: null, 1724085899: "4231d943574087a463ee922a711ec0bb", -1604561349: "ic_mobile_device", 140796500: "png", 1401660095: true, -1015722160: "/assets/images/native/icons", 979439893: 24 };
const obj4 = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj5.backgroundColor = arg1(dependencyMap[7]).hexWithOpacity(importDefault(dependencyMap[6]).unsafe_rawColors.BLACK, 0.3);
obj.nameplateContainer = obj5;
const obj10 = arg1(dependencyMap[7]);
obj.nameplateText = { color: importDefault(dependencyMap[6]).colors.WHITE };
const obj7 = { -1703345573: null, 1381164898: null, -1649041997: null, 1646846801: null, 1901158891: null, 782582495: null, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.restricted = obj7;
const obj6 = { color: importDefault(dependencyMap[6]).colors.WHITE };
obj.blocked = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
const styles = obj2.createStyles(obj);
const obj8 = { backgroundColor: importDefault(dependencyMap[6]).colors.WHITE };
const memoResult = importAllResult.memo((channel) => {
  let blocked;
  let ignored;
  channel = channel.channel;
  const arg1 = channel;
  const participant = channel.participant;
  const importDefault = participant;
  const size = channel.size;
  const tmp = styles();
  let obj = arg1(dependencyMap[10]);
  const user = participant.user;
  const dependencyMap = user;
  ({ blocked, ignored } = participant);
  const isScreenLandscape = obj.useIsScreenLandscape();
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_5];
  const items1 = [channel.id, participant.id];
  const stateFromStores = obj1.useStateFromStores(items, () => participant.getParticipant(channel.id, participant.id), items1);
  const items2 = [channel.id, user.id];
  if (null != stateFromStores) {
    if (stateFromStores.type === ParticipantTypes.USER) {
      let tmp23Result = blocked;
      if (!blocked) {
        tmp23Result = ignored;
      }
      const tmp8 = importDefault(dependencyMap[13])(channel, stateFromStores);
      obj = {};
      const intl = arg1(dependencyMap[15]).intl;
      obj = { name: tmp8 };
      obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[15]).t.ODlyvk, obj);
      obj.accessibilityRole = "button";
      const items3 = [tmp.container, getSizeStyle(size, tmp), getTileWidthStyle(size, importDefault(dependencyMap[9])().width, isScreenLandscape)];
      obj.style = items3;
      obj.onPress = tmp4;
      obj1 = { style: tmp.avatarContainer };
      const obj2 = { style: getImageBackgroundStyle(size, tmp), url: user.getAvatarURL(channel.guild_id, 64), speaking: stateFromStores.speaking, animate: true, size: arg1(dependencyMap[17]).AvatarSizes.XLARGE, isStageCall: true };
      let tmp17 = tmp23Result;
      if (tmp23Result) {
        const obj3 = { opacity: 0.5 };
        tmp17 = obj3;
      }
      obj2.avatarStyle = tmp17;
      const items4 = [callback(importDefault(dependencyMap[16]), obj2), , ];
      const obj4 = { userId: user.id, channelId: channel.id };
      items4[1] = callback(arg1(dependencyMap[18]).VoiceStatus, obj4);
      const obj5 = { userId: user.id, channelId: channel.id };
      items4[2] = callback(arg1(dependencyMap[18]).ModeratorStatus, obj5);
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
          const obj8 = { source: importDefault(dependencyMap[19]), size: arg1(dependencyMap[17]).Icon.Sizes.EXTRA_SMALL, color: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400 };
          blocked = callback(arg1(dependencyMap[17]).Icon, obj8);
        }
        const items7 = [blocked, ];
        if (ignored) {
          const obj9 = { source: importDefault(dependencyMap[20]), size: arg1(dependencyMap[17]).Icon.Sizes.EXTRA_SMALL };
          ignored = callback(arg1(dependencyMap[17]).Icon, obj9);
        }
        items7[1] = ignored;
        obj7.children = items7;
        tmp23Result = closure_8(View, obj7);
        const tmp23 = closure_8;
        const tmp24 = View;
      }
      const items8 = [tmp23Result, ];
      const obj10 = { -9223372036854775808: "w", 9223372036854775807: "Array", 9223372036854775807: "isArray", 9223372036854775807: "accessibilityRole", style: tmp.nameplateText, children: tmp8 };
      items8[1] = callback(arg1(dependencyMap[21]).Text, obj10);
      obj6.children = items8;
      items5[1] = closure_8(View, obj6);
      obj.children = items5;
      return closure_8(arg1(dependencyMap[14]).PressableOpacity, obj);
    }
  }
  return null;
});
const result2 = arg1(dependencyMap[22]).fileFinishedImporting("modules/stage_channels/native/components/SpeakerTile.tsx");

export default memoResult;
export const SPEAKER_TILE_HEIGHTS = obj;
export const LANDSCAPE_MAX_TILE_WIDTH_FULL = result;
export const LANDSCAPE_MAX_TILE_WIDTH = result1;
export const useSpeakerTileStyles = styles;
export { getSizeStyle };
export { getTileWidthStyle };
