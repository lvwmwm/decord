// Module ID: 10646
// Function ID: 83050
// Name: updateStageMusicMuted
// Dependencies: [686, 2]
// Exports: updateStageMusicMuted, updateStageMusicShouldPlay

// Module 10646 (updateStageMusicMuted)
const result = require("set").fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  let obj = importDefault(686);
  obj = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj);
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  let obj = importDefault(686);
  obj = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj);
};
