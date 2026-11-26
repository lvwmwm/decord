// Module ID: 16251
// Function ID: 16252
// Name: FamilyCenterScheduleDowntimeSetting
// Dependencies: [8712, 1071, 11942, 1112, 2824, 16252, 2]

// Module 16251 (FamilyCenterScheduleDowntimeSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef2824 from "module_2824" /* 2824 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2824["w/ISB8"]);
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
