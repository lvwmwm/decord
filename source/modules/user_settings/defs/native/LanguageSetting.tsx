// Module ID: 14138
// Function ID: 107293
// Name: route
// Dependencies: []

// Module 14138 (route)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.IHMsPn);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[5]).LanguageIcon,
  useTrailing: function useLanguageSettingTrailing() {
    const items = [closure_2];
    const callback = callback(dependencyMap[2]).useStateFromStores(items, () => locale.locale);
    const obj = callback(dependencyMap[2]);
    const availableLocales = callback(dependencyMap[3]).getAvailableLocales();
    const found = availableLocales.find((value) => value.value === closure_0);
    let stringResult = null;
    if (null != found) {
      const intl = callback(dependencyMap[3]).intl;
      stringResult = intl.string(found.localizedName);
    }
    return stringResult;
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[1]).UserSettingsSections.LANGUAGE,
  getComponent() {
    return arg1(dependencyMap[6]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/LanguageSetting.tsx");

export default route;
