// Module ID: 139
// Function ID: 2259
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 139 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getChildElements(arg0) {
  const childNodes = arg1(dependencyMap[9]).getChildNodes(arg0);
  return childNodes.filter((arg0) => arg0 instanceof closure_8);
}
function _getBoundingClientRect(arg0, includeTransform) {
  const nativeElementReference = includeTransform(dependencyMap[6]).getNativeElementReference(arg0);
  if (null != nativeElementReference) {
    const boundingClientRect = importDefault(dependencyMap[7]).getBoundingClientRect(nativeElementReference, includeTransform.includeTransform);
    let tmp12 = importDefault(dependencyMap[10]);
    const prototype2 = tmp12.prototype;
    tmp12 = new tmp12(boundingClientRect[0], boundingClientRect[1], boundingClientRect[2], boundingClientRect[3]);
    return tmp12;
  } else {
    let tmp4 = importDefault(dependencyMap[10]);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(0, 0, 0, 0);
    return tmp4;
  }
  const obj = includeTransform(dependencyMap[6]);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class ReadOnlyElement {
    constructor() {
      self = this;
      tmp = closure_3(this, ReadOnlyElement);
      obj = closure_6(ReadOnlyElement);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ReadOnlyElement;
  callback2(ReadOnlyElement, arg0);
  let obj = {
    key: "childElementCount",
    get() {
      return callback5(this).length;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "children",
    get() {
      return ReadOnlyElement(closure_2[5]).createHTMLCollection(callback5(this));
    }
  };
  items[1] = obj;
  obj = {
    key: "clientHeight",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = callback(closure_2[7]).getInnerSize(nativeElementReference)[1];
        const obj2 = callback(closure_2[7]);
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clientLeft",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = callback(closure_2[7]).getBorderWidth(nativeElementReference)[3];
        const obj2 = callback(closure_2[7]);
      }
      return num;
    }
  };
  items[4] = {
    key: "clientTop",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = callback(closure_2[7]).getBorderWidth(nativeElementReference)[0];
        const obj2 = callback(closure_2[7]);
      }
      return num;
    }
  };
  items[5] = {
    key: "clientWidth",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = callback(closure_2[7]).getInnerSize(nativeElementReference)[0];
        const obj2 = callback(closure_2[7]);
      }
      return num;
    }
  };
  items[6] = {
    key: "firstElementChild",
    get() {
      const arr = callback5(this);
      let first = null;
      if (0 !== arr.length) {
        first = arr[0];
      }
      return first;
    }
  };
  items[7] = {
    key: "id",
    get() {
      const instanceHandle = ReadOnlyElement(closure_2[6]).getInstanceHandle(this);
      let currentProps;
      if (null != instanceHandle) {
        const stateNode = instanceHandle.stateNode;
        if (null != stateNode) {
          const canonical = stateNode.canonical;
          if (null != canonical) {
            currentProps = canonical.currentProps;
          }
        }
      }
      let id;
      if (null != currentProps) {
        id = currentProps.id;
      }
      if (null == id) {
        let nativeID;
        if (null != currentProps) {
          nativeID = currentProps.nativeID;
        }
        id = nativeID;
      }
      let str = "";
      if (null != id) {
        str = id;
      }
      return str;
    }
  };
  items[8] = {
    key: "lastElementChild",
    get() {
      const arr = callback5(this);
      let tmp = null;
      if (0 !== arr.length) {
        tmp = arr[arr.length - 1];
      }
      return tmp;
    }
  };
  items[9] = {
    key: "nextElementSibling",
    get() {
      return ReadOnlyElement(closure_2[8]).getElementSibling(this, "next");
    }
  };
  items[10] = {
    key: "nodeName",
    get() {
      return this.tagName;
    }
  };
  items[11] = {
    key: "nodeType",
    get() {
      return callback(closure_2[9]).ELEMENT_NODE;
    }
  };
  items[12] = {
    key: "nodeValue",
    get() {
      return null;
    },
    set(arg0) {

    }
  };
  items[13] = {
    key: "previousElementSibling",
    get() {
      return ReadOnlyElement(closure_2[8]).getElementSibling(this, "previous");
    }
  };
  items[14] = {
    key: "scrollHeight",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = callback(closure_2[7]).getScrollSize(nativeElementReference)[1];
        const obj2 = callback(closure_2[7]);
      }
      return num;
    }
  };
  items[15] = {
    key: "scrollLeft",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = callback(closure_2[7]).getScrollPosition(nativeElementReference)[0];
        const obj2 = callback(closure_2[7]);
      }
      return num;
    }
  };
  items[16] = {
    key: "scrollTop",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = callback(closure_2[7]).getScrollPosition(nativeElementReference)[1];
        const obj2 = callback(closure_2[7]);
      }
      return num;
    }
  };
  items[17] = {
    key: "scrollWidth",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let num = 0;
      if (null != nativeElementReference) {
        num = callback(closure_2[7]).getScrollSize(nativeElementReference)[0];
        const obj2 = callback(closure_2[7]);
      }
      return num;
    }
  };
  items[18] = {
    key: "tagName",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let str = "";
      if (null != nativeElementReference) {
        str = callback(closure_2[7]).getTagName(nativeElementReference);
        const obj2 = callback(closure_2[7]);
      }
      return str;
    }
  };
  items[19] = {
    key: "textContent",
    get() {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let str = "";
      if (null != nativeElementReference) {
        str = callback(closure_2[7]).getTextContent(nativeElementReference);
        const obj2 = callback(closure_2[7]);
      }
      return str;
    }
  };
  items[20] = {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return callback6(this, { includeTransform: true });
    }
  };
  items[21] = {
    key: "hasPointerCapture",
    value: function hasPointerCapture(arg0) {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      let hasPointerCaptureResult = null != nativeElementReference;
      if (hasPointerCaptureResult) {
        hasPointerCaptureResult = callback(closure_2[7]).hasPointerCapture(nativeElementReference, arg0);
        const obj2 = callback(closure_2[7]);
      }
      return hasPointerCaptureResult;
    }
  };
  items[22] = {
    key: "setPointerCapture",
    value: function setPointerCapture(arg0) {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      if (null != nativeElementReference) {
        callback(closure_2[7]).setPointerCapture(nativeElementReference, arg0);
        const obj2 = callback(closure_2[7]);
      }
    }
  };
  items[23] = {
    key: "releasePointerCapture",
    value: function releasePointerCapture(arg0) {
      const nativeElementReference = ReadOnlyElement(closure_2[6]).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const result = callback(closure_2[7]).releasePointerCapture(nativeElementReference, arg0);
        const obj2 = callback(closure_2[7]);
      }
    }
  };
  return callback(ReadOnlyElement, items);
}(importDefault(dependencyMap[9]));

export default tmp2;
export const getBoundingClientRect = _getBoundingClientRect;
