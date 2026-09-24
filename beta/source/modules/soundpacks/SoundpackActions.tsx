// Module ID: 17805
// Function ID: 17806
// Name: SoundpackActions
// Dependencies: [10177, 1078, 1245, 577, 2]
// Exports: setSoundpack

// Module 17805 (SoundpackActions)
import DispatcherDefault from "Dispatcher" /* 577 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import SoundpackStore from "SoundpackStore" /* 10177 */;

const AnalyticEvents = fn(1078).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() });
  const obj2 = { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() };
  DispatcherDefault.dispatch({ type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name });
};
