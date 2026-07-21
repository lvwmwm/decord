// Module ID: 13554
// Function ID: 102801
// Name: SettingsAgeGroupResetAlert
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 13554 (SettingsAgeGroupResetAlert)
import closure_3 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_4, jsxs: closure_5 } = require("__exportStarResult1"));
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx");

export default function SettingsAgeGroupResetAlert() {
  function _handleConfirm(arg0) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleConfirm = obj;
    return obj(...arguments);
  }
  let obj = callback(dependencyMap[2]);
  const callback = obj.useNavigation();
  obj = {};
  const intl = callback(dependencyMap[6]).intl;
  obj.title = intl.string(_handleConfirm(dependencyMap[8]).bD//cU);
  const intl2 = callback(dependencyMap[6]).intl;
  obj.content = intl2.string(_handleConfirm(dependencyMap[8]).FbTAmI);
  obj = {};
  const obj1 = {
    variant: "destructive",
    onPress: function handleConfirm() {
      return _handleConfirm(...arguments);
    }
  };
  const intl3 = callback(dependencyMap[6]).intl;
  obj1.text = intl3.string(_handleConfirm(dependencyMap[8]).V822Mp);
  const items = [callback2(callback(dependencyMap[7]).AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary" };
  const intl4 = callback(dependencyMap[6]).intl;
  obj2.text = intl4.string(callback(dependencyMap[6]).t.ETE/oC);
  items[1] = callback2(callback(dependencyMap[7]).AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = callback3(callback(dependencyMap[9]).AlertActions, obj);
  return callback2(callback(dependencyMap[7]).AlertModal, obj);
};
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";
