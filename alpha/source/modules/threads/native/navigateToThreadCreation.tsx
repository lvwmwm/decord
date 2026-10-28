// Module ID: 13582
// Function ID: 13583
// Name: navigateToThreadCreation
// Dependencies: [8319, 5186, 5743, 2]
// Exports: navigateToThreadCreation

// Module 13582 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5186 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8319 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5743);
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
