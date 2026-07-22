// Module ID: 4976
// Function ID: 42947
// Name: QuestsVisibleMessagesChangedSource
// Dependencies: []

// Module 4976 (QuestsVisibleMessagesChangedSource)
const values = Object.values(require(dependencyMap[0]).QuestRewardCodePlatforms);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/quests/QuestTypes.tsx");

export const QuestsVisibleMessagesChangedSource = { FIRST_LAYOUT: "FIRST_LAYOUT", SCROLL: "SCROLL", VISIBILITY_CHANGED: "VISIBILITY_CHANGED" };
export const QUEST_REWARD_CODE_PLATFORMS_SET = new Set(values.filter((arg0) => "number" === typeof arg0));
export const QuestRewardCodePlatforms = require(dependencyMap[0]).QuestRewardCodePlatforms;
export const QuestContent = require(dependencyMap[2]).QuestContent;
export const AdPlacement = require(dependencyMap[3]).AdPlacement;
export const QuestConsoleStartErrorLocal = { GENERIC: "generic", RATE_LIMITED: "rate_limited" };
export const TaskPlatformScreen = { DESKTOP: "desktop", CONSOLE: "console", SELECT: "select" };
export const VideoPauseReason = { PAUSE_BUTTON: "PAUSE_BUTTON", LOST_FOCUS: "LOST_FOCUS", MODAL_CLOSED: "MODAL_CLOSED", ANOTHER_MODAL_OPENED: "ANOTHER_MODAL_OPENED", PICTURE_IN_PICTURE: "PICTURE_IN_PICTURE" };
