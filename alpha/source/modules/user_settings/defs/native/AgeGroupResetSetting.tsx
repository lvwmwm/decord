// Module ID: 15707
// Function ID: 15708
// Name: AgeGroupResetSetting
// Dependencies: [8214, 21, 11003, 1128, 3125, 15708, 5364, 15704, 2]

// Module 15707 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3125 from "module_3125" /* 3125 */;
import useAlertStore from "useAlertStore" /* 5364 */;
import SettingsConstants from "SettingsConstants" /* 8214 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15704 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15708 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3125["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3125.Gn0SAj);
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
