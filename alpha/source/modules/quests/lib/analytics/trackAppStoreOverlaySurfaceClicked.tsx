// Module ID: 14360
// Function ID: 14361
// Name: trackAppStoreOverlaySurfaceClicked
// Dependencies: [7827, 9607, 9610, 7836, 6748, 6752, 2]
// Exports: trackAppStoreOverlaySurfaceClickedForAdContent, trackAppStoreOverlaySurfaceClickedForQuest

// Module 14360 (trackAppStoreOverlaySurfaceClicked)
import QuestTypes from "QuestTypes" /* 6748 */;
import AdCreativeType from "AdCreativeType" /* 6752 */;
import AnalyticsActions from "AnalyticsActions" /* 7827 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7836 */;
import captureAdUserAction4 from "captureAdUserAction" /* 9607 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9610 */;
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

export const trackAppStoreOverlaySurfaceClickedForQuest = function trackAppStoreOverlaySurfaceClickedForQuest(trackingCtx) {
  let overlaySurface;
  let questId;
  trackingCtx = trackingCtx.trackingCtx;
  ({ questId, overlaySurface } = trackingCtx);
  const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: trackingCtx.sourceQuestContent, questContentPosition: trackingCtx.position, impressionId: trackingCtx.impressionId };
  const obj2 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId };
  captureAppStoreOverlaySurfaceClick(overlaySurface, obj, obj2);
};
export const trackAppStoreOverlaySurfaceClickedForAdContent = function trackAppStoreOverlaySurfaceClickedForAdContent(trackingCtx) {
  let adContentId;
  let adCreativeType;
  let overlaySurface;
  trackingCtx = trackingCtx.trackingCtx;
  ({ adContentId, adCreativeType, overlaySurface } = trackingCtx);
  const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: trackingCtx.sourceQuestContent, questContentPosition: trackingCtx.position, impressionId: trackingCtx.impressionId };
  captureAppStoreOverlaySurfaceClick(overlaySurface, obj, { adCreativeType, adCreativeId: adContentId });
};
