// Module ID: 9357
// Function ID: 9358
// Name: StageMusicActionCreators
// Dependencies: [573, 2]
// Exports: updateStageMusicMuted, updateStageMusicShouldPlay

// Module 9357 (StageMusicActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  DispatcherDefault.dispatch({ type: "STAGE_MUSIC_MUTE", muted });
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  DispatcherDefault.dispatch({ type: "STAGE_MUSIC_PLAY", play });
};
