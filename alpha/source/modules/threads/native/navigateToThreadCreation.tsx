// Module ID: 14230
// Function ID: 14231
// Name: navigateToThreadCreation
// Dependencies: [8342, 5322, 5890, 2]
// Exports: navigateToThreadCreation

// Module 14230 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5322 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8342 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5890);
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
