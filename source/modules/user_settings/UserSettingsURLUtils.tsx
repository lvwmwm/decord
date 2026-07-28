// Module ID: 5020
// Function ID: 43104
// Name: normalizeSection
// Dependencies: [57, 662, 653, 5021, 5022, 675, 5023, 2]
// Exports: parseSettingsUrl, settingsPathToRoute, trackParseSettingsUrl

// Module 5020 (normalizeSection)
import _slicedToArray from "_slicedToArray";
import { UserSettingsPath } from "MAX_FAVORITES";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
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
({ AnalyticEvents: closure_5, Routes: closure_6 } = ME);
const re7 = /[_\s]|%20/g;
const result = require("ME").fileFinishedImporting("modules/user_settings/UserSettingsURLUtils.tsx");

export const settingsPathToRoute = function settingsPathToRoute(ACCOUNT) {
  const parts = ACCOUNT.split("/");
  return closure_6.SETTINGS(parts[0], parts[1]);
};
export const trackParseSettingsUrl = function trackParseSettingsUrl(path, user_settings_url_origin) {
  path = path.path;
  if (null != path.target) {
    let obj = { user_settings_url_path: path, user_settings_url_origin };
    importDefault(675).track(constants.USER_SETTINGS_URL_PARSED, obj);
    const obj3 = importDefault(675);
  } else {
    obj = importDefault(675);
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
  const isEligibleForUserSettingsRedesign4DExperiment = require(5021) /* apexExperiment */.getIsEligibleForUserSettingsRedesign4DExperiment("UserSection");
  let obj = { [closure_4.ACCOUNT]: require(5022) /* WebUserSettings */.WebUserSettings.ACCOUNT_PANEL, [closure_4.ACCOUNT_STANDING]: require(5022) /* WebUserSettings */.WebUserSettings.ACCOUNT_STANDING_CATEGORY, [closure_4.ACCOUNT_ACCOUNT_STANDING]: require(5022) /* WebUserSettings */.WebUserSettings.ACCOUNT_STANDING_CATEGORY, [closure_4.PROFILE_CUSTOMIZATION]: require(5022) /* WebUserSettings */.WebUserSettings.PROFILE_PANEL };
  const WebUserSettings = require(5022) /* WebUserSettings */.WebUserSettings;
  obj[UserSettingsPath.CONTENT_AND_SOCIAL] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings.MESSAGING_PERMISSIONS_PANEL : WebUserSettings.CONTENT_AND_SOCIAL_PANEL;
  obj[UserSettingsPath.CONNECTED_GAMES] = require(5022) /* WebUserSettings */.WebUserSettings.CONNECTED_GAMES_CATEGORY;
  obj[UserSettingsPath.CONTENT_AND_SOCIAL_CONNECTED_GAMES] = require(5022) /* WebUserSettings */.WebUserSettings.CONNECTED_GAMES_CATEGORY;
  obj[UserSettingsPath.DATA_AND_PRIVACY] = require(5022) /* WebUserSettings */.WebUserSettings.DATA_AND_PRIVACY_PANEL;
  obj[UserSettingsPath.PRIVACY_AND_SAFETY] = require(5022) /* WebUserSettings */.WebUserSettings.DATA_AND_PRIVACY_PANEL;
  obj[UserSettingsPath.FAMILY_CENTER] = require(5022) /* WebUserSettings */.WebUserSettings.FAMILY_CENTER_PANEL;
  obj[UserSettingsPath.SESSIONS] = require(5022) /* WebUserSettings */.WebUserSettings.SESSIONS_PANEL;
  const WebUserSettings2 = require(5022) /* WebUserSettings */.WebUserSettings;
  obj[UserSettingsPath.AUTHORIZED_APPS] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings2.AUTHORIZED_APPS_CATEGORY : WebUserSettings2.AUTHORIZED_APPS_PANEL;
  const WebUserSettings3 = require(5022) /* WebUserSettings */.WebUserSettings;
  obj[UserSettingsPath.CONNECTIONS] = isEligibleForUserSettingsRedesign4DExperiment ? WebUserSettings3.CONNECTIONS_CATEGORY : WebUserSettings3.CONNECTIONS_PANEL;
  obj[UserSettingsPath.CLIPS] = require(5022) /* WebUserSettings */.WebUserSettings.CLIPS_PANEL;
  obj[UserSettingsPath.PREMIUM] = require(5022) /* WebUserSettings */.WebUserSettings.NITRO_PANEL;
  obj[UserSettingsPath.GUILD_BOOSTING] = require(5022) /* WebUserSettings */.WebUserSettings.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.SUBSCRIPTIONS] = require(5022) /* WebUserSettings */.WebUserSettings.SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS] = require(5022) /* WebUserSettings */.WebUserSettings.SUBSCRIPTIONS_PANEL;
  obj[UserSettingsPath.INVENTORY] = require(5022) /* WebUserSettings */.WebUserSettings.GIFT_PANEL;
  obj[UserSettingsPath.BILLING] = require(5022) /* WebUserSettings */.WebUserSettings.BILLING_PANEL;
  obj[UserSettingsPath.APPEARANCE] = require(5022) /* WebUserSettings */.WebUserSettings.APPEARANCE_PANEL;
  obj[UserSettingsPath.ACCESSIBILITY] = require(5022) /* WebUserSettings */.WebUserSettings.ACCESSIBILITY_PANEL;
  obj[UserSettingsPath.VOICE] = require(5022) /* WebUserSettings */.WebUserSettings.VOICE_AND_VIDEO_PANEL;
  obj[UserSettingsPath.POGGERMODE] = require(5022) /* WebUserSettings */.WebUserSettings.POGGERMODE_PANEL;
  obj[UserSettingsPath.TEXT] = require(5022) /* WebUserSettings */.WebUserSettings.APPEARANCE_MESSAGES_CATEGORY;
  obj[UserSettingsPath.NOTIFICATIONS] = require(5022) /* WebUserSettings */.WebUserSettings.NOTIFICATIONS_PANEL;
  obj[UserSettingsPath.EMAILS] = require(5022) /* WebUserSettings */.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY;
  obj[UserSettingsPath.NOTIFICATIONS_EMAILS] = require(5022) /* WebUserSettings */.WebUserSettings.NOTIFICATIONS_EMAIL_CATEGORY;
  obj[UserSettingsPath.KEYBINDS] = require(5022) /* WebUserSettings */.WebUserSettings.SYSTEM_CUSTOM_KEYBINDS_CATEGORY;
  obj[UserSettingsPath.SYSTEM] = require(5022) /* WebUserSettings */.WebUserSettings.SYSTEM_PANEL;
  obj[UserSettingsPath.LANGUAGE] = require(5022) /* WebUserSettings */.WebUserSettings.LANGUAGE_AND_TIME_PANEL;
  obj[UserSettingsPath.WINDOWS] = require(5022) /* WebUserSettings */.WebUserSettings.SYSTEM_PANEL;
  obj[UserSettingsPath.LINUX] = require(5022) /* WebUserSettings */.WebUserSettings.SYSTEM_PANEL;
  obj[UserSettingsPath.STREAMER_MODE] = require(5022) /* WebUserSettings */.WebUserSettings.STREAMER_MODE_CATEGORY;
  obj[UserSettingsPath.ADVANCED] = require(5022) /* WebUserSettings */.WebUserSettings.DEVELOPER_PANEL;
  obj[UserSettingsPath.ACTIVITY_PRIVACY] = require(5022) /* WebUserSettings */.WebUserSettings.ACTIVITY_PRIVACY_PANEL;
  obj[UserSettingsPath.REGISTERED_GAMES] = require(5022) /* WebUserSettings */.WebUserSettings.REGISTERED_GAMES_PANEL;
  obj[UserSettingsPath.OVERLAY] = require(5022) /* WebUserSettings */.WebUserSettings.OVERLAY_PANEL;
  obj[UserSettingsPath.EXPERIMENTS] = require(5022) /* WebUserSettings */.WebUserSettings.EXPERIMENTS_PANEL;
  obj[UserSettingsPath.DEVELOPER_OPTIONS] = require(5022) /* WebUserSettings */.WebUserSettings.DEVELOPER_OPTIONS_PANEL;
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
  const obj2 = require(5021) /* apexExperiment */;
  if (null == search) {
    const _location = location;
    search = location.search;
  }
  obj.params = require(5023) /* encode */.parse(search);
  return obj;
};
