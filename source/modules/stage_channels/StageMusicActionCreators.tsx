// Module ID: 10948
// Function ID: 10949
// Name: updateStageMusicMuted
// Dependencies: [709, 2]
// Exports: updateStageMusicMuted, updateStageMusicShouldPlay

// Module 10948 (updateStageMusicMuted)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  let obj = dispatcherDefault;
  obj = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj);
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  let obj = dispatcherDefault;
  obj = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj);
};
