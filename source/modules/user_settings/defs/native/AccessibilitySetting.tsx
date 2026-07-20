// Module ID: 14082
// Function ID: 106952
// Name: items
// Dependencies: []

// Module 14082 (items)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
const items = [arg1(dependencyMap[5]).DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
let obj = arg1(dependencyMap[9]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.G0neg7);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[10]).AccessibilityIcon,
  useTrailing() {
    let obj = arg1(dependencyMap[6]);
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
        const intl = arg1(dependencyMap[8]).intl;
        obj.text = intl.string(arg1(dependencyMap[8]).t.y2b7CA);
        tmp3 = jsx(arg1(dependencyMap[7]).TextBadge, obj);
      }
    }
    return tmp3;
  },
  usePreNavigationAction() {
    const tmp = callback(arg1(dependencyMap[6]).useSelectedDismissibleContent(items), 2);
    const first = tmp[0];
    const arg1 = first;
    const dependencyMap = tmp3;
    const items = [tmp[1], first];
    return React.useCallback(() => {
      let hasItem = null != first;
      if (hasItem) {
        hasItem = null != closure_6;
      }
      if (hasItem) {
        hasItem = closure_6.includes(first);
      }
      if (hasItem) {
        tmp3(constants.TAKE_ACTION);
      }
      return true;
    }, items);
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.ACCESSIBILITY,
  getComponent() {
    return arg1(dependencyMap[11]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;
