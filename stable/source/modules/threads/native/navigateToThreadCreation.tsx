// Module ID: 10774
// Function ID: 10775
// Name: navigateToThreadCreation
// Dependencies: [7188, 4694, 4848, 2]
// Exports: navigateToThreadCreation

// Module 10774 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4694 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7188 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(4848);
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
