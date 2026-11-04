// Module ID: 17326
// Function ID: 17327
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1072, 11540, 1113, 2932, 17327, 2]

// Module 17326 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2932 from "module_2932" /* 2932 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2932.ZPMAlX);
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
