// Module ID: 12488
// Function ID: 12489
// Name: deferJoinActivityInChannel
// Dependencies: [585, 2]
// Exports: default

// Module 12488 (deferJoinActivityInChannel)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/deferJoinActivityInChannel.tsx");

export default function deferJoinActivityApplication(arg0) {
  let analyticsLocations;
  let applicationId;
  let channelId;
  let commandOrigin;
  let intent;
  let inviterUserId;
  ({ channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN", channelId, applicationId, intent, inviterUserId, analyticsLocations, commandOrigin });
};
