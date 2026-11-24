// Module ID: 11537
// Function ID: 11538
// Name: navigateToThreadCreation
// Dependencies: [7973, 5093, 6000, 2]
// Exports: navigateToThreadCreation

// Module 11537 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5093 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7973 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(6000);
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
