// Module ID: 13747
// Function ID: 105429
// Name: pressable
// Dependencies: [7751, 13748, 4470, 1212, 13698, 10127, 13699, 2]

// Module 13747 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["D+aE7g"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function remove2FA() {
    let obj = importDefault(4470);
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["D+aE7g"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.body = intl2.string(require(1212) /* getSystemLocale */.t.EA4ZEk);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.cancelText = intl3.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
    obj.onConfirm = function onConfirm() {
      return outer1_1(outer1_2[4]).disable();
    };
    obj.show(obj);
  },
  useIsDisabled() {
    return null !== require(13748) /* getSMSBackupDisabledMessage */.use2FARemoveDisableReason();
  },
  useDescription: require("getSMSBackupDisabledMessage").use2FARemoveDisableReason,
  usePredicate: require("useIs2FAEnabled").useIsTOTPEnabled
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["D+aE7g"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function remove2FA() {
    let obj = importDefault(4470);
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t["D+aE7g"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.body = intl2.string(require(1212) /* getSystemLocale */.t.EA4ZEk);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.cancelText = intl3.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
    obj.onConfirm = function onConfirm() {
      return outer1_1(outer1_2[4]).disable();
    };
    obj.show(obj);
  },
  useIsDisabled() {
    return null !== require(13748) /* getSMSBackupDisabledMessage */.use2FARemoveDisableReason();
  },
  useDescription: require("getSMSBackupDisabledMessage").use2FARemoveDisableReason,
  usePredicate: require("useIs2FAEnabled").useIsTOTPEnabled
};
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;
