// Module ID: 17256
// Function ID: 17257
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1072, 11505, 1114, 2931, 17257, 2]

// Module 17256 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import _modDef2931 from "module_2931" /* 2931 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2931.ZPMAlX);
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
