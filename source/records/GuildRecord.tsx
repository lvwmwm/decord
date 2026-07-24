// Module ID: 1391
// Function ID: 16583
// Name: isGuildOwner
// Dependencies: [1388, 653, 1392, 1832, 21, 1836, 2]
// Exports: getGuildAcronym, getGuildEveryoneRoleId, getGuildIconSource, getGuildIconURL, isGuildLurker, isGuildNSFW, isGuildOwnerWithRequiredMfaLevel, updateGameApplications, updateJoinedAt

// Module 1391 (isGuildOwner)
import constructInPlace from "constructInPlace";
import ME from "ME";
import set from "getAvatarURL";

let BoostedGuildTiers;
let GuildExplicitContentFilterTypes;
let TypeTag;
let UserNotificationSettings;
let VerificationLevels;
let closure_3;
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
({ set: closure_3, TypeTag } = constructInPlace);
const GuildNSFWContentLevel = ME.GuildNSFWContentLevel;
const MFALevels = ME.MFALevels;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
({ BoostedGuildTiers, GuildExplicitContentFilterTypes, UserNotificationSettings, VerificationLevels } = ME);
let set = new Set(items);
let obj = { mfaLevel: MFALevels.NONE, preferredLocale: "en-US", afkTimeout: 0, defaultMessageNotifications: UserNotificationSettings.ALL_MESSAGES, verificationLevel: VerificationLevels.NONE, explicitContentFilter: GuildExplicitContentFilterTypes.DISABLED, premiumProgressBarEnabled: false, premiumProgressBarEnabledUserUpdatedAt: null, systemChannelFlags: 0, maxStageVideoChannelUsers: -1, maxVideoChannelUsers: -1, maxMembers: -1, premiumTier: BoostedGuildTiers.NONE, nsfwLevel: GuildNSFWContentLevel.DEFAULT, premiumSubscriberCount: 0, features: new Set(), description: null, icon: null, ownerId: null, systemChannelId: null, joinedAt: null, discoverySplash: null, splash: null, banner: null, homeHeader: null, afkChannelId: null, application_id: null, vanityURLCode: null, rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, ownerConfiguredContentLevel: null, hubType: null, latestOnboardingQuestionId: null, profile: null, guildTheme: null, premiumFeatures: null, moderatorReporting: null, verificationRoleId: null, gameApplicationIds: null, officialMessageColor: null };
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("records/GuildRecord.tsx");

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
  let obj = importDefault(1392);
  obj = { id: id.id, size, icon: id.icon, canAnimate: flag, lossless: flag2 };
  return obj.getGuildIconURL(obj);
};
export const getGuildIconSource = function getGuildIconSource(arg0, arg1, flag) {
  let closure_0 = arg0;
  const importDefault = arg1;
  if (flag === undefined) {
    flag = false;
  }
  return importDefault(1392).getAnimatableSourceWithFallback(flag, (canAnimate) => {
    let obj = callback(outer1_2[2]);
    obj = { id: closure_0.id, size: callback, icon: closure_0.icon, canAnimate };
    return obj.getGuildIconSource(obj);
  });
};
export const getGuildAcronym = function getGuildAcronym(guild) {
  return require(1832) /* isNullOrEmpty */.getAcronym(guild.name);
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
  return importDefault(21).castGuildIdAsEveryoneGuildRoleId(closure_29.id);
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
    obj = require(1836) /* apexExperiment */;
  }
};
