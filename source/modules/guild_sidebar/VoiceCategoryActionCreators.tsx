// Module ID: 14901
// Function ID: 112275
// Name: voiceCategoryExpand
// Dependencies: [646840323, 899088385]
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 14901 (voiceCategoryExpand)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { useIsMobileGameCollectionExperimentEnabled: "3d29cd3c4119682699352e67ac4d7192", getCategoryRecord: "fi.messages.3d29cd3c4119682699352e67ac4d7192.compiled.messages", GoatIllocon: "jsona", guildId };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { guildId };
  obj.dispatch(obj);
};
