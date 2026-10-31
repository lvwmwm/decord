// Module ID: 13997
// Function ID: 13998
// Name: navigateToThreadCreation
// Dependencies: [8202, 5198, 5756, 2]
// Exports: navigateToThreadCreation

// Module 13997 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8202 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5756);
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
