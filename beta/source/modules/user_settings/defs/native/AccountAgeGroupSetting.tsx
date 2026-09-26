// Module ID: 15018
// Function ID: 15019
// Name: AccountAgeGroupSetting
// Dependencies: [17, 8265, 1074, 21, 4788, 576, 15019, 15020, 15027, 2027, 5854, 11754, 1115, 15028, 14988, 15029, 2]

// Module 15018 (AccountAgeGroupSetting)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import TableRow from "TableRow" /* 5854 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14988 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 15019 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 15020 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 15027 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4788 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15028 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: { marginLeft: 0, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND, marginRight: nativeDefault.space.PX_4, marginBottom: 0 } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.piqs0o);
  },
  parent: SettingsConstants.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupTrailing() {
    const tmp = closure_6();
    const ageGroupValueLabel = useAgeGroupPresentation.useAgeGroupValueLabel();
    const shouldShowAgeNotice = TinyBroncoLazy.useShouldShowAgeNotice();
    const obj3 = { style: tmp.trailing, children: null };
    let tmp8 = shouldShowAgeNotice;
    if (shouldShowAgeNotice) {
      const obj4 = { dismissibleContent: tmp2(2027).DismissibleContent.TINY_BRONCO_SETTINGS, containerStyle: tmp.badge, noGradient: true };
      tmp8 = React4(DismissiblePremiumNewBadgeDefault, obj4);
    }
    const items = [tmp8, React4(TableRow.TableRow.TrailingText, { text: ageGroupValueLabel })];
    obj3.children = items;
    return hasOwnProperty(View, obj3);
  },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null
};
obj3.usePreNavigationAction = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, TinyBroncoLazy.useShouldShowAgeNotice);
obj3.usePredicate = TinyBroncoSettingsPredicate.useIsTinyBroncoSettingsEnabled;
obj3.screen = {
  route: Constants.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require("SettingsAgeGroupScreen").default;
  }
};
const route = SettingBuilders.createRoute(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;
