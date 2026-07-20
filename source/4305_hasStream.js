// Module ID: 4305
// Function ID: 37714
// Name: hasStream
// Dependencies: []
// Exports: hasStream

// Module 4305 (hasStream)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_sidebar/ChannelListUtils.tsx");

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
