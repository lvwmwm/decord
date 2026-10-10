// Module ID: 12157
// Function ID: 12158
// Name: navigateToThreadCreation
// Dependencies: [7901, 4976, 5103, 2]
// Exports: navigateToThreadCreation

// Module 12157 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7901 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5103);
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
