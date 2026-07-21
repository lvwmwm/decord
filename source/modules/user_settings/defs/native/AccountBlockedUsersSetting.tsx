// Module ID: 13580
// Function ID: 102952
// Name: route
// Dependencies: [890109952, 79429632, 353173504, 270270464, 360513536, 890568704, 37093376, 131072, 3883204608]

// Module 13580 (route)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.PFOUKW);
  },
  useDescription: function useAccountBlockedUsersSettingDescription() {
    const items = [closure_2];
    const numberOfBlockedUsers = arg1(dependencyMap[3]).useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = arg1(dependencyMap[4]).intl;
    return intl.format(arg1(dependencyMap[4]).t.r91W/h, { numberOfBlockedUsers });
  },
  IconComponent: arg1(dependencyMap[6]).DenyIcon,
  parent: arg1(dependencyMap[1]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.BLOCKED_USERS_V2,
  getComponent() {
    return arg1(dependencyMap[7]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default route;
export const AccountBlockedUsersSettingV2 = route;
