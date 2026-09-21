// Module ID: 11494
// Function ID: 11495
// Name: navigateToThreadCreation
// Dependencies: [8012, 4616, 4769, 2]
// Exports: navigateToThreadCreation

// Module 11494 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8012 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4769);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
