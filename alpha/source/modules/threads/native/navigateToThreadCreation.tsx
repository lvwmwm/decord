// Module ID: 10961
// Function ID: 10962
// Name: navigateToThreadCreation
// Dependencies: [7349, 4692, 4847, 2]
// Exports: navigateToThreadCreation

// Module 10961 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7349 */;
import size from "module_2" /* 2 */;

const transitionToChannel = tmp3(4847);
let result = size.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(channel, undefined, Message);
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
