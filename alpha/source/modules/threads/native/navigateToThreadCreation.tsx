// Module ID: 11574
// Function ID: 11575
// Name: navigateToThreadCreation
// Dependencies: [8094, 4686, 4840, 2]
// Exports: navigateToThreadCreation

// Module 11574 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8094 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4840);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
