// Module ID: 13753
// Function ID: 105480
// Name: route
// Dependencies: [31, 13674, 1849, 7751, 653, 4470, 1212, 5592, 566, 10127, 13677, 2]

// Module 13753 (route)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.y7SXYX);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  usePreNavigationAction: function useAccountCanUseWebAuthnView() {
    return React.useCallback(() => {
      const currentUser = outer1_5.getCurrentUser();
      let verified;
      if (null != currentUser) {
        verified = currentUser.verified;
      }
      if (!(null != verified && verified)) {
        let obj = outer1_1(outer1_2[5]);
        obj = {};
        const intl = outer1_0(outer1_2[6]).intl;
        obj.title = intl.string(outer1_0(outer1_2[6]).t.v740sh);
        const intl2 = outer1_0(outer1_2[6]).intl;
        obj.body = intl2.string(outer1_0(outer1_2[6]).t.uggF7o);
        obj.show(obj);
      }
      return null != verified && verified;
    }, []);
  },
  useTrailing: function useAccountSecurityKeysSettingTrailing() {
    if (!_isNativeReflectConstruct.hasFetchedCredentials()) {
      const webAuthnCredentials = require(5592) /* _fetchWebAuthnConditionalChallenge */.fetchWebAuthnCredentials();
      let obj = require(5592) /* _fetchWebAuthnConditionalChallenge */;
    }
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => {
      const intl = outer1_0(outer1_2[6]).intl;
      const obj = { count: outer1_4.getCredentials().length };
      return intl.formatToPlainString(outer1_0(outer1_2[6]).t.n8mZ0X, obj);
    });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.WEBAUTHN_VIEW,
  getComponent() {
    return require(13677) /* UserSettingsWebAuthn */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/defs/native/AccountWebAuthnViewSetting.tsx");

export default createToggle;
