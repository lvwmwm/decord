// Module ID: 12088
// Function ID: 12089
// Name: StageMusicActionCreators
// Dependencies: [572, 2]
// Exports: updateStageMusicMuted, updateStageMusicShouldPlay

// Module 12088 (StageMusicActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/StageMusicActionCreators.tsx");

export function updateStageMusicMuted(muted) {
  const obj = DispatcherDefault;
  const obj2 = { type: "STAGE_MUSIC_MUTE", muted };
  obj.dispatch(obj2);
}
export function updateStageMusicShouldPlay(play) {
  const obj = DispatcherDefault;
  const obj2 = { type: "STAGE_MUSIC_PLAY", play };
  obj.dispatch(obj2);
}
