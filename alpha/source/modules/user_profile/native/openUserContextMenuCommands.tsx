// Module ID: 14435
// Function ID: 14436
// Name: openUserContextMenuCommands
// Dependencies: [8136, 5127, 5089, 2117, 2]
// Exports: default

// Module 14435 (openUserContextMenuCommands)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8136 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8136);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  let obj2 = ActionSheetActionCreatorsDefault;
  obj2.hideAllActionSheets();
  const obj3 = analyticsLocations(5089);
  const obj4 = {
    channel: selectedChannel,
    commandType: analyticsLocations(2117).ApplicationCommandType.USER,
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
