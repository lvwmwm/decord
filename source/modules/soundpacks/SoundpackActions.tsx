// Module ID: 16206
// Function ID: 16207
// Name: setSoundpack
// Dependencies: [10268, 676, 698, 709, 2]
// Exports: setSoundpack

// Module 16206 (setSoundpack)
import Soundpacks from "Soundpacks";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  let obj = importDefault(698);
  obj = { soundpack: CLASSIC, previous_soundpack: soundpack.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj);
  obj = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  importDefault(709).dispatch(obj);
};
