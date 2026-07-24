// Module ID: 7768
// Function ID: 61637
// Name: identityHook
// Dependencies: [1838, 1849, 7769, 653, 21, 1212, 5632, 4324, 2]
// Exports: getRoleSubscriptionPurchaseStickerCTA, getRoleSubscriptionPurchaseSystemMessageAstFormattedContent, getRoleSubscriptionPurchaseSystemMessageContentMobile, getRoleSubscriptionPurchaseSystemMessageEventProperties, getRoleSubscriptionPurchaseSystemMessageFormattedContent, isEligibleForRoleSubscriptionPurchaseSystemMessageSettings, pickRoleSubscriptionPurchaseSticker, trackRoleSubscriptionPurchaseMessageTierClick

// Module 7768 (identityHook)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getJoinButtonLabels from "getJoinButtonLabels";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function identityHook(arg0) {
  return arg0;
}
function getRoleSubscriptionPurchaseContentCommonData(guildId, roleSubscriptionData) {
  let prop;
  guild = guild.getGuild(guildId);
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
  const t = require(1212) /* getSystemLocale */.t;
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
({ getJoinButtonLabels: closure_5, getRenewButtonLabels: closure_6, STICKERS: closure_7 } = getJoinButtonLabels);
({ AnalyticEvents: closure_8, NOOP: closure_9 } = ME);
const result = require("getJoinButtonLabels").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const pickRoleSubscriptionPurchaseSticker = function pickRoleSubscriptionPurchaseSticker(id) {
  const currentUser = authStore.getCurrentUser();
  id = undefined;
  if (null != currentUser) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = importDefault(21).extractTimestamp(id);
    const obj = importDefault(21);
  }
  const obj2 = importDefault(21);
  return length[(num + obj2.extractTimestamp(obj2, id)) % length.length];
};
export const getRoleSubscriptionPurchaseStickerCTA = function getRoleSubscriptionPurchaseStickerCTA(id, arg1) {
  if (arg1) {
    let arr = callback2();
  } else {
    arr = callback();
  }
  const obj = importDefault(21);
  return arr[obj.extractTimestamp(obj, id) % arr.length];
};
export const getRoleSubscriptionPurchaseSystemMessageFormattedContent = function getRoleSubscriptionPurchaseSystemMessageFormattedContent(username) {
  let content;
  let formatParams;
  ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent({ username: username.username, usernameOnClickHandler: username.usernameOnClickHandler, roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler, guildId: username.guildId, roleSubscriptionData: username.roleSubscriptionData }));
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.format(content, formatParams);
};
export const getRoleSubscriptionPurchaseSystemMessageAstFormattedContent = function getRoleSubscriptionPurchaseSystemMessageAstFormattedContent(username) {
  let content;
  let formatParams;
  ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent({ username: username.username, usernameOnClickHandler: username.usernameOnClickHandler, roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler, guildId: username.guildId, roleSubscriptionData: username.roleSubscriptionData }));
  const intl = require(1212) /* getSystemLocale */.intl;
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
  const t = require(1212) /* getSystemLocale */.t;
  if (!showWithDuration) {
    const intl = require(1212) /* getSystemLocale */.intl;
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
    return intl.formatToParts(isRenewal ? t.OxP1NC : t["6Z1E+7"], obj);
  }
};
export const isEligibleForRoleSubscriptionPurchaseSystemMessageSettings = function isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild) {
  return require(5632) /* isCreatorMonetizationEnabledGuild */.isCreatorMonetizationEnabledGuild(guild);
};
export const trackRoleSubscriptionPurchaseMessageTierClick = function trackRoleSubscriptionPurchaseMessageTierClick(guildId, channelId, messageId, roleSubscriptionListingId) {
  let obj = importDefault(4324);
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
