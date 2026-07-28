// Module ID: 11944
// Function ID: 92283
// Name: openUserContextMenuCommands
// Dependencies: [8084, 4133, 4016, 1882, 2]
// Exports: default

// Module 11944 (openUserContextMenuCommands)
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8084);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4133).hideActionSheet();
  const obj2 = importDefault(4133);
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
  const result1 = analyticsLocations(4016).navigateToContextMenuCommands(obj);
};
