// Module ID: 15018
// Function ID: 15019
// Name: FamilyCenterScheduleDowntimeSetting
// Dependencies: [7966, 1085, 11262, 1126, 2565, 15019, 2]

// Module 15018 (FamilyCenterScheduleDowntimeSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2565 from "module_2565" /* 2565 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2565["w/ISB8"]);
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
