// Module ID: 10792
// Function ID: 10793
// Name: navigateToThreadCreation
// Dependencies: [7184, 4692, 4847, 2]
// Exports: navigateToThreadCreation

// Module 10792 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7184 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(4847);
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
