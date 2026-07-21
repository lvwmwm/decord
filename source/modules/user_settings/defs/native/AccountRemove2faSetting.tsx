// Module ID: 13573
// Function ID: 102894
// Name: pressable
// Dependencies: []

// Module 13573 (pressable)
const _module = require(dependencyMap[5]);
const pressable = _module.createPressable({
  useTitle() {
    const intl = require(dependencyMap[3]).intl;
    return intl.string(require(dependencyMap[3]).t.D+aE7g);
  },
  parent: require(dependencyMap[0]).MobileSetting.ACCOUNT,
  onPress: function remove2FA() {
    let obj = importDefault(dependencyMap[2]);
    obj = {};
    const intl = require(dependencyMap[3]).intl;
    obj.title = intl.string(require(dependencyMap[3]).t.D+aE7g);
    const intl2 = require(dependencyMap[3]).intl;
    obj.body = intl2.string(require(dependencyMap[3]).t.EA4ZEk);
    const intl3 = require(dependencyMap[3]).intl;
    obj.cancelText = intl3.string(require(dependencyMap[3]).t.ETE/oC);
    obj.onConfirm = function onConfirm() {
      return callback(closure_2[4]).disable();
    };
    obj.show(obj);
  },
  useIsDisabled() {
    return null !== require(dependencyMap[1]).use2FARemoveDisableReason();
  },
  useDescription: require(dependencyMap[1]).use2FARemoveDisableReason,
  usePredicate: require(dependencyMap[6]).useIsTOTPEnabled
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;
