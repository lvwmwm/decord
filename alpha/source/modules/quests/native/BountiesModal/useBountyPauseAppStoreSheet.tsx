// Module ID: 16925
// Function ID: 16926
// Name: useBountyPauseAppStoreSheet
// Dependencies: [19, 6781, 1072, 9691, 9717, 16923, 1108, 6786, 7871, 9719, 7862, 6788, 14665, 16920, 2]
// Exports: useBountyPauseAppStoreSheet

// Module 16925 (useBountyPauseAppStoreSheet)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import AnalyticsActions from "AnalyticsActions" /* 7862 */;
import trackAppStoreOverlaySurfaceClicked from "trackAppStoreOverlaySurfaceClicked" /* 14665 */;
import AdsVideoTypes from "AdsVideoTypes" /* 16920 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 16923 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const ComponentActions = Constants.ComponentActions;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx");

export function useBountyPauseAppStoreSheet(bounty) {
  let items4;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  let c5;
  let ref;
  let ref2;
  let callback;
  let callback1;
  let tmp = bounty;
  let tmp2 = sourceQuestContent;
  let obj = bounty(sourceQuestContent[4]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const BountiesMobileQuestBarExperiment = bounty(sourceQuestContent[3]).BountiesMobileQuestBarExperiment;
  let obj2 = { location: playerRef.VIDEO_MODAL_MOBILE };
  const config = BountiesMobileQuestBarExperiment.getConfig(obj2);
  const ctrVariant = config.ctrVariant;
  let tmp5 = null;
  if (config.enabled) {
    if (ctrVariant === tmp(tmp2[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
      tmp5 = ctrVariant;
    } else {
      tmp5 = null;
    }
  }
  c5 = tmp5;
  ref = isActive.useRef(false);
  ref2 = isActive.useRef(null);
  const items = [bounty.id, isActive];
  const effect = isActive.useEffect(() => {
    ref.current = false;
  }, items);
  const items1 = [bounty.cta, tmp5, isActive];
  const effect1 = isActive.useEffect(() => {
    const tmp = isActive && null != c5;
    if (tmp) {
      const obj = QuestCustomAppStoreOverlayUtils;
      const result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
    }
  }, items1);
  callback = isActive.useCallback(() => {
    if (null != ref2.current) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED, ref2.current);
      ref2.current = null;
    }
  }, []);
  const items2 = [callback];
  const effect2 = isActive.useEffect(() => () => callback(), items2);
  const items3 = [bounty, getQuestImpressionId, playerRef, sourceQuestContent, callback, tmp5];
  callback1 = isActive.useCallback(() => {
    let tmpResult;
    let trackingCtx = { content: bounty(sourceQuestContent[7]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: bounty(sourceQuestContent[8]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const tmp = bounty;
    const tmp2 = sourceQuestContent;
    let obj2 = bounty(sourceQuestContent[9]);
    const directAppStoreLinkFromCta = obj2.getDirectAppStoreLinkFromCta(trackingCtx.cta);
    let tmp5 = bounty(sourceQuestContent[9]);
    let url = directAppStoreLinkFromCta;
    const openAppStoreOrUrl = tmp5.openAppStoreOrUrl;
    if (directAppStoreLinkFromCta == null) {
      url = tmp3.cta.url;
    }
    const obj3 = {
      link: url,
      directLink: directAppStoreLinkFromCta,
      inlineStoreParams: tmpResult.getInlineStoreParamsFromCta(trackingCtx.cta),
      allowExternalOpen: false,
      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
        trackingCtx = AnalyticsActions;
        const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
        return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
      },
      trackOverlaySurfaceClick(overlaySurface) {
        trackingCtx = trackAppStoreOverlaySurfaceClicked;
        const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
        return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
      },
      appStoreOverlayCarouselScrollContext: { adContentId: trackingCtx.id }
    };
    tmpResult = tmp(tmp2[9]);
    const openAppStoreOrUrlResult = openAppStoreOrUrl(obj3);
    return openAppStoreOrUrlResult.then((result) => {
      if (false === result) {
        return false;
      } else {
        let current = ref.current;
        if (current != null) {
          current.pause();
        }
        function handleFinished() {
          closure_1_8();
          const tmp5 = closure_1_5 !== obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.EVERY_PAUSE_APP_STORE_OVERLAY && closure_1_5 !== obj(sourceQuestContent[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY;
          if (!tmp5) {
            const current = ref.current;
            if (current != null) {
              current.play();
            }
          }
        }
        let tmp5 = callback();
        const ComponentDispatch = bounty(sourceQuestContent[6]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED, handleFinished);
        ref2.current = handleFinished;
        return true;
      }
    });
  }, items3);
  let obj3 = {
    handleVideoPausedForAppStore: isActive.useCallback((arg0) => {
      let tmp = isActive;
      if (tmp) {
        const tmp3 = require;
        if (arg0 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
          if (null != c5) {
            if (tmp5 === tmp3(9691).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
              if (!ref.current) {
                tmp9.current = true;
                const promise = callback1();
                promise.then((result) => {
                  const tmp = result;
                  if (!tmp) {
                    ref.current = false;
                  }
                });
              }
            } else {
              callback1();
            }
          }
        }
      }
    }, items4)
  };
  items4 = [tmp5, isActive, callback1];
  return obj3;
}
