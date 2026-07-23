// Module ID: 142
// Function ID: 2311
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 139, 135, 138, 143, 145]

// Module 142 (_isNativeReflectConstruct)
import getRendererProxy from "getRendererProxy";
import getRawNativeDOMForTests from "getRawNativeDOMForTests";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function noop() {

}

export default (function replaceConstructorWithoutSuper(arg0) {
  class ReactNativeElement {
    constructor(arg0, arg1, arg2, arg3) {
      obj = outer1_0(outer1_2[6]);
      setOwnerDocumentResult = obj.setOwnerDocument(this, arg3);
      obj2 = outer1_0(outer1_2[6]);
      setInstanceHandleResult = obj2.setInstanceHandle(this, arg2);
      this.__nativeTag = arg0;
      this.__internalInstanceHandle = arg2;
      this.__viewConfig = arg1;
      return;
    }
  }
  ReactNativeElement.prototype = arg0.prototype;
  return ReactNativeElement;
})(((arg0) => {
  class ReactNativeElement {
    constructor(arg0, arg1, arg2, arg3) {
      self = this;
      tmp = outer1_3(this, ReactNativeElement);
      items = [, ];
      items[0] = arg2;
      items[1] = arg3;
      obj = outer1_6(ReactNativeElement);
      tmp2 = outer1_5;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.__nativeTag = arg0;
      tmp2Result.__internalInstanceHandle = arg2;
      tmp2Result.__viewConfig = arg1;
      return tmp2Result;
    }
  }
  callback2(ReactNativeElement, arg0);
  let obj = {
    key: "offsetHeight",
    get() {
      return Math.round(ReactNativeElement(outer1_2[5]).getBoundingClientRect(this, { includeTransform: false }).height);
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "offsetLeft",
    get() {
      const nativeElementReference = ReactNativeElement(outer1_2[6]).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        return Math.round(outer1_1(outer1_2[7]).getOffset(nativeElementReference)[2]);
      } else {
        return 0;
      }
      const obj = ReactNativeElement(outer1_2[6]);
    }
  };
  items[1] = obj;
  obj = {
    key: "offsetParent",
    get() {
      const nativeElementReference = ReactNativeElement(outer1_2[6]).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const offset = outer1_1(outer1_2[7]).getOffset(nativeElementReference);
        if (null != offset[0]) {
          return ReactNativeElement(outer1_2[6]).getPublicInstanceFromInstanceHandle(offset[0]);
        }
        const obj2 = outer1_1(outer1_2[7]);
      }
      return null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "offsetTop",
    get() {
      const nativeElementReference = ReactNativeElement(outer1_2[6]).getNativeElementReference(this);
      if (null != nativeElementReference) {
        const _Math = Math;
        return Math.round(outer1_1(outer1_2[7]).getOffset(nativeElementReference)[1]);
      } else {
        return 0;
      }
      const obj = ReactNativeElement(outer1_2[6]);
    }
  };
  items[4] = {
    key: "offsetWidth",
    get() {
      return Math.round(ReactNativeElement(outer1_2[5]).getBoundingClientRect(this, { includeTransform: false }).width);
    }
  };
  items[5] = {
    key: "blur",
    value: function blur() {
      outer1_1(outer1_2[8]).blurTextInput(this);
    }
  };
  items[6] = {
    key: "focus",
    value: function focus() {
      outer1_1(outer1_2[8]).focusTextInput(this);
    }
  };
  items[7] = {
    key: "measure",
    value: function measure(arg0) {
      const nativeElementReference = ReactNativeElement(outer1_2[6]).getNativeElementReference(this);
      if (null != nativeElementReference) {
        outer1_1(outer1_2[7]).measure(nativeElementReference, arg0);
        const obj2 = outer1_1(outer1_2[7]);
      }
    }
  };
  items[8] = {
    key: "measureInWindow",
    value: function measureInWindow(arg0) {
      const nativeElementReference = ReactNativeElement(outer1_2[6]).getNativeElementReference(this);
      if (null != nativeElementReference) {
        outer1_1(outer1_2[7]).measureInWindow(nativeElementReference, arg0);
        const obj2 = outer1_1(outer1_2[7]);
      }
    }
  };
  items[9] = {
    key: "measureLayout",
    value: function measureLayout(arg0, arg1, arg2) {
      let tmp = arg1;
      let tmp2 = arg2;
      if (arg0 instanceof ReactNativeElement) {
        const self = this;
        const nativeElementReference = ReactNativeElement(outer1_2[6]).getNativeElementReference(this);
        const obj = ReactNativeElement(outer1_2[6]);
        const nativeElementReference1 = ReactNativeElement(outer1_2[6]).getNativeElementReference(arg0);
        if (tmp8) {
          const obj3 = outer1_1(outer1_2[7]);
          if (null == tmp2) {
            tmp2 = outer1_8;
          }
          if (null == tmp) {
            tmp = outer1_8;
          }
          obj3.measureLayout(nativeElementReference, nativeElementReference1, tmp2, tmp);
        }
        const obj2 = ReactNativeElement(outer1_2[6]);
        tmp8 = null != nativeElementReference && null != nativeElementReference1;
      }
    }
  };
  items[10] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      let obj = ReactNativeElement(outer1_2[9]);
      obj = obj.create(arg0, this.__viewConfig.validAttributes);
      const nativeElementReference = ReactNativeElement(outer1_2[6]).getNativeElementReference(this);
      if (tmp3) {
        outer1_1(outer1_2[7]).setNativeProps(nativeElementReference, obj);
        const obj3 = outer1_1(outer1_2[7]);
      }
    }
  };
  return callback(ReactNativeElement, items);
})(require("_isNativeReflectConstruct")));
