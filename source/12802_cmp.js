// Module ID: 12802
// Function ID: 99550
// Name: cmp
// Dependencies: [12798, 12799, 12796, 12800, 12797, 12801]

// Module 12802 (cmp)

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
            return require(12799) /* neq */(_require1, arg2, arg3);
          } else if (">" === arg1) {
            return require(12796) /* gt */(_require1, arg2, arg3);
          } else if (">=" === arg1) {
            return require(12800) /* gte */(_require1, arg2, arg3);
          } else if ("<" === arg1) {
            return require(12797) /* lt */(_require1, arg2, arg3);
          } else if ("<=" === arg1) {
            return require(12801) /* lte */(_require1, arg2, arg3);
          } else {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const typeError = new TypeError("Invalid operator: " + arg1);
            throw typeError;
          }
        }
      }
    }
    return require(12798) /* eq */(_require1, arg2, arg3);
  }
};
