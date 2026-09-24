// Module ID: 11530
// Function ID: 11531
// Name: navigateToThreadCreation
// Dependencies: [8044, 4648, 4801, 2]
// Exports: navigateToThreadCreation

// Module 11530 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8044 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4801);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
