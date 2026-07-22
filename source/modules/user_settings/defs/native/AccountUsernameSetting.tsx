// Module ID: 13546
// Function ID: 102746
// Name: route
// Dependencies: []

// Module 13546 (route)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[9]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.IEpCBQ);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.ACCOUNT,
  useTrailing: function useAccountUsernameSettingTrailing() {
    const items = [closure_3];
    return arg1(dependencyMap[5]).useStateFromStores(items, () => callback(closure_2[6]).getUserTag(currentUser.getCurrentUser(), { decoration: "never" }));
  },
  useDescription: function useAccountUsernameSettingDescription() {
    let obj = arg1(dependencyMap[7]);
    const guildAutomodProfileQuarantineErrors = obj.useGuildAutomodProfileQuarantineErrors();
    let first;
    if (null != guildAutomodProfileQuarantineErrors) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (null != nick) {
        first = nick[0];
      }
    }
    let tmp3 = null;
    if (null != first) {
      obj = { children: first };
      tmp3 = jsx(arg1(dependencyMap[8]).Text, obj);
    }
    return tmp3;
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[3]).UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
  getComponent() {
    return arg1(dependencyMap[11]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default route;
