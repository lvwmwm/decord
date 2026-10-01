// Module ID: 15670
// Function ID: 15671
// Name: usePrivateChannelWave
// Dependencies: [5, 32, 19, 1074, 4829, 11747, 1101, 6876, 4528, 1115, 11746, 15671, 2]
// Exports: default

// Module 15670 (usePrivateChannelWave)
import MessageConstants from "MessageConstants" /* 4829 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, closure_2;

let metroImportDefault;
let metroRequire;
({ ME: metroRequire, Routes: metroImportDefault } = Constants);
const MessageSendLocation = MessageConstants.MessageSendLocation;
const result = size.fileFinishedImporting("modules/channel/usePrivateChannelWave.native.tsx");

export default function usePrivateChannelWave(id, arg1) {
  let callback;
  let first;
  let obj2;
  _require = id;
  [first, dependencyMap] = react.useState(false);
  const items = [id.id, first];
  let obj = { waveShouldShow: obj2.usePrivateChannelWaveEligible(id, arg1), wavePressed: callback };
  callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_1;
    let intl;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            id = tmp4;
            const tmp47 = first;
            if (!tmp47) {
              closure_2(true);
              const obj7 = { channelId: id.id, source: "Messages Tab" };
              const obj3 = id(closure_2[5]);
              obj3.trackWaveCtaClicked(obj7);
              const obj5 = id(closure_2[6]);
              obj5.transitionTo(closure_1_7.CHANNEL(closure_1_6, id.id));
              c3 = 1;
              const obj6 = tmp(closure_2[7]);
              const obj8 = { location: constants.SEND_WAVE };
              c4 = 2;
              c5 = 1;
              const obj9 = { value: obj6.sendStickers(id.id, ["749054660769218631"], "", obj8), done: false };
              return obj9;
            }
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            id = closure_2;
            const ok = id.ok || 429 !== id.status;
            if (!ok) {
              const obj10 = { key: "HANDLE_WAVE_PRESS_TOAST", content: intl.string(id(closure_2[9]).t.Whhv4w), icon: tmp(closure_2[10]) };
              const open = tmp(closure_2[8]).open;
              const tmp14 = tmp(closure_2[8]);
              intl = id(closure_2[9]).intl;
              open(obj10);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          closure_129_2(false);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp41) {
        closure_2 = tmp41;
        if (0 === c3) {
          c5 = 3;
          throw tmp41;
        } else {
          c4 = 1;
        }
      }
    }
  }), items);
  obj2 = require("usePrivateChannelWaveEligible");
  return obj;
};
