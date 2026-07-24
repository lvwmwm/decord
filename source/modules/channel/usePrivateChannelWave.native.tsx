// Module ID: 14953
// Function ID: 113959
// Name: usePrivateChannelWave
// Dependencies: [5, 57, 31, 653, 4123, 11399, 1198, 6691, 3831, 1212, 11398, 14954, 2]
// Exports: default

// Module 14953 (usePrivateChannelWave)
import getDmHasMessageHistory from "getDmHasMessageHistory";
import _slicedToArray from "_slicedToArray";
import result from "result";
import ME from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

let closure_6;
let closure_7;
const require = arg1;
({ ME: closure_6, Routes: closure_7 } = ME);
const result = require("result").fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default function usePrivateChannelWave(id) {
  const _require = id;
  const tmp2 = callback2(React.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [id.id, first];
  const obj = {};
  callback = React.useCallback(callback(tmp), items);
  obj.waveShouldShow = _require(14954).usePrivateChannelWaveEligible(id, arg1);
  obj.wavePressed = callback;
  return obj;
};
