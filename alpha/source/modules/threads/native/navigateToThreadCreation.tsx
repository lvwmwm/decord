// Module ID: 11526
// Function ID: 11527
// Name: navigateToThreadCreation
// Dependencies: [8339, 4970, 5527, 2]
// Exports: navigateToThreadCreation

// Module 11526 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4970 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8339 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5527);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export function navigateToThreadCreation(channel, Message) {
  const obj = ThreadActionCreatorsDefault;
  const result = obj.openThreadCreationForMobile(channel, undefined, Message);
  const obj2 = NavigationRouteUtils;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    const tmp3Result = transitionToChannel;
    tmp3Result.transitionToChannel(channel.id);
  }
}
