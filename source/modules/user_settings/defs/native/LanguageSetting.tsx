// Module ID: 14302
// Function ID: 109772
// Name: route
// Dependencies: [1921, 653, 566, 1212, 10127, 14303, 14305, 2]

// Module 14302 (route)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.IHMsPn);
  },
  parent: null,
  IconComponent: require("LanguageIcon").LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [_isNativeReflectConstruct];
    _require = _require(566).useStateFromStores(items, () => outer1_2.locale);
    const obj = _require(566);
    const availableLocales = _require(1212).getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = _require(1212).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.LANGUAGE,
  getComponent() {
    return require(14305) /* handleLanguageChange */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default createToggle;
