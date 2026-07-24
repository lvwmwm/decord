// Module ID: 5676
// Function ID: 48773
// Name: resolveExplicitContentSettingWithDefaults
// Dependencies: [1849, 3805, 1282, 3809, 3816, 3803, 5677, 2]
// Exports: shouldRedactMessageMediaForForum, updateExplicitContentSetting

// Module 5676 (resolveExplicitContentSettingWithDefaults)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ExplicitContentFilterTypes } from "items";

const require = arg1;
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
    if (setting !== require(1282) /* _callSuper */.ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION) {
      return setting;
    }
  }
  const currentUser = authStore.getCurrentUser();
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
        const ExplicitContentFilter = tmp5(3803).ExplicitContentFilter;
        setting = ExplicitContentFilter.getSetting();
        if (flag4) {
          SHOW = obj[setting];
        } else {
          SHOW = obj[setting];
        }
      } else {
        SHOW = tmp5(1282).ExplicitContentRedaction.SHOW;
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
    const ExplicitContentFilter = tmp(3803).ExplicitContentFilter;
    const setting = ExplicitContentFilter.getSetting();
    if (flag2) {
      let tmp5 = obj[setting];
    } else {
      tmp5 = obj1[setting];
    }
    return tmp5;
  } else {
    return tmp(1282).ExplicitContentRedaction.BLUR;
  }
}
function getExplicitContentSettingOrDefault(arg0) {
  let setting = arg0;
  if (null == arg0) {
    const ExplicitContentSettings = require(3803) /* explicitContentFromProto */.ExplicitContentSettings;
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
  const obj1 = { setting: null, isDm: true, isFriend: true };
  let prop2;
  if (null != setting) {
    prop2 = setting.explicitContentFriendDm;
  }
  obj1.setting = prop2;
  obj.explicitContentFriendDm = resolveExplicitContentSettingWithDefaults(obj1);
  return obj;
}
let obj = {};
const DISABLED = ExplicitContentFilterTypes.DISABLED;
let valueOfResult = DISABLED.valueOf();
obj[valueOfResult] = require("_callSuper").ExplicitContentRedaction.SHOW;
const NON_FRIENDS = ExplicitContentFilterTypes.NON_FRIENDS;
valueOfResult = NON_FRIENDS.valueOf();
obj[valueOfResult] = require("_callSuper").ExplicitContentRedaction.SHOW;
const FRIENDS_AND_NON_FRIENDS = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
obj[FRIENDS_AND_NON_FRIENDS.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLOCK;
obj = {};
const DISABLED2 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult1 = FRIENDS_AND_NON_FRIENDS.valueOf();
obj[DISABLED2.valueOf()] = require("_callSuper").ExplicitContentRedaction.SHOW;
const NON_FRIENDS2 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult2 = DISABLED2.valueOf();
obj[NON_FRIENDS2.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLOCK;
const FRIENDS_AND_NON_FRIENDS2 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult3 = NON_FRIENDS2.valueOf();
obj[FRIENDS_AND_NON_FRIENDS2.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLOCK;
obj = {};
const DISABLED3 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult4 = FRIENDS_AND_NON_FRIENDS2.valueOf();
obj[DISABLED3.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLUR;
const NON_FRIENDS3 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult5 = DISABLED3.valueOf();
obj[NON_FRIENDS3.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLUR;
const FRIENDS_AND_NON_FRIENDS3 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult6 = NON_FRIENDS3.valueOf();
obj[FRIENDS_AND_NON_FRIENDS3.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLOCK;
let obj1 = {};
const DISABLED4 = ExplicitContentFilterTypes.DISABLED;
const valueOfResult7 = FRIENDS_AND_NON_FRIENDS3.valueOf();
obj1[DISABLED4.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLUR;
const NON_FRIENDS4 = ExplicitContentFilterTypes.NON_FRIENDS;
const valueOfResult8 = DISABLED4.valueOf();
obj1[NON_FRIENDS4.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLOCK;
const FRIENDS_AND_NON_FRIENDS4 = ExplicitContentFilterTypes.FRIENDS_AND_NON_FRIENDS;
const valueOfResult9 = NON_FRIENDS4.valueOf();
obj1[FRIENDS_AND_NON_FRIENDS4.valueOf()] = require("_callSuper").ExplicitContentRedaction.BLOCK;
const valueOfResult10 = FRIENDS_AND_NON_FRIENDS4.valueOf();
const result = require("_callSuper").fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaExplicitRedactionSettingsUtils.tsx");

export const TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_FRIEND_DM = obj;
export const TEEN_EXPLICIT_CONTENT_FILTER_TO_EXPLICIT_CONTENT_REDACTION_NON_FRIEND_DM = obj1;
export { resolveExplicitContentSettingWithDefaults };
export { resolveSettingWithDefaultsForTeen };
export { getExplicitContentSettingOrDefault };
export const updateExplicitContentSetting = function updateExplicitContentSetting(arg0) {
  const ExplicitContentSettings = require(3803) /* explicitContentFromProto */.ExplicitContentSettings;
  const merged = Object.assign(getExplicitContentSettingOrDefault());
  const merged1 = Object.assign(arg0);
  ExplicitContentSettings.updateSetting({});
};
export const shouldRedactMessageMediaForForum = function shouldRedactMessageMediaForForum() {
  if (null == authStore.getCurrentUser()) {
    return false;
  } else {
    return require(5677) /* getShouldObscureForSetting */.getShouldObscureForSetting(getExplicitContentSettingOrDefault().explicitContentGuilds);
  }
};
