// Module ID: 13723
// Function ID: 105260
// Name: useExplicitContentSettingOrDefault
// Dependencies: [1316, 624, 5676, 5678, 2]
// Exports: useExplicitContentSettingOrDefault, useGoreContentSettingOrDefault

// Module 13723 (useExplicitContentSettingOrDefault)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("resolveExplicitContentSettingWithDefaults").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx");

export const useExplicitContentSettingOrDefault = function useExplicitContentSettingOrDefault() {
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = outer1_2.settings.textAndImages;
    let prop;
    if (null != textAndImages) {
      prop = textAndImages.explicitContentSettings;
    }
    if (null == prop) {
      prop = outer1_0(outer1_1[2]).getExplicitContentSettingOrDefault();
      const obj = outer1_0(outer1_1[2]);
    }
    return prop;
  });
  obj = {};
  let obj2 = require(5676) /* resolveExplicitContentSettingWithDefaults */;
  obj = {};
  let prop;
  if (null != stateFromStoresObject) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  obj.setting = prop;
  obj.explicitContentGuilds = obj2.resolveExplicitContentSettingWithDefaults(obj);
  const obj1 = {};
  let prop1;
  if (null != stateFromStoresObject) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  obj1.setting = prop1;
  obj1.isDm = true;
  obj.explicitContentNonFriendDm = require(5676) /* resolveExplicitContentSettingWithDefaults */.resolveExplicitContentSettingWithDefaults(obj1);
  const obj5 = require(5676) /* resolveExplicitContentSettingWithDefaults */;
  obj2 = { setting: null, isDm: true, isFriend: true };
  let prop2;
  if (null != stateFromStoresObject) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  obj2.setting = prop2;
  obj.explicitContentFriendDm = require(5676) /* resolveExplicitContentSettingWithDefaults */.resolveExplicitContentSettingWithDefaults(obj2);
  return obj;
};
export const useGoreContentSettingOrDefault = function useGoreContentSettingOrDefault() {
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = outer1_2.settings.textAndImages;
    let goreContentSettings;
    if (null != textAndImages) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
    if (null == goreContentSettings) {
      goreContentSettings = outer1_0(outer1_1[3]).getGoreContentSettingOrDefault();
      const obj = outer1_0(outer1_1[3]);
    }
    return goreContentSettings;
  });
  obj = {};
  let obj2 = require(5678) /* resolveGoreSettingWithDefaults */;
  obj = {};
  let goreContentGuilds;
  if (null != stateFromStoresObject) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  obj.setting = goreContentGuilds;
  obj.goreContentGuilds = obj2.resolveGoreSettingWithDefaults(obj);
  const obj1 = {};
  let prop;
  if (null != stateFromStoresObject) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  obj1.setting = prop;
  obj1.isDm = true;
  obj.goreContentNonFriendDm = require(5678) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaults(obj1);
  const obj5 = require(5678) /* resolveGoreSettingWithDefaults */;
  obj2 = { setting: null, isDm: true, isFriend: true };
  let goreContentFriendDm;
  if (null != stateFromStoresObject) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  obj2.setting = goreContentFriendDm;
  obj.goreContentFriendDm = require(5678) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaults(obj2);
  return obj;
};
