// Module ID: 11900
// Function ID: 92108
// Name: openUserContextMenuCommands
// Dependencies: [8046, 4099, 3982, 1882, 2]
// Exports: default

// Module 11900 (openUserContextMenuCommands)
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8046);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4099).hideActionSheet();
  const obj2 = importDefault(4099);
  obj = {
    channel: selectedChannel,
    commandType: analyticsLocations(1882).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      let obj = analyticsLocations(outer1_2[0]);
      obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = analyticsLocations(3982).navigateToContextMenuCommands(obj);
};
