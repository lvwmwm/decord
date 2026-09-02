// Module ID: 1174
// Function ID: 1175
// Name: ignoreRequireCycleLogs
// Dependencies: [17]
// Exports: ignoreRequireCycleLogs

// Module 1174 (ignoreRequireCycleLogs)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const LogBox = get_ActivityIndicator.LogBox;

export const ignoreRequireCycleLogs = function ignoreRequireCycleLogs(version) {
  let tmp = version;
  if (version) {
    tmp = 0 === version.major;
  }
  if (tmp) {
    tmp = version.minor < 70;
  }
  if (tmp) {
    LogBox.ignoreLogs(["Require cycle:"]);
  }
};
