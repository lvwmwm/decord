// Module ID: 13548
// Function ID: 102787
// Name: pressable
// Dependencies: []

// Module 13548 (pressable)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.w/qqKK);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => {
      const currentUser = currentUser.getCurrentUser();
      let email;
      if (null != currentUser) {
        email = currentUser.email;
      }
      return email;
    });
  },
  onPress: function onAccountEmailSettingPress() {
    importDefault(dependencyMap[3]).open(true);
  },
  withArrow: true
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default pressable;
