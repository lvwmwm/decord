// Module ID: 12026
// Function ID: 12027
// Name: SpeakerTile
// Dependencies: [19, 17, 6843, 5681, 21, 5014, 575, 5011, 12027, 1491, 8773, 504, 7950, 12028, 6980, 1113, 8821, 1187, 12030, 12032, 7136, 5624, 2]
// Exports: getSizeStyle, getTileWidthStyle

// Module 12026 (SpeakerTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CallConstants from "CallConstants" /* 5681 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7950 */;
import StageTileTypes from "StageTileTypes" /* 12027 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import ColorUtils_mod from "ColorUtils" /* 5011 */;
import size_mod from "module_2" /* 2 */;

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
const memoResult = react.memo(function SpeakerTile(channel) {
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
  if (null != stateFromStores) {
    if (stateFromStores.type === ParticipantTypes.USER) {
      let full;
      let obj7;
      let items5;
      let tmp10Result = blocked || ignored;
      const tmp9 = participant(user[13])(channel, stateFromStores);
      const obj3 = { accessibilityLabel: intl.formatToPlainString(channel(user[15]).t.ODlyvk, obj4), accessibilityRole: "button", style: items3, onPress: tmp7, children: items7 };
      const PressableOpacity = tmp4(tmp3[14]).PressableOpacity;
      intl = tmp4(tmp3[15]).intl;
      items3 = [tmp.container, , ];
      obj4 = { name: tmp9 };
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
      const tmp2Result = participant(user[16]);
      if (size === channel(user[8]).StageTileSize.THIRD) {
        const items4 = [tmp.imageBackground, { paddingBottom: 12 }];
        items5 = items4;
      } else {
        items5 = [tmp.imageBackground];
      }
      const obj9 = { style: items5, url: user.getAvatarURL(channel.guild_id, 64), speaking: stateFromStores.speaking, animate: true, size: channel(user[17]).AvatarSizes.XLARGE, isStageCall: true, avatarStyle: tmp10Result && { opacity: 0.5 } };
      items6 = [closure_7(tmp2Result, obj9), , ];
      const obj10 = { userId: user.id, channelId: channel.id };
      items6[1] = closure_7(channel(user[18]).VoiceStatus, obj10);
      const obj11 = { userId: user.id, channelId: channel.id };
      items6[2] = closure_7(channel(user[18]).ModeratorStatus, obj11);
      items7 = [closure_8(View, obj8), ];
      const obj12 = { style: tmp.nameplateContainer, children: items10 };
      if (tmp10Result) {
        const items8 = [tmp.restricted, ];
        let blocked1 = null;
        if (blocked) {
          blocked1 = tmp.blocked;
        }
        const obj13 = { style: items8, children: items9 };
        items8[1] = blocked1;
        if (blocked) {
          const obj14 = { source: participant(user[19]), size: channel(user[17]).Icon.Sizes.EXTRA_SMALL, color: participant(user[6]).unsafe_rawColors.RED_400 };
          const Icon = tmp4(tmp3[17]).Icon;
          blocked = tmp12(Icon, obj14);
        }
        items9 = [blocked, ];
        if (ignored) {
          const obj15 = { source: participant(user[20]), size: channel(user[17]).Icon.Sizes.EXTRA_SMALL };
          const Icon2 = tmp4(tmp3[17]).Icon;
          ignored = tmp12(Icon2, obj15);
        }
        items9[1] = ignored;
        tmp10Result = tmp10(tmp11, obj13);
      }
      items10 = [tmp10Result, ];
      const obj16 = { lineClamp: 1, style: tmp.nameplateText, variant: "text-sm/medium", color: "text-overlay-light", children: tmp9 };
      items10[1] = closure_7(channel(user[21]).Text, obj16);
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
export function getSizeStyle(size, speakerTileStyles) {
  if (StageTileTypes.StageTileSize.FULL === size) {
    return speakerTileStyles.full;
  } else if (StageTileTypes.StageTileSize.HALF === size) {
    return speakerTileStyles.half;
  } else {
    return speakerTileStyles.third;
  }
}
export function getTileWidthStyle(arg0, arg1, arg2) {
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
}
