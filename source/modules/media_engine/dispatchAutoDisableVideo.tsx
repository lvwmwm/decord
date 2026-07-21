// Module ID: 12631
// Function ID: 97213
// Name: dispatchAutoDisableVideo
// Dependencies: []
// Exports: default

// Module 12631 (dispatchAutoDisableVideo)
const MediaEngineContextTypes = require(dependencyMap[0]).MediaEngineContextTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/media_engine/dispatchAutoDisableVideo.tsx");

export default function dispatchAutoDisableVideo(arg0, arg1) {
  const importDefault = arg0;
  const dependencyMap = arg1;
  importDefault(dependencyMap[1]).wait(() => {
    let obj = arg0(arg1[1]);
    obj = { "Bool(false)": 48, "Bool(false)": 10, "Bool(false)": 4, "Bool(false)": 1173, "Bool(false)": 1175, "Bool(false)": null, context: constants.DEFAULT, userId: arg0, videoToggleState: arg1 };
    obj.dispatch(obj);
  });
};
