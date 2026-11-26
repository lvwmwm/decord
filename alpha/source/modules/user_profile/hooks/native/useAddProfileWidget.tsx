// Module ID: 15012
// Function ID: 15013
// Name: useAddProfileWidget
// Dependencies: [19, 502, 6137, 1071, 9436, 14570, 6382, 5257, 5219, 2]
// Exports: default

// Module 15012 (useAddProfileWidget)
import Constants2 from "Constants" /* 1071 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6382 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 9436 */;
import WidgetUtils from "WidgetUtils" /* 14570 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 6137 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ TrackUserProfileEditActions: hasOwnProperty, UserProfileSections: metroRequire } = Constants);
const UserSettingsSections = Constants2.UserSettingsSections;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useAddProfileWidget.tsx");

export default function useAddProfileWidget() {
  let obj = { initialTab: constants2.WIDGETS };
  const tmp = useOpenProfileSettingsDefault(obj);
  let closure_0 = tmp;
  const items = [tmp];
  return react.useCallback((getProfileEditAnalyticsOptions) => {
    const obj = WidgetUtils;
    obj.addWidgetToPending(getProfileEditAnalyticsOptions);
    const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
    const obj2 = { userId: AuthenticationStore.getId(), action: hasOwnProperty.WIDGET_ADDED };
    const merged = Object.assign(getProfileEditAnalyticsOptions.getProfileEditAnalyticsOptions());
    const result = trackUserProfileEditAction(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideAllActionSheets();
    const obj4 = NavigationRouteUtils;
    if (obj4.getCurrentNavigationRouteName() !== UserSettingsSections.PROFILE_CUSTOMIZATION) {
      closure_0();
    }
  }, items);
};
