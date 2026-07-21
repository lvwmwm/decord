// Module ID: 13943
// Function ID: 105955
// Name: QuestCardPreview
// Dependencies: []
// Exports: QuestCardPreview

// Module 13943 (QuestCardPreview)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/user_settings/quests/native/QuestCardPreview.tsx");

export const QuestCardPreview = function QuestCardPreview(quest) {
  quest = quest.quest;
  const require = quest;
  const obj = {
    questOrQuests: quest,
    questContent: require(dependencyMap[2]).QuestContent.INTERNAL_PREVIEW_TOOL,
    sourceQuestContent: require(dependencyMap[2]).QuestContent.INTERNAL_PREVIEW_TOOL,
    trackGuildAndChannelMetadata: false,
    children() {
      let obj = {};
      const intl = quest(closure_2[4]).intl;
      obj.title = intl.string(quest(closure_2[4]).t.BDUDau);
      obj = { quest, containerPadding: callback(closure_2[6]).space.PX_16, sourceQuestContent: quest(closure_2[2]).QuestContent.INTERNAL_PREVIEW_TOOL };
      obj.children = callback2(quest(closure_2[5]).QuestCard, obj);
      return callback2(callback(closure_2[3]), obj);
    }
  };
  return jsx(require(dependencyMap[1]).QuestContentImpressionTrackerNative, obj);
};
