// Module ID: 15682
// Function ID: 15683
// Name: LanguageSetting
// Dependencies: [2113, 1078, 558, 568, 504, 1119, 11594, 15683, 15685, 2]

// Module 15682 (LanguageSetting)
import util from "util" /* 1119 */;
import LocaleStore from "LocaleStore" /* 2113 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11594);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(568).c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function l() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(568);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const availableLocales = tmp(1119).getAvailableLocales();
    const found = availableLocales.find((value) => value.value === stateFromStores);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(found.localizedName);
    }
    cResult[2] = stateFromStores;
    cResult[3] = stringResult;
    let tmp8 = stringResult;
    const tmpResult2 = tmp(1119);
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  const items = [LocaleStore];
  _require = require("initialize").useStateFromStores(items, () => locale.locale);
  const obj = require("initialize");
  const tmp = _require;
  const availableLocales = require("util").getAvailableLocales();
  const found = availableLocales.find((value) => value.value === closure_0);
  let stringResult = null;
  if (null != found) {
    const intl = tmp(1119).intl;
    stringResult = intl.string(found.localizedName);
  }
  return stringResult;
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.IHMsPn);
  },
  parent: null,
  IconComponent: fn(15683).LanguageIcon,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = stateFromStores(568).c(4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [LocaleStore];
      const fn = function l() {
        return locale.locale;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    const obj = stateFromStores(568);
    stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
    if (cResult[2] !== stateFromStores) {
      const availableLocales = tmp(1119).getAvailableLocales();
      const found = availableLocales.find((value) => value.value === stateFromStores);
      let stringResult = null;
      if (null != found) {
        const intl = tmp(1119).intl;
        stringResult = intl.string(found.localizedName);
      }
      cResult[2] = stateFromStores;
      cResult[3] = stringResult;
      let tmp8 = stringResult;
      const tmpResult2 = tmp(1119);
    } else {
      tmp8 = cResult[3];
    }
    return tmp8;
  }) : (() => {
    const items = [LocaleStore];
    _require = require("initialize").useStateFromStores(items, () => locale.locale);
    const obj = require("initialize");
    const tmp = _require;
    const availableLocales = require("util").getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  }),
  screen: {
    route: fn(1078).UserSettingsSections.LANGUAGE,
    getComponent() {
      return require("UserSettingsLocale").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default route;
