// Module ID: 1212
// Function ID: 13903
// Name: getSystemLocale
// Dependencies: []
// Exports: getSystemLocale, useSyncMessages

// Module 1212 (getSystemLocale)
function getSystemLocale(arg0) {
  let Language = arg0;
  const tmp = arg1(dependencyMap[3]);
  if (obj.isAndroid()) {
    let LocalizationManager = arg1(dependencyMap[5]).default;
  } else {
    LocalizationManager = tmp.NativeModules.LocalizationManager;
  }
  if (null != LocalizationManager) {
    Language = LocalizationManager.getConstants().Language;
  }
  return Language;
}
importAll(dependencyMap[0]);
const Fonts = arg1(dependencyMap[1]).Fonts;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = { fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj = { fontFamily: Fonts.CODE_NORMAL };
let closure_3 = { strong: obj, italic: { fontStyle: "italic" }, code: obj, del: { "Null": null, "Null": "9ba137dcd88d29dfd923fc4a2e32469d" } };
const systemLocale = getSystemLocale("en-US");
let obj2 = arg1(dependencyMap[6]);
const normalizedLocale = obj2.getNormalizedLocale(systemLocale, "en-US");
obj = {
  $i(children) {
    return jsx(arg1(dependencyMap[8]).LegacyText, { style: closure_3.italic, children }, arg1);
  },
  $b(children) {
    return jsx(arg1(dependencyMap[8]).LegacyText, { style: closure_3.strong, children }, arg1);
  },
  $del(children) {
    return jsx(arg1(dependencyMap[8]).LegacyText, { style: closure_3.del, children }, arg1);
  },
  $p(children) {
    return jsx(arg1(dependencyMap[8]).LegacyText, { children }, arg1);
  },
  $code(children) {
    return jsx(arg1(dependencyMap[8]).LegacyText, { style: closure_3.code, children }, arg1);
  },
  $link(children) {
    let tmp;
    [tmp] = arg2;
    return jsx(arg1(dependencyMap[9]).IntlLink, { target: tmp, children }, arg1);
  }
};
const reactFormatter = arg1(dependencyMap[7]).makeReactFormatter(obj);
const intlManager = new arg1(dependencyMap[7]).IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
obj2 = { format: reactFormatter, formatToPlainString: arg1(dependencyMap[7]).stringFormatter, formatToMarkdownString: arg1(dependencyMap[7]).markdownFormatter, formatToParts: arg1(dependencyMap[7]).astFormatter };
const withFormattersResult = intlManager.withFormatters(obj2);
const obj1 = { initialLocale: normalizedLocale, defaultLocale: "en-US" };
const obj4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = arg1(dependencyMap[6]).getAvailableLocales;
export const getLanguages = arg1(dependencyMap[6]).getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return arg1(dependencyMap[6]).useSyncMessages(arg0, withFormattersResult);
};
export const t = arg1(dependencyMap[11])._defaultMessages;
export const international = importDefault(dependencyMap[12]);
export { systemLocale };
export const initialLocale = normalizedLocale;
