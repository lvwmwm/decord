// Module ID: 17342
// Function ID: 17343
// Name: LanguageSetting
// Dependencies: [2063, 1072, 504, 1114, 11505, 9600, 17343, 2]

// Module 17342 (LanguageSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import LanguageIcon from "LanguageIcon" /* 9600 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
      const intl = tmp(1114).intl;
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
