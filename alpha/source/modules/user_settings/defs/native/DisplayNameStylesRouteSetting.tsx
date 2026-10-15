// Module ID: 16276
// Function ID: 16277
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1085, 10991, 1126, 2960, 16277, 2]

// Module 16276 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2960 from "module_2960" /* 2960 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2960.ZPMAlX);
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
