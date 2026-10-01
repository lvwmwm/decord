// Module ID: 11001
// Function ID: 11002
// Name: navigateToThreadCreation
// Dependencies: [7357, 4721, 4856, 2]
// Exports: navigateToThreadCreation

// Module 11001 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7357 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4856);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
