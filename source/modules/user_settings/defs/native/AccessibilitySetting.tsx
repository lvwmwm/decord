// Module ID: 14214
// Function ID: 109206
// Name: items
// Dependencies: [57, 31, 653, 1345, 33, 1334, 5802, 1273, 1212, 10095, 14215, 14217, 2]

// Module 14214 (items)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
let items = [require("DismissibleContent").DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.G0neg7);
  },
  parent: null,
  IconComponent: require("AccessibilityIcon").AccessibilityIcon,
  useTrailing() {
    let obj = require(5802) /* useSelectedDismissibleContent */;
    const first = callback(obj.useSelectedDismissibleContent(items), 2)[0];
    let tmp3 = null;
    if (null != first) {
      let hasItem;
      if (null != items) {
        hasItem = items.includes(first);
      }
      tmp3 = null;
      if (hasItem) {
        obj = {};
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.text = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
        tmp3 = jsx(require(1273) /* Button */.TextBadge, {});
      }
    }
    return tmp3;
  },
  usePreNavigationAction() {
    const tmp = callback(first(5802).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    const dependencyMap = tmp3;
    items = [tmp[1], first];
    return React.useCallback(() => {
      let hasItem = null != first;
      if (hasItem) {
        hasItem = null != outer1_6;
      }
      if (hasItem) {
        hasItem = outer1_6.includes(first);
      }
      if (hasItem) {
        tmp3(outer1_4.TAKE_ACTION);
      }
      return true;
    }, items);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.ACCESSIBILITY,
  getComponent() {
    return require(14217) /* getAccessibilitySettingScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default createToggle;
