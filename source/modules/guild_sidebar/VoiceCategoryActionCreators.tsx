// Module ID: 14909
// Function ID: 112318
// Name: voiceCategoryExpand
// Dependencies: []
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 14909 (voiceCategoryExpand)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { alignItems: "3d29cd3c4119682699352e67ac4d7192", justifyContent: "fi.messages.3d29cd3c4119682699352e67ac4d7192.compiled.messages", getUserTrialOffer: "jsona", guildId };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { guildId };
  obj.dispatch(obj);
};
