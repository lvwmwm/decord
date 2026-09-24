// Module ID: 15604
// Function ID: 15605
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1078, 11630, 1119, 2876, 15605, 2]

// Module 15604 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import _modDef2876 from "module_2876" /* 2876 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2876.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: Constants.UserSettingsSections.DISPLAY_NAME_STYLES,
    getComponent() {
      return require("DisplayNameStylesEditScreen").default;
    }
  },
  usePredicate() {
    return true;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
