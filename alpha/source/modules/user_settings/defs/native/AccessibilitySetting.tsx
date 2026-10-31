// Module ID: 17306
// Function ID: 17307
// Name: AccessibilitySetting
// Dependencies: [32, 19, 1072, 4860, 21, 4847, 7569, 7306, 11539, 1113, 17307, 17309, 2]

// Module 17306 (AccessibilitySetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7569 */;
import AccessibilityIcon from "AccessibilityIcon" /* 17307 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let tmp;
const Badge_Badge = tmp(7306);
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let items = [dismissible_content.DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.G0neg7);
  },
  parent: null,
  IconComponent: AccessibilityIcon.AccessibilityIcon,
  useTrailing() {
    let tmp4;
    const obj = useSelectedDismissibleContent;
    [tmp4, r10012] = obj.useSelectedDismissibleContent(items);
    let tmp5 = null;
    _slicedToArray(obj.useSelectedDismissibleContent(items), 2);
    if (null != tmp4) {
      let hasItem;
      if (items != null) {
        hasItem = obj2.includes(tmp4);
      }
      tmp5 = null;
      if (hasItem) {
        tmp5 = jsx(Badge_Badge.Badge, { type: "new", variant: "notification" });
      }
    }
    return tmp5;
  },
  usePreNavigationAction() {
    let closure_1;
    let first;
    let obj = first(7569);
    const tmp = _slicedToArray(obj.useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    dependencyMap = tmp3;
    items = [tmp[1], first];
    return react.useCallback(() => {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        const obj = items;
        if (items != null) {
          hasItem = obj.includes(tmp);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      return true;
    }, items);
  },
  screen: {
    route: UserSettingsSections.ACCESSIBILITY,
    getComponent() {
      return require("SettingsAccessibilityScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;
