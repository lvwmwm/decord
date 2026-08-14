// Module ID: 12354
// Function ID: 12355
// Name: openUserContextMenuCommands
// Dependencies: [8852, 4310, 4197, 1954, 2]
// Exports: default

// Module 12354 (openUserContextMenuCommands)
let result = require("coerceMainRoute").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8852);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4310).hideActionSheet();
  const obj2 = importDefault(4310);
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
  const result1 = analyticsLocations(4197).navigateToContextMenuCommands(obj);
};
