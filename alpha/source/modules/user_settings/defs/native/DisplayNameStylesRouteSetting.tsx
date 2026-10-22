// Module ID: 16608
// Function ID: 16609
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1087, 11181, 1128, 2928, 16609, 2]

// Module 16608 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef2928 from "module_2928" /* 2928 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2928.ZPMAlX);
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
