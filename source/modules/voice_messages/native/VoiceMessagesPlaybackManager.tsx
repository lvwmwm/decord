// Module ID: 13464
// Function ID: 103627
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 4122, 1906, 477, 13465, 4529, 686, 4530, 2]

// Module 13464 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import tmp3 from "LifecycleManager";

let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function pauseCurrentAudioPlayer(arg0) {
  if (obj.isAndroid()) {
    importDefault(13465).pauseCurrentPlayer(arg0);
    const obj2 = importDefault(13465);
  } else {
    const DCDAudioPlayerManager = closure_9.DCDAudioPlayerManager;
    if (null != DCDAudioPlayerManager) {
      DCDAudioPlayerManager.pauseCurrentPlayer(arg0);
    }
  }
}
function playCurrentAudioPlayer() {
  if (obj.isAndroid()) {
    const result = importDefault(13465).maybePlayCurrentPlayer();
    const obj2 = importDefault(13465);
  } else {
    const DCDAudioPlayerManager = closure_9.DCDAudioPlayerManager;
    if (null != DCDAudioPlayerManager) {
      const result1 = DCDAudioPlayerManager.maybePlayCurrentPlayer();
    }
  }
}
function handleVoiceMessageDeleted(arg0) {
  if (obj.isAndroid()) {
    const result = importDefault(13465).handleVoiceMessageDeleted(arg0);
    const obj2 = importDefault(13465);
  } else {
    const DCDAudioPlayerManager = closure_9.DCDAudioPlayerManager;
    if (null != DCDAudioPlayerManager) {
      const result1 = DCDAudioPlayerManager.handleVoiceMessageDeleted(arg0);
    }
  }
}
({ AppState: closure_8, NativeModules: closure_9 } = get_ActivityIndicator);
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx");

export default tmp3;
export { pauseCurrentAudioPlayer };
export { playCurrentAudioPlayer };
export { handleVoiceMessageDeleted };
