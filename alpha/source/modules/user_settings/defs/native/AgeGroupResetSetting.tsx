// Module ID: 17295
// Function ID: 17296
// Name: AgeGroupResetSetting
// Dependencies: [9213, 21, 12612, 1113, 3323, 17296, 6268, 17292, 2]

// Module 17295 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3323 from "module_3323" /* 3323 */;
import useAlertStore from "useAlertStore" /* 6268 */;
import SettingsConstants from "SettingsConstants" /* 9213 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 17292 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 17296 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3323["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3323.Gn0SAj);
  },
  onPress() {
    SettingsAgeGroupResetAlert.default;
    const openAlert = useAlertStore.openAlert;
    useAlertStore;
    openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, <_default />);
  },
  withArrow: true,
  usePredicate: AgeGroupScreenRowProps.useShowAssignedAdultAgeGroupRow
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
