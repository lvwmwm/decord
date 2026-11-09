// Module ID: 14251
// Function ID: 14252
// Name: navigateToThreadCreation
// Dependencies: [8271, 5314, 5885, 2]
// Exports: navigateToThreadCreation

// Module 14251 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8271 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5885);
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
