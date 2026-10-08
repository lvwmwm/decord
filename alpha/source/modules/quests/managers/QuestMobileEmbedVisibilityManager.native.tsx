// Module ID: 18342
// Function ID: 18343
// Name: QuestMobileEmbedVisibilityManager
// Dependencies: [32, 4759, 6041, 9245, 6079, 2067, 2063, 2115, 9579, 1998, 7379, 7409, 1085, 7386, 6797, 1456, 5075, 5980, 5984, 11165, 6077, 4936, 1105, 1106, 5299, 7404, 4937, 2]

// Module 18342 (QuestMobileEmbedVisibilityManager)
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import LRUCacheDefault from "LRUCache" /* 1456 */;
import ChannelRecord from "ChannelRecord" /* 2067 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import CodedLink from "CodedLink" /* 5075 */;
import QuestTypes from "QuestTypes" /* 5980 */;
import AdCreativeType from "AdCreativeType" /* 5984 */;
import isChannelFocused from "isChannelFocused" /* 6077 */;
import getQuestLogger from "getQuestLogger" /* 7386 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7404 */;
import ContentImpressionTrackerConstants from "ContentImpressionTrackerConstants" /* 7409 */;
import ContentImpressionTracker from "ContentImpressionTracker" /* 11165 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ActionSheetStore from "ActionSheetStore" /* 4759 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9245 */;
import VoicePanelStore from "VoicePanelStore" /* 6079 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import AlertStore from "AlertStore" /* 9579 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import QuestStore from "QuestStore" /* 7379 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

let map, questLogger, set;

let metroImportAll;
let metroImportDefault;
let tmp;
const useAlertStore2 = tmp(5299);
({ useChannelDetailsStore: metroImportDefault, getIsChannelDetailsSearchActive: metroImportAll } = ChannelDetailsStore);
const isTextChannel = ChannelRecord.isTextChannel;
let closure_16 = ContentImpressionTrackerConstants.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
const MessageStates = Constants.MessageStates;
function log() {
  if (questLogger == null) {
    const obj = getQuestLogger;
    questLogger = obj.getQuestLogger({ location: "QuestMobileEmbedVisibilityManager" });
  }
}
class QuestMobileEmbedVisibilityManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    let tmp3 = new LRUCacheDefault({ max: 50 });
    applyArgumentsResult.impressionCache = tmp3;
    applyArgumentsResult.questStatuses = {};
    applyArgumentsResult.chatChannelId = undefined;
    applyArgumentsResult.previousChatChannelId = undefined;
    set = new Set();
    applyArgumentsResult.channelsWithChatOpen = set;
    applyArgumentsResult.handleVisibleMessagesChanged = function handleVisibleMessagesChanged(payload) {
      let content;
      let id;
      let percentVisible;
      let source;
      let state;
      let visibleMessages;
      ({ visibleMessages, source } = payload.payload);
      log();
      const items = [];
      const iter = visibleMessages[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let message = nextResult.message;
        let tmp4 = message;
        ({ percentVisible, state } = nextResult);
        let hasItem = message.codedLinks.length <= 0;
        if (!hasItem) {
          let items1 = [, ];
          ({ SENDING: arr2[0], SEND_FAILED: arr2[1] } = MessageStates);
          hasItem = items1.includes(state);
        }
        if (!hasItem) {
          ({ id, content } = tmp4);
          let _Math = Math;
          let tmp11 = log(Math.round(100 * percentVisible));
          if (percentVisible > closure_16) {
            let push = items.push;
            let items2 = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(items2, require.findQuestEmbedsInMessage(tmp4), 0);
            let applyResult = HermesBuiltin.apply(push, items2, items);
          }
        }
        continue;
      }
      const result = require.updateImpressionsForVisibleEmbeds({ visibleEmbeds: items });
    };
    applyArgumentsResult.findQuestEmbedsInMessage = function findQuestEmbedsInMessage(codedLinks) {
      let closure_0 = codedLinks;
      const items = [];
      set = new Set();
      codedLinks = codedLinks.codedLinks;
      const item = codedLinks.forEach((type, questContentPosition) => {
        if (type.type === CodedLink.CodedLinkType.QUESTS_EMBED) {
          const code = type.code;
          const obj = set;
          if (!set.has(code)) {
            const obj3 = { questId: code, questContentPosition, messageId: null, channelId: null };
            ({ id: obj2.messageId, channel_id: obj2.channelId } = codedLinks);
            items.push(obj3);
            obj.add(code);
          }
        }
      });
      return items;
    };
    applyArgumentsResult.updateImpressionsForVisibleEmbeds = function updateImpressionsForVisibleEmbeds(visibleEmbeds) {
      let channelId;
      let messageId;
      let questContentPosition;
      visibleEmbeds = visibleEmbeds.visibleEmbeds;
      const iter = visibleEmbeds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ questContentPosition, messageId, channelId } = nextResult);
        let tmp2 = QuestStore;
        let quest = QuestStore.getQuest(nextResult.questId);
        let tmp4 = quest;
        if (null != quest) {
          let obj = { quest: tmp4, questContent: QuestTypes.QuestContent.QUEST_EMBED_MOBILE, triggeredByStatusChange: false, questContentPosition, channelId, messageId, questId: tmp4.id, isQuestEnrollmentBlocked: null != tmp2.questEnrollmentBlockedUntil, sourceQuestContent: QuestTypes.QuestContent.QUEST_EMBED_MOBILE, adCreativeType: AdCreativeType.AdCreativeType.QUEST };
          let ensureImpression = require.ensureImpression;
          let ensureImpressionResult = ensureImpression(obj);
        }
        continue;
      }
      require.stopMany({ visibleEmbeds, shouldDeleteHiddenEmbeds: true });
    };
    applyArgumentsResult.ensureImpression = function ensureImpression(quest) {
      let items;
      quest = quest.quest;
      const merged = Object.assign(quest, Object.assign({ quest: 0 }));
      const cacheKey = require.getCacheKey(merged);
      const impressionCache = require.impressionCache;
      const value = impressionCache.get(cacheKey);
      let tmp4 = null != value;
      if (tmp4) {
        let isRunning;
        if (value != null) {
          isRunning = value.isRunning;
        }
        tmp4 = isRunning;
      }
      if (!tmp4) {
        let cloneResult = value;
        if (null != value) {
          const obj = { triggeredByStatusChange: merged.triggeredByStatusChange };
          cloneResult = value.clone(obj);
        }
        if (cloneResult == null) {
          const obj2 = { adContentIds: items };
          items = [quest.id];
          const QuestContentImpression = ContentImpressionTracker.QuestContentImpression;
          const merged1 = Object.assign(merged);
          const self = this;
          const self2 = this;
          cloneResult = new QuestContentImpression(obj2);
        }
        const tmp12 = require.isChatViewable && !cloneResult.isRunning;
        if (tmp12) {
          cloneResult.start();
        }
        const impressionCache2 = tmp2.impressionCache;
        const result = impressionCache2.set(cacheKey, cloneResult);
      }
    };
    applyArgumentsResult.stopOne = function stopOne(key) {
      const impressionCache = require.impressionCache;
      const shouldDelete = key.shouldDelete;
      const value = impressionCache.get(key);
      let flag;
      const tmp = require;
      if (value != null) {
        flag = value.isRunning;
      }
      if (flag == null) {
        flag = false;
      }
      if (value != null) {
        value.stop();
      }
      if (shouldDelete) {
        log();
        const impressionCache2 = tmp.impressionCache;
        impressionCache2.del(key.key);
      }
      return flag;
    };
    applyArgumentsResult.stopMany = function stopMany(arg0) {
      let cacheKey;
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = { visibleEmbeds: [], shouldDeleteHiddenEmbeds: false };
        const obj = { visibleEmbeds: [], shouldDeleteHiddenEmbeds: false };
      }
      let visibleEmbeds = tmp.visibleEmbeds;
      if (visibleEmbeds === undefined) {
        visibleEmbeds = [];
      }
      let flag = tmp.shouldDeleteHiddenEmbeds;
      if (flag === undefined) {
        flag = false;
      }
      const impressionCache = require.impressionCache;
      set = new Set(visibleEmbeds.map((item) => cacheKey.getCacheKey(item)));
      const keys = impressionCache.keys();
      for (const item10023 of keys) {
        let tmp3 = item10023;
        if (!set.has(item10023)) {
          let obj2 = { key: tmp3, shouldDelete: flag };
          let stopOneResult = require.stopOne(obj2);
        }
        continue;
      }
    };
    applyArgumentsResult.getCacheKey = function getCacheKey(channelId) {
      return channelId.channelId + ":" + channelId.messageId + ":" + channelId.questId;
    };
    applyArgumentsResult.parseCacheKey = function parseCacheKey(nextResult) {
      const tmp = _slicedToArray(nextResult.split(":"), 3);
      return { channelId: tmp[0], messageId: tmp[1], questId: tmp[2] };
    };
    applyArgumentsResult.isOnChannelNavigationRoute = function isOnChannelNavigationRoute() {
      const obj = isChannelFocused;
      let isChannelFocusedResult = obj.isChannelFocused();
      NavigationRouteUtils;
      if (isChannelFocusedResult) {
        isChannelFocusedResult = "channel" === tmp3;
      }
      return isChannelFocusedResult;
    };
    applyArgumentsResult.isSearchShowing = function isSearchShowing() {
      const tmp2 = null != require.chatChannelId && metroImportAll(tmp.chatChannelId);
      return tmp2;
    };
    applyArgumentsResult.getIsChatViewable = function getIsChatViewable() {
      if (null == require.chatChannelId) {
        log();
        return false;
      } else if (ActionSheetStore.isOpen()) {
        log();
        return false;
      } else {
        const state = AppStateStore.getState();
        if (state !== ConstantsIOS.AppStates.ACTIVE) {
          log();
          return false;
        } else {
          const channel = ChannelStore.getChannel(obj.chatChannelId);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          const chatOpen = ChannelRTCStore.getChatOpen(obj.chatChannelId);
          const tmp8 = type === ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE && chatOpen;
          const tmp3Result = NavigationRouteUtils;
          const openModalKey = tmp3Result.getOpenModalKey();
          const _HermesInternal = HermesInternal;
          if (null != openModalKey) {
            if (openModalKey !== "voice-channel-" + require.chatChannelId) {
              log();
              return false;
            }
          }
          if (require.isSearchShowing()) {
            log();
            return false;
          } else {
            if (null == AlertStore.getAlert()) {
              const useAlertStore = tmp3(5299).useAlertStore;
              if (useAlertStore.getState().alerts.length <= 0) {
                const tmp14 = type === ChannelTypes.ChannelTypes.GUILD_VOICE && chatOpen;
                let result = null != type && isTextChannel(type);
                const state1 = VoicePanelStore.getState();
                const isAnyVoicePanelOpenResult = state1.isAnyVoicePanelOpen();
                if (result) {
                  result = obj.isOnChannelNavigationRoute();
                }
                if (result) {
                  result = !isAnyVoicePanelOpenResult;
                }
                if (result) {
                  result = !tmp8;
                }
                if (result) {
                  result = !tmp14;
                }
                if (!result) {
                  result = tmp8;
                }
                if (!result) {
                  result = tmp14;
                }
                log(require.chatChannelId);
                return result;
              }
            }
            log();
            return false;
          }
        }
      }
    };
    applyArgumentsResult.updateImpressionsForChatBecameViewable = function updateImpressionsForChatBecameViewable() {
      log();
      const impressionCache = require.impressionCache;
      const keys = impressionCache.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let obj = require;
        let impressionCache2 = require.impressionCache;
        let value = impressionCache2.get(nextResult);
        let obj2 = value;
        if (null != value) {
          let channelId = obj.parseCacheKey(tmp4).channelId;
          if (obj2.isRunning) {
            let tmp9 = log(obj.chatChannelId);
            let obj3 = { key: tmp4, shouldDelete: false };
            let stopOneResult = obj.stopOne(obj3);
          }
          if (channelId === obj.chatChannelId) {
            let tmp16 = log(obj.chatChannelId);
            let cloneResult = obj2.clone({ triggeredByStatusChange: false });
            let startResult = cloneResult.start();
            let impressionCache3 = obj.impressionCache;
            let result = impressionCache3.set(tmp4, cloneResult);
          }
        }
        continue;
      }
    };
    applyArgumentsResult.refreshImpressions = function refreshImpressions() {
      if (require.isChatViewable) {
        const result = obj.updateImpressionsForChatBecameViewable();
      } else {
        log();
        require.stopMany();
      }
    };
    applyArgumentsResult.checkChatViewable = function checkChatViewable() {
      const isChatViewable = require.getIsChatViewable();
      let flag = isChatViewable !== require.isChatViewable;
      if (flag) {
        log();
        require.isChatViewable = isChatViewable;
        require.refreshImpressions();
        flag = true;
      }
      return flag;
    };
    applyArgumentsResult.checkIsOnChannelNavigationRoute = function checkIsOnChannelNavigationRoute() {
      const result = require.isOnChannelNavigationRoute();
      if (result !== require.wasOnChannelNavigationRoute) {
        log();
        require.checkChatViewable();
        require.wasOnChannelNavigationRoute = result;
      }
    };
    applyArgumentsResult.checkSearchShowing = function checkSearchShowing() {
      const isSearchShowingResult = require.isSearchShowing();
      if (isSearchShowingResult !== require.wasSearchShowing) {
        log();
        require.checkChatViewable();
        require.wasSearchShowing = isSearchShowingResult;
      }
    };
    applyArgumentsResult.onChannelChanged = function onChannelChanged(channelId) {
      require.previousChatChannelId = require.chatChannelId;
      require.chatChannelId = channelId;
      log(require.chatChannelId);
      require.stopMany({ shouldDeleteHiddenEmbeds: true });
      const obj = require;
      if (!require.checkChatViewable()) {
        obj.refreshImpressions();
      }
    };
    applyArgumentsResult.checkOpenModalKey = function checkOpenModalKey() {
      const obj = NavigationRouteUtils;
      const openModalKey = obj.getOpenModalKey();
      if (openModalKey !== require.previouslyOpenModalKey) {
        log(require.previouslyOpenModalKey);
        require.checkChatViewable();
        require.previouslyOpenModalKey = openModalKey;
      }
    };
    applyArgumentsResult.handleQuestStoreChanged = function handleQuestStoreChanged() {
      log();
      const quests = QuestStore.quests;
      const impressionCache = require.impressionCache;
      set = new Set(quests.keys());
      const keys = impressionCache.keys();
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let obj2 = require;
        let parseCacheKeyResult = require.parseCacheKey(nextResult);
        let tmp7 = parseCacheKeyResult;
        if (set.has(parseCacheKeyResult.questId)) {
          let value = quests.get(tmp7.questId);
          let tmp10 = value;
          let tmp12 = obj2.questStatuses[tmp7.questId];
          let questStatus = null;
          if (null != value) {
            let obj3 = AnalyticsTypes;
            questStatus = obj3.getQuestStatus(tmp10);
          }
          if (questStatus !== tmp12) {
            obj2.questStatuses[tmp7.questId] = tmp17;
            if (obj2.isChatViewable) {
              let impressionCache2 = obj2.impressionCache;
              let value2 = impressionCache2.get(tmp4);
              let obj4 = value2;
              let isRunning;
              if (value2 != null) {
                isRunning = value2.isRunning;
              }
              if (true === isRunning) {
                if (null != tmp10) {
                  let cloneResult = obj4.clone({ triggeredByStatusChange: true });
                  let startResult = cloneResult.start();
                  let impressionCache3 = obj2.impressionCache;
                  let result = impressionCache3.set(tmp4, cloneResult);
                } else {
                  let obj = { key: tmp4, shouldDelete: true };
                  let stopOneResult = obj2.stopOne(obj);
                }
              }
            }
          }
        }
        continue;
      }
    };
    applyArgumentsResult.handleSelectedChannelStoreChanged = function handleSelectedChannelStoreChanged() {
      log();
      const channelId = SelectedChannelStore.getChannelId();
      const tmp = log;
      if (channelId !== require.chatChannelId) {
        const channel = ChannelStore.getChannel(obj.chatChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let hasItem = null != type;
        if (hasItem) {
          const items = [ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE, ChannelTypes.ChannelTypes.GUILD_VOICE];
          let type1;
          const includes = items.includes;
          if (channel != null) {
            type1 = channel.type;
          }
          hasItem = includes(type1);
        }
        const tmp9 = null != require.chatChannelId && hasItem;
        if (!tmp9) {
          tmp(require.chatChannelId);
          require.onChannelChanged(channelId);
        }
      }
    };
    applyArgumentsResult.handleActionSheetStoreChanged = function handleActionSheetStoreChanged() {
      log();
      const isOpenResult = ActionSheetStore.isOpen();
      const tmp = log;
      if (isOpenResult !== require.wasActionSheetOpen) {
        tmp();
        require.checkChatViewable();
        require.wasActionSheetOpen = isOpenResult;
      }
    };
    applyArgumentsResult.handleAppStateStoreChanged = function handleAppStateStoreChanged() {
      log();
      const state = AppStateStore.getState();
      const tmp4 = state === ConstantsIOS.AppStates.ACTIVE;
      const tmp = log;
      if (require.wasAppActive !== tmp4) {
        tmp();
        require.checkChatViewable();
        require.wasAppActive = tmp4;
      }
    };
    applyArgumentsResult.handleVoicePanelStoreChanged = function handleVoicePanelStoreChanged() {
      log();
      const state = VoicePanelStore.getState();
      const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
      const tmp = log;
      if (isAnyVoicePanelOpenResult !== require.wasAnyVoicePanelOpen) {
        tmp();
        require.checkChatViewable();
        require.wasAnyVoicePanelOpen = isAnyVoicePanelOpenResult;
      }
    };
    applyArgumentsResult.handleChannelDetailsStoreChanged = function handleChannelDetailsStoreChanged() {
      require.checkSearchShowing();
    };
    applyArgumentsResult.handleChannelRTCStoreChanged = function handleChannelRTCStoreChanged() {
      log();
      const openChatChannelIds = ChannelRTCStore.getOpenChatChannelIds();
      const items = [...openChatChannelIds];
      set = new Set(items);
      const iter = set[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let tmp7 = channel;
        let type;
        if (channel != null) {
          type = channel.type;
        }
        if (null != type) {
          let items1 = [ChannelTypes.ChannelTypes.GUILD_STAGE_VOICE, ChannelTypes.ChannelTypes.GUILD_VOICE];
          let type1;
          let includes = items1.includes;
          if (tmp7 != null) {
            type1 = tmp7.type;
          }
          if (includes(type1)) {
            let obj2 = require;
            let channelsWithChatOpen = require.channelsWithChatOpen;
            let hasItem = channelsWithChatOpen.has(tmp4);
            let hasItem1 = openChatChannelIds.has(tmp4);
            if (hasItem !== hasItem1) {
              if (tmp14) {
                if (tmp4 !== obj2.chatChannelId) {
                  let onChannelChangedResult = obj2.onChannelChanged(nextResult);
                  iter.return();
                  break;
                }
                break;
              }
              if (!hasItem1) {
                if (obj2.previousChatChannelId !== obj2.chatChannelId) {
                  let onChannelChangedResult1 = obj2.onChannelChanged(obj2.previousChatChannelId);
                  iter.return();
                  break;
                }
                break;
              }
              let checkChatViewableResult = obj2.checkChatViewable();
              iter.return();
              break;
            }
            let _Set = Set;
            let self = this;
            let self2 = this;
            let set1 = new Set(openChatChannelIds);
            require.channelsWithChatOpen = set1;
          }
        }
        continue;
      }
    };
    applyArgumentsResult.handleNavigationStateChanged = function handleNavigationStateChanged() {
      log();
      const result = require.checkIsOnChannelNavigationRoute();
      require.checkOpenModalKey();
    };
    applyArgumentsResult.handleAlertStoreChanged = function handleAlertStoreChanged() {
      let tmp = null != AlertStore.getAlert();
      if (!tmp) {
        const useAlertStore = useAlertStore2.useAlertStore;
        tmp = useAlertStore.getState().alerts.length > 0;
      }
      if (tmp !== require.wasAlertOpen) {
        log();
        require.checkChatViewable();
        require.wasAlertOpen = tmp;
      }
    };
    applyArgumentsResult.unsubscribeFromVoicePanelStore = function unsubscribeFromVoicePanelStore() {

    };
    applyArgumentsResult.unsubscribeFromChannelDetailsStore = function unsubscribeFromChannelDetailsStore() {

    };
    applyArgumentsResult.unsubscribeFromAlertStore = function unsubscribeFromAlertStore() {

    };
    map = new Map();
    let result = map.set(QuestStore, applyArgumentsResult.handleQuestStoreChanged);
    const result1 = result.set(SelectedChannelStore, applyArgumentsResult.handleSelectedChannelStoreChanged);
    const result2 = result1.set(ActionSheetStore, applyArgumentsResult.handleActionSheetStoreChanged);
    const result3 = result2.set(AppStateStore, applyArgumentsResult.handleAppStateStoreChanged);
    const result4 = result3.set(ChannelRTCStore, applyArgumentsResult.handleChannelRTCStoreChanged);
    applyArgumentsResult.stores = result4.set(AlertStore, applyArgumentsResult.handleAlertStoreChanged);
    applyArgumentsResult.actions = { QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED: applyArgumentsResult.handleVisibleMessagesChanged };
    return applyArgumentsResult;
  }
  _initialize() {
    const self = this;
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.addListener("state", self.handleNavigationStateChanged);
    }
    self.unsubscribeFromVoicePanelStore = VoicePanelStore.subscribe(self.handleVoicePanelStoreChanged);
    self.unsubscribeFromChannelDetailsStore = metroImportDefault.subscribe(self.handleChannelDetailsStoreChanged);
    const useAlertStore = useAlertStore2.useAlertStore;
    self.unsubscribeFromAlertStore = useAlertStore.subscribe(self.handleAlertStoreChanged);
    super._initialize();
  }
  _terminate() {
    const self = this;
    const obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.removeListener("state", self.handleNavigationStateChanged);
    }
    const result = self.unsubscribeFromVoicePanelStore();
    const result1 = self.unsubscribeFromChannelDetailsStore();
    const result2 = self.unsubscribeFromAlertStore();
    super._terminate();
  }
}
let closure_19 = QuestMobileEmbedVisibilityManager.prototype;
const questMobileEmbedVisibilityManager = new QuestMobileEmbedVisibilityManager();
let result = size.fileFinishedImporting("modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx");

export default questMobileEmbedVisibilityManager;
