// Module ID: 1213
// Function ID: 13912
// Name: getLanguages
// Dependencies: []
// Exports: getAvailableLocales, getNormalizedLocale, useSyncMessages

// Module 1213 (getLanguages)
function getLanguages() {
  return arg1(dependencyMap[3]);
}
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("intl/util.tsx");

export const getAvailableLocales = function getAvailableLocales() {
  const callback = callback(dependencyMap[1]).default;
  const found = getLanguages().filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => {
    code = code.code;
    const obj = { value: code, name: code.name };
    const obj2 = callback(closure_1[2]);
    obj.localizedName = callback[obj2.runtimeHashMessageKey(obj2, code)];
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
export { getLanguages };
export const getNormalizedLocale = function getNormalizedLocale(systemLocale, arg1) {
  let tmp = arg1;
  const found = getLanguages().filter((enabled) => enabled.enabled);
  const mapped = found.map((code) => code.code);
  if (mapped.includes(systemLocale)) {
    return systemLocale;
  } else {
    const parts = systemLocale.split("-");
    arg1 = parts;
    const first = parts[0];
    if (mapped.includes(parts[0])) {
      let tmp5 = first;
    } else {
      if ("zh" === first) {
        if (parts.length > 1) {
          if ("Hant" === parts[1]) {
            const found1 = mapped.find((arg0) => "zh-TW" === arg0);
            if (null != found1) {
              tmp = found1;
            }
            tmp5 = tmp;
          }
        }
      }
      const found2 = mapped.find((arg0) => arg0.split("-")[0] === parts[0]);
      tmp5 = tmp;
      if (null != found2) {
        tmp5 = found2;
      }
    }
    return tmp5;
  }
  const arr = getLanguages();
};
export const useSyncMessages = function useSyncMessages(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const syncExternalStore = closure_2.useSyncExternalStore((arg0) => arg0.onChange(arg0), () => arg0.isLocaleLoaded(arg1.currentLocale));
};
