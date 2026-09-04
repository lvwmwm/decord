// Module ID: 14640
// Function ID: 14641
// Name: route
// Dependencies: [17, 7906, 673, 21, 4481, 709, 14641, 14642, 14643, 1372, 5560, 11400, 1233, 14644, 14607, 14645, 2]

// Module 14640 (route)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 673 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import TableRowInner from "TableRowInner" /* 5560 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import useIsTinyBroncoSettingsEnabled from "useIsTinyBroncoSettingsEnabled" /* 14607 */;
import AgeGroupState from "AgeGroupState" /* 14641 */;
import isTinyBroncoAnnouncementCountry from "isTinyBroncoAnnouncementCountry" /* 14642 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 14643 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;
import createToggle from "createToggle" /* 11400 */;
import useAlwaysShow from "useAlwaysShow" /* 14644 */;

const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { trailing: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, badge: null };
obj = { marginLeft: 0, marginRight: ThemesDefault.space.PX_4 };
obj[1] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const obj1 = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.piqs0o);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing: function useAccountAgeGroupTrailing() {
    const tmp = callback2();
    let obj = AgeGroupState;
    const ageGroupValueLabel = obj.useAgeGroupValueLabel();
    const shouldShowTinyBroncoAccountStatus = isTinyBroncoAnnouncementCountry.useShouldShowTinyBroncoAccountStatus();
    obj = { style: tmp.trailing, children: null };
    let tmp8 = shouldShowTinyBroncoAccountStatus;
    if (shouldShowTinyBroncoAccountStatus) {
      obj = { dismissibleContent: null, containerStyle: null, noGradient: true };
      obj[0] = tmp2(1372).DismissibleContent.TINY_BRONCO_SETTINGS;
      obj[1] = tmp.badge;
      tmp8 = callback(DismissiblePremiumNewBadgeDefault, obj);
      const tmp11 = DismissiblePremiumNewBadgeDefault;
    }
    const items = [tmp8, callback(TableRowInner.TableRow.TrailingText, { text: ageGroupValueLabel })];
    obj[1] = items;
    return closure_5(View, obj);
  },
  usePreNavigationAction: null,
  usePredicate: null,
  screen: null
};
obj1[3] = useAlwaysShow.createDismissibleBadgePreNavigationAction(DismissibleContent.DismissibleContent.TINY_BRONCO_SETTINGS, isTinyBroncoAnnouncementCountry.useShouldShowTinyBroncoAccountStatus);
obj1[4] = useIsTinyBroncoSettingsEnabled.useIsTinyBroncoSettingsEnabled;
obj1[5] = {
  route: ME.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(14645) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj1);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupSetting.tsx");

export default route;
