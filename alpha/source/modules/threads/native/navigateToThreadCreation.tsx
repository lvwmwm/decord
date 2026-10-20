// Module ID: 13164
// Function ID: 13165
// Name: navigateToThreadCreation
// Dependencies: [8235, 5111, 5669, 2]
// Exports: navigateToThreadCreation

// Module 13164 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5111 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8235 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5669);
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
