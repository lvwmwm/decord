// Module ID: 1117
// Function ID: 1118
// Name: intl/util
// Dependencies: [19, 1118, 1154, 1176, 2]
// Exports: getAvailableLocales, getLanguages, getNormalizedLocale, useSyncMessages

// Module 1117 (intl/util)
import _mod1154 from "module_1154" /* 1154 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("intl/util.tsx");

export const getAvailableLocales = function getAvailableLocales() {
  _require = require("module_1118").default;
  const found = require("module_1176").filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => {
    code = code.code;
    const obj = { value: code, name: code.name, localizedName: null };
    const obj2 = _mod1154;
    obj.localizedName = closure_0[obj2.runtimeHashMessageKey(obj2, code)];
    return obj;
  });
  return mapped.sort((name, name2) => {
    const formatted = name.name.toLowerCase();
    const formatted1 = name2.name.toLowerCase();
    let num = -1;
    if (formatted >= formatted1) {
      let num2 = 0;
      if (formatted > formatted1) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
};
export const getLanguages = function getLanguages() {
  return require("module_1176");
};
export const getNormalizedLocale = function getNormalizedLocale(Language, arg1) {
  const found = require("module_1176").filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => code.code);
  if (mapped.includes(Language)) {
    return Language;
  } else {
    const parts = Language.split("-");
    const first = parts[0];
    if (mapped.includes(parts[0])) {
      let found2 = first;
    } else {
      if ("zh" === first) {
        if (parts.length > 1) {
          if ("Hant" === parts[1]) {
            let found1 = mapped.find((item) => "zh-TW" === item);
            if (found1 == null) {
              found1 = arg1;
            }
            found2 = found1;
          }
        }
      }
      found2 = mapped.find((item) => item.split("-")[0] === parts[0]);
      if (found2 == null) {
        found2 = arg1;
      }
    }
    return found2;
  }
  const arr = require("module_1176");
};
export const useSyncMessages = function useSyncMessages(arg0, arg1) {
  closure_0 = arg0;
  const currentLocale = arg1;
  const syncExternalStore = noop.useSyncExternalStore((arg0) => closure_0.onChange(arg0), () => closure_0.isLocaleLoaded(currentLocale.currentLocale));
};
