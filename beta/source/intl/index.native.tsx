// Module ID: 1119
// Function ID: 1120
// Name: util
// Dependencies: [19, 1078, 21, 1120, 1121, 1158, 1181, 14505, 558, 2, 14506, 14509]
// Exports: getSystemLocale, useSyncMessages

// Module 1119 (util)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1120 */;
import intl_util from "intl/util" /* 1121 */;
import native from "native" /* 1181 */;
import migration from "migration" /* 14505 */;
import _modDef14509 from "module_14509" /* 14509 */;
import noop from "module_19" /* 19 */;

require = fn;
const Fonts = fn(1078).Fonts;
const jsx = fn(21).jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
let _default = fn(1120).default;
let str = "en-US";
if (null != _default) {
  str = _default.getConstants().Language;
}
function getSystemLocale(arg0) {
  let Language = arg0;
  const _default = NativeDeviceLocaleModule.default;
  if (null != _default) {
    Language = _default.getConstants().Language;
  }
  return Language;
}
const util = fn(1121);
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const module_1158 = fn(1158);
const reactFormatter = module_1158.makeReactFormatter({
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
    [tmp] = arg2;
    return jsx(migration.IntlLink, { target: tmp, children }, arg1);
  }
});
const intlManager = new fn(1158).IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
const withFormattersResult = intlManager.withFormatters({ format: reactFormatter, formatToPlainString: fn(1158).stringFormatter, formatToMarkdownString: fn(1158).markdownFormatter, formatToParts: fn(1158).astFormatter });
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = fn(1121).getAvailableLocales;
export const getLanguages = fn(1121).getLanguages;
export const useSyncMessages = (arg0) => intl_util.useSyncMessages(arg0, withFormattersResult);
export const t = fn(14506)._defaultMessages;
export const international = _modDef14509;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
