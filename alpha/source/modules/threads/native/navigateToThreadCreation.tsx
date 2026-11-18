// Module ID: 11606
// Function ID: 11607
// Name: navigateToThreadCreation
// Dependencies: [8371, 4999, 5556, 2]
// Exports: navigateToThreadCreation

// Module 11606 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4999 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8371 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5556);
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
