// Module ID: 15236
// Function ID: 115024
// Name: GuildChannelMessageRowHeader
// Dependencies: []

// Module 15236 (GuildChannelMessageRowHeader)
let Platform;
function GuildChannelMessageRowHeader(channel) {
  let isFavorite;
  let muted;
  channel = channel.channel;
  const arg1 = channel;
  ({ muted, isFavorite } = channel);
  const tmp = callback2();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = guild.getGuild(channel.guild_id);
    let rulesChannelId;
    if (null != guild) {
      rulesChannelId = guild.rulesChannelId;
    }
    return rulesChannelId;
  });
  let obj1 = arg1(dependencyMap[12]);
  obj = { isRulesChannel: stateFromStores === channel.id };
  const channelIcon = obj1.getChannelIcon(channel, obj);
  obj = { style: tmp.header };
  obj1 = { source: channelIcon, size: arg1(dependencyMap[14]).Icon.Sizes.REFRESH_SMALL_16, style: tmp.channelIcon };
  const items1 = [callback(arg1(dependencyMap[14]).Icon, obj1), , , , ];
  const obj2 = { encodingConfig: "Array", showRemove: "isArray", PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: "Text", children: importDefault(dependencyMap[13])(channel) };
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj2);
  if (muted) {
    const obj3 = { source: importDefault(dependencyMap[16]), size: arg1(dependencyMap[14]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = callback(arg1(dependencyMap[14]).Icon, obj3);
  }
  items1[2] = muted;
  if (isFavorite) {
    const obj4 = { source: importDefault(dependencyMap[17]), size: arg1(dependencyMap[14]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    isFavorite = callback(arg1(dependencyMap[14]).Icon, obj4);
  }
  items1[3] = isFavorite;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj5 = { type: importDefault(dependencyMap[18]).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = callback(importDefault(dependencyMap[18]), obj5);
    const tmp19 = importDefault(dependencyMap[18]);
  }
  items1[4] = isSystemDMResult;
  obj.children = items1;
  return closure_12(closure_4, obj);
}
function MessageRowIcon(guildId) {
  const message = guildId.message;
  const obj = { user: message.author, guildId: guildId.channel.guild_id, size: arg1(dependencyMap[14]).AvatarSizes.LARGE_48, avatarDecoration: message.author.avatarDecoration };
  return callback(arg1(dependencyMap[14]).Avatar, obj);
}
function PrivateChannelMessageRowLabel(message) {
  let timestamp;
  let timestampAccessibilityLabel;
  message = message.message;
  const arg1 = message;
  const channel = message.channel;
  const importDefault = channel;
  let muted = message.muted;
  const tmp = callback2();
  const items = [message.author];
  const items1 = [channel];
  const memo = importAllResult.useMemo(() => channel(closure_2[19]).getName(message.author), items);
  const effect = importAllResult.useEffect(() => {
    let isDMResult = channel.isDM();
    if (!isDMResult) {
      isDMResult = channel.isGroupDM();
    }
    if (isDMResult) {
      const recipients = channel.recipients;
      const item = recipients.forEach((arg0) => callback(closure_2[20]).getUser(arg0));
    }
  }, items1);
  let obj = arg1(dependencyMap[21]);
  const searchMessageTimestamp = obj.useSearchMessageTimestamp(message, channel);
  obj = { style: tmp.labelContainer };
  obj = { style: tmp.authorRow };
  ({ timestamp, timestampAccessibilityLabel } = searchMessageTimestamp);
  const items2 = [callback(arg1(dependencyMap[15]).Text, { children: memo }), , ];
  if (muted) {
    const obj1 = { source: importDefault(dependencyMap[16]), size: arg1(dependencyMap[14]).Icon.Sizes.EXTRA_SMALL, style: tmp.channelStatus };
    muted = callback(arg1(dependencyMap[14]).Icon, obj1);
  }
  items2[1] = muted;
  let isSystemDMResult = channel.isSystemDM();
  if (isSystemDMResult) {
    const obj2 = { type: importDefault(dependencyMap[18]).Types.SYSTEM_DM, verified: true };
    isSystemDMResult = callback(importDefault(dependencyMap[18]), obj2);
    const tmp17 = importDefault(dependencyMap[18]);
  }
  items2[2] = isSystemDMResult;
  obj.children = items2;
  const items3 = [closure_12(closure_4, obj), , , ];
  const obj3 = { -9223372036854775808: true, 0: "friendRequestsViewAll", 0: "custom", style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
  items3[1] = callback(arg1(dependencyMap[15]).Text, obj3);
  let tmp18 = null;
  if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
    const obj4 = { size: "xs", style: tmp.suppressNotificationsIcon };
    tmp18 = callback(arg1(dependencyMap[22]).BellZIcon, obj4);
  }
  items3[2] = tmp18;
  let tmp22 = null;
  if (message.isPoll()) {
    const obj5 = { style: tmp.pollBadge };
    tmp22 = callback(importDefault(dependencyMap[23]), obj5);
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
  let obj = arg1(dependencyMap[11]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  ({ colorString, colorStrings } = importDefault(dependencyMap[24])(message));
  if ("username" === stateFromStores) {
    if (null != colorString) {
      obj = { color: colorString };
    }
    let obj2 = arg1(dependencyMap[25]);
    const processColorStringsArray = obj2.useProcessColorStringsArray(colorStrings);
    let obj3 = arg1(dependencyMap[25]);
    const isRoleStyleAndRoleColorsEligibleForERC = obj3.useIsRoleStyleAndRoleColorsEligibleForERC(channel.guild_id, message.author.id, stateFromStores, processColorStringsArray);
    let obj4 = arg1(dependencyMap[21]);
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
      tmp19 = callback(arg1(dependencyMap[14]).RoleDot, obj2);
    }
    const items1 = [tmp19, ];
    obj3 = { style: {} };
    let tmp27;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp27 = processColorStringsArray;
    }
    obj3.gradientColors = tmp27;
    obj3.children = tmp4;
    items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
    obj1.children = items1;
    const items2 = [closure_12(closure_4, obj1), , , ];
    obj4 = { style: tmp.timestamp, accessibilityLabel: timestampAccessibilityLabel, children: timestamp };
    items2[1] = callback(arg1(dependencyMap[15]).Text, obj4);
    let tmp32 = null;
    if (message.hasFlag(MessageFlags.SUPPRESS_NOTIFICATIONS)) {
      const obj5 = { size: "xs", style: tmp.suppressNotificationsIcon };
      tmp32 = callback(arg1(dependencyMap[22]).BellZIcon, obj5);
    }
    items2[2] = tmp32;
    let tmp36 = null;
    if (message.isPoll()) {
      const obj6 = { style: tmp.pollBadge };
      tmp36 = callback(importDefault(dependencyMap[23]), obj6);
    }
    items2[3] = tmp36;
    obj.children = items2;
    return closure_12(closure_4, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
({ Platform, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const MessageFlags = arg1(dependencyMap[7]).MessageFlags;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
let obj = { channelIcon: { marginBottom: null, width: null } };
obj = { ExistingUserAgeGateScreens: null, POPULARITY: null, tintColor: importDefault(dependencyMap[10]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.channelStatus = obj;
obj.labelContainer = { alignItems: "custom", justifyContent: "showContactSyncCTA", skuId: "showContactSyncCTA", bannerAdjustment: "custom" };
obj.authorRow = {};
obj.timestamp = { marginLeft: 8 };
obj.header = { PREMIUM_TENURE_3_MONTH: null, parserState: null, onFinish: null };
obj.body = { alignItems: "flex-start" };
obj.pollBadge = { marginLeft: 8 };
obj.suppressNotificationsIcon = { marginLeft: 4 };
obj.spoilerText = { fontStyle: "italic" };
let closure_13 = arg1(dependencyMap[9]).createStyles(obj);
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function MessageRow(message) {
  let lineClamp;
  let messageSizeCacheRef;
  message = message.message;
  const arg1 = message;
  const onPress = message.onPress;
  const importDefault = onPress;
  let importAllResult;
  let stateFromStores1;
  let closure_5;
  ({ lineClamp, messageSizeCacheRef } = message);
  let body = callback2();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(message.channel_id));
  const dependencyMap = stateFromStores;
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  importAllResult = guild_id;
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let isFavoriteResult = null != guild_id;
    if (isFavoriteResult) {
      isFavoriteResult = favorite.isFavorite(message.channel_id);
    }
    return isFavoriteResult;
  });
  let obj2 = arg1(dependencyMap[11]);
  const items2 = [closure_9];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => channelMuted.isChannelMuted(guild_id, message.channel_id));
  closure_5 = stateFromStores2;
  let obj3 = arg1(dependencyMap[26]);
  const items3 = [, , ];
  ({ channel_id: arr4[0], id: arr4[1] } = message);
  items3[2] = onPress;
  const isChannelSpoilerGated = obj3.useIsChannelSpoilerGated(stateFromStores);
  let guild_id1;
  const callback = importAllResult.useCallback(() => {
    onPress({ channelId: message.channel_id, messageId: message.id });
  }, items3);
  if (null != stateFromStores) {
    guild_id1 = stateFromStores.guild_id;
  }
  const items4 = [guild_id1];
  const items5 = [stateFromStores, stateFromStores1, stateFromStores2];
  const memo = importAllResult.useMemo(() => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return null == guild_id ? closure_16 : closure_17;
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
      obj2 = { style: body.spoilerText };
      const intl = tmp18(tmp19[28]).intl;
      obj2.children = intl.string(tmp18(tmp19[28]).t.5uaI/7);
      let tmp17Result = tmp17(tmp18(tmp19[15]).Text, obj2);
    } else {
      obj3 = { message, channel: stateFromStores, muted: false, layout: tmp18(tmp19[30]).ChannelListLayoutTypes.COZY, color: "interactive-text-default", lineClamp, messageSizeCacheRef };
      tmp17Result = tmp17(tmp18(tmp19[29]).NativeMessageChannelRowPreview, obj3);
    }
    obj.subLabel = tmp17Result;
    obj.onPress = callback;
    body = body.body;
    obj.bodyStyle = body;
    callback(arg1(dependencyMap[27]).SearchListRow, obj);
    const tmp11 = callback;
  }
});
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/search/native/components/list/rows/MessageRow.tsx");

export default memoResult;
