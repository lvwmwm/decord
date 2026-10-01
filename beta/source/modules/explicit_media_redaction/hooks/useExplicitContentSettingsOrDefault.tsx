// Module ID: 14361
// Function ID: 14362
// Name: useExplicitContentSettingsOrDefault
// Dependencies: [1220, 563, 6716, 6719, 2]
// Exports: useExplicitContentSettingOrDefault, useGoreContentSettingOrDefault

// Module 14361 (useExplicitContentSettingsOrDefault)
import useStateFromStores from "useStateFromStores" /* 563 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6716 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6719 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx");

export const useExplicitContentSettingOrDefault = function useExplicitContentSettingOrDefault() {
  let prop1;
  let prop2;
  let resolveExplicitContentSettingWithDefaults2;
  let resolveExplicitContentSettingWithDefaults3;
  let settings;
  let obj = useStateFromStores;
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let prop;
    if (textAndImages != null) {
      prop = textAndImages.explicitContentSettings;
    }
    if (prop == null) {
      const obj = SensitiveMediaExplicitRedactionSettingsUtils;
      prop = obj.getExplicitContentSettingOrDefault();
    }
    return prop;
  });
  let prop;
  const resolveExplicitContentSettingWithDefaults = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.explicitContentGuilds;
  }
  const obj2 = { explicitContentGuilds: resolveExplicitContentSettingWithDefaults({ setting: prop }), explicitContentNonFriendDm: resolveExplicitContentSettingWithDefaults2({ setting: prop1, isDm: true }), explicitContentFriendDm: resolveExplicitContentSettingWithDefaults3({ setting: prop2, isDm: true, isFriend: true }) };
  prop1 = undefined;
  resolveExplicitContentSettingWithDefaults2 = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    prop1 = stateFromStoresObject.explicitContentNonFriendDm;
  }
  prop2 = undefined;
  resolveExplicitContentSettingWithDefaults3 = SensitiveMediaExplicitRedactionSettingsUtils.resolveExplicitContentSettingWithDefaults;
  SensitiveMediaExplicitRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  return obj2;
};
export const useGoreContentSettingOrDefault = function useGoreContentSettingOrDefault() {
  let goreContentFriendDm;
  let prop;
  let resolveGoreSettingWithDefaults2;
  let resolveGoreSettingWithDefaults3;
  let settings;
  let obj = useStateFromStores;
  const items = [UserSettingsProtoStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let goreContentSettings;
    if (textAndImages != null) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
    if (goreContentSettings == null) {
      const obj = SensitiveMediaGoreRedactionSettingsUtils;
      goreContentSettings = obj.getGoreContentSettingOrDefault();
    }
    return goreContentSettings;
  });
  let goreContentGuilds;
  const resolveGoreSettingWithDefaults = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    goreContentGuilds = stateFromStoresObject.goreContentGuilds;
  }
  const obj2 = { goreContentGuilds: resolveGoreSettingWithDefaults({ setting: goreContentGuilds }), goreContentNonFriendDm: resolveGoreSettingWithDefaults2({ setting: prop, isDm: true }), goreContentFriendDm: resolveGoreSettingWithDefaults3({ setting: goreContentFriendDm, isDm: true, isFriend: true }) };
  prop = undefined;
  resolveGoreSettingWithDefaults2 = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    prop = stateFromStoresObject.goreContentNonFriendDm;
  }
  goreContentFriendDm = undefined;
  resolveGoreSettingWithDefaults3 = SensitiveMediaGoreRedactionSettingsUtils.resolveGoreSettingWithDefaults;
  SensitiveMediaGoreRedactionSettingsUtils;
  if (stateFromStoresObject != null) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  return obj2;
};
