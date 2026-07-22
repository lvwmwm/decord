// Module ID: 16393
// Function ID: 126605
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16393 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_8(closure_7(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
({ useChannelDetailsStore: closure_12, getIsChannelDetailsSearchActive: closure_13 } = arg1(dependencyMap[9]));
let closure_14 = importDefault(dependencyMap[10]);
const isTextChannel = arg1(dependencyMap[11]).isTextChannel;
let closure_16 = importDefault(dependencyMap[12]);
let closure_17 = importDefault(dependencyMap[13]);
let closure_18 = importDefault(dependencyMap[14]);
let closure_19 = importDefault(dependencyMap[15]);
let closure_20 = importDefault(dependencyMap[16]);
let closure_21 = arg1(dependencyMap[17]).MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
const MessageStates = arg1(dependencyMap[18]).MessageStates;
function log(arg0) {
  if (null == questLogger) {
    let obj = arg1(dependencyMap[19]);
    obj = { location: "QuestMobileEmbedVisibilityManager" };
    const questLogger = obj.getQuestLogger(obj);
  }
}
let tmp3 = (arg0) => {
  class QuestMobileEmbedVisibilityManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, QuestMobileEmbedVisibilityManager);
      items1 = [...items];
      obj = closure_7(QuestMobileEmbedVisibilityManager);
      tmp2 = closure_6;
      if (closure_27()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      QuestMobileEmbedVisibilityManager = tmp2Result;
      tmp7 = closure_1(closure_2[20]);
      obj = { max: 50 };
      tmp7 = new tmp7(obj);
      tmp2Result.impressionCache = tmp7;
      tmp2Result.questStatuses = {};
      tmp2Result.chatChannelId = undefined;
      tmp2Result.previousChatChannelId = undefined;
      tmp2Result.channelsWithChatOpen = {};
      tmp2Result.handleVisibleMessagesChanged = (payload) => {
        let content;
        let id;
        let iter2;
        let message;
        let percentVisible;
        callback4();
        const items = [];
        const tmp2 = callback5(payload.payload.visibleMessages);
        let iter = tmp2();
        if (!iter.done) {
          do {
            ({ message, percentVisible } = iter.value);
            let hasItem = message.codedLinks.length <= 0;
            if (!hasItem) {
              let tmp5 = closure_22;
              let items1 = [, ];
              ({ SENDING: arr2[0], SEND_FAILED: arr2[1] } = closure_22);
              hasItem = items1.includes(tmp3);
            }
            if (!hasItem) {
              let tmp6 = closure_24;
              ({ id, content } = message);
              let _Math = Math;
              let tmp7 = closure_24(Math.round(100 * percentVisible));
              let tmp8 = closure_21;
              if (percentVisible > closure_21) {
                let push = items.push;
                let tmp9 = closure_0;
                let items2 = [];
                let tmp10 = items2;
                let num = 0;
                let arraySpreadResult = HermesBuiltin.arraySpread(closure_0.findQuestEmbedsInMessage(message), 0);
                let tmp12 = push;
                let tmp13 = items2;
                let tmp14 = items;
                let applyResult = HermesBuiltin.apply(items2, items);
              }
            }
            iter2 = tmp2();
            iter = iter2;
          } while (!iter2.done);
        }
        const result = tmp2Result.updateImpressionsForVisibleEmbeds({ visibleEmbeds: items });
      };
      tmp2Result.findQuestEmbedsInMessage = (codedLinks) => {
        const items = [];
        const set = new Set();
        codedLinks = codedLinks.codedLinks;
        const item = codedLinks.forEach((type, questContentPosition) => {
          if (type.type === type(set[21]).CodedLinkType.QUESTS_EMBED) {
            const code = type.code;
            if (!set.has(code)) {
              const obj = { questId: code, questContentPosition };
              ({ id: obj.messageId, channel_id: obj.channelId } = type);
              items.push(obj);
              set.add(code);
            }
          }
        });
        return items;
      };
      tmp2Result.updateImpressionsForVisibleEmbeds = (visibleEmbeds) => {
        let channelId;
        let iter2;
        let messageId;
        let questContentPosition;
        visibleEmbeds = visibleEmbeds.visibleEmbeds;
        const tmp = callback5(visibleEmbeds);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp2 = closure_20;
            ({ questContentPosition, messageId, channelId } = value);
            let quest = closure_20.getQuest(value.questId);
            if (null != quest) {
              let tmp5 = closure_0;
              let obj = { quest };
              let tmp6 = closure_0;
              let tmp7 = closure_2;
              obj.questContent = closure_0(closure_2[22]).QuestContent.QUEST_EMBED_MOBILE;
              obj.triggeredByStatusChange = false;
              obj.questContentPosition = questContentPosition;
              obj.channelId = channelId;
              obj.messageId = messageId;
              obj.questId = quest.id;
              let tmp8 = closure_20;
              obj.isQuestEnrollmentBlocked = null != closure_20.questEnrollmentBlockedUntil;
              obj.sourceQuestContent = closure_0(closure_2[22]).QuestContent.QUEST_EMBED_MOBILE;
              obj.adCreativeType = closure_0(closure_2[23]).AdCreativeType.QUEST;
              let ensureImpressionResult = closure_0.ensureImpression(obj);
            }
            iter2 = tmp();
            iter = iter2;
          } while (!iter2.done);
        }
        tmp2Result.stopMany({ visibleEmbeds, shouldDeleteHiddenEmbeds: true });
      };
      tmp2Result.ensureImpression = (quest) => {
        let obj = Object.create(null);
        obj.quest = 0;
        const merged = Object.assign(quest, obj);
        const cacheKey = tmp2Result.getCacheKey(merged);
        const impressionCache = tmp2Result.impressionCache;
        const value = impressionCache.get(cacheKey);
        let isRunning = null != value;
        if (isRunning) {
          isRunning = null != value;
          const tmp4 = value;
        }
        if (isRunning) {
          isRunning = tmp4.isRunning;
        }
        if (!isRunning) {
          let cloneResult = value;
          if (null != value) {
            obj = { triggeredByStatusChange: merged.triggeredByStatusChange };
            cloneResult = value.clone(obj);
          }
          if (null == cloneResult) {
            const QuestContentImpression = tmp2Result(closure_2[24]).QuestContentImpression;
            const obj1 = {};
            const items = [quest.quest.id];
            obj1.adContentIds = items;
            const merged1 = Object.assign(merged);
            const prototype = QuestContentImpression.prototype;
            cloneResult = new QuestContentImpression(obj1);
          }
          if (tmp14) {
            cloneResult.start();
          }
          const impressionCache2 = tmp2Result.impressionCache;
          const result = impressionCache2.set(cacheKey, cloneResult);
          const tmp14 = tmp2Result.isChatViewable && !cloneResult.isRunning;
        }
      };
      tmp2Result.stopOne = (key) => {
        const impressionCache = tmp2Result.impressionCache;
        const value = impressionCache.get(key);
        let isRunning;
        if (null != value) {
          isRunning = value.isRunning;
        }
        if (null != value) {
          value.stop();
        }
        if (key.shouldDelete) {
          callback4();
          const impressionCache2 = tmp2Result.impressionCache;
          impressionCache2.del(key);
        }
        return null != isRunning && isRunning;
      };
      tmp2Result.stopMany = () => {
        let iter2;
        let tmp = arg0;
        if (arg0 === undefined) {
          let obj = { visibleEmbeds: [], shouldDeleteHiddenEmbeds: false };
          tmp = obj;
        }
        let visibleEmbeds = tmp.visibleEmbeds;
        if (visibleEmbeds === undefined) {
          visibleEmbeds = [];
        }
        let flag2 = tmp.shouldDeleteHiddenEmbeds;
        if (flag2 === undefined) {
          flag2 = false;
        }
        const impressionCache = tmp2Result.impressionCache;
        const tmp2 = callback5(impressionCache.keys());
        let iter = tmp2();
        if (!iter.done) {
          do {
            let value = iter.value;
            if (!set.has(value)) {
              let tmp3 = closure_0;
              obj = { key: value, shouldDelete: flag2 };
              let stopOneResult = closure_0.stopOne(obj);
            }
            iter2 = tmp2();
            iter = iter2;
          } while (!iter2.done);
        }
      };
      tmp2Result.getCacheKey = (channelId) => channelId.channelId + ":" + channelId.messageId + ":" + channelId.questId;
      tmp2Result.parseCacheKey = (str) => {
        const tmp = callback(str.split(":"), 3);
        return { channelId: tmp[0], messageId: tmp[1], questId: tmp[2] };
      };
      tmp2Result.isOnChannelNavigationRoute = () => {
        let isChannelFocusedResult = tmp2Result(closure_2[25]).isChannelFocused();
        tmp2Result(closure_2[26]);
        if (isChannelFocusedResult) {
          isChannelFocusedResult = "channel" === tmp3;
        }
        return isChannelFocusedResult;
      };
      tmp2Result.isSearchShowing = () => {
        let tmp = null != tmp2Result.chatChannelId;
        if (tmp) {
          tmp = callback2(tmp2Result.chatChannelId);
        }
        return tmp;
      };
      tmp2Result.getIsChatViewable = () => {
        if (null == tmp2Result.chatChannelId) {
          callback4();
          return false;
        } else if (closure_10.isOpen()) {
          callback4();
          return false;
        } else {
          const state = store4.getState();
          if (state !== tmp2Result(closure_2[27]).AppStates.ACTIVE) {
            callback4();
            return false;
          } else {
            const channel = store2.getChannel(tmp2Result.chatChannelId);
            let type;
            if (null != channel) {
              type = channel.type;
            }
            const chatOpen = uiStore.getChatOpen(tmp2Result.chatChannelId);
            const tmp11 = type === tmp2Result(closure_2[28]).ChannelTypes.GUILD_STAGE_VOICE && chatOpen;
            const openModalKey = tmp2Result(closure_2[26]).getOpenModalKey();
            const _HermesInternal = HermesInternal;
            if (null != openModalKey) {
              if (openModalKey !== "voice-channel-" + tmp2Result.chatChannelId) {
                callback4();
                return false;
              }
            }
            if (tmp2Result.isSearchShowing()) {
              callback4();
              return false;
            } else {
              if (null == store3.getAlert()) {
                const useAlertStore = tmp2Result(closure_2[29]).useAlertStore;
                if (useAlertStore.getState().alerts.length <= 0) {
                  const tmp21 = type === tmp2Result(closure_2[28]).ChannelTypes.GUILD_VOICE && chatOpen;
                  let result = null != type;
                  if (result) {
                    result = callback3(type);
                  }
                  const state1 = store.getState();
                  if (result) {
                    result = tmp2Result.isOnChannelNavigationRoute();
                  }
                  if (result) {
                    result = !isAnyVoicePanelOpenResult;
                  }
                  if (result) {
                    result = !tmp11;
                  }
                  if (result) {
                    result = !tmp21;
                  }
                  if (!result) {
                    result = tmp11;
                  }
                  if (!result) {
                    result = tmp21;
                  }
                  callback4(tmp2Result.chatChannelId);
                  return result;
                }
              }
              callback4();
              return false;
            }
            const obj = tmp2Result(closure_2[26]);
          }
        }
      };
      tmp2Result.updateImpressionsForChatBecameViewable = () => {
        let iter3;
        callback4();
        const impressionCache = tmp2Result.impressionCache;
        const tmp2 = callback5(impressionCache.keys());
        const iter = tmp2();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp3 = closure_0;
            let impressionCache2 = closure_0.impressionCache;
            value = impressionCache2.get(value);
            if (null != value) {
              let tmp16 = closure_0;
              let channelId = closure_0.parseCacheKey(value).channelId;
              if (value.isRunning) {
                let tmp4 = closure_24;
                let tmp5 = closure_0;
                let tmp6 = closure_24(closure_0.chatChannelId);
                let obj = { key: value, shouldDelete: false };
                let stopOneResult = closure_0.stopOne(obj);
              }
              let tmp8 = closure_0;
              let tmp9 = channelId;
              if (channelId === closure_0.chatChannelId) {
                let tmp10 = closure_24;
                let tmp11 = closure_0;
                let tmp12 = closure_24(closure_0.chatChannelId);
                obj = { triggeredByStatusChange: false };
                let cloneResult = value.clone(obj);
                let startResult = cloneResult.start();
                let impressionCache3 = closure_0.impressionCache;
                let result = impressionCache3.set(value, cloneResult);
                let tmp15 = channelId;
              }
            }
            iter3 = tmp2();
            iter2 = iter3;
          } while (!iter3.done);
        }
      };
      tmp2Result.refreshImpressions = () => {
        if (tmp2Result.isChatViewable) {
          const result = tmp2Result.updateImpressionsForChatBecameViewable();
        } else {
          callback4();
          tmp2Result.stopMany();
        }
      };
      tmp2Result.checkChatViewable = () => {
        const isChatViewable = tmp2Result.getIsChatViewable();
        let flag = isChatViewable !== tmp2Result.isChatViewable;
        if (flag) {
          callback4();
          tmp2Result.isChatViewable = isChatViewable;
          tmp2Result.refreshImpressions();
          flag = true;
        }
        return flag;
      };
      tmp2Result.checkIsOnChannelNavigationRoute = () => {
        const result = tmp2Result.isOnChannelNavigationRoute();
        if (result !== tmp2Result.wasOnChannelNavigationRoute) {
          callback4();
          tmp2Result.checkChatViewable();
          tmp2Result.wasOnChannelNavigationRoute = result;
        }
      };
      tmp2Result.checkSearchShowing = () => {
        const isSearchShowingResult = tmp2Result.isSearchShowing();
        if (isSearchShowingResult !== tmp2Result.wasSearchShowing) {
          callback4();
          tmp2Result.checkChatViewable();
          tmp2Result.wasSearchShowing = isSearchShowingResult;
        }
      };
      tmp2Result.onChannelChanged = (chatChannelId) => {
        tmp2Result.previousChatChannelId = tmp2Result.chatChannelId;
        tmp2Result.chatChannelId = chatChannelId;
        callback4(tmp2Result.chatChannelId);
        tmp2Result.stopMany({ shouldDeleteHiddenEmbeds: true });
        if (!tmp2Result.checkChatViewable()) {
          tmp2Result.refreshImpressions();
        }
      };
      tmp2Result.checkOpenModalKey = () => {
        const openModalKey = tmp2Result(closure_2[26]).getOpenModalKey();
        if (openModalKey !== tmp2Result.previouslyOpenModalKey) {
          callback4(tmp2Result.previouslyOpenModalKey);
          tmp2Result.checkChatViewable();
          tmp2Result.previouslyOpenModalKey = openModalKey;
        }
      };
      tmp2Result.handleQuestStoreChanged = () => {
        let iter3;
        callback4();
        const quests = quests.quests;
        const impressionCache = tmp2Result.impressionCache;
        const tmp2 = callback5(impressionCache.keys());
        const iter = tmp2();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp4 = closure_0;
            let parseCacheKeyResult = closure_0.parseCacheKey(value);
            let tmp6 = tmp3;
            if (set.has(parseCacheKeyResult.questId)) {
              value = quests.get(parseCacheKeyResult.questId);
              let tmp8 = closure_0;
              let tmp9 = closure_0.questStatuses[parseCacheKeyResult.questId];
              let questStatus = null;
              if (null != value) {
                let tmp11 = closure_0;
                let tmp12 = closure_2;
                let obj2 = closure_0(closure_2[30]);
                questStatus = obj2.getQuestStatus(value);
              }
              let tmp13 = value;
              tmp6 = tmp3;
              let tmp14 = questStatus;
              let tmp15 = tmp9;
              if (questStatus !== tmp9) {
                let tmp32 = closure_0;
                closure_0.questStatuses[parseCacheKeyResult.questId] = questStatus;
                let tmp33 = value;
                let tmp34 = tmp9;
                let tmp35 = questStatus;
                tmp6 = tmp3;
                if (closure_0.isChatViewable) {
                  let tmp16 = closure_0;
                  let impressionCache2 = closure_0.impressionCache;
                  value = impressionCache2.get(value);
                  let isRunning;
                  if (null != value) {
                    isRunning = value.isRunning;
                  }
                  let tmp18 = value;
                  let tmp19 = tmp9;
                  let tmp20 = questStatus;
                  tmp6 = value;
                  if (true === isRunning) {
                    if (null != value) {
                      let obj = { triggeredByStatusChange: true };
                      let cloneResult = value.clone(obj);
                      let startResult = cloneResult.start();
                      let tmp27 = closure_0;
                      let impressionCache3 = closure_0.impressionCache;
                      let result = impressionCache3.set(value, cloneResult);
                      let tmp29 = value;
                      let tmp30 = tmp9;
                      let tmp31 = questStatus;
                      tmp6 = value;
                    } else {
                      let tmp21 = closure_0;
                      obj = { key: value, shouldDelete: true };
                      let stopOneResult = closure_0.stopOne(obj);
                      let tmp23 = value;
                      let tmp24 = tmp9;
                      let tmp25 = questStatus;
                      tmp6 = value;
                    }
                  }
                }
              }
            }
            iter3 = tmp2();
            let tmp3 = tmp6;
            iter2 = iter3;
          } while (!iter3.done);
        }
      };
      tmp2Result.handleSelectedChannelStoreChanged = () => {
        callback4();
        const channelId = channelId.getChannelId();
        if (channelId !== tmp2Result.chatChannelId) {
          const channel = store2.getChannel(tmp2Result.chatChannelId);
          let type;
          if (null != channel) {
            type = channel.type;
          }
          let hasItem = null != type;
          if (hasItem) {
            const items = [tmp2Result(closure_2[28]).ChannelTypes.GUILD_STAGE_VOICE, tmp2Result(closure_2[28]).ChannelTypes.GUILD_VOICE];
            let type1;
            if (null != channel) {
              type1 = channel.type;
            }
            hasItem = items.includes(type1);
          }
          if (!tmp9) {
            callback4(tmp2Result.chatChannelId);
            tmp2Result.onChannelChanged(channelId);
          }
          const tmp9 = null != tmp2Result.chatChannelId && hasItem;
        }
      };
      tmp2Result.handleActionSheetStoreChanged = () => {
        callback4();
        const isOpenResult = closure_10.isOpen();
        if (isOpenResult !== tmp2Result.wasActionSheetOpen) {
          callback4();
          tmp2Result.checkChatViewable();
          tmp2Result.wasActionSheetOpen = isOpenResult;
        }
      };
      tmp2Result.handleAppStateStoreChanged = () => {
        callback4();
        const state = store4.getState();
        const tmp3 = state === tmp2Result(closure_2[27]).AppStates.ACTIVE;
        if (tmp2Result.wasAppActive !== tmp3) {
          callback4();
          tmp2Result.checkChatViewable();
          tmp2Result.wasAppActive = tmp3;
        }
      };
      tmp2Result.handleVoicePanelStoreChanged = () => {
        callback4();
        const state = store.getState();
        const isAnyVoicePanelOpenResult = state.isAnyVoicePanelOpen();
        if (isAnyVoicePanelOpenResult !== tmp2Result.wasAnyVoicePanelOpen) {
          callback4();
          tmp2Result.checkChatViewable();
          tmp2Result.wasAnyVoicePanelOpen = isAnyVoicePanelOpenResult;
        }
      };
      tmp2Result.handleChannelDetailsStoreChanged = () => {
        tmp2Result.checkSearchShowing();
      };
      tmp2Result.handleChannelRTCStoreChanged = () => {
        let tmp21;
        let value;
        callback4();
        const allChatOpen = uiStore.getAllChatOpen();
        const items = [...Object.keys(closure_0.channelsWithChatOpen), ...Object.keys(allChatOpen)];
        const tmp4 = callback5(new Set(items));
        const iter = tmp4();
        let iter2 = iter;
        if (!iter.done) {
          while (true) {
            value = iter2.value;
            let tmp9 = store2;
            let channel = store2.getChannel(value);
            let type;
            if (null != channel) {
              type = channel.type;
            }
            let tmp12 = tmp5;
            let tmp13 = tmp6;
            let tmp14 = tmp7;
            let tmp15 = tmp8;
            if (null != type) {
              let tmp31 = tmp2Result;
              let tmp32 = closure_2;
              let items1 = [tmp2Result(closure_2[28]).ChannelTypes.GUILD_STAGE_VOICE, tmp2Result(closure_2[28]).ChannelTypes.GUILD_VOICE];
              let type1;
              if (null != channel) {
                type1 = channel.type;
              }
              tmp12 = tmp5;
              tmp13 = tmp6;
              tmp14 = tmp7;
              tmp15 = tmp8;
              if (items1.includes(type1)) {
                let tmp17 = tmp2Result;
                let tmp18 = tmp2Result.channelsWithChatOpen[value];
                let tmp19 = null != tmp18 && tmp18;
                let tmp20 = allChatOpen[value];
                tmp21 = null != tmp20 && tmp20;
                tmp12 = tmp18;
                tmp13 = tmp20;
                tmp14 = tmp19;
                tmp15 = tmp21;
                if (tmp19 !== tmp21) {
                  break;
                }
              }
            }
            let iter3 = tmp4();
            let tmp5 = tmp12;
            let tmp6 = tmp13;
            let tmp7 = tmp14;
            let tmp8 = tmp15;
            iter2 = iter3;
          }
          if (tmp21) {
            if (value !== tmp2Result.chatChannelId) {
              tmp2Result.onChannelChanged(value);
            }
          }
          if (!tmp21) {
            if (tmp2Result.previousChatChannelId !== tmp2Result.chatChannelId) {
              tmp2Result.onChannelChanged(tmp2Result.previousChatChannelId);
            }
          }
          tmp2Result.checkChatViewable();
        }
        const merged = Object.assign(allChatOpen);
        tmp2Result.channelsWithChatOpen = {};
      };
      tmp2Result.handleNavigationStateChanged = () => {
        callback4();
        const result = tmp2Result.checkIsOnChannelNavigationRoute();
        tmp2Result.checkOpenModalKey();
      };
      tmp2Result.handleAlertStoreChanged = () => {
        let tmp = null != store3.getAlert();
        if (!tmp) {
          const useAlertStore = tmp2Result(closure_2[29]).useAlertStore;
          tmp = useAlertStore.getState().alerts.length > 0;
        }
        if (tmp !== tmp2Result.wasAlertOpen) {
          callback4();
          tmp2Result.checkChatViewable();
          tmp2Result.wasAlertOpen = tmp;
        }
      };
      tmp2Result.unsubscribeFromVoicePanelStore = () => {

      };
      tmp2Result.unsubscribeFromChannelDetailsStore = () => {

      };
      tmp2Result.unsubscribeFromAlertStore = () => {

      };
      map = new Map();
      result = map.set(closure_20, tmp2Result.handleQuestStoreChanged);
      result1 = result.set(closure_17, tmp2Result.handleSelectedChannelStoreChanged);
      result2 = result1.set(closure_10, tmp2Result.handleActionSheetStoreChanged);
      result3 = result2.set(closure_19, tmp2Result.handleAppStateStoreChanged);
      result4 = result3.set(closure_11, tmp2Result.handleChannelRTCStoreChanged);
      tmp2Result.stores = result4.set(closure_18, tmp2Result.handleAlertStoreChanged);
      tmp2Result.actions = { QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED: tmp2Result.handleVisibleMessagesChanged };
      return tmp2Result;
    }
  }
  const arg1 = QuestMobileEmbedVisibilityManager;
  callback2(QuestMobileEmbedVisibilityManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const self = this;
      const rootNavigationRef = QuestMobileEmbedVisibilityManager(closure_2[31]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", self.handleNavigationStateChanged);
      }
      self.unsubscribeFromVoicePanelStore = closure_14.subscribe(self.handleVoicePanelStoreChanged);
      self.unsubscribeFromChannelDetailsStore = closure_12.subscribe(self.handleChannelDetailsStoreChanged);
      const useAlertStore = QuestMobileEmbedVisibilityManager(closure_2[29]).useAlertStore;
      self.unsubscribeFromAlertStore = useAlertStore.subscribe(self.handleAlertStoreChanged);
      callback5(QuestMobileEmbedVisibilityManager, "_initialize", self, 3)([]);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      const rootNavigationRef = QuestMobileEmbedVisibilityManager(closure_2[31]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.removeListener("state", self.handleNavigationStateChanged);
      }
      const result = self.unsubscribeFromVoicePanelStore();
      const result1 = self.unsubscribeFromChannelDetailsStore();
      const result2 = self.unsubscribeFromAlertStore();
      callback5(QuestMobileEmbedVisibilityManager, "_terminate", self, 3)([]);
    }
  };
  items[1] = obj;
  return callback(QuestMobileEmbedVisibilityManager, items);
}(importDefault(dependencyMap[32]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx");

export default tmp3;
