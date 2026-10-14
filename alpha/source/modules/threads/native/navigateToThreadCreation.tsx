// Module ID: 12710
// Function ID: 12711
// Name: navigateToThreadCreation
// Dependencies: [7909, 4978, 5107, 2]
// Exports: navigateToThreadCreation

// Module 12710 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4978 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7909 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5107);
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
