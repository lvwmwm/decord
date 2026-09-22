// Module ID: 11492
// Function ID: 11493
// Name: navigateToThreadCreation
// Dependencies: [8010, 4614, 4768, 2]
// Exports: navigateToThreadCreation

// Module 11492 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8010 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4768);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
