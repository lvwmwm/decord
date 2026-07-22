// Module ID: 1153
// Function ID: 13135
// Name: ignoreRequireCycleLogs
// Dependencies: []
// Exports: ignoreRequireCycleLogs

// Module 1153 (ignoreRequireCycleLogs)
const LogBox = require(dependencyMap[0]).LogBox;

export const ignoreRequireCycleLogs = function ignoreRequireCycleLogs(version) {
  let tmp = version;
  if (version) {
    tmp = 0 === version.major;
  }
  if (tmp) {
    tmp = version.minor < 70;
  }
  if (tmp) {
    LogBox.ignoreLogs([null]);
  }
};
