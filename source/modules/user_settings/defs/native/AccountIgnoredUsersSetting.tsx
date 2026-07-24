// Module ID: 13761
// Function ID: 105515
// Name: route
// Dependencies: [3767, 7751, 653, 566, 1212, 10127, 9254, 13762, 2]

// Module 13761 (route)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  IconComponent: require("EyeSlashIcon").EyeSlashIcon,
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    let obj = require(566) /* initialize */;
    const items = [_isNativeReflectConstruct];
    const stateFromStoresArray = obj.useStateFromStoresArray(items, () => outer1_2.getIgnoredIDs());
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { numberOfIgnoredUsers: stateFromStoresArray.length };
    return intl.format(require(1212) /* getSystemLocale */.t.rXUeOl, obj);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.IGNORED_USERS,
  getComponent() {
    return require(13762) /* IgnoredUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default createToggle;
