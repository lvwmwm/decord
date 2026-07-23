// Module ID: 139
// Function ID: 2259
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 132, 135, 138, 140, 134, 127]

// Module 139 (_isNativeReflectConstruct)
import getRendererProxy from "getRendererProxy";
import getRawNativeDOMForTests from "getRawNativeDOMForTests";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "getChildNodes";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getChildElements(arg0) {
  const childNodes = require(134) /* getChildNodes */.getChildNodes(arg0);
  return childNodes.filter((arg0) => arg0 instanceof outer1_8);
}
function _getBoundingClientRect(arg0, includeTransform) {
  const nativeElementReference = require(135) /* getRendererProxy */.getNativeElementReference(arg0);
  if (null != nativeElementReference) {
    const boundingClientRect = importDefault(138).getBoundingClientRect(nativeElementReference, includeTransform.includeTransform);
    let tmp12 = importDefault(127);
    const prototype2 = tmp12.prototype;
    tmp12 = new tmp12(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
    return tmp12;
  } else {
    let tmp4 = importDefault(127);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(0, 0, 0, 0);
    return tmp4;
  }
  const obj = require(135) /* getRendererProxy */;
}
let closure_8 = tmp2;

export default tmp2;
export const getBoundingClientRect = _getBoundingClientRect;
