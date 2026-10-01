// Module ID: 9506
// Function ID: 9507
// Name: SpeakerTile
// Dependencies: [19, 17, 4852, 4857, 21, 4836, 576, 4683, 9507, 1479, 5438, 504, 7841, 8902, 9508, 5435, 1115, 7694, 1177, 9510, 9512, 6388, 4832, 2]
// Exports: getSizeStyle, getTileWidthStyle

// Module 9506 (SpeakerTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CallConstants from "CallConstants" /* 4857 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7841 */;
import StageTileTypes from "StageTileTypes" /* 9507 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size_mod from "module_2" /* 2 */;

let channel;

let ColorUtils;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
const View = react_native.View;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { FULL: 212, [212]: "FULL", HALF: 112, [112]: "HALF", THIRD: 112, [112]: "THIRD" };
const result = obj.FULL * 1.7777777777777777;
let c9 = result;
const result1 = obj.HALF * 1.7777777777777777;
let createStyles = createStyles_mod;
let obj2 = { container: { marginHorizontal: 4, marginVertical: 4, alignItems: "center", flex: 1 }, full: { height: obj.FULL }, half: { height: obj.HALF }, third: { height: obj.THIRD }, avatarContainer: obj3, imageBackground: { flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "stretch" }, nameplateContainer: obj4, nameplateText: obj5, restricted: size, blocked: obj6 };
obj3 = { flex: 1, width: "100%", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj4 = { position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "center", bottom: 4, marginHorizontal: 4, paddingVertical: 4, paddingHorizontal: 8, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.3), borderRadius: 6 };
ColorUtils = ColorUtils_mod;
obj5 = { color: nativeDefault.colors.WHITE };
size = { borderRadius: nativeDefault.radii.sm, width: 16, height: 16, justifyContent: "center", alignItems: "center", marginEnd: 4 };
obj6 = { backgroundColor: nativeDefault.colors.WHITE };
const styles = createStyles(obj2);
const memoResult = react.memo((channel) => {
  let blocked;
  let ignored;
  let intl;
  let items10;
  let items3;
  let items6;
  let items7;
  let items9;
  let obj4;
  channel = channel.channel;
  const participant = channel.participant;
  size = channel.size;
  let user;
  const tmp = styles();
  const width = participant(user[9])().width;
  let obj = channel(user[10]);
  user = participant.user;
  ({ blocked, ignored } = participant);
  const isScreenLandscape = obj.useIsScreenLandscape();
  let obj2 = channel(user[11]);
  const items = [ChannelRTCStore];
  const items1 = [channel.id, participant.id];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelRTCStore.getParticipant(channel.id, participant.id), items1);
  const items2 = [channel.id, user.id];
  const callback = react.useCallback(() => {
    const obj = StageChannelModalActionCreators;
    const obj2 = { userId: user.id, channelId: channel.id };
    obj.showUserProfile(obj2);
  }, items2);
  channel(user[13]);
  if (null != stateFromStores) {
    if (stateFromStores.type === ParticipantTypes.USER) {
      let full;
      let obj7;
      let items5;
      let tmp12Result = blocked || ignored;
      const tmp11 = participant(user[14])(channel, stateFromStores);
      const obj3 = { accessibilityLabel: intl.formatToPlainString(channel(user[16]).t.ODlyvk, obj4), accessibilityRole: "button", style: items3, onPress: callback, children: items7 };
      const PressableOpacity = tmp4(tmp3[15]).PressableOpacity;
      intl = tmp4(tmp3[16]).intl;
      items3 = [tmp.container, , ];
      obj4 = { name: tmp11 };
      if (channel(user[8]).StageTileSize.FULL === size) {
        full = tmp.full;
      } else {
        full = tmp4(tmp3[8]).StageTileSize.HALF === size ? tmp.half : tmp.third;
      }
      items3[1] = full;
      const StageTileSize = tmp4(tmp3[8]).StageTileSize;
      if (isScreenLandscape) {
        obj7 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
        const obj5 = { maxWidth: size === StageTileSize.FULL ? closure_9 : result1 };
      } else if (size === StageTileSize.THIRD) {
        obj7 = { maxWidth: (width - 36) / 3 };
        const obj6 = { maxWidth: (width - 36) / 3 };
      } else {
        obj7 = { flex: 1 };
      }
      items3[2] = obj7;
      const obj8 = { style: tmp.avatarContainer, children: items6 };
      const tmp2Result = participant(user[17]);
      if (size === channel(user[8]).StageTileSize.THIRD) {
        const items4 = [tmp.imageBackground, { paddingBottom: 12 }];
        items5 = items4;
      } else {
        items5 = [tmp.imageBackground];
      }
      const obj9 = { style: items5, url: user.getAvatarURL(channel.guild_id, 64), speaking: stateFromStores.speaking, speakingColor: tmp9, animate: true, size: channel(user[18]).AvatarSizes.XLARGE, isStageCall: true, avatarStyle: tmp12Result && { opacity: 0.5 } };
      items6 = [closure_7(tmp2Result, obj9), , ];
      const obj10 = { userId: user.id, channelId: channel.id };
      items6[1] = closure_7(channel(user[19]).VoiceStatus, obj10);
      const obj11 = { userId: user.id, channelId: channel.id };
      items6[2] = closure_7(channel(user[19]).ModeratorStatus, obj11);
      items7 = [closure_8(View, obj8), ];
      const obj12 = { style: tmp.nameplateContainer, children: items10 };
      if (tmp12Result) {
        const items8 = [tmp.restricted, ];
        let blocked1 = null;
        if (blocked) {
          blocked1 = tmp.blocked;
        }
        const obj13 = { style: items8, children: items9 };
        items8[1] = blocked1;
        if (blocked) {
          const obj14 = { source: participant(user[20]), size: channel(user[18]).Icon.Sizes.EXTRA_SMALL, color: participant(user[6]).unsafe_rawColors.RED_400 };
          const Icon = tmp4(tmp3[18]).Icon;
          blocked = tmp14(Icon, obj14);
        }
        items9 = [blocked, ];
        if (ignored) {
          const obj15 = { source: participant(user[21]), size: channel(user[18]).Icon.Sizes.EXTRA_SMALL };
          const Icon2 = tmp4(tmp3[18]).Icon;
          ignored = tmp14(Icon2, obj15);
        }
        items9[1] = ignored;
        tmp12Result = tmp12(tmp13, obj13);
      }
      items10 = [tmp12Result, ];
      const obj16 = { lineClamp: 1, style: tmp.nameplateText, variant: "text-sm/medium", color: "text-overlay-light", children: tmp11 };
      items10[1] = closure_7(channel(user[22]).Text, obj16);
      items7[1] = closure_8(View, obj12);
      return closure_8(PressableOpacity, obj3);
    }
  }
  return null;
});
size = size_mod;
const result2 = size.fileFinishedImporting("modules/stage_channels/native/components/SpeakerTile.tsx");

export default memoResult;
export const SPEAKER_TILE_HEIGHTS = obj;
export const LANDSCAPE_MAX_TILE_WIDTH_FULL = result;
export const LANDSCAPE_MAX_TILE_WIDTH = result1;
export const useSpeakerTileStyles = styles;
export const getSizeStyle = function getSizeStyle(size, speakerTileStyles) {
  if (StageTileTypes.StageTileSize.FULL === size) {
    return speakerTileStyles.full;
  } else if (StageTileTypes.StageTileSize.HALF === size) {
    return speakerTileStyles.half;
  } else {
    return speakerTileStyles.third;
  }
};
export const getTileWidthStyle = function getTileWidthStyle(arg0, arg1, arg2) {
  let obj;
  const StageTileSize = StageTileTypes.StageTileSize;
  const tmp = arg2;
  if (tmp) {
    obj = { maxWidth: arg0 === StageTileSize.FULL ? c9 : result1 };
    const obj2 = { maxWidth: arg0 === StageTileSize.FULL ? c9 : result1 };
  } else if (arg0 === StageTileSize.THIRD) {
    obj = { maxWidth: (arg1 - 36) / 3 };
    const obj3 = { maxWidth: (arg1 - 36) / 3 };
  } else {
    obj = { flex: 1 };
  }
  return obj;
};
