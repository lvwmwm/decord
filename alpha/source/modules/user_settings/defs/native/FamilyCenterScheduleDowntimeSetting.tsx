// Module ID: 15214
// Function ID: 15215
// Name: FamilyCenterScheduleDowntimeSetting
// Dependencies: [7993, 1085, 10663, 1126, 2568, 15215, 2]

// Module 15214 (FamilyCenterScheduleDowntimeSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2568["w/ISB8"]);
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
