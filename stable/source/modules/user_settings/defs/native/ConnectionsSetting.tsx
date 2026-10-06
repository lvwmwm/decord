// Module ID: 14477
// Function ID: 14478
// Name: ConnectionsSetting
// Dependencies: [1086, 10874, 1127, 14478, 14480, 2]

// Module 14477 (ConnectionsSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 14478 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: PuzzlePieceIcon.PuzzlePieceIcon,
  screen: {
    route: UserSettingsSections.CONNECTIONS,
    getComponent() {
      return require("ConnectionsSettingScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;
