// Module ID: 10643
// Function ID: 83121
// Name: updateStageMusicMuted
// Dependencies: []
// Exports: updateStageMusicMuted, updateStageMusicShouldPlay

// Module 10643 (updateStageMusicMuted)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export const updateStageMusicMuted = function updateStageMusicMuted(muted) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj);
};
export const updateStageMusicShouldPlay = function updateStageMusicShouldPlay(play) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj);
};
