// Module ID: 5673
// Function ID: 48745
// Name: resolveGoreSettingWithDefaults
// Dependencies: []
// Exports: updateGoreContentSetting, useSensitiveContentFilterHelpArticle

// Module 5673 (resolveGoreSettingWithDefaults)
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
    if (setting !== arg1(dependencyMap[3]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) {
      return setting;
    }
  }
  const currentUser = currentUser.getCurrentUser();
  let obj = arg1(dependencyMap[4]);
  if (obj.isSettingTeenByDefault(arg1(dependencyMap[5]).SettingsDefaultFeature.SENSITIVE_CONTENT)) {
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
        let BLUR = arg1(dependencyMap[3]).ExplicitContentRedaction.BLOCK;
      }
    }
    BLUR = arg1(dependencyMap[3]).ExplicitContentRedaction.BLUR;
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
          SHOW = arg1(dependencyMap[3]).ExplicitContentRedaction.SHOW;
        }
      }
      const ExplicitContentRedaction = arg1(dependencyMap[3]).ExplicitContentRedaction;
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
      let BLUR = arg1(dependencyMap[3]).ExplicitContentRedaction.BLUR;
    }
    return BLUR;
  }
  const ExplicitContentRedaction = arg1(dependencyMap[3]).ExplicitContentRedaction;
  BLUR = flag ? ExplicitContentRedaction.BLOCK : ExplicitContentRedaction.BLUR;
}
function getGoreContentSettingOrDefault(arg0) {
  let setting = arg0;
  if (null == arg0) {
    const GoreContentSettings = arg1(dependencyMap[6]).GoreContentSettings;
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
  const obj1 = { 315917: null, 315887: null, 315891: null };
  let goreContentFriendDm;
  if (null != setting) {
    goreContentFriendDm = setting.goreContentFriendDm;
  }
  obj1.setting = goreContentFriendDm;
  obj.goreContentFriendDm = resolveGoreSettingWithDefaults(obj1);
  return obj;
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const HelpdeskArticles = arg1(dependencyMap[2]).HelpdeskArticles;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx");

export { resolveGoreSettingWithDefaults };
export { resolveGoreSettingWithDefaultsForTeen };
export { getGoreContentSettingOrDefault };
export const updateGoreContentSetting = function updateGoreContentSetting(arg0) {
  const GoreContentSettings = arg1(dependencyMap[6]).GoreContentSettings;
  const merged = Object.assign(getGoreContentSettingOrDefault());
  const merged1 = Object.assign(arg0);
  GoreContentSettings.updateSetting({});
};
export const useSensitiveContentFilterHelpArticle = function useSensitiveContentFilterHelpArticle() {
  return React.useMemo(() => constants.EXPLICIT_MEDIA_REDACTION, []);
};
