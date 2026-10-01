// Module ID: 16490
// Function ID: 16491
// Name: MessageRow
// Dependencies: [19, 17, 4825, 2048, 2045, 2067, 5017, 1074, 21, 4836, 576, 504, 5335, 4989, 1177, 4832, 9603, 9853, 8741, 4678, 7626, 16491, 12865, 16492, 5083, 7403, 6747, 16468, 1115, 9568, 7304, 2]

// Module 16490 (MessageRow)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import useMessageAuthorDefault from "useMessageAuthor" /* 5083 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7304 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7403 */;
import BotTagDefault from "BotTag" /* 8741 */;
import AssetRegistryDefault from "AssetRegistry" /* 9603 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9853 */;
import SearchListRow2 from "SearchListRow" /* 16468 */;
import useSearchMessageTimestamp from "useSearchMessageTimestamp" /* 16491 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import FavoriteStore from "FavoriteStore" /* 2048 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let Platform;
let closure_12;
let closure_4;
let obj2;
let tmp5;
let unpackModuleId;
const PollBadgeDefault = tmp5(16492);
function GuildChannelMessageRowHeader(channel) {
  let isFavorite;
  let items1;
  let muted;
  channel = channel.channel;
  ({ muted, isFavorite } = channel);
  const tmp = closure_13();
  const items = [GuildStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(channel.guild_id);
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  const obj2 = channel(5335);
  const obj3 = { isRulesChannel: stateFromStores === channel.id };
  const channelIcon = obj2.getChannelIcon(channel, obj3);
  const obj4 = { style: tmp.header, children: items1 };
  const obj5 = { source: channelIcon, size: channel(1177).Icon.Sizes.REFRESH_SMALL_16, style: tmp.channelIcon };
  const tmp7 = useChannelNameDefault(channel);
  const Icon = channel(1177).Icon;
  items1 = [closure_11(Icon, obj5), closure_11(channel(4832).Text, { lineClamp: 1, variant: "text-sm/semibold", color: "interactive-text-default", children: tmp7 }), , , ];
  const tmp8 = closure_12;
  const tmp9 = closure_4;
  if (muted) {
    const obj6 = { source: AssetRegistryDefault, size: channel(1177).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    const Icon2 = tmp2(1177).Icon;
    muted = tmp10(Icon2, obj6);
  }
  items1[2] = muted;
  if (isFavorite) {
    const obj7 = { source: AssetRegistryDefault2, size: channel(1177).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    const Icon3 = tmp2(1177).Icon;
    isFavorite = tmp10(Icon3, obj7);
  }
  items1[3] = isFavorite;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj8 = { type: BotTagDefault.Types.SYSTEM_DM, verified: true };
    const tmp6Result = BotTagDefault;
    isSystemDMResult = tmp10(tmp6Result, obj8);
  }
  items1[4] = isSystemDMResult;
  return tmp8(tmp9, obj4);
}
function MessageRowIcon(guildId) {
  const message = guildId.message;
  const obj = { user: message.author, guildId: guildId.channel.guild_id, size: native.AvatarSizes.LARGE_48, avatarDecoration: message.author.avatarDecoration };
  const Avatar = native.Avatar;
  return unpackModuleId(Avatar, obj);
}
function PrivateChannelMessageRowLabel(message) {
  let items2;
  let items3;
  let timestamp;
  let timestampAccessibilityLabel;
  message = message.message;
  const channel = message.channel;
  let muted = message.muted;
  let tmp = closure_13();
  const items = [message.author];
  const items1 = [channel];
  const memo = react.useMemo(() => {
    const obj = UserUtilsDefault;
    return obj.getName(message.author);
  }, items);
  const effect = react.useEffect(() => {
    let obj = channel;
    const tmp = channel.isDM() || obj.isGroupDM();
    if (tmp) {
      const recipients = obj.recipients;
      const item = recipients.forEach((item) => {
        const obj = message(closure_1_2[20]);
        return obj.getUser(item);
      });
    }
  }, items1);
  let obj = message(16491);
  const searchMessageTimestamp = obj.useSearchMessageTimestamp(message, channel);
  const obj2 = { style: tmp.labelContainer, children: items3 };
  const obj3 = { style: tmp.authorRow, children: items2 };
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  items2 = [closure_11(message(4832).Text, { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: memo }), , ];
  if (muted) {
    const obj4 = { source: channel(9603), size: message(1177).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    const Icon = tmp4(1177).Icon;
    muted = tmp9(Icon, obj4);
  }
  items2[1] = muted;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj5 = { type: channel(8741).Types.SYSTEM_DM, verified: true };
    const tmp13 = channel(8741);
    isSystemDMResult = tmp9(tmp13, obj5);
  }
  items2[2] = isSystemDMResult;
  items3 = [closure_12(closure_4, obj3), , , ];
  const obj6 = { variant: "text-xs/medium", color: "interactive-text-active", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
  items3[1] = closure_11(message(4832).Text, obj6);
  let tmp9Result = null;
  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const obj7 = { size: "xs", style: tmp.suppressNotificationsIcon };
    tmp9Result = tmp9(tmp4(12865).BellZIcon, obj7);
  }
  items3[2] = tmp9Result;
  let tmp9Result2 = null;
  if (message.isPoll()) {
    const obj8 = { style: tmp.pollBadge };
    tmp9Result2 = tmp9(channel(16492), obj8);
  }
  items3[3] = tmp9Result2;
  return closure_12(closure_4, obj2);
}
function GuildChannelMessageRowLabel(arg0) {
  let channel;
  let colorString;
  let colorStrings;
  let items1;
  let items2;
  let message;
  let roleStyle;
  let timestamp;
  let timestampAccessibilityLabel;
  let tmp22;
  ({ message, channel } = arg0);
  const tmp = closure_13();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ colorString, colorStrings } = useMessageAuthorDefault(message));
  useMessageAuthorDefault(message);
  if ("username" === stateFromStores) {
    const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
    const tmp2Result3 = enhanced_role_colors_EnhancedRoleColorUtils;
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result3.useIsRoleStyleAndRoleColorsEligibleForERC(channel.guild_id, message.author.id, stateFromStores, processColorStringsArray);
    const tmp2Result4 = useSearchMessageTimestamp;
    const searchMessageTimestamp = tmp2Result4.useSearchMessageTimestamp(message, channel);
    let tmp18 = "dot" === stateFromStores;
    const obj3 = { style: tmp.labelContainer, children: items2 };
    const obj4 = { style: tmp.authorRow, children: items1 };
    ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
    if (tmp18) {
      tmp18 = null != colorString;
    }
    if (tmp18) {
      const obj5 = { size: "small", color: colorString, colors: colorStrings };
      tmp18 = unpackModuleId(tmp2(1177).RoleDot, obj5);
    }
    items1 = [tmp18, ];
    const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", lineClamp: 1, style: {}, gradientColors: tmp22, children: tmp7 };
    tmp22 = undefined;
    const Text = tmp2(4832).Text;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp22 = processColorStringsArray;
    }
    items1[1] = unpackModuleId(Text, obj6);
    items2 = [closure_12(React3, obj4), , , ];
    const obj7 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
    items2[1] = unpackModuleId(Text_Text.Text, obj7);
    let tmp21Result = null;
    if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
      const obj8 = { size: "xs", style: tmp.suppressNotificationsIcon };
      tmp21Result = tmp21(tmp2(12865).BellZIcon, obj8);
    }
    items2[2] = tmp21Result;
    let tmp21Result2 = null;
    if (message.isPoll()) {
      const obj9 = { style: tmp.pollBadge };
      tmp21Result2 = tmp21(PollBadgeDefault, obj9);
    }
    items2[3] = tmp21Result2;
    return closure_12(React3, obj3);
  }
}
function MessageRowContent(message) {
  let channel;
  let header;
  let intl;
  let isSpoilerHidden;
  let lineClamp;
  let messageSizeCacheRef;
  let muted;
  let onPress;
  let tmp3;
  let tmp4Result;
  message = message.message;
  ({ channel, onPress } = message);
  ({ muted, isSpoilerHidden, header, lineClamp, messageSizeCacheRef } = message);
  const tmp = closure_13();
  const items = [, , ];
  ({ channel_id: arr[0], id: arr[1] } = message);
  items[2] = onPress;
  const callback = react.useCallback(() => {
    const obj = { channelId: message.channel_id, messageId: message.id };
    onPress(obj);
  }, items);
  let obj = { header, icon: unpackModuleId(MessageRowIcon, { message, channel }), label: unpackModuleId(tmp3, { message, channel, muted }), subLabel: tmp4Result, onPress: callback, bodyStyle: tmp.body };
  tmp3 = null == channel.guild_id ? PrivateChannelMessageRowLabel : GuildChannelMessageRowLabel;
  const SearchListRow = SearchListRow2.SearchListRow;
  if (isSpoilerHidden) {
    const obj2 = { variant: "text-sm/normal", color: "text-muted", style: tmp.spoilerText, children: intl.string(intl2.t["5uaI/7"]) };
    const Text = tmp5(4832).Text;
    intl = tmp5(1115).intl;
    tmp4Result = tmp4(Text, obj2);
  } else {
    const obj3 = { message, channel, muted: false, layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, color: "interactive-text-default", lineClamp, messageSizeCacheRef };
    const NativeMessageChannelRowPreview = tmp5(9568).NativeMessageChannelRowPreview;
    tmp4Result = tmp4(NativeMessageChannelRowPreview, obj3);
  }
  return unpackModuleId(SearchListRow, obj);
}
({ Platform, View: closure_4 } = react_native);
const MessageFlags = Constants.MessageFlags;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { channelIcon: { marginRight: 5, alignSelf: "center" }, channelStatus: obj2, labelContainer: { flexDirection: "row", width: "100%", marginBottom: 2, alignItems: "center" }, authorRow: { flexShrink: 1, minWidth: 0, flexDirection: "row" }, timestamp: { marginLeft: 8 }, header: { flexDirection: "row", marginRight: 16, marginBottom: 12 }, body: { alignItems: "flex-start" }, pollBadge: { marginLeft: 8 }, suppressNotificationsIcon: { marginLeft: 4 }, spoilerText: { fontStyle: "italic" } };
obj2 = { marginLeft: 5, alignSelf: "center", tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_13 = createStyles.createStyles(obj);
const memoResult = react.memo((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0 }));
  const items = [ChannelStore];
  const obj = message(504);
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(message.channel_id));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [FavoriteStore];
  const tmp2Result = message(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const isFavoriteResult = null != guild_id && favorite.isFavorite(message.channel_id);
    return isFavoriteResult;
  });
  const items2 = [UserGuildSettingsStore];
  const tmp2Result3 = message(504);
  const stateFromStores2 = tmp2Result3.useStateFromStores(items2, () => channelMuted.isChannelMuted(guild_id, message.channel_id));
  message(6747);
  let tmp10 = null;
  if (null != stateFromStores) {
    const obj2 = { message, channel: stateFromStores, muted: stateFromStores2, isSpoilerHidden: tmp9, header: null };
    const merged1 = Object.assign(merged);
    tmp10 = closure_11(MessageRowContent, obj2);
  }
  return tmp10;
});
const memoResult1 = react.memo(function MessageRow(message) {
  let channel;
  let channelMuted;
  let favorite;
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0 }));
  let stateFromStores;
  let stateFromStores2;
  let stateFromStores1;
  let tmp3 = stateFromStores1;
  let obj = stateFromStores(stateFromStores1[11]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(message.channel_id));
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items1 = [FavoriteStore];
  const tmp2Result = stateFromStores(tmp3[11]);
  stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const isFavoriteResult = null != guild_id && favorite.isFavorite(message.channel_id);
    return isFavoriteResult;
  });
  const items2 = [UserGuildSettingsStore];
  const tmp2Result3 = stateFromStores(tmp3[11]);
  stateFromStores2 = tmp2Result3.useStateFromStores(items2, () => channelMuted.isChannelMuted(guild_id, message.channel_id));
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2];
  const tmp2Result4 = stateFromStores(tmp3[26]);
  const isChannelSpoilerGated = tmp2Result4.useIsChannelSpoilerGated(stateFromStores);
  let tmp10 = null;
  if (null != stateFromStores) {
    const obj2 = { message, channel: stateFromStores, muted: stateFromStores2, isSpoilerHidden: isChannelSpoilerGated, header: tmp9 };
    const merged1 = Object.assign(merged);
    tmp10 = closure_11(MessageRowContent, obj2);
  }
  return tmp10;
});
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default memoResult1;
export const HeaderlessMessageRow = memoResult;
