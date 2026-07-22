// Module ID: 10578
// Function ID: 82571
// Name: useStreamError
// Dependencies: []
// Exports: default

// Module 10578 (useStreamError)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = { [arg1(dependencyMap[1]).AVError.STREAM_SOUNDSHARE_FAILED]: 0, [arg1(dependencyMap[1]).AVError.STREAM_SEND_HIGH_PACKET_LOSS]: 1, [arg1(dependencyMap[1]).AVError.STREAM_VIEW_HIGH_PACKET_LOSS]: 1, [arg1(dependencyMap[1]).AVError.STREAM_SEND_LOW_FPS]: 2, [arg1(dependencyMap[1]).AVError.STREAM_VIEW_LOW_FPS]: 2, [arg1(dependencyMap[1]).AVError.STREAM_BAD_NETWORK_QUALITY]: 3 };
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/go_live/useStreamError.tsx");

export default function useStreamError(id) {
  id = id.id;
  const arg1 = id;
  const items = [closure_2];
  const items1 = [id];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const activeErrors = activeErrors.getActiveErrors();
    const found = Array.from(activeErrors.values()).filter((streamKey) => {
      let tmp = "streamKey" in streamKey;
      if (tmp) {
        tmp = streamKey.streamKey === closure_0;
      }
      if (tmp) {
        tmp = null != closure_3[streamKey.type];
      }
      return tmp;
    });
    const first = found.sort((arg0, arg1) => {
      let num = 0;
      if (null != closure_3[arg0.type]) {
        num = tmp;
      }
      let num2 = 0;
      if (null != closure_3[arg1.type]) {
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
