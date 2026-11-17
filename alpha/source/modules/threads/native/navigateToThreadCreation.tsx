// Module ID: 12324
// Function ID: 12325
// Name: navigateToThreadCreation
// Dependencies: [8875, 5486, 6060, 2]
// Exports: navigateToThreadCreation

// Module 12324 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5486 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8875 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(6060);
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
