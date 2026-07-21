// Module ID: 5672
// Function ID: 48728
// Name: resolveExplicitContentSettingWithDefaults
// Dependencies: []
// Exports: shouldRedactMessageMediaForForum, updateExplicitContentSetting

// Module 5672 (resolveExplicitContentSettingWithDefaults)
function resolveExplicitContentSettingWithDefaults(isFriend) {
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
    if (setting !== arg1(dependencyMap[2]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) {
      return setting;
    }
  }
  const currentUser = authStore.getCurrentUser();
  let obj = arg1(dependencyMap[3]);
  if (obj.isSettingTeenByDefault(arg1(dependencyMap[4]).SettingsDefaultFeature.SENSITIVE_CONTENT)) {
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
        let BLUR = arg1(dependencyMap[2]).ExplicitContentRedaction.BLOCK;
      }
    }
    BLUR = arg1(dependencyMap[2]).ExplicitContentRedaction.BLUR;
  } else {
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      obj = { isDm, isFriend: flag };
      let SHOW = resolveSettingWithDefaultsForTeen(obj);
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
        const ExplicitContentFilter = tmp5(tmp6[5]).ExplicitContentFilter;
        setting = ExplicitContentFilter.getSetting();
        if (flag4) {
          SHOW = obj[setting];
        } else {
          SHOW = obj[setting];
        }
      } else {
        SHOW = tmp5(tmp6[2]).ExplicitContentRedaction.SHOW;
      }
    }
    return SHOW;
  }
}
function resolveSettingWithDefaultsForTeen(isDm) {
  let flag = isDm.isDm;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isDm.isFriend;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (flag) {
    const ExplicitContentFilter = tmp(tmp2[5]).ExplicitContentFilter;
    const setting = ExplicitContentFilter.getSetting();
    if (flag2) {
      let tmp5 = obj[setting];
    } else {
      tmp5 = obj1[setting];
    }
    return tmp5;
  } else {
    return tmp(tmp2[2]).ExplicitContentRedaction.BLUR;
  }
}
function getExplicitContentSettingOrDefault(arg0) {
  let setting = arg0;
  if (null == arg0) {
    const ExplicitContentSettings = arg1(dependencyMap[5]).ExplicitContentSettings;
    setting = ExplicitContentSettings.getSetting();
  }
  let obj = {};
  obj = {};
  let prop;
  if (null != setting) {
    prop = setting.explicitContentGuilds;
  }
  obj.setting = prop;
  obj.explicitContentGuilds = resolveExplicitContentSettingWithDefaults(obj);
  obj = {};
  let prop1;
  if (null != setting) {
    prop1 = setting.explicitContentNonFriendDm;
  }
  obj.setting = prop1;
  obj.isDm = true;
  obj.explicitContentNonFriendDm = resolveExplicitContentSettingWithDefaults(obj);
  const obj1 = { 536813311: null, -773110529: null, -775094268: null };
  let prop2;
  if (null != setting) {
    prop2 = setting.explicitContentFriendDm;
  }
  obj1.setting = prop2;
  obj.explicitContentFriendDm = resolveExplicitContentSettingWithDefaults(obj1);
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
const ExplicitContentFilterTypes = arg1(dependencyMap[1]).ExplicitContentFilterTypes;
let obj = {};
const DISABLED = ExplicitContentFilterTypes.DISABLED;
let valueOfResult = DISABLED.valueOf();
obj[valueOfResult] = arg1(dependencyMap[2]).ExplicitContentRedaction.SHOW;
const NON_FRIENDS = ExplicitContentFilterTypes.NON_FRIENDS;
valueOfResult = NON_FRIENDS.valueOf();
obj[valueOfResult] = arg1(dependencyMap[2]).ExplicitContentRedaction.SHOW;
const FRIENDS_AND_NON_FRIENDS = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
obj[FRIENDS_AND_NON_FRIENDS.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLOCK;
obj = {};
const DISABLED2 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult1 = FRIENDS_AND_NON_FRIENDS.valueOf();
obj[DISABLED2.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.SHOW;
const NON_FRIENDS2 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult2 = DISABLED2.valueOf();
obj[NON_FRIENDS2.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLOCK;
const FRIENDS_AND_NON_FRIENDS2 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult3 = NON_FRIENDS2.valueOf();
obj[FRIENDS_AND_NON_FRIENDS2.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLOCK;
obj = {};
const DISABLED3 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult4 = FRIENDS_AND_NON_FRIENDS2.valueOf();
obj[DISABLED3.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLUR;
const NON_FRIENDS3 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult5 = DISABLED3.valueOf();
obj[NON_FRIENDS3.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLUR;
const FRIENDS_AND_NON_FRIENDS3 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult6 = NON_FRIENDS3.valueOf();
obj[FRIENDS_AND_NON_FRIENDS3.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLOCK;
const obj1 = {};
const DISABLED4 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult7 = FRIENDS_AND_NON_FRIENDS3.valueOf();
obj1[DISABLED4.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLUR;
const NON_FRIENDS4 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult8 = DISABLED4.valueOf();
obj1[NON_FRIENDS4.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLOCK;
const FRIENDS_AND_NON_FRIENDS4 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult9 = NON_FRIENDS4.valueOf();
obj1[FRIENDS_AND_NON_FRIENDS4.valueOf()] = arg1(dependencyMap[2]).ExplicitContentRedaction.BLOCK;
const valueOfResult10 = FRIENDS_AND_NON_FRIENDS4.valueOf();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx");

export const TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = obj;
export const TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM = obj1;
export { resolveExplicitContentSettingWithDefaults };
export { resolveSettingWithDefaultsForTeen };
export { getExplicitContentSettingOrDefault };
export const updateExplicitContentSetting = function updateExplicitContentSetting(arg0) {
  const ExplicitContentSettings = arg1(dependencyMap[5]).ExplicitContentSettings;
  const merged = Object.assign(getExplicitContentSettingOrDefault());
  const merged1 = Object.assign(arg0);
  ExplicitContentSettings.updateSetting({});
};
export const shouldRedactMessageMediaForForum = function shouldRedactMessageMediaForForum() {
  if (null == authStore.getCurrentUser()) {
    return false;
  } else {
    return arg1(dependencyMap[6]).getShouldObscureForSetting(getExplicitContentSettingOrDefault().explicitContentGuilds);
  }
};
