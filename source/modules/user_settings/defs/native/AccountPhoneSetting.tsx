// Module ID: 13549
// Function ID: 102792
// Name: pressable
// Dependencies: []

// Module 13549 (pressable)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[2]).PHONE_VERIFICATION_MODAL_KEY;
let obj = arg1(dependencyMap[8]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.dEYpSt);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [closure_3];
    return arg1(dependencyMap[3]).useStateFromStores(items, () => {
      const currentUser = currentUser.getCurrentUser();
      let phone;
      if (null != currentUser) {
        phone = currentUser.phone;
      }
      return phone;
    });
  },
  onPress: function onAccountPhoneSettingPress() {
    let obj = importDefault(dependencyMap[4]);
    obj = { allowDeletePhone: true, reason: arg1(dependencyMap[7]).ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(arg1(dependencyMap[6])(dependencyMap[5], dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default pressable;
