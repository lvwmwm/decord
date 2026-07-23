// Module ID: 4785
// Function ID: 41605
// Name: parseBezierKnot
// Dependencies: [77, 57, 4745, 4762]

// Module 4785 (parseBezierKnot)
import importDefaultResult from "_defineProperty";
import _slicedToArray from "_slicedToArray";

const require = arg1;
function parseBezierKnot(dataView) {
  const items = [];
  let num = 0;
  do {
    let tmp = parsePathPoint;
    let arr = items.push(parsePathPoint(dataView, arg1 + num));
    num = num + 8;
  } while (num < 24);
  return items;
}
function parsePathPoint(dataView, sum2) {
  const items = [getFixedPointNumber(dataView, sum2 + 4, 8), getFixedPointNumber(dataView, sum2, 8)];
  return items;
}
function getFixedPointNumber(dataView, sum2, arg2) {
  const longAt = importDefault(4762).getLongAt(dataView, sum2);
  let num = -1;
  if (longAt >>> 31 === 0) {
    num = 1;
  }
  const obj = importDefault(4762);
  const obj2 = require(4745) /* getStringFromDataView */;
  const str2 = longAt & parseInt(require(4745) /* getStringFromDataView */.strRepeat("1", 32 - arg2), 2);
  const text = `${str.toString(2)}.`;
  const obj3 = require(4745) /* getStringFromDataView */;
  return num * obj3.parseFloatRadix(`${(2130706432 & longAt) >>> 32 - arg2.toString(2)}.` + require(4745) /* getStringFromDataView */.padStart(str2.toString(2), 32 - arg2, "0"), 2);
}
let obj = { CLOSED_SUBPATH_LENGTH: 0, CLOSED_SUBPATH_BEZIER_LINKED: 1, CLOSED_SUBPATH_BEZIER_UNLINKED: 2, OPEN_SUBPATH_LENGTH: 3, OPEN_SUBPATH_BEZIER_LINKED: 4, OPEN_SUBPATH_BEZIER_UNLINKED: 5, FILL_RULE: 6, CLIPBOARD: 7, INITIAL_FILL_RULE: 8 };
obj = {
  name: "PathInformation",
  description: function pathResource(byteLength) {
    const types = {};
    const paths = [];
    for (let num = 0; num < byteLength.byteLength; num = num + 26) {
      let tmp = importDefault;
      let tmp2 = dependencyMap;
      let obj2 = importDefault(4762);
      let shortAt = obj2.getShortAt(byteLength, num);
      let tmp4 = dependencyMap;
      let tmp5 = num;
      if (dependencyMap[shortAt]) {
        if (!types[shortAt]) {
          let tmp6 = dependencyMap;
          types[shortAt] = dependencyMap[shortAt].description;
        }
        let obj = { type: shortAt };
        let tmp7 = dependencyMap;
        let obj4 = dependencyMap[shortAt];
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
    return callback(require(4745) /* getStringFromDataView */.getPascalStringFromDataView(getUint8, 0), 2)[1];
  }
};
let closure_4 = importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult(importDefaultResult({}, obj.CLOSED_SUBPATH_LENGTH, {
  description: "Closed subpath length",
  path(dataView, sum) {
    const items = [importDefault(4762).getShortAt(dataView, sum)];
    return items;
  }
}), obj.CLOSED_SUBPATH_BEZIER_LINKED, { description: "Closed subpath Bezier knot, linked", path: parseBezierKnot }), obj.CLOSED_SUBPATH_BEZIER_UNLINKED, { description: "Closed subpath Bezier knot, unlinked", path: parseBezierKnot }), obj.OPEN_SUBPATH_LENGTH, {
  description: "Open subpath length",
  path(dataView, sum) {
    const items = [importDefault(4762).getShortAt(dataView, sum)];
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
    const items = [importDefault(4762).getShortAt(dataView, sum)];
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
