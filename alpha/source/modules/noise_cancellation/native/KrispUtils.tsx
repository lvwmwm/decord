// Module ID: 5235
// Function ID: 5236
// Name: noise_cancellation/KrispUtils
// Dependencies: [2014, 2]
// Exports: getKrispModel, setKrispModelOverride, setKrispSuppressionLevel

// Module 5235 (noise_cancellation/KrispUtils)
import inject from "inject" /* 2014 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/noise_cancellation/native/KrispUtils.tsx");

export const getKrispModel = function getKrispModel() {
  const promise = new Promise((fn) => {
    let closure_0 = fn;
    const obj = inject;
    const voiceEngine = obj.getVoiceEngine();
    if (null != voiceEngine.getNcModelFilename) {
      const ncModelFilename = voiceEngine.getNcModelFilename((arg0) => closure_0(arg0));
    } else {
      fn(null);
    }
  });
  return promise;
};
export function setKrispSuppressionLevel() {

}
export function setKrispModelOverride() {

}
