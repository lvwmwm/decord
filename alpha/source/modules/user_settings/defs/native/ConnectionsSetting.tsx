// Module ID: 15038
// Function ID: 15039
// Name: ConnectionsSetting
// Dependencies: [1085, 11262, 1126, 15039, 15041, 2]

// Module 15038 (ConnectionsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 15039 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
