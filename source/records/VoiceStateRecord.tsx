// Module ID: 4143
// Function ID: 34895
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 1891, 1884, 2, 6]

// Module 4143 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_1 from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_1884 from "module_1884";
import _classCallCheck from "_classCallCheck";

function _isNativeReflectConstruct() {
  let asyncGeneratorStep = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return asyncGeneratorStep;
  }
  const result = _isNativeReflectConstruct();
}
const result = _classCallCheck.fileFinishedImporting("records/VoiceStateRecord.tsx");

export default (arg0) => {
  class VoiceStateRecord {
    constructor(arg0) {
      self = this;
      tmp = VoiceStateRecord(this, VoiceStateRecord);
      obj = _createForOfIteratorHelperLoose(VoiceStateRecord);
      tmp2 = _defineProperties;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = _createForOfIteratorHelperLoose;
        constructResult = Reflect.construct(obj, [], _createForOfIteratorHelperLoose(self).constructor);
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
  let asyncGeneratorStep = VoiceStateRecord;
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
}(require("keys"));
