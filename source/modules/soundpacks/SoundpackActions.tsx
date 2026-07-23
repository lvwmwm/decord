// Module ID: 16068
// Function ID: 124499
// Name: setSoundpack
// Dependencies: [10247, 653, 675, 686, 2]
// Exports: setSoundpack

// Module 16068 (setSoundpack)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  let obj = importDefault(675);
  obj = { soundpack: CLASSIC, previous_soundpack: soundpack.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj);
  obj = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  importDefault(686).dispatch(obj);
};
