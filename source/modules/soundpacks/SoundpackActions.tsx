// Module ID: 16475
// Function ID: 16476
// Name: setSoundpack
// Dependencies: [9785, 676, 698, 709, 2]
// Exports: setSoundpack

// Module 16475 (setSoundpack)
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
