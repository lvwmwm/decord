// Module ID: 15218
// Function ID: 15219
// Name: FamilyCenterScheduleDowntimeSetting
// Dependencies: [8237, 1074, 11729, 1115, 2482, 15219, 2]

// Module 15218 (FamilyCenterScheduleDowntimeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2482["w/ISB8"]);
  },
  parent: SettingsConstants.MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.FAMILY_CENTER_SCHEDULE_DOWNTIME,
    getComponent() {
      return require("ScheduleDowntimeScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterScheduleDowntimeSetting.tsx");

export default route;
