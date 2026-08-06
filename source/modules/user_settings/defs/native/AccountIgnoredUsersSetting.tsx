// Module ID: 13968
// Function ID: 13969
// Name: route
// Dependencies: [3921, 8005, 676, 589, 1236, 10364, 8418, 13969, 2]

// Module 13968 (route)
import upsertRelationship from "upsertRelationship";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  IconComponent: require("EyeSlashIcon").EyeSlashIcon,
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["93ZDWE"]);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    let obj = require(589) /* initialize */;
    const items = [upsertRelationship];
    const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = require(1236) /* getSystemLocale */.intl;
    obj = { numberOfIgnoredUsers: stateFromStoresArray.length };
    return intl.format(require(1236) /* getSystemLocale */.t.rXUeOl, obj);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.IGNORED_USERS,
  getComponent() {
    return require(13969) /* IgnoredUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default createToggle;
