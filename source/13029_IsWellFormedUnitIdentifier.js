// Module ID: 13029
// Function ID: 99255
// Name: IsWellFormedUnitIdentifier
// Dependencies: []

// Module 13029 (IsWellFormedUnitIdentifier)
arg5.IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  let tmp;
  let tmp2;
  const str = function toLowerCase(GetOptionResult3) {
    return GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  }(GetOptionResult3);
  if (arg1(arg6[0]).IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp, tmp2] = parts;
      if (arg1(arg6[0]).IsSanctionedSimpleUnitIdentifier(tmp)) {
        if (arg1(arg6[0]).IsSanctionedSimpleUnitIdentifier(tmp2)) {
          return true;
        }
      }
      return false;
    }
  }
};
