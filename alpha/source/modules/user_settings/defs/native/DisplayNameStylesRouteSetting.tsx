// Module ID: 15430
// Function ID: 15431
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1085, 11262, 1126, 2955, 15431, 2]

// Module 15430 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2955 from "module_2955" /* 2955 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2955.ZPMAlX);
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
