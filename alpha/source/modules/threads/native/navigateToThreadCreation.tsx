// Module ID: 13033
// Function ID: 13034
// Name: navigateToThreadCreation
// Dependencies: [8122, 5035, 5164, 2]
// Exports: navigateToThreadCreation

// Module 13033 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5035 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8122 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5164);
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
