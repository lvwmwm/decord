// Module ID: 6843
// Function ID: 6844
// Name: QuestTypes
// Dependencies: [6844, 2, 6845, 6846]

// Module 6843 (QuestTypes)
import QuestRewardCodePlatforms from "QuestRewardCodePlatforms" /* 6844 */;
import QuestContent from "QuestContent" /* 6845 */;
import AdPlacement from "AdPlacement" /* 6846 */;
import size from "module_2" /* 2 */;

const values = Object.values(QuestRewardCodePlatforms.QuestRewardCodePlatforms);
const set = new Set(values.filter((item) => typeof item === "number"));
const result = size.fileFinishedImporting("modules/quests/QuestTypes.tsx");
const QuestRewardCodePlatforms_export = QuestRewardCodePlatforms.QuestRewardCodePlatforms;
const QuestContent_export = QuestContent.QuestContent;
const AdPlacement_export = AdPlacement.AdPlacement;

export const QuestsVisibleMessagesChangedSource = { FIRST_LAYOUT: "FIRST_LAYOUT", SCROLL: "SCROLL", VISIBILITY_CHANGED: "VISIBILITY_CHANGED" };
export const QUEST_REWARD_CODE_PLATFORMS_SET = set;
export { QuestRewardCodePlatforms_export as QuestRewardCodePlatforms };
export { QuestContent_export as QuestContent };
export { AdPlacement_export as AdPlacement };
export const QuestConsoleStartErrorLocal = { GENERIC: "generic", RATE_LIMITED: "rate_limited" };
export const TaskPlatformScreen = { DESKTOP: "desktop", CONSOLE: "console", SELECT: "select" };
export const VideoPauseReason = { PAUSE_BUTTON: "PAUSE_BUTTON", LOST_FOCUS: "LOST_FOCUS", MODAL_CLOSED: "MODAL_CLOSED", ANOTHER_MODAL_OPENED: "ANOTHER_MODAL_OPENED", PICTURE_IN_PICTURE: "PICTURE_IN_PICTURE" };
