// Module ID: 10318
// Function ID: 10319
// Name: navigateToThreadCreation
// Dependencies: [7368, 4234, 4391, 2]
// Exports: navigateToThreadCreation

// Module 10318 (navigateToThreadCreation)
import set from "set" /* 2 */;
import transitionToChannel from "transitionToChannel" /* 4391 */;
import patchThreadDefault from "patchThread" /* 7368 */;

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
