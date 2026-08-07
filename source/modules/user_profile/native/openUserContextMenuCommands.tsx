// Module ID: 12198
// Function ID: 12199
// Name: openUserContextMenuCommands
// Dependencies: [8729, 4270, 4152, 1935, 2]
// Exports: default

// Module 12198 (openUserContextMenuCommands)
let result = require("navigationToRootTabHelper").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8729);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4270).hideActionSheet();
  const obj2 = importDefault(4270);
  obj = {
    channel: selectedChannel,
    commandType: analyticsLocations(1935).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      let obj = analyticsLocations(outer1_2[0]);
      obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = analyticsLocations(4152).navigateToContextMenuCommands(obj);
};
