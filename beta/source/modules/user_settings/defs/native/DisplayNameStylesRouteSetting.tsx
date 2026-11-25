// Module ID: 16747
// Function ID: 16748
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1071, 11942, 1112, 3248, 16748, 2]

// Module 16747 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef3248 from "module_3248" /* 3248 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3248.ZPMAlX);
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
