// Module ID: 11646
// Function ID: 11647
// Name: navigateToThreadCreation
// Dependencies: [8459, 5089, 5646, 2]
// Exports: navigateToThreadCreation

// Module 11646 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8459 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5646);
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
