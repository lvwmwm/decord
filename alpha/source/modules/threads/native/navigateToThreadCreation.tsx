// Module ID: 12113
// Function ID: 12114
// Name: navigateToThreadCreation
// Dependencies: [7883, 4937, 5102, 2]
// Exports: navigateToThreadCreation

// Module 12113 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7883 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5102);
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
