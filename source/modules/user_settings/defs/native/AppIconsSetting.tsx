// Module ID: 14483
// Function ID: 14484
// Name: route
// Dependencies: [32, 19, 676, 1369, 21, 14484, 1358, 8441, 10120, 1236, 14485, 6582, 14487, 2]

// Module 14483 (route)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.N4YDao);
  },
  parent: null,
  IconComponent: require("SettingsItemAppIcon"),
  useTrailing: function useAppIconSettingTrailing() {
    const obj = { dismissibleContent: null, newPremiumStyle: true };
    obj[0] = require(1358) /* DismissibleContent */.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE;
    return jsx(importDefault(14484), { dismissibleContent: null, newPremiumStyle: true });
  },
  usePreNavigationAction: function useAppIconSettingPreNavigationAction() {
    const items = [first(1358).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE];
    const tmp = callback(first(8441).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    const importDefault = tmp3;
    const items1 = [first, tmp[1]];
    return React.useCallback(() => {
      if (first === first(outer1_2[6]).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE) {
        tmp3 = tmp3(outer1_5.TAKE_ACTION);
      }
      return true;
    }, items1);
  },
  usePredicate() {
    return require(6582) /* fetchCurrentAppIcon */.isAppIconsSupported();
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14487).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default createToggle;
