// Module ID: 14745
// Function ID: 14746
// Name: useVoicePanelDockLevelProps
// Dependencies: [19, 5092, 2130, 5146, 6878, 1072, 14465, 504, 12956, 12932, 2]
// Exports: useVoicePanelDockGlowLevelProps, useVoicePanelDockSpeakerLevelProps

// Module 14745 (useVoicePanelDockLevelProps)
import Constants from "Constants" /* 1072 */;
import MediaEngineStore2 from "MediaEngineStore" /* 2130 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import SpeakingStore from "SpeakingStore" /* 6878 */;
import size from "module_2" /* 2 */;

const MediaEngineStore = MediaEngineStore2;

const DEFAULT_VAD_THRESHOLD = MediaEngineStore2.DEFAULT_VAD_THRESHOLD;
const InputModes = Constants.InputModes;
let closure_10 = { tween: true, riseDurationMs: 90, fallDurationMs: 180, tweenFrameRate: 20 };
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockLevelProps.tsx");

export function useVoicePanelDockGlowLevelProps() {
  let channel;
  let currentUserPTTActive;
  let floorDb;
  let num;
  let voiceChannelId;
  let tmp;
  let obj = num(14465);
  const shouldAnimateSpeakerLevels = obj.useShouldAnimateSpeakerLevels("VoicePanelDock");
  const items = [SelectedChannelStore, ChannelStore];
  const obj2 = num(504);
  const stateFromStores = obj2.useStateFromStores(items, () => channel.getChannel(voiceChannelId.getVoiceChannelId()));
  const obj3 = num(12956);
  const mute = obj3.createMuteHandler(floorDb(12932)(stateFromStores)).mute;
  const items1 = [MediaEngineStore, SpeakingStore];
  const obj4 = num(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => {
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
  if (!shouldAnimateSpeakerLevels) {
    num = 0;
    const tmp8 = tmp5 === InputModes.VOICE_ACTIVITY || tmp6;
    if (!mute) {
      num = 0;
      if (tmp8) {
        num = 1;
      }
    }
    tmp = num;
  }
  const items2 = [floorDb, tmp];
  return react.useMemo(() => {
    const obj = { staticLevel: num, minLevel: Math.max((floorDb - -55) / 45, 0), maxLevel: (floorDb + 25 - -55) / 45 };
    const merged = Object.assign(closure_10);
    return obj;
  }, items2);
}
export function useVoicePanelDockSpeakerLevelProps() {
  let shouldAnimateSpeakerLevels;
  let obj = shouldAnimateSpeakerLevels(14465);
  shouldAnimateSpeakerLevels = obj.useShouldAnimateSpeakerLevels("VoicePanelDock");
  const items = [shouldAnimateSpeakerLevels];
  return react.useMemo(() => {
    const obj = { staticLevel: 0 };
    const merged = Object.assign(closure_10);
    return obj;
  }, items);
}
