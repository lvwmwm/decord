// Module ID: 11032
// Function ID: 11033
// Name: navigateToThreadCreation
// Dependencies: [7274, 4742, 4907, 2]
// Exports: navigateToThreadCreation

// Module 11032 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4742 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7274 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(4907);
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
