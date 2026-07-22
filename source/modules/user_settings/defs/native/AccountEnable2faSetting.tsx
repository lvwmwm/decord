// Module ID: 13569
// Function ID: 102890
// Name: pressable
// Dependencies: [0]

// Module 13569 (pressable)
import __exportStarResult1 from "__exportStarResult1";

let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.cDgKte);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    const currentUser = currentUser.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    if (null != verified) {
      if (verified) {
        importDefault(dependencyMap[3]).open();
        const obj3 = importDefault(dependencyMap[3]);
      }
    }
    let obj = importDefault(dependencyMap[4]);
    obj = {};
    const intl = arg1(dependencyMap[5]).intl;
    obj.title = intl.string(arg1(dependencyMap[5]).t.v740sh);
    const intl2 = arg1(dependencyMap[5]).intl;
    obj.body = intl2.string(arg1(dependencyMap[5]).t.uggF7o);
    obj.show(obj);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !arg1(dependencyMap[2]).useIsTOTPEnabled();
  }
};
const pressable = obj.createPressable(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default pressable;
