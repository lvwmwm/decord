// Module ID: 17996
// Function ID: 17997
// Name: SoundpackActions
// Dependencies: [10941, 1085, 1265, 584, 2]
// Exports: setSoundpack

// Module 17996 (SoundpackActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import SoundpackStore from "SoundpackStore" /* 10941 */;
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
