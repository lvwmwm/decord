// Module ID: 15140
// Function ID: 15141
// Name: route
// Dependencies: [676, 11068, 1236, 4433, 15141, 2]

// Module 15140 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4433 */;
import ChangeLogScreen from "ChangeLogScreen" /* 15141 */;
import createToggle from "createToggle" /* 11068 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LRmNAl);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.CHANGE_LOG,
  getComponent() {
    return ChangeLogScreen.ChangeLogScreen;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;
