// Module ID: 16115
// Function ID: 124823
// Name: setSoundpack
// Dependencies: [10277, 653, 675, 686, 2]
// Exports: setSoundpack

// Module 16115 (setSoundpack)
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
