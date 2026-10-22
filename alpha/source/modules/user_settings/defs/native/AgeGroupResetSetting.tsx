// Module ID: 15961
// Function ID: 15962
// Name: AgeGroupResetSetting
// Dependencies: [8318, 21, 11181, 1128, 3090, 15962, 5896, 15958, 2]

// Module 15961 (AgeGroupResetSetting)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1128 */;
import _modDef3090 from "module_3090" /* 3090 */;
import useAlertStore from "useAlertStore" /* 5896 */;
import SettingsConstants from "SettingsConstants" /* 8318 */;
import AgeGroupScreenRowProps from "AgeGroupScreenRowProps" /* 15958 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 15962 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3090["bD//cU"]);
  },
  parent: MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3090.Gn0SAj);
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
