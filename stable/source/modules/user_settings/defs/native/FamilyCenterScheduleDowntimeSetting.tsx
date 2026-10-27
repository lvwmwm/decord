// Module ID: 15981
// Function ID: 15982
// Name: FamilyCenterScheduleDowntimeSetting
// Dependencies: [8260, 1087, 11084, 1128, 2589, 15982, 2]

// Module 15981 (FamilyCenterScheduleDowntimeSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef2589 from "module_2589" /* 2589 */;
import SettingsConstants from "SettingsConstants" /* 8260 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2589["w/ISB8"]);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
    getComponent() {
      return require("ScheduleDowntimeScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;
