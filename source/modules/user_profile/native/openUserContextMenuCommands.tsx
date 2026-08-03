// Module ID: 12076
// Function ID: 12077
// Name: openUserContextMenuCommands
// Dependencies: [8443, 4223, 4106, 1906, 2]
// Exports: default

// Module 12076 (openUserContextMenuCommands)
let result = require("navigationToRootTabHelper").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8443);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4223).hideActionSheet();
  const obj2 = importDefault(4223);
  obj = {
    channel: selectedChannel,
    commandType: analyticsLocations(1906).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      let obj = analyticsLocations(outer1_2[0]);
      obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = analyticsLocations(4106).navigateToContextMenuCommands(obj);
};
