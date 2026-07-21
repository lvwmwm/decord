// Module ID: 12681
// Function ID: 97361
// Name: cmp
// Dependencies: []

// Module 12681 (cmp)

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
            return require(dependencyMap[1])(_require1, arg2, arg3);
          } else if (">" === arg1) {
            return require(dependencyMap[2])(_require1, arg2, arg3);
          } else if (">=" === arg1) {
            return require(dependencyMap[3])(_require1, arg2, arg3);
          } else if ("<" === arg1) {
            return require(dependencyMap[4])(_require1, arg2, arg3);
          } else if ("<=" === arg1) {
            return require(dependencyMap[5])(_require1, arg2, arg3);
          } else {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const typeError = new TypeError("Invalid operator: " + arg1);
            throw typeError;
          }
        }
      }
    }
    return require(dependencyMap[0])(_require1, arg2, arg3);
  }
};
