// Module ID: 1053
// Function ID: 1054
// Name: react-native
// Dependencies: [17]
// Exports: ignoreRequireCycleLogs

// Module 1053 (react-native)
import react_native from "react-native" /* 17 */;

const LogBox = react_native.LogBox;

export const ignoreRequireCycleLogs = function ignoreRequireCycleLogs(version) {
  const tmp = version && 0 === version.major && version.minor < 70;
  if (tmp) {
    LogBox.ignoreLogs(["Require cycle:"]);
  }
};
