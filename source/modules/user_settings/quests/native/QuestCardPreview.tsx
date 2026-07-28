// Module ID: 14173
// Function ID: 108811
// Name: QuestCardPreview
// Dependencies: [33, 10946, 5014, 14174, 1212, 14095, 689, 2]
// Exports: QuestCardPreview

// Module 14173 (QuestCardPreview)
import { jsx } from "jsxProd";

const result = require("QuestsVisibleMessagesChangedSource").fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  let obj = {
    questOrQuests: quest,
    questContent: quest(5014).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5014).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      let obj = {};
      const intl = quest(outer1_2[4]).intl;
      obj.title = intl.string(quest(outer1_2[4]).t.BDUDau);
      obj = { quest, containerPadding: outer1_1(outer1_2[6]).space.PX_16, sourceQuestContent: quest(outer1_2[2]).QuestContent.INTERNAL_PREVIEW_TOOL };
      obj.children = outer1_3(quest(outer1_2[5]).QuestCard, obj);
      return outer1_3(outer1_1(outer1_2[3]), obj);
    }
  };
  return jsx(quest(10946).QuestContentImpressionTrackerNative, {
    questOrQuests: quest,
    questContent: quest(5014).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: quest(5014).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      let obj = {};
      const intl = quest(outer1_2[4]).intl;
      obj.title = intl.string(quest(outer1_2[4]).t.BDUDau);
      obj = { quest, containerPadding: outer1_1(outer1_2[6]).space.PX_16, sourceQuestContent: quest(outer1_2[2]).QuestContent.INTERNAL_PREVIEW_TOOL };
      obj.children = outer1_3(quest(outer1_2[5]).QuestCard, obj);
      return outer1_3(outer1_1(outer1_2[3]), obj);
    }
  });
};
