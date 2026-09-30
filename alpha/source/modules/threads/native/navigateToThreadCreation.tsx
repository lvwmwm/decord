// Module ID: 10997
// Function ID: 10998
// Name: navigateToThreadCreation
// Dependencies: [7379, 4722, 4877, 2]
// Exports: navigateToThreadCreation

// Module 10997 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7379 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4877);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
