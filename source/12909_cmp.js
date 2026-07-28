// Module ID: 12909
// Function ID: 100176
// Name: cmp
// Dependencies: [12905, 12906, 12903, 12907, 12904, 12908]

// Module 12909 (cmp)

export default function cmp(_require1) {
  if ("===" === arg1) {
    let version3 = _require1;
    if ("object" === typeof _require1) {
      version3 = _require1.version;
    }
    let version4 = arg2;
    if ("object" === typeof arg2) {
      version4 = arg2.version;
    }
    return version3 === version4;
  } else if ("!==" === arg1) {
    let version = _require1;
    if ("object" === typeof _require1) {
      version = _require1.version;
    }
    let version2 = arg2;
    if ("object" === typeof arg2) {
      version2 = arg2.version;
    }
    return version !== version2;
  } else {
    if ("" !== arg1) {
      if ("=" !== arg1) {
        if ("==" !== arg1) {
          if ("!=" === arg1) {
            return require(12906) /* neq */(_require1, arg2, arg3);
          } else if (">" === arg1) {
            return require(12903) /* gt */(_require1, arg2, arg3);
          } else if (">=" === arg1) {
            return require(12907) /* gte */(_require1, arg2, arg3);
          } else if ("<" === arg1) {
            return require(12904) /* lt */(_require1, arg2, arg3);
          } else if ("<=" === arg1) {
            return require(12908) /* lte */(_require1, arg2, arg3);
          } else {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const typeError = new TypeError("Invalid operator: " + arg1);
            throw typeError;
          }
        }
      }
    }
    return require(12905) /* eq */(_require1, arg2, arg3);
  }
};
