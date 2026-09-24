// Module ID: 15597
// Function ID: 15598
// Name: AccessibilitySetting
// Dependencies: [32, 19, 1078, 2042, 21, 2031, 558, 568, 7664, 1181, 1119, 11630, 15598, 15600, 2]

// Module 15597 (AccessibilitySetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7664 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [fn(2031).DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const first = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items), 1)[0];
  if (cResult[0] !== first) {
    let tmp7 = null != first;
    if (tmp7) {
      let hasItem;
      if (obj3 != null) {
        hasItem = obj3.includes(first);
      }
      tmp7 = hasItem;
    }
    cResult[0] = first;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    let tmp10 = null;
    if (tmp5) {
      const obj4 = { text: null };
      const intl = tmp(1119).intl;
      obj4.text = intl.string(tmp(1119).t.y2b7CA);
      tmp10 = jsx(tmp(1181).TextBadge, { text: null });
    }
    cResult[2] = tmp5;
    cResult[3] = tmp10;
    let tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
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
      const intl = tmp(1119).intl;
      obj3.text = intl.string(tmp(1119).t.y2b7CA);
      tmp5 = jsx(tmp(1181).TextBadge, { text: null });
    }
  }
  return tmp5;
});
const SettingBuilders = fn(11630);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first(568).c(3);
  let obj = first(568);
  let tmp2 = _slicedToArray(first(7664).useSelectedDismissibleContent(items), 2);
  first = tmp2[0];
  dependencyMap = tmp4;
  if (cResult[0] === tmp2[1]) {
    if (cResult[1] === first) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const fn = function n() {
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
  };
  cResult[0] = tmp2[1];
  cResult[1] = first;
  cResult[2] = fn;
  tmp5 = fn;
}) : (() => {
  const tmp = _slicedToArray(first(7664).useSelectedDismissibleContent(items), 2);
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
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.G0neg7);
  },
  parent: null,
  IconComponent: fn(15598).AccessibilityIcon,
  useTrailing: tmp2,
  usePreNavigationAction: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = first(568).c(3);
    let obj = first(568);
    let tmp2 = _slicedToArray(first(7664).useSelectedDismissibleContent(items), 2);
    first = tmp2[0];
    dependencyMap = tmp4;
    if (cResult[0] === tmp2[1]) {
      if (cResult[1] === first) {
        let tmp5 = cResult[2];
      }
      return tmp5;
    }
    const fn = function n() {
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
    };
    cResult[0] = tmp2[1];
    cResult[1] = first;
    cResult[2] = fn;
    tmp5 = fn;
  }) : (() => {
    const tmp = _slicedToArray(first(7664).useSelectedDismissibleContent(items), 2);
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
  }),
  screen: {
    route: fn(1078).UserSettingsSections.ACCESSIBILITY,
    getComponent() {
      return require("SettingsAccessibilityScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;
