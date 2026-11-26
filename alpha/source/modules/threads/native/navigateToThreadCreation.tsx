// Module ID: 11684
// Function ID: 11685
// Name: navigateToThreadCreation
// Dependencies: [8114, 5219, 6126, 2]
// Exports: navigateToThreadCreation

// Module 11684 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5219 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8114 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(6126);
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
