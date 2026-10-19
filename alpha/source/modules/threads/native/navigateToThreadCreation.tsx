// Module ID: 13114
// Function ID: 13115
// Name: navigateToThreadCreation
// Dependencies: [8169, 5072, 5202, 2]
// Exports: navigateToThreadCreation

// Module 13114 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5072 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8169 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5202);
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
