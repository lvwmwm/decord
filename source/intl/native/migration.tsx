// Module ID: 5458
// Function ID: 46614
// Name: IntlLink
// Dependencies: []

// Module 5458 (IntlLink)
class IntlLink {
  constructor(arg0) {
    target = global.target;
    arg1 = target;
    tmp2 = typeof target;
    tmp = f46617(importAll.useContext(arg1(dependencyMap[4]).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
    if ("string" === tmp2) {
      fn = () => {
        const obj = callback(closure_2[5]);
        return obj.openURL(callback(closure_2[6]).sanitizeUrl(target));
      };
    } else {
      str = "object";
      fn = target;
      if ("object" === tmp2) {
        tmp3 = null;
        fn = target;
        if (null != target.onClick) {
          fn = target.onClick;
        }
      }
    }
    obj = {};
    obj.onPress = fn;
    obj.style = tmp.link;
    obj.children = global.children;
    return jsx(arg1(dependencyMap[7]).LegacyText, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = arg1(dependencyMap[2]).createStyles((arg0) => {
  let obj = {};
  obj = { color: importDefault(dependencyMap[3]).colors.TEXT_LINK };
  let str = "none";
  if (arg0) {
    str = "underline";
  }
  obj.textDecorationLine = str;
  obj.link = obj;
  return obj;
});
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("intl/native/migration.tsx");

export { IntlLink };
export const I18nLinkComponent = IntlLink;
