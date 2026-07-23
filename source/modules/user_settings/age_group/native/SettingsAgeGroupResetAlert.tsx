// Module ID: 13677
// Function ID: 105012
// Name: SettingsAgeGroupResetAlert
// Dependencies: [5, 33, 1456, 12693, 4472, 3830, 1212, 4475, 2716, 4475, 2]
// Exports: default

// Module 13677 (SettingsAgeGroupResetAlert)
import presentAddedFriendToast from "presentAddedFriendToast";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("useNavigation").fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx");

export default function SettingsAgeGroupResetAlert() {
  function _handleConfirm(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  let obj = _require(1456);
  _require = obj.useNavigation();
  obj = {};
  const intl = _require(1212).intl;
  obj.title = intl.string(_handleConfirm(2716)["bD//cU"]);
  const intl2 = _require(1212).intl;
  obj.content = intl2.string(_handleConfirm(2716).FbTAmI);
  obj = {};
  const obj1 = {
    variant: "destructive",
    onPress: function handleConfirm() {
      return _handleConfirm(...arguments);
    }
  };
  const intl3 = _require(1212).intl;
  obj1.text = intl3.string(_handleConfirm(2716).V822Mp);
  const items = [callback(_require(4475).AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary" };
  const intl4 = _require(1212).intl;
  obj2.text = intl4.string(_require(1212).t["ETE/oC"]);
  items[1] = callback(_require(4475).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = callback2(_require(4475).AlertActions, obj);
  return callback(_require(4475).AlertModal, obj);
};
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";
