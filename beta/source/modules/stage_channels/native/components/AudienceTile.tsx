// Module ID: 9529
// Function ID: 9530
// Name: AudienceTile
// Dependencies: [19, 17, 2108, 21, 4836, 576, 4983, 1177, 8076, 1479, 504, 5737, 4988, 6073, 1115, 7841, 9510, 4685, 9530, 2]
// Exports: getTileWidthStyle

// Module 9529 (AudienceTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4983 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7841 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let channel;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let tmp2;
const native = tmp2(1177);
function RaisedHandIcon(rtsState) {
  let Icon;
  let PRIMARY_800;
  let obj2;
  let tmp5;
  rtsState = rtsState.rtsState;
  const tmp = styles();
  let activeBackground = rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (activeBackground) {
    PRIMARY_800 = unsafe_rawColors.WHITE;
    tmp5 = tmp4;
  } else {
    PRIMARY_800 = unsafe_rawColors.PRIMARY_800;
    tmp5 = tmp4;
  }
  const items = [tmp.raisedHandContainer, ];
  const tmp7 = View;
  if (activeBackground) {
    activeBackground = tmp.activeBackground;
  }
  items[1] = activeBackground;
  const obj = { style: items, children: hasOwnProperty(Icon, obj2) };
  obj2 = { style: tmp.raisedHand, source: tmp5(8076), color: PRIMARY_800 };
  Icon = native.Icon;
  return hasOwnProperty(tmp7, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { touchableContainer: { overflow: "visible" }, container: { alignItems: "center" }, avatarContainer: { position: "relative", padding: 8, paddingTop: 0, paddingBottom: 4 }, raisedHandContainer: size, activeBackground: obj2, raisedHand: { height: 13, width: 13, alignItems: "center", justifyContent: "center", resizeMode: "contain" }, nameplateContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, usernameText: obj3, faded: { opacity: 0.5 } };
size = { position: "absolute", top: -8, right: 0, height: 24, width: 24, alignItems: "center", justifyContent: "center", borderRadius: 12, borderWidth: 2, borderColor: nativeDefault.unsafe_rawColors.PRIMARY_800, backgroundColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj3 = { fontSize: 14, color: nativeDefault.colors.WHITE };
const styles = createStyles(obj);
const memoResult = react.memo((channel) => {
  let blocked;
  let ignored;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let rtsState;
  channel = channel.channel;
  const participant = channel.participant;
  const user = participant.user;
  ({ rtsState, blocked, ignored } = participant);
  const theme = channel.theme;
  let guildId;
  const tmp = styles();
  let tmp2 = user;
  const diff = user(guildId[9])().width - 46;
  guildId = channel.getGuildId();
  let obj = channel(guildId[10]);
  const items = [GuildMemberStore];
  const items1 = [guildId, user.id];
  let stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildId;
    const _Boolean = Boolean;
    if (tmp2) {
      const member = GuildMemberStore.getMember(tmp, user.id);
      let premiumSince;
      if (member != null) {
        premiumSince = member.premiumSince;
      }
      tmp2 = null != premiumSince;
    }
    return _Boolean(tmp2);
  }, items1);
  let obj2 = channel(guildId[11]);
  let result = obj2.isRequestedToSpeakAll(rtsState);
  const obj3 = user(guildId[12]);
  const name = obj3.getName(guildId, channel.id, user);
  const result1 = diff / 4;
  const obj4 = {
    accessibilityLabel: intl.formatToPlainString(channel(guildId[14]).t.QLMGhv, { name }),
    style: items2,
    accessibilityRole: "button",
    onPress() {
      const obj = StageChannelModalActionCreators;
      const obj2 = { userId: user.id, channelId: channel.id };
      obj.showUserProfile(obj2);
    },
    children: items4
  };
  const LegacyPressable = tmp6(tmp3[13]).LegacyPressable;
  intl = tmp6(tmp3[14]).intl;
  items2 = [, , ];
  ({ touchableContainer: arr3[0], container: arr3[1] } = tmp);
  items2[2] = { width: result1 };
  const obj5 = { style: tmp.avatarContainer, children: items3 };
  const obj6 = { user, guildId, size: channel(guildId[7]).AvatarSizes.LARGE, style: (blocked || ignored) && tmp.faded };
  const CutoutableAvatarImage = tmp6(tmp3[7]).CutoutableAvatarImage;
  items3 = [closure_5(CutoutableAvatarImage, obj6), ];
  if (result) {
    const obj7 = { rtsState };
    result = tmp14(RaisedHandIcon, obj7);
  }
  items3[1] = result;
  items4 = [closure_6(View, obj5), ];
  const obj8 = { style: items5, children: items6 };
  items5 = [tmp.nameplateContainer];
  if (blocked) {
    blocked = tmp14(tmp6(tmp3[16]).BlockedStatus, {});
  }
  items6 = [blocked, , , ];
  if (ignored) {
    ignored = tmp14(tmp6(tmp3[16]).IgnoredStatus, {});
  }
  items6[1] = ignored;
  const items7 = [tmp.usernameText, , ];
  let tmp16 = stateFromStores;
  const LegacyText = tmp6(tmp3[7]).LegacyText;
  if (!stateFromStores) {
    tmp16 = tmp10;
  }
  if (tmp16) {
    let num2 = 1;
    if (stateFromStores) {
      num2 = 1;
      if (blocked || ignored) {
        num2 = 2;
      }
    }
    tmp16 = { maxWidth: result1 - 18 * num2 };
    const obj9 = { maxWidth: result1 - 18 * num2 };
  }
  items7[1] = tmp16;
  let tmp17 = null != theme;
  if (tmp17) {
    const tmp6Result = channel(guildId[17]);
    const isThemeDarkResult = tmp6Result.isThemeDark(theme);
    const unsafe_rawColors = tmp2(tmp3[5]).unsafe_rawColors;
    tmp17 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860 };
    const obj10 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860 };
  }
  items7[2] = tmp17;
  items6[2] = closure_5(LegacyText, { style: items7, numberOfLines: 1, children: name });
  if (stateFromStores) {
    const obj11 = { source: tmp2(guildId[18]), size: channel(guildId[7]).Icon.Sizes.SMALL, color: tmp2(guildId[5]).unsafe_rawColors.GUILD_BOOSTING_PINK };
    const Icon = tmp6(tmp3[7]).Icon;
    stateFromStores = tmp14(Icon, obj11);
  }
  items6[3] = stateFromStores;
  items4[1] = closure_6(View, obj8);
  return closure_6(LegacyPressable, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceTile.tsx");

export default memoResult;
export const useAudienceTileStyles = styles;
export const getTileWidthStyle = function getTileWidthStyle(arg0) {
  return (arg0 - 46) / 4;
};
