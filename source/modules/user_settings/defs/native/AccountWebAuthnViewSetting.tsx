// Module ID: 13588
// Function ID: 103000
// Name: route
// Dependencies: []

// Module 13588 (route)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let obj = arg1(dependencyMap[9]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.y7SXYX);
  },
  parent: arg1(dependencyMap[3]).MobileSetting.ACCOUNT,
  usePreNavigationAction: function useAccountCanUseWebAuthnView() {
    return React.useCallback(() => {
      const currentUser = currentUser.getCurrentUser();
      let verified;
      if (null != currentUser) {
        verified = currentUser.verified;
      }
      if (!(null != verified && verified)) {
        let obj = callback2(closure_2[5]);
        obj = {};
        const intl = callback(closure_2[6]).intl;
        obj.title = intl.string(callback(closure_2[6]).t.v740sh);
        const intl2 = callback(closure_2[6]).intl;
        obj.body = intl2.string(callback(closure_2[6]).t.uggF7o);
        obj.show(obj);
      }
      return null != verified && verified;
    }, []);
  },
  useTrailing: function useAccountSecurityKeysSettingTrailing() {
    if (!closure_4.hasFetchedCredentials()) {
      const webAuthnCredentials = arg1(dependencyMap[7]).fetchWebAuthnCredentials();
      const obj = arg1(dependencyMap[7]);
    }
    const items = [closure_4];
    return arg1(dependencyMap[8]).useStateFromStores(items, () => {
      const intl = callback(closure_2[6]).intl;
      const obj = { count: credentials.getCredentials().length };
      return intl.formatToPlainString(callback(closure_2[6]).t.n8mZ0X, obj);
    });
  },
  unsearchable: true,
  screen: obj
};
obj = {
  route: arg1(dependencyMap[4]).UserSettingsSections.WEBAUTHN_VIEW,
  getComponent() {
    return arg1(dependencyMap[10]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default route;
