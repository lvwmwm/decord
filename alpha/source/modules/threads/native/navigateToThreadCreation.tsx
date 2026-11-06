// Module ID: 14220
// Function ID: 14221
// Name: navigateToThreadCreation
// Dependencies: [8292, 5344, 5912, 2]
// Exports: navigateToThreadCreation

// Module 14220 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5344 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8292 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5912);
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
