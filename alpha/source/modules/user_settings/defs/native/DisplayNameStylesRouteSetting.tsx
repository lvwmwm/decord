// Module ID: 15684
// Function ID: 15685
// Name: DisplayNameStylesRouteSetting
// Dependencies: [1074, 11811, 1115, 2876, 15685, 2]

// Module 15684 (DisplayNameStylesRouteSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2876 from "module_2876" /* 2876 */;
import SettingBuilders from "SettingBuilders" /* 11811 */;
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
