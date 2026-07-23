// Module ID: 1212
// Function ID: 13904
// Name: getSystemLocale
// Dependencies: [31, 653, 33, 27, 477, 643, 1213, 1250, 1273, 5460, 2, 13106, 13109]
// Exports: getSystemLocale, useSyncMessages

// Module 1212 (getSystemLocale)
import "result";
import { Fonts } from "ME";
import { jsx } from "jsxProd";
import getLanguages from "getLanguages";
import module_1250 from "module_1250";

const require = arg1;
function getSystemLocale(arg0) {
  let Language = arg0;
  const tmp = require(27) /* get ActivityIndicator */;
  if (obj.isAndroid()) {
    let LocalizationManager = require(643) /* enforcing */.default;
  } else {
    LocalizationManager = tmp.NativeModules.LocalizationManager;
  }
  if (null != LocalizationManager) {
    Language = LocalizationManager.getConstants().Language;
  }
  return Language;
}
let obj = { fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj = { fontFamily: Fonts.CODE_NORMAL };
let closure_3 = { strong: obj, italic: { fontStyle: "italic" }, code: obj, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
const systemLocale = getSystemLocale("en-US");
const normalizedLocale = getLanguages.getNormalizedLocale(systemLocale, "en-US");
obj = {
  $i(children) {
    return jsx(require(1273) /* Button */.LegacyText, { style: closure_3.italic, children }, arg1);
  },
  $b(children) {
    return jsx(require(1273) /* Button */.LegacyText, { style: closure_3.strong, children }, arg1);
  },
  $del(children) {
    return jsx(require(1273) /* Button */.LegacyText, { style: closure_3.del, children }, arg1);
  },
  $p(children) {
    return jsx(require(1273) /* Button */.LegacyText, { children }, arg1);
  },
  $code(children) {
    return jsx(require(1273) /* Button */.LegacyText, { style: closure_3.code, children }, arg1);
  },
  $link(children) {
    let tmp;
    [tmp] = arg2;
    return jsx(require(5460) /* IntlLink */.IntlLink, { target: tmp, children }, arg1);
  }
};
const reactFormatter = module_1250.makeReactFormatter(obj);
const intlManager = new require("module_1250").IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
getLanguages = { format: reactFormatter, formatToPlainString: require("module_1250").stringFormatter, formatToMarkdownString: require("module_1250").markdownFormatter, formatToParts: require("module_1250").astFormatter };
getLanguages = intlManager.withFormatters(getLanguages);
const result = require("jsxProd").fileFinishedImporting("intl/index.native.tsx");

export const intl = getLanguages;
export { getSystemLocale };
export const getAvailableLocales = require("getLanguages").getAvailableLocales;
export const getLanguages = require("getLanguages").getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return require(1213) /* getLanguages */.useSyncMessages(arg0, getLanguages);
};
export const t = require("_defaultMessages")._defaultMessages;
export const international = require("messagesProxy");
export { systemLocale };
export const initialLocale = normalizedLocale;
