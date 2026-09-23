// Module ID: 11568
// Function ID: 11569
// Name: navigateToThreadCreation
// Dependencies: [8092, 4684, 4838, 2]
// Exports: navigateToThreadCreation

// Module 11568 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8092 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4838);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
