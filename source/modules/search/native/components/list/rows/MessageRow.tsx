// Module ID: 15410
// Function ID: 117593
// Name: GuildChannelMessageRowHeader
// Dependencies: [31, 27, 4122, 1351, 1348, 1838, 4325, 653, 33, 4130, 689, 566, 4593, 4320, 1273, 4126, 10313, 9640, 8568, 3969, 7976, 15411, 14892, 15412, 4360, 7739, 5723, 15393, 1212, 10286, 3808, 2]

// Module 15410 (GuildChannelMessageRowHeader)
import importAllResult from "set";
import get_ActivityIndicator from "SearchListRow";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import { MessageFlags } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Platform;
let closure_11;
let closure_12;
let closure_4;
const require = arg1;
function GuildChannelMessageRowHeader(channel) {
  let isFavorite;
  let muted;
  channel = channel.channel;
  ({ muted, isFavorite } = channel);
  const tmp = callback2();
  let obj = channel(566);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_8.getGuild(channel.guild_id);
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  let obj1 = channel(4593);
  obj = { isRulesChannel: stateFromStores === channel.id };
  const channelIcon = obj1.getChannelIcon(channel, obj);
  obj = { style: tmp.header };
  obj1 = { source: channelIcon, size: channel(1273).Icon.Sizes.REFRESH_SMALL_16, style: tmp.channelIcon };
  const items1 = [callback(channel(1273).Icon, obj1), , , , ];
  const obj2 = { lineClamp: 1, variant: "text-sm/semibold", color: "interactive-text-default", children: importDefault(4320)(channel) };
  items1[1] = callback(channel(4126).Text, obj2);
  if (muted) {
    const obj3 = { source: importDefault(10313), size: channel(1273).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = callback(channel(1273).Icon, obj3);
  }
  items1[2] = muted;
  if (isFavorite) {
    const obj4 = { source: importDefault(9640), size: channel(1273).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    isFavorite = callback(channel(1273).Icon, obj4);
  }
  items1[3] = isFavorite;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj5 = { type: importDefault(8568).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = callback(importDefault(8568), obj5);
    const tmp19 = importDefault(8568);
  }
  items1[4] = isSystemDMResult;
  obj.children = items1;
  return closure_12(closure_4, obj);
}
function MessageRowIcon(guildId) {
  const message = guildId.message;
  const obj = { user: message.author, guildId: guildId.channel.guild_id, size: require(1273) /* Button */.AvatarSizes.LARGE_48, avatarDecoration: message.author.avatarDecoration };
  return callback(require(1273) /* Button */.Avatar, obj);
}
function PrivateChannelMessageRowLabel(message) {
  let timestamp;
  let timestampAccessibilityLabel;
  message = message.message;
  const channel = message.channel;
  let muted = message.muted;
  const tmp = callback2();
  const items = [message.author];
  const items1 = [channel];
  const memo = importAllResult.useMemo(() => channel(outer1_2[19]).getName(message.author), items);
  const effect = importAllResult.useEffect(() => {
    let isDMResult = channel.isDM();
    if (!isDMResult) {
      isDMResult = channel.isGroupDM();
    }
    if (isDMResult) {
      const recipients = channel.recipients;
      const item = recipients.forEach((arg0) => message(outer2_2[20]).getUser(arg0));
    }
  }, items1);
  let obj = message(15411);
  const searchMessageTimestamp = obj.useSearchMessageTimestamp(message, channel);
  obj = { style: tmp.labelContainer };
  obj = { style: tmp.authorRow };
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  const obj1 = { lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: memo };
  const items2 = [callback(message(4126).Text, obj1), , ];
  if (muted) {
    const obj2 = { source: channel(10313), size: message(1273).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = callback(message(1273).Icon, obj2);
  }
  items2[1] = muted;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj3 = { type: channel(8568).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = callback(channel(8568), obj3);
    const tmp17 = channel(8568);
  }
  items2[2] = isSystemDMResult;
  obj.children = items2;
  const items3 = [closure_12(closure_4, obj), , , ];
  const obj4 = { variant: "text-xs/medium", color: "interactive-text-active", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
  items3[1] = callback(message(4126).Text, obj4);
  let tmp18 = null;
  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const obj5 = { size: "xs", style: tmp.suppressNotificationsIcon };
    tmp18 = callback(message(14892).BellZIcon, obj5);
  }
  items3[2] = tmp18;
  let tmp22 = null;
  if (message.isPoll()) {
    const obj6 = { style: tmp.pollBadge };
    tmp22 = callback(channel(15412), obj6);
  }
  items3[3] = tmp22;
  obj.children = items3;
  return closure_12(closure_4, obj);
}
function GuildChannelMessageRowLabel(arg0) {
  let channel;
  let colorString;
  let colorStrings;
  let message;
  let timestamp;
  let timestampAccessibilityLabel;
  ({ message, channel } = arg0);
  const tmp = callback2();
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.roleStyle);
  ({ colorString, colorStrings } = importDefault(4360)(message));
  if ("username" === stateFromStores) {
    if (null != colorString) {
      obj = { color: colorString };
    }
    let obj2 = require(7739) /* processColorStringsInternal */;
    const processColorStringsArray = obj2.useProcessColorStringsArray(colorStrings);
    let obj3 = require(7739) /* processColorStringsInternal */;
    const isRoleStyleAndRoleColorsEligibleForERC = obj3.useIsRoleStyleAndRoleColorsEligibleForERC(channel.guild_id, message.author.id, stateFromStores, processColorStringsArray);
    let obj4 = require(15411) /* useSearchMessageTimestamp */;
    const searchMessageTimestamp = obj4.useSearchMessageTimestamp(message, channel);
    obj = { style: tmp.labelContainer };
    const obj1 = { style: tmp.authorRow };
    let tmp19 = "dot" === stateFromStores;
    ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
    if (tmp19) {
      tmp19 = null != colorString;
    }
    if (tmp19) {
      obj2 = { size: "small", color: colorString, colors: colorStrings };
      tmp19 = callback(require(1273) /* Button */.RoleDot, obj2);
    }
    const items1 = [tmp19, ];
    obj3 = { variant: "text-sm/semibold", color: "interactive-text-active", lineClamp: 1, style: {} };
    let tmp27;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp27 = processColorStringsArray;
    }
    obj3.gradientColors = tmp27;
    obj3.children = tmp4;
    items1[1] = callback(require(4126) /* Text */.Text, obj3);
    obj1.children = items1;
    const items2 = [closure_12(closure_4, obj1), , , ];
    obj4 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
    items2[1] = callback(require(4126) /* Text */.Text, obj4);
    let tmp32 = null;
    if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
      const obj5 = { size: "xs", style: tmp.suppressNotificationsIcon };
      tmp32 = callback(require(14892) /* BellZIcon */.BellZIcon, obj5);
    }
    items2[2] = tmp32;
    let tmp36 = null;
    if (message.isPoll()) {
      const obj6 = { style: tmp.pollBadge };
      tmp36 = callback(importDefault(15412), obj6);
    }
    items2[3] = tmp36;
    obj.children = items2;
    return closure_12(closure_4, obj);
  }
}
({ Platform, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let obj = { channelIcon: { marginRight: 5, alignSelf: "center" } };
obj = { marginLeft: 5, alignSelf: "center", tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
obj.channelStatus = obj;
obj.labelContainer = { flexDirection: "row", width: "100%", marginBottom: 2, alignItems: "center" };
obj.authorRow = { flexShrink: 1, minWidth: 0, flexDirection: "row" };
obj.timestamp = { marginLeft: 8 };
obj.header = { flexDirection: "row", marginRight: 16, marginBottom: 12 };
obj.body = { alignItems: "flex-start" };
obj.pollBadge = { marginLeft: 8 };
obj.suppressNotificationsIcon = { marginLeft: 4 };
obj.spoilerText = { fontStyle: "italic" };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function MessageRow(message) {
  let lineClamp;
  let messageSizeCacheRef;
  message = message.message;
  const onPress = message.onPress;
  let guild_id;
  let stateFromStores1;
  let stateFromStores2;
  ({ lineClamp, messageSizeCacheRef } = message);
  let body = callback2();
  let obj = message(stateFromStores[11]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(message.channel_id));
  guild_id = undefined;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let obj1 = message(stateFromStores[11]);
  const items1 = [closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let isFavoriteResult = null != guild_id;
    if (isFavoriteResult) {
      isFavoriteResult = outer1_6.isFavorite(message.channel_id);
    }
    return isFavoriteResult;
  });
  let obj2 = message(stateFromStores[11]);
  const items2 = [closure_9];
  stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_9.isChannelMuted(guild_id, message.channel_id));
  let obj3 = message(stateFromStores[26]);
  const items3 = [, , ];
  ({ channel_id: arr4[0], id: arr4[1] } = message);
  items3[2] = onPress;
  const isChannelSpoilerGated = obj3.useIsChannelSpoilerGated(stateFromStores);
  let guild_id1;
  const callback = guild_id.useCallback(() => {
    onPress({ channelId: message.channel_id, messageId: message.id });
  }, items3);
  if (null != stateFromStores) {
    guild_id1 = stateFromStores.guild_id;
  }
  const items4 = [guild_id1];
  const items5 = [stateFromStores, stateFromStores1, stateFromStores2];
  const memo = guild_id.useMemo(() => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return null == guild_id ? outer1_16 : outer1_17;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { header: tmp10 };
    obj = { message, channel: stateFromStores };
    obj.icon = callback(MessageRowIcon, obj);
    obj1 = { message, channel: stateFromStores, muted: stateFromStores2 };
    obj.label = callback(memo, obj1);
    if (isChannelSpoilerGated) {
      obj2 = { variant: "text-sm/normal", color: "text-muted", style: body.spoilerText };
      const intl = tmp18(tmp19[28]).intl;
      obj2.children = intl.string(tmp18(tmp19[28]).t["5uaI/7"]);
      let tmp17Result = tmp17(tmp18(tmp19[15]).Text, obj2);
    } else {
      obj3 = { message, channel: stateFromStores, muted: false, layout: tmp18(tmp19[30]).ChannelListLayoutTypes.COZY, color: "interactive-text-default", lineClamp, messageSizeCacheRef };
      tmp17Result = tmp17(tmp18(tmp19[29]).NativeMessageChannelRowPreview, obj3);
    }
    obj.subLabel = tmp17Result;
    obj.onPress = callback;
    body = body.body;
    obj.bodyStyle = body;
    callback(message(stateFromStores[27]).SearchListRow, obj);
    const tmp11 = callback;
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default memoResult;
