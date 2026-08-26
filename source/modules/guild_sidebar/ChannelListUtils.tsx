// Module ID: 4631
// Function ID: 4632
// Name: hasStream
// Dependencies: [2]
// Exports: hasStream

// Module 4631 (hasStream)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_sidebar/ChannelListUtils.tsx");

export const hasStream = function hasStream(voiceStates) {
  if (null == voiceStates) {
    return false;
  } else {
    let num = 0;
    if (0 < voiceStates.length) {
      while (!voiceStates[num].voiceState.selfStream) {
        num = num + 1;
      }
      return true;
    }
    return false;
  }
};
