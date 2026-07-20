// Module ID: 4781
// Function ID: 41530
// Name: parseBezierKnot
// Dependencies: []

// Module 4781 (parseBezierKnot)
function parseBezierKnot(arg0, arg1) {
  const items = [];
  let num = 0;
  do {
    let tmp = closure_5;
    let arr = items.push(closure_5(arg0, arg1 + num));
    num = num + 8;
  } while (num < 24);
  return items;
}
function parsePathPoint(dataView, sum2) {
  const items = [getFixedPointNumber(dataView, sum2 + 4, 8), getFixedPointNumber(dataView, sum2, 8)];
  return items;
}
function getFixedPointNumber(dataView, sum2, arg2) {
  const longAt = importDefault(dependencyMap[3]).getLongAt(dataView, sum2);
  let num = -1;
  if (longAt >>> 31 === 0) {
    num = 1;
  }
  const obj = importDefault(dependencyMap[3]);
  const obj2 = sum2(dependencyMap[2]);
  const str2 = longAt & parseInt(sum2(dependencyMap[2]).strRepeat("1", 32 - arg2), 2);
  const text = `${str.toString(2)}.`;
  const obj3 = sum2(dependencyMap[2]);
  return num * obj3.parseFloatRadix(`${(2130706432 & longAt) >>> 32 - arg2.toString(2)}.` + sum2(dependencyMap[2]).padStart(str2.toString(2), 32 - arg2, "0"), 2);
}
const importDefaultResult = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let obj = {};
obj = {
  name: "PathInformation",
  description: function pathResource(byteLength) {
    const types = {};
    const paths = [];
    for (let num = 0; num < byteLength.byteLength; num = num + 26) {
      let tmp = importDefault;
      let tmp2 = dependencyMap;
      let obj2 = importDefault(dependencyMap[3]);
      let shortAt = obj2.getShortAt(byteLength, num);
      let tmp4 = closure_4;
      let tmp5 = num;
      if (closure_4[shortAt]) {
        if (!types[shortAt]) {
          let tmp6 = closure_4;
          types[shortAt] = closure_4[shortAt].description;
        }
        let obj = { type: shortAt };
        let tmp7 = closure_4;
        let obj4 = closure_4[shortAt];
        obj.path = obj4.path(byteLength, num + 2);
        let arr = paths.push(obj);
      }
    }
    return JSON.stringify({ types, paths });
  }
};
obj = {
  name: "ClippingPathName",
  description(getUint8) {
    return callback(arg1(dependencyMap[2]).getPascalStringFromDataView(getUint8, 0), 2)[1];
  }
};
let closure_4 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, obj.CLOSED_SUBPATH_LENGTH, {
  description: "Closed subpath length",
  path(dataView, sum) {
    const items = [importDefault(dependencyMap[3]).getShortAt(dataView, sum)];
    return items;
  }
}), obj.CLOSED_SUBPATH_BEZIER_LINKED, { description: "Closed subpath Bezier knot, linked", path: parseBezierKnot }), obj.CLOSED_SUBPATH_BEZIER_UNLINKED, { description: "Closed subpath Bezier knot, unlinked", path: parseBezierKnot }), obj.OPEN_SUBPATH_LENGTH, {
  description: "Open subpath length",
  path(dataView, sum) {
    const items = [importDefault(dependencyMap[3]).getShortAt(dataView, sum)];
    return items;
  }
}), obj.OPEN_SUBPATH_BEZIER_LINKED, { description: "Open subpath Bezier knot, linked", path: parseBezierKnot }), obj.OPEN_SUBPATH_BEZIER_UNLINKED, { description: "Open subpath Bezier knot, unlinked", path: parseBezierKnot }), obj.FILL_RULE, {
  description: "Path fill rule",
  path() {
    return [];
  }
}), obj.INITIAL_FILL_RULE, {
  description: "Initial fill rule",
  path(dataView, sum) {
    const items = [importDefault(dependencyMap[3]).getShortAt(dataView, sum)];
    return items;
  }
}), obj.CLIPBOARD, {
  description: "Clipboard",
  path: function parseClipboard(dataView, sum2) {
    const items = [getFixedPointNumber(dataView, sum2, 8), getFixedPointNumber(dataView, sum2 + 4, 8), getFixedPointNumber(dataView, sum2 + 8, 8), getFixedPointNumber(dataView, sum2 + 12, 8)];
    const items1 = [items, getFixedPointNumber(dataView, sum2 + 16, 8)];
    return items1;
  }
});

export default { [2000]: obj, [2999]: obj };
export const PathRecordTypes = obj;
