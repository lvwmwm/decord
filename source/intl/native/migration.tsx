// Module ID: 13158
// Function ID: 101366
// Name: IntlLink
// Dependencies: [31, 33, 4130, 689, 3849, 3827, 3829, 1273, 2]
// Exports: IntlLink

// Module 13158 (IntlLink)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
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

export const IntlLink = function IntlLink(target) {
  target = target.target;
  if ("string" === typeof target) {
    let fn = () => {
      const obj = outer1_1(outer1_2[5]);
      return obj.openURL(outer1_1(outer1_2[6]).sanitizeUrl(target));
    };
  } else {
    fn = target;
    if ("object" === tmp2) {
      fn = target;
      if (null != target.onClick) {
        fn = target.onClick;
      }
    }
  }
  let obj = { accessible: true, accessibilityRole: "link", onPress: fn, style: callback(React.useContext(target(3849).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: target.children };
  return jsx(target(1273).LegacyText, { accessible: true, accessibilityRole: "link", onPress: fn, style: callback(React.useContext(target(3849).AccessibilityPreferencesContext).alwaysShowLinkDecorations).link, children: target.children });
};
