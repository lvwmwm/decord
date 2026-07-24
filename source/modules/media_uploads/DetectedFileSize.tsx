// Module ID: 4710
// Function ID: 40980
// Name: _getDetectedFileSize
// Dependencies: [5, 2]
// Exports: getDetectedFileSize

// Module 4710 (_getDetectedFileSize)
import asyncGeneratorStep from "asyncGeneratorStep";

async function _getDetectedFileSize(arg0, arg1) {
  let asyncGeneratorStep = arg0;
  if (arg0.size > 0) {
    return arg0.size;
  } else {
    return yield new Promise((asyncGeneratorStep) => {
      let closure_1 = arg1;
      const fileReader = new FileReader();
      const timeout = setTimeout(() => {
        const error = new Error("File read timeout");
        callback2(error);
      }, 10000);
      fileReader.onload = (target) => {
        clearTimeout(closure_2);
        target = target.target;
        let result;
        if (null != target) {
          result = target.result;
        }
        if (result instanceof ArrayBuffer) {
          callback(result.byteLength);
        } else {
          const _Error = Error;
          const error = new Error("Unexpected FileReader result type");
          callback2(error);
        }
      };
      fileReader.onerror = () => {
        clearTimeout(closure_2);
        const error = new Error("Could not read file");
        callback2(error);
      };
      const asArrayBuffer = fileReader.readAsArrayBuffer(asyncGeneratorStep);
    });
  }
}
let result = require("set").fileFinishedImporting("modules/media_uploads/DetectedFileSize.tsx");

export const getDetectedFileSize = function getDetectedFileSize() {
  return _getDetectedFileSize(...arguments);
};
