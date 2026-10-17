// Module ID: 16389
// Function ID: 16390
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1087, 11065, 1128, 2981, 16390, 2]

// Module 16389 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef2981 from "module_2981" /* 2981 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2981.ZPMAlX);
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
