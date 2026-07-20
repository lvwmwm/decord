// Module ID: 14891
// Function ID: 112217
// Name: voiceCategoryExpand
// Dependencies: []
// Exports: voiceCategoryCollapse, voiceCategoryExpand

// Module 14891 (voiceCategoryExpand)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { useIsPaymentsBlocked: "c8f640d4f21a2ef043e28b84755f0914", ONE_DAY: "es-ES.messages.c8f640d4f21a2ef043e28b84755f0914.compiled.messages", marginEnd: "jsona", guildId };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  let obj = importDefault(dependencyMap[0]);
  obj = { guildId };
  obj.dispatch(obj);
};
