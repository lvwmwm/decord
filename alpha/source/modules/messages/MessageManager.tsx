// Module ID: 9936
// Function ID: 9937
// Name: MessageManager
// Dependencies: [32, 6923, 6648, 5023, 6942, 5019, 5041, 6922, 5073, 5201, 1072, 5026, 1089, 3, 9937, 6643, 9967, 5395, 6973, 7735, 9968, 510, 5206, 1099, 6944, 6116, 1113, 572, 7373, 2]

// Module 9936 (MessageManager)
import LoggerDefault from "Logger" /* 3 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1089 */;
import router_utils from "router_utils" /* 1099 */;
import intl3 from "intl" /* 1113 */;
import ChannelRecord from "ChannelRecord" /* 5023 */;
import ChannelConstants from "ChannelConstants" /* 5026 */;
import matchPathCompat from "matchPathCompat" /* 5206 */;
import flow_Client from "flow/Client" /* 5395 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6116 */;
import ChannelMessagesDefault from "ChannelMessages" /* 6643 */;
import SidebarActionTypes from "SidebarActionTypes" /* 6944 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7735 */;
import getNitroMessagePrefetchKey from "getNitroMessagePrefetchKey" /* 9937 */;
import AttachmentUrlUtilsAll from "AttachmentUrlUtils" /* 9967 */;
import getAdaptiveMessageLimit from "getAdaptiveMessageLimit" /* 9968 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6923 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6648 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6942 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import GuildStore from "GuildStore" /* 5041 */;
import ReadStateStore from "ReadStateStore" /* 6922 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5201 */;
import Constants from "Constants" /* 1072 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7373 */;
import size from "module_2" /* 2 */;

let map, obj4;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
function fetchMessages(arg0) {
  let avoidInitialScroll;
  let channelId;
  let fetchKey;
  let forceFetch;
  let guildId;
  let isPreload;
  let messageId;
  let obj12;
  let obj18;
  let obj24;
  let obj6;
  let obj9;
  let skipLocalFetch;
  ({ guildId, channelId, messageId, forceFetch, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey } = arg0);
  if (null != channelId) {
    if (!isStaticChannelRoute(channelId)) {
      let nitroMessagePrefetchKey;
      if (tmp2) {
        const obj = getNitroMessagePrefetchKey;
        nitroMessagePrefetchKey = obj.getNitroMessagePrefetchKey(channelId);
      }
      const channel = ChannelStore.getChannel(channelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      if (type !== constants.GUILD_STORE) {
        let type1;
        if (channel != null) {
          type1 = channel.type;
        }
        if (null == type1) {
          let flag;
          const obj3 = ChannelMessagesDefault;
          const orCreate = obj3.getOrCreate(channelId);
          let orCreate1 = orCreate;
          if (orCreate.some(AttachmentUrlUtilsAll.messageHasExpiredAttachmentUrl)) {
            logger.log("Found expired attachment link, clearing messages");
            const tmp11Result = ChannelMessagesDefault;
            tmp11Result.clear(channelId);
            const tmp11Result9 = ChannelMessagesDefault;
            orCreate1 = tmp11Result9.getOrCreate(channelId);
          }
          let obj7 = orCreate1;
          const tmp18 = null != orCreate1.jumpTargetId && null == messageId;
          if (tmp18) {
            const mutate = orCreate1.mutate;
            const obj2 = { jumpTargetId: null, jumped: false, jumpType: flow_Client.JumpType.ANIMATED };
            const mutation = mutate(obj2);
            const tmp11Result10 = ChannelMessagesDefault;
            tmp11Result10.commit(mutation);
            obj7 = mutation;
          }
          let obj10 = obj7;
          const tmp22 = null != obj7.focusTargetId && null == messageId;
          if (tmp22) {
            const mutation1 = obj7.mutate({ focusTargetId: null });
            const tmp11Result11 = ChannelMessagesDefault;
            tmp11Result11.commit(mutation1);
            obj10 = mutation1;
          }
          if (isPreload) {
            if (!GatewayConnectionStore.isConnected()) {
              flag = true;
            }
            const hasUnreadResult = tmp11(6973)(channelId) && ReadStateStore.hasUnread(channelId);
            if (hasUnreadResult) {
              flag = true;
            }
            if (flag) {
              const tmp11Result12 = ChannelMessagesDefault;
              tmp11Result12.commit(obj10.mutate({ loadingMore: true }));
              if (null == messageId) {
                let messageLimit;
                let isThreadResult;
                if (channel != null) {
                  isThreadResult = channel.isThread();
                }
                if (isThreadResult) {
                  let flag2 = false;
                  if (!ReadStateStore.hasOpenedThread(channelId)) {
                    if (null == obj4) {
                      const Storage = Storage3.Storage;
                      obj4 = Storage.get(viewedThreadIds, {});
                      if (obj4 == null) {
                        obj4 = {};
                      }
                    }
                    flag2 = false;
                    if (!(channelId in obj4)) {
                      const _Date = Date;
                      obj4[channelId] = Date.now();
                      const _Date2 = Date;
                      for (const key10139 in obj4) {
                        if (obj4[key10139] >= tmp41) {
                          continue;
                        } else {
                          delete obj4[tmp65];
                          continue;
                        }
                        continue;
                      }
                      const Storage2 = Storage3.Storage;
                      const result = Storage2.set(viewedThreadIds, obj4);
                      flag2 = true;
                    }
                  }
                  if (flag2) {
                    const _HermesInternal2 = HermesInternal;
                    logger.log("Jumping to start of thread " + channel.id);
                    const obj5 = { channelId, limit: obj24.getMessageLimit("MessageManager.threadStart"), jump: obj6, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey };
                    const fetchMessages3 = MessageActionCreatorsDefault.fetchMessages;
                    MessageActionCreatorsDefault;
                    obj24 = getAdaptiveMessageLimit;
                    obj6 = { messageId: channelId, flash: false };
                    return fetchMessages3(obj5);
                  }
                }
                let isThreadResult1;
                if (channel != null) {
                  isThreadResult1 = channel.isThread();
                }
                if (isThreadResult1) {
                  const obj16 = ReadStateStore;
                  if (ReadStateStore.hasTrackedUnread(channel.id)) {
                    if (!obj10.ready) {
                      const trackedAckMessageId = obj16.getTrackedAckMessageId(channel.id);
                      const _HermesInternal = HermesInternal;
                      logger.log("Jumping to most recent message in thread " + channel.id + " - " + trackedAckMessageId);
                      const obj8 = { channelId, limit: obj18.getMessageLimit("MessageManager.threadUnread"), jump: obj9, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey };
                      fetchMessages = MessageActionCreatorsDefault.fetchMessages;
                      MessageActionCreatorsDefault;
                      obj18 = getAdaptiveMessageLimit;
                      obj9 = { messageId: trackedAckMessageId, flash: false, offset: 1 };
                      return fetchMessages(obj8);
                    }
                  }
                }
                if (null != nitroMessagePrefetchKey) {
                  messageLimit = closure_15;
                } else {
                  const obj20 = getAdaptiveMessageLimit;
                  messageLimit = obj20.getMessageLimit("MessageManager.initialFetch");
                }
                const obj11 = { channelId, limit: messageLimit, isPreload, skipLocalFetch, jump: obj12, avoidInitialScroll, fetchKey, nitroPrefetchKey: nitroMessagePrefetchKey };
                obj12 = { jumpType: flow_Client.JumpType.ANIMATED };
                const fetchMessages2 = MessageActionCreatorsDefault.fetchMessages;
                MessageActionCreatorsDefault;
                return fetchMessages2(obj11);
              } else {
                const obj13 = { channelId, messageId, flash: true, isPreload, skipLocalFetch, jumpType: tmp, avoidInitialScroll, nitroPrefetchKey: nitroMessagePrefetchKey };
                const tmp11Result16 = MessageActionCreatorsDefault;
                tmp11Result16.jumpToMessage(obj13);
              }
            }
          }
          if (!obj10.loadingMore) {
            flag = forceFetch;
            const tmp26 = null != guildId && null == GuildStore.getGuild(guildId);
            if (!tmp26) {
              flag = true;
            }
          }
          flag = forceFetch;
          if (null != messageId) {
            flag = true;
          }
        } else {
          const GUILD_THREADS_ONLY = constants3.GUILD_THREADS_ONLY;
        }
      }
    }
  }
}
function handleConnectionOpen() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    const first = _slicedToArray(ChannelRTCStore.getOpenChatChannelIds(), 1)[0];
    if (null != first) {
      if (first !== channelId) {
        const channel = ChannelStore.getChannel(first);
        if (null != channel) {
          const obj = { guildId: channel.getGuildId(), channelId: channel.id };
          fetchMessages(obj);
        }
      }
    }
    const channel1 = ChannelStore.getChannel(channelId);
    if (null != channel1) {
      const id2 = channel1.id;
      const matchPath = matchPathCompat.matchPath;
      matchPathCompat;
      const obj2 = { path: closure_19.CHANNEL(":guild", ":channel", ":message"), exact: true };
      const obj7 = router_utils;
      const pathname = obj7.getHistory().location.pathname;
      const matchPathResult = matchPath(pathname, obj2);
      let message;
      if (matchPathResult != null) {
        const params = matchPathResult.params;
        if (params != null) {
          message = params.message;
        }
      }
      const obj3 = { guildId: channel1.getGuildId(), channelId: channel1.id, messageId: message, avoidInitialScroll: null != message };
      fetchMessages(obj3);
      const id = channel1.id;
      const guildId = channel1.getGuildId();
      const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(id);
      const obj5 = ChannelSectionStore;
      const tmp7 = fetchMessages;
      if (null != currentSidebarChannelId) {
        obj4 = { guildId, channelId: currentSidebarChannelId, messageId: obj5.getCurrentSidebarMessageId(id) };
        tmp7(obj4);
      }
    }
  }
}
function loadSelectedChannelIfNecessary() {
  let id2;
  let message;
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (isTextChannel(channel.type)) {
        const obj2 = ChannelMessagesDefault;
        const orCreate = obj2.getOrCreate(channelId);
        const tmp7 = orCreate.ready && orCreate.hasFetched;
        if (!tmp7) {
          ({ id: obj3.channelId, id: id2 } = channel);
          const obj5 = { guildId: channel.getGuildId(), channelId: null, messageId: message };
          const matchPath = matchPathCompat.matchPath;
          matchPathCompat;
          const obj7 = { path: closure_19.CHANNEL(":guild", ":channel", ":message"), exact: true };
          obj4 = router_utils;
          const pathname = obj4.getHistory().location.pathname;
          const matchPathResult = matchPath(pathname, obj7);
          message = undefined;
          const tmp8 = fetchMessages;
          if (matchPathResult != null) {
            const params = matchPathResult.params;
            if (params != null) {
              message = params.message;
            }
          }
          tmp8(obj5);
        }
        const id3 = channel.id;
        const guildId = channel.getGuildId();
        const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(id3);
        const obj6 = ChannelSectionStore;
        if (null != currentSidebarChannelId) {
          const obj8 = { guildId, channelId: currentSidebarChannelId, messageId: obj6.getCurrentSidebarMessageId(id3) };
          fetchMessages(obj8);
        }
      } else {
        const id = channel.id;
        const guildId1 = channel.getGuildId();
        const currentSidebarChannelId1 = ChannelSectionStore.getCurrentSidebarChannelId(id);
        const obj = ChannelSectionStore;
        if (null != currentSidebarChannelId1) {
          const obj9 = { guildId: guildId1, channelId: currentSidebarChannelId1, messageId: obj.getCurrentSidebarMessageId(id) };
          fetchMessages(obj9);
        }
      }
    }
  }
}
function handleChannelSelect(skipMessageFetch) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = skipMessageFetch);
  if (skipMessageFetch.skipMessageFetch) {
    return false;
  } else {
    const obj = { guildId, channelId, messageId: tmp, jumpType: tmp2 };
    fetchMessages(obj);
    const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    const obj2 = ChannelSectionStore;
    const tmp3 = fetchMessages;
    if (null != currentSidebarChannelId) {
      const obj3 = { guildId, channelId: currentSidebarChannelId, messageId: obj2.getCurrentSidebarMessageId(channelId) };
      tmp3(obj3);
    }
  }
}
function handleVoiceChannelSelect(guildId) {
  const obj = { guildId: guildId.guildId, channelId: guildId.channelId };
  fetchMessages(obj);
}
function handleJumpToVoiceChannelMessage(guildId) {
  const obj = { guildId: guildId.guildId, channelId: guildId.channelId, messageId: guildId.messageId, jumpType: guildId.jumpType };
  fetchMessages(obj);
}
function handleChannelSectionStoreChange() {
  const channelId = SelectedChannelStore.getChannelId();
  const guildId = SelectedGuildStore.getGuildId();
  if (null != guildId) {
    if (null != channelId) {
      const sidebarState = ChannelSectionStore.getSidebarState(channelId);
      let type;
      if (sidebarState != null) {
        type = sidebarState.type;
      }
      const tmp6 = type === SidebarActionTypes.SidebarType.VIEW_CHANNEL && sidebarState.channelId === channelId;
      if (!tmp6) {
        const currentSidebarChannelId = obj2.getCurrentSidebarChannelId(channelId);
        if (null != currentSidebarChannelId) {
          const obj = { guildId, channelId: currentSidebarChannelId, messageId: ChannelSectionStore.getCurrentSidebarMessageId(channelId) };
          fetchMessages(obj);
        }
      }
    }
  }
}
function handleChannelPreload(context) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = context);
  if (context.context === authStore4) {
    const obj = { guildId, channelId };
    fetchMessages(obj);
    const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId);
    const obj2 = ChannelSectionStore;
    const tmp = fetchMessages;
    if (null != currentSidebarChannelId) {
      const obj3 = { guildId, channelId: currentSidebarChannelId, messageId: obj2.getCurrentSidebarMessageId(channelId) };
      tmp(obj3);
    }
  }
}
function handleChannelCreate(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  let tmp = null != guild_id;
  const messageId = channel.messageId;
  if (tmp) {
    tmp = SelectedChannelStore.getChannelId(guild_id) === channel.id;
  }
  if (tmp) {
    const obj = { guildId: guild_id, channelId: channel.id, messageId };
    fetchMessages(obj);
  }
}
function handleMessageEditEnd(response) {
  let formatToPlainString;
  let intl;
  let obj2;
  let qoxdQB;
  response = response.response;
  if (null != response) {
    if (null != response.body) {
      if (response.body.code === constants2.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        const retry_after = response.body.retry_after;
        if (null != retry_after) {
          const obj = { title: intl.string(intl3.t.Whhv4w), body: formatToPlainString(qoxdQB, obj2) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl3.intl;
          const intl2 = intl3.intl;
          formatToPlainString = intl2.formatToPlainString;
          const _Math = Math;
          obj2 = { retryAfterMinutes: Math.ceil(retry_after / 60) };
          qoxdQB = intl3.t.qoxdQB;
          show(obj);
        }
      }
    }
  }
  return null;
}
function handleLoadMessagesSuccess(jump) {
  let channelId;
  let isPreview;
  let isStale;
  let obj2;
  ({ channelId, isStale, isPreview } = jump);
  jump = jump.jump;
  if (isPreview === undefined) {
    isPreview = false;
  }
  if (!isPreview) {
    let num = closure_37[channelId];
    const tmp = closure_37;
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    if (Date.now() - num >= closure_22) {
      const _Date2 = Date;
      tmp[channelId] = Date.now();
      const channelId1 = SelectedChannelStore.getChannelId();
      const currentSidebarChannelId = ChannelSectionStore.getCurrentSidebarChannelId(channelId1);
      if (isStale) {
        isStale = GatewayConnectionStore.isConnected();
      }
      if (isStale) {
        isStale = channelId === channelId1 || channelId === currentSidebarChannelId;
      }
      if (isStale) {
        const obj = { channelId, limit: obj2.getMessageLimit("MessageManager.staleFetch"), jump };
        fetchMessages = MessageActionCreatorsDefault.fetchMessages;
        MessageActionCreatorsDefault;
        obj2 = getAdaptiveMessageLimit;
        const messages = fetchMessages(obj);
      }
    }
  }
}
function handleUploadFail(arg0) {
  let channelId;
  let messageId;
  let reason;
  let shouldSendNotification;
  ({ messageId, reason } = arg0);
  let tmp2 = null != messageId;
  ({ channelId, shouldSendNotification } = arg0);
  if (tmp2) {
    tmp2 = true !== tmp;
  }
  if (tmp2) {
    const obj = { type: "MESSAGE_SEND_FAILED", channelId, messageId, reason, shouldNotify: false !== shouldSendNotification };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (reason == null) {
      reason = null;
    }
    dispatch(obj);
  }
}
function handleAppWillBecomeActive() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const obj = MessageActionCreatorsDefault;
    const newLocalMessages = obj.fetchNewLocalMessages(channelId, authStore3);
  }
}
const isTextChannel = ChannelRecord.isTextChannel;
({ MAX_MESSAGES_PER_CHANNEL: closure_14, MAX_MESSAGES_FOR_JUMP: closure_15, CURRENT_APP_CONTEXT: closure_16, ChannelTypes: closure_17, AbortCodes: closure_18, Routes: closure_19, ChannelTypesSets: closure_20 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
let closure_22 = 10 * DurationsDefault.Millis.SECOND;
let tmp3 = new LoggerDefault("MessageManager");
const logger = tmp3;
let closure_26 = 90 * DurationsDefault.Millis.DAY;
const viewedThreadIds = "viewedThreadIds";
let closure_37 = {};
class MessageManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.fetchMessages = fetchMessages;
    applyArgumentsResult.loadSelectedChannelIfNecessary = loadSelectedChannelIfNecessary;
    map = new Map();
    applyArgumentsResult.stores = map.set(ChannelSectionStore, handleChannelSectionStoreChange);
    const obj = {
      APP_STATE_UPDATE_WILL_BECOME_ACTIVE: handleAppWillBecomeActive,
      OVERLAY_INITIALIZE: handleConnectionOpen,
      CHANNEL_SELECT: handleChannelSelect,
      VOICE_CHANNEL_SELECT: handleVoiceChannelSelect,
      THREAD_CREATE: handleChannelCreate,
      THREAD_LIST_SYNC() {
        loadSelectedChannelIfNecessary();
      },
      CHANNEL_CREATE: handleChannelCreate,
      CHANNEL_PRELOAD: handleChannelPreload,
      GUILD_CREATE() {
        loadSelectedChannelIfNecessary();
      },
      MESSAGE_END_EDIT: handleMessageEditEnd,
      LOAD_MESSAGES_SUCCESS: handleLoadMessagesSuccess,
      UPLOAD_FAIL: handleUploadFail,
      CHANNEL_DELETE() {
        loadSelectedChannelIfNecessary();
      },
      THREAD_DELETE() {
        loadSelectedChannelIfNecessary();
      },
      CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: handleJumpToVoiceChannelMessage
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("CONNECTION_OPEN", handleConnectionOpen);
  }
}
const prototype = MessageManager.prototype;
const messageManager = new MessageManager();
let result = size.fileFinishedImporting("modules/messages/MessageManager.tsx");

export default messageManager;
