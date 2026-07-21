// Module ID: 12233
// Function ID: 93871
// Name: deferJoinActivityApplication
// Dependencies: [646840323, 899088385]
// Exports: default

// Module 12233 (deferJoinActivityApplication)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/deferJoinActivityInChannel.tsx");

export default function deferJoinActivityApplication(arg0) {
  let analyticsLocations;
  let applicationId;
  let channelId;
  let commandOrigin;
  let intent;
  let inviterUserId;
  ({ channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin } = arg0);
  importDefault(dependencyMap[0]).dispatch({ type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN", channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin });
};
