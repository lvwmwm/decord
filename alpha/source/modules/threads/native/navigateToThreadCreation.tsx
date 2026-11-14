// Module ID: 11843
// Function ID: 11844
// Name: navigateToThreadCreation
// Dependencies: [8864, 5492, 6063, 2]
// Exports: navigateToThreadCreation

// Module 11843 (navigateToThreadCreation)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5492 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8864 */;
import size from "module_2" /* 2 */;

let tmp3;
const transitionToChannel = tmp3(6063);
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
