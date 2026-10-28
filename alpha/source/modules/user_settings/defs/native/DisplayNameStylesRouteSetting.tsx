// Module ID: 16963
// Function ID: 16964
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1084, 11248, 1125, 2929, 16964, 2]

// Module 16963 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import _modDef2929 from "module_2929" /* 2929 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2929.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: UserSettingsSections.DISPLAY_NAME_STYLES,
    getComponent() {
      return require("DisplayNameStylesEditScreen").default;
    }
  },
  usePredicate() {
    return true;
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
