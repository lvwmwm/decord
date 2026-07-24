// Module ID: 11924
// Function ID: 92303
// Name: openUserContextMenuCommands
// Dependencies: [8311, 4098, 3981, 1881, 2]
// Exports: default

// Module 11924 (openUserContextMenuCommands)
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8311);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4098).hideActionSheet();
  const obj2 = importDefault(4098);
  obj = {
    channel: selectedChannel,
    commandType: analyticsLocations(1881).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      let obj = analyticsLocations(outer1_2[0]);
      obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = analyticsLocations(3981).navigateToContextMenuCommands(obj);
};
