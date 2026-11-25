// Module ID: 14962
// Function ID: 14963
// Name: useAddProfileWidget
// Dependencies: [19, 502, 6106, 1071, 9394, 14518, 6351, 5226, 5188, 2]
// Exports: default

// Module 14962 (useAddProfileWidget)
import Constants2 from "Constants" /* 1071 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6351 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 9394 */;
import WidgetUtils from "WidgetUtils" /* 14518 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 6106 */;
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
