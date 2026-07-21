// Module ID: 1387
// Function ID: 16539
// Name: fromGuildPropertiesWithAdditionalFields
// Dependencies: []
// Exports: attachSerializedData, dangerouslyConstructGuildRecordFromUntypedObject, fromBackgroundSync, fromClientDiscoverableGuild, fromDirectoryGuild, fromGuild, fromGuildBasic, fromGuildDirectoryEntry, fromGuildProfile, fromInviteGuild, fromSerializedGuildRecord, fromServer, fromStoreListingGuild, fromVerificationGateGuild, isGuildRecord, toGuildProperties

// Module 1387 (fromGuildPropertiesWithAdditionalFields)
function fromGuildPropertiesWithAdditionalFields(properties, joinedAt, guild) {
  let application_id;
  let discovery_splash;
  let mfa_level;
  let obj = { id: properties.id, joinedAt: joinedAt.joinedAt, premiumSubscriberCount: joinedAt.premiumSubscriberCount, name: properties.name };
  const description = properties.description;
  let tmp3 = null;
  if (null != description) {
    tmp3 = description;
  }
  obj.description = tmp3;
  const icon = properties.icon;
  let tmp4 = null;
  if (null != icon) {
    tmp4 = icon;
  }
  obj.icon = tmp4;
  const splash = properties.splash;
  let tmp5 = null;
  if (null != splash) {
    tmp5 = splash;
  }
  obj.splash = tmp5;
  const banner = properties.banner;
  let tmp6 = null;
  if (null != banner) {
    tmp6 = banner;
  }
  obj.banner = tmp6;
  const home_header = properties.home_header;
  let tmp7 = null;
  if (null != home_header) {
    tmp7 = home_header;
  }
  obj.homeHeader = tmp7;
  obj.features = require(dependencyMap[3]).toSetInplace(properties.features);
  let preferredLocale = properties.preferred_locale;
  if (null == preferredLocale) {
    preferredLocale = closure_7.preferredLocale;
  }
  obj.preferredLocale = preferredLocale;
  ({ owner_id: obj.ownerId, application_id } = properties);
  let tmp9 = null;
  if (null != application_id) {
    tmp9 = application_id;
  }
  obj.application_id = tmp9;
  const afk_channel_id = properties.afk_channel_id;
  let tmp10 = null;
  if (null != afk_channel_id) {
    tmp10 = afk_channel_id;
  }
  obj.afkChannelId = tmp10;
  let afkTimeout = properties.afk_timeout;
  if (null == afkTimeout) {
    afkTimeout = closure_7.afkTimeout;
  }
  obj.afkTimeout = afkTimeout;
  const system_channel_id = properties.system_channel_id;
  let tmp12 = null;
  if (null != system_channel_id) {
    tmp12 = system_channel_id;
  }
  obj.systemChannelId = tmp12;
  let verificationLevel = properties.verification_level;
  if (null == verificationLevel) {
    verificationLevel = closure_7.verificationLevel;
  }
  obj.verificationLevel = verificationLevel;
  let explicitContentFilter = properties.explicit_content_filter;
  if (null == explicitContentFilter) {
    explicitContentFilter = closure_7.explicitContentFilter;
  }
  obj.explicitContentFilter = explicitContentFilter;
  ({ default_message_notifications: obj.defaultMessageNotifications, mfa_level } = properties);
  if (null == mfa_level) {
    mfa_level = closure_7.mfaLevel;
  }
  obj.mfaLevel = mfa_level;
  const vanity_url_code = properties.vanity_url_code;
  let tmp16 = null;
  if (null != vanity_url_code) {
    tmp16 = vanity_url_code;
  }
  obj.vanityURLCode = tmp16;
  let premiumTier = properties.premium_tier;
  if (null == premiumTier) {
    premiumTier = closure_7.premiumTier;
  }
  obj.premiumTier = premiumTier;
  let premiumProgressBarEnabled = properties.premium_progress_bar_enabled;
  if (!premiumProgressBarEnabled) {
    premiumProgressBarEnabled = closure_7.premiumProgressBarEnabled;
  }
  obj.premiumProgressBarEnabled = premiumProgressBarEnabled;
  let date = null;
  if (null != properties.premium_progress_bar_enabled_user_updated_at) {
    const _Date = Date;
    date = new Date(properties.premium_progress_bar_enabled_user_updated_at);
  }
  obj.premiumProgressBarEnabledUserUpdatedAt = date;
  ({ system_channel_flags: obj.systemChannelFlags, discovery_splash } = properties);
  let tmp23 = null;
  if (null != discovery_splash) {
    tmp23 = discovery_splash;
  }
  obj.discoverySplash = tmp23;
  const rules_channel_id = properties.rules_channel_id;
  let tmp24 = null;
  if (null != rules_channel_id) {
    tmp24 = rules_channel_id;
  }
  obj.rulesChannelId = tmp24;
  const safety_alerts_channel_id = properties.safety_alerts_channel_id;
  let tmp25 = null;
  if (null != safety_alerts_channel_id) {
    tmp25 = safety_alerts_channel_id;
  }
  obj.safetyAlertsChannelId = tmp25;
  const public_updates_channel_id = properties.public_updates_channel_id;
  let tmp26 = null;
  if (null != public_updates_channel_id) {
    tmp26 = public_updates_channel_id;
  }
  obj.publicUpdatesChannelId = tmp26;
  let maxStageVideoChannelUsers = properties.max_stage_video_channel_users;
  if (null == maxStageVideoChannelUsers) {
    maxStageVideoChannelUsers = closure_7.maxStageVideoChannelUsers;
  }
  obj.maxStageVideoChannelUsers = maxStageVideoChannelUsers;
  let maxVideoChannelUsers = properties.max_video_channel_users;
  if (null == maxVideoChannelUsers) {
    maxVideoChannelUsers = closure_7.maxVideoChannelUsers;
  }
  obj.maxVideoChannelUsers = maxVideoChannelUsers;
  let maxMembers = properties.max_members;
  if (null == maxMembers) {
    maxMembers = closure_7.maxMembers;
  }
  obj.maxMembers = maxMembers;
  let nsfwLevel = properties.nsfw_level;
  if (null == nsfwLevel) {
    nsfwLevel = closure_7.nsfwLevel;
  }
  obj.nsfwLevel = nsfwLevel;
  const owner_configured_content_level = properties.owner_configured_content_level;
  let tmp31 = null;
  if (null != owner_configured_content_level) {
    tmp31 = owner_configured_content_level;
  }
  obj.ownerConfiguredContentLevel = tmp31;
  const hub_type = properties.hub_type;
  let tmp32 = null;
  if (null != hub_type) {
    tmp32 = hub_type;
  }
  obj.hubType = tmp32;
  const latest_onboarding_question_id = properties.latest_onboarding_question_id;
  let tmp33 = null;
  if (null != latest_onboarding_question_id) {
    tmp33 = latest_onboarding_question_id;
  }
  obj.latestOnboardingQuestionId = tmp33;
  const profile = properties.profile;
  let tmp34 = null;
  if (null != profile) {
    tmp34 = profile;
  }
  obj.profile = tmp34;
  obj.guildTheme = resolveGuildTheme(properties.theme, guild);
  let tmp35 = null;
  if (null != properties.premium_features) {
    obj = {};
    ({ features: obj3.features, additional_emoji_slots: obj3.additionalEmojiSlots, additional_sticker_slots: obj3.additionalStickerSlots, additional_sound_slots: obj3.additionalSoundSlots } = properties.premium_features);
    tmp35 = obj;
  }
  obj.premiumFeatures = tmp35;
  let tmp36 = null;
  if (null != properties.moderator_reporting) {
    obj = {};
    ({ moderator_reporting_enabled: obj4.moderatorReportingEnabled, moderator_report_channel_id: obj4.moderatorReportChannelId } = properties.moderator_reporting);
    tmp36 = obj;
  }
  obj.moderatorReporting = tmp36;
  const verification_role_id = properties.verification_role_id;
  let tmp37 = null;
  if (null != verification_role_id) {
    tmp37 = verification_role_id;
  }
  obj.verificationRoleId = tmp37;
  const game_application_ids = properties.game_application_ids;
  let tmp38 = null;
  if (null != game_application_ids) {
    tmp38 = game_application_ids;
  }
  obj.gameApplicationIds = tmp38;
  const official_message_color = properties.official_message_color;
  let tmp39 = null;
  if (null != official_message_color) {
    tmp39 = official_message_color;
  }
  obj.officialMessageColor = tmp39;
  return closure_6(closure_8, guild, obj);
}
function constructFromPartialGuildRecord(arg0) {
  const merged = Object.assign(closure_7);
  const merged1 = Object.assign(arg0);
  return constructGuildInPlace({});
}
function constructGuildInPlace(arg0) {
  return callback(closure_8, arg0);
}
function resolveGuildTheme(theme, guildTheme) {
  if (undefined === theme) {
    guildTheme = undefined;
    if (null != guildTheme) {
      guildTheme = guildTheme.guildTheme;
    }
    let tmp7 = null;
    if (null != guildTheme) {
      tmp7 = guildTheme;
    }
    let tmp2 = tmp7;
  } else {
    tmp2 = null;
    if (null != theme) {
      let fromServerGuildThemeResult = require(dependencyMap[5]).fromServerGuildTheme(theme);
      if (null == fromServerGuildThemeResult) {
        fromServerGuildThemeResult = { "Null": null, "Null": null };
      }
      tmp2 = fromServerGuildThemeResult;
      const obj = require(dependencyMap[5]);
    }
  }
  return tmp2;
}
const _module = require(dependencyMap[0]);
({ constructInPlace: closure_3, merge: closure_4, objectIsPlainRecordOfType: closure_5, tryReuseExistingInPlacePlainRecord: closure_6 } = _module);
const _module1 = require(dependencyMap[1]);
({ GUILD_DEFAULT_PROPERTY_VALUES: closure_7, GuildRecordTypeTag: closure_8 } = _module1);
const GuildNSFWContentLevel = require(dependencyMap[2]).GuildNSFWContentLevel;
const _module2 = require(dependencyMap[6]);
const result = _module2.fileFinishedImporting("utils/GuildRecordUtils.tsx");

export const isGuildRecord = function isGuildRecord(guild) {
  return callback3(closure_8, guild);
};
export { fromGuildPropertiesWithAdditionalFields };
export const fromServer = function fromServer(joined_at, joinedAt) {
  if (null != joined_at.joined_at) {
    const _Date = Date;
    let date = new Date(joined_at.joined_at);
  } else {
    joinedAt = undefined;
    if (null != joinedAt) {
      joinedAt = joinedAt.joinedAt;
    }
    date = null;
    if (null != joinedAt) {
      date = joinedAt;
    }
  }
  const premium_subscription_count = joined_at.premium_subscription_count;
  let num = 0;
  if (null != premium_subscription_count) {
    num = premium_subscription_count;
  }
  if (null == joined_at.properties) {
    importDefault(dependencyMap[4])(null != joinedAt, "If guild.properties is null, existingGuild must be passed in");
    let obj = { joinedAt: date, premiumSubscriberCount: num };
    let tmp7 = callback2(joinedAt, obj);
  } else {
    obj = { joinedAt: date, premiumSubscriberCount: num };
    tmp7 = fromGuildPropertiesWithAdditionalFields(joined_at.properties, obj, joinedAt);
  }
  return tmp7;
};
export const attachSerializedData = function attachSerializedData(guild, result, selfMember) {
  let obj = {};
  const merged = Object.assign(guild);
  let toISOStringResult = null;
  if (null != guild.joinedAt) {
    const joinedAt = guild.joinedAt;
    toISOStringResult = joinedAt.toISOString();
  }
  obj["joinedAt"] = toISOStringResult;
  let toISOStringResult1 = null;
  if (null != guild.premiumProgressBarEnabledUserUpdatedAt) {
    const premiumProgressBarEnabledUserUpdatedAt = guild.premiumProgressBarEnabledUserUpdatedAt;
    toISOStringResult1 = premiumProgressBarEnabledUserUpdatedAt.toISOString();
  }
  obj["premiumProgressBarEnabledUserUpdatedAt"] = toISOStringResult1;
  obj["features"] = Array.from(guild.features);
  obj["roles"] = result;
  let tmp4 = null;
  if (null != selfMember) {
    obj = {};
    ({ userId: obj2.userId, roles: obj2.roles } = selfMember);
    tmp4 = obj;
  }
  obj["member"] = tmp4;
  return obj;
};
export const fromBackgroundSync = function fromBackgroundSync(putResult, guild) {
  let tmp = guild;
  if (null != putResult.properties) {
    const obj = {};
    ({ joinedAt: obj.joinedAt, premiumSubscriberCount: obj.premiumSubscriberCount } = guild);
    tmp = fromGuildPropertiesWithAdditionalFields(putResult.properties, obj, guild);
  }
  return tmp;
};
export const fromGuild = function fromGuild(guild, guild2) {
  const obj = {};
  if (null != guild.joined_at) {
    const _Date = Date;
    let date = new Date(guild.joined_at);
  } else {
    let joinedAt;
    if (null != guild2) {
      joinedAt = guild2.joinedAt;
    }
    date = null;
    if (null != joinedAt) {
      date = joinedAt;
    }
  }
  obj.joinedAt = date;
  obj.premiumSubscriberCount = guild.premium_subscription_count;
  return fromGuildPropertiesWithAdditionalFields(guild, obj, guild2);
};
export const fromInviteGuild = function fromInviteGuild(guild) {
  const obj = { id: guild.id, name: guild.name, description: guild.description, icon: guild.icon, splash: guild.splash, banner: guild.banner, features: require(dependencyMap[3]).toSetInplace(guild.features) };
  ({ verification_level: obj.verificationLevel, vanity_url_code: obj.vanityURLCode, premium_subscription_count: obj.premiumSubscriberCount, nsfw_level: obj.nsfwLevel, premium_tier: obj.premiumTier, home_header: obj.homeHeader } = guild);
  return constructFromPartialGuildRecord(obj);
};
export const fromGuildProfile = function fromGuildProfile(profile) {
  const obj = { id: profile.id, name: profile.name, description: profile.description, icon: profile.icon };
  let premiumSubscriberCount = profile.premiumSubscriberCount;
  if (null == premiumSubscriberCount) {
    premiumSubscriberCount = closure_7.premiumSubscriberCount;
  }
  obj.premiumSubscriberCount = premiumSubscriberCount;
  let premiumTier = profile.premiumTier;
  if (null == premiumTier) {
    premiumTier = closure_7.premiumTier;
  }
  obj.premiumTier = premiumTier;
  obj.features = require(dependencyMap[3]).toSetInplace(profile.features);
  return constructFromPartialGuildRecord(obj);
};
export const fromStoreListingGuild = function fromStoreListingGuild(id) {
  const obj = { id: id.id, name: id.name };
  const icon = id.icon;
  let tmp2 = null;
  if (null != icon) {
    tmp2 = icon;
  }
  obj.icon = tmp2;
  return constructFromPartialGuildRecord(obj);
};
export const fromDirectoryGuild = function fromDirectoryGuild(id) {
  const obj = { id: id.id, name: id.name };
  const icon = id.icon;
  let tmp2 = null;
  if (null != icon) {
    tmp2 = icon;
  }
  obj.icon = tmp2;
  const description = id.description;
  let tmp3 = null;
  if (null != description) {
    tmp3 = description;
  }
  obj.description = tmp3;
  const splash = id.splash;
  let tmp4 = null;
  if (null != splash) {
    tmp4 = splash;
  }
  obj.splash = tmp4;
  obj.features = require(dependencyMap[3]).toSetInplace(id.features);
  return constructFromPartialGuildRecord(obj);
};
export const fromGuildDirectoryEntry = function fromGuildDirectoryEntry(entry) {
  const obj = { id: entry.guildId };
  const name = entry.name;
  let str = "";
  if (null != name) {
    str = name;
  }
  obj.name = str;
  const icon = entry.icon;
  let tmp2 = null;
  if (null != icon) {
    tmp2 = icon;
  }
  obj.icon = tmp2;
  const description = entry.description;
  let tmp3 = null;
  if (null != description) {
    tmp3 = description;
  }
  obj.description = tmp3;
  const splash = entry.splash;
  let tmp4 = null;
  if (null != splash) {
    tmp4 = splash;
  }
  obj.splash = tmp4;
  obj.features = require(dependencyMap[3]).toSetInplace(entry.features);
  return constructFromPartialGuildRecord(obj);
};
export const fromVerificationGateGuild = function fromVerificationGateGuild(stateFromStores1) {
  const obj = { id: stateFromStores1.id, name: stateFromStores1.name };
  const icon = stateFromStores1.icon;
  let tmp2 = null;
  if (null != icon) {
    tmp2 = icon;
  }
  obj.icon = tmp2;
  const description = stateFromStores1.description;
  let tmp3 = null;
  if (null != description) {
    tmp3 = description;
  }
  obj.description = tmp3;
  const splash = stateFromStores1.splash;
  let tmp4 = null;
  if (null != splash) {
    tmp4 = splash;
  }
  obj.splash = tmp4;
  obj.features = require(dependencyMap[3]).toSetInplace(stateFromStores1.features);
  let verificationLevel = stateFromStores1.verification_level;
  if (null == verificationLevel) {
    verificationLevel = closure_7.verificationLevel;
  }
  obj.verificationLevel = verificationLevel;
  return constructFromPartialGuildRecord(obj);
};
export const fromClientDiscoverableGuild = function fromClientDiscoverableGuild(guild) {
  const obj = { id: guild.id, name: guild.name };
  const description = guild.description;
  let tmp2 = null;
  if (null != description) {
    tmp2 = description;
  }
  obj.description = tmp2;
  const splash = guild.splash;
  let tmp3 = null;
  if (null != splash) {
    tmp3 = splash;
  }
  obj.splash = tmp3;
  const banner = guild.banner;
  let tmp4 = null;
  if (null != banner) {
    tmp4 = banner;
  }
  obj.banner = tmp4;
  let preferredLocale = guild.preferredLocale;
  if (null == preferredLocale) {
    preferredLocale = closure_7.preferredLocale;
  }
  obj.preferredLocale = preferredLocale;
  const icon = guild.icon;
  let tmp6 = null;
  if (null != icon) {
    tmp6 = icon;
  }
  obj.icon = tmp6;
  obj.features = require(dependencyMap[3]).toSetInplace(guild.features);
  let premiumSubscriberCount = guild.premiumSubscriptionCount;
  if (null == premiumSubscriberCount) {
    premiumSubscriberCount = closure_7.premiumSubscriberCount;
  }
  obj.premiumSubscriberCount = premiumSubscriberCount;
  const discoverySplash = guild.discoverySplash;
  let tmp8 = null;
  if (null != discoverySplash) {
    tmp8 = discoverySplash;
  }
  obj.discoverySplash = tmp8;
  return constructFromPartialGuildRecord(obj);
};
export const fromGuildBasic = function fromGuildBasic(id) {
  const obj = { id: id.id, name: id.name };
  const icon = id.icon;
  let tmp2 = null;
  if (null != icon) {
    tmp2 = icon;
  }
  obj.icon = tmp2;
  const description = id.description;
  let tmp3 = null;
  if (null != description) {
    tmp3 = description;
  }
  obj.description = tmp3;
  const splash = id.splash;
  let tmp4 = null;
  if (null != splash) {
    tmp4 = splash;
  }
  obj.splash = tmp4;
  const discovery_splash = id.discovery_splash;
  let tmp5 = null;
  if (null != discovery_splash) {
    tmp5 = discovery_splash;
  }
  obj.discoverySplash = tmp5;
  obj.features = require(dependencyMap[3]).toSetInplace(id.features);
  return constructFromPartialGuildRecord(obj);
};
export const dangerouslyConstructGuildRecordFromUntypedObject = function dangerouslyConstructGuildRecordFromUntypedObject(id) {
  let latestOnboardingQuestionId;
  const obj = { id: id.id };
  let str = id.name;
  if (!str) {
    str = "";
  }
  obj.name = str;
  obj.description = id.description || null;
  obj.ownerId = id.ownerId || null;
  obj.icon = id.icon || null;
  obj.splash = id.splash || null;
  obj.banner = id.banner || null;
  obj.homeHeader = id.homeHeader || null;
  obj.features = require(dependencyMap[3]).toSetInplace(id.features);
  let preferredLocale = id.preferredLocale;
  if (!preferredLocale) {
    preferredLocale = closure_7.preferredLocale;
  }
  obj.preferredLocale = preferredLocale;
  obj.afkChannelId = id.afkChannelId || null;
  obj.afkTimeout = id.afkTimeout;
  obj.systemChannelId = id.systemChannelId || null;
  let verificationLevel = id.verificationLevel;
  if (!verificationLevel) {
    verificationLevel = closure_7.verificationLevel;
  }
  obj.verificationLevel = verificationLevel;
  const joinedAt = id.joinedAt;
  if (id.joinedAt instanceof Date) {
    let joinedAt2 = joinedAt;
  } else if (null != joinedAt) {
    const _Date = Date;
    joinedAt2 = new Date(id.joinedAt);
  } else {
    joinedAt2 = id.joinedAt;
  }
  obj.joinedAt = joinedAt2;
  let defaultMessageNotifications = id.defaultMessageNotifications;
  if (!defaultMessageNotifications) {
    defaultMessageNotifications = closure_7.defaultMessageNotifications;
  }
  obj.defaultMessageNotifications = defaultMessageNotifications;
  let mfaLevel = id.mfaLevel;
  if (!mfaLevel) {
    mfaLevel = closure_7.mfaLevel;
  }
  obj.mfaLevel = mfaLevel;
  obj.application_id = id.application_id || null;
  let explicitContentFilter = id.explicitContentFilter;
  if (!explicitContentFilter) {
    explicitContentFilter = closure_7.explicitContentFilter;
  }
  obj.explicitContentFilter = explicitContentFilter;
  obj.vanityURLCode = id.vanityURLCode || null;
  let premiumTier = id.premiumTier;
  if (!premiumTier) {
    premiumTier = closure_7.premiumTier;
  }
  obj.premiumTier = premiumTier;
  let premiumSubscriberCount = id.premiumSubscriberCount;
  if (!premiumSubscriberCount) {
    premiumSubscriberCount = closure_7.premiumSubscriberCount;
  }
  obj.premiumSubscriberCount = premiumSubscriberCount;
  let premiumProgressBarEnabled = id.premiumProgressBarEnabled;
  if (!premiumProgressBarEnabled) {
    premiumProgressBarEnabled = closure_7.premiumProgressBarEnabled;
  }
  obj.premiumProgressBarEnabled = premiumProgressBarEnabled;
  const premiumProgressBarEnabledUserUpdatedAt = id.premiumProgressBarEnabledUserUpdatedAt;
  if (id.premiumProgressBarEnabledUserUpdatedAt instanceof Date) {
    let date = premiumProgressBarEnabledUserUpdatedAt;
  } else {
    date = null;
    if (null != premiumProgressBarEnabledUserUpdatedAt) {
      const _Date2 = Date;
      date = new Date(id.premiumProgressBarEnabledUserUpdatedAt);
    }
  }
  obj.premiumProgressBarEnabledUserUpdatedAt = date;
  obj.systemChannelFlags = id.systemChannelFlags;
  obj.discoverySplash = id.discoverySplash || null;
  obj.rulesChannelId = id.rulesChannelId || null;
  obj.safetyAlertsChannelId = id.safetyAlertsChannelId || null;
  obj.publicUpdatesChannelId = id.publicUpdatesChannelId || null;
  let maxStageVideoChannelUsers = id.maxStageVideoChannelUsers;
  if (!maxStageVideoChannelUsers) {
    maxStageVideoChannelUsers = closure_7.maxStageVideoChannelUsers;
  }
  obj.maxStageVideoChannelUsers = maxStageVideoChannelUsers;
  let maxVideoChannelUsers = id.maxVideoChannelUsers;
  if (!maxVideoChannelUsers) {
    maxVideoChannelUsers = closure_7.maxVideoChannelUsers;
  }
  obj.maxVideoChannelUsers = maxVideoChannelUsers;
  let maxMembers = id.maxMembers;
  if (!maxMembers) {
    maxMembers = closure_7.maxMembers;
  }
  obj.maxMembers = maxMembers;
  let nsfwLevel = id.nsfwLevel;
  if (null == nsfwLevel) {
    nsfwLevel = closure_7.nsfwLevel;
  }
  obj.nsfwLevel = nsfwLevel;
  const ownerConfiguredContentLevel = id.ownerConfiguredContentLevel;
  let tmp20 = null;
  if (null != ownerConfiguredContentLevel) {
    tmp20 = ownerConfiguredContentLevel;
  }
  obj.ownerConfiguredContentLevel = tmp20;
  ({ hubType: obj.hubType, latestOnboardingQuestionId } = id);
  let tmp21 = null;
  if (null != latestOnboardingQuestionId) {
    tmp21 = latestOnboardingQuestionId;
  }
  obj.latestOnboardingQuestionId = tmp21;
  const profile = id.profile;
  let tmp22 = null;
  if (null != profile) {
    tmp22 = profile;
  }
  obj.profile = tmp22;
  const guildTheme = id.guildTheme;
  let tmp23 = null;
  if (null != guildTheme) {
    tmp23 = guildTheme;
  }
  obj.guildTheme = tmp23;
  const premiumFeatures = id.premiumFeatures;
  let tmp24 = null;
  if (null != premiumFeatures) {
    tmp24 = premiumFeatures;
  }
  obj.premiumFeatures = tmp24;
  const moderatorReporting = id.moderatorReporting;
  let tmp25 = null;
  if (null != moderatorReporting) {
    tmp25 = moderatorReporting;
  }
  obj.moderatorReporting = tmp25;
  const gameApplicationIds = id.gameApplicationIds;
  let tmp26 = null;
  if (null != gameApplicationIds) {
    tmp26 = gameApplicationIds;
  }
  obj.gameApplicationIds = tmp26;
  const officialMessageColor = id.officialMessageColor;
  let tmp27 = null;
  if (null != officialMessageColor) {
    tmp27 = officialMessageColor;
  }
  obj.officialMessageColor = tmp27;
  const verificationRoleId = id.verificationRoleId;
  let tmp28 = null;
  if (null != verificationRoleId) {
    tmp28 = verificationRoleId;
  }
  obj.verificationRoleId = tmp28;
  return constructGuildInPlace(obj);
};
export const toGuildProperties = function toGuildProperties(id) {
  let premiumProgressBarEnabledUserUpdatedAt;
  let obj = { id: id.id, name: id.name, description: id.description, icon: id.icon, splash: id.splash, banner: id.banner, home_header: id.homeHeader, features: Array.from(id.features), preferred_locale: id.preferredLocale, owner_id: id.ownerId, application_id: id.application_id, afk_channel_id: id.afkChannelId, afk_timeout: id.afkTimeout, system_channel_id: id.systemChannelId, verification_level: id.verificationLevel, explicit_content_filter: id.explicitContentFilter, default_message_notifications: id.defaultMessageNotifications, mfa_level: id.mfaLevel };
  const vanityURLCode = id.vanityURLCode;
  let tmp = null;
  if (null != vanityURLCode) {
    tmp = vanityURLCode;
  }
  obj.vanity_url_code = tmp;
  ({ premiumTier: obj.premium_tier, premiumProgressBarEnabled: obj.premium_progress_bar_enabled, premiumProgressBarEnabledUserUpdatedAt } = id);
  let toISOStringResult;
  if (null != premiumProgressBarEnabledUserUpdatedAt) {
    toISOStringResult = premiumProgressBarEnabledUserUpdatedAt.toISOString();
  }
  let tmp3 = null;
  if (null != toISOStringResult) {
    tmp3 = toISOStringResult;
  }
  obj.premium_progress_bar_enabled_user_updated_at = tmp3;
  let tmp4 = null;
  if (null != id.premiumFeatures) {
    obj = {};
    ({ features: obj2.features, additionalEmojiSlots: obj2.additional_emoji_slots, additionalStickerSlots: obj2.additional_sticker_slots, additionalSoundSlots: obj2.additional_sound_slots } = id.premiumFeatures);
    tmp4 = obj;
  }
  obj.premium_features = tmp4;
  ({ systemChannelFlags: obj.system_channel_flags, discoverySplash: obj.discovery_splash, rulesChannelId: obj.rules_channel_id, safetyAlertsChannelId: obj.safety_alerts_channel_id, publicUpdatesChannelId: obj.public_updates_channel_id, maxStageVideoChannelUsers: obj.max_stage_video_channel_users, maxVideoChannelUsers: obj.max_video_channel_users, maxMembers: obj.max_members, nsfwLevel: obj.nsfw_level } = id);
  const items = [, ];
  ({ AGE_RESTRICTED: arr[0], EXPLICIT: arr[1] } = GuildNSFWContentLevel);
  obj.nsfw = items.includes(id.nsfwLevel);
  ({ ownerConfiguredContentLevel: obj.owner_configured_content_level, hubType: obj.hub_type, latestOnboardingQuestionId: obj.latest_onboarding_question_id, profile: obj.profile } = id);
  let tmp5 = null;
  if (null != id.guildTheme) {
    const guildTheme = id.guildTheme;
    obj = { enabled: guildTheme.enabled };
    const merged = Object.assign(require(dependencyMap[5]).toServerGuildThemeSettings(guildTheme.themeSettings));
    tmp5 = obj;
    const obj4 = require(dependencyMap[5]);
  }
  obj.theme = tmp5;
  let tmp10 = null;
  if (null != id.moderatorReporting) {
    ({ moderatorReportingEnabled: obj5.moderator_reporting_enabled, moderatorReportChannelId: obj5.moderator_report_channel_id } = id.moderatorReporting);
    tmp10 = {};
    const obj1 = {};
  }
  obj.moderator_reporting = tmp10;
  obj.official_message_color = id.officialMessageColor;
  obj.incidents_data = null;
  ({ gameApplicationIds: obj.game_application_ids, verificationRoleId: obj.verification_role_id } = id);
  return obj;
};
export const fromSerializedGuildRecord = function fromSerializedGuildRecord(value) {
  const obj = {};
  const merged = Object.assign(value);
  obj["features"] = require(dependencyMap[3]).toSetInplace(value.features);
  let date = null;
  if (null != value.joinedAt) {
    const _Date = Date;
    date = new Date(value.joinedAt);
  }
  obj["joinedAt"] = date;
  let date1 = null;
  if (null != value.premiumProgressBarEnabledUserUpdatedAt) {
    const _Date2 = Date;
    date1 = new Date(value.premiumProgressBarEnabledUserUpdatedAt);
  }
  obj["premiumProgressBarEnabledUserUpdatedAt"] = date1;
  delete r2.roles;
  delete r2.member;
  return constructGuildInPlace(obj);
};
export { constructFromPartialGuildRecord };
