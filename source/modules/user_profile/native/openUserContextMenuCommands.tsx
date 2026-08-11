// Module ID: 12270
// Function ID: 12271
// Name: openUserContextMenuCommands
// Dependencies: [8795, 4271, 4158, 1954, 2]
// Exports: default

// Module 12270 (openUserContextMenuCommands)
let result = require("navigationToRootTabHelper").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8795);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4271).hideActionSheet();
  const obj2 = importDefault(4271);
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
  const result1 = analyticsLocations(4158).navigateToContextMenuCommands(obj);
};
