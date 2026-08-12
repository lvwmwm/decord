// Module ID: 12333
// Function ID: 12334
// Name: openUserContextMenuCommands
// Dependencies: [8834, 4312, 4199, 1954, 2]
// Exports: default

// Module 12333 (openUserContextMenuCommands)
let result = require("coerceMainRoute").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8834);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4312).hideActionSheet();
  const obj2 = importDefault(4312);
  obj = {
    channel: selectedChannel,
    commandType: analyticsLocations(1954).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      let obj = analyticsLocations(outer1_2[0]);
      obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = analyticsLocations(4199).navigateToContextMenuCommands(obj);
};
