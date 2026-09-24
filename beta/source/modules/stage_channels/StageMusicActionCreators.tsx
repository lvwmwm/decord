// Module ID: 10187
// Function ID: 10188
// Name: StageMusicActionCreators
// Dependencies: [577, 2]
// Exports: updateStageMusicMuted, updateStageMusicShouldPlay

// Module 10187 (StageMusicActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  DispatcherDefault.dispatch({ type: "STAGE_MUSIC_MUTE", muted });
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  DispatcherDefault.dispatch({ type: "STAGE_MUSIC_PLAY", play });
};
