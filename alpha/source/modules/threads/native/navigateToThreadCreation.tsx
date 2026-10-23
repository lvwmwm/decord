// Module ID: 13305
// Function ID: 13306
// Name: navigateToThreadCreation
// Dependencies: [8285, 5148, 5705, 2]
// Exports: navigateToThreadCreation

// Module 13305 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5148 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8285 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5705);
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
