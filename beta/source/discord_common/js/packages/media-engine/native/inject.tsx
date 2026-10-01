// Module ID: 1995
// Function ID: 1996
// Name: inject
// Dependencies: [2]
// Exports: getOpenH264LibraryPath, getVoiceEngine, inject, setProcessPriority, supported, supportsFeature

// Module 1995 (inject)
import size from "module_2" /* 2 */;

let voiceEngine;

const result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/native/inject.tsx");

export function inject(arg0) {
  let closure_1_0 = arg0;
}
export const supported = function supported() {
  if (null == uiStore) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return uiStore.supported();
  }
};
export const supportsFeature = function supportsFeature(arg0) {
  if (null == uiStore) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return uiStore.supportsFeature(arg0);
  }
};
export const setProcessPriority = function setProcessPriority(arg0) {
  if (null == uiStore) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    uiStore.setProcessPriority(arg0);
  }
};
export const getVoiceEngine = function getVoiceEngine() {
  if (null == uiStore) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    let tmp = voiceEngine;
    if (voiceEngine == null) {
      voiceEngine = uiStore.getVoiceEngine();
      tmp = voiceEngine;
    }
    return tmp;
  }
};
export const getOpenH264LibraryPath = function getOpenH264LibraryPath() {
  if (null == uiStore) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Native dependencies have not been injected.");
    throw error;
  } else {
    return uiStore.getOpenH264LibraryPath();
  }
};
