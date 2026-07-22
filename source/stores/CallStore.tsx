// Module ID: 4806
// Function ID: 41916
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4806 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function callConnect(channelId, channelId2) {
  let flag = channelId;
  channelId = channelId2;
  if (channelId === undefined) {
    flag = false;
  }
  if (channelId === undefined) {
    channelId = channelId.getChannelId();
  }
  const channel = channel.getChannel(channelId);
  if (null != channel) {
    if (null == channel.getGuildId()) {
      if (null != channelId) {
        let tmp5 = closure_12[channelId];
        if (null == tmp5) {
          let obj = { channelId, ringing: [] };
          tmp5 = obj;
        }
        closure_12[channelId] = tmp5;
        obj = { type: "CALL_CONNECT", channelId };
        importDefault(dependencyMap[9]).dispatch(obj);
        return true;
      }
    }
  }
  return false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const Endpoints = arg1(dependencyMap[8]).Endpoints;
let closure_12 = {};
let closure_13 = {};
let tmp2 = (Store) => {
  class CallStore {
    constructor() {
      self = this;
      tmp = closure_3(this, CallStore);
      obj = closure_6(CallStore);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = CallStore;
  callback2(CallStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9, closure_10);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getCall",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getCalls",
    value() {
      return Object.values(closure_12);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMessageId",
    value(arg0) {
      const call = this.getCall(arg0);
      let messageId = null;
      if (null != call) {
        messageId = call.messageId;
      }
      return messageId;
    }
  };
  items[4] = {
    key: "isCallActive",
    value(arg0, arg1) {
      let messageId = closure_12[arg0];
      if (!(null != messageId && !messageId.unavailable)) {
        return tmp;
      } else if (null != arg1) {
        messageId = messageId.messageId;
        let tmp2 = messageId === arg1;
      } else {
        tmp2 = null != messageId.region;
      }
    }
  };
  items[5] = {
    key: "isCallUnavailable",
    value(arg0) {
      return null != closure_12[arg0] && closure_12[arg0].unavailable;
    }
  };
  items[6] = {
    key: "getInternalState",
    value() {
      return { calls: closure_12, enqueuedRings: closure_13 };
    }
  };
  return callback(CallStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp2.displayName = "CallStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return callConnect(true);
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let closure_12 = {};
    let closure_13 = {};
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(callStoreInternalState) {
    callStoreInternalState = callStoreInternalState.callStoreInternalState;
    let obj = {};
    const merged = Object.assign(callStoreInternalState.calls);
    let closure_12 = obj;
    obj = {};
    const merged1 = Object.assign(callStoreInternalState.enqueuedRings);
    let closure_13 = obj;
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    return callConnect(true);
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    return callConnect(false, channelId.channelId);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != closure_13[channel.id]) {
      const id = channel.id;
      delete r4[r2];
    }
    if (null == closure_12[channel.id]) {
      return false;
    } else {
      const id2 = channel.id;
      delete r1[r0];
    }
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    channelId = channelId.channelId;
    let obj = { channelId, messageId: channelId.messageId, region: channelId.region, ringing: Object.keys(channelId.ongoingRings), unavailable: false, regionUpdated: false };
    closure_12[channelId] = obj;
    if (null != closure_13[channelId]) {
      let tmp = closure_13[channelId];
      delete r1[r6];
      if (1 !== tmp.indexOf("all")) {
        tmp = null;
      }
      const HTTP = arg1(dependencyMap[10]).HTTP;
      obj = { url: Endpoints.CALL_RING(channelId) };
      obj = { recipients: tmp };
      obj.body = obj;
      obj.oldFormErrors = true;
      obj.rejectWithError = true;
      HTTP.post(obj);
    }
  },
  CALL_UPDATE: function handleCallUpdate(arg0) {
    let channelId;
    let messageId;
    let ongoingRings;
    let region;
    ({ channelId, region } = arg0);
    let tmp2 = null != tmp;
    ({ messageId, ongoingRings } = arg0);
    if (tmp2) {
      tmp2 = tmp.regionUpdated || tmp.region !== region;
      const tmp3 = tmp.regionUpdated || tmp.region !== region;
    }
    const obj = {};
    const merged = Object.assign(closure_12[channelId]);
    obj["messageId"] = messageId;
    obj["region"] = region;
    obj["ringing"] = Object.keys(ongoingRings);
    obj["regionUpdated"] = tmp2;
    closure_12[channelId] = obj;
  },
  CALL_DELETE: function handleCallDelete(arg0) {
    let channelId;
    let unavailable;
    ({ channelId, unavailable } = arg0);
    if (true === unavailable) {
      if (null != tmp) {
        let obj = {};
        const merged = Object.assign(tmp);
        obj["unavailable"] = unavailable;
      }
      tmp2[channelId] = obj;
      if (null != closure_13[channelId]) {
        delete r0[r1];
      }
    }
    obj = { p: -1, e: -1882570463, transparent: 1360068610, animationType: 1361143520, emptyStateContentContainer: 1340580, channelId, ringing: [], unavailable };
  },
  CALL_ENQUEUE_RING: function handleCallEnqueueRing(arg0) {
    let channelId;
    let recipients;
    ({ channelId, recipients } = arg0);
    let items = closure_13[channelId];
    if (null == items) {
      items = [];
    }
    if (null == recipients) {
      recipients = [null];
    }
    closure_13[channelId] = importDefault(dependencyMap[11]).union(items, recipients);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      let closure_13 = {};
    }
  }
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("stores/CallStore.tsx");

export default tmp2;
