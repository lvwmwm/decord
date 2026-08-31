// Module ID: 16927
// Function ID: 16928
// Name: setSoundpack
// Dependencies: [9955, 676, 698, 709, 2]
// Exports: setSoundpack

// Module 16927 (setSoundpack)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "Soundpacks" /* 9955 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  let obj = expandEventPropertiesDefault;
  obj = { soundpack: CLASSIC, previous_soundpack: soundpack.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj);
  obj = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  dispatcherDefault.dispatch(obj);
};
