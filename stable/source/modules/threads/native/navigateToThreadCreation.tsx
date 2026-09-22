// Module ID: 11359
// Function ID: 11360
// Name: navigateToThreadCreation
// Dependencies: [7867, 4494, 4647, 2]
// Exports: navigateToThreadCreation

// Module 11359 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7867 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4647);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
