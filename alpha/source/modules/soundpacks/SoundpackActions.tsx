// Module ID: 19129
// Function ID: 19130
// Name: SoundpackActions
// Dependencies: [11567, 1084, 1264, 584, 2]
// Exports: setSoundpack

// Module 19129 (SoundpackActions)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import SoundpackStore from "SoundpackStore" /* 11567 */;
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
