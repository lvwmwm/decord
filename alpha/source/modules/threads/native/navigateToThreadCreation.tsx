// Module ID: 14277
// Function ID: 14278
// Name: navigateToThreadCreation
// Dependencies: [8275, 5316, 5887, 2]
// Exports: navigateToThreadCreation

// Module 14277 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5316 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8275 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5887);
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
