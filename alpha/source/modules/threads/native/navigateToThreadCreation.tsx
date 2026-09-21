// Module ID: 11488
// Function ID: 11489
// Name: navigateToThreadCreation
// Dependencies: [8007, 4613, 4767, 2]
// Exports: navigateToThreadCreation

// Module 11488 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8007 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4767);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
