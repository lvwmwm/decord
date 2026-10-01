// Module ID: 8897
// Function ID: 8898
// Name: useStreamError
// Dependencies: [8874, 8875, 504, 2]
// Exports: default

// Module 8897 (useStreamError)
import AVError from "AVError" /* 8875 */;
import AVErrorStore from "AVErrorStore" /* 8874 */;
import size from "module_2" /* 2 */;

let closure_3 = { [AVError.AVError.STREAM_SOUNDSHARE_FAILED]: 0, [AVError.AVError.STREAM_SEND_HIGH_PACKET_LOSS]: 1, [AVError.AVError.STREAM_VIEW_HIGH_PACKET_LOSS]: 1, [AVError.AVError.STREAM_SEND_LOW_FPS]: 2, [AVError.AVError.STREAM_VIEW_LOW_FPS]: 2, [AVError.AVError.STREAM_BAD_NETWORK_QUALITY]: 3 };
const result = size.fileFinishedImporting("modules/go_live/useStreamError.tsx");

export default function useStreamError(id) {
  id = id.id;
  const items = [AVErrorStore];
  const items1 = [id];
  const obj = id(504);
  return obj.useStateFromStores(items, () => {
    const activeErrors = AVErrorStore.getActiveErrors();
    const arr = Array.from(activeErrors.values());
    const found = arr.filter((streamKey) => "streamKey" in streamKey && streamKey.streamKey === id && null != closure_2_3[streamKey.type]);
    const first = found.sort((arg0, arg1) => {
      let num = closure_1_3[arg0.type];
      const tmp = closure_1_3;
      if (num == null) {
        num = 0;
      }
      let num2 = tmp[arg1.type];
      if (num2 == null) {
        num2 = 0;
      }
      return num - num2;
    })[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    return type;
  }, items1);
};
