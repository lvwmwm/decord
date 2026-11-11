// Module ID: 11783
// Function ID: 11784
// Name: navigateToThreadCreation
// Dependencies: [8798, 5429, 6000, 2]
// Exports: navigateToThreadCreation

// Module 11783 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5429 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8798 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(6000);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export function navigateToThreadCreation(channel, Message) {
  const obj = ThreadActionCreatorsDefault;
  const result = obj.openThreadCreationForMobile(channel, undefined, Message);
  const obj2 = NavigationRouteUtils;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    const tmp3Result = transitionToChannel;
    tmp3Result.transitionToChannel(channel.id);
  }
}
