// Module ID: 13379
// Function ID: 13380
// Name: navigateToThreadCreation
// Dependencies: [8319, 5182, 5739, 2]
// Exports: navigateToThreadCreation

// Module 13379 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5182 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8319 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5739);
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
