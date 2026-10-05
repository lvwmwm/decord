// Module ID: 1126
// Function ID: 1127
// Name: intl
// Dependencies: [19, 1085, 21, 1127, 1128, 1165, 1188, 13948, 558, 2, 13949, 13952]
// Exports: getSystemLocale, useSyncMessages

// Module 1126 (intl)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import react_native from "react-native" /* 1127 */;
import native from "native" /* 1188 */;
import migration from "migration" /* 13948 */;
import defaultMessageProxy from "defaultMessageProxy" /* 13949 */;
import _modDef13952 from "module_13952" /* 13952 */;
import react from "react" /* 19 */;
import util from "intl/util" /* 1128 */;
import module_1165 from "module_1165" /* 1165 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
let _default = react_native.default;
let str = "en-US";
if (null != _default) {
  str = _default.getConstants().Language;
}
function getSystemLocale(arg0) {
  let Language = arg0;
  const _default = react_native.default;
  if (null != _default) {
    Language = _default.getConstants().Language;
  }
  return Language;
}
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const obj2 = {
  $i(children, arg1) {
    obj = { style: obj.italic, children };
    return jsx(native.LegacyText, { style: obj.italic, children }, arg1);
  },
  $b(children, arg1) {
    obj = { style: obj.strong, children };
    return jsx(native.LegacyText, { style: obj.strong, children }, arg1);
  },
  $del(children, arg1) {
    obj = { style: obj.del, children };
    return jsx(native.LegacyText, { style: obj.del, children }, arg1);
  },
  $p(children, arg1) {
    return jsx(native.LegacyText, { children }, arg1);
  },
  $code(children, arg1) {
    obj = { style: obj.code, children };
    return jsx(native.LegacyText, { style: obj.code, children }, arg1);
  },
  $link(children, arg1, arg2) {
    let tmp;
    [tmp] = arg2;
    return jsx(migration.IntlLink, { target: tmp, children }, arg1);
  }
};
const reactFormatter = module_1165.makeReactFormatter(obj2);
const obj3 = { initialLocale: normalizedLocale, defaultLocale: "en-US" };
const intlManager = new module_1165.IntlManager(obj3);
const obj4 = { format: reactFormatter, formatToPlainString: module_1165.stringFormatter, formatToMarkdownString: module_1165.markdownFormatter, formatToParts: module_1165.astFormatter };
const withFormattersResult = intlManager.withFormatters(obj4);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = util.getAvailableLocales;
export const getLanguages = util.getLanguages;
export const useSyncMessages = (arg0) => {
  obj = util;
  return obj.useSyncMessages(arg0, withFormattersResult);
};
export const t = defaultMessageProxy._defaultMessages;
export const international = _modDef13952;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
