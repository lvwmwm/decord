// Module ID: 13924
// Function ID: 13925
// Name: openUserContextMenuCommands
// Dependencies: [8534, 5115, 5032, 1998, 2]
// Exports: default

// Module 13924 (openUserContextMenuCommands)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8534 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8534);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  let obj2 = ActionSheetActionCreatorsDefault;
  obj2.hideAllActionSheets();
  const obj3 = analyticsLocations(5032);
  const obj4 = {
    channel: selectedChannel,
    commandType: analyticsLocations(1998).ApplicationCommandType.USER,
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
