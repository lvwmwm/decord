// Module ID: 13347
// Function ID: 13348
// Name: navigateToThreadCreation
// Dependencies: [8287, 5150, 5707, 2]
// Exports: navigateToThreadCreation

// Module 13347 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8287 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5707);
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
