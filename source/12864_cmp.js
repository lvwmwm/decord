// Module ID: 12864
// Function ID: 99998
// Name: cmp
// Dependencies: [12860, 12861, 12858, 12862, 12859, 12863]

// Module 12864 (cmp)

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
            return require(12861) /* neq */(_require1, arg2, arg3);
          } else if (">" === arg1) {
            return require(12858) /* gt */(_require1, arg2, arg3);
          } else if (">=" === arg1) {
            return require(12862) /* gte */(_require1, arg2, arg3);
          } else if ("<" === arg1) {
            return require(12859) /* lt */(_require1, arg2, arg3);
          } else if ("<=" === arg1) {
            return require(12863) /* lte */(_require1, arg2, arg3);
          } else {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const typeError = new TypeError("Invalid operator: " + arg1);
            throw typeError;
          }
        }
      }
    }
    return require(12860) /* eq */(_require1, arg2, arg3);
  }
};
