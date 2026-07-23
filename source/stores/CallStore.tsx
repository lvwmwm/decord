// Module ID: 4809
// Function ID: 41934
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1906, 3947, 653, 686, 507, 22, 566, 2]

// Module 4809 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
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
  channel = channel.getChannel(channelId);
  if (null != channel) {
    if (null == channel.getGuildId()) {
      if (null != channelId) {
        let tmp5 = dependencyMap[channelId];
        if (null == tmp5) {
          let obj = { channelId, ringing: [] };
          tmp5 = obj;
        }
        dependencyMap[channelId] = tmp5;
        obj = { type: "CALL_CONNECT", channelId };
        importDefault(686).dispatch(obj);
        return true;
      }
    }
  }
  return false;
}
let closure_12 = {};
let closure_13 = {};
let tmp2 = ((Store) => {
  class CallStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, CallStore);
      obj = outer1_6(CallStore);
      tmp2 = outer1_5;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(CallStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_10);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getCall",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getCalls",
    value() {
      return Object.values(outer1_12);
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
      let messageId = outer1_12[arg0];
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
      return null != outer1_12[arg0] && outer1_12[arg0].unavailable;
    }
  };
  items[6] = {
    key: "getInternalState",
    value() {
      return { calls: outer1_12, enqueuedRings: outer1_13 };
    }
  };
  return callback(CallStore, items);
})(require("initialize").Store);
tmp2.displayName = "CallStore";
tmp2 = new tmp2(require("dispatcher"), {
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
    obj = {};
    const merged1 = Object.assign(callStoreInternalState.enqueuedRings);
  },
  CONNECTION_RESUMED: function handleConnectionResumed() {
    return callConnect(true);
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    return callConnect(false, channelId.channelId);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != dependencyMap2[channel.id]) {
      const id = channel.id;
      delete tmp4[tmp3];
    }
    if (null == dependencyMap[channel.id]) {
      return false;
    } else {
      const id2 = channel.id;
      delete tmp2[tmp];
    }
  },
  CALL_CREATE: function handleCallCreate(channelId) {
    channelId = channelId.channelId;
    let obj = { channelId, messageId: channelId.messageId, region: channelId.region, ringing: Object.keys(channelId.ongoingRings), unavailable: false, regionUpdated: false };
    closure_12[channelId] = obj;
    if (null != dependencyMap2[channelId]) {
      let tmp3 = dependencyMap2[channelId];
      delete tmp[tmp2];
      if (1 !== tmp3.indexOf("all")) {
        tmp3 = null;
      }
      const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      obj = { url: Endpoints.CALL_RING(channelId) };
      obj = { recipients: tmp3 };
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
    const merged = Object.assign(dependencyMap[channelId]);
    obj["messageId"] = messageId;
    obj["region"] = region;
    obj["ringing"] = Object.keys(ongoingRings);
    obj["regionUpdated"] = tmp2;
    dependencyMap[channelId] = obj;
  },
  CALL_DELETE: function handleCallDelete(arg0) {
    let channelId;
    let unavailable;
    ({ channelId, unavailable } = arg0);
    if (true === unavailable) {
      if (null != tmp3) {
        let obj = {};
        const merged = Object.assign(tmp3);
        obj["unavailable"] = unavailable;
      }
      tmp4[channelId] = obj;
      if (null != dependencyMap2[channelId]) {
        delete tmp[tmp2];
      }
    }
    obj = { channelId, ringing: [], messageId: null, region: null, regionUpdated: false, unavailable };
  },
  CALL_ENQUEUE_RING: function handleCallEnqueueRing(arg0) {
    let channelId;
    let recipients;
    ({ channelId, recipients } = arg0);
    let items = dependencyMap2[channelId];
    if (null == items) {
      items = [];
    }
    if (null == recipients) {
      recipients = ["all"];
    }
    dependencyMap2[channelId] = importDefault(22).union(items, recipients);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      let closure_13 = {};
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/CallStore.tsx");

export default tmp2;
