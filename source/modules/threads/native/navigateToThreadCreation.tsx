// Module ID: 11222
// Function ID: 11223
// Name: navigateToThreadCreation
// Dependencies: [7765, 4417, 4571, 2]
// Exports: navigateToThreadCreation

// Module 11222 (navigateToThreadCreation)
import set from "set" /* 2 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import patchThreadDefault from "patchThread" /* 7765 */;

let result = set.fileFinishedImporting("modules/threads/native/navigateToThreadCreation.tsx");

export const navigateToThreadCreation = function navigateToThreadCreation(channel, Message) {
  const result = patchThreadDefault.openThreadCreationForMobile(channel, undefined, Message);
  const obj = patchThreadDefault;
  const tmp3 = require;
  if (!obj2.navigateToCreateThread(channel.guild_id, channel.id)) {
    transitionToChannel.transitionToChannel(channel.id);
    const tmp3Result = transitionToChannel;
  }
};
