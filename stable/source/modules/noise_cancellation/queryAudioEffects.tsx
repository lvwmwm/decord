// Module ID: 13615
// Function ID: 13616
// Name: queryAudioEffects
// Dependencies: [5, 1086, 4, 1371, 13559, 4453, 585, 1253, 2]
// Exports: default

// Module 13615 (queryAudioEffects)
import logger_Logger from "logger/Logger" /* 4 */;
import Constants from "Constants" /* 1086 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1371 */;
import DiscordNativeDefault from "DiscordNative" /* 4453 */;
import _modDef13559 from "module_13559" /* 13559 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let deviceId;

let obj = function _queryAudioEffects() {
  obj = _asyncToGenerator(async (deviceId, value, arg2) => {
    let closure_3;
    let closure_4;
    let closure_5;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      deviceId = value;
      const obj13 = closure_2;
      const obj14 = utils_PlatformUtils;
      const tmp47 = deviceId;
      if (!obj14.isWindows()) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error1 = new Error("Audio effects querying not supported on non-Windows platforms");
        return reject(error1);
      }
      const obj5 = _modDef13559;
      if (!obj5.satisfies(DiscordNativeDefault.os.release, ">=10.0.22000")) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const reject2 = Promise.reject;
        const error = new Error("Audio effects querying likely not supported on this Windows version.");
        return reject2(error);
      }
      await obj13.getDeviceAudioEffects(tmp47);
      closure_2 = closure_5;
      closure_132_5.error("Failed to probe audio effects for device", closure_2);
      const obj3 = closure_132_1(closure_132_2[7]);
      obj3.track(closure_132_4.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: false });
      value = await "IconComponent";
      const obj10 = { type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId };
      const dispatch = closure_132_1(closure_132_2[6]).dispatch;
      closure_132_1(closure_132_2[6]);
      const merged = Object.assign(value);
      dispatch(obj10);
      const obj12 = { succeeded: true, active_effects: value.active, available_effects: value.available };
      const obj11 = closure_132_1(closure_132_2[7]);
      obj11.track(closure_132_4.AUDIO_EFFECTS_PROBE_COMPLETED, obj12);
      return value;
    })();
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const logger = new logger_Logger.Logger("AudioEffects");
const result = size.fileFinishedImporting("modules/noise_cancellation/queryAudioEffects.tsx");

export default function queryAudioEffects() {
  return obj(...arguments);
};
