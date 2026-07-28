// Module ID: 12878
// Function ID: 100102
// Name: getAudioFidelityExperimentConfig
// Dependencies: [1428, 1327, 2]
// Exports: getVoiceFidelityCaps

// Module 12878 (getAudioFidelityExperimentConfig)
import ApexExperiment from "ApexExperiment";

function getAudioFidelityExperimentConfig(location) {
  return config.getConfig({ location: location.location });
}
let obj = { kind: "user", name: "2026-08-audio-fidelity", defaultConfig: { capSampleRate: false, capChannelCount: false, condition: "none" }, variations: { [1]: { capSampleRate: true, capChannelCount: false, condition: "krisp" }, [2]: { capSampleRate: true, capChannelCount: false, condition: "noiseSuppression" }, [3]: { capSampleRate: true, capChannelCount: false, condition: "echoCancellation" }, [4]: { capSampleRate: true, capChannelCount: false, condition: "any" }, [5]: { capSampleRate: true, capChannelCount: true, condition: "krisp" }, [6]: { capSampleRate: true, capChannelCount: true, condition: "noiseSuppression" }, [7]: { capSampleRate: true, capChannelCount: true, condition: "echoCancellation" }, [8]: { capSampleRate: true, capChannelCount: true, condition: "any" } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/AudioFidelityExperiment.tsx");

export { getAudioFidelityExperimentConfig };
export const getVoiceFidelityCaps = function getVoiceFidelityCaps(location, krispEnabled) {
  let obj = { location: location.location };
  const tmp = getAudioFidelityExperimentConfig(obj);
  const condition = tmp.condition;
  if ("krisp" === condition) {
    let flag = krispEnabled.krispEnabled;
  } else if ("noiseSuppression" === condition) {
    flag = krispEnabled.noiseSuppressionEnabled;
  } else if ("echoCancellation" === condition) {
    flag = krispEnabled.echoCancellationEnabled;
  } else if ("any" === condition) {
    flag = krispEnabled.krispEnabled || krispEnabled.noiseSuppressionEnabled || krispEnabled.echoCancellationEnabled;
    const tmp5 = krispEnabled.krispEnabled || krispEnabled.noiseSuppressionEnabled || krispEnabled.echoCancellationEnabled;
  } else {
    flag = false;
    if ("none" !== condition) {
      require(1327) /* isDiscordFrontendDevelopment */.assertNever(condition);
      const obj2 = require(1327) /* isDiscordFrontendDevelopment */;
    }
  }
  if (flag) {
    obj = {};
    let num2 = 0;
    if (tmp.capSampleRate) {
      num2 = 32000;
    }
    obj.maxSampleRateHz = num2;
    let num3 = 0;
    if (tmp.capChannelCount) {
      num3 = 1;
    }
    obj.maxChannelCount = num3;
  } else {
    obj = { maxSampleRateHz: 0, maxChannelCount: 0 };
  }
  return obj;
};
