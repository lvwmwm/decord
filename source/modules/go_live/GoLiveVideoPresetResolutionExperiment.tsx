// Module ID: 10685
// Function ID: 83209
// Dependencies: [4186, 1325, 2]

// Module 10685
import { ApplicationStreamResolutions } from "makeButton";
import importDefaultResult from "getUnitId";

let obj = { videoPresetResolutionMax: ApplicationStreamResolutions.RESOLUTION_1440 };
obj = { name: "2026-02-go-live-video-preset-resolution", kind: "user" };
obj.defaultConfig = obj;
obj = {};
const obj1 = {};
const merged = Object.assign(obj);
obj1["videoPresetResolutionMax"] = ApplicationStreamResolutions.RESOLUTION_1080;
obj[1] = obj1;
obj.variations = obj;
const importDefaultResultResult = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/go_live/GoLiveVideoPresetResolutionExperiment.tsx");

export default importDefaultResultResult;
