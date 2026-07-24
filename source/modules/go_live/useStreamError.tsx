// Module ID: 10617
// Function ID: 82813
// Name: useStreamError
// Dependencies: [10595, 8896, 566, 2]
// Exports: default

// Module 10617 (useStreamError)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_3 = { [arg1(8896).AVError.STREAM_SOUNDSHARE_FAILED]: 0, [arg1(8896).AVError.STREAM_SEND_HIGH_PACKET_LOSS]: 1, [arg1(8896).AVError.STREAM_VIEW_HIGH_PACKET_LOSS]: 1, [arg1(8896).AVError.STREAM_SEND_LOW_FPS]: 2, [arg1(8896).AVError.STREAM_VIEW_LOW_FPS]: 2, [arg1(8896).AVError.STREAM_BAD_NETWORK_QUALITY]: 3 };
const result = require("initialize").fileFinishedImporting("modules/go_live/useStreamError.tsx");

export default function useStreamError(id) {
  id = id.id;
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [id];
  return id(566).useStateFromStores(items, () => {
    const activeErrors = outer1_2.getActiveErrors();
    const found = Array.from(activeErrors.values()).filter((streamKey) => {
      let tmp = "streamKey" in streamKey;
      if (tmp) {
        tmp = streamKey.streamKey === outer1_0;
      }
      if (tmp) {
        tmp = null != outer2_3[streamKey.type];
      }
      return tmp;
    });
    const first = found.sort((arg0, arg1) => {
      let num = 0;
      if (null != outer2_3[arg0.type]) {
        num = tmp;
      }
      let num2 = 0;
      if (null != outer2_3[arg1.type]) {
        num2 = tmp2;
      }
      return num - num2;
    })[0];
    let type;
    if (null != first) {
      type = first.type;
    }
    return type;
  }, items1);
};
