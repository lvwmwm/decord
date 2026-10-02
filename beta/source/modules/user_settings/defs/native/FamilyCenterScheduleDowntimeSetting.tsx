// Module ID: 14457
// Function ID: 14458
// Name: FamilyCenterScheduleDowntimeSetting
// Dependencies: [7421, 1086, 10874, 1127, 2490, 14458, 2]

// Module 14457 (FamilyCenterScheduleDowntimeSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import _modDef2490 from "module_2490" /* 2490 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2490["w/ISB8"]);
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
