// Module ID: 15369
// Function ID: 15370
// Name: route
// Dependencies: [673, 11288, 1233, 4433, 15370, 2]

// Module 15369 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4433 */;
import ChangeLogScreen from "ChangeLogScreen" /* 15370 */;
import createToggle from "createToggle" /* 11288 */;

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
