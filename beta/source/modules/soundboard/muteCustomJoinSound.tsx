// Module ID: 15654
// Function ID: 15655
// Name: muteCustomJoinSound
// Dependencies: [572, 2]
// Exports: default

// Module 15654 (muteCustomJoinSound)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/muteCustomJoinSound.tsx");

export default function muteCustomJoinSound(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId };
  obj.dispatch(obj2);
};
