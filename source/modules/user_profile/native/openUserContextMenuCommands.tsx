// Module ID: 12183
// Function ID: 12184
// Name: openUserContextMenuCommands
// Dependencies: [8712, 4253, 4135, 1935, 2]
// Exports: default

// Module 12183 (openUserContextMenuCommands)
let result = require("navigationToRootTabHelper").fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = analyticsLocations(8712);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(4253).hideActionSheet();
  const obj2 = importDefault(4253);
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
  const result1 = analyticsLocations(4135).navigateToContextMenuCommands(obj);
};
