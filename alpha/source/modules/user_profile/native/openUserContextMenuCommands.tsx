// Module ID: 14789
// Function ID: 14790
// Name: openUserContextMenuCommands
// Dependencies: [8754, 5253, 5193, 1993, 2]
// Exports: default

// Module 14789 (openUserContextMenuCommands)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8754 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8754);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  let obj2 = ActionSheetActionCreatorsDefault;
  obj2.hideAllActionSheets();
  const obj3 = analyticsLocations(5193);
  const obj4 = {
    channel: selectedChannel,
    commandType: analyticsLocations(1993).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      const obj = UserProfileAnalyticsUtils;
      const obj2 = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj2);
    }
  };
  const result1 = obj3.navigateToContextMenuCommands(obj4);
};
