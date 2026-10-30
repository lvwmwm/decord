// Module ID: 16003
// Function ID: 16004
// Name: IsWellFormedUnitIdentifier
// Dependencies: [16000]
// Exports: IsWellFormedUnitIdentifier

// Module 16003 (IsWellFormedUnitIdentifier)
import SANCTIONED_UNITS from "SANCTIONED_UNITS" /* 16000 */;


export function IsWellFormedUnitIdentifier(GetOptionResult3) {
  let tmp3;
  let tmp4;
  const str = GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp3, tmp4] = parts;
      if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(tmp3)) {
        if (SANCTIONED_UNITS.IsSanctionedSimpleUnitIdentifier(tmp4)) {
          return true;
        }
      }
      return false;
    }
  }
}
