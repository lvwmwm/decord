// Module ID: 13410
// Function ID: 13411
// Name: useVoicePanelDockLevelProps
// Dependencies: [19, 4892, 2132, 4946, 6852, 13411, 1071, 12962, 504, 10502, 10405, 2]
// Exports: useVoicePanelDockGlowLevelProps, useVoicePanelDockSpeakerLevelProps

// Module 13410 (useVoicePanelDockLevelProps)
import Constants from "Constants" /* 1071 */;
import MediaEngineStore2 from "MediaEngineStore" /* 2132 */;
import VoicePanelDockSlotStore from "VoicePanelDockSlotStore" /* 13411 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;
import SpeakingStore from "SpeakingStore" /* 6852 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const MediaEngineStore = MediaEngineStore2;
let _require;

const DEFAULT_VAD_THRESHOLD = MediaEngineStore2.DEFAULT_VAD_THRESHOLD;
let closure_9 = VoicePanelDockSlotStore.VoicePanelDockHiddenContext;
const InputModes = Constants.InputModes;
let closure_11 = { tween: true, riseDurationMs: 90, fallDurationMs: 180, tweenFrameRate: 20 };
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockLevelProps.tsx");

export function useVoicePanelDockGlowLevelProps() {
  let channel;
  let currentUserPTTActive;
  let floorDb;
  let num;
  let num2;
  let voiceChannelId;
  let obj = react;
  const context = react.useContext(closure_9);
  const obj2 = num2(12962);
  const shouldAnimateSpeakerLevels = obj2.useShouldAnimateSpeakerLevels("VoicePanelDock");
  const items = [SelectedChannelStore, ChannelStore];
  const obj3 = num2(504);
  const stateFromStores = obj3.useStateFromStores(items, () => channel.getChannel(voiceChannelId.getVoiceChannelId()));
  const obj4 = num2(10502);
  const mute = obj4.createMuteHandler(floorDb(10405)(stateFromStores)).mute;
  const items1 = [MediaEngineStore, SpeakingStore];
  const obj5 = num2(504);
  const stateFromStoresObject = obj5.useStateFromStoresObject(items1, () => {
    const mode = MediaEngineStore.getMode();
    const modeOptions = MediaEngineStore.getModeOptions();
    let threshold = modeOptions.threshold;
    if (mode === constants.VOICE_ACTIVITY) {
      const obj = { floorDb: threshold, mode, isPTTActive: currentUserPTTActive.isCurrentUserPTTActive() };
      return obj;
    }
    threshold = DEFAULT_VAD_THRESHOLD;
  });
  floorDb = stateFromStoresObject.floorDb;
  if (context) {
    num2 = 0;
    num = 0;
  } else if (!shouldAnimateSpeakerLevels) {
    num2 = 0;
    const tmp8 = tmp5 === InputModes.VOICE_ACTIVITY || tmp6;
    if (!mute) {
      num2 = 0;
      if (tmp8) {
        num2 = 1;
      }
    }
    num = num2;
  }
  const items2 = [floorDb, num];
  return obj.useMemo(() => {
    const obj = { staticLevel: num2, minLevel: Math.max((floorDb - -55) / 45, 0), maxLevel: (floorDb + 25 - -55) / 45 };
    const merged = Object.assign(closure_11);
    return obj;
  }, items2);
}
export function useVoicePanelDockSpeakerLevelProps() {
  let closure_0;
  let obj = react;
  const context = react.useContext(closure_9);
  const obj2 = require("MobileRTCV2Experiment");
  const tmp2 = obj2.useShouldAnimateSpeakerLevels("VoicePanelDock") && !context;
  _require = tmp2;
  const items = [tmp2];
  return obj.useMemo(() => {
    const obj = { staticLevel: 0 };
    const merged = Object.assign(closure_11);
    return obj;
  }, items);
}
