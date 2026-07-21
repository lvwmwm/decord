// Module ID: 9870
// Function ID: 76412
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
          let obj1 = importDefault(dependencyMap[17]);
          const orCreate = obj1.getOrCreate(channelId);
          let orCreate1 = orCreate;
          if (orCreate.some(arg1(dependencyMap[18]).messageHasExpiredAttachmentUrl)) {
            importDefaultResult.log("Found expired attachment link, clearing messages");
            let obj5 = importDefault(dependencyMap[17]);
            obj5.clear(channelId);
            let obj6 = importDefault(dependencyMap[17]);
            orCreate1 = obj6.getOrCreate(channelId);
          }
          let obj7 = orCreate1;
          if (tmp15) {
            let obj = { message: true, lineClamp: true, jumpType: arg1(dependencyMap[19]).JumpType.ANIMATED };
            const mutation = orCreate1.mutate(obj);
            let obj9 = importDefault(dependencyMap[17]);
            obj9.commit(mutation);
            obj7 = mutation;
          }
          let obj10 = obj7;
          if (tmp21) {
            obj = { focusTargetId: null };
            const mutation1 = obj7.mutate(obj);
            importDefault(dependencyMap[17]).commit(mutation1);
            obj10 = mutation1;
            const obj12 = importDefault(dependencyMap[17]);
          }
          if (isPreload) {
            if (!closure_8.isConnected()) {
              let flag = true;
            }
            let hasUnreadResult = importDefault(dependencyMap[20])(channelId);
            if (hasUnreadResult) {
              hasUnreadResult = closure_13.hasUnread(channelId);
            }
            if (hasUnreadResult) {
              flag = true;
            }
            if (flag) {
              obj1 = { loadingMore: true };
              importDefault(dependencyMap[17]).commit(obj10.mutate(obj1));
              if (null == messageId) {
                if (null != channel) {
                  if (channel.isThread()) {
                    let flag4 = false;
                    if (!closure_13.hasOpenedThread(channelId)) {
                      if (null == obj2) {
                        const Storage = arg1(dependencyMap[23]).Storage;
                        let obj2 = Storage.get(closure_27, {});
                        if (null == obj2) {
                          obj2 = {};
                        }
                      }
                      flag4 = false;
                      if (!(channelId in obj2)) {
                        const _Date = Date;
                        obj2[channelId] = Date.now();
                        const _Date2 = Date;
                        for (const key10150 in closure_25) {
                          let tmp75 = key10150;
                          let tmp76 = closure_25;
                          if (closure_25[key10150] >= tmp48) {
                            continue;
                          } else {
                            let tmp50 = closure_25;
                            delete r19[r20];
                            // continue
                          }
                          continue;
                        }
                        const Storage2 = arg1(dependencyMap[23]).Storage;
                        const result = Storage2.set(closure_27, obj2);
                        flag4 = true;
                      }
                    }
                    if (flag4) {
                      const _HermesInternal2 = HermesInternal;
                      importDefaultResult.log("Jumping to start of thread " + channel.id);
                      const obj3 = { channelId };
                      const obj26 = importDefault(dependencyMap[21]);
                      obj3.limit = arg1(dependencyMap[22]).getMessageLimit("MessageManager.threadStart");
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
                    if (closure_13.hasTrackedUnread(channel.id)) {
                      if (!obj10.ready) {
                        const trackedAckMessageId = closure_13.getTrackedAckMessageId(channel.id);
                        const _HermesInternal = HermesInternal;
                        importDefaultResult.log("Jumping to most recent message in thread " + channel.id + " - " + trackedAckMessageId);
                        obj5 = { channelId };
                        const obj18 = importDefault(dependencyMap[21]);
                        obj5.limit = arg1(dependencyMap[22]).getMessageLimit("MessageManager.threadUnread");
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
                const obj22 = importDefault(dependencyMap[21]);
                obj7.limit = arg1(dependencyMap[22]).getMessageLimit("MessageManager.initialFetch");
                obj7.isPreload = isPreload;
                obj7.skipLocalFetch = skipLocalFetch;
                const obj8 = { jumpType: arg1(dependencyMap[19]).JumpType.ANIMATED };
                obj7.jump = obj8;
                obj7.avoidInitialScroll = avoidInitialScroll;
                obj7.fetchKey = fetchKey;
                return obj22.fetchMessages(obj7);
              } else {
                obj9 = { channelId, messageId, flash: true, isPreload, skipLocalFetch, jumpType: tmp, avoidInitialScroll };
                importDefault(dependencyMap[21]).jumpToMessage(obj9);
                const obj15 = importDefault(dependencyMap[21]);
              }
              const obj13 = importDefault(dependencyMap[17]);
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
    const channel = store2.getChannel(channelId);
    if (null != channel) {
      const obj3 = arg1(dependencyMap[24]);
      let obj = { path: closure_20.CHANNEL(":guild", ":channel", ":message"), exact: true };
      const matchPathResult = obj3.matchPath(arg1(dependencyMap[25]).getHistory().location.pathname, obj);
      obj = { channelId: channel.id };
      let message;
      if (null != matchPathResult) {
        const params = matchPathResult.params;
        if (null != params) {
          message = params.message;
        }
      }
      obj.messageId = message;
      obj = { guildId: channel.getGuildId(), channelId: channel.id };
      obj.messageId = obj.messageId;
      obj.avoidInitialScroll = null != obj.messageId;
      fetchMessages(obj);
      maybeLoadChannelSplitView(channel.getGuildId(), channel.id);
      const obj4 = arg1(dependencyMap[25]);
    }
  }
}
function loadSelectedChannelIfNecessary() {
  const channelId = store3.getChannelId();
  if (null != channelId) {
    const channel = store2.getChannel(channelId);
    if (null != channel) {
      if (isTextChannel(channel.type)) {
        let obj = importDefault(dependencyMap[17]);
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
      if (type !== arg1(dependencyMap[26]).SidebarType.VIEW_CHANNEL) {
        maybeLoadChannelSplitView(guildId, channelId);
      }
    }
  }
}
function handleChannelPreload(context) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = context);
  if (context.context === closure_17) {
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
          let obj = importDefault(dependencyMap[27]);
          obj = {};
          const intl = arg1(dependencyMap[28]).intl;
          obj.title = intl.string(arg1(dependencyMap[28]).t.Whhv4w);
          const intl2 = arg1(dependencyMap[28]).intl;
          obj = {};
          const _Math = Math;
          obj.retryAfterMinutes = Math.ceil(retry_after / 60);
          obj.body = intl2.formatToPlainString(arg1(dependencyMap[28]).t.qoxdQB, obj);
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
    if (null != closure_28[channelId]) {
      num = tmp2;
    }
    const _Date = Date;
    if (Date.now() - num >= closure_23) {
      const _Date2 = Date;
      closure_28[channelId] = Date.now();
      channelId = store3.getChannelId();
      const currentSidebarChannelId = store.getCurrentSidebarChannelId(channelId);
      if (isStale) {
        isStale = closure_8.isConnected();
      }
      if (isStale) {
        isStale = channelId === channelId || channelId === currentSidebarChannelId;
        const tmp7 = channelId === channelId || channelId === currentSidebarChannelId;
      }
      if (isStale) {
        let obj = importDefault(dependencyMap[21]);
        obj = { channelId, limit: arg1(dependencyMap[22]).getMessageLimit("MessageManager.staleFetch"), jump: jump.jump };
        const messages = obj.fetchMessages(obj);
        const obj3 = arg1(dependencyMap[22]);
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
    let obj = importDefault(dependencyMap[29]);
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
    const newLocalMessages = importDefault(dependencyMap[21]).fetchNewLocalMessages(channelId, closure_16);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const isTextChannel = arg1(dependencyMap[6]).isTextChannel;
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
({ MAX_MESSAGES_PER_CHANNEL: closure_16, CURRENT_APP_CONTEXT: closure_17, ChannelTypes: closure_18, AbortCodes: closure_19, Routes: closure_20, ChannelTypesSets: closure_21 } = arg1(dependencyMap[13]));
const isStaticChannelRoute = arg1(dependencyMap[14]).isStaticChannelRoute;
let closure_23 = 10 * importDefault(dependencyMap[15]).Millis.SECOND;
let importDefaultResult = importDefault(dependencyMap[16]);
importDefaultResult = new importDefaultResult("MessageManager");
let closure_26 = 90 * importDefault(dependencyMap[15]).Millis.DAY;
let closure_27 = "viewedThreadIds";
let closure_28 = {};
let tmp5 = (arg0) => {
  class MessageManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, MessageManager);
      items1 = [...items];
      obj = closure_6(MessageManager);
      tmp2 = closure_5;
      if (closure_29()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.fetchMessages = closure_30;
      tmp2Result.loadSelectedChannelIfNecessary = closure_32;
      map = new Map();
      tmp2Result.stores = map.set(closure_10, closure_37);
      obj = {
        APP_STATE_UPDATE_WILL_BECOME_ACTIVE: closure_43,
        OVERLAY_INITIALIZE: closure_31,
        CHANNEL_SELECT: closure_33,
        VOICE_CHANNEL_SELECT: closure_34,
        THREAD_CREATE: closure_39,
        THREAD_LIST_SYNC() {
              callback();
            },
        CHANNEL_CREATE: closure_39,
        CHANNEL_PRELOAD: closure_38,
        GUILD_CREATE() {
              callback();
            },
        MESSAGE_END_EDIT: closure_40,
        LOAD_MESSAGES_SUCCESS: closure_41,
        UPLOAD_FAIL: closure_42,
        CHANNEL_DELETE() {
              callback();
            },
        THREAD_DELETE() {
              callback();
            },
        CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE: closure_35
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
      const subscription = callback(closure_2[29]).subscribe("CONNECTION_OPEN", closure_31);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {
      callback(closure_2[29]).unsubscribe("CONNECTION_OPEN", closure_31);
    }
  };
  items[1] = obj;
  return callback(MessageManager, items);
}(importDefault(dependencyMap[30]));
tmp5 = new tmp5();
const tmp2 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/messages/MessageManager.tsx");

export default tmp5;
