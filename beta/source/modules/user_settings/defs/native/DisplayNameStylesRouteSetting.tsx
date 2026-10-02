// Module ID: 14868
// Function ID: 14869
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1086, 10874, 1127, 2880, 14869, 2]

// Module 14868 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import _modDef2880 from "module_2880" /* 2880 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2880.ZPMAlX);
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
