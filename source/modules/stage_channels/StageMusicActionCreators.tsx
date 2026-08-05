// Module ID: 10655
// Function ID: 10656
// Name: updateStageMusicMuted
// Dependencies: [709, 2]
// Exports: updateStageMusicMuted, updateStageMusicShouldPlay

// Module 10655 (updateStageMusicMuted)
const result = require("set").fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  let obj = importDefault(709);
  obj = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj);
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  let obj = importDefault(709);
  obj = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj);
};
