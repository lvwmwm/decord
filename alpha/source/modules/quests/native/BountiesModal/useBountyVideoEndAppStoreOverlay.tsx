// Module ID: 16922
// Function ID: 16923
// Name: useBountyVideoEndAppStoreOverlay
// Dependencies: [19, 6781, 21, 16923, 9691, 9717, 16924, 6786, 7871, 7862, 6788, 14665, 14648, 2]
// Exports: BountyVideoEndAppStoreProvider, canUseBountyVideoEndAppStoreOverlay, useBountyVideoEndAppStoreContext, useBountyVideoEndAppStoreOverlay

// Module 16922 (useBountyVideoEndAppStoreOverlay)
import Fragment from "Fragment" /* 21 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import QuestContent from "QuestContent" /* 6786 */;
import AnalyticsActions from "AnalyticsActions" /* 7862 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import BountiesMobileQuestBarExperiment2 from "BountiesMobileQuestBarExperiment" /* 9691 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 16923 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let appId, trackingCtx;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const jsx = Fragment.jsx;
const redux = react.createContext(null);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyVideoEndAppStoreOverlay.tsx");

export function BountyVideoEndAppStoreProvider(value) {
  return <redux.Provider value={arg0.value}>{arg0.children}</redux.Provider>;
}
export function useBountyVideoEndAppStoreContext() {
  return react.useContext(redux);
}
export function canUseBountyVideoEndAppStoreOverlay(cta) {
  const obj = QuestCustomAppStoreOverlayUtils;
  if (obj.canOpenCustomAppStoreOverlayFromCta(cta.cta)) {
    const BountiesMobileQuestBarExperiment = tmp(9691).BountiesMobileQuestBarExperiment;
    const obj2 = { location: QuestsExperimentLocations.VIDEO_MODAL_MOBILE };
    const config = BountiesMobileQuestBarExperiment.getConfig(obj2);
    const tmp5 = config.enabled && tmp6 === BountiesMobileQuestBarExperiment2.BountiesMobileQuestBarCtrVariant.LOOP_SQUEEZED_BACK_APP_STORE_OVERLAY;
    return tmp5;
  } else {
    return false;
  }
}
export function useBountyVideoEndAppStoreOverlay(bounty) {
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
                let obj3;
                let obj4;
                let user;
                if (current === ref.current) {
                  if (null != appId) {
                    appId = appId.appId;
                    const showVideoEndAppStoreOverlay = context.showVideoEndAppStoreOverlay;
                    ({ content: QuestContent.QuestContent.VIDEO_MODAL_END_CARD, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
                    let obj2 = {
                      metadata: appId,
                      trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
                            trackingCtx = current(sourceQuestContent[9]);
                            const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[10]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
                            return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
                          },
                      onOverlaySurfaceClick(dependencyMap) {
                            trackingCtx = current(sourceQuestContent[11]);
                            const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[10]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface: dependencyMap };
                            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
                          },
                      onInstallPress(overlaySurface) {
                            trackingCtx = current(closure_2_1[11]);
                            let obj2 = { adContentId: appId.id, adCreativeType: current(closure_2_1[10]).AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
                            const result = trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
                            const obj3 = current(closure_2_1[12]);
                            const obj4 = {
                              trackOverlayEvent(event, timeSpentMs) {
                                trackingCtx = current(sourceQuestContent[9]);
                                const obj2 = { adContentId: user.id, adCreativeType: current(sourceQuestContent[10]).AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId: appId, overlayVariant: current(sourceQuestContent[9]).AppStoreOverlayVariant.CUSTOM, event, timeSpentMs, overlaySurface };
                                return trackingCtx.trackAdContentAppStoreOverlayEvent(obj2);
                              }
                            };
                            const result1 = obj3.setAppStoreOverlayOpen(obj4);
                          },
                      onCarouselScroll: obj3.createAppStoreOverlayCarouselScrollTracker(obj4, appId)
                    };
                    obj3 = AnalyticsActions;
                    obj4 = { adContentId: bounty.id };
                    let result = showVideoEndAppStoreOverlay(obj2);
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
}
