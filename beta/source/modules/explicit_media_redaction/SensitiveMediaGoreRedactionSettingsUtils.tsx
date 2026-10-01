// Module ID: 6719
// Function ID: 6720
// Name: SensitiveMediaGoreRedactionSettingsUtils
// Dependencies: [19, 1372, 1074, 1186, 5735, 6717, 2021, 2]
// Exports: getGoreContentSettingOrDefault, resolveGoreSettingWithDefaultsForTeen, updateGoreContentSetting, useSensitiveContentFilterHelpArticle

// Module 6719 (SensitiveMediaGoreRedactionSettingsUtils)
import Constants from "Constants" /* 1074 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 2021 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 6717 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

function resolveGoreSettingWithDefaults(isFriend) {
  let SHOW;
  let isDm;
  let setting;
  ({ setting, isDm } = isFriend);
  if (isDm === undefined) {
    isDm = false;
  }
  let flag = isFriend.isFriend;
  if (flag === undefined) {
    flag = false;
  }
  if (null != setting) {
    if (setting !== preloaded_user_settings.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) {
      return setting;
    }
  }
  const currentUser = UserStore.getCurrentUser();
  const obj = RegionalFeatureConfigUtils;
  if (obj.isSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SENSITIVE_CONTENT)) {
    if (isDm === undefined) {
      isDm = false;
    }
    if (flag === undefined) {
      flag = false;
    }
    if (isDm) {
      let BLUR2;
      if (!flag) {
        BLUR2 = tmp4(1186).ExplicitContentRedaction.BLOCK;
      }
      SHOW = BLUR2;
    }
    BLUR2 = tmp4(1186).ExplicitContentRedaction.BLUR;
  } else {
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      let flag5 = isDm;
      if (isDm === undefined) {
        flag5 = false;
      }
      let flag6 = flag;
      if (flag === undefined) {
        flag6 = false;
      }
      if (flag5) {
        let BLUR;
        if (flag6) {
          BLUR = tmp4(1186).ExplicitContentRedaction.BLUR;
        }
        SHOW = BLUR;
      }
      const ExplicitContentRedaction2 = tmp4(1186).ExplicitContentRedaction;
      BLUR = flag5 ? ExplicitContentRedaction2.BLOCK : ExplicitContentRedaction2.BLUR;
    } else {
      let flag3 = isDm;
      if (isDm === undefined) {
        flag3 = false;
      }
      let flag4 = flag;
      if (flag === undefined) {
        flag4 = false;
      }
      if (flag3) {
        if (flag4) {
          SHOW = tmp4(1186).ExplicitContentRedaction.SHOW;
        }
      }
      const ExplicitContentRedaction = tmp4(1186).ExplicitContentRedaction;
      SHOW = flag3 ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.SHOW;
    }
  }
  return SHOW;
}
const HelpdeskArticles = Constants.HelpdeskArticles;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx");

export { resolveGoreSettingWithDefaults };
export const resolveGoreSettingWithDefaultsForTeen = function resolveGoreSettingWithDefaultsForTeen(isDm) {
  let flag = isDm.isDm;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isDm.isFriend;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag) {
    let BLUR;
    if (flag2) {
      BLUR = preloaded_user_settings.ExplicitContentRedaction.BLUR;
    }
    return BLUR;
  }
  const ExplicitContentRedaction = preloaded_user_settings.ExplicitContentRedaction;
  BLUR = flag ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.BLUR;
};
export const getGoreContentSettingOrDefault = function getGoreContentSettingOrDefault(arg0) {
  let goreContentFriendDm;
  let prop;
  let setting = arg0;
  if (arg0 == null) {
    const GoreContentSettings = UserSettings.GoreContentSettings;
    setting = GoreContentSettings.getSetting();
  }
  let goreContentGuilds;
  if (setting != null) {
    goreContentGuilds = setting.goreContentGuilds;
  }
  const obj = { goreContentGuilds: resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: resolveGoreSettingWithDefaults({ setting: prop, isDm: true }), goreContentFriendDm: resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true }) };
  prop = undefined;
  if (setting != null) {
    prop = setting.goreContentNonFriendDm;
  }
  goreContentFriendDm = undefined;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  return obj;
};
export const updateGoreContentSetting = function updateGoreContentSetting(arg0) {
  let goreContentFriendDm;
  let prop;
  const GoreContentSettings = UserSettings.GoreContentSettings;
  const setting = GoreContentSettings.getSetting();
  let goreContentGuilds;
  if (setting != null) {
    goreContentGuilds = setting.goreContentGuilds;
  }
  const obj = { goreContentGuilds: resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: resolveGoreSettingWithDefaults({ setting: prop, isDm: true }), goreContentFriendDm: resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true }) };
  prop = undefined;
  if (setting != null) {
    prop = setting.goreContentNonFriendDm;
  }
  goreContentFriendDm = undefined;
  if (setting != null) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  const GoreContentSettings2 = UserSettings.GoreContentSettings;
  const updateSetting = GoreContentSettings2.updateSetting;
  const obj2 = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  updateSetting(obj2);
};
export const useSensitiveContentFilterHelpArticle = function useSensitiveContentFilterHelpArticle() {
  return react.useMemo(() => constants.EXPLICIT_MEDIA_REDACTION, []);
};
