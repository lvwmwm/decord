// Module ID: 11019
// Function ID: 11020
// Name: navigateToThreadCreation
// Dependencies: [7261, 4736, 4901, 2]
// Exports: navigateToThreadCreation

// Module 11019 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7261 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(4901);
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
