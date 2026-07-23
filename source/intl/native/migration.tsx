// Module ID: 5460
// Function ID: 46649
// Name: IntlLink
// Dependencies: [31, 33, 4130, 689, 3849, 3827, 3829, 1273, 2]

// Module 5460 (IntlLink)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
class IntlLink {
  constructor(arg0) {
    target = global.target;
    tmp2 = typeof target;
    tmp = f46652(result.useContext(require("context").AccessibilityPreferencesContext).alwaysShowLinkDecorations);
    if ("string" === tmp2) {
      fn = () => {
        const obj = outer1_1(outer1_2[5]);
        return obj.openURL(outer1_1(outer1_2[6]).sanitizeUrl(target));
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
    obj = { accessible: true, accessibilityRole: "link" };
    obj.onPress = fn;
    obj.style = tmp.link;
    obj.children = global.children;
    return jsx(require("Button").LegacyText, obj);
  }
}
let closure_5 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { color: importDefault(689).colors.TEXT_LINK };
  let str = "none";
  if (arg0) {
    str = "underline";
  }
  obj.textDecorationLine = str;
  obj.link = obj;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("intl/native/migration.tsx");

export { IntlLink };
export const I18nLinkComponent = IntlLink;
