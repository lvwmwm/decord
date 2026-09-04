// Module ID: 15257
// Function ID: 15258
// Name: route
// Dependencies: [673, 11400, 1233, 2758, 15258, 2]

// Module 15257 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2758 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: obj,
  usePredicate() {
    return true;
  }
};
obj = {
  route: ME.UserSettingsSections.DISPLAY_NAME_STYLES,
  getComponent() {
    return require(15258) /* ApplyButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
