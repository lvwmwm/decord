// Module ID: 14241
// Function ID: 107630
// Name: route
// Dependencies: []

// Module 14241 (route)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[8]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[9]).intl;
    return intl.string(arg1(dependencyMap[9]).t.N4YDao);
  },
  parent: null,
  IconComponent: importDefault(dependencyMap[10]),
  useTrailing: function useAppIconSettingTrailing() {
    const obj = { dismissibleContent: arg1(dependencyMap[6]).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE, newPremiumStyle: true };
    return jsx(importDefault(dependencyMap[5]), obj);
  },
  usePreNavigationAction: function useAppIconSettingPreNavigationAction() {
    const items = [arg1(dependencyMap[6]).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE];
    const tmp = callback(arg1(dependencyMap[7]).useSelectedDismissibleContent(items), 2);
    const first = tmp[0];
    const arg1 = first;
    const importDefault = tmp3;
    const items1 = [first, tmp[1]];
    return React.useCallback(() => {
      if (first === first(closure_2[6]).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE) {
        const tmp3 = tmp3(constants.TAKE_ACTION);
      }
      return true;
    }, items1);
  },
  usePredicate() {
    return arg1(dependencyMap[11]).isAppIconsSupported();
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.APP_ICONS,
  getComponent() {
    return arg1(dependencyMap[12]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default route;
