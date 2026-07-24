// Module ID: 3537
// Function ID: 27386
// Name: setUTCISODay
// Dependencies: [3209, 3210, 3213]
// Exports: default

// Module 3537 (setUTCISODay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function setUTCISODay(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = toInteger.default(defaultResult1);
  let diff = defaultResult1;
  if (defaultResult1 % 7 === 0) {
    diff = defaultResult1 - 7;
  }
  const defaultResult2 = _typeof.default(defaultResult1);
  let num = 0;
  const uTCDay = defaultResult2.getUTCDay();
  if ((diff % 7 + 7) % 7 < 1) {
    num = 7;
  }
  const diff1 = num + diff - uTCDay;
  defaultResult2.setUTCDate(defaultResult2.getUTCDate() + diff1);
  return defaultResult2;
};
export default exports.default;
