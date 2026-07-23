// Module ID: 12830
// Function ID: 99771
// Name: _queryAudioEffects
// Dependencies: [5, 653, 4, 478, 686, 675, 2]
// Exports: default

// Module 12830 (_queryAudioEffects)
import expandLocation from "expandLocation";
import { AnalyticEvents } from "ME";

const require = arg1;
function _queryAudioEffects() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const logger = new require("dispatcher").Logger("AudioEffects");
const result = require("log").fileFinishedImporting("modules/noise_cancellation/queryAudioEffects.tsx");

export default function queryAudioEffects() {
  return _queryAudioEffects(...arguments);
};
