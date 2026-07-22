// Module ID: 13589
// Function ID: 103007
// Name: route
// Dependencies: [890699776, 79429632, 335413248, 270270464, 360448000, 891158528, 37093376, 131072, 3899981824]

// Module 13589 (route)
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
