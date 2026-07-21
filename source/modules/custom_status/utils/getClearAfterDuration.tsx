// Module ID: 11892
// Function ID: 92088
// Name: getClearAfterDuration
// Dependencies: []
// Exports: default

// Module 11892 (getClearAfterDuration)
const ClearAfterValues = require(dependencyMap[0]).ClearAfterValues;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/custom_status/utils/getClearAfterDuration.tsx");

export default function getClearAfterDuration(arg0) {
  let DAY = arg0;
  if (arg0 === ClearAfterValues.TODAY) {
    DAY = importDefault(dependencyMap[1]).Millis.DAY;
  } else {
    importDefault(dependencyMap[2])("number" === typeof DAY, "Invalid custom status clear timeout");
  }
  return DAY;
};
