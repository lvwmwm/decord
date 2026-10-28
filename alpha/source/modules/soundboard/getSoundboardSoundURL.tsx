// Module ID: 16071
// Function ID: 16072
// Name: getSoundboardSoundURL
// Dependencies: [1084, 2]
// Exports: default

// Module 16071 (getSoundboardSoundURL)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/soundboard/getSoundboardSoundURL.tsx");

export default function getSoundboardSoundURL(arg0) {
  let combined;
  if ("development" !== window.GLOBAL_ENV.PROJECT_ENV) {
    const _HermesInternal2 = HermesInternal;
    combined = "https://" + tmp + Endpoints.SOUNDBOARD_SOUND(arg0);
  } else {
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + location.protocol + window.GLOBAL_ENV.API_ENDPOINT + Endpoints.SOUNDBOARD_SOUND(arg0);
  }
  return combined;
};
