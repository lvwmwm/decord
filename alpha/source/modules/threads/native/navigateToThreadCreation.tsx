// Module ID: 13268
// Function ID: 13269
// Name: navigateToThreadCreation
// Dependencies: [8272, 5136, 5693, 2]
// Exports: navigateToThreadCreation

// Module 13268 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5136 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8272 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5693);
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
