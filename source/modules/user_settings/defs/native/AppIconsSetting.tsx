// Module ID: 14461
// Function ID: 110414
// Name: route
// Dependencies: [57, 31, 653, 1345, 33, 14462, 1334, 8417, 10099, 1212, 14463, 6561, 14465, 2]

// Module 14461 (route)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.N4YDao);
  },
  parent: null,
  IconComponent: require("SettingsItemAppIcon"),
  useTrailing: function useAppIconSettingTrailing() {
    const obj = { dismissibleContent: require(1334) /* DismissibleContent */.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE, newPremiumStyle: true };
    return jsx(importDefault(14462), { dismissibleContent: require(1334) /* DismissibleContent */.DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE, newPremiumStyle: true });
  },
  usePreNavigationAction: function useAppIconSettingPreNavigationAction() {
    const items = [first(1334).DismissibleContent.CUSTOM_APP_ICONS_NEW_BADGE];
    const tmp = callback(first(8417).useSelectedDismissibleContent(items), 2);
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
    return require(6561) /* fetchCurrentAppIcon */.isAppIconsSupported();
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APP_ICONS,
  getComponent() {
    return require(14465).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppIconsSetting.tsx");

export default createToggle;
