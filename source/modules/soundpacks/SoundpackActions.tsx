// Module ID: 15951
// Function ID: 122326
// Name: setSoundpack
// Dependencies: []
// Exports: setSoundpack

// Module 15951 (setSoundpack)
let closure_2 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  let obj = importDefault(dependencyMap[2]);
  obj = { soundpack: CLASSIC, previous_soundpack: soundpack.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj);
  obj = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  importDefault(dependencyMap[3]).dispatch(obj);
};
