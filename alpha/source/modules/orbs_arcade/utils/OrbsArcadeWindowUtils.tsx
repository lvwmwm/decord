// Module ID: 17026
// Function ID: 17027
// Name: OrbsArcadeWindowUtils
// Dependencies: [1113, 2]
// Exports: formatOrbsArcadeTimeUntil

// Module 17026 (OrbsArcadeWindowUtils)
import intl4 from "intl" /* 1113 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/orbs_arcade/utils/OrbsArcadeWindowUtils.tsx");

export function formatOrbsArcadeTimeUntil(timeUntilNextRound) {
  let days;
  let formatToPlainStringResult;
  let hours;
  ({ days, hours } = timeUntilNextRound);
  if (days > 0) {
    const intl3 = intl4.intl;
    const obj2 = { days };
    formatToPlainStringResult = intl3.formatToPlainString(intl4.t.GBLpQ8, obj2);
  } else if (hours > 0) {
    const intl2 = intl4.intl;
    const obj3 = { hours };
    formatToPlainStringResult = intl2.formatToPlainString(intl4.t.rhY1Rs, obj3);
  } else {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Math = Math;
    const obj = { minutes: Math.max(tmp, 1) };
    const prop = intl4.t["XIGt+W"];
    formatToPlainStringResult = formatToPlainString(prop, obj);
  }
  return formatToPlainStringResult;
}
