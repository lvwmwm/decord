// Module ID: 14802
// Function ID: 14803
// Name: AccountAgeGroupSetting
// Dependencies: [17, 7966, 1085, 21, 5090, 587, 558, 576, 9102, 14803, 14810, 2048, 6184, 11262, 1126, 14811, 14771, 14812, 2]

// Module 14802 (AccountAgeGroupSetting)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import TableRow from "TableRow" /* 6184 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 9102 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14771 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 14803 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14810 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14811 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountAgeGroupTrailing() {
  let items;
  const obj = react;
  const cResult = obj.c(9);
  const tmp4 = closure_6();
  const obj2 = useAgeGroupPresentation;
  const ageGroupValueLabel = obj2.useAgeGroupValueLabel();
  const obj3 = TinyBroncoLazy;
  const shouldShowAgeNotice = obj3.useShouldShowAgeNotice();
  if (cResult[0] === shouldShowAgeNotice) {
    let tmp7;
    let tmp12;
    if (cResult[1] === tmp4.badge) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== ageGroupValueLabel) {
      const obj4 = { text: ageGroupValueLabel };
      const tmp14 = React3(TableRow.TableRow.TrailingText, obj4);
      cResult[3] = ageGroupValueLabel;
      cResult[4] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] === tmp4.trailing) {
      if (cResult[6] === tmp7) {
        let tmp15;
        if (cResult[7] === tmp12) {
          tmp15 = cResult[8];
        }
        return tmp15;
      }
    }
    const obj5 = { style: tmp4.trailing, children: items };
    items = [tmp7, tmp12];
    const tmp18 = hasOwnProperty(View, obj5);
    cResult[5] = tmp4.trailing;
    cResult[6] = tmp7;
    cResult[7] = tmp12;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  let tmp8 = shouldShowAgeNotice;
  if (tmp8) {
    const obj6 = { dismissibleContent: dismissible_content.DismissibleContent.TINY_BRONCO_SETTINGS, containerStyle: tmp4.badge, noGradient: true };
    const tmp11 = DismissiblePremiumNewBadgeDefault;
    tmp8 = React3(tmp11, obj6);
  }
  cResult[0] = shouldShowAgeNotice;
  cResult[1] = tmp4.badge;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function useAccountAgeGroupTrailing() {
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
});
let obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.piqs0o);
  },
  parent: MobileUserSettings.ACCOUNT,
  useTrailing: tmp3,
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
