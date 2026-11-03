// Module ID: 11074
// Function ID: 11075
// Name: IntlLink
// Dependencies: [19, 21, 5141, 575, 5155, 5829, 2072, 1187, 2]
// Exports: IntlLink

// Module 11074 (IntlLink)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef2072 from "module_2072" /* 2072 */;
import LinkingDefault from "Linking" /* 5829 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let str;
  const link = { color: nativeDefault.colors.TEXT_LINK, textDecorationLine: str };
  str = "none";
  const tmp = arg0;
  if (tmp) {
    str = "underline";
  }
  return { link };
});
const result = size.fileFinishedImporting("intl/native/IntlLink.tsx");

export function IntlLink(target) {
  let accessibilityRole;
  let fn;
  let onClick;
  let str;
  target = target.target;
  const children = target.children;
  const tmp = target;
  const tmp3 = closure_5(react.useContext(target(5155).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  if (typeof target === "string") {
    fn = function y() {
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj = _modDef2072;
      return openURL(obj.sanitizeUrl(target));
    };
    str = "link";
  } else {
    str = "link";
    fn = target;
    if (typeof target === "object") {
      str = "link";
      fn = target;
      if (null != target.onClick) {
        ({ accessibilityRole, onClick } = target);
        if (accessibilityRole == null) {
          accessibilityRole = "link";
        }
        str = accessibilityRole;
        fn = onClick;
      }
    }
  }
  return jsx(tmp(1187).LegacyText, { accessible: true, accessibilityRole: str, onPress: fn, style: tmp3.link, children });
}
