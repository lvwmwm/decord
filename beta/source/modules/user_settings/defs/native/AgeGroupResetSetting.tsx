// Module ID: 15033
// Function ID: 15034
// Name: AgeGroupResetSetting
// Dependencies: [8270, 21, 11630, 1119, 3038, 15034, 5144, 15030, 2]

// Module 15033 (AgeGroupResetSetting)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1119 */;
import _modDef3038 from "module_3038" /* 3038 */;
import useAlertStore from "useAlertStore" /* 5144 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15030 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15034 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
