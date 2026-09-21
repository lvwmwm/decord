// Module ID: 4902
// Function ID: 4903
// Name: ChannelListUtils
// Dependencies: [2]
// Exports: hasStream

// Module 4902 (ChannelListUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/ChannelListUtils.tsx");

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
