// Module ID: 13363
// Function ID: 13364
// Name: navigateToThreadCreation
// Dependencies: [8285, 5151, 5708, 2]
// Exports: navigateToThreadCreation

// Module 13363 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5151 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8285 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5708);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const obj = ThreadActionCreatorsDefault;
  const result = obj.openThreadCreationForMobile(channel, undefined, Message);
  const obj2 = NavigationRouteUtils;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    const tmp3Result = transitionToChannel;
    tmp3Result.transitionToChannel(channel.id);
  }
};
