// Module ID: 4128
// Function ID: 34330
// Name: useManaTextMigrationHighlight
// Dependencies: [27, 4129, 1278, 4130, 689, 566, 3976, 2]
// Exports: useManaTextMigrationHighlight, withManaTextMigrationHighlight

// Module 4128 (useManaTextMigrationHighlight)
import { StyleSheet } from "get ActivityIndicator";
import importDefaultResult from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { internal } from "_createForOfIteratorHelperLoose";
import { internal as internal2 } from "_createForOfIteratorHelperLoose";

let obj = {};
obj = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE };
obj.highlight = obj;
const obj1 = { borderWidth: 1, borderStyle: "dashed", borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_DANGER };
obj.overridden = obj1;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_6 = importDefaultResult.get("highlight_mana_text");
const obj2 = { borderWidth: 1 };
obj2.borderColor = internal.resolveSemanticColor(require("_createForOfIteratorHelperLoose").themes.DARK, require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING);
const obj3 = { borderWidth: 1 };
obj3.borderColor = internal2.resolveSemanticColor(require("_createForOfIteratorHelperLoose").themes.LIGHT, require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlight.tsx");

export const useManaTextMigrationHighlight = function useManaTextMigrationHighlight(arg0, style) {
  const tmp = callback();
  const items = [closure_3];
  if (!obj.useStateFromStores(items, () => outer1_3.get("highlight_mana_text"))) {
    return null;
  } else {
    (function hasCallerStyleOverride(arg0, style) {
      let closure_0 = arg0;
      let closure_1 = outer1_2.flatten(style);
      const keys = Object.keys(arg0);
      return keys.some((arg0) => {
        if ("includeFontPadding" === arg0) {
          return false;
        } else {
          let tmp2 = undefined !== table[arg0];
          if (tmp2) {
            let tmp5;
            if (null != table2) {
              tmp5 = table2[arg0];
            }
            tmp2 = undefined !== tmp5;
          }
          return tmp2;
        }
      });
    })(arg0, style) ? tmp.overridden : tmp.highlight;
  }
};
export const withManaTextMigrationHighlight = function withManaTextMigrationHighlight(fromEntriesResult) {
  let proxy = fromEntriesResult;
  if (closure_6) {
    const _Proxy = Proxy;
    let obj = {
      get(arg0, arg1, arg2) {
          const value = Reflect.get(arg0, arg1, arg2);
          if ("string" === typeof arg1) {
            if (null != value) {
              let obj = outer1_0(outer1_1[6]);
              const tmp6 = obj.isThemeLight(outer1_4.theme) ? outer1_8 : outer1_7;
              obj = {};
              const merged = Object.assign(value);
              const merged1 = Object.assign(tmp6);
              return obj;
            }
          }
          return value;
        }
    };
    proxy = new Proxy(fromEntriesResult, obj);
  }
  return proxy;
};
