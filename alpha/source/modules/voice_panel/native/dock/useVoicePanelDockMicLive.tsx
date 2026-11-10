// Module ID: 19639
// Function ID: 19640
// Name: useVoicePanelDockMicLive
// Dependencies: [19, 4991, 504, 12145, 7601, 1652, 5372, 2]
// Exports: default

// Module 19639 (useVoicePanelDockMicLive)
import timing_timing from "timing/timing" /* 5372 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockMicLive.tsx");

export default function useVoicePanelDockMicLive(arg0) {
  let closure_0;
  let mute;
  let sharedValue;
  _require = arg0;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
  const obj2 = require("VoiceActionUtils");
  mute = obj2.createMuteHandler(mute(sharedValue[4])(stateFromStores)).mute;
  const tmp2 = require("module_1652");
  let num = 1;
  const useSharedValue = tmp2.useSharedValue;
  if (mute) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const items1 = [mute, sharedValue];
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    const withTiming = timing_timing.withTiming;
    timing_timing;
    if (mute) {
      num = 0;
    }
    const result = set(withTiming(num, { duration: 200 }));
  }, items1);
  return sharedValue;
};
