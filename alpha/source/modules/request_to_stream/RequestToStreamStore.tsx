// Module ID: 14532
// Function ID: 14533
// Name: RequestToStreamStore
// Dependencies: [32, 502, 5750, 1084, 14533, 6047, 6680, 504, 584, 2]

// Module 14532 (RequestToStreamStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6047 */;
import StreamKeyUtilsAll from "StreamKeyUtils" /* 6680 */;
import RequestToStreamNewEntryPointExperimentDefault from "RequestToStreamNewEntryPointExperiment" /* 14533 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5750 */;
import size from "module_2" /* 2 */;

let closure_9, user;

const ActivityActionTypes = Constants.ActivityActionTypes;
let closure_8 = {};
const React4 = {};
let c10 = null;
const set = new Set();
let c12 = null;
const Store = get_initializedDefault.Store;
class RequestToStreamStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, RTCConnectionStore);
  }
  getPendingRequestForUser(userId) {
    return closure_9[userId];
  }
  isRequestOnCooldown(id) {
    return set.has(id);
  }
  getMostRecentInboundRequest() {
    return c12;
  }
}
const prototype = RequestToStreamStore.prototype;
let obj = {
  STREAM_WATCH: function handleStreamWatch(streamKey) {
    streamKey = streamKey.streamKey;
    const obj = StreamKeyUtilsAll;
    const ownerId = obj.decodeStreamKey(streamKey).ownerId;
    if (null != closure_9[ownerId]) {
      delete closure_9[ownerId];
    } else {
      return false;
    }
  },
  STREAM_REQUEST_COOLDOWN_START: function handleStreamRequestCooldownStart(userId) {
    userId = userId.userId;
    const obj = set;
    if (set.has(userId)) {
      return false;
    } else {
      obj.add(userId);
    }
  },
  STREAM_REQUEST_COOLDOWN_END: function handleStreamRequestCooldownEnd(userId) {
    userId = userId.userId;
    const obj = set;
    if (set.has(userId)) {
      obj.delete(userId);
    } else {
      return false;
    }
  },
  STREAM_REQUEST_REMINDER_DISMISS: function handleStreamRequestReminderDismiss(messageId) {
    let id;
    messageId = messageId.messageId;
    if (user != null) {
      id = user.id;
    }
    if (id !== messageId) {
      return false;
    } else {
      user = null;
    }
  },
  STREAM_START: function handleStreamStart() {
    if (null == c12) {
      return false;
    } else {
      c12 = null;
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    let channelId;
    let message;
    let optimistic;
    let sendMessageOptions;
    ({ sendMessageOptions, message } = arg0);
    let id;
    ({ channelId, optimistic } = arg0);
    if (channelId !== RTCConnectionStore.getChannelId()) {
      return false;
    } else if (optimistic) {
      let targetUserId;
      if (sendMessageOptions != null) {
        const activityAction = sendMessageOptions.activityAction;
        if (activityAction != null) {
          targetUserId = activityAction.targetUserId;
        }
      }
      if (null != targetUserId) {
        closure_8[message.id] = targetUserId;
      }
      return false;
    } else {
      const activity = message.activity;
      let type;
      if (activity != null) {
        type = activity.type;
      }
      if (type !== ActivityActionTypes.STREAM_REQUEST) {
        return false;
      } else {
        id = AuthenticationStore.getId();
        const author = message.author;
        let id1;
        if (author != null) {
          id1 = author.id;
        }
        if (id1 !== id) {
          const mentions = message.mentions;
          let someResult;
          if (mentions != null) {
            someResult = mentions.some((id) => id.id === id);
          }
          let tmp10 = someResult;
          if (tmp10) {
            const obj2 = RequestToStreamNewEntryPointExperimentDefault;
            const showReminderPanel = obj2.getConfig({ location: "RequestToStreamStore" }).showReminderPanel;
            if (showReminderPanel) {
              const obj3 = MessageRecordUtils;
              let c12 = obj3.createMessageRecord(message);
            }
            tmp10 = showReminderPanel;
          }
          return tmp10;
        } else if (null == message.nonce) {
          return false;
        } else if (null == closure_8[message.nonce]) {
          return false;
        } else {
          delete closure_8[message.nonce];
          const obj = {};
          const merged = Object.assign(closure_9);
          obj[closure_8[message.nonce]] = message.id;
          closure_9 = obj;
        }
      }
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    delete closure_8[id];
    let id1;
    if (user != null) {
      id1 = user.id;
    }
    if (id1 === id) {
      user = null;
    }
    const entries = Object.entries(closure_9);
    const tmp3 = entries[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      if (id === tmp6[1]) {
        delete closure_9[tmp7];
      }
      continue;
    }
  },
  VOICE_CHANNEL_SELECT: function handleSelectVoiceChannel(channelId) {
    if (channelId.channelId === channelId.currentVoiceChannelId) {
      return false;
    } else {
      closure_9 = {};
      closure_8 = {};
      let c12 = null;
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates() {
    let channelId;
    if (RTCConnectionStore.getWasMoved()) {
      if (RTCConnectionStore.getChannelId() === channelId) {
        return false;
      } else {
        channelId = obj.getChannelId();
        closure_9 = {};
        closure_8 = {};
        let c12 = null;
      }
    } else if (null == channelId) {
      return false;
    } else {
      channelId = null;
    }
  },
  LOGOUT: function resetStateAndCooldowns() {
    closure_9 = {};
    closure_8 = {};
    let c12 = null;
    set.clear();
  }
};
const requestToStreamStore = new RequestToStreamStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/request_to_stream/RequestToStreamStore.tsx");

export default requestToStreamStore;
