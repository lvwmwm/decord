// Module ID: 7673
// Function ID: 61314
// Name: identityHook
// Dependencies: []
// Exports: getRoleSubscriptionPurchaseStickerCTA, getRoleSubscriptionPurchaseSystemMessageAstFormattedContent, getRoleSubscriptionPurchaseSystemMessageContentMobile, getRoleSubscriptionPurchaseSystemMessageEventProperties, getRoleSubscriptionPurchaseSystemMessageFormattedContent, isEligibleForRoleSubscriptionPurchaseSystemMessageSettings, pickRoleSubscriptionPurchaseSticker, trackRoleSubscriptionPurchaseMessageTierClick

// Module 7673 (identityHook)
function identityHook(arg0) {
  return arg0;
}
function getRoleSubscriptionPurchaseContentCommonData(guildId, roleSubscriptionData) {
  let prop;
  const guild = guild.getGuild(guildId);
  if (null != roleSubscriptionData) {
    prop = roleSubscriptionData.total_months_subscribed;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  const obj = { guild, totalMonthsSubscribed: num, showWithDuration: num > 0 };
  let is_renewal;
  if (null != roleSubscriptionData) {
    is_renewal = roleSubscriptionData.is_renewal;
  }
  obj.isRenewal = null != is_renewal && is_renewal;
  return obj;
}
function getRoleSubscriptionPurchaseSystemMessageContent(usernameOnClickHandler) {
  let guild;
  let isRenewal;
  let showWithDuration;
  let totalMonthsSubscribed;
  usernameOnClickHandler = usernameOnClickHandler.usernameOnClickHandler;
  if (usernameOnClickHandler === undefined) {
    usernameOnClickHandler = identityHook;
  }
  let roleSubscriptionOnClickHandler = usernameOnClickHandler.roleSubscriptionOnClickHandler;
  if (roleSubscriptionOnClickHandler === undefined) {
    roleSubscriptionOnClickHandler = closure_9;
  }
  const roleSubscriptionData = usernameOnClickHandler.roleSubscriptionData;
  const tmp = getRoleSubscriptionPurchaseContentCommonData(usernameOnClickHandler.guildId, roleSubscriptionData);
  ({ guild, isRenewal } = tmp);
  let obj = {};
  ({ totalMonthsSubscribed, showWithDuration } = tmp);
  const t = arg1(dependencyMap[5]).t;
  if (!showWithDuration) {
    obj.content = isRenewal ? t.mPTTdv : t.mYjFFx;
    obj = { username: usernameOnClickHandler.username, usernameHook: usernameOnClickHandler };
    let name;
    if (null != guild) {
      name = guild.name;
    }
    obj.guildName = name;
    obj.handleGuildNameClick = roleSubscriptionOnClickHandler;
    let tier_name;
    if (null != roleSubscriptionData) {
      tier_name = roleSubscriptionData.tier_name;
    }
    obj.tierName = tier_name;
    obj.months = totalMonthsSubscribed;
    obj.formatParams = obj;
    return obj;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ getJoinButtonLabels: closure_5, getRenewButtonLabels: closure_6, STICKERS: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_8, NOOP: closure_9 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const pickRoleSubscriptionPurchaseSticker = function pickRoleSubscriptionPurchaseSticker(id) {
  const currentUser = authStore.getCurrentUser();
  id = undefined;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = importDefault(dependencyMap[4]).extractTimestamp(id);
    const obj = importDefault(dependencyMap[4]);
  }
  const obj2 = importDefault(dependencyMap[4]);
  return closure_7[(num + obj2.extractTimestamp(obj2, id)) % closure_7.length];
};
export const getRoleSubscriptionPurchaseStickerCTA = function getRoleSubscriptionPurchaseStickerCTA(id, arg1) {
  if (arg1) {
    let arr = callback2();
  } else {
    arr = callback();
  }
  const obj = importDefault(dependencyMap[4]);
  return arr[obj.extractTimestamp(obj, id) % arr.length];
};
export const getRoleSubscriptionPurchaseSystemMessageFormattedContent = function getRoleSubscriptionPurchaseSystemMessageFormattedContent(username) {
  let content;
  let formatParams;
  ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent({ username: username.username, usernameOnClickHandler: username.usernameOnClickHandler, roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler, guildId: username.guildId, roleSubscriptionData: username.roleSubscriptionData }));
  const intl = arg1(dependencyMap[5]).intl;
  return intl.format(content, formatParams);
};
export const getRoleSubscriptionPurchaseSystemMessageAstFormattedContent = function getRoleSubscriptionPurchaseSystemMessageAstFormattedContent(username) {
  let content;
  let formatParams;
  ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent({ username: username.username, usernameOnClickHandler: username.usernameOnClickHandler, roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler, guildId: username.guildId, roleSubscriptionData: username.roleSubscriptionData }));
  const intl = arg1(dependencyMap[5]).intl;
  return intl.formatToParts(content, formatParams);
};
export const getRoleSubscriptionPurchaseSystemMessageContentMobile = function getRoleSubscriptionPurchaseSystemMessageContentMobile(usernameOnClickHandler) {
  let guild;
  let isRenewal;
  let showWithDuration;
  let totalMonthsSubscribed;
  usernameOnClickHandler = usernameOnClickHandler.usernameOnClickHandler;
  if (usernameOnClickHandler === undefined) {
    usernameOnClickHandler = identityHook;
  }
  let roleSubscriptionOnClickHandler = usernameOnClickHandler.roleSubscriptionOnClickHandler;
  if (roleSubscriptionOnClickHandler === undefined) {
    roleSubscriptionOnClickHandler = closure_9;
  }
  const roleSubscriptionData = usernameOnClickHandler.roleSubscriptionData;
  const tmp = getRoleSubscriptionPurchaseContentCommonData(usernameOnClickHandler.guildId, roleSubscriptionData);
  ({ guild, isRenewal } = tmp);
  ({ totalMonthsSubscribed, showWithDuration } = tmp);
  const t = arg1(dependencyMap[5]).t;
  if (!showWithDuration) {
    const intl = arg1(dependencyMap[5]).intl;
    const obj = {};
    let name;
    if (null != guild) {
      name = guild.name;
    }
    obj.guildName = name;
    let tier_name;
    if (null != roleSubscriptionData) {
      tier_name = roleSubscriptionData.tier_name;
    }
    obj.tierName = tier_name;
    obj.username = usernameOnClickHandler.username;
    obj.usernameOnClick = usernameOnClickHandler;
    obj.roleSubscriptionOnClick = roleSubscriptionOnClickHandler;
    obj.months = totalMonthsSubscribed;
    return intl.formatToParts(isRenewal ? t.OxP1NC : t.6Z1E+7, obj);
  }
};
export const isEligibleForRoleSubscriptionPurchaseSystemMessageSettings = function isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild) {
  return arg1(dependencyMap[6]).isCreatorMonetizationEnabledGuild(guild);
};
export const trackRoleSubscriptionPurchaseMessageTierClick = function trackRoleSubscriptionPurchaseMessageTierClick(guildId, channelId, messageId, roleSubscriptionListingId) {
  let obj = importDefault(dependencyMap[7]);
  obj = { guild_id: guildId };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  obj.user_id = id;
  obj.channel_id = channelId;
  obj.message_id = messageId;
  obj.role_subscription_listing_id = roleSubscriptionListingId;
  obj.trackWithMetadata(constants.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, obj);
};
export const getRoleSubscriptionPurchaseSystemMessageEventProperties = function getRoleSubscriptionPurchaseSystemMessageEventProperties(guild_id, author) {
  const obj = { guild_id: guild_id.guild_id };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  obj.sender = id;
  obj.target_user = author.author.id;
  obj.channel_id = guild_id.id;
  obj.message_id = author.id;
  return obj;
};
