// Module ID: 1153
// Function ID: 13137
// Name: ignoreRequireCycleLogs
// Dependencies: [27]
// Exports: ignoreRequireCycleLogs

// Module 1153 (ignoreRequireCycleLogs)
import { LogBox } from "get ActivityIndicator";


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
