// Module ID: 14393
// Function ID: 108586
// Name: toggle
// Dependencies: []

// Module 14393 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.opi/XK);
  },
  useDescription() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.opw5ls);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.DATA_AND_PRIVACY,
  useValue: function useSecureFramesPersistentCodesValue() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => persistentCodesEnabled.getPersistentCodesEnabled());
  },
  onValueChange: function handleSecureFramesPersistentCodesToggle(arg0) {
    const result = importDefault(dependencyMap[3]).updatePersistentCodesEnabled(arg0);
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/SecureFramesPersistentCodesSetting.tsx");

export default toggle;
export const DataAndPrivacySecureFramesPersistentCodesSetting = toggle;
