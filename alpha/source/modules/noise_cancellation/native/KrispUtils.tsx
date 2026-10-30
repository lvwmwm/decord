// Module ID: 5887
// Function ID: 5888
// Name: noise_cancellation/KrispUtils
// Dependencies: [2009, 2]
// Exports: getKrispModel, setKrispModelOverride, setKrispSuppressionLevel

// Module 5887 (noise_cancellation/KrispUtils)
import inject from "inject" /* 2009 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/noise_cancellation/native/KrispUtils.tsx");

export function getKrispModel() {
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
}
export function setKrispSuppressionLevel() {

}
export function setKrispModelOverride() {

}
