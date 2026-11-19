// Module ID: 15925
// Function ID: 15926
// Name: AccountAgeGroupSetting
// Dependencies: [17, 8593, 1072, 21, 4792, 575, 10464, 15926, 15933, 4625, 6926, 11875, 1113, 15934, 15894, 15935, 2]

// Module 15925 (AccountAgeGroupSetting)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4625 */;
import TableRow from "TableRow" /* 6926 */;
import SettingsConstants from "SettingsConstants" /* 8593 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10464 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 15894 */;
import AgeNoticeLazy from "AgeNoticeLazy" /* 15926 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 15933 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 15934 */;
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
  usePredicate: AgeNoticeSettingsPredicate.useIsAgeNoticeSettingsEnabled,
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
