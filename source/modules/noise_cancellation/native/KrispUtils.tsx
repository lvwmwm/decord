// Module ID: 12985
// Function ID: 12986
// Name: getKrispModel
// Dependencies: [4334, 2]
// Exports: getKrispModel, setKrispModelOverride, setKrispSuppressionLevel

// Module 12985 (getKrispModel)
const result = require("set").fileFinishedImporting("modules/noise_cancellation/native/KrispUtils.tsx");

export const getKrispModel = function getKrispModel() {
  return new Promise((arg0) => {
    const callback = arg0;
    const voiceEngine = callback(table[0]).getVoiceEngine();
    if (null != voiceEngine.getNcModelFilename) {
      const ncModelFilename = voiceEngine.getNcModelFilename((arg0) => callback(arg0));
    } else {
      arg0(null);
    }
  });
};
export function setKrispSuppressionLevel() {

}
export function setKrispModelOverride() {

}
