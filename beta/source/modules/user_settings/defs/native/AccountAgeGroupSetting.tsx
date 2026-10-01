// Module ID: 14273
// Function ID: 14274
// Name: AccountAgeGroupSetting
// Dependencies: [17, 7417, 1074, 21, 4836, 576, 14274, 14275, 14282, 2029, 5917, 11006, 1115, 14283, 14243, 14284, 2]

// Module 14273 (AccountAgeGroupSetting)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import TableRow from "TableRow" /* 5917 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14243 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 14274 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 14275 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14282 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14283 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let createDismissibleBadgePreNavigationAction;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: obj2 };
obj2 = { marginLeft: 0, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, marginRight: nativeDefault.space.PX_4, marginBottom: 0 };
let closure_6 = createStyles.createStyles(obj);
let obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.piqs0o);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupTrailing() {
    let items;
    const tmp = closure_6();
    const obj = useAgeGroupPresentation;
    const ageGroupValueLabel = obj.useAgeGroupValueLabel();
    const obj2 = TinyBroncoLazy;
    const shouldShowAgeNotice = obj2.useShouldShowAgeNotice();
    let tmp8 = shouldShowAgeNotice;
    const obj3 = { style: tmp.trailing, children: items };
    const tmp6 = hasOwnProperty;
    const tmp7 = View;
    if (shouldShowAgeNotice) {
      const obj4 = { dismissibleContent: dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, containerStyle: tmp.badge, noGradient: true };
      const tmp11 = DismissiblePremiumNewBadgeDefault;
      tmp8 = React3(tmp11, obj4);
    }
    items = [tmp8, React3(TableRow.TableRow.TrailingText, { text: ageGroupValueLabel })];
    return tmp6(tmp7, obj3);
  },
  usePreNavigationAction: createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, TinyBroncoLazy.useShouldShowAgeNotice),
  usePredicate: TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled,
  screen: {
    route: UserSettingsSections.AGE_GROUP,
    getComponent() {
      return require("SettingsAgeGroupScreen").default;
    }
  }
};
const createRoute = SettingBuilders.createRoute;
createDismissibleBadgePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction;
const route = createRoute(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;
