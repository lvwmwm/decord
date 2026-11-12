// Module ID: 14283
// Function ID: 14284
// Name: navigateToThreadCreation
// Dependencies: [8304, 5346, 5917, 2]
// Exports: navigateToThreadCreation

// Module 14283 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8304 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5917);
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
