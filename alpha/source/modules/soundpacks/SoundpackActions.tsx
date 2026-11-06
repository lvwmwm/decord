// Module ID: 19809
// Function ID: 19810
// Name: SoundpackActions
// Dependencies: [11175, 1072, 1252, 572, 2]
// Exports: setSoundpack

// Module 19809 (SoundpackActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import SoundpackStore from "SoundpackStore" /* 11175 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export function setSoundpack(CLASSIC, name) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { soundpack: CLASSIC, previous_soundpack: SoundpackStore.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  obj3.dispatch(obj4);
}
