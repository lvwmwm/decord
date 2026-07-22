// Module ID: 4143
// Function ID: 34905
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4143 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class VoiceStateRecord {
    constructor(arg0) {
      self = this;
      tmp = VoiceStateRecord(this, VoiceStateRecord);
      obj = closure_3(VoiceStateRecord);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.userId = arg0.userId || "";
      tmp2Result.channelId = arg0.channelId || null;
      tmp2Result.sessionId = arg0.sessionId || null;
      tmp2Result.mute = arg0.mute || false;
      tmp2Result.deaf = arg0.deaf || false;
      tmp2Result.selfMute = arg0.selfMute || false;
      tmp2Result.selfDeaf = arg0.selfDeaf || false;
      tmp2Result.selfVideo = arg0.selfVideo || false;
      tmp2Result.selfStream = arg0.selfStream || false;
      tmp2Result.suppress = arg0.suppress || false;
      ({ requestToSpeakTimestamp: tmp6.requestToSpeakTimestamp, discoverable } = arg0);
      tmp2Result.discoverable = null == discoverable || discoverable;
      tmp2Result.connectedAt = arg0.connectedAt;
      return tmp2Result;
    }
  }
  let closure_0 = VoiceStateRecord;
  callback2(VoiceStateRecord, arg0);
  let obj = {
    key: "isVoiceMuted",
    value() {
      const self = this;
      let tmp = this.selfMute || self.mute || self.suppress;
      if (!tmp) {
        tmp = null != self.requestToSpeakTimestamp;
      }
      return tmp;
    }
  };
  const items = [obj, ];
  obj = {
    key: "isVoiceDeafened",
    value() {
      return this.selfDeaf || this.deaf;
    }
  };
  items[1] = obj;
  return callback(VoiceStateRecord, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("records/VoiceStateRecord.tsx");

export default tmp2;
