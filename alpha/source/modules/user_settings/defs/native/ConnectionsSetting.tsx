// Module ID: 15238
// Function ID: 15239
// Name: ConnectionsSetting
// Dependencies: [1074, 11729, 1115, 15239, 15241, 2]

// Module 15238 (ConnectionsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 15239 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
