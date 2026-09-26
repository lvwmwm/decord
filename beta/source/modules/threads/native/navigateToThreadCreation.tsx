// Module ID: 11517
// Function ID: 11518
// Name: navigateToThreadCreation
// Dependencies: [8039, 4645, 4799, 2]
// Exports: navigateToThreadCreation

// Module 11517 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8039 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4799);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
