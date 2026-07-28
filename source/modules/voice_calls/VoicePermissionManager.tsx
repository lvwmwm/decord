// Module ID: 16101
// Function ID: 124360
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4989, 4182, 1194, 1348, 4212, 4237, 653, 4379, 4710, 16102, 4349, 5112, 2]

// Module 16101 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import getAudienceRequestToSpeakState from "getAudienceRequestToSpeakState";
import set from "set";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { InputModes } from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";
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
function voicePermissionRequest() {
  const permission = importDefault(4710).requestPermission(NativePermissionTypes.AUDIO);
  permission.then((arg0) => {
    if (arg0) {
      outer1_1(outer1_2[14])(true);
    }
  });
  if (mode.getMode() === InputModes.PUSH_TO_TALK) {
    const permission1 = importDefault(4710).requestPermission(NativePermissionTypes.INPUT_MONITORING);
    const obj2 = importDefault(4710);
  }
}
function shouldImmediatelyRequestVoicePermissions(id, id2) {
  channel = channel.getChannel(id2);
  let isListenModeCapableResult;
  if (null != channel) {
    isListenModeCapableResult = channel.isListenModeCapable();
  }
  let isSpeakerResult = !isListenModeCapableResult;
  if (!isSpeakerResult) {
    isSpeakerResult = speaker.isSpeaker(id, id2);
  }
  return isSpeakerResult;
}
let c16 = null;
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/voice_calls/VoicePermissionManager.tsx");

export default tmp2;
export { shouldImmediatelyRequestVoicePermissions };
