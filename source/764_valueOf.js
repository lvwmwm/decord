// Module ID: 764
// Function ID: 8824
// Name: valueOf
// Dependencies: []

// Module 764 (valueOf)
let prototype;
if (require(dependencyMap[0])) {
  prototype = require(dependencyMap[0]).prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function equalByTag(byteLength, byteLength2, arg2, arg3, arg4, arg5, get) {
  if ("[object DataView]" === arg2) {
    if (byteLength.byteLength == byteLength2.byteLength) {
      if (byteLength.byteOffset == byteLength2.byteOffset) {
        let buffer = byteLength.buffer;
        let buffer2 = byteLength2.buffer;
      }
    }
    return false;
  } else {
    buffer = byteLength;
    buffer2 = byteLength2;
    if ("[object ArrayBuffer]" !== arg2) {
      if ("[object Boolean]" !== arg2) {
        if ("[object Date]" !== arg2) {
          if ("[object Number]" !== arg2) {
            if ("[object Error]" === arg2) {
              return byteLength.name == byteLength2.name && byteLength.message == byteLength2.message;
            } else {
              if ("[object RegExp]" !== arg2) {
                if ("[object String]" !== arg2) {
                  if ("[object Map]" === arg2) {
                    let tmp = require(dependencyMap[3]);
                  } else if ("[object Set]" !== arg2) {
                    if ("[object Symbol]" === arg2) {
                      if (valueOf) {
                        return valueOf.call(byteLength) == valueOf.call(byteLength2);
                      }
                    }
                    return false;
                  }
                  if (!tmp) {
                    tmp = require(dependencyMap[4]);
                  }
                  if (byteLength.size != byteLength2.size) {
                    if (!tmp8) {
                      return false;
                    }
                  }
                  const value = get.get(byteLength);
                  if (value) {
                    return value == byteLength2;
                  } else {
                    const result = get.set(byteLength, byteLength2);
                    const tmpResult = tmp(byteLength);
                    const tmp12 = arg3 | 2;
                    const tmp16 = require(dependencyMap[5]);
                    get.delete(byteLength);
                    return require(dependencyMap[5])(tmpResult, tmp(byteLength2), arg3 | 2, arg4, arg5, get);
                  }
                  const tmp8 = 1 & arg3;
                }
              }
              return byteLength == "" + byteLength2;
            }
          }
        }
      }
      return require(dependencyMap[2])(+byteLength, +byteLength2);
    }
  }
  let tmp27 = buffer.byteLength != buffer2.byteLength;
  if (!tmp27) {
    let tmp30 = require(dependencyMap[1]);
    const prototype = tmp30.prototype;
    tmp30 = new tmp30(buffer);
    let tmp36 = require(dependencyMap[1]);
    const prototype2 = tmp36.prototype;
    tmp36 = new tmp36(buffer2);
    tmp27 = !arg5(tmp30, tmp36);
  }
  return !tmp27;
};
