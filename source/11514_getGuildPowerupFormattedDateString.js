// Module ID: 11514
// Function ID: 89735
// Name: getGuildPowerupFormattedDateString
// Dependencies: []
// Exports: default

// Module 11514 (getGuildPowerupFormattedDateString)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
