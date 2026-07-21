// Module ID: 12633
// Function ID: 97235
// Name: dispatchAutoDisableVideo
// Dependencies: []
// Exports: default

// Module 12633 (dispatchAutoDisableVideo)
const MediaEngineContextTypes = require(dependencyMap[0]).MediaEngineContextTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(arg0, arg1) {
  const importDefault = arg0;
  const dependencyMap = arg1;
  importDefault(dependencyMap[1]).wait(() => {
    let obj = arg0(arg1[1]);
    obj = { "Bool(true)": 48, "Bool(true)": 10, "Bool(true)": 4, "Bool(true)": 1173, "Bool(true)": 1175, "Bool(true)": null, context: constants.DEFAULT, userId: arg0, videoToggleState: arg1 };
    obj.dispatch(obj);
  });
};
