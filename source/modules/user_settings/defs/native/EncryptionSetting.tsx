// Module ID: 14392
// Function ID: 108590
// Name: route
// Dependencies: []

// Module 14392 (route)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.x8U2eC);
  },
  useDescription: function useSecureFramesEncryptionDescription() {
    let obj = arg1(dependencyMap[4]);
    const secureFramesVerifiedUserIds = obj.useSecureFramesVerifiedUserIds();
    const intl = arg1(dependencyMap[5]).intl;
    obj = { count: secureFramesVerifiedUserIds.length };
    return intl.formatToPlainString(arg1(dependencyMap[5]).t.6vrePS, obj);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.DATA_AND_PRIVACY,
  usePredicate: function useSecureFramesPersistentCodesValue() {
    const items = [closure_2];
    return arg1(dependencyMap[3]).useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.SECURE_FRAMES,
  getComponent() {
    return arg1(dependencyMap[7]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/defs/native/EncryptionSetting.tsx");

export default route;
export const SecureFramesEncryptionSetting = route;
