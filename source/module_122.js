// Module ID: 122
// Function ID: 2095
// Dependencies: [123, 204]

// Module 122
import setUpDefaltReactNativeEnvironment from "setUpDefaltReactNativeEnvironment";
import { default as _default } from "PerformanceLogger";
import { default as _default2 } from "PerformanceLogger";

const timestamp = Date.now();
setUpDefaltReactNativeEnvironment = setUpDefaltReactNativeEnvironment.default();
_default.markPoint("initializeCore_start", require("PerformanceLogger").default.currentTimestamp() - (Date.now() - timestamp));
const currentTimestampResult = require("PerformanceLogger").default.currentTimestamp();
require("PerformanceLogger").default.markPoint("initializeCore_end");
