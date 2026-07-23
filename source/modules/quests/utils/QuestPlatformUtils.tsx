// Module ID: 10472
// Function ID: 81046
// Name: supportedConsoles
// Dependencies: [4976, 653, 6965, 4983, 9449, 9450, 9451, 6970, 6959, 8970, 1212, 477, 9468, 4096, 10473, 1207, 491, 10466, 3821, 5796, 686, 2]
// Exports: getExpiredCredentialsHintMessage, isQuestSupportedOnWeb, openAdGameLinkDirectly, openAddConsoleConnectionModal, openAuthorizationConnectionModal, openConsoleConnectionSettings, openGameLinkDirectly, openSingleConsoleConnectionModal, supportedTaskPlatforms

// Module 10472 (supportedConsoles)
import { QuestTaskPlatform } from "QuestsExperimentLocations";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
function supportedConsoles(quest) {
  const items = [];
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let tmp2 = require;
    let tmp3 = dependencyMap;
    if (require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_XBOX === tmp) {
      let tmp8 = constants2;
      let arr = items.push(constants2.XBOX);
    } else {
      let tmp4 = require;
      let tmp5 = dependencyMap;
      if (require(4983) /* set */.FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === tmp) {
        let tmp6 = constants2;
        arr = items.push(constants2.PLAYSTATION);
      }
    }
  }
  return items;
}
function getPlatformTypeForHintMessage(connected_account_type) {
  if ("xbox" === connected_account_type.connected_account_type) {
    let PLAYSTATION = constants2.XBOX;
  } else {
    PLAYSTATION = constants2.PLAYSTATION;
  }
  return PLAYSTATION;
}
function getDirectAppStoreLinkFromCta(cta) {
  if (obj.isIOS()) {
    const ios = cta.ios;
    let iosAppId;
    if (null != ios) {
      iosAppId = ios.iosAppId;
    }
    if (null != iosAppId) {
      iosAppId = cta.ios.iosAppId;
      const iosAppId2 = cta.ios.iosAppId;
      if (iosAppId.startsWith("id")) {
        let combined = iosAppId2;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "id" + iosAppId2;
      }
      const _HermesInternal2 = HermesInternal;
      let combined1 = "https://apps.apple.com/app/" + combined;
    }
    return combined1;
  } else {
    const obj2 = require(477) /* set */;
  }
  obj = require(477) /* set */;
  if (obj3.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (null != android) {
      androidAppId = android.androidAppId;
    }
    let combined2 = null;
    if (null != androidAppId) {
      const _HermesInternal3 = HermesInternal;
      combined2 = "https://play.google.com/store/apps/details?id=" + cta.android.androidAppId;
    }
  } else {
    combined2 = null;
    const obj4 = require(477) /* set */;
  }
  combined1 = combined2;
}
function getInlineStoreParamsFromCta(cta) {
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    const android = cta.android;
    let androidAppId;
    if (null != android) {
      androidAppId = android.androidAppId;
    }
    if (null != androidAppId) {
      obj = {};
      const _HermesInternal2 = HermesInternal;
      obj.url = "https://play.google.com/d?id=" + cta.android.androidAppId;
      obj.appId = null;
      let tmp3 = obj;
    }
    return tmp3;
  }
  tmp3 = null;
  if (obj2.isIOS()) {
    const ios = cta.ios;
    let iosAppId;
    if (null != ios) {
      iosAppId = ios.iosAppId;
    }
    tmp3 = null;
    if (null != iosAppId) {
      obj = {};
      const _HermesInternal = HermesInternal;
      obj.url = "https://apps.apple.com/app/id" + cta.ios.iosAppId;
      const _parseInt = parseInt;
      obj.appId = parseInt(cta.ios.iosAppId, 10);
      tmp3 = obj;
    }
  }
}
function openAppStoreOverlay(appId, arg1) {
  let dependencyMap;
  let importDefault;
  const _require = arg1;
  ({ clearAppStoreOverlayOpen: importDefault, setAppStoreOverlayOpen: dependencyMap } = _require(10473));
  let str = appId.appId;
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  const result = _require(4096).openPlayStoreInlineInstall(appId.url, str, (arg0) => {
    callback2();
    callback(outer1_4.QUEST_APP_STORE_OVERLAY_CLOSED, str, arg0);
    const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
    ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
  });
  const tmp = _require(10473);
  result.then((arg0) => {
    if (arg0) {
      const obj = {
        trackOverlayEvent(QUEST_APP_STORE_OVERLAY_BACKGROUNDED, arg1) {
            return outer1_0(QUEST_APP_STORE_OVERLAY_BACKGROUNDED, outer1_3, arg1);
          }
      };
      callback3(obj);
      callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
    } else {
      callback2();
      callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
      const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
      ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
    }
  }).catch(() => {
    callback2();
    callback(outer1_4.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
    const ComponentDispatch = callback(outer1_2[15]).ComponentDispatch;
    ComponentDispatch.dispatch(outer1_5.QUEST_APP_STORE_OVERLAY_FINISHED);
  });
}
({ AnalyticEvents: closure_4, ComponentActions: closure_5, PlatformTypes: closure_6, UserSettingsSections: closure_7 } = ME);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(closure_0) {
  let obj = require(6965) /* _createForOfIteratorHelperLoose */;
  obj = { quest: closure_0 };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
  if (!hasPlayOnDesktopTaskResult) {
    obj = { quest: closure_0 };
    hasPlayOnDesktopTaskResult = require(6965) /* _createForOfIteratorHelperLoose */.hasStreamOnDesktopTask(obj);
    const obj3 = require(6965) /* _createForOfIteratorHelperLoose */;
  }
  if (!hasPlayOnDesktopTaskResult) {
    hasPlayOnDesktopTaskResult = require(6965) /* _createForOfIteratorHelperLoose */.hasAchievementInGameTask(closure_0);
    const obj5 = require(6965) /* _createForOfIteratorHelperLoose */;
  }
  const items = [];
  const obj6 = require(6965) /* _createForOfIteratorHelperLoose */;
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
  let hasWatchVideoTasksResult = require(6965) /* _createForOfIteratorHelperLoose */.hasWatchVideoTasks(userStatus);
  const obj = require(6965) /* _createForOfIteratorHelperLoose */;
  if (!hasWatchVideoTasksResult) {
    hasWatchVideoTasksResult = obj2.hasPlayActivityTask(userStatus);
  }
  return hasWatchVideoTasksResult;
};
export const PlayQuestPlatform = { DESKTOP: "desktop", XBOX: "xbox", PLAYSTATION: "playstation" };
export { getPlatformTypeForHintMessage };
export const openAuthorizationConnectionModal = function openAuthorizationConnectionModal(platformType, ctaContent) {
  const quest = platformType.quest;
  let obj = require(9449) /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require(9449) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")) {
    let tmpResult = tmp(9450);
    obj = { type: tmp(9451).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(6970).AdCreativeType.QUEST, adCreativeId: quest.id };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(6959);
    obj = { questId: quest.id };
    ({ content: obj3.questContent, sourceQuestContent: obj3.sourceQuestContent, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  importDefault(8970)({ platformType: platformType.platformType, location: ctaContent.ctaContent });
};
export const getExpiredCredentialsHintMessage = function getExpiredCredentialsHintMessage(connected_account_type) {
  if (getPlatformTypeForHintMessage(connected_account_type) === constants2.XBOX) {
    let iDiwby = require(1212) /* getSystemLocale */.t["mytEv+"];
  } else {
    iDiwby = require(1212) /* getSystemLocale */.t.iDiwby;
  }
  return iDiwby;
};
export const openGameLinkDirectly = function openGameLinkDirectly(quest, arg1) {
  const _require = quest;
  const importDefault = arg1;
  let obj = _require(9468);
  const ctaConfig = quest.config.ctaConfig;
  let tmp2 = null;
  const ctaLink = obj.getCtaLink(quest.config);
  if (null != ctaConfig) {
    obj = {};
    let obj2 = _require(9468);
    obj.url = obj2.getCtaLink(quest.config);
    ({ android: obj2.android, ios: obj2.ios } = ctaConfig);
    tmp2 = getDirectAppStoreLinkFromCta(obj);
  }
  let tmp6 = ctaLink;
  if (null != tmp2) {
    tmp6 = tmp2;
  }
  const uRL = new URL(tmp6);
  while (true) {
    let tmp9 = tmp6;
    if (!tmp8) {
      let tmp26 = _require;
      let tmp27 = dependencyMap;
      let num2 = 4;
      let obj5 = _require(9449);
      let str3 = "open_game_link_directly";
      let tmp28 = _require;
      let tmp29 = dependencyMap;
      if (obj5.shouldMigrateToAdAnalyticsInterface(_require(9449).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")) {
        let num4 = 5;
        let tmp28Result = tmp28(9450);
        obj = {};
        let num5 = 6;
        obj.type = tmp28(9451).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
        let num6 = 7;
        obj.adCreativeType = tmp28(6970).AdCreativeType.QUEST;
        obj.adCreativeId = quest.id;
        ({ ctaContent: obj9.questContentCTA, content: obj9.surfaceId, sourceQuestContent: obj9.sourceQuestContent, position: obj9.questContentPosition, impressionId: obj9.impressionId } = arg1);
        obj.clickId = undefined;
        let captureAdUserActionResult = tmp28Result.captureAdUserAction(obj);
      } else {
        let num3 = 8;
        tmp28Result = tmp28(6959);
        let obj1 = { questId: quest.id };
        ({ content: obj7.questContent, ctaContent: obj7.questContentCTA, position: obj7.questContentPosition, impressionId: obj7.impressionId, sourceQuestContent: obj7.sourceQuestContent } = arg1);
        obj1.clickId = undefined;
        let result = tmp28Result.trackQuestContentClicked(obj1);
      }
      let tmp32 = _require;
      let tmp33 = dependencyMap;
      let num7 = 15;
      let ComponentDispatch = _require(1207).ComponentDispatch;
      let tmp34 = constants;
      let dispatchResult = ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
      let num8 = 17;
      let AppStoreBottomSheetOverlayFeatureGate = _require(10466).AppStoreBottomSheetOverlayFeatureGate;
      obj2 = {};
      let str4 = "quest_open_game_link";
      obj2.location = "quest_open_game_link";
      if (!AppStoreBottomSheetOverlayFeatureGate.getConfig(obj2).enabled) {
        if (null != tmp2) {
          let ctaConfig2 = quest.config.ctaConfig;
          let tmp36 = null;
          if (null != ctaConfig2) {
            let tmp37 = getInlineStoreParamsFromCta;
            let obj3 = {};
            let tmp38 = _require;
            let tmp39 = dependencyMap;
            let obj12 = _require(9468);
            obj3.url = obj12.getCtaLink(quest.config);
            ({ android: obj11.android, ios: obj11.ios } = ctaConfig2);
            tmp36 = getInlineStoreParamsFromCta(obj3);
          }
          if (null != tmp36) {
            let tmp40 = openAppStoreOverlay;
            let tmp41 = openAppStoreOverlay(tmp36, (event, app_id) => quest(outer1_2[8]).trackAppStoreOverlayEvent(quest, closure_1, app_id, event, arg2));
          }
        }
      }
      let tmp42 = importDefault;
      let tmp43 = dependencyMap;
      let num9 = 18;
      let tmp44 = importDefault(3821)(tmp6);
    } else {
      let tmp10 = _require;
      let tmp11 = dependencyMap;
      let num = 16;
      obj3 = _require(491);
      let v4Result = obj3.v4();
      let tmp13 = tmp6;
      let tmp14 = v4Result;
      let tmp15 = globalThis;
      let _URL = URL;
      let tmp16 = tmp6;
      let tmp17 = new.target;
      let tmp18 = new.target;
      let str = new URL(tmp6);
      let tmp19 = str;
      let searchParams = str.searchParams;
      let tmp20 = v4Result;
      let str2 = "dclid";
      let result1 = searchParams.set("dclid", v4Result);
      str = str.toString();
      let tmp24 = str;
      let tmp25 = v4Result;
      while (true) {
        let tmp23 = __exception;
        str = tmp6;
        continue;
      }
    }
  }
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, arg1) {
  adContentId = adContentId.adContentId;
  const adCreativeType = adContentId.adCreativeType;
  const cta = adContentId.cta;
  const dependencyMap = arg1;
  let url = cta.url;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  let obj = adContentId(9449);
  if (obj.shouldMigrateToAdAnalyticsInterface(adContentId(9449).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")) {
    let tmp2Result = tmp2(9450);
    obj = { type: tmp2(9451).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, adCreativeType, adCreativeId: adContentId };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, position: obj5.questContentPosition, impressionId: obj5.impressionId } = arg1);
    tmp2Result.captureAdUserAction(obj);
  } else {
    tmp2Result = tmp2(6959);
    obj = { adContentId, adCreativeType };
    ({ content: obj3.questContent, ctaContent: obj3.questContentCTA, position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmp2Result.trackAdContentClicked(obj);
  }
  const ComponentDispatch = adContentId(1207).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const AppStoreBottomSheetOverlayFeatureGate = adContentId(10466).AppStoreBottomSheetOverlayFeatureGate;
  if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
    if (null != tmp) {
      const tmp8 = getInlineStoreParamsFromCta(cta);
      if (null != tmp8) {
        openAppStoreOverlay(tmp8, (event, app_id) => {
          let obj = adContentId(table[8]);
          obj = { adContentId, adCreativeType };
          return obj.trackAdContentAppStoreOverlayEvent(obj, table, app_id, event, arg2);
        });
      }
    }
  }
  adCreativeType(3821)(url);
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(quest, arg1) {
  quest = quest.quest;
  let obj = require(9449) /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require(9449) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")) {
    let tmpResult = tmp(9450);
    obj = { type: tmp(9451).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(6970).AdCreativeType.QUEST, adCreativeId: quest.id };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(6959);
    obj = { questId: quest.id };
    ({ content: obj3.questContent, position: obj3.questContentPosition, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  require(5796) /* openUserSettings */.openUserSettings({ screen: constants3.CONNECTIONS });
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
  let obj = require(9449) /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require(9449) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")) {
    let tmpResult = tmp(9450);
    obj = { type: tmp(9451).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(6970).AdCreativeType.QUEST, adCreativeId: quest.id };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition, rowIndex: obj5.questContentRowIndex } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(6959);
    obj = { questId: quest.id };
    ({ content: obj3.questContent, position: obj3.questContentPosition, rowIndex: obj3.questContentRowIndex, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj1 = { platformType: arr.at(0) };
    return importDefault(8970)(obj1);
  } else {
    const obj2 = {
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete(platformType) {
          return outer1_1(outer1_2[9])({ platformType });
        }
    };
    const _Set = Set;
    const set = new Set(arr);
    obj2.includedPlatformTypes = set;
    obj2.includeApplicationConnections = false;
    importDefault(686).dispatch(obj2);
  }
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
  let obj = require(9449) /* apexExperiment */;
  if (obj.shouldMigrateToAdAnalyticsInterface(require(9449) /* apexExperiment */.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")) {
    let tmpResult = tmp(9450);
    obj = { type: tmp(9451).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(6970).AdCreativeType.QUEST, adCreativeId: quest.id };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition, rowIndex: obj5.questContentRowIndex } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(6959);
    obj = { questId: quest.id };
    ({ content: obj3.questContent, position: obj3.questContentPosition, rowIndex: obj3.questContentRowIndex, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  return importDefault(8970)({ platformType });
};
