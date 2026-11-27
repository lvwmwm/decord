// Module ID: 18035
// Function ID: 18036
// Name: selectDiscoverServerAction
// Dependencies: [8933, 2]
// Exports: selectDiscoverServerAction

// Module 18035 (selectDiscoverServerAction)
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 8933 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/waterwheels/discover/selectDiscoverServerAction.tsx");

export function selectDiscoverServerAction(guild) {
  let JOIN_GUILD;
  let joinedAt;
  if (guild != null) {
    joinedAt = guild.joinedAt;
  }
  if (null != joinedAt) {
    JOIN_GUILD = WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD;
  } else {
    JOIN_GUILD = WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD;
  }
  return JOIN_GUILD;
}
