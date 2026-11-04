// Module ID: 16862
// Function ID: 16863
// Name: AccountAgeGroupSetting
// Dependencies: [17, 8573, 1072, 21, 5141, 575, 10310, 16863, 16870, 4974, 7116, 11729, 1113, 16871, 16831, 16872, 2]

// Module 16862 (AccountAgeGroupSetting)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4974 */;
import TableRow from "TableRow" /* 7116 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10310 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 16831 */;
import AgeNoticeLazy from "AgeNoticeLazy" /* 16863 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 16870 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 16871 */;
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
obj2 = { marginLeft: 0, backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, marginRight: nativeDefault.space.PX_4, marginBottom: 0 };
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
    const obj2 = AgeNoticeLazy;
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
  usePreNavigationAction: createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, AgeNoticeLazy.useShouldShowAgeNotice),
  usePredicate: AgeNoticeSettingsPredicate.useIsTinyBroncoSettingsEnabled,
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
