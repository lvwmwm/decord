// Module ID: 12174
// Function ID: 12175
// Name: navigateToThreadCreation
// Dependencies: [7874, 4936, 5101, 2]
// Exports: navigateToThreadCreation

// Module 12174 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7874 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5101);
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
