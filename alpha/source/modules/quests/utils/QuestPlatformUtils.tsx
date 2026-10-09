// Module ID: 9176
// Function ID: 9177
// Name: QuestPlatformUtils
// Dependencies: [5979, 1085, 7406, 5987, 7421, 7410, 7420, 5986, 7400, 9177, 1126, 1382, 9165, 5052, 12895, 1121, 9140, 4759, 12896, 12898, 1279, 12910, 12912, 7409, 7087, 584, 2]
// Exports: getExpiredCredentialsHintMessage, getPlatformTypeForHintMessage, isQuestSupportedOnWeb, openAdGameLinkDirectly, openAdGameLinkDirectlyFromBountyEntireVideoTap, openAddConsoleConnectionModal, openAuthorizationConnectionModal, openConsoleConnectionSettings, openGameLinkDirectly, openSingleConsoleConnectionModal, supportedTaskPlatforms

// Module 9176 (QuestPlatformUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import openURLDefault from "openURL" /* 4759 */;
import BrowserManager from "BrowserManager" /* 5052 */;
import QuestConstants from "QuestConstants" /* 5979 */;
import AdCreativeType from "AdCreativeType" /* 5986 */;
import FirstPartyQuestTaskTypes from "FirstPartyQuestTaskTypes" /* 5987 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import AnalyticsActions from "AnalyticsActions" /* 7400 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7406 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7409 */;
import captureAdUserAction3 from "captureAdUserAction" /* 7410 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7420 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7421 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9177 */;
import AppStoreOverlayTelemetryManager from "AppStoreOverlayTelemetryManager" /* 12895 */;
import IosAttributionImpressionRegistry from "IosAttributionImpressionRegistry" /* 12912 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function supportedConsoles(quest) {
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  const items = [];
  for (const item10013 of keys) {
    let tmp2 = require;
    if (FirstPartyQuestTaskTypes.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === item10013) {
      let arr = items.push(metroRequire.XBOX);
    } else if (tmp2(5987).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === item10013) {
      let arr3 = items.push(metroRequire.PLAYSTATION);
    }
    continue;
  }
  return items;
}
function getDirectAppStoreLinkFromCta(cta) {
  let combined2;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    let combined1;
    const ios = cta.ios;
    let iosAppId1;
    if (ios != null) {
      iosAppId1 = ios.iosAppId;
    }
    if (null != iosAppId1) {
      let combined;
      const iosAppId = cta.ios.iosAppId;
      const iosAppId2 = cta.ios.iosAppId;
      if (iosAppId.startsWith("id")) {
        combined = iosAppId2;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "id" + iosAppId2;
      }
      const _HermesInternal2 = HermesInternal;
      combined1 = "https://apps.apple.com/app/" + combined;
    }
    return combined1;
  } else {
    PlatformUtils;
  }
  const tmpResult3 = PlatformUtils;
  if (tmpResult3.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    combined2 = null;
    if (null != androidAppId) {
      const _HermesInternal3 = HermesInternal;
      combined2 = "https://play.google.com/store/apps/details?id=" + cta.android.androidAppId;
    }
  } else {
    combined2 = null;
    PlatformUtils;
  }
  combined1 = combined2;
}
function getInlineStoreParamsFromCta(cta) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (android != null) {
      androidAppId = android.androidAppId;
    }
    if (null != androidAppId) {
      const _HermesInternal2 = HermesInternal;
      const obj2 = { url: "https://play.google.com/d?id=" + cta.android.androidAppId, os: "android", storeAppId: cta.android.androidAppId, appId: null };
      return obj2;
    }
  }
  const tmpResult = PlatformUtils;
  if (tmpResult.isIOS()) {
    const ios = cta.ios;
    let iosAppId1;
    if (ios != null) {
      iosAppId1 = ios.iosAppId;
    }
    if (null != iosAppId1) {
      let substr;
      const iosAppId = cta.ios.iosAppId;
      const iosAppId2 = cta.ios.iosAppId;
      if (iosAppId.startsWith("id")) {
        substr = iosAppId2.slice(2);
      } else {
        substr = iosAppId2;
      }
      const _HermesInternal = HermesInternal;
      const _parseInt = parseInt;
      const obj3 = { url: "https://apps.apple.com/app/id" + substr, os: "ios", storeAppId: substr, appId: parseInt(substr, 10) };
      return obj3;
    }
  }
  return null;
}
function openAppStoreOrUrl(link) {
  let closure_4;
  let closure_5;
  let getIosAttribution;
  let inlineStoreParams;
  link = link.link;
  ({ directLink: importDefault, inlineStoreParams } = link);
  ({ trackOverlayEvent: QuestTaskPlatform, trackOverlaySurfaceClick: closure_4, appStoreOverlayCarouselScrollContext: closure_5, getIosAttribution } = link);
  let flag = link.allowExternalOpen;
  if (flag === undefined) {
    flag = true;
  }
  let closure_9;
  function openNativeAppStoreOrUrl() {
    let appId;
    let closure_129_1;
    let closure_129_2;
    let url;
    let tmp = link;
    const AppStoreBottomSheetOverlayFeatureGate = link(inlineStoreParams[16]).AppStoreBottomSheetOverlayFeatureGate;
    if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != importDefault) {
        const tmp7 = inlineStoreParams;
        if (null != inlineStoreParams) {
          let catchPromise;
          function toResult(result) {
            return result && "native";
          }
          link = toResult;
          if (null != getIosAttribution) {
            const promise4 = getIosAttribution();
            let nextPromise = promise4.then((result) => {
              let appId;
              let closure_129_1;
              let closure_129_2;
              let url;
              let closure_0 = closure_1_3;
              const openPlayStoreInlineInstall = link(inlineStoreParams[13]).openPlayStoreInlineInstall;
              ({ clearAppStoreOverlayOpen: closure_129_1, setAppStoreOverlayOpen: closure_129_2 } = link(inlineStoreParams[14]));
              ({ url, appId } = closure_1_2);
              link(inlineStoreParams[14]);
              if (appId != null) {
                appId.toString();
              }
              result = openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, result);
              const nextPromise = result.then((result) => {
                const tmp = result;
                if (tmp) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE, arg1, closure_0(closure_2_2[8]).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  closure_1_2(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              });
              return nextPromise.catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
            });
            const nextPromise1 = nextPromise.then(toResult);
            catchPromise = nextPromise1.catch(() => {
              let appId;
              let closure_129_1;
              let closure_129_2;
              let url;
              let closure_0 = QuestTaskPlatform;
              const openPlayStoreInlineInstall = BrowserManager.openPlayStoreInlineInstall;
              let tmp = AppStoreOverlayTelemetryManager;
              ({ clearAppStoreOverlayOpen: closure_129_1, setAppStoreOverlayOpen: closure_129_2 } = tmp);
              ({ url, appId } = inlineStoreParams);
              let str;
              if (appId != null) {
                str = appId.toString();
              }
              const result = openPlayStoreInlineInstall(url, appId, (arg0) => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE, arg0);
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }, undefined);
              const nextPromise = result.then((result) => {
                const tmp = result;
                if (tmp) {
                  const obj = {
                    trackOverlayEvent(arg0, arg1) {
                        return closure_1_0(arg0, str, closure_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE, arg1, closure_0(closure_2_2[8]).AppStoreOverlaySurfaces.MAIN_CTA);
                      }
                  };
                  closure_1_2(obj);
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
                } else {
                  closure_1_1();
                  closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
                  const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                }
                return result;
              });
              const catchPromise = nextPromise.catch(() => {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
                return false;
              });
              return catchPromise.then(toResult);
            });
          } else {
            let closure_0 = closure_3;
            let openPlayStoreInlineInstall = tmp(tmp2[13]).openPlayStoreInlineInstall;
            ({ clearAppStoreOverlayOpen: closure_129_1, setAppStoreOverlayOpen: closure_129_2 } = tmp(inlineStoreParams[14]));
            ({ url, appId } = tmp7);
            let str;
            tmp(inlineStoreParams[14]);
            if (appId != null) {
              str = appId.toString();
            }
            let result = openPlayStoreInlineInstall(url, appId, (arg0) => {
              closure_1_1();
              closure_0(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE, arg0);
              const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
            }, undefined);
            const nextPromise2 = result.then((result) => {
              const tmp = result;
              if (tmp) {
                const obj = {
                  trackOverlayEvent(arg0, arg1) {
                      return closure_1_0(arg0, str, closure_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE, arg1, closure_0(closure_2_2[8]).AppStoreOverlaySurfaces.MAIN_CTA);
                    }
                };
                closure_1_2(obj);
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
              } else {
                closure_1_1();
                closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
                const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
                ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              }
              return result;
            });
            const catchPromise1 = nextPromise2.catch(() => {
              closure_1_1();
              closure_0(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str, closure_2_0(closure_2_2[8]).AppStoreOverlayVariant.NATIVE);
              const ComponentDispatch = closure_2_0(closure_2_2[15]).ComponentDispatch;
              ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
              return false;
            });
            catchPromise = catchPromise1.then(toResult);
          }
          return catchPromise;
        }
      }
    }
    const tmp8 = flag;
    if (tmp8) {
      require("openURL")(link);
    }
    return Promise.resolve(false);
  }
  if (null == getIosAttribution) {
    let tmp = link;
    const tmp2 = inlineStoreParams;
    const CustomAppStoreOverlayExperiment = link(inlineStoreParams[16]).CustomAppStoreOverlayExperiment;
    if (CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled) {
      if (null != inlineStoreParams) {
        const getAppStoreOverlayContent = tmp(tmp2[18]).getAppStoreOverlayContent;
        closure_9 = tmp(tmp2[19]).openAppStoreOverlayBottomSheet;
        const appStoreOverlayContent = getAppStoreOverlayContent(inlineStoreParams, link);
        let nextPromise = appStoreOverlayContent.then((result) => {
          let str;
          if (null == result) {
            str = openNativeAppStoreOrUrl();
          } else {
            let appStoreOverlayCarouselScrollTracker;
            const tmp = closure_9;
            if (null != constants) {
              const obj = AnalyticsActions;
              appStoreOverlayCarouselScrollTracker = obj.createAppStoreOverlayCarouselScrollTracker(tmp4, result);
            }
            tmp(result, QuestTaskPlatform, closure_4, appStoreOverlayCarouselScrollTracker);
            str = "custom";
          }
          return str;
        });
        return nextPromise.catch(() => openNativeAppStoreOrUrl());
      }
    }
  }
  return openNativeAppStoreOrUrl();
}
function openAdGameLinkDirectlyImpl(adContentId, impressionId, preferExternalAppStore) {
  let adCreativeType;
  let cta;
  let trackingCtx;
  adContentId = adContentId.adContentId;
  ({ adCreativeType: importDefault, cta } = adContentId);
  dependencyMap = impressionId;
  impressionId = undefined;
  let url = cta.url;
  preferExternalAppStore = preferExternalAppStore.preferExternalAppStore;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  const ComponentDispatch = adContentId(1121).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  impressionId = impressionId.impressionId;
  let iosAttributionClickFramework = null;
  if (null != impressionId) {
    const ios = cta.ios;
    let iosAppId;
    const getIosAttributionClickFramework = tmp2(12910).getIosAttributionClickFramework;
    adContentId(12910);
    if (ios != null) {
      iosAppId = ios.iosAppId;
    }
    iosAttributionClickFramework = getIosAttributionClickFramework(null != iosAppId, impressionId.sourceQuestContent, adContentId);
  }
  let fn;
  const tmp8 = getInlineStoreParamsFromCta(cta);
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => {
        const obj = IosAttributionImpressionRegistry;
        const obj2 = { impressionId };
        return obj.getStoreKitCredential(obj2);
      };
    }
  }
  function trackClick(result) {
    if ("custom" !== result) {
      const obj = AdAnalyticsInterfaceExperiment;
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, adCreativeType: importDefault, adCreativeId: adContentId, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
        const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        ({ ctaContent: obj4.questContentCTA, content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, position: obj4.questContentPosition, impressionId: obj4.impressionId } = trackingCtx);
        captureAdUserAction(obj2);
      } else {
        const obj8 = { adContentId, adCreativeType: importDefault, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null };
        ({ content: obj3.questContent, ctaContent: obj3.questContentCTA, position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = trackingCtx);
        const tmp5Result2 = AnalyticsActions;
        result = tmp5Result2.trackAdContentClicked(obj8);
      }
    } else {
      const obj9 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: importDefault, adCreativeId: adContentId, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CUSTOM_APP_STORE, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null };
      const captureAdUserAction2 = captureAdUserAction3.captureAdUserAction;
      captureAdUserAction3;
      ({ content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, position: obj5.questContentPosition, impressionId: obj5.impressionId } = trackingCtx);
      captureAdUserAction2(obj9);
    }
  }
  if (preferExternalAppStore) {
    if (null == fn) {
      openURLDefault(url);
      trackClick(false);
    }
  }
  let obj = {
    link: url,
    directLink: tmp,
    inlineStoreParams: tmp8,
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      const obj = AnalyticsActions;
      const obj2 = { adContentId, adCreativeType: importDefault, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
      return obj.trackAdContentAppStoreOverlayEvent(obj2);
    },
    trackOverlaySurfaceClick(overlaySurface) {
      const obj = AnalyticsActions;
      const obj2 = { adContentId, adCreativeType: importDefault, trackingCtx, overlaySurface };
      return obj.trackAppStoreOverlaySurfaceClickedForAdContent(obj2);
    },
    appStoreOverlayCarouselScrollContext: { adContentId },
    getIosAttribution: fn
  };
  const promise = openAppStoreOrUrl(obj);
  promise.then(trackClick);
}
const QuestTaskPlatform = QuestConstants.QuestTaskPlatform;
({ AnalyticEvents: closure_4, ComponentActions: hasOwnProperty, PlatformTypes: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(quest) {
  const obj = QuestTaskUtils;
  const obj2 = { quest };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj2);
  if (!hasPlayOnDesktopTaskResult) {
    const obj3 = { quest };
    const tmpResult = QuestTaskUtils;
    hasPlayOnDesktopTaskResult = tmpResult.hasStreamOnDesktopTask(obj3);
  }
  if (!hasPlayOnDesktopTaskResult) {
    const tmpResult3 = QuestTaskUtils;
    hasPlayOnDesktopTaskResult = tmpResult3.hasAchievementInGameTask(quest);
  }
  const items = [];
  const tmpResult4 = QuestTaskUtils;
  const hasSomeConsoleTasksResult = tmpResult4.hasSomeConsoleTasks(quest);
  if (hasPlayOnDesktopTaskResult) {
    items.push(QuestTaskPlatform.DESKTOP);
  }
  if (hasSomeConsoleTasksResult) {
    items.push(QuestTaskPlatform.CONSOLE);
  }
  return items;
};
export { supportedConsoles };
export const isQuestSupportedOnWeb = function isQuestSupportedOnWeb(userStatus) {
  const obj = QuestTaskUtils;
  let hasWatchVideoTasksResult = obj.hasWatchVideoTasks(userStatus);
  const obj2 = QuestTaskUtils;
  if (!hasWatchVideoTasksResult) {
    hasWatchVideoTasksResult = obj2.hasPlayActivityTask(userStatus);
  }
  return hasWatchVideoTasksResult;
};
export const PlayQuestPlatform = { DESKTOP: "desktop", XBOX: "xbox", PLAYSTATION: "playstation" };
export const getPlatformTypeForHintMessage = function getPlatformTypeForHintMessage(connected_account_type) {
  let PLAYSTATION;
  if ("xbox" === connected_account_type.connected_account_type) {
    PLAYSTATION = metroRequire.XBOX;
  } else {
    PLAYSTATION = metroRequire.PLAYSTATION;
  }
  return PLAYSTATION;
};
export const openAuthorizationConnectionModal = function openAuthorizationConnectionModal(quest, ctaContent) {
  quest = quest.quest;
  const platformType = quest.platformType;
  const obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null };
    const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
    captureAdUserAction3;
    ({ ctaContent: obj4.questContentCTA, content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, impressionId: obj4.impressionId } = ctaContent);
    captureAdUserAction(obj2);
  } else {
    const obj5 = { questId: quest.id, questContent: null, sourceQuestContent: null, questContentCTA: null, impressionId: null };
    ({ content: obj3.questContent, sourceQuestContent: obj3.sourceQuestContent, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId } = ctaContent);
    const tmpResult2 = AnalyticsActions;
    const result = tmpResult2.trackQuestContentClicked(obj5);
  }
  const obj8 = { platformType, location: ctaContent.ctaContent };
  authorizeConnectionDefault(obj8);
};
export const getExpiredCredentialsHintMessage = function getExpiredCredentialsHintMessage(connected_account_type) {
  let PLAYSTATION;
  let iDiwby;
  let tmp;
  if ("xbox" === connected_account_type.connected_account_type) {
    PLAYSTATION = metroRequire.XBOX;
    tmp = metroRequire;
  } else {
    tmp = metroRequire;
    PLAYSTATION = metroRequire.PLAYSTATION;
  }
  if (PLAYSTATION === tmp.XBOX) {
    iDiwby = intl.t["mytEv+"];
  } else {
    iDiwby = intl.t.iDiwby;
  }
  return iDiwby;
};
export { getDirectAppStoreLinkFromCta };
export { getInlineStoreParamsFromCta };
export { openAppStoreOrUrl };
export const openGameLinkDirectly = function openGameLinkDirectly(quest, impressionId) {
  let fn;
  let tmpResult;
  let tmpResult6;
  function urlHasClickId(directAppStoreLinkFromCta) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(directAppStoreLinkFromCta);
      const searchParams = uRL.searchParams;
      return searchParams.has("dclid");
    } catch (err) {
      return false;
    }
  }
  function setClickIdOnUrl(directAppStoreLinkFromCta, v4Result) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const str = new URL(directAppStoreLinkFromCta);
      const searchParams = str.searchParams;
      const result = searchParams.set("dclid", v4Result);
      return str.toString();
    } catch (err) {
      return directAppStoreLinkFromCta;
    }
  }
  _require = quest;
  const trackingCtx = impressionId;
  let obj = require("QuestCopyUtils");
  const ctaLink = obj.getCtaLink(quest.config);
  const ctaConfig = quest.config.ctaConfig;
  let tmp4 = null;
  if (null != ctaConfig) {
    const obj3 = { url: tmpResult.getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj2.android, ios: obj2.ios } = ctaConfig);
    tmpResult = require("QuestCopyUtils");
    tmp4 = getDirectAppStoreLinkFromCta(obj3);
  }
  let tmp6 = ctaLink;
  let tmp7 = ctaLink;
  if (null != tmp4) {
    tmp6 = tmp4;
    tmp7 = tmp4;
  }
  if (urlHasClickId(tmp7)) {
    const tmpResult4 = require("v1");
    const v4Result = tmpResult4.v4();
    dependencyMap = v4Result;
    tmp6 = setClickIdOnUrl(tmp7, v4Result);
  }
  impressionId = impressionId.impressionId;
  let iosAttributionClickFramework = null;
  if (null != impressionId) {
    const ctaConfig2 = quest.config.ctaConfig;
    let iosAppId;
    const getIosAttributionClickFramework = tmp(12910).getIosAttributionClickFramework;
    require("IosAttributionEligibility");
    if (ctaConfig2 != null) {
      const ios = ctaConfig2.ios;
      if (ios != null) {
        iosAppId = ios.iosAppId;
      }
    }
    iosAttributionClickFramework = getIosAttributionClickFramework(null != iosAppId, impressionId.sourceQuestContent, quest.id);
  }
  const ComponentDispatch = tmp(1121).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const ctaConfig3 = quest.config.ctaConfig;
  let tmp13 = null;
  if (null != ctaConfig3) {
    const obj4 = { url: tmpResult6.getCtaLink(quest.config), android: null, ios: null };
    ({ android: obj5.android, ios: obj5.ios } = ctaConfig3);
    tmpResult6 = require("QuestCopyUtils");
    tmp13 = getInlineStoreParamsFromCta(obj4);
  }
  const obj6 = {
    link: tmp6,
    directLink: tmp4,
    inlineStoreParams: tmp13,
    trackOverlayEvent(event, inlineStoreAppId, overlayVariant, timeSpentMs, overlaySurface) {
      const obj = AnalyticsActions;
      const obj2 = { quest, trackingCtx, inlineStoreAppId, overlayVariant, event, timeSpentMs, overlaySurface };
      return obj.trackAppStoreOverlayEvent(obj2);
    },
    trackOverlaySurfaceClick(overlaySurface) {
      const obj = AnalyticsActions;
      const obj2 = { questId: quest.id, trackingCtx, overlaySurface };
      return obj.trackAppStoreOverlaySurfaceClickedForQuest(obj2);
    },
    appStoreOverlayCarouselScrollContext: { questId: quest.id },
    getIosAttribution: fn
  };
  fn = undefined;
  const tmp15 = openAppStoreOrUrl;
  if (null != iosAttributionClickFramework) {
    if (null != impressionId) {
      fn = () => {
        const obj = IosAttributionImpressionRegistry;
        const obj2 = { impressionId };
        return obj.getStoreKitCredential(obj2);
      };
    }
  }
  const tmp15Result = tmp15(obj6);
  tmp15Result.then((result) => {
    if ("custom" !== result) {
      const obj = AdAnalyticsInterfaceExperiment;
      if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")) {
        const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null, clickId: dependencyMap };
        const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        ({ ctaContent: obj4.questContentCTA, content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, position: obj4.questContentPosition, impressionId: obj4.impressionId } = trackingCtx);
        captureAdUserAction(obj2);
      } else {
        const obj8 = { questId: quest.id, questContent: null, questContentCTA: null, questContentPosition: null, impressionId: null, sourceQuestContent: null, clickId: dependencyMap };
        ({ content: obj3.questContent, ctaContent: obj3.questContentCTA, position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = trackingCtx);
        const tmp5Result2 = AnalyticsActions;
        result = tmp5Result2.trackQuestContentClicked(obj8);
      }
    } else {
      const obj9 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_CUSTOM_APP_STORE, surfaceId: null, sourceQuestContent: null, questContentPosition: null, impressionId: null, clickId: dependencyMap };
      const captureAdUserAction2 = captureAdUserAction3.captureAdUserAction;
      captureAdUserAction3;
      ({ content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, position: obj5.questContentPosition, impressionId: obj5.impressionId } = trackingCtx);
      captureAdUserAction2(obj9);
    }
  });
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, impressionId) {
  const obj = { adContentId: adContentId.adContentId, adCreativeType: adContentId.adCreativeType, cta: adContentId.cta };
  openAdGameLinkDirectlyImpl(obj, impressionId, { preferExternalAppStore: false });
};
export const openAdGameLinkDirectlyFromBountyEntireVideoTap = function openAdGameLinkDirectlyFromBountyEntireVideoTap(adContentId, impressionId) {
  const obj = { adContentId: adContentId.adContentId, adCreativeType: adContentId.adCreativeType, cta: adContentId.cta };
  openAdGameLinkDirectlyImpl(obj, impressionId, { preferExternalAppStore: true });
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(quest, arg1) {
  quest = quest.quest;
  const obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null };
    const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
    captureAdUserAction3;
    ({ ctaContent: obj4.questContentCTA, content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, impressionId: obj4.impressionId, position: obj4.questContentPosition } = arg1);
    captureAdUserAction(obj2);
  } else {
    const obj5 = { questId: quest.id, questContent: null, questContentPosition: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    ({ content: obj3.questContent, position: obj3.questContentPosition, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const tmpResult2 = AnalyticsActions;
    const result = tmpResult2.trackQuestContentClicked(obj5);
  }
  const obj8 = { screen: metroImportDefault.CONNECTIONS };
  openUserSettings.openUserSettings(obj8);
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
  let obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
    captureAdUserAction3;
    ({ ctaContent: obj4.questContentCTA, content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, impressionId: obj4.impressionId, position: obj4.questContentPosition, rowIndex: obj4.questContentRowIndex } = arg1);
    captureAdUserAction(obj2);
  } else {
    const obj5 = { questId: quest.id, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    ({ content: obj3.questContent, position: obj3.questContentPosition, rowIndex: obj3.questContentRowIndex, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const tmpResult2 = AnalyticsActions;
    const result = tmpResult2.trackQuestContentClicked(obj5);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj6 = { platformType: arr.at(0) };
    const tmp14 = authorizeConnectionDefault;
    return tmp14(obj6);
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const obj10 = {
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete(platformType) {
          const obj = { platformType };
          return authorizeConnectionDefault(obj);
        },
      includedPlatformTypes: set,
      includeApplicationConnections: false
    };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    set = new Set(arr);
    dispatch(obj10);
  }
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
  const obj = AdAnalyticsInterfaceExperiment;
  if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")) {
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: null, surfaceId: null, sourceQuestContent: null, impressionId: null, questContentPosition: null, questContentRowIndex: null };
    const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
    captureAdUserAction3;
    ({ ctaContent: obj4.questContentCTA, content: obj4.surfaceId, sourceQuestContent: obj4.sourceQuestContent, impressionId: obj4.impressionId, position: obj4.questContentPosition, rowIndex: obj4.questContentRowIndex } = arg1);
    captureAdUserAction(obj2);
  } else {
    const obj5 = { questId: quest.id, questContent: null, questContentPosition: null, questContentRowIndex: null, questContentCTA: null, impressionId: null, sourceQuestContent: null };
    ({ content: obj3.questContent, position: obj3.questContentPosition, rowIndex: obj3.questContentRowIndex, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const tmpResult2 = AnalyticsActions;
    const result = tmpResult2.trackQuestContentClicked(obj5);
  }
  const obj8 = { platformType };
  return authorizeConnectionDefault(obj8);
};
