// Module ID: 13232
// Function ID: 13233
// Name: navigateToThreadCreation
// Dependencies: [8263, 5132, 5689, 2]
// Exports: navigateToThreadCreation

// Module 13232 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5132 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8263 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5689);
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
