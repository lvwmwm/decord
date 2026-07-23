// Module ID: 9878
// Function ID: 76477
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 4143, 4808, 1352, 5659, 1348, 1838, 4142, 1906, 3947, 653, 1355, 664, 3, 4803, 9581, 4062, 8340, 6691, 9879, 587, 3952, 1198, 5661, 4470, 1212, 686, 5078, 2]

// Module 9878 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "ME";
import set from "set";
import timestamp from "timestamp";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { isTextChannel } from "_callSuper";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import importDefaultResult from "_getPrototypeOf";
import tmp5 from "AutomaticLifecycleManager";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
const require = arg1;
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
          let obj1 = importDefault(4803);
          const orCreate = obj1.getOrCreate(channelId);
          let orCreate1 = orCreate;
          if (orCreate.some(require(9581) /* isAttachmentUrl */.messageHasExpiredAttachmentUrl)) {
            importDefaultResult.log("Found expired attachment link, clearing messages");
            let obj5 = importDefault(4803);
            obj5.clear(channelId);
            let obj6 = importDefault(4803);
            orCreate1 = obj6.getOrCreate(channelId);
          }
          let obj7 = orCreate1;
          if (tmp17) {
            let obj = { jumpTargetId: null, jumped: false, jumpType: require(4062) /* GuildThemeSourcePreference */.JumpType.ANIMATED };
            const mutation = orCreate1.mutate(obj);
            let obj9 = importDefault(4803);
            obj9.commit(mutation);
            obj7 = mutation;
          }
          let obj10 = obj7;
          if (tmp23) {
            obj = { focusTargetId: null };
            const mutation1 = obj7.mutate(obj);
            importDefault(4803).commit(mutation1);
            obj10 = mutation1;
            const obj12 = importDefault(4803);
          }
          if (isPreload) {
            if (!closure_10.isConnected()) {
              let flag = true;
            }
            let hasUnreadResult = importDefault(8340)(channelId);
            if (hasUnreadResult) {
              hasUnreadResult = closure_15.hasUnread(channelId);
            }
            if (hasUnreadResult) {
              flag = true;
            }
            if (flag) {
              obj1 = { loadingMore: true };
              importDefault(4803).commit(obj10.mutate(obj1));
              if (null == messageId) {
                if (null != channel) {
                  if (channel.isThread()) {
                    let flag4 = false;
                    if (!closure_15.hasOpenedThread(channelId)) {
                      if (null == obj2) {
                        const Storage = require(587) /* Storage */.Storage;
                        obj2 = Storage.get(viewedThreadIds, {});
                        if (null == obj2) {
                          obj2 = {};
                        }
                      }
                      flag4 = false;
                      if (!(channelId in obj2)) {
                        const _Date = Date;
                        obj2[channelId] = Date.now();
                        const _Date2 = Date;
                        for (const key10150 in obj2) {
                          let tmp77 = key10150;
                          let tmp78 = obj2;
                          if (obj2[key10150] >= tmp50) {
                            continue;
                          } else {
                            let tmp52 = obj2;
                            delete tmp[tmp2];
                            continue;
                          }
                          continue;
                        }
                        const Storage2 = require(587) /* Storage */.Storage;
                        const result = Storage2.set(viewedThreadIds, obj2);
                        flag4 = true;
                      }
                    }
                    if (flag4) {
                      const _HermesInternal2 = HermesInternal;
                      importDefaultResult.log("Jumping to start of thread " + channel.id);
                      const obj3 = { channelId };
                      const obj26 = importDefault(6691);
                      obj3.limit = require(9879) /* getMessageLimit */.getMessageLimit("MessageManager.threadStart");
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
                        const obj18 = importDefault(6691);
                        obj5.limit = require(9879) /* getMessageLimit */.getMessageLimit("MessageManager.threadUnread");
                        obj6 = { messageId: trackedAckMessageId, flash: false, offset: 1 };
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
                const obj22 = importDefault(6691);
                obj7.limit = require(9879) /* getMessageLimit */.getMessageLimit("MessageManager.initialFetch");
                obj7.isPreload = isPreload;
                obj7.skipLocalFetch = skipLocalFetch;
                const obj8 = { jumpType: require(4062) /* GuildThemeSourcePreference */.JumpType.ANIMATED };
                obj7.jump = obj8;
                obj7.avoidInitialScroll = avoidInitialScroll;
                obj7.fetchKey = fetchKey;
                return obj22.fetchMessages(obj7);
              } else {
                obj9 = { channelId, messageId, flash: true, isPreload, skipLocalFetch, jumpType: tmp3, avoidInitialScroll };
                importDefault(6691).jumpToMessage(obj9);
                const obj15 = importDefault(6691);
              }
              const obj13 = importDefault(4803);
            }
          }
          if (!obj10.loadingMore) {
            let tmp29 = null != guildId;
            if (tmp29) {
              tmp29 = null == guild.getGuild(guildId);
            }
            flag = forceFetch;
            if (!tmp29) {
              flag = true;
            }
          }
          flag = forceFetch;
          if (null != messageId) {
            flag = true;
          }
          tmp17 = null != orCreate1.jumpTargetId && null == messageId;
          tmp23 = null != obj7.focusTargetId && null == messageId;
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
      const obj5 = require(3952) /* matchPath */;
      obj = { path: closure_22.CHANNEL(":guild", ":channel", ":message"), exact: true };
      const matchPathResult = obj5.matchPath(require(1198) /* shouldNavigate */.getHistory().location.pathname, obj);
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
      const obj6 = require(1198) /* shouldNavigate */;
    }
  }
}
function loadSelectedChannelIfNecessary() {
  const channelId = store3.getChannelId();
  if (null != channelId) {
    const channel = store2.getChannel(channelId);
    if (null != channel) {
      if (isTextChannel(channel.type)) {
        let obj = importDefault(4803);
        const orCreate = obj.getOrCreate(channelId);
        if (!tmp7) {
          obj = { guildId: channel.getGuildId(), channelId: channel.id };
          fetchMessages(obj);
        }
        maybeLoadChannelSplitView(channel.getGuildId(), channel.id);
        tmp7 = orCreate.ready && orCreate.hasFetched;
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
  guildId = guildId.getGuildId();
  if (null != guildId) {
    if (null != channelId) {
      const sidebarState = store.getSidebarState(channelId);
      let type;
      if (null != sidebarState) {
        type = sidebarState.type;
      }
      if (type !== require(5661) /* SidebarType */.SidebarType.VIEW_CHANNEL) {
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
          let obj = importDefault(4470);
          obj = {};
          const intl = require(1212) /* getSystemLocale */.intl;
          obj.title = intl.string(require(1212) /* getSystemLocale */.t.Whhv4w);
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj = {};
          const _Math = Math;
          obj.retryAfterMinutes = Math.ceil(retry_after / 60);
          obj.body = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.qoxdQB, obj);
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
    if (null != table[channelId]) {
      num = tmp2;
    }
    const _Date = Date;
    if (Date.now() - num >= closure_25) {
      const _Date2 = Date;
      table[channelId] = Date.now();
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
        let obj = importDefault(6691);
        obj = { channelId, limit: require(9879) /* getMessageLimit */.getMessageLimit("MessageManager.staleFetch"), jump: jump.jump };
        const messages = obj.fetchMessages(obj);
        const obj3 = require(9879) /* getMessageLimit */;
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
    let obj = importDefault(686);
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
    const newLocalMessages = importDefault(6691).fetchNewLocalMessages(channelId, closure_18);
  }
}
({ MAX_MESSAGES_PER_CHANNEL: closure_18, CURRENT_APP_CONTEXT: closure_19, ChannelTypes: closure_20, AbortCodes: closure_21, Routes: closure_22, ChannelTypesSets: closure_23 } = ME);
let closure_25 = 10 * require("set").Millis.SECOND;
importDefaultResult = new importDefaultResult("MessageManager");
let closure_28 = 90 * require("set").Millis.DAY;
const viewedThreadIds = "viewedThreadIds";
let closure_30 = {};
tmp5 = new tmp5();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/messages/MessageManager.tsx");

export default tmp5;
