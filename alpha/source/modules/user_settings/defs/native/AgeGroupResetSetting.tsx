// Module ID: 15102
// Function ID: 15103
// Name: AgeGroupResetSetting
// Dependencies: [8323, 21, 11811, 1115, 3038, 15103, 5197, 15099, 2]

// Module 15102 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import _modDef3038 from "module_3038" /* 3038 */;
import useAlertStore from "useAlertStore" /* 5197 */;
import SettingsConstants from "SettingsConstants" /* 8323 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15099 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15103 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3038["bD//cU"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3038.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
