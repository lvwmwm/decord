// Module ID: 5678
// Function ID: 48772
// Name: resolveGoreSettingWithDefaults
// Dependencies: [31, 1849, 653, 1282, 3809, 3816, 3803, 2]
// Exports: updateGoreContentSetting, useSensitiveContentFilterHelpArticle

// Module 5678 (resolveGoreSettingWithDefaults)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { HelpdeskArticles } from "ME";

const require = arg1;
function resolveGoreSettingWithDefaults(isFriend) {
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
    if (setting !== require(1282) /* _callSuper */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) {
      return setting;
    }
  }
  currentUser = currentUser.getCurrentUser();
  let obj = require(3809) /* isFeatureAgeGated */;
  if (obj.isSettingTeenByDefault(require(3816) /* SettingsDefaultFeature */.SettingsDefaultFeature.SENSITIVE_CONTENT)) {
    obj = { isDm, isFriend: flag };
    let flag5 = obj.isDm;
    if (flag5 === undefined) {
      flag5 = false;
    }
    let flag6 = obj.isFriend;
    if (flag6 === undefined) {
      flag6 = false;
    }
    if (flag5) {
      if (!flag6) {
        let BLUR = require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK;
      }
    }
    BLUR = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
  } else {
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      obj = { isDm, isFriend: flag };
      let SHOW = resolveGoreSettingWithDefaultsForTeen(obj);
    } else {
      const obj1 = { isDm, isFriend: flag };
      let flag3 = obj1.isDm;
      if (flag3 === undefined) {
        flag3 = false;
      }
      let flag4 = obj1.isFriend;
      if (flag4 === undefined) {
        flag4 = false;
      }
      if (flag3) {
        if (flag4) {
          SHOW = require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW;
        }
      }
      const ExplicitContentRedaction = require(1282) /* _callSuper */.ExplicitContentRedaction;
      SHOW = flag3 ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.SHOW;
    }
    return SHOW;
  }
}
function resolveGoreSettingWithDefaultsForTeen(isDm) {
  let flag = isDm.isDm;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isDm.isFriend;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag) {
    if (flag2) {
      let BLUR = require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR;
    }
    return BLUR;
  }
  const ExplicitContentRedaction = require(1282) /* _callSuper */.ExplicitContentRedaction;
  BLUR = flag ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.BLUR;
}
function getGoreContentSettingOrDefault(arg0) {
  let setting = arg0;
  if (null == arg0) {
    const GoreContentSettings = require(3803) /* explicitContentFromProto */.GoreContentSettings;
    setting = GoreContentSettings.getSetting();
  }
  let obj = {};
  obj = {};
  let goreContentGuilds;
  if (null != setting) {
    goreContentGuilds = setting.goreContentGuilds;
  }
  obj.setting = goreContentGuilds;
  obj.goreContentGuilds = resolveGoreSettingWithDefaults(obj);
  obj = {};
  let prop;
  if (null != setting) {
    prop = setting.goreContentNonFriendDm;
  }
  obj.setting = prop;
  obj.isDm = true;
  obj.goreContentNonFriendDm = resolveGoreSettingWithDefaults(obj);
  const obj1 = { setting: null, isDm: true, isFriend: true };
  let goreContentFriendDm;
  if (null != setting) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  obj1.setting = goreContentFriendDm;
  obj.goreContentFriendDm = resolveGoreSettingWithDefaults(obj1);
  return obj;
}
const result = require("ME").fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx");

export { resolveGoreSettingWithDefaults };
export { resolveGoreSettingWithDefaultsForTeen };
export { getGoreContentSettingOrDefault };
export const updateGoreContentSetting = function updateGoreContentSetting(arg0) {
  const GoreContentSettings = require(3803) /* explicitContentFromProto */.GoreContentSettings;
  const merged = Object.assign(getGoreContentSettingOrDefault());
  const merged1 = Object.assign(arg0);
  GoreContentSettings.updateSetting({});
};
export const useSensitiveContentFilterHelpArticle = function useSensitiveContentFilterHelpArticle() {
  return React.useMemo(() => outer1_4.EXPLICIT_MEDIA_REDACTION, []);
};
