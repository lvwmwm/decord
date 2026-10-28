// Module ID: 16514
// Function ID: 16515
// Name: ConnectionsSetting
// Dependencies: [1084, 11248, 1125, 16515, 16517, 2]

// Module 16514 (ConnectionsSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 16515 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
