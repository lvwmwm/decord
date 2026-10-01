// Module ID: 14969
// Function ID: 14970
// Name: LanguageSetting
// Dependencies: [2112, 1074, 504, 1115, 11006, 14970, 14972, 2]

// Module 14969 (LanguageSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import LanguageIcon from "LanguageIcon" /* 14970 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
      const intl = tmp(1115).intl;
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
