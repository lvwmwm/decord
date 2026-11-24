// Module ID: 14840
// Function ID: 14841
// Name: useAddProfileWidget
// Dependencies: [19, 502, 6011, 1071, 9295, 14395, 6256, 5131, 5093, 2]
// Exports: default

// Module 14840 (useAddProfileWidget)
import Constants from "Constants" /* 1071 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5093 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import Constants2 from "Constants" /* 6011 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6256 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 9295 */;
import WidgetUtils from "WidgetUtils" /* 14395 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let closure_5 = Constants2.TrackUserProfileEditActions;
const UserSettingsSections = Constants.UserSettingsSections;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useAddProfileWidget.tsx");

export default function useAddProfileWidget() {
  const tmp = useOpenProfileSettingsDefault({ initialTab: "board" });
  let closure_0 = tmp;
  const items = [tmp];
  return react.useCallback((getProfileEditAnalyticsOptions) => {
    const obj = WidgetUtils;
    obj.addWidgetToPending(getProfileEditAnalyticsOptions);
    const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
    const obj2 = { userId: AuthenticationStore.getId(), action: constants.WIDGET_ADDED };
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
