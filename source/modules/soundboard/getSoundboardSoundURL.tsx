// Module ID: 13332
// Function ID: 101377
// Name: getSoundboardSoundURL
// Dependencies: []
// Exports: default

// Module 13332 (getSoundboardSoundURL)
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/soundboard/getSoundboardSoundURL.tsx");

export default function getSoundboardSoundURL(arg0) {
  if ("development" !== window.GLOBAL_ENV.PROJECT_ENV) {
    const _HermesInternal2 = HermesInternal;
    let combined = "https://" + tmp + Endpoints.SOUNDBOARD_SOUND(arg0);
  } else {
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT + Endpoints.SOUNDBOARD_SOUND(arg0);
  }
  return combined;
};
