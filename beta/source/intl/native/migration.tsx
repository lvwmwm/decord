// Module ID: 13675
// Function ID: 13676
// Name: migration
// Dependencies: [19, 21, 4836, 576, 4550, 4525, 1930, 1177, 2]
// Exports: IntlLink

// Module 13675 (migration)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import _modDef1930 from "module_1930" /* 1930 */;
import LinkingDefault from "Linking" /* 4525 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
const result = size.fileFinishedImporting("intl/native/migration.tsx");

export const IntlLink = function IntlLink(target) {
  let accessibilityRole;
  let fn;
  let onClick;
  let str;
  target = target.target;
  const children = target.children;
  const tmp = target;
  const tmp3 = closure_5(react.useContext(target(4550).AccessibilityPreferencesContext).alwaysShowLinkDecorations);
  if (typeof target === "string") {
    fn = function k() {
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj = _modDef1930;
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
  return jsx(tmp(1177).LegacyText, { accessible: true, accessibilityRole: str, onPress: fn, style: tmp3.link, children });
};
