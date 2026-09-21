// Module ID: 17791
// Function ID: 17792
// Name: SoundpackActions
// Dependencies: [10159, 1074, 1241, 573, 2]
// Exports: setSoundpack

// Module 17791 (SoundpackActions)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SoundpackStore from "SoundpackStore" /* 10159 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() });
  const obj2 = { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() };
  DispatcherDefault.dispatch({ type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name });
};
