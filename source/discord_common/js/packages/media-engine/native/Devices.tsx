// Module ID: 4230
// Function ID: 37079
// Name: sanitizeDevices
// Dependencies: []
// Exports: getAudioInputDevices, getAudioOutputDevices, getVideoInputDevices

// Module 4230 (sanitizeDevices)
function sanitizeDevices(AUDIO_INPUT, items) {
  const require = AUDIO_INPUT;
  const importDefault = false;
  const mapped = items.map((arg0, arg1) => {
    let guid;
    let index;
    let name;
    let tmp = arg1;
    ({ guid, name, index } = arg0);
    if (arg0 === constants.VIDEO_INPUT) {
      let obj = /^front/i;
      if (obj.test(name)) {
        let tmp12 = closure_3;
        let str2 = "Default";
      }
      if (null != index) {
        tmp = index;
      }
      obj = { id: tmp12, type: arg0, index: tmp, name: str2, originalName: tmp3, originalId: tmp2, facing: tmp4, hardwareId: tmp5, containerId: tmp6, effects: tmp7, macosTransportType: tmp8, windowsEndpointFormFactor: tmp9, windowsDeviceService: tmp10 };
      return obj;
    }
    if (obj2.test(name)) {
      let closure_1 = true;
      tmp12 = closure_3;
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
    if (null != importDefault(dependencyMap[1])) {
      const os = importDefault(dependencyMap[1]).os;
      if (null != os) {
        family = os.family;
      }
    }
    isMatch = null != family;
  }
  if (isMatch) {
    let obj = /^win/i;
    isMatch = obj.test(importDefault(dependencyMap[1]).os.family);
  }
  if (isMatch) {
    obj = { id: closure_3, type: AUDIO_INPUT, index: -1, name: "Default" };
    mapped.unshift(obj);
  }
  return mapped;
}
const _module = require(dependencyMap[0]);
({ DEFAULT_DEVICE_ID: closure_3, DeviceTypes: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("../discord_common/js/packages/media-engine/native/Devices.tsx");

export { sanitizeDevices };
export const getAudioInputDevices = function getAudioInputDevices() {
  return new Promise((arg0) => {
    const voiceEngine = arg0(closure_2[2]).getVoiceEngine();
    const inputDevices = voiceEngine.getInputDevices((arg0) => arg0(callback(constants.AUDIO_INPUT, arg0)));
  });
};
export const getAudioOutputDevices = function getAudioOutputDevices() {
  return new Promise((arg0) => {
    const voiceEngine = arg0(closure_2[2]).getVoiceEngine();
    const outputDevices = voiceEngine.getOutputDevices((arg0) => arg0(callback(constants.AUDIO_OUTPUT, arg0)));
  });
};
export const getVideoInputDevices = function getVideoInputDevices(arg0) {
  return new Promise((arg0) => {
    const voiceEngine = arg0(closure_2[2]).getVoiceEngine();
    const videoInputDevices = voiceEngine.getVideoInputDevices((arg0) => arg0(callback(constants.VIDEO_INPUT, arg0)));
  });
};
