// Module ID: 16806
// Function ID: 16807
// Name: ConnectionsSetting
// Dependencies: [1072, 11505, 1114, 16807, 16809, 2]

// Module 16806 (ConnectionsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 16807 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
