// Module ID: 14243
// Function ID: 14244
// Name: navigateToThreadCreation
// Dependencies: [8347, 5324, 5893, 2]
// Exports: navigateToThreadCreation

// Module 14243 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5324 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8347 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5893);
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
