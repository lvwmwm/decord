// Module ID: 15296
// Function ID: 15297
// Name: useBountyPauseAppStoreSheet
// Dependencies: [19, 5695, 1078, 10604, 558, 568, 11646, 15294, 1114, 5700, 8001, 11656, 7991, 5702, 15291, 2]

// Module 15296 (useBountyPauseAppStoreSheet)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1114 */;
import AdCreativeType from "AdCreativeType" /* 5702 */;
import AnalyticsActions from "AnalyticsActions" /* 7991 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15291 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 15294 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestsExperimentLocations = fn(5695).QuestsExperimentLocations;
const ComponentActions = fn(1078).ComponentActions;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx");

export const useBountyPauseAppStoreSheet = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  const cResult = bounty(sourceQuestContent[5]).c(23);
  bounty = bounty.bounty;
  sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  let obj = bounty(sourceQuestContent[5]);
  const getQuestImpressionId = bounty(sourceQuestContent[6]).useGetQuestImpressionId();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const BountiesMobileQuestBarExperiment = tmp(tmp2[3]).BountiesMobileQuestBarExperiment;
    let obj3 = { location: playerRef.VIDEO_MODAL_MOBILE };
    const config = BountiesMobileQuestBarExperiment.getConfig(obj3);
    const ctrVariant = config.ctrVariant;
    let tmp8 = null;
    if (config.enabled) {
      if (ctrVariant === tmp(tmp2[3]).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
        tmp8 = ctrVariant;
      } else {
        tmp8 = null;
      }
    }
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  isActive.useRef(false);
  isActive.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        closure_6.current = false;
        return;
      }
    }
    cResult[1] = A;
    const tmp9 = A;
  } else {
    class A {
      constructor() {
        closure_6.current = false;
        return;
      }
    }
  }
  if (cResult[2] === bounty.id) {
    class A {
      constructor() {
        closure_6.current = false;
        return;
      }
    }
    const effect = obj4.useEffect(tmp9, items2);
    if (cResult[5] === bounty.cta) {
      class A {
        constructor() {
          closure_6.current = false;
          return;
        }
      }
      const effect1 = obj4.useEffect(tmp11, tmp12);
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            tmp = closure_7;
            if (null != closure_7.current) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              ComponentDispatch = closure_0(closure_1[8]).ComponentDispatch;
              tmp4 = ComponentActions;
              unsubscribeResult = ComponentDispatch.unsubscribe(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED, tmp.current);
              tmp.current = null;
            }
            return;
          }
        }
        cResult[9] = O;
      } else {
        class O {
          constructor() {
            tmp = closure_7;
            if (null != closure_7.current) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              ComponentDispatch = closure_0(closure_1[8]).ComponentDispatch;
              tmp4 = ComponentActions;
              unsubscribeResult = ComponentDispatch.unsubscribe(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED, tmp.current);
              tmp.current = null;
            }
            return;
          }
        }
      }
      closure_8 = tmp14;
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return () => closure_1_8();
          }
        }
        const items = [tmp14];
        cResult[10] = T;
        cResult[11] = items;
        let tmp16 = items;
        const tmp15 = T;
      } else {
        class T {
          constructor() {
            return () => closure_1_8();
          }
        }
        tmp16 = cResult[11];
      }
      const effect2 = obj4.useEffect(tmp15, tmp16);
      if (cResult[12] === bounty.cta) {
        class T {
          constructor() {
            return () => closure_1_8();
          }
        }
      }
      class R {
        constructor() {
          obj = { content: bounty(sourceQuestContent[9]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: bounty(sourceQuestContent[10]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_4(), sourceQuestContent };
          tmp = bounty;
          tmp2 = sourceQuestContent;
          closure_0 = obj;
          obj2 = bounty(sourceQuestContent[11]);
          tmp3 = closure_0;
          directAppStoreLinkFromCta = obj2.getDirectAppStoreLinkFromCta(closure_0.cta);
          obj3 = bounty(sourceQuestContent[11]);
          url = directAppStoreLinkFromCta;
          if (directAppStoreLinkFromCta == null) {
            url = tmp3.cta.url;
          }
          obj1 = { link: url, directLink: directAppStoreLinkFromCta, inlineStoreParams: null, allowExternalOpen: false, trackOverlayEvent: null, trackOverlaySurfaceClick: null };
          tmpResult = tmp(tmp2[11]);
          obj1.inlineStoreParams = tmpResult.getInlineStoreParamsFromCta(tmp3.cta);
          obj1.trackOverlayEvent = function trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
            trackingCtx = AnalyticsActions;
            return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
          };
          obj1.trackOverlaySurfaceClick = function trackOverlaySurfaceClick(overlaySurface) {
            trackingCtx = AnalyticsActions;
            return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
          };
          openAppStoreOrUrlResult = obj3.openAppStoreOrUrl(obj1);
          return openAppStoreOrUrlResult.then((result) => {
            if (result) {
              const current = ref.current;
              if (current != null) {
                current.pause();
              }
              closure_1_8();
              function handleFinished() { ... }
              const ComponentDispatch = bounty(sourceQuestContent[8]).ComponentDispatch;
              const subscription = ComponentDispatch.subscribe(getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED, handleFinished);
              ref2.current = handleFinished;
              return true;
            } else {
              return false;
            }
          });
        }
      }
      cResult[12] = bounty.cta;
      cResult[13] = bounty.id;
      cResult[14] = getQuestImpressionId;
      cResult[15] = playerRef;
      cResult[16] = sourceQuestContent;
      cResult[17] = R;
    }
    const fn = function _() {
      let tmp = isActive;
      if (isActive) {
        tmp = null != first;
      }
      if (tmp) {
        const result = QuestCustomAppStoreOverlayUtils.prefetchCustomAppStoreOverlayContent(bounty.cta);
      }
    };
    const items1 = [bounty.cta, first, isActive];
    cResult[5] = bounty.cta;
    cResult[7] = fn;
    cResult[8] = items1;
    tmp11 = fn;
    tmp12 = items1;
  }
  items2 = [bounty.id, isActive];
  cResult[2] = bounty.id;
  cResult[3] = isActive;
  cResult[4] = items2;
}) : ((bounty) => {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  c5 = undefined;
  let callback;
  let callback1;
  const getQuestImpressionId = bounty(sourceQuestContent[6]).useGetQuestImpressionId();
  const BountiesMobileQuestBarExperiment = bounty(sourceQuestContent[3]).BountiesMobileQuestBarExperiment;
  const config = BountiesMobileQuestBarExperiment.getConfig({ location: playerRef.VIDEO_MODAL_MOBILE });
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
  isActive.useRef(false);
  isActive.useRef(null);
  const items = [bounty.id, isActive];
  const effect = isActive.useEffect(() => {
    closure_6.current = false;
  }, items);
  const items1 = [bounty.cta, tmp5, isActive];
  const effect1 = isActive.useEffect(() => {
    let tmp = isActive;
    if (isActive) {
      tmp = null != c5;
    }
    if (tmp) {
      const result = QuestCustomAppStoreOverlayUtils.prefetchCustomAppStoreOverlayContent(bounty.cta);
    }
  }, items1);
  callback = isActive.useCallback(() => {
    if (null != ref2.current) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.QUEST_APP_STORE_OVERLAY_FINISHED, tmp.current);
      tmp.current = null;
    }
  }, []);
  const items2 = [callback];
  const effect2 = isActive.useEffect(() => () => callback(), items2);
  const items3 = [bounty, getQuestImpressionId, playerRef, sourceQuestContent, callback];
  callback1 = isActive.useCallback(() => {
    let trackingCtx = { content: bounty(sourceQuestContent[9]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: bounty(sourceQuestContent[10]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const directAppStoreLinkFromCta = bounty(sourceQuestContent[11]).getDirectAppStoreLinkFromCta(trackingCtx.cta);
    const obj2 = bounty(sourceQuestContent[11]);
    const tmp = bounty;
    const tmp2 = sourceQuestContent;
    let url = directAppStoreLinkFromCta;
    if (directAppStoreLinkFromCta == null) {
      url = tmp3.cta.url;
    }
    const obj4 = { link: url, directLink: directAppStoreLinkFromCta, inlineStoreParams: null, allowExternalOpen: false, trackOverlayEvent: null, trackOverlaySurfaceClick: null };
    const obj3 = bounty(sourceQuestContent[11]);
    obj4.inlineStoreParams = tmp(tmp2[11]).getInlineStoreParamsFromCta(trackingCtx.cta);
    obj4.trackOverlayEvent = function trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      trackingCtx = AnalyticsActions;
      return trackingCtx.trackAdContentAppStoreOverlayEvent({ adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface });
    };
    obj4.trackOverlaySurfaceClick = function trackOverlaySurfaceClick(overlaySurface) {
      trackingCtx = AnalyticsActions;
      return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent({ adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, overlaySurface });
    };
    const tmpResult = tmp(tmp2[11]);
    return obj3.openAppStoreOrUrl(obj4).then((result) => {
      if (result) {
        const current = ref.current;
        if (current != null) {
          current.pause();
        }
        function handleFinished() {
          closure_1_8();
        }
        callback();
        const ComponentDispatch = bounty(sourceQuestContent[8]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(getQuestImpressionId.QUEST_APP_STORE_OVERLAY_FINISHED, handleFinished);
        ref2.current = handleFinished;
        return true;
      } else {
        return false;
      }
    });
  }, items3);
  let obj3 = { handleVideoPausedForAppStore: null };
  const items4 = [tmp5, isActive, callback1];
  obj3.handleVideoPausedForAppStore = isActive.useCallback((arg0) => {
    if (isActive) {
      if (arg0 === AdsVideoTypes.PlaybackTriggerSource.USER_INTERACTION) {
        if (null != c5) {
          if (tmp4 === tmp2(10604).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
            if (!ref.current) {
              tmp8.current = true;
              callback1().then((result) => {
                if (!result) {
                  ref.current = false;
                }
              });
            }
          } else {
            callback1();
          }
        }
      }
      tmp2 = require;
    }
  }, items4);
  return obj3;
});
