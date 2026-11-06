// Module ID: 15155
// Function ID: 15156
// Name: useAddProfileWidget
// Dependencies: [19, 502, 8846, 1072, 11681, 12536, 8854, 5404, 5344, 2]
// Exports: default

// Module 15155 (useAddProfileWidget)
import Constants from "Constants" /* 1072 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5344 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import Constants2 from "Constants" /* 8846 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8854 */;
import useOpenProfileSettingsDefault from "useOpenProfileSettings" /* 11681 */;
import WidgetUtils from "WidgetUtils" /* 12536 */;
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
