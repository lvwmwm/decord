// Module ID: 122
// Function ID: 2095
// Dependencies: []

// Module 122
const timestamp = Date.now();
const _module = require(dependencyMap[0]);
_module.default();
const _default = require(dependencyMap[1]).default;
const _default2 = require(dependencyMap[1]).default;
_default.markPoint("initializeCore_start", require(dependencyMap[1]).default.currentTimestamp() - (Date.now() - timestamp));
const currentTimestampResult = require(dependencyMap[1]).default.currentTimestamp();
require(dependencyMap[1]).default.markPoint("initializeCore_end");
