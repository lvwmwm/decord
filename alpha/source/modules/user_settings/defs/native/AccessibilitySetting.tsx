// Module ID: 15536
// Function ID: 15537
// Name: AccessibilitySetting
// Dependencies: [32, 19, 1085, 2061, 21, 2049, 558, 576, 7093, 1200, 1126, 10629, 15537, 15539, 2]

// Module 15536 (AccessibilitySetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7093 */;
import AccessibilityIcon from "AccessibilityIcon" /* 15537 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let items = [dismissible_content.DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrailing() {
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = useSelectedDismissibleContent;
  const first = _slicedToArray(obj2.useSelectedDismissibleContent(items), 1)[0];
  if (cResult[0] !== first) {
    let tmp7 = null != first;
    if (tmp7) {
      let hasItem;
      if (items != null) {
        hasItem = obj3.includes(first);
      }
      tmp7 = hasItem;
    }
    cResult[0] = first;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    let tmp10 = null;
    if (tmp5) {
      const TextBadge = tmp(1200).TextBadge;
      const intl = tmp(1126).intl;
      tmp10 = <TextBadge text={intl.string(intl2.t.y2b7CA)} />;
    }
    cResult[2] = tmp5;
    cResult[3] = tmp10;
    tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (function useTrailing() {
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
      const TextBadge = tmp(1200).TextBadge;
      const intl = tmp(1126).intl;
      tmp5 = <TextBadge text={intl.string(intl2.t.y2b7CA)} />;
    }
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreNavigationAction() {
  let closure_1;
  let first;
  let tmp4;
  let obj = first(576);
  const cResult = obj.c(3);
  const obj2 = first(7093);
  [first, tmp4] = obj2.useSelectedDismissibleContent(items);
  dependencyMap = tmp4;
  if (cResult[0] === tmp4) {
    let tmp5;
    if (cResult[1] === first) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const fn = function n() {
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
  };
  cResult[0] = tmp4;
  cResult[1] = first;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function usePreNavigationAction() {
  let closure_1;
  let first;
  let obj = first(7093);
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
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.G0neg7);
  },
  parent: null,
  IconComponent: AccessibilityIcon.AccessibilityIcon,
  useTrailing: tmp2,
  usePreNavigationAction: tmp3,
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
