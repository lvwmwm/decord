// Module ID: 15226
// Function ID: 15227
// Name: useAddProfileWidget
// Dependencies: [19, 502, 8858, 1072, 11695, 12581, 8866, 5406, 5346, 2]
// Exports: default

// Module 15226 (useAddProfileWidget)
import Constants from "Constants" /* 1072 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import Constants2 from "Constants" /* 8858 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8866 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 11695 */;
import WidgetUtils from "WidgetUtils" /* 12581 */;
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
