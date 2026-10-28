// Module ID: 15727
// Function ID: 15728
// Name: IsWellFormedUnitIdentifier
// Dependencies: [15724]
// Exports: IsWellFormedUnitIdentifier

// Module 15727 (IsWellFormedUnitIdentifier)
import SANCTIONED_UNITS from "SANCTIONED_UNITS" /* 15724 */;


export const IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
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
};
