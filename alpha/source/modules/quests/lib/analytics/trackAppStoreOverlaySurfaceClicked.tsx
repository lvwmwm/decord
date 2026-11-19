// Module ID: 10548
// Function ID: 10549
// Name: trackAppStoreOverlaySurfaceClicked
// Dependencies: [8302, 9839, 9842, 8311, 6440, 6444, 2]
// Exports: trackAppStoreOverlaySurfaceClickedForAdContent, trackAppStoreOverlaySurfaceClickedForQuest

// Module 10548 (trackAppStoreOverlaySurfaceClicked)
import QuestTypes from "QuestTypes" /* 6440 */;
import AdCreativeType from "AdCreativeType" /* 6444 */;
import AnalyticsActions from "AnalyticsActions" /* 8302 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8311 */;
import captureAdUserAction4 from "captureAdUserAction" /* 9839 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9842 */;
import size from "module_2" /* 2 */;

function captureAppStoreOverlaySurfaceClick(overlaySurface, arg1, arg2) {
  if (AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA === overlaySurface) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_GAME_LINK };
    const captureAdUserAction2 = captureAdUserAction4.captureAdUserAction;
    captureAdUserAction4;
    const merged = Object.assign(arg2);
    const merged1 = Object.assign(arg1);
    captureAdUserAction2(obj2);
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT === overlaySurface) {
    const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, questContentCTA: AnalyticsTypes.QuestContentCTA.GAME_STORE_OPEN_REVIEWS };
    const captureAdUserAction = captureAdUserAction4.captureAdUserAction;
    captureAdUserAction4;
    const merged2 = Object.assign(arg2);
    const merged3 = Object.assign(arg1);
    captureAdUserAction(obj);
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE === overlaySurface) {
    const obj3 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, questContentCTA: AnalyticsTypes.QuestContentCTA.EXPAND };
    const captureAdUserAction3 = captureAdUserAction4.captureAdUserAction;
    captureAdUserAction4;
    const merged4 = Object.assign(arg2);
    const merged5 = Object.assign(arg1);
    captureAdUserAction3(obj3);
  }
}
const result = size.fileFinishedImporting("modules/quests/lib/analytics/trackAppStoreOverlaySurfaceClicked.tsx");

export function trackAppStoreOverlaySurfaceClickedForQuest(trackingCtx) {
  let overlaySurface;
  let questId;
  trackingCtx = trackingCtx.trackingCtx;
  ({ questId, overlaySurface } = trackingCtx);
  const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: trackingCtx.sourceQuestContent, questContentPosition: trackingCtx.position, impressionId: trackingCtx.impressionId };
  const obj2 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId };
  captureAppStoreOverlaySurfaceClick(overlaySurface, obj, obj2);
}
export function trackAppStoreOverlaySurfaceClickedForAdContent(trackingCtx) {
  let adContentId;
  let adCreativeType;
  let overlaySurface;
  trackingCtx = trackingCtx.trackingCtx;
  ({ adContentId, adCreativeType, overlaySurface } = trackingCtx);
  const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: trackingCtx.sourceQuestContent, questContentPosition: trackingCtx.position, impressionId: trackingCtx.impressionId };
  captureAppStoreOverlaySurfaceClick(overlaySurface, obj, { adCreativeType, adCreativeId: adContentId });
}
