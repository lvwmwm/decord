// Module ID: 15609
// Function ID: 15610
// Name: AccessibilitySetting
// Dependencies: [32, 19, 1074, 2039, 21, 2028, 7633, 1177, 1115, 11729, 15610, 15612, 2]

// Module 15609 (AccessibilitySetting)
import util from "util" /* 1115 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7633 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [fn(2028).DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
const SettingBuilders = fn(11729);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.G0neg7);
  },
  parent: null,
  IconComponent: fn(15610).AccessibilityIcon,
  useTrailing() {
    [tmp4, r10012] = useSelectedDismissibleContent.useSelectedDismissibleContent(items);
    let tmp5 = null;
    if (null != tmp4) {
      let hasItem;
      if (obj2 != null) {
        hasItem = obj2.includes(tmp4);
      }
      tmp5 = null;
      if (hasItem) {
        const obj3 = { text: null };
        const intl = tmp(1115).intl;
        obj3.text = intl.string(tmp(1115).t.y2b7CA);
        tmp5 = jsx(tmp(1177).TextBadge, { text: null });
      }
    }
    return tmp5;
  },
  usePreNavigationAction() {
    const tmp = _slicedToArray(first(7633).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    dependencyMap = tmp3;
    items = [tmp[1], first];
    return noop.useCallback(() => {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        if (items != null) {
          hasItem = obj.includes(tmp);
        }
        tmp2 = hasItem;
        obj = items;
      }
      if (tmp2) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      return true;
    }, items);
  },
  screen: {
    route: fn(1074).UserSettingsSections.ACCESSIBILITY,
    getComponent() {
      return require("SettingsAccessibilityScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;
