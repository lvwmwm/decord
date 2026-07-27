// Module ID: 14964
// Function ID: 114091
// Name: usePrivateChannelWave
// Dependencies: [5, 57, 31, 653, 4124, 11363, 1198, 5685, 3832, 1212, 11362, 14965, 2]
// Exports: default

// Module 14964 (usePrivateChannelWave)
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
  obj.waveShouldShow = _require(14965).usePrivateChannelWaveEligible(id, arg1);
  obj.wavePressed = callback;
  return obj;
};
