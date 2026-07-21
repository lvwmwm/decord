// Module ID: 4175
// Function ID: 35807
// Name: assertInjected
// Dependencies: []
// Exports: getOpenH264LibraryPath, getVoiceEngine, inject, setProcessPriority, supported, supportsFeature

// Module 4175 (assertInjected)
function assertInjected() {
  if (null == closure_0) {
    const _Error = Error;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  }
}
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/media-engine/native/inject.tsx");

export function inject(arg0) {

}
export const supported = function supported() {
  assertInjected();
  return uiStore.supported();
};
export const supportsFeature = function supportsFeature(arg0) {
  assertInjected();
  return uiStore.supportsFeature(arg0);
};
export const setProcessPriority = function setProcessPriority(arg0) {
  assertInjected();
  uiStore.setProcessPriority(arg0);
};
export const getVoiceEngine = function getVoiceEngine() {
  assertInjected();
  if (null == voiceEngine) {
    const voiceEngine = uiStore.getVoiceEngine();
  }
  return voiceEngine;
};
export const getOpenH264LibraryPath = function getOpenH264LibraryPath() {
  assertInjected();
  return uiStore.getOpenH264LibraryPath();
};
