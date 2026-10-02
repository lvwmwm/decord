// Module ID: 17155
// Function ID: 17156
// Name: SoundpackActions
// Dependencies: [9336, 1086, 1253, 585, 2]
// Exports: setSoundpack

// Module 17155 (SoundpackActions)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import SoundpackStore from "SoundpackStore" /* 9336 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  obj3.dispatch(obj4);
};
