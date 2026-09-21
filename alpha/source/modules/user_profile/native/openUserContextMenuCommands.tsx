// Module ID: 13285
// Function ID: 13286
// Name: openUserContextMenuCommands
// Dependencies: [8460, 4723, 4613, 1978, 2]
// Exports: default

// Module 13285 (openUserContextMenuCommands)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8460 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  const result = analyticsLocations(8460).trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  const obj = analyticsLocations(8460);
  ActionSheetActionCreatorsDefault.hideAllActionSheets();
  const obj3 = analyticsLocations(4613);
  const result1 = obj3.navigateToContextMenuCommands({
    channel: selectedChannel,
    commandType: analyticsLocations(1978).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      return UserProfileAnalyticsUtils.trackUserProfileAction({ action: "PRESS_APP_COMMAND", analyticsLocations });
    }
  });
};
