// Module ID: 14553
// Function ID: 14554
// Name: useBountyVideoEndAppStoreOverlay
// Dependencies: [19, 5756, 21, 14554, 10687, 10711, 14555, 5761, 7141, 4837, 4840, 7131, 5763, 10720, 2]
// Exports: BountyVideoEndAppStoreProvider, canUseBountyVideoEndAppStoreOverlay, useBountyVideoEndAppStoreContext, useBountyVideoEndAppStoreOverlay

// Module 14553 (useBountyVideoEndAppStoreOverlay)
import Fragment from "Fragment" /* 21 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import QuestContent from "QuestContent" /* 5761 */;
import AnalyticsActions from "AnalyticsActions" /* 7131 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7141 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 10687 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 14554 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let appId, set, trackingCtx;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const jsx = Fragment.jsx;
const redux = react.createContext(null);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoEndAppStoreOverlay.tsx");

export const BountyVideoEndAppStoreProvider = function BountyVideoEndAppStoreProvider(value) {
  return <redux.Provider value={arg0.value}>{arg0.children}</redux.Provider>;
};
export const useBountyVideoEndAppStoreContext = function useBountyVideoEndAppStoreContext() {
  return react.useContext(redux);
};
export const canUseBountyVideoEndAppStoreOverlay = function canUseBountyVideoEndAppStoreOverlay(cta) {
  const obj = QuestCustomAppStoreOverlayUtils;
  if (obj.canOpenCustomAppStoreOverlayFromCta(cta.cta)) {
    const BountiesMobileQuestBarExperiment = tmp(10687).BountiesMobileQuestBarExperiment;
    const obj2 = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
    const config = BountiesMobileQuestBarExperiment.getConfig(obj2);
    const tmp5 = config.enabled && tmp6 === BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarCtrVariant.LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY;
    return tmp5;
  } else {
    return false;
  }
};
export const useBountyVideoEndAppStoreOverlay = function useBountyVideoEndAppStoreOverlay(bounty) {
  let items2;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const endMode = bounty.endMode;
  const onOverlayUnavailable = bounty.onOverlayUnavailable;
  const obj = bounty(sourceQuestContent[5]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const context = isActive.useContext(getQuestImpressionId);
  const ref = isActive.useRef(false);
  const ref2 = isActive.useRef(0);
  const items = [bounty.id];
  const effect = isActive.useEffect(() => {
    ref2.current = ref2.current + 1;
    ref.current = false;
  }, items);
  const items1 = [isActive];
  const effect1 = isActive.useEffect(() => {
    const tmp = isActive;
    if (!tmp) {
      ref2.current = ref2.current + 1;
      ref.current = false;
    }
  }, items1);
  let obj2 = {
    onVideoEndForAppStore: isActive.useCallback(() => {
      const tmp = bounty;
      const tmp2 = sourceQuestContent;
      if (endMode === bounty(sourceQuestContent[6]).BountyVideoEndMode.APP_STORE_LOOP) {
        const tmp3 = isActive;
        if (tmp3) {
          if (!ref.current) {
            if (null != context) {
              tmp4.current = true;
              const current = ref2.current;
              const tmpResult = tmp(tmp2[3]);
              const customAppStoreOverlayContent = tmpResult.fetchCustomAppStoreOverlayContent(current.cta);
              const nextPromise = customAppStoreOverlayContent.then((appId) => {
                let obj4;
                let obj5;
                let showVideoEndAppStoreOverlay;
                let user;
                let videoEndPeekTargetScale;
                if (current === ref.current) {
                  if (null != appId) {
                    const videoEndPeekScale = context.videoEndPeekScale;
                    appId = appId.appId;
                    ({ videoEndPeekTargetScale, showVideoEndAppStoreOverlay } = context);
                    ({ content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
                    set = videoEndPeekScale.set;
                    let obj2 = timing;
                    let result = set(obj2.withTiming(videoEndPeekTargetScale, timingPresets.timingSlow));
                    let obj3 = {
                      metadata: appId,
                      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                            trackingCtx = current(sourceQuestContent[11]);
                            const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
                            return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
                          },
                      onOverlaySurfaceClick(dependencyMap) {
                            trackingCtx = current(sourceQuestContent[11]);
                            const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface: dependencyMap };
                            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
                          },
                      onInstallPress(overlaySurface) {
                            trackingCtx = current(closure_2_1[11]);
                            let obj2 = { adContentId: appId.id, adCreativeType: current(closure_2_1[12]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                            const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
                            const obj3 = current(closure_2_1[13]);
                            const obj4 = {
                              trackOverlayEvent(event, timeSpentMs) {
                                trackingCtx = current(sourceQuestContent[11]);
                                const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[12]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: current(sourceQuestContent[11]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface };
                                return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
                              }
                            };
                            const result1 = obj3.setAppStoreOverlayOpen(obj4);
                          },
                      onCarouselScroll: obj4.createAppStoreOverlayCarouselScrollTracker(obj5, appId)
                    };
                    obj4 = AnalyticsActions;
                    obj5 = { adContentId: bounty.id };
                    let result1 = showVideoEndAppStoreOverlay(obj3);
                  } else {
                    onOverlayUnavailable();
                  }
                }
              });
              nextPromise.catch(() => {
                if (current === ref.current) {
                  onOverlayUnavailable();
                }
              });
            }
          }
        }
      }
    }, items2)
  };
  items2 = [context, bounty, endMode, getQuestImpressionId, isActive, onOverlayUnavailable, sourceQuestContent];
  return obj2;
};
