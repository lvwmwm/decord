// Module ID: 4834
// Function ID: 4835
// Name: useManaTextMigrationHighlight
// Dependencies: [17, 4835, 1182, 4836, 576, 504, 4685, 2]
// Exports: useManaTextMigrationHighlight, withManaTextMigrationHighlight

// Module 4834 (useManaTextMigrationHighlight)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj2;
let resolveSemanticColor;
let resolveSemanticColor2;
const StyleSheet = react_native.StyleSheet;
let createStyles = createStyles_mod;
let obj = { highlight: obj2, overridden: { borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.STATUS_DANGER } };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_POSITIVE };
createStyles = createStyles.createStyles;
({ borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.STATUS_DANGER });
let closure_5 = createStyles(obj);
let closure_6 = DevSettingsStore.get("highlight_mana_text");
const obj4 = { borderWidth: 1, borderColor: resolveSemanticColor(nativeDefault.themes.DARK, nativeDefault.colors.STATUS_WARNING) };
const internal = nativeDefault.internal;
resolveSemanticColor = internal.resolveSemanticColor;
const obj5 = { borderWidth: 1, borderColor: resolveSemanticColor2(nativeDefault.themes.LIGHT, nativeDefault.colors.STATUS_WARNING) };
const internal2 = nativeDefault.internal;
resolveSemanticColor2 = internal2.resolveSemanticColor;
const result = size.fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlight.tsx");

export const useManaTextMigrationHighlight = function useManaTextMigrationHighlight(fromEntries2Result, style) {
  const tmp = closure_5();
  const items = [DevSettingsStore];
  let tmp2 = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    let tmp4 = style;
    let closure_0 = fromEntries2Result;
    let closure_1 = StyleSheet.flatten(style);
    const _Object = Object;
    const keys = Object.keys(fromEntries2Result);
    tmp2 = keys.some((item) => {
      if ("includeFontPadding" === item) {
        return false;
      } else {
        let tmp2 = undefined !== closure_0[item];
        if (tmp2) {
          let tmp4;
          if (closure_1 != null) {
            tmp4 = closure_1[item];
          }
          tmp2 = undefined !== tmp4;
        }
        return tmp2;
      }
    }) ? tmp.overridden : tmp.highlight;
  }
  return tmp2;
};
export const withManaTextMigrationHighlight = function withManaTextMigrationHighlight(fromEntries2Result) {
  let theme;
  let proxy = fromEntries2Result;
  if (closure_6) {
    const _Proxy = Proxy;
    let obj = {
      get(arg0, str, arg2) {
          const value = Reflect.get(arg0, str, arg2);
          if (typeof str === "string") {
            if (null != value) {
              const obj = require("shared");
              const obj2 = {};
              const tmp5 = obj.isThemeLight(theme.theme) ? obj5 : obj4;
              const merged = Object.assign(value);
              const merged1 = Object.assign(tmp5);
              return obj2;
            }
          }
          return value;
        }
    };
    const self = this;
    const self2 = this;
    proxy = new Proxy(fromEntries2Result, obj);
  }
  return proxy;
};
