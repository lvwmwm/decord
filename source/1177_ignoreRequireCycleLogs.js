// Module ID: 1177
// Function ID: 1178
// Name: ignoreRequireCycleLogs
// Dependencies: [17]
// Exports: ignoreRequireCycleLogs

// Module 1177 (ignoreRequireCycleLogs)
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
