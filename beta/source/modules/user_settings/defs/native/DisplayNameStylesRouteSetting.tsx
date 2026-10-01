// Module ID: 14880
// Function ID: 14881
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1074, 11006, 1115, 2877, 14881, 2]

// Module 14880 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import _modDef2877 from "module_2877" /* 2877 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2877.ZPMAlX);
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
