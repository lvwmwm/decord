// Module ID: 11968
// Function ID: 11969
// Name: openUserContextMenuCommands
// Dependencies: [8108, 4157, 4040, 1906, 2]
// Exports: default

// Module 11968 (openUserContextMenuCommands)
let result = require("navigationToRootTabHelper").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8108);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4157).hideActionSheet();
  const obj2 = importDefault(4157);
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
  const result1 = analyticsLocations(4040).navigateToContextMenuCommands(obj);
};
