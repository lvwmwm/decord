// Module ID: 276
// Function ID: 3434
// Dependencies: [277, 278, 279]

// Module 276
import { default as _default } from "NativeStartupFlagsModule";
import describeBuiltInComponentFrame from "describeBuiltInComponentFrame";

if (null != _default) {
  if (null != _default.reactProfilingEnabled) {
    if (_default.reactProfilingEnabled()) {
      let describeBuiltInComponentFrame = require("describeBuiltInComponentFrame");
    }
    exports.default = describeBuiltInComponentFrame;
  }
}
