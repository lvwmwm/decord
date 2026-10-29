// Module ID: 4875
// Function ID: 4876
// Name: GuildRecord
// Dependencies: [4872, 1084, 1415, 2031, 11, 4876, 2]
// Exports: getGuildAcronym, getGuildEveryoneRoleId, getGuildIconSource, getGuildIconURL, isGuildLurker, isGuildNSFW, isGuildOwner, isGuildOwnerWithRequiredMfaLevel, updateGameApplications, updateJoinedAt

// Module 4875 (GuildRecord)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import StringUtils from "StringUtils" /* 2031 */;
import ServerNSFWLevelExperiment from "ServerNSFWLevelExperiment" /* 4876 */;
import PlainRecord from "PlainRecord" /* 4872 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let importDefault;

let BoostedGuildTiers;
let GuildExplicitContentFilterTypes;
let TypeTag;
let UserNotificationSettings;
let VerificationLevels;
let c3;
({ set: c3, TypeTag } = PlainRecord);
const GuildNSFWContentLevel = Constants.GuildNSFWContentLevel;
const MFALevels = Constants.MFALevels;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
({ BoostedGuildTiers, GuildExplicitContentFilterTypes, UserNotificationSettings, VerificationLevels } = Constants);
const set = new Set(items);
let obj = { mfaLevel: MFALevels.NONE, preferredLocale: "en-US", afkTimeout: 0, defaultMessageNotifications: UserNotificationSettings.ALL_MESSAGES, verificationLevel: VerificationLevels.NONE, explicitContentFilter: GuildExplicitContentFilterTypes.DISABLED, premiumProgressBarEnabled: false, premiumProgressBarEnabledUserUpdatedAt: null, systemChannelFlags: 0, maxStageVideoChannelUsers: -1, maxVideoChannelUsers: -1, maxMembers: -1, premiumTier: BoostedGuildTiers.NONE, nsfwLevel: GuildNSFWContentLevel.DEFAULT, premiumSubscriberCount: 0, features: new Set(), description: null, icon: null, ownerId: null, systemChannelId: null, joinedAt: null, discoverySplash: null, splash: null, banner: null, homeHeader: null, afkChannelId: null, application_id: null, vanityURLCode: null, rulesChannelId: null, safetyAlertsChannelId: null, publicUpdatesChannelId: null, ownerConfiguredContentLevel: null, hubType: null, latestOnboardingQuestionId: null, profile: null, guildTheme: null, premiumFeatures: null, moderatorReporting: null, guildSpaceSettings: null, verificationRoleId: null, gameApplicationIds: null, officialMessageColor: null, incidentsData: null, linkedGameOrganization: null };
new Set();
const freezeResult = freeze(obj);
const result = size.fileFinishedImporting("records/GuildRecord.tsx");

export const GuildRecordTypeTag = "Guild";
export const RESTRICTED_CONTENT_LEVELS = set;
export const GUILD_DEFAULT_PROPERTY_VALUES = freezeResult;
export function getGuildIconURL(id, size) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = arg3;
  if (arg3 === undefined) {
    flag2 = false;
  }
  const obj = AvatarUtilsDefault;
  const obj2 = { id: id.id, size, icon: id.icon, canAnimate: flag, lossless: flag2 };
  return obj.getGuildIconURL(obj2);
}
export function getGuildIconSource(arg0, size, hasItem) {
  let closure_0 = arg0;
  importDefault = size;
  let flag = hasItem;
  if (hasItem === undefined) {
    flag = false;
  }
  let obj = AvatarUtilsDefault;
  return obj.getAnimatableSourceWithFallback(flag, (canAnimate) => {
    const obj = AvatarUtilsDefault;
    const obj2 = { id: closure_0.id, size, icon: closure_0.icon, canAnimate };
    return obj.getGuildIconSource(obj2);
  });
}
export function getGuildAcronym(guild) {
  const obj = StringUtils;
  return obj.getAcronym(guild.name);
}
export function isGuildOwner(guild, currentUser) {
  let tmp = currentUser;
  if (typeof currentUser !== "string") {
    let id = null;
    if (null != currentUser) {
      id = currentUser.id;
    }
    tmp = id;
  }
  return guild.ownerId === tmp;
}
export function isGuildOwnerWithRequiredMfaLevel(mfaLevel, mfaEnabled) {
  let tmp3 = !(!mfaEnabled.mfaEnabled && mfaLevel.mfaLevel === MFALevels.ELEVATED);
  const tmp = !mfaEnabled.mfaEnabled && mfaLevel.mfaLevel === MFALevels.ELEVATED;
  if (tmp3) {
    let tmp4 = mfaEnabled;
    if (typeof mfaEnabled !== "string") {
      let id = null;
      if (null != mfaEnabled) {
        id = mfaEnabled.id;
      }
      tmp4 = id;
    }
    tmp3 = mfaLevel.ownerId === tmp4;
  }
  return tmp3;
}
export function isGuildLurker(guild) {
  return null == guild.joinedAt;
}
export function getGuildEveryoneRoleId(id) {
  const obj = SnowflakeUtilsDefault;
  return obj.castGuildIdAsEveryoneGuildRoleId(id.id);
}
export function updateJoinedAt(guild, joinedAt) {
  let date = joinedAt;
  const tmp = _false;
  if (typeof joinedAt === "string") {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(joinedAt);
  }
  return tmp(guild, "joinedAt", date);
}
export function updateGameApplications(arg0, arg1) {
  return _false(arg0, "gameApplicationIds", arg1);
}
export function isGuildNSFW(guild) {
  let tmp = null != guild;
  if (tmp) {
    let hasItem;
    const has = set.has;
    const obj = ServerNSFWLevelExperiment;
    if (obj.isServerNSFWLevelEnabled("guild_record")) {
      hasItem = has(guild.nsfwLevel);
    } else {
      let DEFAULT = guild.ownerConfiguredContentLevel;
      if (DEFAULT == null) {
        DEFAULT = GuildNSFWContentLevel.DEFAULT;
      }
      hasItem = has(DEFAULT);
    }
    tmp = hasItem;
  }
  return tmp;
}
