// Module ID: 4234
// Function ID: 37120
// Name: sanitizeDevices
// Dependencies: [4229, 646, 4179, 2]
// Exports: getAudioInputDevices, getAudioOutputDevices, getVideoInputDevices

// Module 4234 (sanitizeDevices)
import AudioSubsystems from "AudioSubsystems";

let closure_3;
let closure_4;
function sanitizeDevices(AUDIO_INPUT, items) {
  let closure_0 = AUDIO_INPUT;
  const importDefault = false;
  const mapped = items.map((arg0, arg1) => {
    let guid;
    let index;
    let name;
    let tmp = arg1;
    ({ guid, name, index } = arg0);
    if (closure_0 === outer1_4.VIDEO_INPUT) {
      let obj = /^front/i;
      if (obj.test(name)) {
        let tmp12 = outer1_3;
        let str2 = "Default";
      }
      if (null != index) {
        tmp = index;
      }
      obj = { id: tmp12, type: closure_0, index: tmp, name: str2, originalName: tmp3, originalId: tmp2, facing: tmp4, hardwareId: tmp5, containerId: tmp6, effects: tmp7, macosTransportType: tmp8, windowsEndpointFormFactor: tmp9, windowsDeviceService: tmp10 };
      return obj;
    }
    if (obj2.test(name)) {
      let c1 = true;
      tmp12 = outer1_3;
      str2 = name.replace("default", "Default");
    } else {
      tmp12 = name;
      if (null != guid) {
        tmp12 = name;
        if ("" !== guid) {
          tmp12 = guid;
        }
      }
      str2 = name;
    }
  });
  let isMatch = AUDIO_INPUT !== constants.VIDEO_INPUT;
  if (isMatch) {
    isMatch = !importDefault;
  }
  if (isMatch) {
    let family;
    if (null != importDefault(646)) {
      const os = importDefault(646).os;
      if (null != os) {
        family = os.family;
      }
    }
    isMatch = null != family;
  }
  if (isMatch) {
    let obj = /^win/i;
    isMatch = obj.test(importDefault(646).os.family);
  }
  if (isMatch) {
    obj = { id: closure_3, type: AUDIO_INPUT, index: -1, name: "Default" };
    mapped.unshift(obj);
  }
  return mapped;
}
({ DEFAULT_DEVICE_ID: closure_3, DeviceTypes: closure_4 } = AudioSubsystems);
const result = require("assertInjected").fileFinishedImporting("../discord_common/js/packages/media-engine/native/Devices.tsx");

export { sanitizeDevices };
export const getAudioInputDevices = function getAudioInputDevices() {
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const voiceEngine = outer1_0(outer1_2[2]).getVoiceEngine();
    const inputDevices = voiceEngine.getInputDevices((arg0) => callback(outer2_5(outer2_4.AUDIO_INPUT, arg0)));
  });
};
export const getAudioOutputDevices = function getAudioOutputDevices() {
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const voiceEngine = outer1_0(outer1_2[2]).getVoiceEngine();
    const outputDevices = voiceEngine.getOutputDevices((arg0) => callback(outer2_5(outer2_4.AUDIO_OUTPUT, arg0)));
  });
};
export const getVideoInputDevices = function getVideoInputDevices(arg0) {
  return new Promise((arg0) => {
    let closure_0 = arg0;
    const voiceEngine = outer1_0(outer1_2[2]).getVoiceEngine();
    const videoInputDevices = voiceEngine.getVideoInputDevices((arg0) => callback(outer2_5(outer2_4.VIDEO_INPUT, arg0)));
  });
};
