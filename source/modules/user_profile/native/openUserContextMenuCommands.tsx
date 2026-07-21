// Module ID: 11884
// Function ID: 91998
// Name: openUserContextMenuCommands
// Dependencies: []
// Exports: default

// Module 11884 (openUserContextMenuCommands)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/user_profile/native/openUserContextMenuCommands.tsx");

export default function openUserContextMenuCommands(analyticsLocations) {
  let selectedChannel;
  let showUserProfile;
  let userId;
  analyticsLocations = analyticsLocations.analyticsLocations;
  const require = analyticsLocations;
  ({ userId, selectedChannel, showUserProfile } = analyticsLocations);
  let obj = require(dependencyMap[0]);
  const result = obj.trackUserProfileAction({ action: "PRESS_VIEW_APP_COMMANDS", analyticsLocations });
  importDefault(dependencyMap[1]).hideActionSheet();
  const obj2 = importDefault(dependencyMap[1]);
  obj = {
    channel: selectedChannel,
    commandType: require(dependencyMap[3]).ApplicationCommandType.USER,
    commandTargetId: userId,
    onClose: showUserProfile,
    onPressAppCommand() {
      let obj = analyticsLocations(closure_2[0]);
      obj = { action: "PRESS_APP_COMMAND", analyticsLocations };
      return obj.trackUserProfileAction(obj);
    }
  };
  const result1 = require(dependencyMap[2]).navigateToContextMenuCommands(obj);
};
