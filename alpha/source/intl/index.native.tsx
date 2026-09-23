// Module ID: 1115
// Function ID: 1116
// Name: util
// Dependencies: [19, 1074, 21, 1116, 1117, 1154, 1177, 14550, 2, 14551, 14554]
// Exports: getSystemLocale, useSyncMessages

// Module 1115 (util)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1116 */;
import intl_util from "intl/util" /* 1117 */;
import native from "native" /* 1177 */;
import migration from "migration" /* 14550 */;
import _modDef14554 from "module_14554" /* 14554 */;
import noop from "module_19" /* 19 */;

require = fn;
const Fonts = fn(1074).Fonts;
const jsx = fn(21).jsx;
let obj = { strong: { fontFamily: Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, code: { fontFamily: Fonts.CODE_NORMAL }, del: { textDecorationLine: "line-through", textDecorationStyle: "solid" } };
let _default = fn(1116).default;
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
const util = fn(1117);
const normalizedLocale = util.getNormalizedLocale(str, "en-US");
const module_1154 = fn(1154);
const reactFormatter = module_1154.makeReactFormatter({
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
const intlManager = new fn(1154).IntlManager({ initialLocale: normalizedLocale, defaultLocale: "en-US" });
const withFormattersResult = intlManager.withFormatters({ format: reactFormatter, formatToPlainString: fn(1154).stringFormatter, formatToMarkdownString: fn(1154).markdownFormatter, formatToParts: fn(1154).astFormatter });
const size = fn(2);
const result = size.fileFinishedImporting("intl/index.native.tsx");

export const intl = withFormattersResult;
export { getSystemLocale };
export const getAvailableLocales = fn(1117).getAvailableLocales;
export const getLanguages = fn(1117).getLanguages;
export const useSyncMessages = function useSyncMessages(arg0) {
  return intl_util.useSyncMessages(arg0, withFormattersResult);
};
export const t = fn(14551)._defaultMessages;
export const international = _modDef14554;
export const systemLocale = str;
export const initialLocale = normalizedLocale;
