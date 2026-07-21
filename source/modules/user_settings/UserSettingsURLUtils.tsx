// Module ID: 5256
// Function ID: 44535
// Name: normalizeSection
// Dependencies: []
// Exports: parseSettingsUrl, settingsPathToRoute, trackParseSettingsUrl

// Module 5256 (normalizeSection)
function normalizeSection(str) {
  str = "";
  if (null != str) {
    str = str.toLowerCase().replace(closure_7, "-");
    const str2 = str.toLowerCase();
  }
  return str;
}
function isUserSettingsPath(joined) {
  const values = Object.values(UserSettingsPath);
  return values.includes(joined);
}
let closure_3 = importDefault(dependencyMap[0]);
const UserSettingsPath = arg1(dependencyMap[1]).UserSettingsPath;
({ AnalyticEvents: closure_5, Routes: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = /[_\s]|%20/g;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/UserSettingsURLUtils.tsx");

export const settingsPathToRoute = function settingsPathToRoute(ACCOUNT) {
  const parts = ACCOUNT.split("/");
  return closure_6.SETTINGS(parts[0], parts[1]);
};
export const trackParseSettingsUrl = function trackParseSettingsUrl(path, user_settings_url_origin) {
  path = path.path;
  if (null != path.target) {
    let obj = { user_settings_url_path: path, user_settings_url_origin };
    importDefault(dependencyMap[5]).track(constants.USER_SETTINGS_URL_PARSED, obj);
    const obj3 = importDefault(dependencyMap[5]);
  } else {
    obj = importDefault(dependencyMap[5]);
    obj = { user_settings_url_origin, user_settings_url_path: path };
    obj.track(constants.USER_SETTINGS_URL_PARSING_FAILED, obj);
  }
};
export const parseSettingsUrl = function parseSettingsUrl(arg0) {
  let path;
  let search;
  ({ path, search } = arg0);
  const tmp = callback(path.split("?")[0].split("/"), 4);
  const tmp2 = normalizeSection(tmp[2]);
  const items = [tmp2, normalizeSection(tmp[3])];
  const found = items.filter(Boolean);
  const joined = found.join("/");
  const str = path.split("?")[0];
  const isEligibleForUserSettingsRedesign4DExperiment = arg1(dependencyMap[3]).getIsEligibleForUserSettingsRedesign4DExperiment("UserSection");
  let obj = { [closure_4.ACCOUNT]: arg1(dependencyMap[4]).WebUserSettings.ACCOUNT_PANEL, [closure_4.ACCOUNT_STANDING]: arg1(dependencyMap[4]).WebUserSettings.ACCOUNT_STANDING_CATEGORY, [closure_4.ACCOUNT_ACCOUNT_STANDING]: arg1(dependencyMap[4]).WebUserSettings.ACCOUNT_STANDING_CATEGORY, [closure_4.PROFILE_CUSTOMIZATION]: arg1(dependencyMap[4]).WebUserSettings.PROFILE_PANEL };
  const WebUserSettings = arg1(dependencyMap[4]).WebUserSettings;
  obj[UserSettingsPath.CONTENT_AND_SOCIAL] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings.MESSAGING_PERMISSIONS_PANEL : WebUserSettings.CONTENT_AND_SOCIAL_PANEL;
  obj[UserSettingsPath.CONNECTED_GAMES] = arg1(dependencyMap[4]).WebUserSettings.CONNECTED_GAMES_CATEGORY;
  obj[UserSettingsPath.CONTENT_AND_SOCIAL_CONNECTED_GAMES] = arg1(dependencyMap[4]).WebUserSettings.CONNECTED_GAMES_CATEGORY;
  obj[UserSettingsPath.DATA_AND_PRIVACY] = arg1(dependencyMap[4]).WebUserSettings.DATA_AND_PRIVACY_PANEL;
  obj[UserSettingsPath.PRIVACY_AND_SAFETY] = arg1(dependencyMap[4]).WebUserSettings.DATA_AND_PRIVACY_PANEL;
  obj[UserSettingsPath.FAMILY_CENTER] = arg1(dependencyMap[4]).WebUserSettings.FAMILY_CENTER_PANEL;
  obj[UserSettingsPath.SESSIONS] = arg1(dependencyMap[4]).WebUserSettings.SESSIONS_PANEL;
  const WebUserSettings2 = arg1(dependencyMap[4]).WebUserSettings;
  obj[UserSettingsPath.AUTHORIZED_APPS] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings2.AUTHORIZED_APPS_CATEGORY : WebUserSettings2.AUTHORIZED_APPS_PANEL;
  const WebUserSettings3 = arg1(dependencyMap[4]).WebUserSettings;
  obj[UserSettingsPath.CONNECTIONS] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings3.CONNECTIONS_CATEGORY : WebUserSettings3.CONNECTIONS_PANEL;
  obj[UserSettingsPath.CLIPS] = arg1(dependencyMap[4]).WebUserSettings.CLIPS_PANEL;
  obj[UserSettingsPath.PREMIUM] = arg1(dependencyMap[4]).WebUserSettings.NITRO_PANEL;
  obj[UserSettingsPath.GUILD_BOOSTING] = arg1(dependencyMap[4]).WebUserSettings.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.SUBSCRIPTIONS] = arg1(dependencyMap[4]).WebUserSettings.SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS] = arg1(dependencyMap[4]).WebUserSettings.SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.INVENTORY] = arg1(dependencyMap[4]).WebUserSettings.GIFT_PANEL;
  obj[UserSettingsPath.BILLING] = arg1(dependencyMap[4]).WebUserSettings.BILLING_PANEL;
  obj[UserSettingsPath.APPEARANCE] = arg1(dependencyMap[4]).WebUserSettings.APPEARANCE_PANEL;
  obj[UserSettingsPath.ACCESSIBILITY] = arg1(dependencyMap[4]).WebUserSettings.ACCESSIBILITY_PANEL;
  obj[UserSettingsPath.VOICE] = arg1(dependencyMap[4]).WebUserSettings.VOICE_AND_VIDEO_PANEL;
  obj[UserSettingsPath.POGGERMODE] = arg1(dependencyMap[4]).WebUserSettings.POGGERMODE_PANEL;
  obj[UserSettingsPath.TEXT] = arg1(dependencyMap[4]).WebUserSettings.APPEARANCE_MESSAGES_CATEGORY;
  obj[UserSettingsPath.NOTIFICATIONS] = arg1(dependencyMap[4]).WebUserSettings.NOTIFICATIONS_PANEL;
  obj[UserSettingsPath.EMAILS] = arg1(dependencyMap[4]).WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY;
  obj[UserSettingsPath.NOTIFICATIONS_EMAILS] = arg1(dependencyMap[4]).WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY;
  obj[UserSettingsPath.KEYBINDS] = arg1(dependencyMap[4]).WebUserSettings.KEYBINDS_PANEL;
  obj[UserSettingsPath.LANGUAGE] = arg1(dependencyMap[4]).WebUserSettings.LANGUAGE_AND_TIME_PANEL;
  obj[UserSettingsPath.WINDOWS] = arg1(dependencyMap[4]).WebUserSettings.WINDOWS_PANEL;
  obj[UserSettingsPath.LINUX] = arg1(dependencyMap[4]).WebUserSettings.LINUX_PANEL;
  obj[UserSettingsPath.STREAMER_MODE] = arg1(dependencyMap[4]).WebUserSettings.STREAMER_MODE_CATEGORY;
  obj[UserSettingsPath.ADVANCED] = arg1(dependencyMap[4]).WebUserSettings.DEVELOPER_PANEL;
  obj[UserSettingsPath.ACTIVITY_PRIVACY] = arg1(dependencyMap[4]).WebUserSettings.ACTIVITY_PRIVACY_PANEL;
  obj[UserSettingsPath.REGISTERED_GAMES] = arg1(dependencyMap[4]).WebUserSettings.REGISTERED_GAMES_PANEL;
  obj[UserSettingsPath.OVERLAY] = arg1(dependencyMap[4]).WebUserSettings.OVERLAY_PANEL;
  obj[UserSettingsPath.EXPERIMENTS] = arg1(dependencyMap[4]).WebUserSettings.EXPERIMENTS_PANEL;
  obj[UserSettingsPath.DEVELOPER_OPTIONS] = arg1(dependencyMap[4]).WebUserSettings.DEVELOPER_OPTIONS_PANEL;
  obj = {};
  let tmp5;
  if (isUserSettingsPath(joined)) {
    tmp5 = obj[joined];
  }
  if (null == tmp5) {
    let tmp7;
    if (isUserSettingsPath(tmp2)) {
      tmp7 = obj[tmp2];
    }
    tmp5 = tmp7;
  }
  obj.target = tmp5;
  obj.path = joined;
  const obj2 = arg1(dependencyMap[3]);
  if (null == search) {
    const _location = location;
    search = location.search;
  }
  obj.params = arg1(dependencyMap[6]).parse(search);
  return obj;
};
