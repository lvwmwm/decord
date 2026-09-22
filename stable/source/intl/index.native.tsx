// Module ID: 1114
// Function ID: 1115
// Name: util
// Dependencies: [19, 1074, 21, 1115, 1116, 1153, 1176, 14273, 2, 14274, 14277]
// Exports: getSystemLocale, useSyncMessages

// Module 1114 (util)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1115 */;
import intl_util from "intl/util" /* 1116 */;
import native from "native" /* 1176 */;
import migration from "migration" /* 14273 */;
import _modDef14277 from "module_14277" /* 14277 */;
import noop from "module_19" /* 19 */;

require = fn;
const Fonts = fn(1074).Fonts;
const jsx = fn(21).jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
let _default = fn(1115).default;
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
const util = fn(1116);
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const module_1153 = fn(1153);
const reactFormatter = module_1153.makeReactFormatter({
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
const intlManager = new fn(1153).IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
const withFormattersResult = intlManager.withFormatters({ format: reactFormatter, formatToPlainString: fn(1153).stringFormatter, formatToMarkdownString: fn(1153).markdownFormatter, formatToParts: fn(1153).astFormatter });
const size = fn(2);
const result = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = fn(1116).getAvailableLocales;
export const getLanguages = fn(1116).getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return intl_util.useSyncMessages(arg0, withFormattersResult);
};
export const t = fn(14274)._defaultMessages;
export const international = _modDef14277;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
