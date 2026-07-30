// Module ID: 13846
// Function ID: 13847
// Name: useExplicitContentSettingOrDefault
// Dependencies: [1340, 647, 5879, 5881, 2]
// Exports: useExplicitContentSettingOrDefault, useGoreContentSettingOrDefault

// Module 13846 (useExplicitContentSettingOrDefault)
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";

const require = arg1;
const result = require("resolveExplicitContentSettingWithDefaults").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx");

export const useExplicitContentSettingOrDefault = function useExplicitContentSettingOrDefault() {
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [handleConnectionClosedOrResumed];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let prop;
    if (textAndImages != null) {
      prop = textAndImages.explicitContentSettings;
    }
    if (prop == null) {
      prop = callback(table[2]).getExplicitContentSettingOrDefault();
      const obj = callback(table[2]);
    }
    return prop;
  });
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  obj = { explicitContentGuilds: require(5879) /* resolveExplicitContentSettingWithDefaults */.resolveExplicitContentSettingWithDefaults({ setting: prop }), explicitContentNonFriendDm: null, explicitContentFriendDm: null };
  let tmpResult = tmp(5879);
  let prop1;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  obj[1] = tmpResult.resolveExplicitContentSettingWithDefaults({ setting: prop1, isDm: true });
  tmpResult = tmp(5879);
  let prop2;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  obj[2] = tmpResult.resolveExplicitContentSettingWithDefaults({ setting: prop2, isDm: true, isFriend: true });
  return obj;
};
export const useGoreContentSettingOrDefault = function useGoreContentSettingOrDefault() {
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [handleConnectionClosedOrResumed];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let goreContentSettings;
    if (textAndImages != null) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
    if (goreContentSettings == null) {
      goreContentSettings = callback(table[3]).getGoreContentSettingOrDefault();
      const obj = callback(table[3]);
    }
    return goreContentSettings;
  });
  let goreContentGuilds;
  if (stateFromStoresObject != null) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  obj = { goreContentGuilds: require(5881) /* resolveGoreSettingWithDefaults */.resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: null, goreContentFriendDm: null };
  let tmpResult = tmp(5881);
  let prop;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  obj[1] = tmpResult.resolveGoreSettingWithDefaults({ setting: prop, isDm: true });
  tmpResult = tmp(5881);
  let goreContentFriendDm;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  obj[2] = tmpResult.resolveGoreSettingWithDefaults({ setting: goreContentFriendDm, isDm: true, isFriend: true });
  return obj;
};
