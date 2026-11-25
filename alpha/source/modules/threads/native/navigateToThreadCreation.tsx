// Module ID: 11636
// Function ID: 11637
// Name: navigateToThreadCreation
// Dependencies: [8072, 5188, 6095, 2]
// Exports: navigateToThreadCreation

// Module 11636 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5188 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8072 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(6095);
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
