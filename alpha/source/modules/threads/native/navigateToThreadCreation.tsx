// Module ID: 11584
// Function ID: 11585
// Name: navigateToThreadCreation
// Dependencies: [8340, 4968, 5525, 2]
// Exports: navigateToThreadCreation

// Module 11584 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4968 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8340 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5525);
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
