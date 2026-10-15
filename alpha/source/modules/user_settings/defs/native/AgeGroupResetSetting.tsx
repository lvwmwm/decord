// Module ID: 15664
// Function ID: 15665
// Name: AgeGroupResetSetting
// Dependencies: [8210, 21, 10991, 1126, 3122, 15665, 5361, 15661, 2]

// Module 15664 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3122 from "module_3122" /* 3122 */;
import useAlertStore from "useAlertStore" /* 5361 */;
import SettingsConstants from "SettingsConstants" /* 8210 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15661 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15665 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3122["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3122.Gn0SAj);
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
