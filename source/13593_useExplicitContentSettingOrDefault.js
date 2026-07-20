// Module ID: 13593
// Function ID: 103026
// Name: useExplicitContentSettingOrDefault
// Dependencies: []
// Exports: useExplicitContentSettingOrDefault, useGoreContentSettingOrDefault

// Module 13593 (useExplicitContentSettingOrDefault)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx");

export const useExplicitContentSettingOrDefault = function useExplicitContentSettingOrDefault() {
  let obj = arg1(dependencyMap[1]);
  const items = [closure_2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let prop;
    if (null != textAndImages) {
      prop = textAndImages.explicitContentSettings;
    }
    if (null == prop) {
      prop = callback(closure_1[2]).getExplicitContentSettingOrDefault();
      const obj = callback(closure_1[2]);
    }
    return prop;
  });
  obj = {};
  let obj2 = arg1(dependencyMap[2]);
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
  obj.explicitContentNonFriendDm = arg1(dependencyMap[2]).resolveExplicitContentSettingWithDefaults(obj1);
  const obj5 = arg1(dependencyMap[2]);
  obj2 = { 520035839: null, 1157570559: null, 315659: null };
  let prop2;
  if (null != stateFromStoresObject) {
    prop2 = stateFromStoresObject.explicitContentFriendDm;
  }
  obj2.setting = prop2;
  obj.explicitContentFriendDm = arg1(dependencyMap[2]).resolveExplicitContentSettingWithDefaults(obj2);
  return obj;
};
export const useGoreContentSettingOrDefault = function useGoreContentSettingOrDefault() {
  let obj = arg1(dependencyMap[1]);
  const items = [closure_2];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const textAndImages = settings.settings.textAndImages;
    let goreContentSettings;
    if (null != textAndImages) {
      goreContentSettings = textAndImages.goreContentSettings;
    }
    if (null == goreContentSettings) {
      goreContentSettings = callback(closure_1[3]).getGoreContentSettingOrDefault();
      const obj = callback(closure_1[3]);
    }
    return goreContentSettings;
  });
  obj = {};
  let obj2 = arg1(dependencyMap[3]);
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
  obj.goreContentNonFriendDm = arg1(dependencyMap[3]).resolveGoreSettingWithDefaults(obj1);
  const obj5 = arg1(dependencyMap[3]);
  obj2 = { 520035839: null, 1157570559: null, 315659: null };
  let goreContentFriendDm;
  if (null != stateFromStoresObject) {
    goreContentFriendDm = stateFromStoresObject.goreContentFriendDm;
  }
  obj2.setting = goreContentFriendDm;
  obj.goreContentFriendDm = arg1(dependencyMap[3]).resolveGoreSettingWithDefaults(obj2);
  return obj;
};
