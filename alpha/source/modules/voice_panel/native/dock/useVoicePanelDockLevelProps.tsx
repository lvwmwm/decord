// Module ID: 14262
// Function ID: 14263
// Name: useVoicePanelDockLevelProps
// Dependencies: [19, 4991, 2130, 5045, 6814, 1072, 13985, 504, 12145, 7601, 2]
// Exports: useVoicePanelDockGlowLevelProps, useVoicePanelDockSpeakerLevelProps

// Module 14262 (useVoicePanelDockLevelProps)
import Constants from "Constants" /* 1072 */;
import MediaEngineStore2 from "MediaEngineStore" /* 2130 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import SpeakingStore from "SpeakingStore" /* 6814 */;
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
  let obj = num(13985);
  const shouldAnimateSpeakerLevels = obj.useShouldAnimateSpeakerLevels("VoicePanelDock");
  const items = [SelectedChannelStore, ChannelStore];
  const obj2 = num(504);
  const stateFromStores = obj2.useStateFromStores(items, () => channel.getChannel(voiceChannelId.getVoiceChannelId()));
  const obj3 = num(12145);
  const mute = obj3.createMuteHandler(floorDb(7601)(stateFromStores)).mute;
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
  let obj = shouldAnimateSpeakerLevels(13985);
  shouldAnimateSpeakerLevels = obj.useShouldAnimateSpeakerLevels("VoicePanelDock");
  const items = [shouldAnimateSpeakerLevels];
  return react.useMemo(() => {
    const obj = { staticLevel: 0 };
    const merged = Object.assign(closure_10);
    return obj;
  }, items);
}
