// Module ID: 16348
// Function ID: 16349
// Name: PlayableAnalytics
// Dependencies: [8301, 6446, 6444, 2]
// Exports: trackPlayableEvent

// Module 16348 (PlayableAnalytics)
import QuestContent from "QuestContent" /* 6444 */;
import AdCreativeType from "AdCreativeType" /* 6446 */;
import AnalyticsActions from "AnalyticsActions" /* 8301 */;
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
