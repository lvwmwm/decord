// Module ID: 14929
// Function ID: 14930
// Name: route
// Dependencies: [676, 11068, 1236, 2759, 14930, 2]

// Module 14929 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2759 */;
import createToggle from "createToggle" /* 11068 */;

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
    return require(14930) /* ApplyButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
