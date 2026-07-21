// Module ID: 5400
// Function ID: 46042
// Name: set
// Dependencies: [284214097]

// Module 5400 (set)
const obj = { VISIBLE: new Set([false, false]) };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildProfileVisibility.tsx");

export const GuildProfileVisibility = { NOT_SPECIFIED: 0, [0]: "NOT_SPECIFIED", PUBLIC: 1, [1]: "PUBLIC", RESTRICTED: 2, [2]: "RESTRICTED", PUBLIC_WITH_RECRUITMENT: 3, [3]: "PUBLIC_WITH_RECRUITMENT" };
export const GuildProfileVisibilitySets = obj;
