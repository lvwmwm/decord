// Module ID: 13833
// Function ID: 13834
// Name: route
// Dependencies: [3826, 7753, 676, 589, 1236, 10116, 9210, 13834, 2]

// Module 13833 (route)
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
    return require(13834) /* IgnoredUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default createToggle;
