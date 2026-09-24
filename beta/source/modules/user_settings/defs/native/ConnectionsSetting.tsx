// Module ID: 15230
// Function ID: 15231
// Name: ConnectionsSetting
// Dependencies: [1078, 11630, 1119, 15231, 15233, 2]

// Module 15230 (ConnectionsSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 15231 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: PuzzlePieceIcon.PuzzlePieceIcon,
  screen: {
    route: Constants.UserSettingsSections.CONNECTIONS,
    getComponent() {
      return require("ConnectionsSettingScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;
