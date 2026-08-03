// Module ID: 12539
// Function ID: 12540
// Name: deferJoinActivityApplication
// Dependencies: [709, 2]
// Exports: default

// Module 12539 (deferJoinActivityApplication)
const result = require("set").fileFinishedImporting("modules/activities/utils/deferJoinActivityInChannel.tsx");

export default function deferJoinActivityApplication(arg0) {
  let analyticsLocations;
  let applicationId;
  let channelId;
  let commandOrigin;
  let intent;
  let inviterUserId;
  ({ channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin } = arg0);
  importDefault(709).dispatch({ type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN", channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin });
};
