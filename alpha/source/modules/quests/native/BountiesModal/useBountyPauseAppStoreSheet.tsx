// Module ID: 15215
// Function ID: 15216
// Name: useBountyPauseAppStoreSheet
// Dependencies: [19, 5979, 1085, 9154, 558, 576, 9174, 15213, 1121, 5984, 7409, 9176, 7400, 5986, 15210, 2]

// Module 15215 (useBountyPauseAppStoreSheet)
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import QuestConstants from "QuestConstants" /* 5979 */;
import AdCreativeType from "AdCreativeType" /* 5986 */;
import AnalyticsActions from "AnalyticsActions" /* 7400 */;
import AdsVideoTypes from "AdsVideoTypes" /* 15210 */;
import QuestCustomAppStoreOverlayUtils from "QuestCustomAppStoreOverlayUtils" /* 15213 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_0, obj1, tmp4, tmp6;

const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const ComponentActions = Constants.ComponentActions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBountyPauseAppStoreSheet(bounty) {
  let first;
  let items2;
  let sourceQuestContent;
  let tmp11;
  let tmp12;
  let tmp9;
  let tmp = bounty;
  let tmp2 = sourceQuestContent;
  let obj = bounty(sourceQuestContent[5]);
  const cResult = obj.c(23);
  bounty = bounty.bounty;
  sourceQuestContent = bounty.sourceQuestContent;
  const isActive = bounty.isActive;
  const playerRef = bounty.playerRef;
  let obj2 = bounty(sourceQuestContent[6]);
  const getQuestImpressionId = obj2.useGetQuestImpressionId();
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
    first = tmp8;
  } else {
    first = cResult[0];
  }
  const ref = isActive.useRef(false);
  const ref2 = isActive.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        closure_6.current = false;
        return;
      }
    }
    cResult[1] = C;
    tmp9 = C;
  } else {
    class C {
      constructor() {
        closure_6.current = false;
        return;
      }
    }
  }
  if (cResult[2] === bounty.id) {
    class C {
      constructor() {
        closure_6.current = false;
        return;
      }
    }
    const effect = obj4.useEffect(tmp9, items2);
    if (cResult[5] === bounty.cta) {
      let tmp18;
      let tmp17;
      class C {
        constructor() {
          closure_6.current = false;
          return;
        }
      }
      const effect1 = obj4.useEffect(tmp11, tmp12);
      const _Symbol = Symbol;
      class E {
        constructor() {
          tmp = isActive;
          if (tmp) {
            tmp2 = closure_5;
            tmp3 = null;
            tmp = null != closure_5;
          }
          if (tmp) {
            tmp4 = closure_0;
            tmp5 = closure_1;
            obj = closure_0(closure_1[7]);
            tmp6 = bounty;
            result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
          }
          return;
        }
      }
      if (tmp14 === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            closure_6.current = false;
            return;
          }
        }
        cResult[9] = tmp16;
        class E {
          constructor() {
            tmp = isActive;
            if (tmp) {
              tmp2 = closure_5;
              tmp3 = null;
              tmp = null != closure_5;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_1;
              obj = closure_0(closure_1[7]);
              tmp6 = bounty;
              result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
            }
            return;
          }
        }
      } else {
        class C {
          constructor() {
            closure_6.current = false;
            return;
          }
        }
      }
      let closure_8 = tmp15;
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return () => { /* body not rendered: F146224 */ };
          }
        }
        const items = [tmp15];
        class E {
          constructor() {
            tmp = isActive;
            if (tmp) {
              tmp2 = closure_5;
              tmp3 = null;
              tmp = null != closure_5;
            }
            if (tmp) {
              tmp4 = closure_0;
              tmp5 = closure_1;
              obj = closure_0(closure_1[7]);
              tmp6 = bounty;
              result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
            }
            return;
          }
        }
        cResult[10] = T;
        cResult[11] = items;
        tmp18 = items;
        tmp17 = T;
      } else {
        class T {
          constructor() {
            return () => { /* body not rendered: F146224 */ };
          }
        }
        tmp18 = cResult[11];
      }
      const effect2 = obj4.useEffect(tmp17, tmp18);
      if (cResult[12] === bounty.cta) {
        class T {
          constructor() {
            return () => { /* body not rendered: F146224 */ };
          }
        }
      }
      class I {
        constructor() {
          obj = { content: bounty(sourceQuestContent[9]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: bounty(sourceQuestContent[10]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_4(), sourceQuestContent };
          tmp = bounty;
          tmp2 = sourceQuestContent;
          closure_0 = obj;
          obj2 = bounty(sourceQuestContent[11]);
          tmp3 = closure_0;
          directAppStoreLinkFromCta = obj2.getDirectAppStoreLinkFromCta(closure_0.cta);
          tmp5 = bounty(sourceQuestContent[11]);
          url = directAppStoreLinkFromCta;
          openAppStoreOrUrl = tmp5.openAppStoreOrUrl;
          if (directAppStoreLinkFromCta == null) {
            url = tmp3.cta.url;
          }
          obj1 = { link: url, directLink: directAppStoreLinkFromCta, inlineStoreParams: null, allowExternalOpen: false, trackOverlayEvent: null, trackOverlaySurfaceClick: null, appStoreOverlayCarouselScrollContext: null };
          tmpResult = tmp(tmp2[11]);
          obj1.inlineStoreParams = tmpResult.getInlineStoreParamsFromCta(tmp3.cta);
          obj1.trackOverlayEvent = function trackOverlayEvent() { /* body not rendered: F146225 */ };
          obj1.trackOverlaySurfaceClick = function trackOverlaySurfaceClick() { /* body not rendered: F146226 */ };
          obj1.appStoreOverlayCarouselScrollContext = { adContentId: tmp3.id };
          openAppStoreOrUrlResult = openAppStoreOrUrl(obj1);
          return openAppStoreOrUrlResult.then(() => { /* body not rendered: F146227 */ });
        }
      }
      cResult[12] = bounty.cta;
      cResult[13] = bounty.id;
      cResult[14] = getQuestImpressionId;
      cResult[15] = playerRef;
      cResult[16] = sourceQuestContent;
      cResult[17] = I;
    }
    class E {
      constructor() {
        tmp = isActive;
        if (tmp) {
          tmp2 = closure_5;
          tmp3 = null;
          tmp = null != closure_5;
        }
        if (tmp) {
          tmp4 = closure_0;
          tmp5 = closure_1;
          obj = closure_0(closure_1[7]);
          tmp6 = bounty;
          result = obj.prefetchCustomAppStoreOverlayContent(bounty.cta);
        }
        return;
      }
    }
    const items1 = [bounty.cta, first, isActive];
    cResult[5] = bounty.cta;
    cResult[7] = E;
    cResult[8] = items1;
    tmp11 = E;
    tmp12 = items1;
  }
  items2 = [bounty.id, isActive];
  cResult[2] = bounty.id;
  cResult[3] = isActive;
  cResult[4] = items2;
}) : (function useBountyPauseAppStoreSheet(bounty) {
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
  let obj = bounty(sourceQuestContent[6]);
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
    let trackingCtx = { content: bounty(sourceQuestContent[9]).QuestContent.VIDEO_MODAL_MOBILE, ctaContent: bounty(sourceQuestContent[10]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const tmp = bounty;
    const tmp2 = sourceQuestContent;
    let obj2 = bounty(sourceQuestContent[11]);
    const directAppStoreLinkFromCta = obj2.getDirectAppStoreLinkFromCta(trackingCtx.cta);
    let tmp5 = bounty(sourceQuestContent[11]);
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
        trackingCtx = AnalyticsActions;
        const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, trackingCtx, overlaySurface };
        return trackingCtx.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
      },
      appStoreOverlayCarouselScrollContext: { adContentId: trackingCtx.id }
    };
    tmpResult = tmp(tmp2[11]);
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
        const ComponentDispatch = bounty(sourceQuestContent[8]).ComponentDispatch;
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
            if (tmp5 === tmp3(9154).BountiesMobileQuestBarCtrVariant.FIRST_TAP_APP_STORE_OVERLAY) {
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
});
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountyPauseAppStoreSheet.tsx");

export const useBountyPauseAppStoreSheet = tmp2;
