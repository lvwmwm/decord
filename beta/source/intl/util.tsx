// Module ID: 1115
// Function ID: 1116
// Name: intl/util
// Dependencies: [19, 1116, 1152, 1174, 1175, 2]
// Exports: getAvailableLocales, getLanguages, getNormalizedLocale, parseRuntimeIcuAsIntlMessage, useSyncMessages

// Module 1115 (intl/util)
import _mod1152 from "module_1152" /* 1152 */;
import _Parser from "_Parser" /* 1175 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, code;

let closure_3 = { es: "es-ES", nb: "no", nn: "no" };
const result = size.fileFinishedImporting("intl/util.tsx");

export function getAvailableLocales() {
  let closure_0;
  _require = require("module_1116").default;
  const arr = require("module_1174");
  const found = arr.filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => {
    let obj2;
    code = code.code;
    const obj = { value: code, name: code.name, localizedName: closure_0[obj2.runtimeHashMessageKey(obj2, code)] };
    obj2 = _mod1152;
    return obj;
  });
  return mapped.sort((name, name2) => {
    const str = name.name;
    const str2 = name2.name;
    const formatted = str.toLowerCase();
    const formatted1 = str2.toLowerCase();
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
}
export function getLanguages() {
  return require("module_1174");
}
export function getNormalizedLocale(Language, arg1) {
  const arr = require("module_1174");
  const found = arr.filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => code.code);
  if (mapped.includes(Language)) {
    return Language;
  } else {
    const parts = Language.split("-");
    if (mapped.includes(parts[0])) {
      return parts[0];
    } else {
      let tmp2 = null;
      if (1 === parts.length) {
        tmp2 = closure_3[parts[0]];
      }
      if (null == tmp2) {
        let found2;
        if ("zh" === parts[0]) {
          if (parts.length > 1) {
            if ("Hant" === parts[1]) {
              let found1 = mapped.find((item) => "zh-TW" === item);
              if (found1 == null) {
                found1 = arg1;
              }
              found2 = found1;
            }
            tmp2 = found2;
          }
        }
        found2 = mapped.find((item) => item.split("-")[0] === parts[0]);
        if (found2 == null) {
          found2 = arg1;
        }
      }
      return tmp2;
    }
  }
}
export function parseRuntimeIcuAsIntlMessage(acknowledgedBadgeLabel, currentLocale) {
  const obj = _Parser;
  const parsed = obj.parse(acknowledgedBadgeLabel, { ignoreTag: true });
  const internalIntlMessage = new _mod1152.InternalIntlMessage(parsed, currentLocale);
  return internalIntlMessage;
}
export function useSyncMessages(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const syncExternalStore = react.useSyncExternalStore((arg0) => closure_0.onChange(arg0), () => closure_0.isLocaleLoaded(currentLocale.currentLocale));
}
