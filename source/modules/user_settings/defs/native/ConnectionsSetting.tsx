// Module ID: 14508
// Function ID: 14509
// Name: route
// Dependencies: [676, 10988, 1236, 14509, 14511, 2]

// Module 14508 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PuzzlePieceIcon from "PuzzlePieceIcon" /* 14509 */;
import createToggle from "createToggle" /* 10988 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3fe7U5"]);
  },
  parent: null,
  IconComponent: PuzzlePieceIcon.PuzzlePieceIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CONNECTIONS,
  getComponent() {
    return require(14511) /* onPress */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ConnectionsSetting.tsx");

export default route;
