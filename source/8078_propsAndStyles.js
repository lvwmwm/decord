// Module ID: 8078
// Function ID: 64026
// Name: propsAndStyles
// Dependencies: [65, 8079, 8070, 8080, 8083, 8071, 8069]
// Exports: extract, withoutXY

// Module 8078 (propsAndStyles)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
function propsAndStyles(props) {
  const style = props.style;
  let merged = props;
  if (style) {
    const _Array = Array;
    let applyResult = style;
    if (Array.isArray(style)) {
      const _Object = Object;
      const _Object2 = Object;
      const items = [{}];
      applyResult = assign.apply(Object, items.concat(callback(style)));
    }
    merged = Object.assign({}, applyResult, props);
  }
  return merged;
}
function getMarker(markerEnd) {
  if (markerEnd) {
    let tmp3;
    const match = markerEnd.match(require(8079) /* pickNotNil */.idPattern);
    if (match) {
      tmp3 = match[1];
    }
    return tmp3;
  }
}
function extractProps(markerMid, self) {
  let accessibilityLabel;
  let accessible;
  let clipPath;
  let clipRule;
  let display;
  let filter;
  let id;
  let marker;
  let markerStart;
  let mask;
  let onLayout;
  let opacity;
  let testID;
  ({ id, opacity, onLayout, clipPath, clipRule, display, mask, filter, marker, markerStart } = markerMid);
  if (undefined === markerStart) {
    markerStart = marker;
  }
  markerMid = markerMid.markerMid;
  if (undefined === markerMid) {
    markerMid = marker;
  }
  let markerEnd = markerMid.markerEnd;
  if (undefined === markerEnd) {
    markerEnd = marker;
  }
  ({ testID, accessibilityLabel, accessible } = markerMid);
  const obj = {};
  const items = [];
  importDefault(8070)(obj, markerMid, self);
  importDefault(8080)(obj, markerMid, items);
  importDefault(8083)(obj, markerMid, items);
  if (markerMid.color) {
    obj.color = markerMid.color;
  }
  if (items.length) {
    obj.propList = items;
  }
  const tmp4 = importDefault(8071)(markerMid);
  if (null !== tmp4) {
    obj.matrix = tmp4;
  }
  if (null != opacity) {
    obj.opacity = importDefault(8069)(opacity);
  }
  if (null != display) {
    let str2;
    if ("none" === display) {
      str2 = "none";
    }
    obj.display = str2;
  }
  if (onLayout) {
    obj.onSvgLayout = onLayout;
  }
  if (markerStart) {
    obj.markerStart = getMarker(markerStart);
  }
  if (markerMid) {
    obj.markerMid = getMarker(markerMid);
  }
  if (markerEnd) {
    obj.markerEnd = getMarker(markerEnd);
  }
  if (id) {
    const _String = String;
    obj.name = String(id);
  }
  if (testID) {
    obj.testID = testID;
  }
  if (accessibilityLabel) {
    obj.accessibilityLabel = accessibilityLabel;
  }
  if (accessible) {
    obj.accessible = accessible;
  }
  if (clipRule) {
    let num2 = 1;
    if (0 === table[clipRule]) {
      num2 = 0;
    }
    obj.clipRule = num2;
  }
  if (clipPath) {
    const match = clipPath.match(require(8079) /* pickNotNil */.idPattern);
    if (match) {
      obj.clipPath = match[1];
    } else {
      const _console = console;
      console.warn(`Invalid \`clipPath\` prop, expected a clipPath like "#id", but got: "${clipPath}"`);
    }
  }
  if (mask) {
    const match1 = mask.match(require(8079) /* pickNotNil */.idPattern);
    if (match1) {
      obj.mask = match1[1];
    } else {
      const _console2 = console;
      console.warn(`Invalid \`mask\` prop, expected a mask like "#id", but got: "${mask}"`);
    }
  }
  if (filter) {
    const match2 = filter.match(require(8079) /* pickNotNil */.idPattern);
    if (match2) {
      obj.filter = match2[1];
    } else {
      const _console3 = console;
      console.warn(`Invalid \`filter\` prop, expected a filter like "#id", but got: "${filter}"`);
    }
  }
  return obj;
}
let closure_4 = { evenodd: 0, nonzero: 1 };

export default extractProps;
export { propsAndStyles };
export const extract = function extract(self, props) {
  return extractProps(propsAndStyles(props), self);
};
export const withoutXY = function withoutXY(self, props) {
  return extractProps(Object.assign({}, propsAndStyles(props), { x: null, y: null }), self);
};
