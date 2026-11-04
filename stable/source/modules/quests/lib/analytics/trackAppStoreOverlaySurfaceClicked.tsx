// Module ID: 14154
// Function ID: 14155
// Name: trackAppStoreOverlaySurfaceClicked
// Dependencies: [7824, 7833, 9605, 9608, 9640, 6745, 6749, 2]
// Exports: trackAppStoreOverlaySurfaceClickedForAdContent, trackAppStoreOverlaySurfaceClickedForQuest

// Module 14154 (trackAppStoreOverlaySurfaceClicked)
import QuestTypes from "QuestTypes" /* 6745 */;
import AdCreativeType from "AdCreativeType" /* 6749 */;
import AnalyticsActions from "AnalyticsActions" /* 7824 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7833 */;
import captureAdUserAction4 from "captureAdUserAction" /* 9605 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9608 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 9640 */;
import size from "module_2" /* 2 */;

function captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, arg1, arg2) {
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
let result = size.fileFinishedImporting("modules/quests/lib/analytics/trackAppStoreOverlaySurfaceClicked.tsx");

export const trackAppStoreOverlaySurfaceClickedForQuest = function trackAppStoreOverlaySurfaceClickedForQuest(arg0) {
  let EXPAND;
  let overlaySurface;
  let questId;
  let trackingCtx;
  ({ questId, trackingCtx, overlaySurface } = arg0);
  if (AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA === overlaySurface) {
    EXPAND = tmp(7833).QuestContentCTA.GAME_STORE_OPEN_GAME_LINK;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT === overlaySurface) {
    EXPAND = tmp(7833).QuestContentCTA.GAME_STORE_OPEN_REVIEWS;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE === overlaySurface) {
    EXPAND = tmp(7833).QuestContentCTA.EXPAND;
  }
  const tmpResult = AdAnalyticsInterfaceExperiment;
  if (tmpResult.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")) {
    ({ sourceQuestContent: obj3.sourceQuestContent, position: obj3.questContentPosition, impressionId: obj3.impressionId } = trackingCtx);
    const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    const obj4 = { adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: questId };
    captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, obj, obj4);
  } else {
    const obj7 = { questId, questContent: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, questContentCTA: EXPAND, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
    AnalyticsActions;
    ({ position: obj2.questContentPosition, impressionId: obj2.impressionId, sourceQuestContent: obj2.sourceQuestContent } = trackingCtx);
    const result = trackQuestContentClicked(obj7);
  }
};
export const trackAppStoreOverlaySurfaceClickedForAdContent = function trackAppStoreOverlaySurfaceClickedForAdContent(relatedQuestId) {
  let EXPAND;
  let adContentId;
  let adCreativeType;
  let overlaySurface;
  let trackingCtx;
  ({ adContentId, adCreativeType, trackingCtx, overlaySurface } = relatedQuestId);
  relatedQuestId = relatedQuestId.relatedQuestId;
  if (AnalyticsActions.AppStoreOverlaySurfaces.MAIN_CTA === overlaySurface) {
    EXPAND = tmp(7833).QuestContentCTA.GAME_STORE_OPEN_GAME_LINK;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.RATING_STAT === overlaySurface) {
    EXPAND = tmp(7833).QuestContentCTA.GAME_STORE_OPEN_REVIEWS;
  } else if (AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE === overlaySurface) {
    EXPAND = tmp(7833).QuestContentCTA.EXPAND;
  }
  const tmpResult = AdAnalyticsInterfaceExperiment;
  if (tmpResult.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "app_store_overlay_surface_click")) {
    ({ sourceQuestContent: obj3.sourceQuestContent, position: obj3.questContentPosition, impressionId: obj3.impressionId } = trackingCtx);
    const obj = { surfaceId: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, sourceQuestContent: null, questContentPosition: null, impressionId: null };
    const obj4 = { adCreativeType, adCreativeId: adContentId };
    captureAppStoreOverlaySurfaceClickForMigration(overlaySurface, obj, obj4);
  } else {
    const obj7 = { adContentId, relatedQuestId, adCreativeType, questContent: QuestTypes.QuestContent.CUSTOM_APP_STORE_OVERLAY, questContentCTA: EXPAND, questContentPosition: null, impressionId: null, sourceQuestContent: null };
    const trackAdContentClicked = AnalyticsActions.trackAdContentClicked;
    AnalyticsActions;
    ({ position: obj2.questContentPosition, impressionId: obj2.impressionId, sourceQuestContent: obj2.sourceQuestContent } = trackingCtx);
    const result = trackAdContentClicked(obj7);
  }
};
