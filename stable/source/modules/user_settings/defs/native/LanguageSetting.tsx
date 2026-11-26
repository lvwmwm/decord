// Module ID: 18048
// Function ID: 18049
// Name: LanguageSetting
// Dependencies: [2189, 1072, 504, 1113, 12408, 10505, 18049, 2]

// Module 18048 (LanguageSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import LanguageIcon from "LanguageIcon" /* 10505 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.IHMsPn);
  },
  parent: null,
  IconComponent: LanguageIcon.LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    let closure_0;
    let locale;
    const items = [LocaleStore];
    const obj = require("get initialized");
    const tmp = _require;
    _require = obj.useStateFromStores(items, () => locale.locale);
    const obj2 = require("intl");
    const availableLocales = obj2.getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1113).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: {
    route: UserSettingsSections.LANGUAGE,
    getComponent() {
      return require("UserSettingsLocale").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default route;
