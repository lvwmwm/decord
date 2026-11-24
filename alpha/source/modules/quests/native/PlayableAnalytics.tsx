// Module ID: 16504
// Function ID: 16505
// Name: PlayableAnalytics
// Dependencies: [8241, 6752, 6750, 2]
// Exports: trackPlayableEvent

// Module 16504 (PlayableAnalytics)
import QuestContent from "QuestContent" /* 6750 */;
import AdCreativeType from "AdCreativeType" /* 6752 */;
import AnalyticsActions from "AnalyticsActions" /* 8241 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/PlayableAnalytics.tsx");

export function trackPlayableEvent(id, impressionId, arg2) {
  let event;
  let obj2;
  let properties;
  ({ event, properties } = arg2);
  const tmp = AnalyticsActions;
  const trackAdContentEvent = tmp.trackAdContentEvent;
  const obj = { adContentId: id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, sourceQuestContent: QuestContent.QuestContent.QUEST_BAR_MOBILE, event, properties: obj2 };
  obj2 = { impression_id: impressionId };
  const merged = Object.assign(properties);
  trackAdContentEvent(obj);
}
