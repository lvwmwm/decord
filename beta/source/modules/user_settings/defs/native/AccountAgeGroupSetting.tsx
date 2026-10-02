// Module ID: 14261
// Function ID: 14262
// Name: AccountAgeGroupSetting
// Dependencies: [17, 7421, 1086, 21, 4837, 588, 558, 576, 14262, 14263, 14270, 2035, 5916, 10874, 1127, 14271, 14231, 14272, 2]

// Module 14261 (AccountAgeGroupSetting)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import dismissible_content from "dismissible_content" /* 2035 */;
import TableRow from "TableRow" /* 5916 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14231 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 14262 */;
import TinyBroncoLazy from "TinyBroncoLazy" /* 14263 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14270 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import DismissibleBadgeUtils from "DismissibleBadgeUtils" /* 14271 */;
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
