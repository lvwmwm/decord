// Module ID: 14030
// Function ID: 14031
// Name: muteCustomJoinSound
// Dependencies: [584, 2]
// Exports: default

// Module 14030 (muteCustomJoinSound)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/muteCustomJoinSound.tsx");

export default function muteCustomJoinSound(channelId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SOUNDBOARD_MUTE_JOIN_SOUND", channelId };
  obj.dispatch(obj2);
};
