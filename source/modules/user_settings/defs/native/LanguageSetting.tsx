// Module ID: 14728
// Function ID: 14729
// Name: route
// Dependencies: [1994, 676, 589, 1236, 10669, 14729, 14731, 2]

// Module 14728 (route)
import _getSystemLocale from "_getSystemLocale";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.IHMsPn);
  },
  parent: null,
  IconComponent: require("LanguageIcon").LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [_getSystemLocale];
    _require = _require(589).useStateFromStores(items, () => locale.locale);
    const obj = _require(589);
    const tmp = _require;
    const availableLocales = _require(1236).getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.LANGUAGE,
  getComponent() {
    return require(14731) /* handleLanguageChange */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default createToggle;
