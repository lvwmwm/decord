// Module ID: 13815
// Function ID: 13816
// Name: navigateToThreadCreation
// Dependencies: [8341, 5187, 5745, 2]
// Exports: navigateToThreadCreation

// Module 13815 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8341 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(5745);
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
