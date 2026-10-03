// Module ID: 9573
// Function ID: 9574
// Name: StageMusicActionCreators
// Dependencies: [584, 2]
// Exports: updateStageMusicMuted, updateStageMusicShouldPlay

// Module 9573 (StageMusicActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  const obj = DispatcherDefault;
  const obj2 = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj2);
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  const obj = DispatcherDefault;
  const obj2 = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj2);
};
