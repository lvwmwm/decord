// Module ID: 1
// Function ID: 102
// Dependencies: []

// Module 1
const _module = require(dependencyMap[0]);
_module.clear();
new require(dependencyMap[1]).default("app").log("Initializing app");
const loadIndex = require(dependencyMap[2]).default.loadIndex;
loadIndex.recordStart();
const loadImports = require(dependencyMap[2]).default.loadImports;
loadImports.recordStart();
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/debug/logAppStart.tsx");

export default null;
