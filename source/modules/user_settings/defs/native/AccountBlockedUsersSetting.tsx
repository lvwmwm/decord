// Module ID: 14045
// Function ID: 14046
// Name: route
// Dependencies: [3938, 8082, 676, 589, 1236, 10446, 8586, 14046, 2]

// Module 14045 (route)
import upsertRelationship from "upsertRelationship";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.PFOUKW);
  },
  useDescription: function useAccountBlockedUsersSettingDescription() {
    const items = [upsertRelationship];
    const numberOfBlockedUsers = require(589) /* initialize */.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.format(require(1236) /* getSystemLocale */.t["r91W/h"], { numberOfBlockedUsers });
  },
  IconComponent: require("DenyIcon").DenyIcon,
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.BLOCKED_USERS_V2,
  getComponent() {
    return require(14046) /* BlockedUsersList */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default createToggle;
export const AccountBlockedUsersSettingV2 = createToggle;
