// Module ID: 11380
// Function ID: 11381
// Name: useVoicePanelDockHeight
// Dependencies: [5893, 6930, 11381, 504, 1627, 2]
// Exports: default

// Module 11380 (useVoicePanelDockHeight)
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11381 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5893 */;
import VoicePanelStore from "VoicePanelStore" /* 6930 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const getVoicePanelDockHeight = VoicePanelDockConstants.getVoicePanelDockHeight;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockHeight.tsx");

export default function useVoicePanelDockHeight() {
  let closure_0;
  let num;
  let tmp = VoicePanelStore((voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = closure_0 && null != RTCConnectionStore.getChannelId();
    return tmp;
  }, items1);
  VoicePanelStore((voicePanelsWithDock) => {
    const arr = Array.from(voicePanelsWithDock.voicePanelsWithDock);
    return arr.some((item) => {
      const voicePanelsPIP = voicePanelsWithDock.voicePanelsPIP;
      return voicePanelsPIP.has(item);
    });
  });
  if (stateFromStores) {
    num = getVoicePanelDockHeight(tmp4);
  } else {
    num = 0;
  }
  return num;
};
