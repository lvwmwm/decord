// Module ID: 14898
// Function ID: 112241
// Name: voiceCategoryExpand
// Dependencies: []
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 14898 (voiceCategoryExpand)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { "Null": "5338a8beddc0d5825fd11d1d7cb010b7", "Null": "ko.messages.5338a8beddc0d5825fd11d1d7cb010b7.compiled.messages", "Null": "jsona", guildId };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { "Null": null, "Null": "21d9af173c2aa764d18866600cd204ee", "Null": "onboarding_v2_upsell", guildId };
  obj.dispatch(obj);
};
