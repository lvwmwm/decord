// Module ID: 5793
// Function ID: 49508
// Name: getSanitizedRestrictedGuilds
// Dependencies: [4469, 1838, 653, 3803, 4324, 5794, 1212, 1207, 2]
// Exports: computeFlags, generateNonSpamRetrainingOptInSettingOptions, getSanitizedActivityJoiningRestrictedGuilds, getSanitizedActivityRestrictedGuilds, getSanitizedMessageRequestRestrictedGuilds, getSanitizedRestrictedGuilds, shakeUserSettings, trackUserSettingsPaneViewed

// Module 5793 (getSanitizedRestrictedGuilds)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ AnalyticEvents: closure_5, FriendSourceFlags: closure_6, AllFriendSourceFlags: closure_7, ComponentActions: closure_8 } = ME);
let obj = { UNDECIDED: 0, [0]: "UNDECIDED", OPTIN: 1, [1]: "OPTIN", OPTOUT: 2, [2]: "OPTOUT" };
const result = require("ME").fileFinishedImporting("utils/UserSettingsUtils.tsx");

export const getSanitizedRestrictedGuilds = function getSanitizedRestrictedGuilds() {
  const RestrictedGuildIds = require(3803) /* explicitContentFromProto */.RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === _isNativeReflectConstruct.totalUnavailableGuilds) {
    found = setting.filter((guildId) => null != outer1_4.getGuild(guildId));
  }
  return new Set(found);
};
export const getSanitizedMessageRequestRestrictedGuilds = function getSanitizedMessageRequestRestrictedGuilds() {
  const MessageRequestRestrictedGuildIds = require(3803) /* explicitContentFromProto */.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === _isNativeReflectConstruct.totalUnavailableGuilds) {
    found = setting.filter((guildId) => null != outer1_4.getGuild(guildId));
  }
  return new Set(found);
};
export const getSanitizedActivityRestrictedGuilds = function getSanitizedActivityRestrictedGuilds() {
  const ActivityRestrictedGuilds = require(3803) /* explicitContentFromProto */.ActivityRestrictedGuilds;
  const setting = ActivityRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === _isNativeReflectConstruct.totalUnavailableGuilds) {
    found = setting.filter((guildId) => null != outer1_4.getGuild(guildId));
  }
  return new Set(found);
};
export const getSanitizedActivityJoiningRestrictedGuilds = function getSanitizedActivityJoiningRestrictedGuilds() {
  const ActivityJoiningRestrictedGuilds = require(3803) /* explicitContentFromProto */.ActivityJoiningRestrictedGuilds;
  const setting = ActivityJoiningRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === _isNativeReflectConstruct.totalUnavailableGuilds) {
    found = setting.filter((guildId) => null != outer1_4.getGuild(guildId));
  }
  return new Set(found);
};
export const computeFlags = function computeFlags(setting) {
  if ((setting & closure_7) === closure_7) {
    let obj = { all: true, mutualFriends: true, mutualGuilds: true };
  } else {
    obj = { all: false, mutualFriends: (setting & constants2.MUTUAL_FRIENDS) === constants2.MUTUAL_FRIENDS, mutualGuilds: (setting & constants2.MUTUAL_GUILDS) === constants2.MUTUAL_GUILDS };
  }
  return obj;
};
export const trackUserSettingsPaneViewed = function trackUserSettingsPaneViewed(arg0) {
  let applicationId;
  let destinationPane;
  let locationStack;
  let originPane;
  let source;
  let subsection;
  ({ destinationPane, originPane, source, subsection, locationStack, applicationId } = arg0);
  let obj = importDefault(4324);
  obj = { settings_type: "user", origin_pane: originPane, destination_pane: destinationPane, location_stack: locationStack, source, subsection, application_id: applicationId, search_session_id: importDefault(5794).getSearchSessionId() };
  obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
export const NonSpamRetrainingOptInOptions = obj;
export const NonSpamRetrainingOptInOptionsToValue = { [obj.UNDECIDED]: undefined, [obj.OPTIN]: true, [obj.OPTOUT]: false };
export const generateNonSpamRetrainingOptInSettingOptions = function generateNonSpamRetrainingOptInSettingOptions() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.name = intl.string(require(1212) /* getSystemLocale */.t["/yLMRQ"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.desc = intl2.string(require(1212) /* getSystemLocale */.t["3fzkPq"]);
  obj.value = obj.OPTIN;
  const items = [obj, , ];
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.name = intl3.string(require(1212) /* getSystemLocale */.t["21fP2b"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.desc = intl4.string(require(1212) /* getSystemLocale */.t.ggJ9jR);
  obj.value = obj.OPTOUT;
  items[1] = obj;
  obj = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj.name = intl5.string(require(1212) /* getSystemLocale */.t.OWIo8w);
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj.desc = intl6.string(require(1212) /* getSystemLocale */.t.HqYXpw);
  obj.value = obj.UNDECIDED;
  items[2] = obj;
  return items;
};
export const shakeUserSettings = function shakeUserSettings(arg0) {
  const ComponentDispatch = require(1207) /* reportDevtoolsEvent */.ComponentDispatch;
  ComponentDispatch.dispatch(constants3.SHAKE_SETTINGS_MODAL, arg0);
};
