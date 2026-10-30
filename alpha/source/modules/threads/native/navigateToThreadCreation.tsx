// Module ID: 13962
// Function ID: 13963
// Name: navigateToThreadCreation
// Dependencies: [8194, 5193, 5751, 2]
// Exports: navigateToThreadCreation

// Module 13962 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5193 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8194 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5751);
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
