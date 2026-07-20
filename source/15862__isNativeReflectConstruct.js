// Module ID: 15862
// Function ID: 121477
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15862 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isIdle() {
  const currentClientVoiceChannelId = store.getCurrentClientVoiceChannelId(null);
  if (null == currentClientVoiceChannelId) {
    return false;
  } else {
    const channel = channel.getChannel(currentClientVoiceChannelId);
    const tmp3 = null == channel || !channel.isPrivate();
    let tmp4 = !tmp3;
    if (!tmp3) {
      let tmp6 = !tmp5;
      if (channel.recipients.length <= 1) {
        const tmp8 = closure_11.countVoiceStatesForChannel(currentClientVoiceChannelId) > 1;
        let tmp9 = !tmp8;
        if (!tmp8) {
          tmp9 = null == selfEmbeddedActivityForChannel.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
        }
        tmp6 = tmp9;
      }
      tmp4 = tmp6;
    }
    return tmp4;
  }
}
function disconnect() {
  if (isIdle()) {
    const currentClientVoiceChannelId = store.getCurrentClientVoiceChannelId(null);
    if (null != currentClientVoiceChannelId) {
      let obj = importDefault(dependencyMap[9]);
      const intl = arg1(dependencyMap[10]).intl;
      obj = { number: 3 };
      obj.sendBotMessage(currentClientVoiceChannelId, intl.formatToPlainString(arg1(dependencyMap[10]).t.XYof5G, obj));
      const voiceChannel = importDefault(dependencyMap[11]).selectVoiceChannel(null);
      const obj3 = importDefault(dependencyMap[11]);
    }
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
let closure_11 = importDefault(dependencyMap[8]);
let tmp2 = (arg0) => {
  class CallIdleManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, CallIdleManager);
      items1 = [...items];
      obj = closure_6(CallIdleManager);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      CallIdleManager = tmp2Result;
      timeout = new CallIdleManager(closure_2[12]).Timeout();
      tmp2Result.idleTimeout = timeout;
      tmp2Result.handleConnectionClosed = () => {
        const idleTimeout = tmp2Result.idleTimeout;
        idleTimeout.stop();
      };
      tmp2Result.handleEmbeddedActivityDisconnect = () => {
        if (callback()) {
          const idleTimeout = tmp2Result.idleTimeout;
          idleTimeout.start(180000, closure_14, true);
        }
      };
      tmp2Result.handleVoiceStateUpdates = () => {
        const idleTimeout = tmp2Result.idleTimeout;
        if (callback()) {
          idleTimeout.start(180000, closure_14, false);
        } else {
          idleTimeout.stop();
        }
      };
      tmp2Result.actions = { VOICE_STATE_UPDATES: tmp2Result.handleVoiceStateUpdates, CONNECTION_CLOSED: tmp2Result.handleConnectionClosed, EMBEDDED_ACTIVITY_CLOSE: tmp2Result.handleEmbeddedActivityDisconnect };
      return tmp2Result;
    }
  }
  const arg1 = CallIdleManager;
  callback2(CallIdleManager, arg0);
  return callback(CallIdleManager);
}(importDefault(dependencyMap[13]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/voice_calls/CallIdleManager.tsx");

export default tmp2;
