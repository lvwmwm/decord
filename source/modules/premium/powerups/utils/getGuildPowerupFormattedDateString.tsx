// Module ID: 11521
// Function ID: 89759
// Name: getGuildPowerupFormattedDateString
// Dependencies: []
// Exports: default

// Module 11521 (getGuildPowerupFormattedDateString)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/premium/powerups/utils/getGuildPowerupFormattedDateString.tsx");

export default function getGuildPowerupFormattedDateString(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { 1618834222: false, -1200702078: false };
  }
  return new Date(arg0).toLocaleDateString(locale.locale, obj);
};
