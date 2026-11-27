// Module ID: 16683
// Function ID: 16684
// Name: PlayableAnalytics
// Dependencies: [8383, 6878, 6876, 2]
// Exports: trackPlayableEvent

// Module 16683 (PlayableAnalytics)
import QuestContent from "QuestContent" /* 6876 */;
import AdCreativeType from "AdCreativeType" /* 6878 */;
import AnalyticsActions from "AnalyticsActions" /* 8383 */;
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
