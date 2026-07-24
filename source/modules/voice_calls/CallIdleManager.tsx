// Module ID: 16045
// Function ID: 124083
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 1347, 1348, 4146, 4203, 6691, 1212, 4944, 4015, 5078, 2]

// Module 16045 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
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
    channel = channel.getChannel(currentClientVoiceChannelId);
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
      let obj = importDefault(6691);
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { number: 3 };
      obj.sendBotMessage(currentClientVoiceChannelId, intl.formatToPlainString(require(1212) /* getSystemLocale */.t.XYof5G, obj));
      const voiceChannel = importDefault(4944).selectVoiceChannel(null);
      const obj3 = importDefault(4944);
    }
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_calls/CallIdleManager.tsx");

export default tmp2;
