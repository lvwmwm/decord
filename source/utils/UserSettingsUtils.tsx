// Module ID: 5788
// Function ID: 49468
// Name: getSanitizedRestrictedGuilds
// Dependencies: []
// Exports: computeFlags, generateNonSpamRetrainingOptInSettingOptions, getSanitizedActivityJoiningRestrictedGuilds, getSanitizedActivityRestrictedGuilds, getSanitizedMessageRequestRestrictedGuilds, getSanitizedRestrictedGuilds, shakeUserSettings, trackUserSettingsPaneViewed

// Module 5788 (getSanitizedRestrictedGuilds)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, FriendSourceFlags: closure_6, AllFriendSourceFlags: closure_7, ComponentActions: closure_8 } = arg1(dependencyMap[2]));
const obj = { UNDECIDED: 0, [0]: "UNDECIDED", OPTIN: 1, [1]: "OPTIN", OPTOUT: 2, [2]: "OPTOUT" };
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("utils/UserSettingsUtils.tsx");

export const getSanitizedRestrictedGuilds = function getSanitizedRestrictedGuilds() {
  const RestrictedGuildIds = arg1(dependencyMap[3]).RestrictedGuildIds;
  const setting = RestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === closure_3.totalUnavailableGuilds) {
    found = setting.filter((guildId) => null != guild.getGuild(guildId));
  }
  return new Set(found);
};
export const getSanitizedMessageRequestRestrictedGuilds = function getSanitizedMessageRequestRestrictedGuilds() {
  const MessageRequestRestrictedGuildIds = arg1(dependencyMap[3]).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.getSetting();
  let found = setting;
  if (0 === closure_3.totalUnavailableGuilds) {
    found = setting.filter((guildId) => null != guild.getGuild(guildId));
  }
  return new Set(found);
};
export const getSanitizedActivityRestrictedGuilds = function getSanitizedActivityRestrictedGuilds() {
  const ActivityRestrictedGuilds = arg1(dependencyMap[3]).ActivityRestrictedGuilds;
  const setting = ActivityRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === closure_3.totalUnavailableGuilds) {
    found = setting.filter((guildId) => null != guild.getGuild(guildId));
  }
  return new Set(found);
};
export const getSanitizedActivityJoiningRestrictedGuilds = function getSanitizedActivityJoiningRestrictedGuilds() {
  const ActivityJoiningRestrictedGuilds = arg1(dependencyMap[3]).ActivityJoiningRestrictedGuilds;
  const setting = ActivityJoiningRestrictedGuilds.getSetting();
  let found = setting;
  if (0 === closure_3.totalUnavailableGuilds) {
    found = setting.filter((guildId) => null != guild.getGuild(guildId));
  }
  return new Set(found);
};
export const computeFlags = function computeFlags(setting) {
  if ((setting & closure_7) === closure_7) {
    let obj = { accessibilityLabel: "Small", 1286240338: "sm", 2018080851: "Placeholder" };
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
  let obj = importDefault(dependencyMap[4]);
  obj = { settings_type: "user", origin_pane: originPane, destination_pane: destinationPane, location_stack: locationStack, source, subsection, application_id: applicationId, search_session_id: importDefault(dependencyMap[5]).getSearchSessionId() };
  obj.trackWithMetadata(constants.SETTINGS_PANE_VIEWED, obj);
};
export const NonSpamRetrainingOptInOptions = obj;
export const NonSpamRetrainingOptInOptionsToValue = { [obj.UNDECIDED]: undefined, [obj.OPTIN]: true, [obj.OPTOUT]: false };
export const generateNonSpamRetrainingOptInSettingOptions = function generateNonSpamRetrainingOptInSettingOptions() {
  let obj = {};
  const intl = arg1(dependencyMap[6]).intl;
  obj.name = intl.string(arg1(dependencyMap[6]).t./yLMRQ);
  const intl2 = arg1(dependencyMap[6]).intl;
  obj.desc = intl2.string(arg1(dependencyMap[6]).t.3fzkPq);
  obj.value = obj.OPTIN;
  const items = [obj, , ];
  obj = {};
  const intl3 = arg1(dependencyMap[6]).intl;
  obj.name = intl3.string(arg1(dependencyMap[6]).t.21fP2b);
  const intl4 = arg1(dependencyMap[6]).intl;
  obj.desc = intl4.string(arg1(dependencyMap[6]).t.ggJ9jR);
  obj.value = obj.OPTOUT;
  items[1] = obj;
  obj = {};
  const intl5 = arg1(dependencyMap[6]).intl;
  obj.name = intl5.string(arg1(dependencyMap[6]).t.OWIo8w);
  const intl6 = arg1(dependencyMap[6]).intl;
  obj.desc = intl6.string(arg1(dependencyMap[6]).t.HqYXpw);
  obj.value = obj.UNDECIDED;
  items[2] = obj;
  return items;
};
export const shakeUserSettings = function shakeUserSettings(arg0) {
  const ComponentDispatch = arg1(dependencyMap[7]).ComponentDispatch;
  ComponentDispatch.dispatch(constants3.SHAKE_SETTINGS_MODAL, arg0);
};
