// Module ID: 9870
// Function ID: 76423
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9870 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function fetchMessages(arg0) {
  let avoidInitialScroll;
  let channelId;
  let fetchKey;
  let forceFetch;
  let guildId;
  let isPreload;
  let messageId;
  let skipLocalFetch;
  ({ guildId, channelId, messageId, forceFetch, isPreload, skipLocalFetch, avoidInitialScroll, fetchKey } = arg0);
  if (null != channelId) {
    if (!isStaticChannelRoute(channelId)) {
      const channel = store2.getChannel(channelId);
      let type;
      if (null != channel) {
        type = channel.type;
      }
      if (type !== constants.GUILD_STORE) {
        let type1;
        if (null != channel) {
          type1 = channel.type;
        }
        if (null == type1) {
          let obj1 = importDefault(dependencyMap[19]);
          const orCreate = obj1.getOrCreate(channelId);
          let orCreate1 = orCreate;
          if (orCreate.some(arg1(dependencyMap[20]).messageHasExpiredAttachmentUrl)) {
            importDefaultResult.log("Found expired attachment link, clearing messages");
            let obj5 = importDefault(dependencyMap[19]);
            obj5.clear(channelId);
            let obj6 = importDefault(dependencyMap[19]);
            orCreate1 = obj6.getOrCreate(channelId);
          }
          let obj7 = orCreate1;
          if (tmp15) {
            let obj = { items: true, keyboardShouldPersistTaps: true, jumpType: arg1(dependencyMap[21]).JumpType.ANIMATED };
            const mutation = orCreate1.mutate(obj);
            let obj9 = importDefault(dependencyMap[19]);
            obj9.commit(mutation);
            obj7 = mutation;
          }
          let obj10 = obj7;
          if (tmp21) {
            obj = { focusTargetId: null };
            const mutation1 = obj7.mutate(obj);
            importDefault(dependencyMap[19]).commit(mutation1);
            obj10 = mutation1;
            const obj12 = importDefault(dependencyMap[19]);
          }
          if (isPreload) {
            if (!closure_10.isConnected()) {
              let flag = true;
            }
            let hasUnreadResult = importDefault(dependencyMap[22])(channelId);
            if (hasUnreadResult) {
              hasUnreadResult = closure_15.hasUnread(channelId);
            }
            if (hasUnreadResult) {
              flag = true;
            }
            if (flag) {
              obj1 = { loadingMore: true };
              importDefault(dependencyMap[19]).commit(obj10.mutate(obj1));
              if (null == messageId) {
                if (null != channel) {
                  if (channel.isThread()) {
                    let flag4 = false;
                    if (!closure_15.hasOpenedThread(channelId)) {
                      if (null == obj2) {
                        const Storage = arg1(dependencyMap[25]).Storage;
                        let obj2 = Storage.get(closure_29, {});
                        if (null == obj2) {
                          obj2 = {};
                        }
                      }
                      flag4 = false;
                      if (!(channelId in obj2)) {
                        const _Date = Date;
                        obj2[channelId] = Date.now();
                        const _Date2 = Date;
                        for (const key10150 in closure_27) {
                          let tmp75 = key10150;
                          let tmp76 = closure_27;
                          if (closure_27[key10150] >= tmp48) {
                            continue;
                          } else {
                            let tmp50 = closure_27;
                            delete r19[r20];
                            // continue
                          }
                          continue;
                        }
                        const Storage2 = arg1(dependencyMap[25]).Storage;
                        const result = Storage2.set(closure_29, obj2);
                        flag4 = true;
                      }
                    }
                    if (flag4) {
                      const _HermesInternal2 = HermesInternal;
                      importDefaultResult.log("Jumping to start of thread " + channel.id);
                      const obj3 = { channelId };
                      const obj26 = importDefault(dependencyMap[23]);
                      obj3.limit = arg1(dependencyMap[24]).getMessageLimit("MessageManager.threadStart");
                      const obj4 = { messageId: channelId, flash: false };
                      obj3.jump = obj4;
                      obj3.isPreload = isPreload;
                      obj3.skipLocalFetch = skipLocalFetch;
                      obj3.avoidInitialScroll = avoidInitialScroll;
                      obj3.fetchKey = fetchKey;
                      return obj26.fetchMessages(obj3);
                    }
                  }
                }
                if (null != channel) {
                  if (channel.isThread()) {
                    if (closure_15.hasTrackedUnread(channel.id)) {
                      if (!obj10.ready) {
                        const trackedAckMessageId = closure_15.getTrackedAckMessageId(channel.id);
                        const _HermesInternal = HermesInternal;
                        importDefaultResult.log("Jumping to most recent message in thread " + channel.id + " - " + trackedAckMessageId);
                        obj5 = { channelId };
                        const obj18 = importDefault(dependencyMap[23]);
                        obj5.limit = arg1(dependencyMap[24]).getMessageLimit("MessageManager.threadUnread");
                        obj6 = { messageId: trackedAckMessageId };
                        obj5.jump = obj6;
                        obj5.isPreload = isPreload;
                        obj5.skipLocalFetch = skipLocalFetch;
                        obj5.avoidInitialScroll = avoidInitialScroll;
                        obj5.fetchKey = fetchKey;
                        return obj18.fetchMessages(obj5);
                      }
                    }
                  }
                }
                obj7 = { channelId };
                const obj22 = importDefault(dependencyMap[23]);
                obj7.limit = arg1(dependencyMap[24]).getMessageLimit("MessageManager.initialFetch");
                obj7.isPreload = isPreload;
                obj7.skipLocalFetch = skipLocalFetch;
                const obj8 = { jumpType: arg1(dependencyMap[21]).JumpType.ANIMATED };
                obj7.jump = obj8;
                obj7.avoidInitialScroll = avoidInitialScroll;
                obj7.fetchKey = fetchKey;
                return obj22.fetchMessages(obj7);
              } else {
                obj9 = { channelId, messageId, flash: true, isPreload, skipLocalFetch, jumpType: tmp, avoidInitialScroll };
                importDefault(dependencyMap[23]).jumpToMessage(obj9);
                const obj15 = importDefault(dependencyMap[23]);
              }
              const obj13 = importDefault(dependencyMap[19]);
            }
          }
          if (!obj10.loadingMore) {
            let tmp27 = null != guildId;
            if (tmp27) {
              tmp27 = null == guild.getGuild(guildId);
            }
            flag = forceFetch;
            if (!tmp27) {
              flag = true;
            }
          }
          flag = forceFetch;
          if (null != messageId) {
            flag = true;
          }
          const tmp15 = null != orCreate1.jumpTargetId && null == messageId;
          const tmp21 = null != obj7.focusTargetId && null == messageId;
        } else {
          const GUILD_THREADS_ONLY = constants3.GUILD_THREADS_ONLY;
        }
      }
    }
  }
}
function handleConnectionOpen() {
  const channelId = store3.getChannelId();
  if (null != channelId) {
    const first = callback3(openChatChannelIds.getOpenChatChannelIds(), 1)[0];
    if (null != first) {
      if (first !== channelId) {
        const channel = store2.getChannel(first);
        if (null != channel) {
          let obj = { guildId: channel.getGuildId(), channelId: channel.id };
          fetchMessages(obj);
        }
      }
    }
    const channel1 = store2.getChannel(channelId);
    if (null != channel1) {
      const obj5 = arg1(dependencyMap[26]);
      obj = { path: closure_22.CHANNEL(":guild", ":channel", ":message"), exact: true };
      const matchPathResult = obj5.matchPath(arg1(dependencyMap[27]).getHistory().location.pathname, obj);
      const obj1 = { channelId: channel1.id };
      let message;
      if (null != matchPathResult) {
        const params = matchPathResult.params;
        if (null != params) {
          message = params.message;
        }
      }
      obj1.messageId = message;
      const obj2 = { guildId: channel1.getGuildId(), channelId: channel1.id, messageId: obj1.messageId, avoidInitialScroll: null != obj1.messageId };
      fetchMessages(obj2);
      maybeLoadChannelSplitView(channel1.getGuildId(), channel1.id);
      const obj6 = arg1(dependencyMap[27]);
    }
  }
}
function loadSelectedChannelIfNecessary() {
  const channelId = store3.getChannelId();
  if (null != channelId) {
    const channel = store2.getChannel(channelId);
    if (null != channel) {
      if (isTextChannel(channel.type)) {
        let obj = importDefault(dependencyMap[19]);
        const orCreate = obj.getOrCreate(channelId);
        if (!tmp7) {
          obj = { guildId: channel.getGuildId(), channelId: channel.id };
          fetchMessages(obj);
        }
        maybeLoadChannelSplitView(channel.getGuildId(), channel.id);
        const tmp7 = orCreate.ready && orCreate.hasFetched;
      } else {
        maybeLoadChannelSplitView(channel.getGuildId(), channel.id);
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
    maybeLoadChannelSplitView(guildId, channelId);
  }
}
function handleVoiceChannelSelect(guildId) {
  fetchMessages({ guildId: guildId.guildId, channelId: guildId.channelId });
}
function handleJumpToVoiceChannelMessage(guildId) {
  fetchMessages({ guildId: guildId.guildId, channelId: guildId.channelId, messageId: guildId.messageId, jumpType: guildId.jumpType });
}
function maybeLoadChannelSplitView(guildId, channelId) {
  const currentSidebarChannelId = store.getCurrentSidebarChannelId(channelId);
  if (null != currentSidebarChannelId) {
    const obj = { guildId, channelId: currentSidebarChannelId, messageId: store.getCurrentSidebarMessageId(channelId) };
    fetchMessages(obj);
  }
}
function handleChannelSectionStoreChange() {
  const channelId = store3.getChannelId();
  const guildId = guildId.getGuildId();
  if (null != guildId) {
    if (null != channelId) {
      const sidebarState = store.getSidebarState(channelId);
      let type;
      if (null != sidebarState) {
        type = sidebarState.type;
      }
      if (type !== arg1(dependencyMap[28]).SidebarType.VIEW_CHANNEL) {
        maybeLoadChannelSplitView(guildId, channelId);
      }
    }
  }
}
function handleChannelPreload(context) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = context);
  if (context.context === closure_19) {
    const obj = { guildId, channelId };
    fetchMessages(obj);
    maybeLoadChannelSplitView(guildId, channelId);
  }
}
function handleChannelCreate(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  let tmp = null != guild_id;
  if (tmp) {
    tmp = store3.getChannelId(guild_id) === channel.id;
  }
  if (tmp) {
    const obj = { guildId: guild_id, channelId: channel.id, messageId: channel.messageId };
    fetchMessages(obj);
  }
}
function handleMessageEditEnd(response) {
  response = response.response;
  if (null != response) {
    if (null != response.body) {
      if (response.body.code === constants2.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        const retry_after = response.body.retry_after;
        if (null != retry_after) {
          let obj = importDefault(dependencyMap[29]);
          obj = {};
          const intl = arg1(dependencyMap[30]).intl;
          obj.title = intl.string(arg1(dependencyMap[30]).t.Whhv4w);
          const intl2 = arg1(dependencyMap[30]).intl;
          obj = {};
          const _Math = Math;
          obj.retryAfterMinutes = Math.ceil(retry_after / 60);
          obj.body = intl2.formatToPlainString(arg1(dependencyMap[30]).t.qoxdQB, obj);
          obj.show(obj);
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
  ({ channelId, isStale, isPreview } = jump);
  if (isPreview === undefined) {
    isPreview = false;
  }
  if (!isPreview) {
    let num = 0;
    if (null != closure_30[channelId]) {
      num = tmp2;
    }
    const _Date = Date;
    if (Date.now() - num >= closure_25) {
      const _Date2 = Date;
      closure_30[channelId] = Date.now();
      channelId = store3.getChannelId();
      const currentSidebarChannelId = store.getCurrentSidebarChannelId(channelId);
      if (isStale) {
        isStale = closure_10.isConnected();
      }
      if (isStale) {
        isStale = channelId === channelId || channelId === currentSidebarChannelId;
        const tmp7 = channelId === channelId || channelId === currentSidebarChannelId;
      }
      if (isStale) {
        let obj = importDefault(dependencyMap[23]);
        obj = { channelId, limit: arg1(dependencyMap[24]).getMessageLimit("MessageManager.staleFetch"), jump: jump.jump };
        const messages = obj.fetchMessages(obj);
        const obj3 = arg1(dependencyMap[24]);
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
    let obj = importDefault(dependencyMap[31]);
    obj = { type: "MESSAGE_SEND_FAILED", channelId, messageId };
    let tmp5 = null;
    if (null != reason) {
      tmp5 = reason;
    }
    obj.reason = tmp5;
    obj.shouldNotify = false !== shouldSendNotification;
    obj.dispatch(obj);
  }
}
function handleAppWillBecomeActive() {
  const channelId = store3.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const newLocalMessages = importDefault(dependencyMap[23]).fetchNewLocalMessages(channelId, closure_18);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const isTextChannel = arg1(dependencyMap[8]).isTextChannel;
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
({ MAX_MESSAGES_PER_CHANNEL: closure_18, CURRENT_APP_CONTEXT: closure_19, ChannelTypes: closure_20, AbortCodes: closure_21, Routes: closure_22, ChannelTypesSets: closure_23 } = arg1(dependencyMap[15]));
const isStaticChannelRoute = arg1(dependencyMap[16]).isStaticChannelRoute;
let closure_25 = 10 * importDefault(dependencyMap[17]).Millis.SECOND;
let importDefaultResult = importDefault(dependencyMap[18]);
importDefaultResult = new importDefaultResult("MessageManager");
let closure_28 = 90 * importDefault(dependencyMap[17]).Millis.DAY;
let closure_29 = "viewedThreadIds";
let closure_30 = {};
let tmp5 = (arg0) => {
  class MessageManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, MessageManager);
      items1 = [...items];
      obj = closure_6(MessageManager);
      tmp2 = closure_5;
      if (closure_31()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.fetchMessages = closure_32;
      tmp2Result.loadSelectedChannelIfNecessary = closure_34;
      map = new Map();
      tmp2Result.stores = map.set(closure_12, closure_39);
      obj = {
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: closure_45,
        OVERLAY_INITIALIZE: closure_33,
        CHANNEL_SELECT: closure_35,
        VOICE_CHANNEL_SELECT: closure_36,
        THREAD_CREATE: closure_41,
        THREAD_LIST_SYNC() {
              callback();
            },
        CHANNEL_CREATE: closure_41,
        CHANNEL_PRELOAD: closure_40,
        GUILD_CREATE() {
              callback();
            },
        MESSAGE_END_EDIT: closure_42,
        LOAD_MESSAGES_SUCCESS: closure_43,
        UPLOAD_FAIL: closure_44,
        CHANNEL_DELETE() {
              callback();
            },
        THREAD_DELETE() {
              callback();
            },
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: closure_37
      };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = MessageManager;
  callback2(MessageManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const subscription = callback(closure_2[31]).subscribe("CONNECTION_OPEN", closure_33);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_2[31]).unsubscribe("CONNECTION_OPEN", closure_33);
    }
  };
  items[1] = obj;
  return callback(MessageManager, items);
}(importDefault(dependencyMap[32]));
tmp5 = new tmp5();
const tmp2 = arg1(dependencyMap[15]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/messages/MessageManager.tsx");

export default tmp5;
