// Module ID: 1391
// Function ID: 16581
// Name: isGuildOwner
// Dependencies: []
// Exports: getGuildAcronym, getGuildEveryoneRoleId, getGuildIconSource, getGuildIconURL, isGuildLurker, isGuildNSFW, isGuildOwnerWithRequiredMfaLevel, updateGameApplications, updateJoinedAt

// Module 1391 (isGuildOwner)
let BoostedGuildTiers;
let GuildExplicitContentFilterTypes;
let TypeTag;
let UserNotificationSettings;
let VerificationLevels;
function isGuildOwner(guild, currentUser) {
  let tmp = currentUser;
  if ("string" !== typeof currentUser) {
    let id = null;
    if (null != currentUser) {
      id = currentUser.id;
    }
    tmp = id;
  }
  return guild.ownerId === tmp;
}
const _module = require(dependencyMap[0]);
({ set: closure_3, TypeTag } = _module);
const _module1 = require(dependencyMap[1]);
const GuildNSFWContentLevel = _module1.GuildNSFWContentLevel;
const MFALevels = _module1.MFALevels;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
({ BoostedGuildTiers, GuildExplicitContentFilterTypes, UserNotificationSettings, VerificationLevels } = _module1);
const set = new Set(items);
const obj = { "Bool(true)": true, "Bool(true)": null, "Bool(true)": null, mfaLevel: MFALevels.NONE, defaultMessageNotifications: UserNotificationSettings.ALL_MESSAGES, verificationLevel: VerificationLevels.NONE, explicitContentFilter: GuildExplicitContentFilterTypes.DISABLED, premiumProgressBarEnabled: false, premiumProgressBarEnabledUserUpdatedAt: null, systemChannelFlags: 0, maxStageVideoChannelUsers: -1, maxVideoChannelUsers: -1, maxMembers: -1, premiumTier: BoostedGuildTiers.NONE, nsfwLevel: GuildNSFWContentLevel.DEFAULT, premiumSubscriberCount: 0, features: new Set(), description: null, icon: null, ownerId: null, systemChannelId: null, joinedAt: null, discoverySplash: null, splash: null, banner: null, homeHeader: null, afkChannelId: null, application_id: null, vanityURLCode: null, rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, ownerConfiguredContentLevel: null, hubType: null, latestOnboardingQuestionId: null, profile: null, guildTheme: null, premiumFeatures: null, moderatorReporting: null, verificationRoleId: null, gameApplicationIds: null, officialMessageColor: null };
const frozen = Object.freeze(obj);
const _module2 = require(dependencyMap[6]);
const result = _module2.fileFinishedImporting("records/GuildRecord.tsx");

export const GuildRecordTypeTag = "Guild";
export const RESTRICTED_CONTENT_LEVELS = set;
export const GUILD_DEFAULT_PROPERTY_VALUES = frozen;
export const getGuildIconURL = function getGuildIconURL(id, size) {
  let flag = arg2;
  let flag2 = arg3;
  if (arg2 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = importDefault(dependencyMap[2]);
  obj = { id: id.id, size, icon: id.icon, canAnimate: flag, lossless: flag2 };
  return obj.getGuildIconURL(obj);
};
export const getGuildIconSource = function getGuildIconSource(arg0, arg1, flag) {
  const require = arg0;
  const importDefault = arg1;
  if (flag === undefined) {
    flag = false;
  }
  return importDefault(dependencyMap[2]).getAnimatableSourceWithFallback(flag, (canAnimate) => {
    let obj = arg1(closure_2[2]);
    obj = { id: canAnimate.id, size: arg1, icon: canAnimate.icon, canAnimate };
    return obj.getGuildIconSource(obj);
  });
};
export const getGuildAcronym = function getGuildAcronym(guild) {
  return require(dependencyMap[3]).getAcronym(guild.name);
};
export { isGuildOwner };
export const isGuildOwnerWithRequiredMfaLevel = function isGuildOwnerWithRequiredMfaLevel(mfaLevel, mfaEnabled) {
  let tmp = !mfaEnabled.mfaEnabled;
  if (tmp) {
    tmp = mfaLevel.mfaLevel === MFALevels.ELEVATED;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = isGuildOwner(mfaLevel, mfaEnabled);
  }
  return tmp3;
};
export const isGuildLurker = function isGuildLurker(joinedAt) {
  return null == joinedAt.joinedAt;
};
export const getGuildEveryoneRoleId = function getGuildEveryoneRoleId(closure_29) {
  return importDefault(dependencyMap[4]).castGuildIdAsEveryoneGuildRoleId(closure_29.id);
};
export const updateJoinedAt = function updateJoinedAt(arg0, arg1) {
  let date = arg1;
  if ("string" === typeof arg1) {
    const _Date = Date;
    date = new Date(arg1);
  }
  return closure_3(arg0, "joinedAt", date);
};
export const updateGameApplications = function updateGameApplications(arg0, arg1) {
  return callback(arg0, "gameApplicationIds", arg1);
};
export const isGuildNSFW = function isGuildNSFW(guild) {
  let nsfwLevel = guild;
  if (null == guild) {
    return tmp;
  } else {
    const has = set.has;
    if (obj.isServerNSFWLevelEnabled("guild_record")) {
      nsfwLevel = nsfwLevel.nsfwLevel;
      let hasItem = has(nsfwLevel);
    } else {
      let DEFAULT = nsfwLevel.ownerConfiguredContentLevel;
      if (null == DEFAULT) {
        DEFAULT = GuildNSFWContentLevel.DEFAULT;
      }
      hasItem = has(DEFAULT);
    }
    const obj = require(dependencyMap[5]);
  }
};
