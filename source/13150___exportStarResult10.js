// Module ID: 13150
// Function ID: 101444
// Name: __exportStarResult10
// Dependencies: [13147]

// Module 13150 (__exportStarResult10)
const require = arg1;
const dependencyMap = arg6;
arg5.IsWellFormedUnitIdentifier = function IsWellFormedUnitIdentifier(GetOptionResult3) {
  let tmp;
  let tmp2;
  const str = (function toLowerCase(GetOptionResult3) {
    return GetOptionResult3.replace(/([A-Z])/g, (arg0, str) => str.toLowerCase());
  })(GetOptionResult3);
  if (require(13147) /* __exportStarResult7 */.IsSanctionedSimpleUnitIdentifier(str)) {
    return true;
  } else {
    const parts = str.split("-per-");
    if (2 !== parts.length) {
      return false;
    } else {
      [tmp, tmp2] = parts;
      if (require(13147) /* __exportStarResult7 */.IsSanctionedSimpleUnitIdentifier(tmp)) {
        if (require(13147) /* __exportStarResult7 */.IsSanctionedSimpleUnitIdentifier(tmp2)) {
          return true;
        }
      }
      return false;
    }
  }
};
