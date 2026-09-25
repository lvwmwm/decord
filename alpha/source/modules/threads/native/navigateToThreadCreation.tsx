// Module ID: 10779
// Function ID: 10780
// Name: navigateToThreadCreation
// Dependencies: [7179, 4688, 4840, 2]
// Exports: navigateToThreadCreation

// Module 10779 (navigateToThreadCreation)
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7179 */;
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
