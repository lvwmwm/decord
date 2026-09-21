// Module ID: 15211
// Function ID: 15212
// Name: FamilyCenterScheduleDowntimeSetting
// Dependencies: [8233, 1074, 11725, 1115, 2482, 15212, 2]

// Module 15211 (FamilyCenterScheduleDowntimeSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
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
