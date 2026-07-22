// Module ID: 10462
// Function ID: 80996
// Name: supportedConsoles
// Dependencies: []
// Exports: getExpiredCredentialsHintMessage, isQuestSupportedOnWeb, openAdGameLinkDirectly, openAddConsoleConnectionModal, openAuthorizationConnectionModal, openConsoleConnectionSettings, openGameLinkDirectly, openSingleConsoleConnectionModal, supportedTaskPlatforms

// Module 10462 (supportedConsoles)
function supportedConsoles(quest) {
  const items = [];
  const keys = Object.keys(quest.config.taskConfigV2.tasks);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp = keys[num];
    let tmp2 = require;
    let tmp3 = dependencyMap;
    if (require(dependencyMap[3]).FirstPartyQuestTaskTypes.PLAY_ON_XBOX === tmp) {
      let tmp8 = constants2;
      let arr = items.push(constants2.XBOX);
    } else {
      let tmp4 = require;
      let tmp5 = dependencyMap;
      if (require(dependencyMap[3]).FirstPartyQuestTaskTypes.PLAY_ON_PLAYSTATION === tmp) {
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
    const obj2 = require(dependencyMap[11]);
  }
  const obj = require(dependencyMap[11]);
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
    const obj4 = require(dependencyMap[11]);
  }
  combined1 = combined2;
}
function getInlineStoreParamsFromCta(cta) {
  let obj = require(dependencyMap[11]);
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
  const require = arg1;
  ({ clearAppStoreOverlayOpen: closure_1, setAppStoreOverlayOpen: closure_2 } = require(dependencyMap[14]));
  let str = appId.appId;
  str = undefined;
  if (null != str) {
    str = str.toString();
  }
  const QuestTaskPlatform = str;
  const result = require(dependencyMap[13]).openPlayStoreInlineInstall(appId.url, str, (arg0) => {
    callback();
    arg1(constants.QUEST_APP_STORE_OVERLAY_CLOSED, str, arg0);
    const ComponentDispatch = arg1(closure_2[15]).ComponentDispatch;
    ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
  });
  const tmp = require(dependencyMap[14]);
  result.then((arg0) => {
    if (arg0) {
      const obj = {
        trackOverlayEvent(QUEST_APP_STORE_OVERLAY_BACKGROUNDED, arg1) {
            return callback(QUEST_APP_STORE_OVERLAY_BACKGROUNDED, closure_3, arg1);
          }
      };
      callback2(obj);
      arg1(constants.QUEST_APP_STORE_OVERLAY_OPEN_SUCCEEDED, str);
    } else {
      callback();
      arg1(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
      const ComponentDispatch = arg1(callback2[15]).ComponentDispatch;
      ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
    }
  }).catch(() => {
    callback();
    arg1(constants.QUEST_APP_STORE_OVERLAY_OPEN_FAILED, str);
    const ComponentDispatch = arg1(closure_2[15]).ComponentDispatch;
    ComponentDispatch.dispatch(constants2.QUEST_APP_STORE_OVERLAY_FINISHED);
  });
}
const QuestTaskPlatform = require(dependencyMap[0]).QuestTaskPlatform;
const _module = require(dependencyMap[1]);
({ AnalyticEvents: closure_4, ComponentActions: closure_5, PlatformTypes: closure_6, UserSettingsSections: closure_7 } = _module);
const _module1 = require(dependencyMap[21]);
const result = _module1.fileFinishedImporting("modules/quests/utils/QuestPlatformUtils.tsx");

export const supportedTaskPlatforms = function supportedTaskPlatforms(quest) {
  let obj = require(dependencyMap[2]);
  obj = { quest };
  let hasPlayOnDesktopTaskResult = obj.hasPlayOnDesktopTask(obj);
  if (!hasPlayOnDesktopTaskResult) {
    obj = { quest };
    hasPlayOnDesktopTaskResult = require(dependencyMap[2]).hasStreamOnDesktopTask(obj);
    const obj3 = require(dependencyMap[2]);
  }
  if (!hasPlayOnDesktopTaskResult) {
    hasPlayOnDesktopTaskResult = require(dependencyMap[2]).hasAchievementInGameTask(quest);
    const obj5 = require(dependencyMap[2]);
  }
  const items = [];
  const obj6 = require(dependencyMap[2]);
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
  let hasWatchVideoTasksResult = require(dependencyMap[2]).hasWatchVideoTasks(userStatus);
  const obj = require(dependencyMap[2]);
  if (!hasWatchVideoTasksResult) {
    hasWatchVideoTasksResult = obj2.hasPlayActivityTask(userStatus);
  }
  return hasWatchVideoTasksResult;
};
export const PlayQuestPlatform = { DESKTOP: "desktop", XBOX: "xbox", PLAYSTATION: "playstation" };
export { getPlatformTypeForHintMessage };
export const openAuthorizationConnectionModal = function openAuthorizationConnectionModal(platformType, ctaContent) {
  const quest = platformType.quest;
  let obj = require(dependencyMap[4]);
  if (obj.shouldMigrateToAdAnalyticsInterface(require(dependencyMap[4]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")) {
    let tmpResult = tmp(tmp2[5]);
    obj = { type: tmp(tmp2[6]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(tmp2[7]).AdCreativeType.QUEST, adCreativeId: quest.id };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId } = ctaContent);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(tmp2[8]);
    obj = { questId: quest.id };
    ({ content: obj3.questContent, sourceQuestContent: obj3.sourceQuestContent, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId } = ctaContent);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  importDefault(dependencyMap[9])({ platformType: platformType.platformType, location: ctaContent.ctaContent });
};
export const getExpiredCredentialsHintMessage = function getExpiredCredentialsHintMessage(connected_account_type) {
  if (getPlatformTypeForHintMessage(connected_account_type) === constants2.XBOX) {
    let iDiwby = require(dependencyMap[10]).t.mytEv+;
  } else {
    iDiwby = require(dependencyMap[10]).t.iDiwby;
  }
  return iDiwby;
};
export const openGameLinkDirectly = function openGameLinkDirectly(quest, arg1) {
  const require = quest;
  const importDefault = arg1;
  let obj = require(dependencyMap[12]);
  const ctaConfig = quest.config.ctaConfig;
  let tmp2 = null;
  const ctaLink = obj.getCtaLink(quest.config);
  if (null != ctaConfig) {
    obj = {};
    let obj2 = require(dependencyMap[12]);
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
      let tmp26 = require;
      let tmp27 = dependencyMap;
      let num2 = 4;
      let obj5 = require(dependencyMap[4]);
      let str3 = "open_game_link_directly";
      let tmp28 = require;
      let tmp29 = dependencyMap;
      if (obj5.shouldMigrateToAdAnalyticsInterface(require(dependencyMap[4]).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")) {
        let num4 = 5;
        let tmp28Result = tmp28(tmp29[5]);
        obj = {};
        let num5 = 6;
        obj.type = tmp28(tmp29[6]).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA;
        let num6 = 7;
        obj.adCreativeType = tmp28(tmp29[7]).AdCreativeType.QUEST;
        obj.adCreativeId = quest.id;
        ({ ctaContent: obj9.questContentCTA, content: obj9.surfaceId, sourceQuestContent: obj9.sourceQuestContent, position: obj9.questContentPosition, impressionId: obj9.impressionId } = arg1);
        obj.clickId = undefined;
        let captureAdUserActionResult = tmp28Result.captureAdUserAction(obj);
      } else {
        let num3 = 8;
        tmp28Result = tmp28(tmp29[8]);
        let obj1 = { questId: quest.id };
        ({ content: obj7.questContent, ctaContent: obj7.questContentCTA, position: obj7.questContentPosition, impressionId: obj7.impressionId, sourceQuestContent: obj7.sourceQuestContent } = arg1);
        obj1.clickId = undefined;
        let result = tmp28Result.trackQuestContentClicked(obj1);
      }
      let tmp32 = require;
      let tmp33 = dependencyMap;
      let num7 = 15;
      let ComponentDispatch = require(dependencyMap[15]).ComponentDispatch;
      let tmp34 = constants;
      let dispatchResult = ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
      let num8 = 17;
      let AppStoreBottomSheetOverlayFeatureGate = require(dependencyMap[17]).AppStoreBottomSheetOverlayFeatureGate;
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
            let tmp38 = require;
            let tmp39 = dependencyMap;
            let obj12 = require(dependencyMap[12]);
            obj3.url = obj12.getCtaLink(quest.config);
            ({ android: obj11.android, ios: obj11.ios } = ctaConfig2);
            tmp36 = getInlineStoreParamsFromCta(obj3);
          }
          if (null != tmp36) {
            let tmp40 = openAppStoreOverlay;
            let tmp41 = openAppStoreOverlay(tmp36, (event, app_id) => event(closure_2[8]).trackAppStoreOverlayEvent(event, app_id, app_id, event, arg2));
          }
        }
      }
      let tmp42 = importDefault;
      let tmp43 = dependencyMap;
      let num9 = 18;
      let tmp44 = importDefault(dependencyMap[18])(tmp6);
    } else {
      let tmp10 = require;
      let tmp11 = dependencyMap;
      let num = 16;
      obj3 = require(dependencyMap[16]);
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
        // continue
      }
    }
  }
};
export const openAdGameLinkDirectly = function openAdGameLinkDirectly(adContentId, arg1) {
  adContentId = adContentId.adContentId;
  const require = adContentId;
  const adCreativeType = adContentId.adCreativeType;
  const importDefault = adCreativeType;
  const cta = adContentId.cta;
  const dependencyMap = arg1;
  let url = cta.url;
  const tmp = getDirectAppStoreLinkFromCta(cta);
  if (null != tmp) {
    url = tmp;
  }
  let obj = require(dependencyMap[4]);
  if (obj.shouldMigrateToAdAnalyticsInterface(require(dependencyMap[4]).AdAnalyticsInterfaceExperimentStep.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")) {
    let tmp2Result = tmp2(tmp3[5]);
    obj = { type: tmp2(tmp3[6]).AdUserActionType.CLICK_EXTERNAL_ADVERTISER_CTA, adCreativeType, adCreativeId: adContentId };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, position: obj5.questContentPosition, impressionId: obj5.impressionId } = arg1);
    tmp2Result.captureAdUserAction(obj);
  } else {
    tmp2Result = tmp2(tmp3[8]);
    obj = { adContentId, adCreativeType };
    ({ content: obj3.questContent, ctaContent: obj3.questContentCTA, position: obj3.questContentPosition, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmp2Result.trackAdContentClicked(obj);
  }
  const ComponentDispatch = require(dependencyMap[15]).ComponentDispatch;
  ComponentDispatch.dispatch(constants.QUEST_GAME_LINK_OPENED);
  const AppStoreBottomSheetOverlayFeatureGate = require(dependencyMap[17]).AppStoreBottomSheetOverlayFeatureGate;
  if (!AppStoreBottomSheetOverlayFeatureGate.getConfig({ location: "quest_open_game_link" }).enabled) {
    if (null != tmp) {
      const tmp8 = getInlineStoreParamsFromCta(cta);
      if (null != tmp8) {
        openAppStoreOverlay(tmp8, (event, app_id) => {
          let obj = adContentId(app_id[8]);
          obj = { adContentId, adCreativeType };
          return obj.trackAdContentAppStoreOverlayEvent(obj, app_id, app_id, event, arg2);
        });
      }
    }
  }
  importDefault(dependencyMap[18])(url);
};
export const openConsoleConnectionSettings = function openConsoleConnectionSettings(quest, arg1) {
  quest = quest.quest;
  let obj = require(dependencyMap[4]);
  if (obj.shouldMigrateToAdAnalyticsInterface(require(dependencyMap[4]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")) {
    let tmpResult = tmp(tmp2[5]);
    obj = { type: tmp(tmp2[6]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(tmp2[7]).AdCreativeType.QUEST, adCreativeId: quest.id };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(tmp2[8]);
    obj = { questId: quest.id };
    ({ content: obj3.questContent, position: obj3.questContentPosition, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  require(dependencyMap[19]).openUserSettings({ screen: constants3.CONNECTIONS });
};
export const openAddConsoleConnectionModal = function openAddConsoleConnectionModal(quest, arg1) {
  quest = quest.quest;
  let obj = require(dependencyMap[4]);
  if (obj.shouldMigrateToAdAnalyticsInterface(require(dependencyMap[4]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")) {
    let tmpResult = tmp(tmp2[5]);
    obj = { type: tmp(tmp2[6]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(tmp2[7]).AdCreativeType.QUEST, adCreativeId: quest.id };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition, rowIndex: obj5.questContentRowIndex } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(tmp2[8]);
    obj = { questId: quest.id };
    ({ content: obj3.questContent, position: obj3.questContentPosition, rowIndex: obj3.questContentRowIndex, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  const arr = supportedConsoles(quest);
  if (1 === arr.length) {
    const obj1 = { platformType: arr.at(0) };
    return importDefault(dependencyMap[9])(obj1);
  } else {
    const obj2 = {
      type: "CONNECTIONS_GRID_MODAL_SHOW",
      onComplete(platformType) {
          return callback(closure_2[9])({ platformType });
        }
    };
    const _Set = Set;
    const set = new Set(arr);
    obj2.includedPlatformTypes = set;
    obj2.includeApplicationConnections = false;
    importDefault(dependencyMap[20]).dispatch(obj2);
  }
};
export const openSingleConsoleConnectionModal = function openSingleConsoleConnectionModal(quest, arg1, platformType) {
  quest = quest.quest;
  let obj = require(dependencyMap[4]);
  if (obj.shouldMigrateToAdAnalyticsInterface(require(dependencyMap[4]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")) {
    let tmpResult = tmp(tmp2[5]);
    obj = { type: tmp(tmp2[6]).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(tmp2[7]).AdCreativeType.QUEST, adCreativeId: quest.id };
    ({ ctaContent: obj5.questContentCTA, content: obj5.surfaceId, sourceQuestContent: obj5.sourceQuestContent, impressionId: obj5.impressionId, position: obj5.questContentPosition, rowIndex: obj5.questContentRowIndex } = arg1);
    tmpResult.captureAdUserAction(obj);
  } else {
    tmpResult = tmp(tmp2[8]);
    obj = { questId: quest.id };
    ({ content: obj3.questContent, position: obj3.questContentPosition, rowIndex: obj3.questContentRowIndex, ctaContent: obj3.questContentCTA, impressionId: obj3.impressionId, sourceQuestContent: obj3.sourceQuestContent } = arg1);
    const result = tmpResult.trackQuestContentClicked(obj);
  }
  return importDefault(dependencyMap[9])({ platformType });
};
