// Module ID: 1214
// Function ID: 1215
// Dependencies: []
// Exports: clearOneofValue, getOneofValue, getSelectedOneofValue, isOneofGroup, setOneofValue, setUnknownOneofValue

// Module 1214

export function isOneofGroup(oneofKind) {
  if (typeof oneofKind === "object") {
    if (null !== oneofKind) {
      if (oneofKind.hasOwnProperty("oneofKind")) {
        if ("string" === typeof oneofKind.oneofKind) {
          let tmp3 = undefined !== oneofKind[oneofKind.oneofKind];
          if (tmp3) {
            const _Object2 = Object;
            tmp3 = 2 == Object.keys(oneofKind).length;
          }
          return tmp3;
        } else if ("undefined" === typeof oneofKind.oneofKind) {
          const _Object = Object;
          return 1 == Object.keys(oneofKind).length;
        } else {
          return false;
        }
      }
    }
  }
  return false;
}
export function getOneofValue(arg0, arg1) {
  return arg0[arg1];
}
export function setOneofValue(oneofKind, oneofKind2, arg2) {
  if (undefined !== oneofKind.oneofKind) {
    delete tmp[oneofKind.oneofKind];
  }
  oneofKind.oneofKind = oneofKind2;
  if (undefined !== arg2) {
    oneofKind[oneofKind2] = arg2;
  }
}
export function setUnknownOneofValue(oneofKind, oneofKind2, arg2) {
  if (undefined !== oneofKind.oneofKind) {
    delete tmp[oneofKind.oneofKind];
  }
  oneofKind.oneofKind = oneofKind2;
  const tmp2 = undefined !== arg2 && undefined !== oneofKind2;
  if (tmp2) {
    oneofKind[oneofKind2] = arg2;
  }
}
export function clearOneofValue(oneofKind) {
  if (undefined !== oneofKind.oneofKind) {
    delete tmp[oneofKind.oneofKind];
  }
  oneofKind.oneofKind = undefined;
}
export function getSelectedOneofValue(oneofKind) {
  return undefined !== oneofKind.oneofKind ? oneofKind[oneofKind.oneofKind] : undefined;
}
